---
title: Overview
slug: /extension
---

The [@polkadot/extension-dapp](https://www.npmjs.com/package/@polkadot/extension-dapp) package provides an extractor that manipulates the `window.injectedWeb3` to retrieve all the providers added to the page. It has a number of utilities

- `web3Enable(dappName: string): Promise<InjectedExtension[]>` - to be called before anything else, retrieves the list of all injected extensions/providers
- `web3Accounts(): Promise<InjectedAccountWithMeta[]>` - returns a list of all the injected accounts, across all extensions (source in meta)
- `web3AccountsSubscribe(cb: (accounts: InjectedAccountWithMeta[]) => any): Promise<Unsubcall>` - subscribes to the accounts accross all extensions, returning a full list as changes are made
- `web3FromAddress(address: string): Promise<InjectedExtension>` - Retrieves a provider for a specific address
- `web3FromSource(name: string): Promise<InjectedExtension>` - Retrieves a provider identified by the name
- `isWeb3Injected: boolean` - boolean to indicate if `injectedWeb3` was found on the page
- `web3EnablePromise: Promise<InjectedExtension[]> | null` - `null` or the promise as a result of the last call to `web3Enable`

To get started, follow the [installation and usage](usage.md) walk through.
