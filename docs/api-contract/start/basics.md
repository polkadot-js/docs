---
title: Basics
---

The `@polkadot/api-contract` comes with 3 general helpers and has `*Rx`-based versions for the users of the `ApiRx` version of the API. However here we will focus only on the `ApiPromise`-based version of the helpers, in much the same way as the [API documentation](../../api/intro.md). The 3 main interfaces provided are -

- [CodePromise](code.md) - This allows us to manage actual WASM code and deploy it
- [BlueprintPromise](blueprint.md) - This allows us to manage on-chain code hashes and use this as a blueprint for the creation of contracts
- [ContractPromise](contract.read.md) - This allows us to manage on-chain contracts, making read calls and executing transactions on contracts
- Abi - This is a generic registry that contains all the types and all the messages for a given ABI

In terms of use this would mean that `Code` will create a `Blueprint` which in turn, would create `Contract`. In cases where you already have a on-chain `codeHash` or an on-chain contract, the relevant blueprint or contract instance can be created without helpers by direct instantiation.


## Deploying code

Not that we have a good overview of what is available and the use of each interface, [let's deploy a WASM contract and start using it](code.md).
