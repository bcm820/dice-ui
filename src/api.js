import axios from 'axios';

const DICE_SERVICE = 'http://localhost:8081';

const endpoints = {
  repoList: () => '/repos',
  userList: () => '/users',
  userRepos: id => `/users/${id}/repos`,
  userActivities: id => `/users/${id}/activity`,
  repoActivities: id => `/repos/${id}/activity`
};

export default (src, id) => () =>
  axios
    .get(DICE_SERVICE + endpoints[src](id))
    .then(res => res.data)
    .catch(err => err);
