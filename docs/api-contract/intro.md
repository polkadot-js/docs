---
title: Overview
slug: /api-contract
---

The `@polkadot/api-contract` interfaces provide a thin layer on-top of the available API transactions to allow you to manage Substrate contracts in a consistent way. 

Since not all Substrate chains have contracts available, we assume that you are connecting to a chain that has the FRAME [contracts pallet](https://github.com/paritytech/substrate/tree/master/frame/contracts#readme) and that you are using a compatible compiler [cargo-contract for ink!](https://github.com/paritytech/cargo-contract), or [Solang for Solidity](https://github.com/hyperledger-labs/solang#build-for-substrate).

The API contracts interfaces transparently handle any encoding and decoding of messages and results using the available ABIs, allowing the developer to work with contract deployments and calls without having to handle encoding themselves.

To get started, follow the [getting started](start/intro.md) journey for installation and use for the [Promise-based version](https://github.com/polkadot-js/api/tree/master/packages/api-contract/src/promise) for the contracts interfaces.
