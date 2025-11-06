---
title: Constants
---

The following sections contain the module constants, also known as parameter types. These can only be changed as part of a runtime upgrade. On the api, these are exposed via `api.consts.<module>.<method>`. 

(NOTE: These were generated from a static/snapshot view of a recent default asset-hub-kusama runtime. Some items may not be available in older nodes, or in any customized implementations.)

- **[assetConversion](#assetconversion)**

- **[assets](#assets)**

- **[aura](#aura)**

- **[balances](#balances)**

- **[collatorSelection](#collatorselection)**

- **[foreignAssets](#foreignassets)**

- **[messageQueue](#messagequeue)**

- **[multisig](#multisig)**

- **[nftFractionalization](#nftfractionalization)**

- **[nfts](#nfts)**

- **[parachainSystem](#parachainsystem)**

- **[polkadotXcm](#polkadotxcm)**

- **[poolAssets](#poolassets)**

- **[proxy](#proxy)**

- **[revive](#revive)**

- **[stateTrieMigration](#statetriemigration)**

- **[system](#system)**

- **[timestamp](#timestamp)**

- **[transactionPayment](#transactionpayment)**

- **[uniques](#uniques)**

- **[utility](#utility)**

- **[vesting](#vesting)**

- **[xcmpQueue](#xcmpqueue)**


___


## assetConversion
 
### liquidityWithdrawalFee: `Permill`
- **interface**: `api.consts.assetConversion.liquidityWithdrawalFee`
- **summary**:    A fee to withdraw the liquidity. 
 
### lpFee: `u32`
- **interface**: `api.consts.assetConversion.lpFee`
- **summary**:    A % the liquidity providers will take of every swap. Represents 10ths of a percent. 
 
### maxSwapPathLength: `u32`
- **interface**: `api.consts.assetConversion.maxSwapPathLength`
- **summary**:    The max number of hops in a swap. 
 
### mintMinLiquidity: `u128`
- **interface**: `api.consts.assetConversion.mintMinLiquidity`
- **summary**:    The minimum LP token amount that could be minted. Ameliorates rounding errors. 
 
### palletId: `FrameSupportPalletId`
- **interface**: `api.consts.assetConversion.palletId`
- **summary**:    The pallet's id, used for deriving its sovereign account ID. 
 
### poolSetupFee: `u128`
- **interface**: `api.consts.assetConversion.poolSetupFee`
- **summary**:    A one-time fee to setup the pool. 
 
### poolSetupFeeAsset: `StagingXcmV4Location`
- **interface**: `api.consts.assetConversion.poolSetupFeeAsset`
- **summary**:    Asset class from [`Config::Assets`] used to pay the [`Config::PoolSetupFee`]. 

___


## assets
 
### approvalDeposit: `u128`
- **interface**: `api.consts.assets.approvalDeposit`
- **summary**:    The amount of funds that must be reserved when creating a new approval. 
 
### assetAccountDeposit: `u128`
- **interface**: `api.consts.assets.assetAccountDeposit`
- **summary**:    The amount of funds that must be reserved for a non-provider asset account to be  maintained. 
 
### assetDeposit: `u128`
- **interface**: `api.consts.assets.assetDeposit`
- **summary**:    The basic amount of funds that must be reserved for an asset. 
 
### metadataDepositBase: `u128`
- **interface**: `api.consts.assets.metadataDepositBase`
- **summary**:    The basic amount of funds that must be reserved when adding metadata to your asset. 
 
### metadataDepositPerByte: `u128`
- **interface**: `api.consts.assets.metadataDepositPerByte`
- **summary**:    The additional funds that must be reserved for the number of bytes you store in your  metadata. 
 
### removeItemsLimit: `u32`
- **interface**: `api.consts.assets.removeItemsLimit`
- **summary**:    Max number of items to destroy per `destroy_accounts` and `destroy_approvals` call. 

   Must be configured to result in a weight that makes each call fit in a block. 
 
### stringLimit: `u32`
- **interface**: `api.consts.assets.stringLimit`
- **summary**:    The maximum length of a name or symbol stored on-chain. 

___


## aura
 
### slotDuration: `u64`
- **interface**: `api.consts.aura.slotDuration`
- **summary**:    The slot duration Aura should run with, expressed in milliseconds.  The effective value of this type should not change while the chain is running. 

   For backwards compatibility either use [`MinimumPeriodTimesTwo`] or a const. 

___


## balances
 
### existentialDeposit: `u128`
- **interface**: `api.consts.balances.existentialDeposit`
- **summary**:    The minimum amount required to keep an account open. MUST BE GREATER THAN ZERO! 

   If you *really* need it to be zero, you can enable the feature `insecure_zero_ed` for  this pallet. However, you do so at your own risk: this will open up a major DoS vector.  In case you have multiple sources of provider references, you may also get unexpected  behaviour if you set this to zero. 

   Bottom line: Do yourself a favour and make it at least one! 
 
### maxFreezes: `u32`
- **interface**: `api.consts.balances.maxFreezes`
- **summary**:    The maximum number of individual freeze locks that can exist on an account at any time. 
 
### maxLocks: `u32`
- **interface**: `api.consts.balances.maxLocks`
- **summary**:    The maximum number of locks that should exist on an account.  Not strictly enforced, but used for weight estimation. 

   Use of locks is deprecated in favour of freezes. See `https://github.com/paritytech/substrate/pull/12951/` 
 
### maxReserves: `u32`
- **interface**: `api.consts.balances.maxReserves`
- **summary**:    The maximum number of named reserves that can exist on an account. 

   Use of reserves is deprecated in favour of holds. See `https://github.com/paritytech/substrate/pull/12951/` 

___


## collatorSelection
 
### kickThreshold: `u32`
- **interface**: `api.consts.collatorSelection.kickThreshold`
 
### maxCandidates: `u32`
- **interface**: `api.consts.collatorSelection.maxCandidates`
- **summary**:    Maximum number of candidates that we should have. 

   This does not take into account the invulnerables. 
 
### maxInvulnerables: `u32`
- **interface**: `api.consts.collatorSelection.maxInvulnerables`
- **summary**:    Maximum number of invulnerables. 
 
### minEligibleCollators: `u32`
- **interface**: `api.consts.collatorSelection.minEligibleCollators`
- **summary**:    Minimum number eligible collators. Should always be greater than zero. This includes  Invulnerable collators. This ensures that there will always be one collator who can  produce a block. 
 
### potAccount: `AccountId32`
- **interface**: `api.consts.collatorSelection.potAccount`
- **summary**:    Gets this pallet's derived pot account. 
 
### potId: `FrameSupportPalletId`
- **interface**: `api.consts.collatorSelection.potId`
- **summary**:    Account Identifier from which the internal Pot is generated. 

___


## foreignAssets
 
### approvalDeposit: `u128`
- **interface**: `api.consts.foreignAssets.approvalDeposit`
- **summary**:    The amount of funds that must be reserved when creating a new approval. 
 
### assetAccountDeposit: `u128`
- **interface**: `api.consts.foreignAssets.assetAccountDeposit`
- **summary**:    The amount of funds that must be reserved for a non-provider asset account to be  maintained. 
 
### assetDeposit: `u128`
- **interface**: `api.consts.foreignAssets.assetDeposit`
- **summary**:    The basic amount of funds that must be reserved for an asset. 
 
### metadataDepositBase: `u128`
- **interface**: `api.consts.foreignAssets.metadataDepositBase`
- **summary**:    The basic amount of funds that must be reserved when adding metadata to your asset. 
 
### metadataDepositPerByte: `u128`
- **interface**: `api.consts.foreignAssets.metadataDepositPerByte`
- **summary**:    The additional funds that must be reserved for the number of bytes you store in your  metadata. 
 
### removeItemsLimit: `u32`
- **interface**: `api.consts.foreignAssets.removeItemsLimit`
- **summary**:    Max number of items to destroy per `destroy_accounts` and `destroy_approvals` call. 

   Must be configured to result in a weight that makes each call fit in a block. 
 
### stringLimit: `u32`
- **interface**: `api.consts.foreignAssets.stringLimit`
- **summary**:    The maximum length of a name or symbol stored on-chain. 

___


## messageQueue
 
### heapSize: `u32`
- **interface**: `api.consts.messageQueue.heapSize`
- **summary**:    The size of the page; this implies the maximum message size which can be sent. 

   A good value depends on the expected message sizes, their weights, the weight that is  available for processing them and the maximal needed message size. The maximal message  size is slightly lower than this as defined by [`MaxMessageLenOf`]. 
 
### idleMaxServiceWeight: `Option<SpWeightsWeightV2Weight>`
- **interface**: `api.consts.messageQueue.idleMaxServiceWeight`
- **summary**:    The maximum amount of weight (if any) to be used from remaining weight `on_idle` which  should be provided to the message queue for servicing enqueued items `on_idle`.  Useful for parachains to process messages at the same block they are received. 

   If `None`, it will not call `ServiceQueues::service_queues` in `on_idle`. 
 
### maxStale: `u32`
- **interface**: `api.consts.messageQueue.maxStale`
- **summary**:    The maximum number of stale pages (i.e. of overweight messages) allowed before culling  can happen. Once there are more stale pages than this, then historical pages may be  dropped, even if they contain unprocessed overweight messages. 
 
### serviceWeight: `Option<SpWeightsWeightV2Weight>`
- **interface**: `api.consts.messageQueue.serviceWeight`
- **summary**:    The amount of weight (if any) which should be provided to the message queue for  servicing enqueued items `on_initialize`. 

   This may be legitimately `None` in the case that you will call  `ServiceQueues::service_queues` manually or set [`Self::IdleMaxServiceWeight`] to have  it run in `on_idle`. 

___


## multisig
 
### depositBase: `u128`
- **interface**: `api.consts.multisig.depositBase`
- **summary**:    The base amount of currency needed to reserve for creating a multisig execution or to  store a dispatch call for later. 

   This is held for an additional storage item whose value size is  `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is  `32 + sizeof(AccountId)` bytes. 
 
### depositFactor: `u128`
- **interface**: `api.consts.multisig.depositFactor`
- **summary**:    The amount of currency needed per unit threshold when creating a multisig execution. 

   This is held for adding 32 bytes more into a pre-existing storage value. 
 
### maxSignatories: `u32`
- **interface**: `api.consts.multisig.maxSignatories`
- **summary**:    The maximum amount of signatories allowed in the multisig. 

___


## nftFractionalization
 
### deposit: `u128`
- **interface**: `api.consts.nftFractionalization.deposit`
- **summary**:    The deposit paid by the user locking an NFT. The deposit is returned to the original NFT  owner when the asset is unified and the NFT is unlocked. 
 
### newAssetName: `Bytes`
- **interface**: `api.consts.nftFractionalization.newAssetName`
- **summary**:    The newly created asset's name. 
 
### newAssetSymbol: `Bytes`
- **interface**: `api.consts.nftFractionalization.newAssetSymbol`
- **summary**:    The newly created asset's symbol. 
 
### palletId: `FrameSupportPalletId`
- **interface**: `api.consts.nftFractionalization.palletId`
- **summary**:    The pallet's id, used for deriving its sovereign account ID. 
 
### stringLimit: `u32`
- **interface**: `api.consts.nftFractionalization.stringLimit`
- **summary**:    The maximum length of a name or symbol stored on-chain. 

___


## nfts
 
### approvalsLimit: `u32`
- **interface**: `api.consts.nfts.approvalsLimit`
- **summary**:    The maximum approvals an item could have. 
 
### attributeDepositBase: `u128`
- **interface**: `api.consts.nfts.attributeDepositBase`
- **summary**:    The basic amount of funds that must be reserved when adding an attribute to an item. 
 
### collectionDeposit: `u128`
- **interface**: `api.consts.nfts.collectionDeposit`
- **summary**:    The basic amount of funds that must be reserved for collection. 
 
### depositPerByte: `u128`
- **interface**: `api.consts.nfts.depositPerByte`
- **summary**:    The additional funds that must be reserved for the number of bytes store in metadata,  either "normal" metadata or attribute metadata. 
 
### features: `u64`
- **interface**: `api.consts.nfts.features`
- **summary**:    Disables some of pallet's features. 
 
### itemAttributesApprovalsLimit: `u32`
- **interface**: `api.consts.nfts.itemAttributesApprovalsLimit`
- **summary**:    The maximum attributes approvals an item could have. 
 
### itemDeposit: `u128`
- **interface**: `api.consts.nfts.itemDeposit`
- **summary**:    The basic amount of funds that must be reserved for an item. 
 
### keyLimit: `u32`
- **interface**: `api.consts.nfts.keyLimit`
- **summary**:    The maximum length of an attribute key. 
 
### maxAttributesPerCall: `u32`
- **interface**: `api.consts.nfts.maxAttributesPerCall`
- **summary**:    The max number of attributes a user could set per call. 
 
### maxDeadlineDuration: `u32`
- **interface**: `api.consts.nfts.maxDeadlineDuration`
- **summary**:    The max duration in blocks for deadlines. 
 
### maxTips: `u32`
- **interface**: `api.consts.nfts.maxTips`
- **summary**:    The max number of tips a user could send. 
 
### metadataDepositBase: `u128`
- **interface**: `api.consts.nfts.metadataDepositBase`
- **summary**:    The basic amount of funds that must be reserved when adding metadata to your item. 
 
### stringLimit: `u32`
- **interface**: `api.consts.nfts.stringLimit`
- **summary**:    The maximum length of data stored on-chain. 
 
### valueLimit: `u32`
- **interface**: `api.consts.nfts.valueLimit`
- **summary**:    The maximum length of an attribute value. 

___


## parachainSystem
 
### selfParaId: `u32`
- **interface**: `api.consts.parachainSystem.selfParaId`
- **summary**:    Returns the parachain ID we are running with. 

___


## polkadotXcm
 
### advertisedXcmVersion: `u32`
- **interface**: `api.consts.polkadotXcm.advertisedXcmVersion`
- **summary**:    The latest supported version that we advertise. Generally just set it to  `pallet_xcm::CurrentXcmVersion`. 

___


## poolAssets
 
### approvalDeposit: `u128`
- **interface**: `api.consts.poolAssets.approvalDeposit`
- **summary**:    The amount of funds that must be reserved when creating a new approval. 
 
### assetAccountDeposit: `u128`
- **interface**: `api.consts.poolAssets.assetAccountDeposit`
- **summary**:    The amount of funds that must be reserved for a non-provider asset account to be  maintained. 
 
### assetDeposit: `u128`
- **interface**: `api.consts.poolAssets.assetDeposit`
- **summary**:    The basic amount of funds that must be reserved for an asset. 
 
### metadataDepositBase: `u128`
- **interface**: `api.consts.poolAssets.metadataDepositBase`
- **summary**:    The basic amount of funds that must be reserved when adding metadata to your asset. 
 
### metadataDepositPerByte: `u128`
- **interface**: `api.consts.poolAssets.metadataDepositPerByte`
- **summary**:    The additional funds that must be reserved for the number of bytes you store in your  metadata. 
 
### removeItemsLimit: `u32`
- **interface**: `api.consts.poolAssets.removeItemsLimit`
- **summary**:    Max number of items to destroy per `destroy_accounts` and `destroy_approvals` call. 

   Must be configured to result in a weight that makes each call fit in a block. 
 
### stringLimit: `u32`
- **interface**: `api.consts.poolAssets.stringLimit`
- **summary**:    The maximum length of a name or symbol stored on-chain. 

___


## proxy
 
### announcementDepositBase: `u128`
- **interface**: `api.consts.proxy.announcementDepositBase`
- **summary**:    The base amount of currency needed to reserve for creating an announcement. 

   This is held when a new storage item holding a `Balance` is created (typically 16  bytes). 
 
### announcementDepositFactor: `u128`
- **interface**: `api.consts.proxy.announcementDepositFactor`
- **summary**:    The amount of currency needed per announcement made. 

   This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)  into a pre-existing storage value. 
 
### maxPending: `u32`
- **interface**: `api.consts.proxy.maxPending`
- **summary**:    The maximum amount of time-delayed announcements that are allowed to be pending. 
 
### maxProxies: `u32`
- **interface**: `api.consts.proxy.maxProxies`
- **summary**:    The maximum amount of proxies allowed for a single account. 
 
### proxyDepositBase: `u128`
- **interface**: `api.consts.proxy.proxyDepositBase`
- **summary**:    The base amount of currency needed to reserve for creating a proxy. 

   This is held for an additional storage item whose value size is  `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes. 
 
### proxyDepositFactor: `u128`
- **interface**: `api.consts.proxy.proxyDepositFactor`
- **summary**:    The amount of currency needed per proxy added. 

   This is held for adding 32 bytes plus an instance of `ProxyType` more into a  pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take  into account `32 + proxy_type.encode().len()` bytes of data. 

___


## revive
 
### chainId: `u64`
- **interface**: `api.consts.revive.chainId`
- **summary**:    The [EIP-155](https://eips.ethereum.org/EIPS/eip-155) chain ID. 

   This is a unique identifier assigned to each blockchain network,  preventing replay attacks. 
 
### codeHashLockupDepositPercent: `Perbill`
- **interface**: `api.consts.revive.codeHashLockupDepositPercent`
- **summary**:    The percentage of the storage deposit that should be held for using a code hash.  Instantiating a contract, protects the code from being removed. In order to prevent  abuse these actions are protected with a percentage of the code deposit. 
 
### depositPerByte: `u128`
- **interface**: `api.consts.revive.depositPerByte`
- **summary**:    The amount of balance a caller has to pay for each byte of storage. 

   #### Note 

   It is safe to change this value on a live chain as all refunds are pro rata. 
 
### depositPerItem: `u128`
- **interface**: `api.consts.revive.depositPerItem`
- **summary**:    The amount of balance a caller has to pay for each storage item. 

   #### Note 

   It is safe to change this value on a live chain as all refunds are pro rata. 
 
### nativeToEthRatio: `u32`
- **interface**: `api.consts.revive.nativeToEthRatio`
- **summary**:    The ratio between the decimal representation of the native token and the ETH token. 
 
### unsafeUnstableInterface: `bool`
- **interface**: `api.consts.revive.unsafeUnstableInterface`
- **summary**:    Make contract callable functions marked as `#[unstable]` available. 

   Contracts that use `#[unstable]` functions won't be able to be uploaded unless  this is set to `true`. This is only meant for testnets and dev nodes in order to  experiment with new features. 

   #### Warning 

   Do **not** set to `true` on productions chains. 

___


## stateTrieMigration
 
### maxKeyLen: `u32`
- **interface**: `api.consts.stateTrieMigration.maxKeyLen`
- **summary**:    Maximal number of bytes that a key can have. 

   FRAME itself does not limit the key length.  The concrete value must therefore depend on your storage usage.  A [`frame_support::storage::StorageNMap`] for example can have an arbitrary number of  keys which are then hashed and concatenated, resulting in arbitrarily long keys. 

   Use the *state migration RPC* to retrieve the length of the longest key in your  storage: <https://github.com/paritytech/substrate/issues/11642> 

   The migration will halt with a `Halted` event if this value is too small.  Since there is no real penalty from over-estimating, it is advised to use a large  value. The default is 512 byte. 

   Some key lengths for reference: 

  - [`frame_support::storage::StorageValue`]: 32 byte

  - [`frame_support::storage::StorageMap`]: 64 byte

  - [`frame_support::storage::StorageDoubleMap`]: 96 byte

   For more info see  <https://www.shawntabrizi.com/blog/substrate/querying-substrate-storage-via-rpc/> 

___


## system
 
### blockHashCount: `u32`
- **interface**: `api.consts.system.blockHashCount`
- **summary**:    Maximum number of block number to block hash mappings to keep (oldest pruned first). 
 
### blockLength: `FrameSystemLimitsBlockLength`
- **interface**: `api.consts.system.blockLength`
- **summary**:    The maximum length of a block (in bytes). 
 
### blockWeights: `FrameSystemLimitsBlockWeights`
- **interface**: `api.consts.system.blockWeights`
- **summary**:    Block & extrinsics weights: base values and limits. 
 
### dbWeight: `SpWeightsRuntimeDbWeight`
- **interface**: `api.consts.system.dbWeight`
- **summary**:    The weight of runtime database operations the runtime can invoke. 
 
### ss58Prefix: `u16`
- **interface**: `api.consts.system.ss58Prefix`
- **summary**:    The designated SS58 prefix of this chain. 

   This replaces the "ss58Format" property declared in the chain spec. Reason is  that the runtime should know about the prefix in order to make use of it as  an identifier of the chain. 
 
### version: `SpVersionRuntimeVersion`
- **interface**: `api.consts.system.version`
- **summary**:    Get the chain's in-code version. 

___


## timestamp
 
### minimumPeriod: `u64`
- **interface**: `api.consts.timestamp.minimumPeriod`
- **summary**:    The minimum period between blocks. 

   Be aware that this is different to the *expected* period that the block production  apparatus provides. Your chosen consensus system will generally work with this to  determine a sensible block time. For example, in the Aura pallet it will be double this  period on default settings. 

___


## transactionPayment
 
### operationalFeeMultiplier: `u8`
- **interface**: `api.consts.transactionPayment.operationalFeeMultiplier`
- **summary**:    A fee multiplier for `Operational` extrinsics to compute "virtual tip" to boost their  `priority` 

   This value is multiplied by the `final_fee` to obtain a "virtual tip" that is later  added to a tip component in regular `priority` calculations.  It means that a `Normal` transaction can front-run a similarly-sized `Operational`  extrinsic (with no tip), by including a tip value greater than the virtual tip. 

   ```rust,ignore  // For `Normal`  let priority = priority_calc(tip); 

   // For `Operational`  let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;  let priority = priority_calc(tip + virtual_tip);  ``` 

   Note that since we use `final_fee` the multiplier applies also to the regular `tip`  sent with the transaction. So, not only does the transaction get a priority bump based  on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`  transactions. 

___


## uniques
 
### attributeDepositBase: `u128`
- **interface**: `api.consts.uniques.attributeDepositBase`
- **summary**:    The basic amount of funds that must be reserved when adding an attribute to an item. 
 
### collectionDeposit: `u128`
- **interface**: `api.consts.uniques.collectionDeposit`
- **summary**:    The basic amount of funds that must be reserved for collection. 
 
### depositPerByte: `u128`
- **interface**: `api.consts.uniques.depositPerByte`
- **summary**:    The additional funds that must be reserved for the number of bytes store in metadata,  either "normal" metadata or attribute metadata. 
 
### itemDeposit: `u128`
- **interface**: `api.consts.uniques.itemDeposit`
- **summary**:    The basic amount of funds that must be reserved for an item. 
 
### keyLimit: `u32`
- **interface**: `api.consts.uniques.keyLimit`
- **summary**:    The maximum length of an attribute key. 
 
### metadataDepositBase: `u128`
- **interface**: `api.consts.uniques.metadataDepositBase`
- **summary**:    The basic amount of funds that must be reserved when adding metadata to your item. 
 
### stringLimit: `u32`
- **interface**: `api.consts.uniques.stringLimit`
- **summary**:    The maximum length of data stored on-chain. 
 
### valueLimit: `u32`
- **interface**: `api.consts.uniques.valueLimit`
- **summary**:    The maximum length of an attribute value. 

___


## utility
 
### batchedCallsLimit: `u32`
- **interface**: `api.consts.utility.batchedCallsLimit`
- **summary**:    The limit on the number of batched calls. 

___


## vesting
 
### maxVestingSchedules: `u32`
- **interface**: `api.consts.vesting.maxVestingSchedules`
 
### minVestedTransfer: `u128`
- **interface**: `api.consts.vesting.minVestedTransfer`
- **summary**:    The minimum amount transferred to call `vested_transfer`. 

___


## xcmpQueue
 
### maxActiveOutboundChannels: `u32`
- **interface**: `api.consts.xcmpQueue.maxActiveOutboundChannels`
- **summary**:    Maximal number of outbound XCMP channels that can have messages queued at the same time. 

   If this is reached, then no further messages can be sent to channels that do not yet  have a message queued. This should be set to the expected maximum of outbound channels  which is determined by [`Self::ChannelInfo`]. It is important to set this large enough,  since otherwise the congestion control protocol will not work as intended and messages  may be dropped. This value increases the PoV and should therefore not be picked too  high. Governance needs to pay attention to not open more channels than this value. 
 
### maxInboundSuspended: `u32`
- **interface**: `api.consts.xcmpQueue.maxInboundSuspended`
- **summary**:    The maximum number of inbound XCMP channels that can be suspended simultaneously. 

   Any further channel suspensions will fail and messages may get dropped without further  notice. Choosing a high value (1000) is okay; the trade-off that is described in  [`InboundXcmpSuspended`] still applies at that scale. 
 
### maxPageSize: `u32`
- **interface**: `api.consts.xcmpQueue.maxPageSize`
- **summary**:    The maximal page size for HRMP message pages. 

   A lower limit can be set dynamically, but this is the hard-limit for the PoV worst case  benchmarking. The limit for the size of a message is slightly below this, since some  overhead is incurred for encoding the format. 
