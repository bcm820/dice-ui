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
  const storedRepo = allRepos[randRepo.FullName];
  if (storedRepo && Date.now() - storedRepo.lastFetched < 1800000)
    return yield put({ type: actions.repo.success, payload: storedRepo });

  const acts = yield call(api('repoActivities', randRepo.FullName));

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
      createdAt: randRepo.CreatedAt,
      updatedAt: randRepo.UpdatedAt,
      activities: { short, long: long.length ? long[0] : null },
      lastFetched: Date.now()
    };
    yield all([
      put({ type: actions.repo.success, payload }),
      put({ type: actions.allRepos.success, payload })
    ]);
  }
}
