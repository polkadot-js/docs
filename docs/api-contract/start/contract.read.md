---
title: Contract
---

The `ContractPromise` interface allows you to interact with a deployed contract. In the previous [Blueprint example](blueprint.md) this instance was created via `createContract`. In general use, you can also create an instance via `new`, i.e. when you are attaching to an existing contract on-chain -

```javascript
import { ContractPromise } from '@polkadot/api-contract';

// Attach to an existing contract with a known ABI and address. As per the
// code and blueprint examples the abi is an Abi object, an unparsed JSON
// string or the raw JSON data (after doing a JSON.parse). The address is
// the actual on-chain address as ss58 or AccountId object.
const contract = new ContractPromise(api, abi, address);

// Read from the contract
...
```

Either via a create above or via a call to `createContract` both instances are the same. The `Contract` provides a wrapper around the `Abi` and allows you to call either `read` or `exec` on a contract to interact with it.


## Reading contract values

In the `Blueprint` example we have instantiated an incrementer contract. In the following examples we will continue using it to read from and execute transactions into, since it is a well-known entity. To read a value from the contract, we can do the following -

```javascript
// Read from the contract via an RPC call
const value = 0; // only useful on isPayable messages

// NOTE the apps UI specified these in mega units
const gasLimit = 3000n * 1000000n;

// Perform the actual read (no params at the end, for the `get` message)
// (We perform the send from an account, here using Alice's address)
const { gasConsumed, result, output } = await contract.query.get(alicePair.address, { value, gasLimit });

// The actual result from RPC as `ContractExecResult`
console.log(result.toHuman());

// gas consumed
console.log(gasConsumed.toHuman());

// check if the call was successful
if (result.isOk) {
  // should output 123 as per our initial set (output here is an i32)
  console.log('Success', output.toHuman());
} else {
  console.error('Error', result.asErr);
}
```

Underlying the above `.query.<messageName>` is using the `api.rpc.contracts.call` API on the contracts palette to retrieve the value. For this interface, the format is always of the form `messageName(<account address to use>, <value>, <gasLimit>, <...additional params>)`. An example of querying a balance of a specific account on an erc20 contract will therefore be -

```js
// the address we are going to query
const target = '5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY';
const from = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';

// only 1 param needed, the actual address we are querying for (more
// params can follow at the end, separated by , if needed by the message)
const callValue = await contract.query.balanceOf(from, { value: 0, gasLimit: -1 }, target);
```

In this example we have specified a `gasLimit` of `-1`, in a subsequent section we will expand on this. for now, just remember that is indicated to use max available, i.e. we don't explicitly want to specify a value.

When executing it encodes the message using the selector and the input values to allow execution in the contract environment. This can be executed on any contract message, unlike the examples that will follow below it will only read state, not actually execute and therefore not consume any real value from the account.

An alternative for reading would be via the lower-level `.read` method, in this case

```javascript
// Perform the actual read (no params at the end, for the `get` message)
// (We perform the send from an account address, it doesn't get executed)
const callValue = await contract
  .read('get', { value, gasLimit })
  .send(alicePair.address);

// The actual result from RPC as `ContractExecResult`
...
```

In cases where the ABI messages have conflicting names, instead of the `'get'` string the actual message index (or message from the Abi itself) can be passed-through.


## Sending a transaction

Now that we understand the underlying call/read interfaces where a message is executed, but not part of a block, we will loo into [sending transaction messages](contract.tx.md) in our next section.

