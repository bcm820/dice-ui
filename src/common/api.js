import axios from 'axios';

const DICE_SERVICE = 'http://localhost:8081';

const requests = {
  getRepoList: () => '/repos',
  getUserList: () => '/users',
  getUserRepos: param => `/users/${param}/repos`,
  getUserActivities: param => `/users/${param}/activity`,
  getRepoActivities: param => `/repos/${param}/activity`
};

export default (type, param) => () =>
  axios
    .get(DICE_SERVICE + requests[type](param))
    .then(res => res.data)
    .catch(err => err);
