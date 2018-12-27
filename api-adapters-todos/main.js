const path = require('path');
const adapter = require('@joe-sh/pnpm-api-adapters/main.axios.js');

module.exports = function loadTodos(id = '') {
  return adapter(path.join('todos', id.toString()));
}
