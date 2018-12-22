import { combineReducers } from 'redux';
import { actions } from './actions';

/**
 * Defines one of two types of reducers:
 * 1. Stores a single object in either `data` (if success) or `error` (if failed)
 * 2. Stores a accumulating collection of objects previously fetched
 * @param {Object} actionObj - Object describing request, success, error actions
 * @param {boolean} isSingleObj - Whether slice to update is a single container
 * @returns {Object|Array} Next slice of a container's state
 */
const makeReducer = (actionObj, reducerType) => {
  const shape = reducerShapes[reducerType];
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

const reducerShapes = {
  current: {
    initialState: { data: null },
    successAction: (_, data) => ({ data }),
    errorAction: (_, error) => ({ data: null, error })
  },
  accumulator: {
    initialState: {},
    successAction: (state, data) =>
      data.repos
        ? { ...state, [data.username]: data }
        : { ...state, [data.name]: data },
    errorAction: (state, _) => state
  }
};

export default combineReducers({
  userList: makeReducer(actions.userList, 'current'),
  repoList: makeReducer(actions.repoList, 'current'),
  user: makeReducer(actions.user, 'current'),
  repo: makeReducer(actions.repo, 'current'),
  allRepos: makeReducer(actions.allRepos, 'accumulator'),
  allUsers: makeReducer(actions.allUsers, 'accumulator')
});
