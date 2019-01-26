import { all, put, call, delay, select } from 'redux-saga/effects';
import { actions } from '../../redux/actions';
import api from '../../common/api';
import { REQUEST_INTERVAL } from '../../common/constants';
import { mapCurrentData } from './selectors';

export function* sendRequest() {
  try {
    const nextCurrent = yield call(api('getData'));
    if (!Array.isArray(nextCurrent)) throw Error('Fetch unresolved!');

    let current;
    for (let curr of mapCurrentData(nextCurrent)) {
      current = yield select(state => state.current);

      yield all([
        put({ type: actions.current.Success, payload: [curr] }),
        put({ type: actions.previous.Success, payload: [...current.data] })
      ]);

      yield put({ type: actions.move.Init });
      yield delay(80);
      yield put({ type: actions.move.Clear });

      yield delay(REQUEST_INTERVAL);
    }
  } catch (error) {
    yield put({ type: actions.current.Error, payload: error });
  }
}

let interval;

export function* startFetching() {
  // TODO: When switching to DICE service, interval requests here...
  // interval = yield setInterval(sendRequest, REQUEST_INTERVAL);
  yield sendRequest();
}

export function* stopFetching() {
  yield clearInterval(interval);
}
