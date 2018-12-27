const {URL} = require('url');
const fetch = require('node-fetch');

module.exports = function fakeApi(endpoint) {
  return fetch(new URL(endpoint, 'https://jsonplaceholder.typicode.com/').toString())
    .then((res) => res.json());
}
