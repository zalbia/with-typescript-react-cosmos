# TypeScript/Next.js/React Cosmos example

This is a simple project forking the [next.js with-typescript](https://github.com/zeit/next.js/tree/canary/examples/with-typescript) example that shows the usage of Next.js with TypeScript and React Cosmos.

## How to use it?

Install it and run:

```bash
npm install
npm run dev
npm run cosmos
# or
yarn
yarn dev
yarn cosmos
```

## The idea behind the example

Use the [@zeit/next-typescript](https://github.com/zeit/next-plugins/tree/master/packages/next-typescript) plugin to inject the Webpack config required to compile TypeScript to JavaScript. For information about using a TSConfig have a [look at the plugin page](https://github.com/zeit/next-plugins/tree/master/packages/next-typescript/#readme).

To get react-cosmos working, we create a webpack config separate from next.js
 and point cosmos.config.js to it.
