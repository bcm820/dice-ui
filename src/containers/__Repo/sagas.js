import { put, call, all, select } from 'redux-saga/effects';
import { actions } from '../../redux/actions';
import { getRandom } from '../../common/helpers';
import api from '../../common/api';
import { DATA_UPDATE_INTERVAL } from '../../common/constants';
import { mapRepo } from './selectors';

export function* sendRepoRequest() {
  try {
    const { repoList, allRepos } = yield select();
    const randRepo = getRandom(repoList.data);
    const storedRepo = allRepos[randRepo.name];
    const isUpToDate =
      storedRepo && Date.now() - storedRepo.lastFetched < DATA_UPDATE_INTERVAL;
    if (isUpToDate)
      return yield put({ type: actions.repo.success, payload: storedRepo });

    const activityData = yield call(api('getRepoActivities', randRepo.name));
    const payload = mapRepo(randRepo, activityData);
    yield all([
      put({ type: actions.repo.success, payload }),
      put({ type: actions.allRepos.success, payload })
    ]);
  } catch (e) {
    yield put({ type: actions.repo.error, payload: e });
  }
}
