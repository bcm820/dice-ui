import { put, all } from 'redux-saga/effects';
import { actions } from '../../actions';

export function* sendListsRequests() {
  yield all([
    put({ type: actions.userList.success, payload: {} }),
    put({ type: actions.repoList.success, payload: {} })
  ]);
}
