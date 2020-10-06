---
id: FAQ
title: FAQ
---

The list will be updated/expanded as questions come up, dealing with some common issues that Keyring users find.


## How do I extract the secretKey from the keypair?

It is not possible. Each pair has a closure around the actual sensitive information and while it exposes functions to use the secret, it oes not expose the secret itself. So while there is a `.publicKey` getter on a pair the equivalent `.secretKey` does not exist. Doing this allows extra protection for a certain kinds of attacks and leaks of keys in all JS-based environments.

If the interfaces on the pair are not enough and explicit access to the secret is required, the best approach would be to explicitly derive the keys for e.g. the mnemonic. As example of an [ed25519 secretKey extraction](../util-crypto/examples/create-mnemonic) can be found in the util-crypto examples.
