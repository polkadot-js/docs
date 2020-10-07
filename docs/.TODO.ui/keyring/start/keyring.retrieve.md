# Account retrieval

Adding accounts is good. Having access to these accounts when added via `const { pair } = keyring.addUr(...)` is better, but being able to access these to iterate over at a later point (even after reload), is magic. Here we will try to add some magic to your experience, allowing you to retrieve accounts as well as subscribe to changes as they happen.

## Loading all available

As we've seen in the keyring init section, when we can `loadAll`, it loads all added added - this includes those added via `addUri(...)` which transparently saves to the provided storage. Loading means it is available in the keyring, to get a list of the accounts, we can then do -

```js
import { u8aToHex } from '@polkadot/util';

...
const accounts = keyring.getAccounts();

accounts.forEach(({ address, meta, publicKey }) =>
  console.log(address, JSON.stringify(meta), u8aToHex(publicKey))
);
```

The above interface was probably not quite what you have been expecting, rather you would have expected to get back a list of the pairs, but rather you received a list of the account descriptors. Some rationale for this approach - since we have `getAccounts()`, `getAddresses()` (for contacts) and `getContracts()` the consistent interface here is applicable. Instead based on an address, you can then retrieve a specific pair -

```js
accounts.forEach(({ address }) => {
  // retrieve via address or publicKey
  const pair = getPair(address);

  // display the locked account status
  console.log(address, pair.isLocked);
});
```

Similarly we have a `getPairs()` that mirrors `getAccounts()`, but retrieves the list of available pairs - which is the output you probably expected from the initial `getAccounts()` call.

## Subscriptions (Optional)

In addition to the retrieving of accounts on demand, we can actually subscribe to accounts for the keyring. This subscription returns a list of all accounts as they are updated, i.e. when a new account is added it will callback with a list of all the account, including the new one, when an account is removed, it will callback with a list of accounts, excluding the removed member.

```js
...
// create a subscription to all available accounts, updated real-time
const sub = keyring.accounts.subject.subscribe((accounts) => {
  accounts.forEach(({ json, option }) =>
    // json is the stored data, including address
    // option is a { name: meta.name, value: address }
  );
});

...
// at some point  when we are not interested anymore, we can unsubscribe
sub.unsubscribe();
```

As with the `get{Accounts|Addresses|Contracts}()` functions, similarly we have in addition to `keyring.accounts.subject` the `keyring.addresses.subject` and `keyring.contracts.subject` subscriptions available, with the same generic result set.

## Other address types

We have been referencing contacts and contracts and number of times up till now, up next we will take a look at [how to store other addresses, be if for an address book or contract](keyring.other.md).
