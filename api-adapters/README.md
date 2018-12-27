# Example API Adapters Package

This package provides sample api adapters for the [JSONPlaceholder](https://jsonplaceholder.typicode.com/)  website that work with two different http libraries: [`axios`](https://www.npmjs.com/package/axios)
and [`node-fetch`](https://www.npmjs.com/package/node-fetch).

## Installation
```sh
pnpm i @joe-sh/pnpm-api-adapters
```

## `axios` Usage
When using the `axios` adapters, you must also install `axios`.
```sh
pnpm i axios
```

```js
const adapter = require('@joe-sh/pnpm-api-adapters/main.axios.js');
adapter('todos/1').then((resp) => console.log(resp));
```

## `node-fetch` Usage
When using the `node-fetch` adapters, you must also install `node-fetch`.
```sh
pnpm i node-fetch
```

```js
const adapter = require('@joe-sh/pnpm-api-adapters/main.fetch.js');
adapter('todos/1').then((resp) => console.log(resp));
```
