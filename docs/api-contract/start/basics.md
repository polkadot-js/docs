---
title: Basics
---

The `@polkadot/api-contract` comes with 4 general helpers and has `*Rx`-based versions for the users of the `ApiRx` version of the API. However here we will focus only on the `ApiPromise`-based version of the helpers, in much the same way as the [API documentation](../../api/intro.md). 
The four main interfaces provided are:

- [CodePromise](code.md) - upload and instantiate a WASM blob
- [BlueprintPromise](blueprint.md) - instantiate a contract from on-chain code
- [ContractPromise](contract.read.md) -  interact with on-chain contract instances, making read calls and executing transactions 
- Abi - generic registry that contains all the types and all the messages for a given ABI

Now that we have a good overview of what is available and the use of each interface, let's take a brief tour through the [prerequisites needed to complete this guide](prerequisites.md).