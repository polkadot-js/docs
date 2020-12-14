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


## I'm using a web bundler and have no need for WASM or sr25519

The `util-crypto` package relies on `wasm-crypto` to provide faster interfaces with JS fallbacks where WASM is not available. In some cases such as sr25519, only WASM interfaces are available, so it will not be operational without.

If you use a bundler such as Webpack and do not want WASM at all, you can alias the `wasm-crypto` package to not bundle the WASM module at all. For this use-case, you can alias `@polkadot/wasm-crypto-wasm` to `@polkadot/wasm-crypto-wasm/empty` in your resolve config. Bundlers such as Rollup can be configured in the same way, with the same alias.

When doing this JS will be used in all cases, except for sr25519 which is be fully non-available in your app.
