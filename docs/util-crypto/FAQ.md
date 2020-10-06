---
id: FAQ
title: FAQ
---

The list will be updated/expanded as questions come up, dealing with some common issues that util-crypto users find.


## I am having trouble initializing the wasm interface

The `@polkadot/util-crypto` libraries has a WASM backend but has JS fallbacks in place for most operations. This means that when the WASM has been initialized it will be used, alternatively the JS fallbacks will be utilized. Some interfaces, such as using sr25519 however are only available via WASM. When tyring to use these without a completed initialization and error such as "The WASM interface has not been initialized. Ensure that you wait for the initialization Promise before attempting to use WASM-only interfaces." will be thrown.

When using an import/require from the library the WASM async init will be automatically started. Due to the async nature of this process (which is also started automatically in the API) it may not have been completed before attempting to use. In these cases always use a `await cryptoWaitReady()` before attempting interfaces that required WASM.
