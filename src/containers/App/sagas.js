import { all, put, call, delay, select } from 'redux-saga/effects';
import { actions } from '../../redux/actions';
import api from '../../common/api';

// TODO: Define data object selector
export function* sendCurrentRequest() {
  try {
    const current = yield select(state => state.current);
    const nextCurrent = yield call(api('getData'));

    if (Array.isArray(nextCurrent))
      yield all([
        put({ type: actions.current.success, payload: nextCurrent }),
        put({ type: actions.previous.success, payload: [...current.data] })
      ]);
    else throw Error('Fetch from server unresolved');

    yield put({ type: actions.moving.request });
    yield delay(100);
    yield put({ type: actions.moving.success });
  } catch (error) {
    yield all([put({ type: actions.current.error, payload: error })]);
  }
}
