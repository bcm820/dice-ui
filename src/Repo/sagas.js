import { put, all } from 'redux-saga/effects';
import actions from '../actions';

export const fetchRepo = {
  dispatch: () => ({ type: actions.repo.request })
};

export function* sendRepoRequest() {
  yield all([
    put({ type: actions.repo.success, payload: {} }),
    put({ type: actions.words.success, payload: 500 })
  ]);
}
