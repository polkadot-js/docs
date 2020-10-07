# Other addresses

As mentioned in previous sections, the keyring not only has the ability to manage accounts (i.e. keypairs), but also allows you to add addresses/contacts as well as contracts to the keyring. This is very useful in the case where you are developing a wallet and want to save external addresses to interact with.

Here we will give an overview of working with addresses, the same concepts can be expanded to work with contracts.

## Adding an address

For accounts, we have the `addUri(...)` endpoint that allows us to create and save an account. For addresses, we the keyring exposes `saveAddress (address: string, meta: KeyringPair$Meta)`, which we can use to save any address -

```js
...
// add the address
const FAUCET_ADDR = 'FvnazYM5KAetYpXoVDfqt9WFcJogKbekXVJ3Fz5oW2Dv82P';
const json = keyring.saveAddress(FAUCET_ADDR, { name: 'Alex faucet' });

// the faucet will now be in the list of available addresses
keyring.getAddresses().forEach(...)
```

From this point forward, the address is in your keyring and can be retrieved via the `getAddresses()` interface. The same call can be used to update the meta for the address, for instance if we wish to change the name above, we can do -

```js
...
const json = keyring.saveAddress(FAUCET_ADDR, { name: 'Alexander Faucet' });
```

And the already-saved address will be updated with the new metadata.

## Removing an address

To clear and address and remove it from the keyring, we can use the `forgetAddress(address: string)` call, this mirrors the `forgetAccount(address: string)` and `forgetContract(address: string)` calls. For instance -

```js
...
// remove the specific address
keyring.forgetAddress(FAUCET_ADDR);

/// the faucet will not be in the list of addresses anymore
keyring.getAddresses().forEach(...)
```
