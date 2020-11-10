---
title: FAQ
---

The list will be updated/expanded as questions come up, dealing with some common issues that util-crypto users find.


## I am having trouble initializing the wasm interface

The `@polkadot/util-crypto` libraries has a WASM backend but has JS fallbacks in place for most operations. This means that when the WASM has been initialized it will be used, alternatively the JS fallbacks will be utilized. Some interfaces, such as using sr25519 however are only available via WASM. When tyring to use these without a completed initialization and error such as "The WASM interface has not been initialized. Ensure that you wait for the initialization Promise before attempting to use WASM-only interfaces." will be thrown.

When using an import/require from the library the WASM async init will be automatically started. Due to the async nature of this process (which is also started automatically in the API) it may not have been completed before attempting to use. In these cases always use a `await cryptoWaitReady()` before attempting interfaces that required WASM.


## My React Native build runs out of memory

When using the util-crypto packages with RN, due to a lack of support, an [asm.js fallback](https://github.com/polkadot-js/wasm/issues/19) is provided since (most) React Native implementations does not have a native WASM executor.

While the fallback is fully tested and equivalent to the WASM version, it does add some memory load to the application build process. Additionally simnce the asm.js bundle is quite large, the build process is by no means fast. Ensure that you adjust your build flags to include `NODE_OPTIONS=--max_old_space_size=8192`, for instance doing `NODE_OPTIONS=--max_old_space_size=8192 yarn run ios`


## Under Webpack, I get Can't import the named export '...' from non EcmaScript module

As of `@polkadot/util` 4.1 EcmaScript modules are also published as part of the package. This allows bundlers that have tree-shaking to create much smaller outputs. Additionally, it also allows newer Node.js installs to use ESM modules via the `.mjs` extension. Bundlers will determine this setup from the `"module": "index.mjs"` key in the `@polkadot/*` package.json and use it as available.

Some older versions of Webpack may not know how to handle these module files and therefore will require an additional config to properly handle these modules. Should the above error arise, add the following to your webpack config under the rules config -

```
{
  include: /node_modules/,
  test: /\.mjs$/,
  type: 'javascript/auto'
}
```

This would just instruct it to handle the `.mjs` ESM modules are normal JS files and apply amy transform directly on it.
