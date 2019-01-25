import axios from 'axios';

// const DICE_SERVICE = 'http://localhost:8081';

const DICE_SERVICE = `https://baconipsum.com/api`;
const requests = {
  getData: () => `?type=all-meat&sentences=2`
};

export default (type, param) => () =>
  axios
    .get(DICE_SERVICE + requests[type](param))
    .then(res => res.data)
    .catch(err => err);
