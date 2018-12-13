import { put, all } from 'redux-saga/effects';
import { actions } from '../actions';

import { generateParagraph } from '../utils';

let counter = 0;
export function* sendUserRequest() {
  const paragraph = generateParagraph();
  const payload = { [counter++]: paragraph };
  yield all([
    put({ type: actions.user.success, payload }),
    put({ type: actions.words.success, payload: paragraph.length })
  ]);
  yield put({ type: actions.allUsers.success, payload });
}

// Choose random id from list
// Check lastFetched
// If lastFetched > 30 min., fetch, store, and display
// Else, display stored
