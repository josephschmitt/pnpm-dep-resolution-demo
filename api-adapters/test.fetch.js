const fetchAdapter = require('./main.fetch.js');
fetchAdapter('todos/1').then((data) => console.log('data', data));
