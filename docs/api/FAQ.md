---
title: FAQ
---

The list will be updated/expanded as questions come up, dealing with some common issues that API users find.


## I am getting a "Unknown types found, no types for ..." error

There are 2 causes for this, both related to the version of the API that you are using and the support of types. As explained in the elsewhere, types on Polkadot/Substrate are continuously evolving - the latest version of the API always tries to support types for the latest Polkadot networks, such as [Kusama](https://kusama.network/). So for Polkadot public chains, ensure that you are using the latest released API version.

If you are connected to a customized chain, you would rather want to [register the types](start/types.extend.md) either on your own, or via packages that the chain vendor provides.

If however you are running against a master branch of either Polkadot or Substrate, and the type additions are very new and have not made it into an API release yet you may well be better suited running [a beta version, tracking master](start/install.md#betas).


## I am getting a "Metadata:: failed on MagicNumber" error

Update your version of the API to the [latest version](start/install.md). Like types, the [metadata interfaces](start/basics.md) are continuously evolving. For instance with the Polkadot Alexander network, only metadata v3 is available. By the time Kusama launched, this has been bumped to v7. As these versions are added to the Polkadot/Substrate codebase, they are added to the API.


## The node returns a "Could not convert" error on send

The typical error that you would see is `Verification Error: Execution(ApiError("Could not convert parameter 'tx' between node and runtime`. This means that the transaction data serialized from the API cannot be deserialized on the node.

All data transferred between the API and the Node is in a SCALE-encoded binary format, so the [definition of the types](start/types.extend.md) between the API and the node needs to match 100%. When you find the above, it would mean the definition of the types on the API side does not match what is on the node. Specifically the API encodes against the definition, but since there is a mismatch the Node cannot parse the data correctly.

To fix this, you should look at the specific `api.tx.*` params and adjust the type definitions for those param types to match what is found on the node side. In some rare cases the cause could be extrinsic formatting related, to track these make an `api.tx.system.remark(data: Bytes)` call, if it fails, the API and node cannot agree on [an extrinsic format and adjustments are required](start/types.extend.md#impact-on-extrinsics).

Also see the next entry for causes related to wrong `Address` formats.


## I cannot send transactions, sending yields decoding failures

Depending on the chain, you could get either an `Address` or `Signature` or extensions decoding error when sending the transaction returned from the node. This is due to a type mismatch on the `Address` types defined on the node vs what the API uses. This is not something the API can detect via the metadata and it is generally configured on a per-chain basis.

The API always injects the default type definitions as specified by the Substrate master fully-featured node. This means that any customizations to chains needs to be applied as types, should there be differences in specific user-implementations.

Due to these customizations and differences that bleed through to the transaction formats, out-of-the-box chains based on the node-template will have issues when sending transactions. To fix this, you would need to add [the customized Address types into your API](start/types.extend.md#impact-on-extrinsics) instances (or UIs), allowing the API to have the information required to adjust the encoding.

There are 3 `Address` types that are generally configured in different chains, and one variant should be passed to the `Api.create({ ... })` [options as types](https://polkadot.js.org/docs/api/start/types.extend/#extension) -


- `type Address = MultiAddress` (Rust), this is the current default in Substrate master and the API and used in chains such as Polkadot/Kusama from runtime 28. It allows an enhancement to the original `Indices` lookup, catering for a wide array of address types. To configure this type in the API, use `{ "Address": "MultiAddress", "LookupSource": "MultiAddress" }`

- `type Address = <Indices as StaticLookup>::Source` (Rust), this is the previous the default as applied in the API and yields types `{ "Address": "IndicesLookupSource", "LookupSource": "IndicesLookupSource" }` when explicitly specified;

- `type Address = AccountId` (Rust), this is used in a number of chains such as Kusama/Polkadot (prior to the 28 runtime) and a previous default for the node-template chain as well. To override to this type of Address, use the API types `{ "Address": "AccountId", "LookupSource": "AccountId" }`


The above may also apply when you use [polkadot-js/apps](https://github.com/polkadot-js/apps) to connect to your node. Known chains are correctly configured, however any custom chain may need additional types.


## I would like to sign transactions offline

The API itself is independent of where the signature comes from and how it is injected. Additionally it implements a signer interface, that can be used for external signing - an example of this is the [polkadot-js/apps](https://github.com/polkadot-js/apps) support for signing via extensions and even the [polkadot-js/extension](https://github.com/polkadot-js/extension) support for tools such as the [Parity Signer](https://github.com/paritytech/parity-signer).

As of this writing we don't have an explicit example of implementing the signer interface in these docs, although we do use one in [our tests](https://github.com/polkadot-js/api/blob/master/packages/api/src/test/SingleAccountSigner.ts). Additionally, the [polkadot-js/tools](https://github.com/polkadot-js/tools) has an implementation of [a very basic offline signer](https://github.com/polkadot-js/tools/tree/master/packages/signer-cli) where transactions are generated in one process and signatures in another non-connected process.


## I would like to send a root transaction

Some calls in Polkadot/Substrate can only be submitted as root, these are indicated by `ensure_root(origin)` in the Rust codebase. Root here does not refer to the actual account, i.e. `//Alice` on a `--dev` chain, but rather that it cannot be submitted as a bare user transaction. This restriction applies to chain upgrades, changing balances or anything that modifies the state and/or chain operation.

To submit these transactions, it needs to be sent as a [wrapped transaction](start/api.tx.wrap.md#sudo-use) via either `sudo.sudo` (assuming you have access on your chain) or `democracy.proposal` (which would allow users of the chain to vote on it).


## How do I call a function with a Tuple input

Tuples, as defined in the Polkadot/Substrate types appear as `(TypeA, TypeB)`. For instance we may have an `(AccountId, u64)` input as defined in the metadata or as part of the user types. To specify a Tuple as an input, wrap it in an array format, for instance to call `query.module.get((u32, u64))` where a `(u32, u64)` Tuple input is expected, you would do `query.module.get([123, 456])`


## How long do transactions live

Polkadot/Substrate supports both immortal and mortal transactions. For immortal, this means that the transaction has an infinite lifetime, for mortals, the transactions expire after a defined period. By default the API sends mortal transactions when no explicit extrinsic era has been specified. This means that all transaction has a limited lifetime and will expire if not included in the period set.

The length for this transaction validity is set to 5 minutes, calculated based on the blocktime for the chain. (10 blocks per minute in this default 6s Substrate configuration).


## My chain does not support system.account queries

The API always tracks the latest Substrate master in terms of examples. This means that nonce & balance queries are done via the `api.query.system.account(<account>)` which returns a struct `{ nonce: Index, data: AccountData }` where the `data` is struct containing the free and reserved balances. As with all `api.query.*` endpoints, this is decorated based on what the chain you connect to support, via the metadata exchange.

It is possible that you are connecting to an older chain that has not been upgraded yet. For these chains, this storage entry won't be available (yet). To query the nonce on older chains, you can do a query to `api.query.system.accountNonce(<account>)` and balances can be retrieved via `api.query.balances.freeBalance(<account>)`.

Likewise, if your chain has been upgraded recently and you are still using the old `system.accountNonce` or `balances.freeBalance` queries in your code (which is now not available in the chain metadata), you need to update it to query the new location.


## Using a non-current-master node, I have issues parsing events

Recently Substrate master updated the `Weight` type from `u32` -> `u64`. This type is used in the `DispatchInfo` struct in the `system.ExtrinsicSuccess` events, to return the applied call weights as well as the resulting fees. Since the API master branch tracks Substrate master, this means the change has been applied by default, with the default set to `u64`.

If you are on a chain that has not been upgraded yet, you need to add `Weight: 'u32'` to your types to allow for successful parsing of all events. Without this override, parsing will fail. As soon as one event in the `Vec<EventRecord>` structure from `system.events` fails to parse, all subsequent events are affected and the decoding will return an error.


## On a non-current, non Substrate 2.0 branch, my balances are wrong

As part of the Substrate 2.0 release, the `RefCount` type has been changed from ` u8` to a `u32`. Since the API always tracks latest Substrate, this change has been applied by default. The impact of this type is that it is used in the `AccountInfo` type which is returned from `system.account`, which, in turn, tracks balances.

If on an older version of the chain, apply the older type via `RefCount: 'u8'` to your types.


## Which API can I use to query by transaction hash?

There is no such API. Substrate does not expose a "query-by-tx-hash" RPC, nor are transactions indexed by hash on the Substrate node. The reason for this is that transaction hashes are non-unique across the chain, although they will generally be unique inside a block.

For more information around this, refer to the Polkadot wiki [on unique extrinsic identifiers](https://wiki.polkadot.network/docs/en/build-protocol-info#unique-identifiers-for-extrinsics).


## Since upgrading to the 7.x series, TypeScript augmentation is missing

For TS users, since the 7.x release, type augmentation is not applied by default to the API anymore. This could manifest in various ways,

- query results may just return `Codec` instead of the actual expected type
- dependent packages, e.g. `api-derive` or `api-contract` may yield TS errors

Historically Substrate-specific types and endpoints were auto-augmented, which worked in 95% of cases, until any known module was changed/extended from default Substrate behavior or types were extended or adjusted from what Substrate exposes. This resulted in any type overrides working in some cases and returning type errors in other critical areas, without a way of adjusting this correctly for the TS compiler.

Since the start of the 7.x series, type augmentation is to be applied explicitly. To restore Substrate-only types as found earlier versions, an `import '@polkadot/api-augment'` is to be added to your codebase entry point _before_ any imports from the API itself. The various shipped aliases available are the folowing -

- `import '@polkadot/api-augment/substrate'` - same as the `@polkadot/api-augment` form, the default (and what was applied before the 7.x release)
- `import '@polkadot/api-augment/kusama'` - applies Kusama types and endpoint augmentation
- `import '@polkadot/api-augment/polkadot'` - applies Polkadot types and endpoint augmentation

For non-Kusama/Polkadot chains, the above imports should be skipped completely and only the augmentation for the specific chain, as published by the teams themselves (generated via the `typegen` package), should be imported.

Internally the `api-augment` when included applies 3 different API augmentations based on the import applied -

- applies all augmentation for tx, query, const, event endpoints for the specific chain
- `import '@polkadot/rpc-augment'` - to decorate all RPC endpoints with defaults for Substrate
- `import '@polkadot/types-augment'` - applying all generic Substrate types, this includes
  - `import '@polkadot/types-augment/lookup'` for Substrate/Kusama/Polkadot lookup types
  - `import '@polkadot/types-augment/registry'` for Substrate-specific registry types

The above breakdown could be useful to tweak and include _some_ types, while excluding others.
