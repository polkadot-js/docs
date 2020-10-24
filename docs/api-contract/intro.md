---
title: Overview
slug: /api-contracts
---

The `@polkadot/api-contract` interfaces provides a thin layer on-top of the available API transactions to allow you to manage Substrate contracts in a consistent way. Since not all Substrate chains have contracts available, using it assumes that you are connecting to a chain that has the contracts palette.

The API contracts interfaces transparently handles any encoding and decoding of messages and results using the available ABIs, allowing the developer to work with contract deployments and calls without having to handle encoding themselves.

To get started, follow the [getting started](start/intro.md) journey for installation and use for the [Promise-based version](https://github.com/polkadot-js/api/tree/master/packages/api-contract/src/promise) for the contracts interfaces.
