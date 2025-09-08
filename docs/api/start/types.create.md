---
title: Type creation
---

Circling back to metadata. There are two important things to remember when using the API to make queries or send transactions.

1. The functionality available, e.g. exposed on `api.query.*` is not hard-coded in the API, rather this is decorated from the chain metadata. So the metadata lets the API know which endpoints are available and what the type for those endpoints are.

2. When you supply a value to the API, internally it will convert that value to the correct type as expected by the chain, i.e. as determined by the metadata. This means that a function such as `balances.transferKeepAlive(address: Address, value: Balance)` can take at least the following inputs, which are all converted to the correct types -

   - `address` can be an `Address`, an `AccountId`, an `Uint8Array` publicKey, a hex publicKey or an ss58 formatted address;
   - `value` can be a `Balance`, a value encoded in hex, a `BN` object, a base-10 string, a JS `number`, a JS `BigInt` or even a SCALE-encoded `Uint8Array`

3. It is advised to not supply a `api.tx.somewhere.something`, `api.query.somewhere.something` etc. call with `Codec` types created via `createType`, but to simply apply the value. This will ensure that if the `Codec` type needed for a certain call changes given a specific runtime, then the API will be able to resolve that type for you. This ensures the minimum amount of maintence, and refactoring required when changes to the type naming is applied.

```js
// The following is not advised
const something = api.createType('SomeType', { foo: 'bar' });
...
await api.tx.somewhere.something(something);
...

// This following is advised
await api.tx.somewhere.something({ foo: 'bar' });
```

In cases where a value is returned such as storage queries, the response from the chain is always encoded into the correct `Codec` type. This means that while the node may return an encoded block (with encoded extrinsics) via `api.rpc.chain.getBlock()`, this is decoded into a proper `SignedBlock` by the API. Outputting this value via `.toJSON()` will yield an encoding for RPC, so if you are not using TypeScript (which adds code helpers on decoded objects), a representation via `.toHuman()` will be more representative of the actual object fields, re-formatted for human consumption.


## Why create types

With the conversions done in the API, there are limited reasons to create types "manually". However, just because there are not thousands of reasons, does not mean it is not valid. For instance, you may retrieve an `Option` and for the sake of sanity would like to use `.unwrapOr()` on it, returning a `Codec` default value where the value `.isNone`.

```js
// type import for TypeScript
import type { Balance } from '@polkadot/types/interfaces';

...
// unwrap out option into a zero Balance when not found
// (This can be done via `.unwrapOrDefault()`, which does the same underlying)
const balance: Balance = balanceOpt.unwrapOr(api.createType('Balance'));
```

In the example above, we introduced the `api.createType(<typeName>, [<value>])`. The same format is also exposed by the `TypeRegistry` (more on this in a short while) as well as `createType(...)` from the actual `@polkadot/types` package. All doing exactly the same.


## Choosing how to create

In most cases, you would always want to use the `api.createType` helper. What this does is call the underlying `@polkadot/types` `createType`, passing through the registry that is attached to the API. Registry? Yes, registry.

The registry contains a listing of all internal types and their classes that have been registered. So upon creation of an API instance, a `registry` object  is attached to the API and this is passed through to all created types. This allows the type definitions to not pollute the global namespace, but rather be contained and able to reference one another.

As mentioned, the `createType` functions all do exactly the same, and in 99.99% of the cases you would be recommended to just forget about everything and use `api.createType` if and when required. In some cases, you may just have a type object and from that want to create another type instance. For that you can access the `registry` on the type object and call `createType` on it. (If this type object was created from an API instance, the registry on the type and on the API will point to the same instance.)

Basically, this means that we have equivalency in creation for all the items below, all creating on the same registry (containing all injected types), and all wrapping the same value -

```js
import { createType } from '@polkadot/types';

// via API (recommended)
api.createType('Balance', 123);

// via registry (`.registry` is on all API and Codec objects)
api.registry.createType('Balance', 123n);

// via the low-level approach (not recommended)
createType(api.registry, 'Balance', '123');
```

## How to create types

As all methods of creation basically expose the same API, we will explain only how `api.createType` works. If the type is an alias for another type (like `'Balance'`, which is just a `u128`), the second parameter of `api.createType` is the value of the object you are creating, as detailed in the previous section:

```js
const x = api.createType('Balance', 123);
console.log(`x is equal to ${x.toNumber()}`);
```

If the type you want to create is a struct, then the second parameter is a dictionary which maps field names to their values:

```js
...
const api = await ApiPromise.create({
  types: {
    MyStruct: {
      a: "u32",
      b: "Vec<u32>",
      c: "Option<u32>"
    }
  }
});

const s = api.createType("MyStruct", {a: 1, b: [2, 3], c: 4});
console.log(`s.a == ${s.a.toNumber()}`);
console.log(`s.b == ${s.b.toJSON()}`);
console.log(`s.c == ${s.c.unwrap().toNumber()}`);
```

If you don't specify a field, it will be initialized with the default value. Numbers are zero, vectors are empty, options are `None` by default.

If you want to create an enum, the pattern is `api.createType(type, enumerator)` (for C-style enums or if you want to rely on default enumeration) or `api.createType(type, {enumerator: value})` (for typed enums). For example:

```js
const api = await ApiPromise.create({
  ...
  types: {
    CLikeEnum: {
      _enum: ['One', 'Two', 'Three']
    },
    TypedEnum: {
      _enum: {
        One: 'Compact<u32>',
        Two: 'u64',
        Three: 'Option<Balance>',
        Four: null
      }
    }
  }
});

const one = api.createType('CLikeEnum', 'One');
console.log(one.isOne);  // true

const two = api.createType('TypedEnum', {'Two': 123});
console.log(two.asTwo.toNumber());  // 123

const three = api.createType('TypedEnum', 'Three');  // Default initialization
console.log(three.asThree.isNone);  // true
```

You may want to construct a `Call` type given a specific tx. Using create type is unneecessary `createType`, and it can be achieved by simply using the `method` key attached to a `tx`.

```js
const tx = await api.tx.balances.transferKeepAlive(BOB, 12345);
console.log('Hex = ', tx.method.toHex())
```

## Using with TypeScript

The API is built with TypeScript (as are all projects in the [polkadot-js organization](https://github.com/polkadot-js/) and as such allows developers using TS to have access to all the type interfaces defined on the chain, as well as having access to typings on interacting with the `api.*` namespaces. In the next section we will provide an overview of [what is available in terms of types and TypeScript](typescript.md).
