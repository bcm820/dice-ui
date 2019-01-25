const createActions = type => ({
  request: `${type}: Request`,
  success: `${type}: Success`,
  error: `${type}: Error`
});

export const actions = {
  current: createActions('Get Current'),
  previous: createActions('Store Previous'),
  moving: createActions('Set Movement')
};

export const dispatches = {
  fetchCurrent: () => ({ type: actions.current.request })
};
