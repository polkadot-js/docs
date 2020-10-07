# FAQ

The list will be updated/expanded as questions come up, dealing with some common issues that users find.

## I have a crypto has not been initialized error

When using the keyring, make sure that you are [initializing the keyring](keyring.md#initialization) before attempting to use it. Generally you would hook this into the async API creation (which transparently caters for the WASM load).

## My React Native build runs out of memory

When using the keyring packages with RN, due to a lack of support, an [asm.js fallback](https://github.com/polkadot-js/wasm/issues/19) is provided. This does however all some memory load to the application build process (and is by no means fast), ensure that you adjust your build flags to include `NODE_OPTIONS=--max_old_space_size=8192`, for instance doing `NODE_OPTIONS=--max_old_space_size=8192 yarn run ios`
