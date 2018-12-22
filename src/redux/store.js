import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from './reducer';
import { actions } from './actions';

import createSagaMiddleware from 'redux-saga';
import { takeLatest } from 'redux-saga/effects';
import { sendListsRequests } from '../containers/App/sagas';
import { sendRepoRequest } from '../containers/Repo/sagas';
import { sendUserRequest } from '../containers/User/sagas';

function* rootSaga() {
  yield takeLatest('Get Lists: Request', sendListsRequests);
  yield takeLatest(actions.repo.request, sendRepoRequest);
  yield takeLatest(actions.user.request, sendUserRequest);
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
