const {URL} = require('url');
const axios = require('axios');

module.exports = function fakeApi(endpoint) {
  return axios.get(new URL(endpoint, 'https://jsonplaceholder.typicode.com/').toString())
    .then(({data}) => data);
}
