import { put, all } from 'redux-saga/effects';
import { wordCountActions } from '../App/sagas';

export const repoActions = {
  request: 'Repo: Request',
  success: 'Repo: Success',
  error: 'Repo: Error'
};

export const fetchRepo = {
  dispatch: () => ({ type: repoActions.request })
};

export function* sendRepoRequest() {
  yield all([
    put({ type: repoActions.success, payload: {} }),
    put({ type: wordCountActions.success, payload: 500 })
  ]);
}
