const createActions = type => ({
  request: `${type}: Request`,
  success: `${type}: Success`,
  error: `${type}: Error`
});

export const actions = {
  userList: createActions('Get User List'),
  repoList: createActions('Get Repo List'),
  user: createActions('Get User'),
  repo: createActions('Get Repo'),
  allRepos: createActions('Store Repo'),
  allUsers: createActions('Store User')
};

export const dispatch = {
  fetchLists: () => ({ type: 'Get Lists: Request' }),
  fetchUser: () => ({ type: actions.user.request }),
  fetchRepo: () => ({ type: actions.repo.request })
};
