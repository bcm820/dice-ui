import { combineReducers } from 'redux';
import { actions } from './actions';

/**
 * Defines several different types of reducers:
 * 1. current: Stores a single object
 * 2. accumulator: Stores an accumulating array of objects
 * 3. flag: A simple boolean flag toggle (initialized as true)
 * @param {Object} actionObj - Object describing request, success, error actions
 * @param {boolean} isSingleObj - Whether slice to update is a single container
 * @returns {Object|Array} Next slice of a container's state
 */
const makeReducer = (actionObj, reducerType) => {
  const shape = reducerShapes[reducerType];
  return (state = shape.initialState, action) => {
    switch (action.type) {
      case actionObj.request:
        return shape.requestAction(state, action.payload);
      case actionObj.success:
        return shape.successAction(state, action.payload);
      case actionObj.error:
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
    requestAction: () => true,
    successAction: () => false,
    errorAction: () => false
  }
};

export default combineReducers({
  current: makeReducer(actions.current, 'current'),
  previous: makeReducer(actions.previous, 'accumulator'),
  moving: makeReducer(actions.moving, 'flag')
});
