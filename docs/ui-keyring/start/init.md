---
title: Initialization
---

To understand the initialization process, some background on the underlying libraries are required. For the [Schnorrkel sr25519](https://github.com/w3f/schnorrkel) a WASM library is used. This means that before `sr25519` can be used, the WASM libraries needs to be loaded and initialized. This is not an issue when the keyring only uses `ed25519`.

If you have been through the [base keyring documentation](../../keyring/start), you should be familiar with this process.


## Create

With this in mind, we take care of the initialization before we load our keyring, yielding -

```js
import keyring from '@polkadot/ui-keyring';
import { cryptoWaitReady } from '@polkadot/util-crypto';

cryptoWaitReady().then(() => {
  // load all available addresses and accounts
  keyring.loadAll({ ss58Format: 42, type: 'sr25519' });

  // additional initialization here, including rendering
});
```

The `cryptoWaitReady()` promise resolves as soon as the underlying WASM libraries have been made available. This is followed by `keyring.loadAll(...)` which is the main initialization for the keyring, which

- initializes the underlying `@polkadot/keyring`
- loads all available accounts, addresses band contracts previously stored
- sets up the default address format with `42` (This is the substrate development default. When not specified, this defaults to `42`)
- defaults to `sr25519` accounts (We can still add `ed25519` accounts, more on this later. When not specified this defaults to `sr25519`)

Since you would generally want the keyring available before rendering the UI (although it can be done elsewhere, showing some info while loading), the following pattern is used in [our examples](https://github.com/polkadot-js/ui), both React and Vue shown here -

```js
...
cryptoWaitReady().then(() => {
  keyring.loadAll({ ... });

  // mount React and render
  ReactDOM.render(<App />, document.getElementById('app'));
});
```

```js
...
cryptoWaitReady().then(() => {
  keyring.loadAll({ ... });

  // mount Vue and render
  new Vue({ render: (h) => h(App) }).$mount('#app');
});
```


## Using with the API

When using the keyring together with the Polkadot-js API, the above would be adapted since the API itself already has a check for the WASM availability. In this case, we can adapt the interface to follow the following pattern -

```js
import { ApiPromise } from '@polkadot/api';
import keyring from '@polkadot/ui-keyring';

...
ApiPromise.create({ ... }).then(() => {
  keyring.loadAll({ ... });

  // additional initialization here, including rendering
});
```

The above pattern is how initialization is done in some applications such as the [polkadot-js apps UI](https://polkadot.js.org/apps/).


## Additional create options

In addition to the `ss58Format` and `type` options (both optional), the following additional configuration options are available to the `loadAll(...)` call -

- `filter?: (json: KeyringJson) => boolean` - An optional filter that is executed on account loading. This allows us to check the loaded account and apply rules on it before including it in the keyring. Generally this would be used for advanced cases, any account that is filtered with `false` won't appear.

- `genesisHash?: Hash` - The `genesisHash` of accounts to should be loaded. The meta property of the account _may_ contain a `genesisHash`, when both are available and non-matching, the account will not be included. To populate this option, the easiest way is to pass the `api.genesisHash` property.

- `isDevelopment?: boolean` - This flag, when set to `true` loads the keyring in development mode. This means that the default development accounts such as "Alice", "Bob", ..., "Ferdie" are included in the keyring. Generally you would only specify this when  actually connected to a development chain.

- `store?: KeyringStore` - An optional store to be used. By default the `ui-keyring` will user browser localStorage, but with a specific store this behavior can be adjusted. For instance, for an extension we would default to the extension store (although localStorage is available) and for Electron apps, we may want to default to file storage.

```js
// For file storage where available, e.g. in Electron environments.
// This takes an path in the constructor, new FileStore('~./keyring-data')
// import { FileStore } from '@polkadot/ui-keyring/stores';

// When the store is not specified, it defaults to new BrowserStore()
// import { BrowserStore } from '@polkadot/ui-keyring/stores';

...
// ExensionStore is available in https://github.com/polkadot-js/extension
keyring.loadAll({ store: new ExtensionStore(), ... });
```


## Managing accounts

With the keyring installed and ready for use, [next we will dive into adding and managing accounts](accounts.md).
