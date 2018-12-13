import { put, all } from 'redux-saga/effects';

export const listsActions = {
  request: 'Lists: Request'
};

export const userListActions = {
  request: listsActions.request,
  success: 'User List: Success',
  error: 'User List: Error'
};

export const repoListActions = {
  request: listsActions.request,
  success: 'Repo List: Success',
  error: 'Repo List: Error'
};

export const wordCountActions = {
  success: 'Word Count: Success'
};

export const listsDispatches = {
  fetchLists: () => ({ type: listsActions.request })
};

export function* sendListsRequests() {
  yield all([
    put({ type: userListActions.success, payload: {} }),
    put({ type: repoListActions.success, payload: {} })
  ]);
}
