import { put, call, all, select } from 'redux-saga/effects';
import { actions } from '../../redux/actions';
import {
  getRandom,
  getWordLength,
  simpleParseTime,
  partition
} from '../../common/helpers';
import api from '../../common/api';
import {
  SHORT_SUMMARY_WORD_LENGTH,
  DATA_UPDATE_INTERVAL
} from '../../common/constants';

export function* sendRepoRequest() {
  const { repoList, allRepos } = yield select();

  const randRepo = getRandom(repoList.data);
  const storedRepo = allRepos[randRepo.FullName];
  if (storedRepo && Date.now() - storedRepo.lastFetched < DATA_UPDATE_INTERVAL)
    return yield put({ type: actions.repo.success, payload: storedRepo });

  const acts = yield call(api('getRepoActivities', randRepo.FullName));

  if (acts instanceof Error)
    yield put({ type: actions.repo.error, payload: acts });
  else {
    const { activity } = acts;
    const [short, long] = partition(
      activity,
      a => getWordLength(a.summaryline) <= SHORT_SUMMARY_WORD_LENGTH
    );
    const payload = {
      name: randRepo.FullName,
      description: randRepo.Description,
      language: randRepo.Language,
      createdAt: simpleParseTime(randRepo.CreatedAt),
      updatedAt: simpleParseTime(randRepo.UpdatedAt),
      activities: { short, long: long.length ? long[0] : null },
      lastFetched: Date.now()
    };
    yield all([
      put({ type: actions.repo.success, payload }),
      put({ type: actions.allRepos.success, payload })
    ]);
  }
}
