---
title: FAQ
---

The list will be updated/expanded as questions come up, dealing with some common build questions that library users find.


## Under TypeScript I have TS compilation errors

When running into TypeScript errors, ensure that you are on a recent version. The API (and common utilities), reply extensively on [template literals](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html) which were introduced in the [Typescript 4.1 version](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html).

Additionally the [rxjs library](https://github.com/ReactiveX/rxjs/) (used internally by the API), requires at least a [TypeScript 4.2 version](https://github.com/ReactiveX/rxjs/blob/6bd1c5f3cf0e387973b44698c48bc933e8c528aa/package.json#L9), without it the Observable types are not correctly resolved.

The API itself generally always uses the latest TypeScript versions under development, but the use of new of features are delayed to at least 2 major versions to not require immediate upgrades of the compilers.


## On Webpack 4 I have a parse error on import.meta.url

Under CJS environments `__dirname` is used to determine package locations, on ESM environments the `new URL('.', import.meta.url).pathname` form is used to yeild the same results. This resolves a long-running issue where the functionality was not available under ESM environments.

Webpack 4 doesn't support the `import.meta.url` syntax (the Webpack 5 betas added support, which was not backported), however there is a plugin available to add this functionality, specifically [https://www.npmjs.com/package/@open-wc/webpack-import-meta-loader](https://www.npmjs.com/package/@open-wc/webpack-import-meta-loader).

The following config has been verified as working for old versions of Webpack -

```js
module: {
  rules: [
    {
      test: /\.js$/,
      loader: require.resolve('@open-wc/webpack-import-meta-loader'),
    }
  ]
}
```


## Under my babel build, I have a BigInt to number conversion error

This is casued by a Babel config that transforms inputs such as `2 ** 32` to `Math.pow(2, 32)`. The `transform-exponentiation-operator` is not `BigInt` aware, which means that it also transforms
`BigInt(2) ** BigInt(256)` into an invalid `Math.pow(BigInt(2), BigInt(256))` which then fails on execution.

It is not specific to the API or libraries, but rather the local build environment and a known issue [https://github.com/blockstack/stacks.js/issues/1096#issuecomment-946350299](https://github.com/blockstack/stacks.js/issues/1096#issuecomment-946350299) which can be fixed with 1 of two overrides as per the linked issue -

- exclude Babel `transform-exponentiation-operator`
- adjust browserslist to exclude old versions


## I would like to use browser bundles, bypassing the compile step

All libraries ship with UMD browser bundles as part of the npm packages. For instance for the `@polkadot/util` libraries, a `bundle-polkadot-util.js` is provided. Depending on usage, multiple bundles may be needed, for instance the API would depend on both the `util` and `util-crypto` libraries.

For sample usage, please see the test HTML bundles provides in each relevant repo -

- https://github.com/polkadot-js/common/blob/master/test-bundle.html
- https://github.com/polkadot-js/api/blob/master/test-bundle.html
- https://github.com/polkadot-js/extension/blob/master/test-bundle.html


## I am having trouble with Jest, ESM and the libraries

All the polkadot-js also use Jest for tests. When using Jest refer to the specific configuration for your environment -

- Jest, https://jestjs.io/docs/ecmascript-modules
- TS-Jest, https://kulshekhar.github.io/ts-jest/docs/guides/esm-support

Also bear in mind that packages expose `main`, `module` and `exports` fields in `package.json`. Under environments such as [Jest using browserify/resolve](https://github.com/browserify/resolve/issues/222), it is advisable to import from the root, i.e. `import { ApiPromise } from '@polkadot/api'` as opposed to `import { ApiPromise } from '@polkadot/api/promise'`

Additionally the [polkadot-js Jest config](https://github.com/polkadot-js/dev/blob/master/packages/dev/config/jest.cjs) may prove to be useful as a template, specifically the `transformIgnorePatterns` which excludes certain folders (assuming transforms are not empty as per the linked suggestions above).
