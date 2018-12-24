import { all, put, call } from 'redux-saga/effects';
import { actions } from '../../redux/actions';
import api from '../../common/api';

import { mapUserList, mapRepoList } from './selectors';

export function* sendListsRequests() {
  try {
    const [userListData, repoListData] = yield all([
      call(api('getUserList')),
      call(api('getRepoList'))
    ]);
    yield all([
      put({
        type: actions.userList.success,
        payload: mapUserList(userListData)
      }),
      put({
        type: actions.repoList.success,
        payload: mapRepoList(repoListData)
      })
    ]);
    yield all([
      put({ type: actions.user.request }),
      put({ type: actions.repo.request })
    ]);
  } catch (e) {
    yield all([
      put({ type: actions.userList.error, payload: e }),
      put({ type: actions.repoList.error, payload: e })
    ]);
  }
}
