import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from './reducer';
import { actions } from './actions';

import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import { sendCurrentRequest } from '../containers/NewApp/sagas';

function* rootSaga() {
  yield takeEvery(actions.current.request, sendCurrentRequest);
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
