---
title: JSON-RPC
---

The following sections contain known RPC methods that may be available on specific nodes (depending on configuration and available pallets) and allow you to interact with the actual node, query, and submit.

- **[author](#author)**

- **[babe](#babe)**

- **[beefy](#beefy)**

- **[chain](#chain)**

- **[childstate](#childstate)**

- **[grandpa](#grandpa)**

- **[mmr](#mmr)**

- **[offchain](#offchain)**

- **[payment](#payment)**

- **[rpc](#rpc)**

- **[state](#state)**

- **[syncstate](#syncstate)**

- **[system](#system)**


___


## author
 
### hasKey(publicKey: `Bytes`, keyType: `Text`): `bool`
- **interface**: `api.rpc.author.hasKey`
- **jsonrpc**: `author_hasKey`
- **summary**: Returns true if the keystore has private keys for the given public key and key type.
- **unsafe**: This method is only active with appropriate flags
 
### hasSessionKeys(sessionKeys: `Bytes`): `bool`
- **interface**: `api.rpc.author.hasSessionKeys`
- **jsonrpc**: `author_hasSessionKeys`
- **summary**: Returns true if the keystore has private keys for the given session public keys.
- **unsafe**: This method is only active with appropriate flags
 
### insertKey(keyType: `Text`, suri: `Text`, publicKey: `Bytes`): `Bytes`
- **interface**: `api.rpc.author.insertKey`
- **jsonrpc**: `author_insertKey`
- **summary**: Insert a key into the keystore.
- **unsafe**: This method is only active with appropriate flags
 
### pendingExtrinsics(): `Vec<Extrinsic>`
- **interface**: `api.rpc.author.pendingExtrinsics`
- **jsonrpc**: `author_pendingExtrinsics`
- **summary**: Returns all pending extrinsics, potentially grouped by sender
 
### removeExtrinsic(bytesOrHash: `Vec<ExtrinsicOrHash>`): `Vec<Hash>`
- **interface**: `api.rpc.author.removeExtrinsic`
- **jsonrpc**: `author_removeExtrinsic`
- **summary**: Remove given extrinsic from the pool and temporarily ban it to prevent reimporting
- **unsafe**: This method is only active with appropriate flags
 
### rotateKeys(): `Bytes`
- **interface**: `api.rpc.author.rotateKeys`
- **jsonrpc**: `author_rotateKeys`
- **summary**: Generate new session keys and returns the corresponding public keys
- **unsafe**: This method is only active with appropriate flags
 
### submitAndWatchExtrinsic(extrinsic: `Extrinsic`): `ExtrinsicStatus`
- **interface**: `api.rpc.author.submitAndWatchExtrinsic`
- **jsonrpc**: `author_submitAndWatchExtrinsic`
- **summary**: Submit and subscribe to watch an extrinsic until unsubscribed
 
### submitExtrinsic(extrinsic: `Extrinsic`): `Hash`
- **interface**: `api.rpc.author.submitExtrinsic`
- **jsonrpc**: `author_submitExtrinsic`
- **summary**: Submit a fully formatted extrinsic for block inclusion

___


## babe
 
### epochAuthorship(): `HashMap<AuthorityId, EpochAuthorship>`
- **interface**: `api.rpc.babe.epochAuthorship`
- **jsonrpc**: `babe_epochAuthorship`
- **summary**: Returns data about which slots (primary or secondary) can be claimed in the current epoch with the keys in the keystore
- **unsafe**: This method is only active with appropriate flags

___


## beefy
 
### getFinalizedHead(): `H256`
- **interface**: `api.rpc.beefy.getFinalizedHead`
- **jsonrpc**: `beefy_getFinalizedHead`
- **summary**: Returns hash of the latest BEEFY finalized block as seen by this client.
 
### subscribeJustifications(): `BeefyVersionedFinalityProof`
- **interface**: `api.rpc.beefy.subscribeJustifications`
- **jsonrpc**: `beefy_subscribeJustifications`
- **summary**: Returns the block most recently finalized by BEEFY, alongside its justification.

___


## chain
 
### getBlock(hash?: `BlockHash`): `SignedBlock`
- **interface**: `api.rpc.chain.getBlock`
- **jsonrpc**: `chain_getBlock`
- **summary**: Get header and body of a relay chain block
 
### getBlockHash(blockNumber?: `BlockNumber`): `BlockHash`
- **interface**: `api.rpc.chain.getBlockHash`
- **jsonrpc**: `chain_getBlockHash`
- **summary**: Get the block hash for a specific block
 
### getFinalizedHead(): `BlockHash`
- **interface**: `api.rpc.chain.getFinalizedHead`
- **jsonrpc**: `chain_getFinalizedHead`
- **summary**: Get hash of the last finalized block in the canon chain
 
### getHeader(hash?: `BlockHash`): `Header`
- **interface**: `api.rpc.chain.getHeader`
- **jsonrpc**: `chain_getHeader`
- **summary**: Retrieves the header for a specific block
 
### subscribeAllHeads(): `Header`
- **interface**: `api.rpc.chain.subscribeAllHeads`
- **jsonrpc**: `chain_subscribeAllHeads`
- **summary**: Retrieves the newest header via subscription
 
### subscribeFinalizedHeads(): `Header`
- **interface**: `api.rpc.chain.subscribeFinalizedHeads`
- **jsonrpc**: `chain_subscribeFinalizedHeads`
- **summary**: Retrieves the best finalized header via subscription
 
### subscribeNewHeads(): `Header`
- **interface**: `api.rpc.chain.subscribeNewHeads`
- **jsonrpc**: `chain_subscribeNewHeads`
- **summary**: Retrieves the best header via subscription

___


## childstate
 
### getKeys(childKey: `PrefixedStorageKey`, prefix: `StorageKey`, at?: `Hash`): `Vec<StorageKey>`
- **interface**: `api.rpc.childstate.getKeys`
- **jsonrpc**: `childstate_getKeys`
- **summary**: Returns the keys with prefix from a child storage, leave empty to get all the keys
 
### getKeysPaged(childKey: `PrefixedStorageKey`, prefix: `StorageKey`, count: `u32`, startKey?: `StorageKey`, at?: `Hash`): `Vec<StorageKey>`
- **interface**: `api.rpc.childstate.getKeysPaged`
- **jsonrpc**: `childstate_getKeysPaged`
- **summary**: Returns the keys with prefix from a child storage with pagination support
 
### getStorage(childKey: `PrefixedStorageKey`, key: `StorageKey`, at?: `Hash`): `Option<StorageData>`
- **interface**: `api.rpc.childstate.getStorage`
- **jsonrpc**: `childstate_getStorage`
- **summary**: Returns a child storage entry at a specific block state
 
### getStorageEntries(childKey: `PrefixedStorageKey`, keys: `Vec<StorageKey>`, at?: `Hash`): `Vec<Option<StorageData>>`
- **interface**: `api.rpc.childstate.getStorageEntries`
- **jsonrpc**: `childstate_getStorageEntries`
- **summary**: Returns child storage entries for multiple keys at a specific block state
 
### getStorageHash(childKey: `PrefixedStorageKey`, key: `StorageKey`, at?: `Hash`): `Option<Hash>`
- **interface**: `api.rpc.childstate.getStorageHash`
- **jsonrpc**: `childstate_getStorageHash`
- **summary**: Returns the hash of a child storage entry at a block state
 
### getStorageSize(childKey: `PrefixedStorageKey`, key: `StorageKey`, at?: `Hash`): `Option<u64>`
- **interface**: `api.rpc.childstate.getStorageSize`
- **jsonrpc**: `childstate_getStorageSize`
- **summary**: Returns the size of a child storage entry at a block state

___


## grandpa
 
### proveFinality(blockNumber: `BlockNumber`): `Option<EncodedFinalityProofs>`
- **interface**: `api.rpc.grandpa.proveFinality`
- **jsonrpc**: `grandpa_proveFinality`
- **summary**: Prove finality for the given block number, returning the Justification for the last block in the set.
 
### roundState(): `ReportedRoundStates`
- **interface**: `api.rpc.grandpa.roundState`
- **jsonrpc**: `grandpa_roundState`
- **summary**: Returns the state of the current best round state as well as the ongoing background rounds
 
### subscribeJustifications(): `JustificationNotification`
- **interface**: `api.rpc.grandpa.subscribeJustifications`
- **jsonrpc**: `grandpa_subscribeJustifications`
- **summary**: Subscribes to grandpa justifications

___


## mmr
 
### generateProof(blockNumbers: `Vec<u64>`, bestKnownBlockNumber?: `u64`, at?: `BlockHash`): `MmrLeafBatchProof`
- **interface**: `api.rpc.mmr.generateProof`
- **jsonrpc**: `mmr_generateProof`
- **summary**: Generate MMR proof for the given block numbers.
 
### root(at?: `BlockHash`): `MmrHash`
- **interface**: `api.rpc.mmr.root`
- **jsonrpc**: `mmr_root`
- **summary**: Get the MMR root hash for the current best block.
 
### verifyProof(proof: `MmrLeafBatchProof`): `bool`
- **interface**: `api.rpc.mmr.verifyProof`
- **jsonrpc**: `mmr_verifyProof`
- **summary**: Verify an MMR proof
 
### verifyProofStateless(root: `MmrHash`, proof: `MmrLeafBatchProof`): `bool`
- **interface**: `api.rpc.mmr.verifyProofStateless`
- **jsonrpc**: `mmr_verifyProofStateless`
- **summary**: Verify an MMR proof statelessly given an mmr_root

___


## offchain
 
### localStorageGet(kind: `StorageKind`, key: `Bytes`): `Option<Bytes>`
- **interface**: `api.rpc.offchain.localStorageGet`
- **jsonrpc**: `offchain_localStorageGet`
- **summary**: Get offchain local storage under given key and prefix
- **unsafe**: This method is only active with appropriate flags
 
### localStorageSet(kind: `StorageKind`, key: `Bytes`, value: `Bytes`): `Null`
- **interface**: `api.rpc.offchain.localStorageSet`
- **jsonrpc**: `offchain_localStorageSet`
- **summary**: Set offchain local storage under given key and prefix
- **unsafe**: This method is only active with appropriate flags

___


## payment
 
### queryFeeDetails(extrinsic: `Bytes`, at?: `BlockHash`): `FeeDetails`
- **interface**: `api.rpc.payment.queryFeeDetails`
- **jsonrpc**: `payment_queryFeeDetails`
- **summary**: Query the detailed fee of a given encoded extrinsic
- **deprecated**: Use `api.call.transactionPaymentApi.queryFeeDetails` instead
 
### queryInfo(extrinsic: `Bytes`, at?: `BlockHash`): `RuntimeDispatchInfoV1`
- **interface**: `api.rpc.payment.queryInfo`
- **jsonrpc**: `payment_queryInfo`
- **summary**: Retrieves the fee information for an encoded extrinsic
- **deprecated**: Use `api.call.transactionPaymentApi.queryInfo` instead

___


## rpc
 
### methods(): `RpcMethods`
- **interface**: `api.rpc.rpc.methods`
- **jsonrpc**: `rpc_methods`
- **summary**: Retrieves the list of RPC methods that are exposed by the node

___


## state
 
### call(method: `Text`, data: `Bytes`, at?: `BlockHash`): `Bytes`
- **interface**: `api.rpc.state.call`
- **jsonrpc**: `state_call`
- **summary**: Perform a call to a builtin on the chain
 
### getChildReadProof(childStorageKey: `PrefixedStorageKey`, keys: `Vec<StorageKey>`, at?: `BlockHash`): `ReadProof`
- **interface**: `api.rpc.state.getChildReadProof`
- **jsonrpc**: `state_getChildReadProof`
- **summary**: Returns proof of storage for child key entries at a specific block state.
 
### getKeys(key: `StorageKey`, at?: `BlockHash`): `Vec<StorageKey>`
- **interface**: `api.rpc.state.getKeys`
- **jsonrpc**: `state_getKeys`
- **summary**: Retrieves the keys with a certain prefix
- **deprecated**: Use `api.rpc.state.getKeysPaged` to retrieve keys
 
### getKeysPaged(key: `StorageKey`, count: `u32`, startKey?: `StorageKey`, at?: `BlockHash`): `Vec<StorageKey>`
- **interface**: `api.rpc.state.getKeysPaged`
- **jsonrpc**: `state_getKeysPaged`
- **summary**: Returns the keys with prefix with pagination support.
 
### getMetadata(at?: `BlockHash`): `Metadata`
- **interface**: `api.rpc.state.getMetadata`
- **jsonrpc**: `state_getMetadata`
- **summary**: Returns the runtime metadata
 
### getPairs(prefix: `StorageKey`, at?: `BlockHash`): `Vec<KeyValue>`
- **interface**: `api.rpc.state.getPairs`
- **jsonrpc**: `state_getPairs`
- **summary**: Returns the keys with prefix, leave empty to get all the keys (deprecated: Use getKeysPaged)
- **deprecated**: Use `api.rpc.state.getKeysPaged` to retrieve keys
- **unsafe**: This method is only active with appropriate flags
 
### getReadProof(keys: `Vec<StorageKey>`, at?: `BlockHash`): `ReadProof`
- **interface**: `api.rpc.state.getReadProof`
- **jsonrpc**: `state_getReadProof`
- **summary**: Returns proof of storage entries at a specific block state
 
### getRuntimeVersion(at?: `BlockHash`): `RuntimeVersion`
- **interface**: `api.rpc.state.getRuntimeVersion`
- **jsonrpc**: `state_getRuntimeVersion`
- **summary**: Get the runtime version
 
### getStorage(key: `StorageKey`, at?: `BlockHash`): `StorageData`
- **interface**: `api.rpc.state.getStorage`
- **jsonrpc**: `state_getStorage`
- **summary**: Retrieves the storage for a key
 
### getStorageHash(key: `StorageKey`, at?: `BlockHash`): `Hash`
- **interface**: `api.rpc.state.getStorageHash`
- **jsonrpc**: `state_getStorageHash`
- **summary**: Retrieves the storage hash
 
### getStorageSize(key: `StorageKey`, at?: `BlockHash`): `u64`
- **interface**: `api.rpc.state.getStorageSize`
- **jsonrpc**: `state_getStorageSize`
- **summary**: Retrieves the storage size
 
### queryStorage(keys: `Vec<StorageKey>`, fromBlock: `Hash`, toBlock?: `BlockHash`): `Vec<StorageChangeSet>`
- **interface**: `api.rpc.state.queryStorage`
- **jsonrpc**: `state_queryStorage`
- **summary**: Query historical storage entries (by key) starting from a start block
- **unsafe**: This method is only active with appropriate flags
 
### queryStorageAt(keys: `Vec<StorageKey>`, at?: `BlockHash`): `Vec<StorageChangeSet>`
- **interface**: `api.rpc.state.queryStorageAt`
- **jsonrpc**: `state_queryStorageAt`
- **summary**: Query storage entries (by key) starting at block hash given as the second parameter
 
### subscribeRuntimeVersion(): `RuntimeVersion`
- **interface**: `api.rpc.state.subscribeRuntimeVersion`
- **jsonrpc**: `state_subscribeRuntimeVersion`
- **summary**: Retrieves the runtime version via subscription
 
### subscribeStorage(keys?: `Vec<StorageKey>`): `StorageChangeSet`
- **interface**: `api.rpc.state.subscribeStorage`
- **jsonrpc**: `state_subscribeStorage`
- **summary**: Subscribes to storage changes for the provided keys
 
### traceBlock(block: `Hash`, targets: `Option<Text>`, storageKeys: `Option<Text>`, methods: `Option<Text>`): `TraceBlockResponse`
- **interface**: `api.rpc.state.traceBlock`
- **jsonrpc**: `state_traceBlock`
- **summary**: Provides a way to trace the re-execution of a single block
- **unsafe**: This method is only active with appropriate flags
 
### trieMigrationStatus(at?: `BlockHash`): `MigrationStatusResult`
- **interface**: `api.rpc.state.trieMigrationStatus`
- **jsonrpc**: `state_trieMigrationStatus`
- **summary**: Check current migration state
- **unsafe**: This method is only active with appropriate flags

___


## syncstate
 
### genSyncSpec(raw: `bool`): `Json`
- **interface**: `api.rpc.syncstate.genSyncSpec`
- **jsonrpc**: `sync_state_genSyncSpec`
- **summary**: Returns the json-serialized chainspec running the node, with a sync state.

___


## system
 
### accountNextIndex(accountId: `AccountId`): `Index`
- **interface**: `api.rpc.system.accountNextIndex`
- **jsonrpc**: `system_accountNextIndex`
- **summary**: Retrieves the next accountIndex as available on the node
 
### addLogFilter(directives: `Text`): `Null`
- **interface**: `api.rpc.system.addLogFilter`
- **jsonrpc**: `system_addLogFilter`
- **summary**: Adds the supplied directives to the current log filter
- **unsafe**: This method is only active with appropriate flags
 
### addReservedPeer(peer: `Text`): `Text`
- **interface**: `api.rpc.system.addReservedPeer`
- **jsonrpc**: `system_addReservedPeer`
- **summary**: Adds a reserved peer
- **unsafe**: This method is only active with appropriate flags
 
### chain(): `Text`
- **interface**: `api.rpc.system.chain`
- **jsonrpc**: `system_chain`
- **summary**: Retrieves the chain
 
### chainType(): `ChainType`
- **interface**: `api.rpc.system.chainType`
- **jsonrpc**: `system_chainType`
- **summary**: Retrieves the chain type
 
### dryRun(extrinsic: `Bytes`, at?: `BlockHash`): `ApplyExtrinsicResult`
- **interface**: `api.rpc.system.dryRun`
- **jsonrpc**: `system_dryRun`
- **summary**: Dry run an extrinsic at a given block
- **unsafe**: This method is only active with appropriate flags
 
### health(): `Health`
- **interface**: `api.rpc.system.health`
- **jsonrpc**: `system_health`
- **summary**: Return health status of the node
 
### localListenAddresses(): `Vec<Text>`
- **interface**: `api.rpc.system.localListenAddresses`
- **jsonrpc**: `system_localListenAddresses`
- **summary**: The addresses include a trailing /p2p/ with the local PeerId, and are thus suitable to be passed to addReservedPeer or as a bootnode address for example
 
### localPeerId(): `Text`
- **interface**: `api.rpc.system.localPeerId`
- **jsonrpc**: `system_localPeerId`
- **summary**: Returns the base58-encoded PeerId of the node
 
### name(): `Text`
- **interface**: `api.rpc.system.name`
- **jsonrpc**: `system_name`
- **summary**: Retrieves the node name
 
### nodeRoles(): `Vec<NodeRole>`
- **interface**: `api.rpc.system.nodeRoles`
- **jsonrpc**: `system_nodeRoles`
- **summary**: Returns the roles the node is running as
 
### peers(): `Vec<PeerInfo>`
- **interface**: `api.rpc.system.peers`
- **jsonrpc**: `system_peers`
- **summary**: Returns the currently connected peers
- **unsafe**: This method is only active with appropriate flags
 
### properties(): `ChainProperties`
- **interface**: `api.rpc.system.properties`
- **jsonrpc**: `system_properties`
- **summary**: Get a custom set of properties as a JSON object, defined in the chain spec
 
### removeReservedPeer(peerId: `Text`): `Text`
- **interface**: `api.rpc.system.removeReservedPeer`
- **jsonrpc**: `system_removeReservedPeer`
- **summary**: Remove a reserved peer
- **unsafe**: This method is only active with appropriate flags
 
### reservedPeers(): `Vec<Text>`
- **interface**: `api.rpc.system.reservedPeers`
- **jsonrpc**: `system_reservedPeers`
- **summary**: Returns the list of reserved peers
 
### resetLogFilter(): `Null`
- **interface**: `api.rpc.system.resetLogFilter`
- **jsonrpc**: `system_resetLogFilter`
- **summary**: Resets the log filter to Substrate defaults
- **unsafe**: This method is only active with appropriate flags
 
### syncState(): `SyncState`
- **interface**: `api.rpc.system.syncState`
- **jsonrpc**: `system_syncState`
- **summary**: Returns the state of the syncing of the node
 
### version(): `Text`
- **interface**: `api.rpc.system.version`
- **jsonrpc**: `system_version`
- **summary**: Retrieves the version of the node
