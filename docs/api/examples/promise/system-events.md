---
title: Traverse events
---

Query the system events and extract information from them. This example runs until exited via Ctrl-C

```javascript
// Import the API
const { ApiPromise } = require('@polkadot/api');

async function main () {
  // Create our API with a default connection to the local node
  const api = await ApiPromise.create();

  // Subscribe to system events via storage
  api.query.system.events((events: Array<object>) => {
      console.log(`\nReceived ${events.length} events:`); 
      // Loop through the Vec<EventRecord>

      events.forEach((record: any) => {
          //print  the record 
          // console.log(record.toHuman()); 
          // Extract the phase, event and the event types
          const { event, phase } = record;
          const types = event.typeDef;

          // Show what we are busy with
          console.log(`\t${event.section}:${event.method}:: (phase=${phase})`);
          console.log(`\t\t${event.meta}`);

          // Loop through each of the parameters, displaying the type and data
          event.data.forEach((data: any, index: any) => {
              console.log(`\t\t\t${types[index].type}: ${data}`);
          });
      });
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(-1);
});
```
