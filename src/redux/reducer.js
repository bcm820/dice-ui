import { combineReducers } from 'redux';
import { actions } from './actions';

const makeReducer = (actionObj, reducerType) => {
  const shape = reducerShapes[reducerType];
  return reducerType === 'flag'
    ? (state = shape.initialState, action) => {
        switch (action.type) {
          case actionObj.Init:
            return shape.initAction(state, action.payload);
          case actionObj.Clear:
            return shape.clearAction(state, action.payload);
          default:
            return state;
        }
      }
    : (state = shape.initialState, action) => {
        switch (action.type) {
          case actionObj.Request:
            return shape.requestAction(state, action.payload);
          case actionObj.Success:
            return shape.successAction(state, action.payload);
          case actionObj.Error:
            return shape.errorAction(state, action.payload);
          default:
            return state;
        }
      };
};

const reducerShapes = {
  current: {
    initialState: { data: [] },
    requestAction: (state, _) => state,
    successAction: (state, data) => ({ ...state, data }),
    errorAction: (state, error) => ({ ...state, error })
  },
  accumulator: {
    initialState: { data: [] },
    requestAction: (state, _) => state,
    successAction: (state, data) => ({
      ...state,
      data: [...data, ...state.data]
    }),
    errorAction: (state, error) => ({ ...state, error })
  },
  flag: {
    initialState: true,
    initAction: () => true,
    clearAction: () => false
  }
};

export default combineReducers({
  fetch: makeReducer(actions.fetch, 'flag'),
  current: makeReducer(actions.current, 'current'),
  previous: makeReducer(actions.previous, 'accumulator'),
  move: makeReducer(actions.move, 'flag')
});
