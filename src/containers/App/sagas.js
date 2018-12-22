import { all, put, call } from 'redux-saga/effects';
import { actions } from '../../redux/actions';
import api from '../../common/api';

export function* sendListsRequests() {
  const [userListData, repoListData] = yield all([
    call(api('userList')),
    call(api('repoList'))
  ]);

  const userListError = userListData instanceof Error;
  const repoListError = repoListData instanceof Error;

  if (userListError)
    yield put({ type: actions.userList.error, payload: userListData });
  if (repoListError)
    yield put({ type: actions.repoList.error, payload: repoListData });
  if (!userListError && !repoListError) {
    const { users } = userListData;
    const { repositories } = repoListData;
    yield all([
      put({ type: actions.userList.success, payload: users }),
      put({ type: actions.repoList.success, payload: repositories })
    ]);
    yield all([
      put({ type: actions.user.request }),
      put({ type: actions.repo.request })
    ]);
  }
}
