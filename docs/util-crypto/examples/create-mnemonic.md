# Create & Generate Mnemonic using BIP39

The following example shows how to create and generate mnemonics using BIP39.

```javascript
const { mnemonicGenerate, mnemonicToSeed, mnemonicValidate, naclKeypairFromSeed } = require('@polkadot/util-crypto');

async function main () {
  // Create mnemonic string for Alice using BIP39
  const mnemonicAlice = mnemonicGenerate();

  console.log(`Generated mnemonic: ${mnemonicAlice}`);

  // Validate the mnemic string that was generated
  const isValidMnemonic = mnemonicValidate(mnemonicAlice);

  console.log(`isValidMnemonic: ${isValidMnemonic}`);

  // Create valid seed from mnemonic as u8a and convert it to a string
  // FIXME - Replace with mnemonicToSeed once exposed
  const seedAlice = mnemonicToSeed(mnemonicAlice);

  // Generate new public/secret keypair for Alice from the supplied seed
  const { publicKey, secretKey } = naclKeypairFromSeed(seedAlice);

  // Encrypt, Sign and Validate the message. See Example 'Sign & Verify Message'
}

main().catch(console.error).finally(() => process.exit());
```

