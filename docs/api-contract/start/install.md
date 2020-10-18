---
title: Installation
---

The `@polkadot/api-contract` packages is to be used alongside the `@polkadot/api` package. With that in-mind we can install [from npm](https://www.npmjs.com/package/@polkadot/api-contract), so we are not going to waste too much time with the bare basics, just install the API & contracts extensions via

`yarn add @polkadot/api @polkadot/api-contract`

Generally you would want to keep the versions of the 2 in lock-step, which mean that if you upgrade one or the other, ensure that the versions continue to match.


## Notes on use

Be aware that Substrate chains are different, which means that some chains will not have the [Substrate contracts palette](../../substrate/intro.md) installed. For instance relay chains such as Polkadot does not have this functionality, however may have parachains that do.

Additionally the contracts palette and [ink!](https://github.com/paritytech/ink) are still evolving. With the upgrade from ink! v2 to v3 the ABI structure has changed completely. As of the [polkadot-js API v2.2.1](https://github.com/polkadot-js/api/releases/tag/v2.2.1) only ink! v3.0-rc1 and later is supported. If you are using an earlier version, this guide will not be useful since the wrapper interfaces have changed in a major may to support the new formats.

For development purposes it generally is preferred to use a local development network, that way you can swap and purge contracts while developing.


## Basic interfaces

So we have it installed, you have a development chain running (see the ink! examples for that) and we can jump into actual real-world usage. But before we do, let's take a brief tour through the [base classes and interfaces](basics.md) before we get into using them.
