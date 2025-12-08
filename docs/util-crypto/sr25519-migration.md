# sr25519 Migration Guide

## Overview

Polkadot.js has migrated from WASM-based sr25519 cryptography to [`@scure/sr25519`](https://github.com/paulmillr/scure-sr25519), a pure JavaScript implementation. This change brings several benefits:

- **No WASM initialization required** - Functions are now synchronous
- **Smaller bundle size** - Few lines of pure JS vs WASM binaries
- **Better compatibility** - Works seamlessly across all JavaScript environments
- **Audited & secure** - Multiple independent security audits by Oak Security

## Breaking Changes

### 1. Synchronous Operations (No More `async`/`await`)

**Before (WASM):**
```javascript
import { cryptoWaitReady, sr25519Sign } from '@polkadot/util-crypto';

async function signMessage() {
  // Wait for WASM to initialize
  await cryptoWaitReady();
  
  const signature = await sr25519Sign(message, keypair);
  return signature;
}
```

**After (Pure JS):**
```javascript
import { sr25519Sign } from '@polkadot/util-crypto';

function signMessage() {
  // No initialization needed - works immediately
  const signature = sr25519Sign(message, keypair);
  return signature;
}
```

### 2. No WASM Initialization

You no longer need to call `cryptoWaitReady()` for sr25519 operations. The following patterns are now unnecessary:

```javascript
// ❌ OLD - No longer needed
await cryptoWaitReady();

// ❌ OLD - No longer needed
if (isReady) {
  // sr25519 operations
}
```

All sr25519 functions are ready to use immediately upon import.

## Migration Checklist

- [ ] Remove `await` from sr25519 function calls
- [ ] Remove `cryptoWaitReady()` calls if only used for sr25519
- [ ] Remove `async` from functions that only contained sr25519 operations
- [ ] Update error handling (no more promise rejections)
- [ ] Test synchronous execution flow in your application

## API Changes

### Key Generation

```javascript
// ✅ NEW - Synchronous
import { sr25519PairFromSeed } from '@polkadot/util-crypto';

const seed = new Uint8Array(32); // Your seed
const keypair = sr25519PairFromSeed(seed);
```

### Signing

```javascript
// ✅ NEW - Synchronous
import { sr25519Sign } from '@polkadot/util-crypto';

const message = new Uint8Array([1, 2, 3, 4]);
const signature = sr25519Sign(message, keypair);
```

### Verification

```javascript
// ✅ NEW - Synchronous
import { sr25519Verify } from '@polkadot/util-crypto';

const isValid = sr25519Verify(message, signature, publicKey);
```

### Key Derivation

```javascript
// ✅ NEW - Synchronous
import { sr25519DeriveHard, sr25519DeriveSoft } from '@polkadot/util-crypto';

// Hard derivation
const derived = sr25519DeriveHard(keypair, chainCode);

// Soft derivation
const derivedSoft = sr25519DeriveSoft(keypair, chainCode);
```

### VRF Operations

```javascript
// ✅ NEW - Synchronous
import { sr25519VrfSign, sr25519VrfVerify } from '@polkadot/util-crypto';

const vrfSignature = sr25519VrfSign(message, keypair, context);
const vrfValid = sr25519VrfVerify(message, vrfSignature, publicKey, context);
```

## Performance Considerations

### Bundle Size
- **WASM implementation**: ~100KB+ (WASM binary + JS wrapper)
- **Pure JS implementation**: ~15KB minified

### Execution Speed
- Pure JS may be slightly slower than WASM for bulk operations
- For typical single-signature operations, the difference is negligible
- No initialization overhead (WASM required loading and compilation)

### When to Use
The pure JS implementation is ideal for:
- Browser applications (smaller bundles, faster load times)
- Server-side applications (no WASM compilation overhead)
- Mobile applications (better compatibility)
- Applications requiring immediate cryptographic operations

## Security & Audits

The `@scure/sr25519` library has undergone multiple independent security audits. All audit reports are publicly available:
- [Oak Security Audit Reports](https://github.com/oak-security/audit-reports/tree/main/Polkadot)

The library was funded by the Polkadot Treasury and developed specifically for the Polkadot ecosystem.

## Node.js Version Requirements

- **Current**: Node.js v18+ (using `@scure/sr25519` v0.2.x)
- **Future**: Node.js v20+ recommended (for ESM-only v0.3.x updates)

## Common Patterns

### Before & After Examples

#### Example 1: Creating and Signing with a Keypair

```javascript
// ❌ OLD
import { cryptoWaitReady, sr25519PairFromSeed } from '@polkadot/util-crypto';

async function createAndSign(seed, message) {
  await cryptoWaitReady();
  const pair = sr25519PairFromSeed(seed);
  return pair.sign(message);
}

// ✅ NEW
import { sr25519PairFromSeed } from '@polkadot/util-crypto';

function createAndSign(seed, message) {
  const pair = sr25519PairFromSeed(seed);
  return pair.sign(message);
}
```

#### Example 2: Batch Verification

```javascript
// ❌ OLD
async function verifyMultiple(signatures) {
  await cryptoWaitReady();
  return signatures.map(({ msg, sig, pub }) => 
    sr25519Verify(msg, sig, pub)
  );
}

// ✅ NEW
function verifyMultiple(signatures) {
  return signatures.map(({ msg, sig, pub }) => 
    sr25519Verify(msg, sig, pub)
  );
}
```

#### Example 3: Initialization in React

```javascript
// ❌ OLD
function MyComponent() {
  const [ready, setReady] = useState(false);
  
  useEffect(() => {
    cryptoWaitReady().then(() => setReady(true));
  }, []);
  
  if (!ready) return <Loading />;
  return <App />;
}

// ✅ NEW
function MyComponent() {
  // No initialization needed - just use it!
  return <App />;
}
```

## Troubleshooting

### "Function is not async but I'm using await"
Remove the `await` keyword - sr25519 functions are now synchronous.

### "cryptoWaitReady is not defined"
Remove calls to `cryptoWaitReady()` - it's no longer needed for sr25519 operations.

### "Performance seems slower"
For bulk operations, consider batching or using Web Workers. For typical use cases, performance should be comparable or better due to no initialization overhead.

### "TypeScript errors about async/await"
Update your function signatures to remove `async` and `Promise` return types for sr25519 operations.

## Additional Resources

- [`@scure/sr25519` GitHub Repository](https://github.com/paulmillr/scure-sr25519)
- [Polkadot.js Documentation](https://polkadot.js.org/docs/)
- [Original PR Discussion](https://github.com/polkadot-js/common/pull/1971)
- [Oak Security Audit Reports](https://github.com/oak-security/audit-reports/tree/main/Polkadot)

## Questions or Issues?

If you encounter any issues during migration:
1. Check this guide for common patterns
2. Review the [@polkadot-js/common GitHub issues](https://github.com/polkadot-js/common/issues)
3. Open an issue on the [@polkadot-js/common repository](https://github.com/polkadot-js/common/issues/new)

---