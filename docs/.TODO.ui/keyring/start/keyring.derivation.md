# Account derivation

[Secret URIs](https://github.com/paritytech/substrate/wiki/Secret-URI-Test-Vectors) are a way of describing the phrase/seed along with derivation paths. This explains the naming of the default add as `addUri(...)`, it can handle mnemonics, seeds and apply suri derivations on these.

## Diving in

As a follow-up on what we have done in the preceding section, we take a dive into expanding our account addition with derivation, in this case we are applying two hard paths, `hard` followed by `derivation` -

```js
...
// add the account with hard derivation paths
keyring.addUri(`${mnemonic}//hard//derivation`, 'donotcare', { name: 'testing derive' });
```

This format is standard across the `@polkadot/keyring`, `@polkadot/ui-keyring` as well as [Substrate subkey](https://github.com/paritytech/substrate/tree/master/subkey), so it is a Polkadot/Substrate specific way of defining derivation paths.

## Understanding paths

To build a suri, you paths, the format is always `<mnemonic or seed>[//hard][/soft][///password]` and it is  passed as-is to the `addUri(...)` function. the derivation types are -

- Soft derivation, i.e `/<soft path>` - Here a single slash, `/`, denotes a soft derivation. Please note that any pair with an `ed25519` type does not support soft derivations, these are only applicable to `sr25519` types.

- Hard derivation, i.e. `//<hard path>` - Here two slashes, `//`, denoted a hard derivation. This  is available to both `sr25519` and `ed25519` pairs. Underlying it will apply a hashing function on the secret, generating a new secret for the remainder of the derivations.

- Password, i.e. `///<password>` - Here three slashed, `///`, denoted the (optional) password. Unlike hard and soft derivations that can be mixed, only a single password should be specified. The password here applies to the actual uri, not be be confused by the JSON encryption password. It is an additional security layer - if your full mnemonic and all paths do leak without the password, a bad actor would still not be able to generate a compatible secret to access funds without the password.

## Retrieving accounts

With a fim grasp on adding accounts, next we will take a look at [retrieving account and account subscriptions](keyring.retrieve.md).
