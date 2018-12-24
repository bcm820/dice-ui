import { put, call, all, select } from 'redux-saga/effects';
import { actions } from '../../redux/actions';
import { getRandom } from '../../common/helpers';
import api from '../../common/api';
import { DATA_UPDATE_INTERVAL } from '../../common/constants';
import { mapUser } from './selectors';

export function* sendUserRequest() {
  try {
    const { userList, allUsers } = yield select();
    const randUser = getRandom(userList.data);
    const storedUser = allUsers[randUser.username];
    const isUpToDate =
      storedUser && Date.now() - storedUser.lastFetched < DATA_UPDATE_INTERVAL;
    if (isUpToDate)
      return yield put({ type: actions.user.success, payload: storedUser });

    const [activityData, repoData] = yield all([
      call(api('getUserActivities', randUser.username)),
      call(api('getUserRepos', randUser.username))
    ]);
    const payload = mapUser(randUser, activityData, repoData);
    yield all([
      put({ type: actions.user.success, payload }),
      put({ type: actions.allUsers.success, payload })
    ]);
  } catch (e) {
    yield put({ type: actions.user.error, payload: e });
  }
}
