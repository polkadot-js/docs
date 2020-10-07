---
title: Basics
---

The Keyring is responsible for managing a set of keypairs. As such the only function it has it to allow you to add and remove pairs to an interface. Each pair in itself is a specific account and on each of these accounts you can perform functions such as signing, verification and encryption/decryption of the account.


## Keypair types

Substrate supports a number of different crypto mechanisms. As such the keyring allows for the creation and management of different types of crypto. There is `ed25519` (Edwards), `sr25519` (schnorrkel), `ecdsa` (non-Bitcoin compatible) as well as an `ethereum` type (this is only used on Moonbeam and not supported out-of-the-box by Substrate in general).


## Standard accounts

When the Keyring is initialized, it is empty. However on development chains, Substrate has a number of standard accounts that are pre-funded. Generally when operating on development chains you will be introduced to pars such as `Alice`, `Bob`, `Charlie`, `Dave`, `Eve` and `Ferdie`. In a later section we will walk through creating these accounts, for now just be aware of the existence of these in any non-public chains.


## Initialization

After this brief walk-through and overview, we will [create a keyring, and add some accounts](create.md) in the next section.
