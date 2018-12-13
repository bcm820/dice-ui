import { combineReducers } from 'redux';
import {
  userListActions,
  repoListActions,
  wordCountActions
} from './App/sagas';
import { repoActions } from './Repo/sagas';
import { userActions } from './User/sagas';

const reducerShapes = {
  current: {
    initialState: { data: null, error: false },
    successAction: (_, data) => ({ data, error: false }),
    errorAction: (_, error) => ({ data: null, error })
  },
  accumulator: {
    initialState: {},
    successAction: (state, data) => ({ ...state, ...data }), // pass obj with keyId: data
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
 * @param {Object} actions - Object describing request, success, error actions
 * @param {boolean} isSingleObj - Whether slice to update is a single container
 * @returns {Object|Array} Next slice of a container's state
 */
const makeReducer = (actions, reducerKey = 'current') => {
  const shape = reducerShapes[reducerKey];
  return (state = shape.initialState, action) => {
    switch (action.type) {
      case actions.success:
        return shape.successAction(state, action.payload);
      case actions.error:
        return shape.errorAction(state, action.payload);
      default:
        return state;
    }
  };
};

export default combineReducers({
  words: makeReducer(wordCountActions, 'count'),
  userList: makeReducer(userListActions),
  repoList: makeReducer(repoListActions),
  user: makeReducer(userActions),
  repo: makeReducer(repoActions)
  // allRepos: {}
  // allUsers: {}
});
