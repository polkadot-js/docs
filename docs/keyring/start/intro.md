---
title: Overview
slug: /keyring/start
---

These sections should provide you with all the information needed to install the `@polkadot/keyring` package, understand the structure of the interfaces and allow you to start using it. For existing users this really should be titled "Things I wish I knew before I started using the keyring" - it really aims to close the gap to allow anybody to get to grips with using the package.


## ES2015 Usage and examples

Before we jump into the guide, be aware that in all cases we are using ES2015, including using things like `async`/`await`, `import` and others. Depending on your environment, this may require some adjustments.

While we are using the `await` naked in all examples (this removes boilerplate and allows us to focus on the actual libraries), and unless your environment supports top-level await, it will need to be wrapped in an `async` block. So basically to make in run-able we sould wrap all samples inside a `async function main () { ... }` and then just call `main().then(() => console.log('completed'))`.

In the case of Node.js you would change the `import` into `require`, i.e.

```js
// Import
const { Keyring } = require('@polkadot/keyring');
...
```

While Node.js as of later versions supports the `import` syntax, we are only exporting CommonJS modules, hence the need for require.


## What this is not

This is not line-by-line documentation of all the existing function calls available, nor it is tied to a specific environment. There will be some things in the Keyring that are probably not covered, which brings us to the next point...


## Help us help others

If you spot gaps in the information provided, or are uncertain about any specific area, please do [log an issue](https://github.com/polkadot-js/docs/issues) or if you are that way inclined, make a pull-request. We really want to have good documentation in these areas and allow people to be productive right from the start.


## Ready? Steady? Go!

If you already have a good grasp on the API and are just looking for a specific answer, you may want to take a look at the [Frequently Asked Questions](../FAQ.md). With all that said, let's get started... [What should be installed, and how should we do it?](install.md)
