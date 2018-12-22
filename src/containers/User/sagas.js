import { put, call, all, select } from 'redux-saga/effects';
import { actions } from '../../redux/actions';
import { getRandom, getWordLength, partition } from '../../common/helpers';
import api from '../../common/api';
import {
  SHORT_SUMMARY_WORD_LENGTH,
  DATA_UPDATE_INTERVAL
} from '../../common/constants';

export function* sendUserRequest() {
  const { userList, allUsers } = yield select();

  const randUser = getRandom(userList.data);
  const storedUser = allUsers[randUser.username];
  if (storedUser && Date.now() - storedUser.lastFetched < DATA_UPDATE_INTERVAL)
    return yield put({ type: actions.user.success, payload: storedUser });

  const [repos, acts] = yield all([
    call(api('userRepos', randUser.username)),
    call(api('userActivities', randUser.username))
  ]);

  if (repos instanceof Error)
    yield put({ type: actions.user.error, payload: repos });
  else if (acts instanceof Error)
    yield put({ type: actions.user.error, payload: acts });
  else {
    const { repository } = repos;
    const { activity } = acts;
    const [short, long] = partition(
      activity,
      a => getWordLength(a.summaryline) <= SHORT_SUMMARY_WORD_LENGTH
    );
    const payload = {
      name: randUser.display_name,
      username: randUser.username,
      image: randUser.avatar_url,
      email: randUser.email,
      repos: (repository || []).map(({ name }) => name),
      activities: { short, long: long.length ? long[0] : null },
      lastFetched: Date.now()
    };
    yield all([
      put({ type: actions.user.success, payload }),
      put({ type: actions.allUsers.success, payload })
    ]);
  }
}
