---
title: Installation
---

The `@polkadot/api-contract` packages is to be used alongside the `@polkadot/api` package. With that in-mind we can install [from npm](https://www.npmjs.com/package/@polkadot/api-contract), so we are not going to waste too much time with the bare basics, just install the API & contracts extensions via

`yarn add @polkadot/api @polkadot/api-contract`

Generally you would want to keep the versions of the 2 in lock-step, which mean that if you upgrade one or the other, ensure that the versions continue to match.

## Interfaces
The `@polkadot/api-contract` comes with 4 general helpers and has `*Rx`-based versions for the users of the `ApiRx` version of the API. However here we will focus only on the `ApiPromise`-based version of the helpers, in much the same way as the [API documentation](../../api/intro.md). 
The four main interfaces provided are:

- [CodePromise](code.md) - upload and instantiate a WASM blob
- [BlueprintPromise](blueprint.md) - instantiate a contract from on-chain code
- [ContractPromise](contract.read.md) -  interact with on-chain contract instances, making read calls and executing transactions 
- Abi - encode / decode contract messages and arguments

## Notes on use

Be aware that Substrate chains are different, which means that some chains will not have the [FRAME contracts pallet](https://docs.substrate.io/v3/runtime/frame) installed. For instance relay chains such as Polkadot does not have this functionality, however may have parachains that do.

Additionally the contracts pallet and [ink!](https://github.com/paritytech/ink) are still evolving. With the upgrade from ink! v2 to v3 the ABI structure has changed completely. As of the [polkadot-js API v2.2.1](https://github.com/polkadot-js/api/releases/tag/v2.2.1) only ink! v3.0-rc1 and later is supported. If you are using an earlier version, this guide will not be useful since the wrapper interfaces have changed in a major may to support the new formats.

## Basic interfaces

So once we have it installed, let's take a brief tour through the [base classes and interfaces](basics.md) before we get into using them.
