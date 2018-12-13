import { put, all } from 'redux-saga/effects';
import actions from '../actions';

export const listsDispatches = {
  fetchLists: () => ({ type: 'Lists: Request' })
};

export function* sendListsRequests() {
  yield all([
    put({ type: actions.userList.success, payload: {} }),
    put({ type: actions.repoList.success, payload: {} })
  ]);
}
