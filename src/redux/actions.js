const createActions = (type, ...actions) =>
  actions.reduce((acc, arg) => ({ ...acc, [arg]: `${type}: ${arg}` }), {});

const callActions = ['Request', 'Success', 'Error'];
const pausableActions = ['Init', 'Clear'];

export const actions = {
  fetch: createActions('Fetch', ...pausableActions),
  current: createActions('Current', ...callActions),
  previous: createActions('Previous', ...callActions),
  move: createActions('Move', ...pausableActions)
};

export const dispatches = {
  startFetching: () => ({ type: actions.fetch.Init }),
  stopFetching: () => ({ type: actions.fetch.Clear })
};
