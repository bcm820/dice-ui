import { combineReducers } from 'redux';
import { actions } from './actions';

const reducerShapes = {
  current: {
    initialState: { data: null },
    successAction: (_, data) => ({ data }),
    errorAction: (_, error) => ({ data: null, error })
  },
  accumulator: {
    initialState: {},
    successAction: (state, data) => ({ ...state, ...data }),
    errorAction: (state, _) => state
  },
  count: {
    initialState: 300,
    successAction: (_, data) => data,
    errorAction: (state, _) => state
  }
};

/**
 * Defines one of two types of reducers:
 * 1. Stores a single object in either `data` (if success) or `error` (if failed)
 * 2. Stores a collection of objects previously fetched
 * @param {Object} actionObj - Object describing request, success, error actions
 * @param {boolean} isSingleObj - Whether slice to update is a single container
 * @returns {Object|Array} Next slice of a container's state
 */
const makeReducer = (actionObj, reducerKey = 'current') => {
  const shape = reducerShapes[reducerKey];
  return (state = shape.initialState, action) => {
    switch (action.type) {
      case actionObj.success:
        return shape.successAction(state, action.payload);
      case actionObj.error:
        return shape.errorAction(state, action.payload);
      default:
        return state;
    }
  };
};

export default combineReducers({
  userList: makeReducer(actions.userList),
  repoList: makeReducer(actions.repoList),
  user: makeReducer(actions.user),
  repo: makeReducer(actions.repo),
  words: makeReducer(actions.words, 'count'),
  allRepos: makeReducer(actions.allRepos, 'accumulator'),
  allUsers: makeReducer(actions.allUsers, 'accumulator')
});
