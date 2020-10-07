# Keyring accounts

With our keyring setup completed in the previous section, and all available accounts loaded, we are ready to proceed. However we have not actually loaded any accounts yet, since well, we have not created or stored any previously. So let's change that.

## Adding accounts

The keyring has a number of ways to add accounts, but in 99% of the cases, you should need only a single method to add an account to the keyring - `addUri(suri: string, password?: string, meta: KeyringPair$Meta = {}, type?: KeypairType)`. Let's jump in with some explicit examples -

```js
import { mnemonicGenerate } from '@polkadot/util-crypto';

...
// generate a random mnemonic, 12 words in length
const mnemonic = mnemonicGenerate(12);

// add the account, encrypt the stored JSON with an account-specific password
const { pair, json } = keyring.addUri(mnemonic, 'myStr0ngP@ssworD', { name: 'mnemonic acc' });
```

The above example is relatively straight-forward. Create an account with the specified mnemonic, encrypt the account (as stored) with the password and attach some metadata to the account. It returns a pair instance (we will work with these later) as well as the encrypted json as is saved to the store.

Metadata is free form, with any indicators that you would find useful in your application. Some fields that are known to be used in (and also exists other keyring entries such as contacts & contracts) includes -

- `genesisHash` - a hex value of the genesis this accounts belong to. If specified, the account will only be loaded when the same genesisHash is available in the keyring options

- `name` - a human-readable description for the account

## Non-mnemonic accounts

Generally, we would encourage all wallets and users to only support mnemonic phrases - these are portable between crypto implementations, has built-in checksums and is a standard across the blockchain environment.

In some cases however, either due to the need to provide backwards compatibility or for closed environments, other seed types may be used. The `addUri` will detect the type of input, i.e. if a hex-encoded value is provided, it will treat it as a raw seed. With this in mind, we can rewrite our example above to generate a random raw seed -

```js
import { randomAsHex } from '@polkadot/util-crypto';

...
// generate a random hex raw seed, this needs to be 32 bytes in length
const seed = randomAsHex(32);

// add the account, encrypting it, override to ed25519
const { pair, json } = keyring.addUri(seed, 'weakpass', { name: 'hex seed acc' }, 'ed25519');
```

In addition to creating the account in the same fashion as in the preceding section, we are overriding the type of the account created here. Assuming we created the keyring with the `type: 'sr25519'` option, the first mnemonic account was created with an `sr25519` type. Here we specify the type of crypto explicitly, and therefore create a non-default (for this keyring instance) `ed25519` type.

## Deriving accounts

In the next section, we will expand our account creation capabilities and take a look at [account derivation and passing suri options](keyring.derivation.md).
