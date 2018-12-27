const axiosAdapter = require('./main.axios.js');
axiosAdapter('todos/1').then((data) => console.log('data', data));
