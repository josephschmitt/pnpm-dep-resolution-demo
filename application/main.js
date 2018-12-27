const loadTodos = require('@joe-sh/pnpm-api-adapters-todos');

loadTodos().then((todos) => {
  console.log('Todos:', todos);
});
