import { put, all } from 'redux-saga/effects';
import { actions } from '../actions';

import { generateParagraph } from '../utils';

let counter = 0;
export function* sendRepoRequest() {
  const paragraph = generateParagraph();
  const payload = { [counter++]: paragraph };
  yield all([
    put({ type: actions.repo.success, payload }),
    put({ type: actions.words.success, payload: paragraph.length })
  ]);
  yield put({ type: actions.allRepos.success, payload });
}
