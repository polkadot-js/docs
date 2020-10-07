# Available Packages

Let's take a slightly deeper diver into the available packages that we provide. While we won't (yet) cover the specifics of Frameworks-specifics (such as React, React Native or Vue), we will also take a slight detour from the rest of the  getting started sections, just allowing a comprehensive overview of everything provided... including the framework-specifics.

## Organization

Before we get to the available packages, just a note on the organization of the available items. We have a number of types of packages, with the following prefixes -

- `@polkadot/example-*` - These are very basic examples that shows how to actually use the libraries in your own applications. for instance the `@polkadot/example-vue` shows step-by-step how to build a simple key generator with the keyring and the Vue-specific icons. (The `@polkadot/example-react` is equivalent... and we would love to see the same for React Native...)

- `@polkadot/ui-*` - These packages are all framework agnostic. It doesn't matter if you use Angular, React or Vue - these packages are designed to be framework independent and should work in any environment that has the intent of being displayed in a browser window, yes, including Electron.

- `@polkadot/react-*` - As the name suggests, these packages are meant for use with React. In some cases (e.g. UOS support), these may be slightly ahead of other frameworks. However where an equivalent package exists, we always aim for feature parity.

- `@polkadot/reactnative-*` - Specifically for React Native applications.

- `@polkadot/vue-*` - Specifically for Vue applications.

With the above in mind, let's take an initial tour through the various generic implementations.

##  Generic UI libraries

As indicated, all of the `@polkadot/ui-*` packages are meant to be framework independent. The only common thread between these are that they are designed for use inside a browser, with no requirement for using a development framework.

The first package we will look at is the [@polkadot/ui-assets package](https://www.npmjs.com/package/@polkadot/ui-assets). It really is just a collection of images that are available for various chains & nodes and makes no assumption about how you are including it in your app, or rather which packager you use.

Up next is a critical component of any non-trivial app that also manages accounts, [@polkadot/ui-keyring](https://www.npmjs.com/package/@polkadot/ui-keyring). It is a browser-specific wrapper around the [@polkadot/keyring pcakge](https://www.npmjs.com/package/@polkadot/keyring) that transparently handles access to accounts, addresses, contracts and storage (saving accounts between use) all while allowing for swapable storage depending on your environment, be it browser, extension or Electron.

[@polkadot/ui-settings](https://www.npmjs.com/package/@polkadot/ui-settings) provides a set of default settings, UI end network related, that could be useful to application developers in certain circumstances. The relates to settings such are ss58 formats, network endpoints and other.

Last-up is the [@polkadot/ui-shared](https://www.npmjs.com/package/@polkadot/ui-shared) package. It is not deemed as generally useful to building apps, but rather contains shared code that is used within other packages, for instance in the generation of icons.

## Diving in

Now that we have some bearing of where we are, it is time to take a dive in, [let's start with the keyring and see what we can do](keyring.md).
