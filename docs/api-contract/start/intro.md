---
title: Overview
slug: /api-contract/start
---

These sections should provide you with all the information needed to install the `@polkadot/api-contract` package, understand the structure of the interfaces and allow you to start using it. For existing users this really should be titled "Things I wish I knew before I started using contracts" - it really aims to close the gap to allow anybody to get to grips with using the package.


## ES2015 Usage and examples

Before we jump into the guide, be aware that in all cases we are using ES2015, including using things like `async`/`await`, `import` and others. Depending on your environment, this may require some adjustments.

We are using the `await` naked in all examples (removing boilerplate allows us to focus on the actual libraries), so unless your environment supports top-level await, you will need to wrap the code samples in an `async` block `async function main () { ... }` and then just call `main().then(() => console.log('completed'))`.


## What this is not

This is not line-by-line documentation of all the existing function calls available, nor it is tied to a specific environment. There will be some things in the Keyring that are probably not covered, which brings us to the next point...


## Help us help others

If you spot gaps in the information provided, or are uncertain about any specific area, please do [log an issue](https://github.com/polkadot-js/docs/issues) or if you are that way inclined, make a pull-request. We really want to have good documentation in these areas and allow people to be productive right from the start.


## Ready? Steady? Go!

Let's get started... [What should be installed, and how should we do it?](install.md)
