---
title: Overview
slug: /keyring-ui
---

The [@polkadot/ui-keyring](https://www.npmjs.com/package/@polkadot/ui-keyring) package provides a wrapper around the [@polkadot/keyring](https://www.npmjs.com/package/@polkadot/keyring) package, specifically for use in browser environments. The `ui-keyring` only extends the `keyring`, but does not replace it. All underlying account management functions are provided by the base keyring, the browser-specific extensions allows for transparent management of account state in storage.

Additionally where the base keyring is focussed on accounts, the `ui-keyring` extends this to cater for an address-book, contracts and allows for accounts to be tied to a specific chain. Since UIs are typically split into different parts, it also allows for subscriptions on accounts, so notifications are available when accounts are added or removed.

To get started, follow the [getting started](start/intro.md) journey for installation and use.
