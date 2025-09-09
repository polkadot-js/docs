---
title: Transfer events
---

Display the events that occur during a transfer by sending a value to a random account

```javascript
// Import the API & Provider and some utility functions
import { ApiPromise } from "@polkadot/api";

// Import the test keyring (already has dev keys for Alice, Bob, Charlie, Eve & Ferdie)
import { Keyring } from "@polkadot/keyring";

// Utility function for random values
import { randomAsU8a } from "@polkadot/util-crypto";

// Some constants we are using in this sample
const ALICE_MNEMONIC = "//Alice";
const AMOUNT = 10000;

async function main() {
  // Create the API and wait until ready
  const api = await ApiPromise.create();

  // Create an instance of our testing keyring
  // If you're using ES6 module imports instead of require, just change this line to:
  const keyring = new Keyring({ type: "sr25519" });

  // Find the actual keypair in the keyring
  const alicePair = keyring.addFromMnemonic(ALICE_MNEMONIC);

  // Get the nonce for the admin key
  let nonce = (
    await api.rpc.system.accountNextIndex(alicePair.address)
  ).toBigInt();

  // Create a new random recipient
  const recipient = keyring.addFromSeed(randomAsU8a(32)).address;

  console.log(
    "Sending",
    AMOUNT,
    "from",
    alicePair.address,
    "to",
    recipient,
    "with nonce",
    nonce.toString()
  );

  // Do the transfer and track the actual status
  api.tx.balances
    .transferKeepAlive(recipient, AMOUNT)
    .signAndSend(alicePair, { nonce }, ({ events = [], status }) => {
      console.log("Transaction status:", status.type);

      if (status.isInBlock) {
        console.log("Included at block hash", status.asInBlock.toHex());
        console.log("Events:");

        events.forEach(({ event: { data, method, section }, phase }) => {
          console.log(
            "\t",
            phase.toString(),
            `: ${section}.${method}`,
            data.toString()
          );
        });
      } else if (status.isFinalized) {
        console.log("Finalized block hash", status.asFinalized.toHex());

        process.exit(0);
      }
    });
}

main().catch(console.error);
```
