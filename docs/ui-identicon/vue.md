---
title: Vue
---

A generic identity icon that can render icons based on an address.

## Usage Examples

To install the component, do `yarn add @polkadot/vue-identicon`

Inside a Vue component, you can now render any account with the associated icon, with associated props -

- `value` - the address you wish to display
- `size` (optional, defaults to `64`) - the size in pixels
- `theme` (optional, defaults to `substrate`) - the theme to use, one of
  - `polkadot` or
  - `substrate` (equivalent to `jdenticon`) or
  - `beachball` or
  - `empty` (displays nothing)

```javascript
<template>
  <Identicon
    :size="128"
    :theme="'polkadot'"
    :value="'5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'"
  />
</template>

<script>
  import Identicon from '@polkadot/vue-identicon';

  export default {
    ...
    components: { Identicon }
    ...
  };
</script>
```
