---
title: Installation
---

If you already use the [@polkadot/api](https://www.npmjs.com/package/@polkadot/api) in your project (which is true in most cases), you don't need anything more than `yarn add @polkadot/ui-keyring`.

If however you use the `ui-keyring` independently (i.e. in an address generator, like the [examples](https://github.com/polkdot-js/ui) you would need the `keyring` dependency as well, `yarn add @polkadot/keyring @polkadot/ui-keyring`. (In the first case the `@polkadot/api` already comes bundled with the base keyring, so no additional dependencies are needed).


## Initialization

Now that we have it installed, let's start using the keyring with [initialization & loading](init.md).
