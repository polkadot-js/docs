---
title: FAQ
---

The list will be updated/expanded as questions come up.


## How to report a phishing website so that the extension can warn users?
The extension fetches the list of denied website from [https://github.com/polkadot-js/phishing](https://github.com/polkadot-js/phishing)
repository. To help populate this list, please submit a pull request by editing [all.json](https://github.com/polkadot-js/phishing/edit/master/all.json)
and adding any new sites in alphabetical order. Alternatively, you can [submit an issue](https://github.com/polkadot-js/phishing/issues/new)
to mention any new website. 


## How to help with the translation of the extension's interface?
To add a new language, you can submit a PR to the [extension's repository](https://github.com/polkadot-js/extension).
Start by creating a new directory in `extension/packages/extension/public/locales/` named after the language code you
wish to add (e.g "es", for spanish).
Add a file `translation.json` containing
[the translation from the english](https://github.com/polkadot-js/extension/blob/master/packages/extension/public/locales/en/translation.json).
Finally, add the new language in the selection menu by adding it to the array returned by the
[getLanguageOptions](https://github.com/polkadot-js/extension/blob/master/packages/extension-ui/src/util/getLanguageOptions.ts#L12-L27).
Once your PR is submitted and approved, the new language will be available in the next release of the extension.

## I want to send funds directly from the extension.
The extension is not meant to be a full wallet replacement. It tries to focus on pure account management
while making this as smooth as possible. The extension simply makes the stored/imported accounts available
to any dApp that can perform transfers, allows you to vote on democracy proposals, and helps you participate
in any features available on Polkadot and Substrate. We really aim to keep this singular account-only focus
with no network connectivity, leaving the hard-work of understanding chains and their intricacies over to over
to wallets such as [polkadot-js/apps](https://polkadot.js.org/apps/).

## My addresses display differently on the extension vs a dapp.
Unlike a dapp, the extension itself does not connect to a network. The addresses are formatted with a
network-specific prefix, which on a dapp, is retrieved upon connection from the chain properties. The
underlying public keys can be the same, but based on the address formatting, the display could be different.
This does not affect operation at all. You can choose which format to display the addresses in your extension
via the "Options" screen.

## What does it mean to derive an account?
We can imagine that accounts are stored as a tree. It allows us to structure accounts by our own needs.
The root account is created at first and all the new ones will be its children by default. If we want to
derive from other accounts, it can be done by selecting Derive New Account option in the parent account’s
context menu. Before deriving an account, the
[HDKD derivation path](https://github.com/paritytech/parity-signer/wiki/HDKD-on-Parity-Signer#the-form-of-path)
can be provided - it is a great tool that could be used for further account structuring.

The format of a derivation path is `//<hard>/<soft>///<password>` where
* `//hard` means that the connection between accounts is not “visible” for public addresses.
* `/soft` connects accounts in a manner that can be proven.
* `///password` provides an additional (optional) encryption.

## Why can't I import an account with a hex-encoded private key?
This is a deliberate choice since mnemonic phrases are easier to write down, to memorize or type in a field.
They have a checksum (not every 12/24 words list is a valid mnemonic) and constitute a much better means of
holding un-encrypted information. Therefore, this extension does not and will not have the functionality to
recover an account from a hex seed phrase.
