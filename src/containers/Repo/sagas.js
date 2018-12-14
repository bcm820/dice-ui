import { put, call, all, select } from 'redux-saga/effects';
import { actions } from '../../actions';
import { getRandom, getWordLength } from '../../utils';
import api from '../../api';
import get from 'lodash.get';
import partition from 'lodash.partition';
import { SHORT_SUMMARY_WORD_LENGTH } from '../../constants';

export function* sendRepoRequest() {
  const { repo, repoList, allRepos } = yield select();
  const lastFetched = get(repo, 'data.lastFetched', null);
  if (lastFetched && Date.now() - lastFetched < 3000) return;

  const randRepo = getRandom(repoList.data);
  const storedRepo = allRepos[randRepo.name];
  if (storedRepo && Date.now() - storedRepo.lastFetched < 1800000)
    return yield put({ type: actions.repo.success, payload: storedRepo });

  const [userData, acts] = yield all([
    call(api('repoUsers', randRepo.name)),
    call(api('repoActivities', randRepo.name))
  ]);

  if (userData instanceof Error)
    yield put({ type: actions.repo.error, payload: userData });
  else if (acts instanceof Error)
    yield put({ type: actions.repo.error, payload: acts });
  else {
    const { users } = userData;
    const { activity } = acts;
    const [short, long] = partition(
      activity,
      a => getWordLength(a.summaryline) <= SHORT_SUMMARY_WORD_LENGTH
    );
    const payload = {
      name: randRepo.name,
      users,
      activities: { short, long: long.length ? long[0] : null },
      lastFetched: Date.now()
    };
    yield all([
      put({ type: actions.repo.success, payload }),
      put({ type: actions.allRepos.success, payload })
    ]);
  }
}
