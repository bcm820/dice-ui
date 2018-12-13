import axios from 'axios';

const DICE_SERVICE = '';

const endpoints = {
  repoList: () => '/repos',
  userList: () => '/users',
  userRepos: id => `/users/${id}/repos`,
  userActivities: id => `/users/${id}/activities`,
  repoUsers: id => `/repos/${id}/users`,
  repoActivities: id => `/repos/${id}/activities`
};

export default (src, id) =>
  axios
    .get(DICE_SERVICE + endpoints[src](id))
    .then(res => res.data)
    .catch(err => err);
