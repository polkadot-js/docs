---
title: Contract
---

The `ContractPromise` interface allows you to interact with a deployed contract. It provides a wrapper around the `Abi` and allows you to call either `query` or `tx` on a contract to interact with it.

```javascript
import { ContractPromise } from '@polkadot/api-contract';

// Attach to an existing contract with a known ABI and address. As per the
// code and blueprint examples the abi is an Abi object, an unparsed JSON
// string or the raw JSON data (after doing a JSON.parse). The address is
// the actual on-chain address as ss58 or AccountId object.
const contract = new ContractPromise(api, abi, address);
```

## Reading contract values

Under the hood `.query.<messageName>` is using the `api.rpc.contracts.call` API on the contracts pallet to retrieve a result. For this interface, the format is always of the form `messageName(<account address to use>, <value>, <gasLimit>, <...additional params>)`.

```javascript

// Contract query options
const options = { 
  // maximum gas to be consumed for the contract execution dry run. if limit is too small the dry run will fail. 
  // you can use -1 use the maximum gas limit available to transactions
  gasLimit,
  // a limit to how much Balance to be used to pay for the storage created by the execution
  // if null is passed, all available balance can be used
  storageDepositLimit = null,
  // Balance to send - use only for payable constructors.  
  value
  }

// (We perform the send from an account, here using Alice's address)
const { 
  gasConsumed, 
  storageDeposit, 
  result, 
  output 
  } = await contract.query[messageName](alicePair.address, options, ...params);

// The actual result from RPC as `ContractExecResult`
console.log(result.toHuman());

// gas consumed
console.log(gasConsumed.toHuman());

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

When executing it encodes the message using the selector and the input values to allow execution in the contract environment. This can be executed on any contract message, unlike the examples that will follow below it will only read state, not actually execute and therefore not consume any real value from the account.


## Sending a transaction

Now that we understand the underlying call/read interfaces where a message is executed, but not part of a block, we will loo into [sending transaction messages](contract.tx.md) in our next section.

