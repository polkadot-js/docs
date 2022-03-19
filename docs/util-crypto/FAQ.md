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


## I don't have WASM available in my environment

The `util-crypto` package relies on `wasm-crypto` to provide faster interfaces with JS fallbacks where WASM is not available. In some cases such as sr25519, only WASM interfaces are available, so it will not be operational without.

For some environments (Java -> JS bindings, React Native, etc.) WASM may not be available at all. To cater for these, an asm.js interface is also provided. Due to the size it adds to any bundler, it is not enabled by default, so does require specific initilization to be used.

If you are upgrading from `@polkadot/wasm-crypto` prior to 5.0.1 or `@polkadot/util-crypto` prior to 8.6.1 the above replaces any overrides and aliases that you may have added to your bundler. Additionally, for RN enviroments, this step is now required, where previously react-native defaulted to injecting asm.js.

And example of initialization to use no WASM and only asm.js is provided here -

```js
// important this needs to be done before any `@polkadot/util-crypto` operations, if not
// applied, the environment will use the `initOnlyWasm` interface by default
import '@polkadot/wasm-crypto/initOnlyAsm';
```

In the same vein, if you would like to use WASM by default with an asm.js fallback, the following initialization option can be used -

```js
// important this needs to be done before any `@polkadot/util-crypto` operations
import '@polkadot/wasm-crypto/initWasmAsm';
```
