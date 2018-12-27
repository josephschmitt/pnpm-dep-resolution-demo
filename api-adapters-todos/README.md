# Example Package For Loading Todos using JSONPlaceholder API Adapters

This package uses the `axios` api adapter. It doesn't do much since it's a simple example, but in
the real world this could provide a simpler interface for what the bare api adapter does.

## Installation
```sh
pnpm i @joe-sh/pnpm-api-adapters-todos
```

## Usage
```js
const loadTodos = require('@joe-sh/pnpm-api-adapters-todos');
loadTodos().then((data) => console.log(data));

// Optionally load a single todo by passing its ID
loadTodos(2).then((data) => console.log(data));
```
