---
title: Code
---

The `CodePromise` class allows the developer to manage calls to the `instantiate_with_code` dispatchable in the contracts pallet. 
It is useful in cases where an existing `codeHash` is not available, meaning that the code has never been deployed to the blockchain in its current form. 

The `instantiate_with_code` dispatchable uploads the wasm code the blockchain and creates a new instance in one go. Learn how it works under the hood in the [Substrate Metadata](../../substrate/extrinsics.md#instantiatewithcodevalue-compactu128-gas_limit-compactu64-storage_deposit_limit-optioncompactu128-code-bytes-data-bytes-salt-bytes) section 

The `CodePromise` constructor takes 3 arguments: an API instance, the contract metadata, and the contract code. Only the wasm code will end up on-chain; the metadata is only used in the JavaScript world. See [Prerequisites](./basics.md) to find out how to obtain them.

```javascript
import { CodePromise } from '@polkadot/api-contract';

const code = new CodePromise(api, metadata, wasm);
```

The newly generated `code` object lets you call `instantiate_with_code` without having to encode the data yourself.
You will need to provide values for the instantiation options. Getting accurate gas and storage deposit costs is possible by calling the [instantiate](http://localhost:8080/substrate/rpc#instantiaterequest-instantiaterequest-at-blockhash-contractinstantiateresult) RPC, which dry runs the instantiation and returns the outcome. For the scope of this tutorial we will use hardcoded values.

Here is how you would retrieve the contract address after instantiation for an [ink! incrementer contract](https://github.com/paritytech/ink/blob/master/examples/incrementer/lib.rs), whose constructor signature looks like this: `new (initValue: i32)` 

```javascript
// maximum gas to be consumed for the instantiation. if limit is too small the instantiation will fail.
const gasLimit = 100000n * 1000000n
// a limit to how much Balance to be used to pay for the storage created by the instantiation
// if null is passed, unlimited balance can be used
const storageDepositLimit = null
// used to derive contract address, 
// use null to prevent duplicate contracts
const salt = new Uint8Array()
// balance to transfer to the contract account, formerly know as "endowment". 
// use only with payable constructors, will fail otherwise. 
const value = api.registry.createType('Balance', 1000)
const initValue = 1;

const tx = code.tx.new({ gasLimit, storageDepositLimit }, initValue)

let address;

const unsub = await tx.signAndSend(alicePair, ({ contract, status }) => {
  if (status.isInBlock || status.isFinalized) {
    address = contract.address.toString();
    unsub();
  }
});
```

After we have uploaded the WASM on-chain, next we'll use the [Blueprint to (re)instantiate on-chain code](blueprint.md).
