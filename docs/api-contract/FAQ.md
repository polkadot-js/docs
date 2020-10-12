---
title: FAQ
---

The list will be updated/expanded as questions come up, dealing with some common issues that API users find.


## My ABI cannot be parsed

When passing an older pre ink! 3.0-rc1 version of the ABI, you will have an "Invalid JSON ABI structure supplied, expected a recent metadata version" error being returned. As explained in the [getting started guide](start/install.md) as of `@polkadot/api-contract` 2.2 (and later) the older ink! 2.1 versions are not supported.

If you are using an older version you would need to use an older version of the API or upgrade your contracts to ink! 3.0.
