---
title: Contract
---

The `ContractPromise` interface allows you to interact with a deployed contract. It provides a wrapper around the `Abi` or metadata JSON and allows you to read contract values and send encoded transactions to the contract.

```javascript
import { ContractPromise } from '@polkadot/api-contract';

// The address is the actual on-chain address as ss58 or AccountId object.
const contract = new ContractPromise(api, metadata, address);
```

## Reading contract values

Contract queries are executed on any contract message as a dry run, therefore not consuming any real value from the account.
Under the hood `.query.<messageName>` is using the `api.rpc.contracts.call` API on the contracts pallet to retrieve a result. 
It is useful because it encodes the message using the selector and the input values to allow execution in the contract environment.
We would get the value of an [incrementer contract](https://github.com/paritytech/ink/blob/master/examples/incrementer/lib.rs) like so: 

```javascript

// maximum gas to be consumed for the call. if limit is too small the call will fail.
const gasLimit = 3000n * 1000000n;
// a limit to how much Balance to be used to pay for the storage created by the contract call
// if null is passed, unlimited balance can be used
const storageDepositLimit = null
// balance to transfer to the contract account. use only with payable messages, will fail otherwise. 
// formerly know as "endowment"
const value: api.registry.createType('Balance', 1000)

// (We perform the send from an account, here using Alice's address)
const { gasRequired, storageDeposit, result, output } = await contract.query.get(
  alicePair.address,
  {
    gasLimit,
    storageDepositLimit,
  }
);

// The actual result from RPC as `ContractExecResult`
console.log(result.toHuman());

// the gas consumed for contract execution
console.log(gasRequired.toHuman());

// check if the call was successful
if (result.isOk) {
  // output the return value
  console.log('Success', output.toHuman());
} else {
  console.error('Error', result.asErr);
}
```


 An example of querying a balance of a specific account on an erc20 contract will therefore be :

```js
// the address we are going to query
const target = '5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY';
// the address to subtract the fees from
const from = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';

// only 1 param needed, the actual address we are querying for (more
// params can follow at the end, separated by , if needed by the message)
const callValue = await contract.query.balanceOf(from, { gasLimit: -1 }, target);
```

In this example we have specified a `gasLimit` of `-1`, in a subsequent section we will expand on this. for now, just remember that is indicated to use max available, i.e. we don't explicitly want to specify a value.


Now that we understand the underlying call/read interfaces where a message is executed, but not part of a block, we will loo into [sending transaction messages](contract.tx.md) in our next section.

