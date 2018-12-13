const createActions = type => ({
  request: `${type}: Request`,
  success: `${type}: Success`,
  error: `${type}: Error`
});

export default {
  userList: createActions('User List'),
  repoList: createActions('Repo List'),
  user: createActions('User'),
  repo: createActions('Repo'),
  words: createActions('Word Count')
};
