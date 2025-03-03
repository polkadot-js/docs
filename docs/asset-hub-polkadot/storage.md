---
title: Storage
---

The following sections contain Storage methods are part of the default asset-hub-polkadot runtime. On the api, these are exposed via `api.query.<module>.<method>`. 

(NOTE: These were generated from a static/snapshot view of a recent default asset-hub-polkadot runtime. Some items may not be available in older nodes, or in any customized implementations.)

- **[assetConversion](#assetconversion)**

- **[assets](#assets)**

- **[aura](#aura)**

- **[auraExt](#auraext)**

- **[authorship](#authorship)**

- **[balances](#balances)**

- **[collatorSelection](#collatorselection)**

- **[foreignAssets](#foreignassets)**

- **[messageQueue](#messagequeue)**

- **[multisig](#multisig)**

- **[nfts](#nfts)**

- **[parachainInfo](#parachaininfo)**

- **[parachainSystem](#parachainsystem)**

- **[polkadotXcm](#polkadotxcm)**

- **[poolAssets](#poolassets)**

- **[proxy](#proxy)**

- **[session](#session)**

- **[substrate](#substrate)**

- **[system](#system)**

- **[timestamp](#timestamp)**

- **[toKusamaXcmRouter](#tokusamaxcmrouter)**

- **[transactionPayment](#transactionpayment)**

- **[uniques](#uniques)**

- **[vesting](#vesting)**

- **[xcmpQueue](#xcmpqueue)**


___


## assetConversion
 
### nextPoolAssetId(): `Option<u32>`
- **interface**: `api.query.assetConversion.nextPoolAssetId`
- **summary**:    Stores the `PoolAssetId` that is going to be used for the next lp token.  This gets incremented whenever a new lp pool is created. 
 
### pools(`(StagingXcmV4Location,StagingXcmV4Location)`): `Option<PalletAssetConversionPoolInfo>`
- **interface**: `api.query.assetConversion.pools`
- **summary**:    Map from `PoolAssetId` to `PoolInfo`. This establishes whether a pool has been officially  created rather than people sending tokens directly to a pool's public account. 

___


## assets
 
### account(`u32, AccountId32`): `Option<PalletAssetsAssetAccount>`
- **interface**: `api.query.assets.account`
- **summary**:    The holdings of a specific account for a specific asset. 
 
### approvals(`u32, AccountId32, AccountId32`): `Option<PalletAssetsApproval>`
- **interface**: `api.query.assets.approvals`
- **summary**:    Approved balance transfers. First balance is the amount approved for transfer. Second  is the amount of `T::Currency` reserved for storing this.  First key is the asset ID, second key is the owner and third key is the delegate. 
 
### asset(`u32`): `Option<PalletAssetsAssetDetails>`
- **interface**: `api.query.assets.asset`
- **summary**:    Details of an asset. 
 
### metadata(`u32`): `{"deposit":"u128","name":"Bytes","symbol":"Bytes","decimals":"u8","isFrozen":"bool"}`
- **interface**: `api.query.assets.metadata`
- **summary**:    Metadata of an asset. 
 
### nextAssetId(): `Option<u32>`
- **interface**: `api.query.assets.nextAssetId`
- **summary**:    The asset ID enforced for the next asset creation, if any present. Otherwise, this storage  item has no effect. 

   This can be useful for setting up constraints for IDs of the new assets. For example, by  providing an initial [`NextAssetId`] and using the [`crate::AutoIncAssetId`] callback, an  auto-increment model can be applied to all new asset IDs. 

   The initial next asset ID can be set using the [`GenesisConfig`] or the  [SetNextAssetId](`migration::next_asset_id::SetNextAssetId`) migration. 

___


## aura
 
### authorities(): `Vec<SpConsensusAuraEd25519AppEd25519Public>`
- **interface**: `api.query.aura.authorities`
- **summary**:    The current authority set. 
 
### currentSlot(): `u64`
- **interface**: `api.query.aura.currentSlot`
- **summary**:    The current slot of this block. 

   This will be set in `on_initialize`. 

___


## auraExt
 
### authorities(): `Vec<SpConsensusAuraEd25519AppEd25519Public>`
- **interface**: `api.query.auraExt.authorities`
- **summary**:    Serves as cache for the authorities. 

   The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,  but we require the old authorities to verify the seal when validating a PoV. This will  always be updated to the latest AuRa authorities in `on_finalize`. 
 
### slotInfo(): `Option<(u64,u32)>`
- **interface**: `api.query.auraExt.slotInfo`
- **summary**:    Current slot paired with a number of authored blocks. 

   Updated on each block initialization. 

___


## authorship
 
### author(): `Option<AccountId32>`
- **interface**: `api.query.authorship.author`
- **summary**:    Author of current block. 

___


## balances
 
### account(`AccountId32`): `PalletBalancesAccountData`
- **interface**: `api.query.balances.account`
- **summary**:    The Balances pallet example of storing the balance of an account. 

   #### Example 

   ```nocompile  impl pallet_balances::Config for Runtime {  type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>  }  ``` 

   You can also store the balance of an account in the `System` pallet. 

   #### Example 

   ```nocompile  impl pallet_balances::Config for Runtime {  type AccountStore = System  }  ``` 

   But this comes with tradeoffs, storing account balances in the system pallet stores  `frame_system` data alongside the account data contrary to storing account balances in the  `Balances` pallet, which uses a `StorageMap` to store balances data only.  NOTE: This is only used in the case that this pallet is used to store balances. 
 
### freezes(`AccountId32`): `Vec<FrameSupportTokensMiscIdAmount>`
- **interface**: `api.query.balances.freezes`
- **summary**:    Freeze locks on account balances. 
 
### holds(`AccountId32`): `Vec<{"id":"AssetHubPolkadotRuntimeRuntimeHoldReason","amount":"u128"}>`
- **interface**: `api.query.balances.holds`
- **summary**:    Holds on account balances. 
 
### inactiveIssuance(): `u128`
- **interface**: `api.query.balances.inactiveIssuance`
- **summary**:    The total units of outstanding deactivated balance in the system. 
 
### locks(`AccountId32`): `Vec<PalletBalancesBalanceLock>`
- **interface**: `api.query.balances.locks`
- **summary**:    Any liquidity locks on some account balances.  NOTE: Should only be accessed when setting, changing and freeing a lock. 

   Use of locks is deprecated in favour of freezes. See `https://github.com/paritytech/substrate/pull/12951/` 
 
### reserves(`AccountId32`): `Vec<PalletBalancesReserveData>`
- **interface**: `api.query.balances.reserves`
- **summary**:    Named reserves on some account balances. 

   Use of reserves is deprecated in favour of holds. See `https://github.com/paritytech/substrate/pull/12951/` 
 
### totalIssuance(): `u128`
- **interface**: `api.query.balances.totalIssuance`
- **summary**:    The total units issued in the system. 

___


## collatorSelection
 
### candidacyBond(): `u128`
- **interface**: `api.query.collatorSelection.candidacyBond`
- **summary**:    Fixed amount to deposit to become a collator. 

   When a collator calls `leave_intent` they immediately receive the deposit back. 
 
### candidateList(): `Vec<PalletCollatorSelectionCandidateInfo>`
- **interface**: `api.query.collatorSelection.candidateList`
- **summary**:    The (community, limited) collation candidates. `Candidates` and `Invulnerables` should be  mutually exclusive. 

   This list is sorted in ascending order by deposit and when the deposits are equal, the least  recently updated is considered greater. 
 
### desiredCandidates(): `u32`
- **interface**: `api.query.collatorSelection.desiredCandidates`
- **summary**:    Desired number of candidates. 

   This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct. 
 
### invulnerables(): `Vec<AccountId32>`
- **interface**: `api.query.collatorSelection.invulnerables`
- **summary**:    The invulnerable, permissioned collators. This list must be sorted. 
 
### lastAuthoredBlock(`AccountId32`): `u32`
- **interface**: `api.query.collatorSelection.lastAuthoredBlock`
- **summary**:    Last block authored by collator. 

___


## foreignAssets
 
### account(`StagingXcmV4Location, AccountId32`): `Option<PalletAssetsAssetAccount>`
- **interface**: `api.query.foreignAssets.account`
- **summary**:    The holdings of a specific account for a specific asset. 
 
### approvals(`StagingXcmV4Location, AccountId32, AccountId32`): `Option<PalletAssetsApproval>`
- **interface**: `api.query.foreignAssets.approvals`
- **summary**:    Approved balance transfers. First balance is the amount approved for transfer. Second  is the amount of `T::Currency` reserved for storing this.  First key is the asset ID, second key is the owner and third key is the delegate. 
 
### asset(`StagingXcmV4Location`): `Option<PalletAssetsAssetDetails>`
- **interface**: `api.query.foreignAssets.asset`
- **summary**:    Details of an asset. 
 
### metadata(`StagingXcmV4Location`): `{"deposit":"u128","name":"Bytes","symbol":"Bytes","decimals":"u8","isFrozen":"bool"}`
- **interface**: `api.query.foreignAssets.metadata`
- **summary**:    Metadata of an asset. 
 
### nextAssetId(): `Option<StagingXcmV4Location>`
- **interface**: `api.query.foreignAssets.nextAssetId`
- **summary**:    The asset ID enforced for the next asset creation, if any present. Otherwise, this storage  item has no effect. 

   This can be useful for setting up constraints for IDs of the new assets. For example, by  providing an initial [`NextAssetId`] and using the [`crate::AutoIncAssetId`] callback, an  auto-increment model can be applied to all new asset IDs. 

   The initial next asset ID can be set using the [`GenesisConfig`] or the  [SetNextAssetId](`migration::next_asset_id::SetNextAssetId`) migration. 

___


## messageQueue
 
### bookStateFor(`CumulusPrimitivesCoreAggregateMessageOrigin`): `PalletMessageQueueBookState`
- **interface**: `api.query.messageQueue.bookStateFor`
- **summary**:    The index of the first and last (non-empty) pages. 
 
### pages(`CumulusPrimitivesCoreAggregateMessageOrigin, u32`): `Option<PalletMessageQueuePage>`
- **interface**: `api.query.messageQueue.pages`
- **summary**:    The map of page indices to pages. 
 
### serviceHead(): `Option<CumulusPrimitivesCoreAggregateMessageOrigin>`
- **interface**: `api.query.messageQueue.serviceHead`
- **summary**:    The origin at which we should begin servicing. 

___


## multisig
 
### multisigs(`AccountId32, [u8;32]`): `Option<PalletMultisigMultisig>`
- **interface**: `api.query.multisig.multisigs`
- **summary**:    The set of open multisig operations. 

___


## nfts
 
### account(`AccountId32, u32, u32`): `Option<Null>`
- **interface**: `api.query.nfts.account`
- **summary**:    The items held by any given account; set out this way so that items owned by a single  account can be enumerated. 
 
### attribute(`u32, Option<u32>, PalletNftsAttributeNamespace, Bytes`): `Option<(Bytes,PalletNftsAttributeDeposit)>`
- **interface**: `api.query.nfts.attribute`
- **summary**:    Attributes of a collection. 
 
### collection(`u32`): `Option<PalletNftsCollectionDetails>`
- **interface**: `api.query.nfts.collection`
- **summary**:    Details of a collection. 
 
### collectionAccount(`AccountId32, u32`): `Option<Null>`
- **interface**: `api.query.nfts.collectionAccount`
- **summary**:    The collections owned by any given account; set out this way so that collections owned by  a single account can be enumerated. 
 
### collectionConfigOf(`u32`): `Option<PalletNftsCollectionConfig>`
- **interface**: `api.query.nfts.collectionConfigOf`
- **summary**:    Config of a collection. 
 
### collectionMetadataOf(`u32`): `Option<PalletNftsCollectionMetadata>`
- **interface**: `api.query.nfts.collectionMetadataOf`
- **summary**:    Metadata of a collection. 
 
### collectionRoleOf(`u32, AccountId32`): `Option<u8>`
- **interface**: `api.query.nfts.collectionRoleOf`
- **summary**:    The items in existence and their ownership details.  Stores collection roles as per account. 
 
### item(`u32, u32`): `Option<PalletNftsItemDetails>`
- **interface**: `api.query.nfts.item`
- **summary**:    The items in existence and their ownership details. 
 
### itemAttributesApprovalsOf(`u32, u32`): `BTreeSet<AccountId32>`
- **interface**: `api.query.nfts.itemAttributesApprovalsOf`
- **summary**:    Item attribute approvals. 
 
### itemConfigOf(`u32, u32`): `Option<PalletNftsItemConfig>`
- **interface**: `api.query.nfts.itemConfigOf`
- **summary**:    Config of an item. 
 
### itemMetadataOf(`u32, u32`): `Option<PalletNftsItemMetadata>`
- **interface**: `api.query.nfts.itemMetadataOf`
- **summary**:    Metadata of an item. 
 
### itemPriceOf(`u32, u32`): `Option<(u128,Option<AccountId32>)>`
- **interface**: `api.query.nfts.itemPriceOf`
- **summary**:    A price of an item. 
 
### nextCollectionId(): `Option<u32>`
- **interface**: `api.query.nfts.nextCollectionId`
- **summary**:    Stores the `CollectionId` that is going to be used for the next collection.  This gets incremented whenever a new collection is created. 
 
### ownershipAcceptance(`AccountId32`): `Option<u32>`
- **interface**: `api.query.nfts.ownershipAcceptance`
- **summary**:    The collection, if any, of which an account is willing to take ownership. 
 
### pendingSwapOf(`u32, u32`): `Option<PalletNftsPendingSwap>`
- **interface**: `api.query.nfts.pendingSwapOf`
- **summary**:    Handles all the pending swaps. 

___


## parachainInfo
 
### parachainId(): `u32`
- **interface**: `api.query.parachainInfo.parachainId`

___


## parachainSystem
 
### aggregatedUnincludedSegment(): `Option<CumulusPalletParachainSystemUnincludedSegmentSegmentTracker>`
- **interface**: `api.query.parachainSystem.aggregatedUnincludedSegment`
- **summary**:    Storage field that keeps track of bandwidth used by the unincluded segment along with the  latest HRMP watermark. Used for limiting the acceptance of new blocks with  respect to relay chain constraints. 
 
### announcedHrmpMessagesPerCandidate(): `u32`
- **interface**: `api.query.parachainSystem.announcedHrmpMessagesPerCandidate`
- **summary**:    The number of HRMP messages we observed in `on_initialize` and thus used that number for  announcing the weight of `on_initialize` and `on_finalize`. 
 
### customValidationHeadData(): `Option<Bytes>`
- **interface**: `api.query.parachainSystem.customValidationHeadData`
- **summary**:    A custom head data that should be returned as result of `validate_block`. 

   See `Pallet::set_custom_validation_head_data` for more information. 
 
### didSetValidationCode(): `bool`
- **interface**: `api.query.parachainSystem.didSetValidationCode`
- **summary**:    Were the validation data set to notify the relay chain? 
 
### hostConfiguration(): `Option<PolkadotPrimitivesV8AbridgedHostConfiguration>`
- **interface**: `api.query.parachainSystem.hostConfiguration`
- **summary**:    The parachain host configuration that was obtained from the relay parent. 

   This field is meant to be updated each block with the validation data inherent. Therefore,  before processing of the inherent, e.g. in `on_initialize` this data may be stale. 

   This data is also absent from the genesis. 
 
### hrmpOutboundMessages(): `Vec<PolkadotCorePrimitivesOutboundHrmpMessage>`
- **interface**: `api.query.parachainSystem.hrmpOutboundMessages`
- **summary**:    HRMP messages that were sent in a block. 

   This will be cleared in `on_initialize` of each new block. 
 
### hrmpWatermark(): `u32`
- **interface**: `api.query.parachainSystem.hrmpWatermark`
- **summary**:    HRMP watermark that was set in a block. 

   This will be cleared in `on_initialize` of each new block. 
 
### lastDmqMqcHead(): `H256`
- **interface**: `api.query.parachainSystem.lastDmqMqcHead`
- **summary**:    The last downward message queue chain head we have observed. 

   This value is loaded before and saved after processing inbound downward messages carried  by the system inherent. 
 
### lastHrmpMqcHeads(): `BTreeMap<u32, H256>`
- **interface**: `api.query.parachainSystem.lastHrmpMqcHeads`
- **summary**:    The message queue chain heads we have observed per each channel incoming channel. 

   This value is loaded before and saved after processing inbound downward messages carried  by the system inherent. 
 
### lastRelayChainBlockNumber(): `u32`
- **interface**: `api.query.parachainSystem.lastRelayChainBlockNumber`
- **summary**:    The relay chain block number associated with the last parachain block. 

   This is updated in `on_finalize`. 
 
### newValidationCode(): `Option<Bytes>`
- **interface**: `api.query.parachainSystem.newValidationCode`
- **summary**:    Validation code that is set by the parachain and is to be communicated to collator and  consequently the relay-chain. 

   This will be cleared in `on_initialize` of each new block if no other pallet already set  the value. 
 
### pendingUpwardMessages(): `Vec<Bytes>`
- **interface**: `api.query.parachainSystem.pendingUpwardMessages`
- **summary**:    Upward messages that are still pending and not yet send to the relay chain. 
 
### pendingValidationCode(): `Bytes`
- **interface**: `api.query.parachainSystem.pendingValidationCode`
- **summary**:    In case of a scheduled upgrade, this storage field contains the validation code to be  applied. 

   As soon as the relay chain gives us the go-ahead signal, we will overwrite the  [`:code`][sp_core::storage::well_known_keys::CODE] which will result the next block process  with the new validation code. This concludes the upgrade process. 
 
### processedDownwardMessages(): `u32`
- **interface**: `api.query.parachainSystem.processedDownwardMessages`
- **summary**:    Number of downward messages processed in a block. 

   This will be cleared in `on_initialize` of each new block. 
 
### relayStateProof(): `Option<SpTrieStorageProof>`
- **interface**: `api.query.parachainSystem.relayStateProof`
- **summary**:    The state proof for the last relay parent block. 

   This field is meant to be updated each block with the validation data inherent. Therefore,  before processing of the inherent, e.g. in `on_initialize` this data may be stale. 

   This data is also absent from the genesis. 
 
### relevantMessagingState(): `Option<CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot>`
- **interface**: `api.query.parachainSystem.relevantMessagingState`
- **summary**:    The snapshot of some state related to messaging relevant to the current parachain as per  the relay parent. 

   This field is meant to be updated each block with the validation data inherent. Therefore,  before processing of the inherent, e.g. in `on_initialize` this data may be stale. 

   This data is also absent from the genesis. 
 
### reservedDmpWeightOverride(): `Option<SpWeightsWeightV2Weight>`
- **interface**: `api.query.parachainSystem.reservedDmpWeightOverride`
- **summary**:    The weight we reserve at the beginning of the block for processing DMP messages. This  overrides the amount set in the Config trait. 
 
### reservedXcmpWeightOverride(): `Option<SpWeightsWeightV2Weight>`
- **interface**: `api.query.parachainSystem.reservedXcmpWeightOverride`
- **summary**:    The weight we reserve at the beginning of the block for processing XCMP messages. This  overrides the amount set in the Config trait. 
 
### unincludedSegment(): `Vec<CumulusPalletParachainSystemUnincludedSegmentAncestor>`
- **interface**: `api.query.parachainSystem.unincludedSegment`
- **summary**:    Latest included block descendants the runtime accepted. In other words, these are  ancestors of the currently executing block which have not been included in the observed  relay-chain state. 

   The segment length is limited by the capacity returned from the [`ConsensusHook`] configured  in the pallet. 
 
### upgradeGoAhead(): `Option<PolkadotPrimitivesV8UpgradeGoAhead>`
- **interface**: `api.query.parachainSystem.upgradeGoAhead`
- **summary**:    Optional upgrade go-ahead signal from the relay-chain. 

   This storage item is a mirror of the corresponding value for the current parachain from the  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is  set after the inherent. 
 
### upgradeRestrictionSignal(): `Option<PolkadotPrimitivesV8UpgradeRestriction>`
- **interface**: `api.query.parachainSystem.upgradeRestrictionSignal`
- **summary**:    An option which indicates if the relay-chain restricts signalling a validation code upgrade.  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced  candidate will be invalid. 

   This storage item is a mirror of the corresponding value for the current parachain from the  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is  set after the inherent. 
 
### upwardDeliveryFeeFactor(): `u128`
- **interface**: `api.query.parachainSystem.upwardDeliveryFeeFactor`
- **summary**:    The factor to multiply the base delivery fee by for UMP. 
 
### upwardMessages(): `Vec<Bytes>`
- **interface**: `api.query.parachainSystem.upwardMessages`
- **summary**:    Upward messages that were sent in a block. 

   This will be cleared in `on_initialize` of each new block. 
 
### validationData(): `Option<PolkadotPrimitivesV8PersistedValidationData>`
- **interface**: `api.query.parachainSystem.validationData`
- **summary**:    The [`PersistedValidationData`] set for this block.  This value is expected to be set only once per block and it's never stored  in the trie. 

___


## polkadotXcm
 
### assetTraps(`H256`): `u32`
- **interface**: `api.query.polkadotXcm.assetTraps`
- **summary**:    The existing asset traps. 

   Key is the blake2 256 hash of (origin, versioned `Assets`) pair. Value is the number of  times this pair has been trapped (usually just 1 if it exists at all). 
 
### currentMigration(): `Option<PalletXcmVersionMigrationStage>`
- **interface**: `api.query.polkadotXcm.currentMigration`
- **summary**:    The current migration's stage, if any. 
 
### lockedFungibles(`AccountId32`): `Option<Vec<(u128,XcmVersionedLocation)>>`
- **interface**: `api.query.polkadotXcm.lockedFungibles`
- **summary**:    Fungible assets which we know are locked on this chain. 
 
### queries(`u64`): `Option<PalletXcmQueryStatus>`
- **interface**: `api.query.polkadotXcm.queries`
- **summary**:    The ongoing queries. 
 
### queryCounter(): `u64`
- **interface**: `api.query.polkadotXcm.queryCounter`
- **summary**:    The latest available query index. 
 
### recordedXcm(): `Option<StagingXcmV4Xcm>`
- **interface**: `api.query.polkadotXcm.recordedXcm`
- **summary**:    If [`ShouldRecordXcm`] is set to true, then the last XCM program executed locally  will be stored here.  Runtime APIs can fetch the XCM that was executed by accessing this value. 

   Only relevant if this pallet is being used as the [`xcm_executor::traits::RecordXcm`]  implementation in the XCM executor configuration. 
 
### remoteLockedFungibles(`u32, AccountId32, XcmVersionedAssetId`): `Option<PalletXcmRemoteLockedFungibleRecord>`
- **interface**: `api.query.polkadotXcm.remoteLockedFungibles`
- **summary**:    Fungible assets which we know are locked on a remote chain. 
 
### safeXcmVersion(): `Option<u32>`
- **interface**: `api.query.polkadotXcm.safeXcmVersion`
- **summary**:    Default version to encode XCM when latest version of destination is unknown. If `None`,  then the destinations whose XCM version is unknown are considered unreachable. 
 
### shouldRecordXcm(): `bool`
- **interface**: `api.query.polkadotXcm.shouldRecordXcm`
- **summary**:    Whether or not incoming XCMs (both executed locally and received) should be recorded.  Only one XCM program will be recorded at a time.  This is meant to be used in runtime APIs, and it's advised it stays false  for all other use cases, so as to not degrade regular performance. 

   Only relevant if this pallet is being used as the [`xcm_executor::traits::RecordXcm`]  implementation in the XCM executor configuration. 
 
### supportedVersion(`u32, XcmVersionedLocation`): `Option<u32>`
- **interface**: `api.query.polkadotXcm.supportedVersion`
- **summary**:    The Latest versions that we know various locations support. 
 
### versionDiscoveryQueue(): `Vec<(XcmVersionedLocation,u32)>`
- **interface**: `api.query.polkadotXcm.versionDiscoveryQueue`
- **summary**:    Destinations whose latest XCM version we would like to know. Duplicates not allowed, and  the `u32` counter is the number of times that a send to the destination has been attempted,  which is used as a prioritization. 
 
### versionNotifiers(`u32, XcmVersionedLocation`): `Option<u64>`
- **interface**: `api.query.polkadotXcm.versionNotifiers`
- **summary**:    All locations that we have requested version notifications from. 
 
### versionNotifyTargets(`u32, XcmVersionedLocation`): `Option<(u64,SpWeightsWeightV2Weight,u32)>`
- **interface**: `api.query.polkadotXcm.versionNotifyTargets`
- **summary**:    The target locations that are subscribed to our version changes, as well as the most recent  of our versions we informed them of. 
 
### xcmExecutionSuspended(): `bool`
- **interface**: `api.query.polkadotXcm.xcmExecutionSuspended`
- **summary**:    Global suspension state of the XCM executor. 

___


## poolAssets
 
### account(`u32, AccountId32`): `Option<PalletAssetsAssetAccount>`
- **interface**: `api.query.poolAssets.account`
- **summary**:    The holdings of a specific account for a specific asset. 
 
### approvals(`u32, AccountId32, AccountId32`): `Option<PalletAssetsApproval>`
- **interface**: `api.query.poolAssets.approvals`
- **summary**:    Approved balance transfers. First balance is the amount approved for transfer. Second  is the amount of `T::Currency` reserved for storing this.  First key is the asset ID, second key is the owner and third key is the delegate. 
 
### asset(`u32`): `Option<PalletAssetsAssetDetails>`
- **interface**: `api.query.poolAssets.asset`
- **summary**:    Details of an asset. 
 
### metadata(`u32`): `PalletAssetsAssetMetadata`
- **interface**: `api.query.poolAssets.metadata`
- **summary**:    Metadata of an asset. 
 
### nextAssetId(): `Option<u32>`
- **interface**: `api.query.poolAssets.nextAssetId`
- **summary**:    The asset ID enforced for the next asset creation, if any present. Otherwise, this storage  item has no effect. 

   This can be useful for setting up constraints for IDs of the new assets. For example, by  providing an initial [`NextAssetId`] and using the [`crate::AutoIncAssetId`] callback, an  auto-increment model can be applied to all new asset IDs. 

   The initial next asset ID can be set using the [`GenesisConfig`] or the  [SetNextAssetId](`migration::next_asset_id::SetNextAssetId`) migration. 

___


## proxy
 
### announcements(`AccountId32`): `(Vec<PalletProxyAnnouncement>,u128)`
- **interface**: `api.query.proxy.announcements`
- **summary**:    The announcements made by the proxy (key). 
 
### proxies(`AccountId32`): `(Vec<PalletProxyProxyDefinition>,u128)`
- **interface**: `api.query.proxy.proxies`
- **summary**:    The set of account proxies. Maps the account which has delegated to the accounts  which are being delegated to, together with the amount held on deposit. 

___


## session
 
### currentIndex(): `u32`
- **interface**: `api.query.session.currentIndex`
- **summary**:    Current index of the session. 
 
### disabledValidators(): `Vec<u32>`
- **interface**: `api.query.session.disabledValidators`
- **summary**:    Indices of disabled validators. 

   The vec is always kept sorted so that we can find whether a given validator is  disabled using binary search. It gets cleared when `on_session_ending` returns  a new set of identities. 
 
### keyOwner(`(SpCoreCryptoKeyTypeId,Bytes)`): `Option<AccountId32>`
- **interface**: `api.query.session.keyOwner`
- **summary**:    The owner of a key. The key is the `KeyTypeId` + the encoded key. 
 
### nextKeys(`AccountId32`): `Option<AssetHubPolkadotRuntimeSessionKeys>`
- **interface**: `api.query.session.nextKeys`
- **summary**:    The next session keys for a validator. 
 
### queuedChanged(): `bool`
- **interface**: `api.query.session.queuedChanged`
- **summary**:    True if the underlying economic identities or weighting behind the validators  has changed in the queued validator set. 
 
### queuedKeys(): `Vec<(AccountId32,AssetHubPolkadotRuntimeSessionKeys)>`
- **interface**: `api.query.session.queuedKeys`
- **summary**:    The queued keys for the next session. When the next session begins, these keys  will be used to determine the validator's session keys. 
 
### validators(): `Vec<AccountId32>`
- **interface**: `api.query.session.validators`
- **summary**:    The current set of validators. 

___


## substrate

_These are well-known keys that are always available to the runtime implementation of any Substrate-based network._
 
### changesTrieConfig(): `u32`
- **interface**: `api.query.substrate.changesTrieConfig`
- **summary**:    Changes trie configuration is stored under this key. 
 
### childStorageKeyPrefix(): `u32`
- **interface**: `api.query.substrate.childStorageKeyPrefix`
- **summary**:    Prefix of child storage keys. 
 
### code(): `Bytes`
- **interface**: `api.query.substrate.code`
- **summary**:    Wasm code of the runtime. 
 
### defaultChildStorageKeyPrefix(): `u32`
- **interface**: `api.query.substrate.defaultChildStorageKeyPrefix`
- **summary**:    Prefix of the default child storage keys in the top trie. 
 
### extrinsicIndex(): `u32`
- **interface**: `api.query.substrate.extrinsicIndex`
- **summary**:    Current extrinsic index (u32) is stored under this key. 
 
### heapPages(): `u64`
- **interface**: `api.query.substrate.heapPages`
- **summary**:    Number of wasm linear memory pages required for execution of the runtime. 
 
### intrablockEntropy(): `[u8;32]`
- **interface**: `api.query.substrate.intrablockEntropy`
- **summary**:    Current intra-block entropy (a universally unique `[u8; 32]` value) is stored here. 
 
### storageVersionStorageKeyPostfix(): `u16`
- **interface**: `api.query.substrate.storageVersionStorageKeyPostfix`
- **summary**:    The storage key postfix that is used to store the [`StorageVersion`] per pallet. 
 
### transactionLevelKey(): `u32`
- **interface**: `api.query.substrate.transactionLevelKey`
- **summary**:    The key that holds the current number of active layers. 

___


## system
 
### account(`AccountId32`): `FrameSystemAccountInfo`
- **interface**: `api.query.system.account`
- **summary**:    The full account information for a particular account ID. 
 
### allExtrinsicsLen(): `Option<u32>`
- **interface**: `api.query.system.allExtrinsicsLen`
- **summary**:    Total length (in bytes) for all extrinsics put together, for the current block. 
 
### authorizedUpgrade(): `Option<FrameSystemCodeUpgradeAuthorization>`
- **interface**: `api.query.system.authorizedUpgrade`
- **summary**:    `Some` if a code upgrade has been authorized. 
 
### blockHash(`u32`): `H256`
- **interface**: `api.query.system.blockHash`
- **summary**:    Map of block numbers to block hashes. 
 
### blockWeight(): `FrameSupportDispatchPerDispatchClassWeight`
- **interface**: `api.query.system.blockWeight`
- **summary**:    The current weight for the block. 
 
### digest(): `SpRuntimeDigest`
- **interface**: `api.query.system.digest`
- **summary**:    Digest of the current block, also part of the block header. 
 
### eventCount(): `u32`
- **interface**: `api.query.system.eventCount`
- **summary**:    The number of events in the `Events<T>` list. 
 
### events(): `Vec<FrameSystemEventRecord>`
- **interface**: `api.query.system.events`
- **summary**:    Events deposited for the current block. 

   NOTE: The item is unbound and should therefore never be read on chain.  It could otherwise inflate the PoV size of a block. 

   Events have a large in-memory size. Box the events to not go out-of-memory  just in case someone still reads them from within the runtime. 
 
### eventTopics(`H256`): `Vec<(u32,u32)>`
- **interface**: `api.query.system.eventTopics`
- **summary**:    Mapping between a topic (represented by T::Hash) and a vector of indexes  of events in the `<Events<T>>` list. 

   All topic vectors have deterministic storage locations depending on the topic. This  allows light-clients to leverage the changes trie storage tracking mechanism and  in case of changes fetch the list of events of interest. 

   The value has the type `(BlockNumberFor<T>, EventIndex)` because if we used only just  the `EventIndex` then in case if the topic has the same contents on the next block  no notification will be triggered thus the event might be lost. 
 
### executionPhase(): `Option<FrameSystemPhase>`
- **interface**: `api.query.system.executionPhase`
- **summary**:    The execution phase of the block. 
 
### extrinsicCount(): `Option<u32>`
- **interface**: `api.query.system.extrinsicCount`
- **summary**:    Total extrinsics count for the current block. 
 
### extrinsicData(`u32`): `Bytes`
- **interface**: `api.query.system.extrinsicData`
- **summary**:    Extrinsics data for the current block (maps an extrinsic's index to its data). 
 
### inherentsApplied(): `bool`
- **interface**: `api.query.system.inherentsApplied`
- **summary**:    Whether all inherents have been applied. 
 
### lastRuntimeUpgrade(): `Option<FrameSystemLastRuntimeUpgradeInfo>`
- **interface**: `api.query.system.lastRuntimeUpgrade`
- **summary**:    Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened. 
 
### number(): `u32`
- **interface**: `api.query.system.number`
- **summary**:    The current block number being processed. Set by `execute_block`. 
 
### parentHash(): `H256`
- **interface**: `api.query.system.parentHash`
- **summary**:    Hash of the previous block. 
 
### upgradedToTripleRefCount(): `bool`
- **interface**: `api.query.system.upgradedToTripleRefCount`
- **summary**:    True if we have upgraded so that AccountInfo contains three types of `RefCount`. False  (default) if not. 
 
### upgradedToU32RefCount(): `bool`
- **interface**: `api.query.system.upgradedToU32RefCount`
- **summary**:    True if we have upgraded so that `type RefCount` is `u32`. False (default) if not. 

___


## timestamp
 
### didUpdate(): `bool`
- **interface**: `api.query.timestamp.didUpdate`
- **summary**:    Whether the timestamp has been updated in this block. 

   This value is updated to `true` upon successful submission of a timestamp by a node.  It is then checked at the end of each block execution in the `on_finalize` hook. 
 
### now(): `u64`
- **interface**: `api.query.timestamp.now`
- **summary**:    The current time for the current block. 

___


## toKusamaXcmRouter
 
### bridge(): `BpXcmBridgeHubRouterBridgeState`
- **interface**: `api.query.toKusamaXcmRouter.bridge`
- **summary**:    Bridge that we are using. 

   **bridges-v1** assumptions: all outbound messages through this router are using single lane  and to single remote consensus. If there is some other remote consensus that uses the same  bridge hub, the separate pallet instance shall be used, In `v2` we'll have all required  primitives (lane-id aka bridge-id, derived from XCM locations) to support multiple  bridges  by the same pallet instance. 

___


## transactionPayment
 
### nextFeeMultiplier(): `u128`
- **interface**: `api.query.transactionPayment.nextFeeMultiplier`
 
### storageVersion(): `PalletTransactionPaymentReleases`
- **interface**: `api.query.transactionPayment.storageVersion`

___


## uniques
 
### account(`AccountId32, u32, u32`): `Option<Null>`
- **interface**: `api.query.uniques.account`
- **summary**:    The items held by any given account; set out this way so that items owned by a single  account can be enumerated. 
 
### asset(`u32, u32`): `Option<PalletUniquesItemDetails>`
- **interface**: `api.query.uniques.asset`
- **summary**:    The items in existence and their ownership details. 
 
### attribute(`u32, Option<u32>, Bytes`): `Option<(Bytes,u128)>`
- **interface**: `api.query.uniques.attribute`
- **summary**:    Attributes of a collection. 
 
### class(`u32`): `Option<PalletUniquesCollectionDetails>`
- **interface**: `api.query.uniques.class`
- **summary**:    Details of a collection. 
 
### classAccount(`AccountId32, u32`): `Option<Null>`
- **interface**: `api.query.uniques.classAccount`
- **summary**:    The collections owned by any given account; set out this way so that collections owned by  a single account can be enumerated. 
 
### classMetadataOf(`u32`): `Option<PalletUniquesCollectionMetadata>`
- **interface**: `api.query.uniques.classMetadataOf`
- **summary**:    Metadata of a collection. 
 
### collectionMaxSupply(`u32`): `Option<u32>`
- **interface**: `api.query.uniques.collectionMaxSupply`
- **summary**:    Keeps track of the number of items a collection might have. 
 
### instanceMetadataOf(`u32, u32`): `Option<PalletUniquesItemMetadata>`
- **interface**: `api.query.uniques.instanceMetadataOf`
- **summary**:    Metadata of an item. 
 
### itemPriceOf(`u32, u32`): `Option<(u128,Option<AccountId32>)>`
- **interface**: `api.query.uniques.itemPriceOf`
- **summary**:    Price of an asset instance. 
 
### ownershipAcceptance(`AccountId32`): `Option<u32>`
- **interface**: `api.query.uniques.ownershipAcceptance`
- **summary**:    The collection, if any, of which an account is willing to take ownership. 

___


## vesting
 
### storageVersion(): `PalletVestingReleases`
- **interface**: `api.query.vesting.storageVersion`
- **summary**:    Storage version of the pallet. 

   New networks start with latest version, as determined by the genesis build. 
 
### vesting(`AccountId32`): `Option<Vec<PalletVestingVestingInfo>>`
- **interface**: `api.query.vesting.vesting`
- **summary**:    Information regarding the vesting of a given account. 

___


## xcmpQueue
 
### deliveryFeeFactor(`u32`): `u128`
- **interface**: `api.query.xcmpQueue.deliveryFeeFactor`
- **summary**:    The factor to multiply the base delivery fee by. 
 
### inboundXcmpSuspended(): `BTreeSet<u32>`
- **interface**: `api.query.xcmpQueue.inboundXcmpSuspended`
- **summary**:    The suspended inbound XCMP channels. All others are not suspended. 

   This is a `StorageValue` instead of a `StorageMap` since we expect multiple reads per block  to different keys with a one byte payload. The access to `BoundedBTreeSet` will be cached  within the block and therefore only included once in the proof size. 

   NOTE: The PoV benchmarking cannot know this and will over-estimate, but the actual proof  will be smaller. 
 
### outboundXcmpMessages(`u32, u16`): `Bytes`
- **interface**: `api.query.xcmpQueue.outboundXcmpMessages`
- **summary**:    The messages outbound in a given XCMP channel. 
 
### outboundXcmpStatus(): `Vec<CumulusPalletXcmpQueueOutboundChannelDetails>`
- **interface**: `api.query.xcmpQueue.outboundXcmpStatus`
- **summary**:    The non-empty XCMP channels in order of becoming non-empty, and the index of the first  and last outbound message. If the two indices are equal, then it indicates an empty  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in  case of the need to send a high-priority signal message this block.  The bool is true if there is a signal message waiting to be sent. 
 
### queueConfig(): `CumulusPalletXcmpQueueQueueConfigData`
- **interface**: `api.query.xcmpQueue.queueConfig`
- **summary**:    The configuration which controls the dynamics of the outbound queue. 
 
### queueSuspended(): `bool`
- **interface**: `api.query.xcmpQueue.queueSuspended`
- **summary**:    Whether or not the XCMP queue is suspended from executing incoming XCMs or not. 
 
### signalMessages(`u32`): `Bytes`
- **interface**: `api.query.xcmpQueue.signalMessages`
- **summary**:    Any signal messages waiting to be sent. 
