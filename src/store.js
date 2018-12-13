import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducer';

import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import { listsActions, sendListsRequests } from './App/sagas';
import { repoActions, sendRepoRequest } from './Repo/sagas';
import { userActions, sendUserRequest } from './User/sagas';

function* rootSaga() {
  yield takeEvery(listsActions.request, sendListsRequests);
  yield takeEvery(repoActions.request, sendRepoRequest);
  yield takeEvery(userActions.request, sendUserRequest);
}

export default (() => {
  const sagaMiddleware = createSagaMiddleware();
  const logger = createLogger({ collapsed: (g, a, log) => !log.error });
  const enhancers = applyMiddleware(sagaMiddleware, logger);
  const store = createStore(rootReducer, {}, compose(enhancers));
  sagaMiddleware.run(rootSaga);

  if (module.hot)
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default;
      store.replaceReducer(nextReducer);
    });

  return store;
})();
