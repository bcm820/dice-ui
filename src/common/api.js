import axios from 'axios';

// const DICE_SERVICE = 'http://localhost:8081';
const config = {
  headers: { Authorization: `token ${process.env.REACT_APP_DICE_GITHUB_TOKEN}` }
};

const DICE_SERVICE = `https://api.github.com`;
const requests = {
  getData: () => `/users/bcmendoza/events/orgs/DecipherNow`
};

export default (type, param) => () =>
  axios
    .get(DICE_SERVICE + requests[type](param), config)
    .then(res => res.data)
    .catch(err => err);
