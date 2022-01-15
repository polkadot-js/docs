---
title: Custom RPC
---

In the previous section we looked at how to override the types the node uses and how to define extra custom types. You can also define custom RPC methods and we will cover that here.

## Custom definitions

RPCs are exposed as a method on a specific module. This means that once available: you can call any rpc via `api.rpc.<module>.<method>(...params[])`. For example, you can define a `firstModule_testMethod` on the Rust node and if correctly defined it will be callable via `api.rpc.firstModule.testMethod(...`). To supply custom RPC methods, you provide an `rpc` object on the options to the API.

```js
...
const api = await ApiPromise.create({
  rpc: {
    firstModule: {
      testMethod: {
        description: 'Just a test method',
        params: [
          {
            name: 'index',
            type: 'u64'
          },
          {
            name: 'at',
            type: 'Hash',
            isOptional: true
          }
        ],
        type: 'Balance'
      },
      anotherMethod: { ... },
      ...
    },
    anotherModule: { ... },
    ...
  },
  ...
});
```

In the above example we have defined a new method, which is now available on the API as `api.rpc.firstModule.testMethod(index: u64, at?: Hash) => Promise<Balance>`. For the optional parameters, we added `isOptional: true` alongside the `name` & `type` in the parameter definition.

Even if you define the method it will only appear on the API if it appears in the list returned by `api.rpc.rpc.methods()`, which is the list of known RPCs the node exposes. So when making changes to the node you should double-check that it does announce the RPC method and that it conforms to the format `<module>_<method>`.  For example `foo_bar` is a valid name whereas `bar` is not. I.E. Methods which do not contain both a `module` and `method` component won't be detected and cannot be decorated. If in doubt, follow the conventions in Substrate master.


## RPC options in detail

While the above example should be self-explanatory, let's quickly walk through the structure. Under the `rpc: { ... }` key in the options, keys are the name of the module exposing the RPC. So given 2 modules `firstModule` & `testModule`, and the top-level structure would be as follows:

```js
...
const api = await ApiPromise.create({
  rpc: {
    firstModule: { ... },
    testModule: { ... }
  }
});
```

Inside each module definition, the key is the name of the RPC method. In the example, we defined a `testMethod` on `firstModule`. A method definition should provide a `description` of the method, an array of type definitions for the parameters named `params`, and define the `type` of the result of the RPC call.

`params` is an array of type definitions. In the example, contains fields for `name`, `type` and an optional flag `isOptional` that indicates that the field is not required when making the call. (And example of this use would be in cases such as `state.getStorage(key, blockHash?)` where the last param is optional)


## Type creation

While the API always converts all the inputs into the underlying type required by the operation, be it for RPC, query or transaction, in some cases you may want to [create an instance of a type](types.create.md) yourself.
