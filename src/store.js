import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducer';

import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import { sendListsRequests } from './App/sagas';
import actions from './actions';
import { sendRepoRequest } from './Repo/sagas';
import { sendUserRequest } from './User/sagas';

function* rootSaga() {
  yield takeEvery('Lists: Request', sendListsRequests);
  yield takeEvery(actions.repo.request, sendRepoRequest);
  yield takeEvery(actions.user.request, sendUserRequest);
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
