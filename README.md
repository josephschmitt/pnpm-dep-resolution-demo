# Unexpected Inability to Require a Dependency Demo

This repo is built up of 2 published packages and a sample application:
- [`api-adapters`](./api-adapters) -- Multi-framework API adapters that wrap the JSONPlaceholder
  API's. Multiple providers are available, depending on if your application uses `axios` or
  `node-fetch` to avoid having multiple HTTP libraries installed.
- [`api-adapters-todos`](./api-adapters-todos) -- Uses the `axios` adapter to load todos.
- [`application`](./application) -- Uses the todos adapter to try and load todos

## Installation and Startup
```sh
pnpm recursive install
cd application/
pnpm start
```

## Expected result
Upon starting the application, I'd expect it to console log todos. `axios` is not a dependency of
the base adapters package since it provides multiple http-library adapters. However, the package
that actually uses the adapter does set `axios` as its dependency. Therefore I'd expect it to be
able to resolve the `axios` dependency in the application that requires the todos package.

## Actual result
Upon starting the application, the `axios` dependency is not found, even though it was installed
since it is set as a dependency of `@joe-sh/api-adapters-todos`.

## Workaround
```sh
pnpm install --shamefully-flatten
pnpm start
```

When shamefully flattening, it all works as expected.
