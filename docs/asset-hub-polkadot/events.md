---
title: Events
---

Events are emitted for certain operations on the runtime. The following sections describe the events that are part of the default asset-hub-polkadot runtime. 

(NOTE: These were generated from a static/snapshot view of a recent default asset-hub-polkadot runtime. Some items may not be available in older nodes, or in any customized implementations.)

- **[assetConversion](#assetconversion)**

- **[assets](#assets)**

- **[assetTxPayment](#assettxpayment)**

- **[balances](#balances)**

- **[collatorSelection](#collatorselection)**

- **[cumulusXcm](#cumulusxcm)**

- **[foreignAssets](#foreignassets)**

- **[messageQueue](#messagequeue)**

- **[multisig](#multisig)**

- **[nfts](#nfts)**

- **[parachainSystem](#parachainsystem)**

- **[polkadotXcm](#polkadotxcm)**

- **[poolAssets](#poolassets)**

- **[proxy](#proxy)**

- **[session](#session)**

- **[stateTrieMigration](#statetriemigration)**

- **[system](#system)**

- **[toKusamaXcmRouter](#tokusamaxcmrouter)**

- **[transactionPayment](#transactionpayment)**

- **[uniques](#uniques)**

- **[utility](#utility)**

- **[vesting](#vesting)**

- **[xcmpQueue](#xcmpqueue)**


___


## assetConversion
 
### LiquidityAdded(`AccountId32`, `AccountId32`, `(StagingXcmV4Location,StagingXcmV4Location)`, `u128`, `u128`, `u32`, `u128`)
- **interface**: `api.events.assetConversion.LiquidityAdded.is`
- **summary**:    A successful call of the `AddLiquidity` extrinsic will create this event. 
 
### LiquidityRemoved(`AccountId32`, `AccountId32`, `(StagingXcmV4Location,StagingXcmV4Location)`, `u128`, `u128`, `u32`, `u128`, `Permill`)
- **interface**: `api.events.assetConversion.LiquidityRemoved.is`
- **summary**:    A successful call of the `RemoveLiquidity` extrinsic will create this event. 
 
### PoolCreated(`AccountId32`, `(StagingXcmV4Location,StagingXcmV4Location)`, `AccountId32`, `u32`)
- **interface**: `api.events.assetConversion.PoolCreated.is`
- **summary**:    A successful call of the `CreatePool` extrinsic will create this event. 
 
### SwapCreditExecuted(`u128`, `u128`, `Vec<(StagingXcmV4Location,u128)>`)
- **interface**: `api.events.assetConversion.SwapCreditExecuted.is`
- **summary**:    Assets have been converted from one to another. 
 
### SwapExecuted(`AccountId32`, `AccountId32`, `u128`, `u128`, `Vec<(StagingXcmV4Location,u128)>`)
- **interface**: `api.events.assetConversion.SwapExecuted.is`
- **summary**:    Assets have been converted from one to another. Both `SwapExactTokenForToken`  and `SwapTokenForExactToken` will generate this event. 
 
### Touched(`(StagingXcmV4Location,StagingXcmV4Location)`, `AccountId32`)
- **interface**: `api.events.assetConversion.Touched.is`
- **summary**:    Pool has been touched in order to fulfill operational requirements. 

___


## assets
 
### AccountsDestroyed(`u32`, `u32`, `u32`)
- **interface**: `api.events.assets.AccountsDestroyed.is`
- **summary**:    Accounts were destroyed for given asset. 
 
### ApprovalCancelled(`u32`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.assets.ApprovalCancelled.is`
- **summary**:    An approval for account `delegate` was cancelled by `owner`. 
 
### ApprovalsDestroyed(`u32`, `u32`, `u32`)
- **interface**: `api.events.assets.ApprovalsDestroyed.is`
- **summary**:    Approvals were destroyed for given asset. 
 
### ApprovedTransfer(`u32`, `AccountId32`, `AccountId32`, `u128`)
- **interface**: `api.events.assets.ApprovedTransfer.is`
- **summary**:    (Additional) funds have been approved for transfer to a destination account. 
 
### AssetFrozen(`u32`)
- **interface**: `api.events.assets.AssetFrozen.is`
- **summary**:    Some asset `asset_id` was frozen. 
 
### AssetMinBalanceChanged(`u32`, `u128`)
- **interface**: `api.events.assets.AssetMinBalanceChanged.is`
- **summary**:    The min_balance of an asset has been updated by the asset owner. 
 
### AssetStatusChanged(`u32`)
- **interface**: `api.events.assets.AssetStatusChanged.is`
- **summary**:    An asset has had its attributes changed by the `Force` origin. 
 
### AssetThawed(`u32`)
- **interface**: `api.events.assets.AssetThawed.is`
- **summary**:    Some asset `asset_id` was thawed. 
 
### Blocked(`u32`, `AccountId32`)
- **interface**: `api.events.assets.Blocked.is`
- **summary**:    Some account `who` was blocked. 
 
### Burned(`u32`, `AccountId32`, `u128`)
- **interface**: `api.events.assets.Burned.is`
- **summary**:    Some assets were destroyed. 
 
### Created(`u32`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.assets.Created.is`
- **summary**:    Some asset class was created. 
 
### Deposited(`u32`, `AccountId32`, `u128`)
- **interface**: `api.events.assets.Deposited.is`
- **summary**:    Some assets were deposited (e.g. for transaction fees). 
 
### Destroyed(`u32`)
- **interface**: `api.events.assets.Destroyed.is`
- **summary**:    An asset class was destroyed. 
 
### DestructionStarted(`u32`)
- **interface**: `api.events.assets.DestructionStarted.is`
- **summary**:    An asset class is in the process of being destroyed. 
 
### ForceCreated(`u32`, `AccountId32`)
- **interface**: `api.events.assets.ForceCreated.is`
- **summary**:    Some asset class was force-created. 
 
### Frozen(`u32`, `AccountId32`)
- **interface**: `api.events.assets.Frozen.is`
- **summary**:    Some account `who` was frozen. 
 
### Issued(`u32`, `AccountId32`, `u128`)
- **interface**: `api.events.assets.Issued.is`
- **summary**:    Some assets were issued. 
 
### MetadataCleared(`u32`)
- **interface**: `api.events.assets.MetadataCleared.is`
- **summary**:    Metadata has been cleared for an asset. 
 
### MetadataSet(`u32`, `Bytes`, `Bytes`, `u8`, `bool`)
- **interface**: `api.events.assets.MetadataSet.is`
- **summary**:    New metadata has been set for an asset. 
 
### OwnerChanged(`u32`, `AccountId32`)
- **interface**: `api.events.assets.OwnerChanged.is`
- **summary**:    The owner changed. 
 
### TeamChanged(`u32`, `AccountId32`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.assets.TeamChanged.is`
- **summary**:    The management team changed. 
 
### Thawed(`u32`, `AccountId32`)
- **interface**: `api.events.assets.Thawed.is`
- **summary**:    Some account `who` was thawed. 
 
### Touched(`u32`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.assets.Touched.is`
- **summary**:    Some account `who` was created with a deposit from `depositor`. 
 
### Transferred(`u32`, `AccountId32`, `AccountId32`, `u128`)
- **interface**: `api.events.assets.Transferred.is`
- **summary**:    Some assets were transferred. 
 
### TransferredApproved(`u32`, `AccountId32`, `AccountId32`, `AccountId32`, `u128`)
- **interface**: `api.events.assets.TransferredApproved.is`
- **summary**:    An `amount` was transferred in its entirety from `owner` to `destination` by  the approved `delegate`. 
 
### Withdrawn(`u32`, `AccountId32`, `u128`)
- **interface**: `api.events.assets.Withdrawn.is`
- **summary**:    Some assets were withdrawn from the account (e.g. for transaction fees). 

___


## assetTxPayment
 
### AssetRefundFailed(`u128`)
- **interface**: `api.events.assetTxPayment.AssetRefundFailed.is`
- **summary**:    A swap of the refund in native currency back to asset failed. 
 
### AssetTxFeePaid(`AccountId32`, `u128`, `u128`, `StagingXcmV4Location`)
- **interface**: `api.events.assetTxPayment.AssetTxFeePaid.is`
- **summary**:    A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,  has been paid by `who` in an asset `asset_id`. 

___


## balances
 
### BalanceSet(`AccountId32`, `u128`)
- **interface**: `api.events.balances.BalanceSet.is`
- **summary**:    A balance was set by root. 
 
### Burned(`AccountId32`, `u128`)
- **interface**: `api.events.balances.Burned.is`
- **summary**:    Some amount was burned from an account. 
 
### Deposit(`AccountId32`, `u128`)
- **interface**: `api.events.balances.Deposit.is`
- **summary**:    Some amount was deposited (e.g. for transaction fees). 
 
### DustLost(`AccountId32`, `u128`)
- **interface**: `api.events.balances.DustLost.is`
- **summary**:    An account was removed whose balance was non-zero but below ExistentialDeposit,  resulting in an outright loss. 
 
### Endowed(`AccountId32`, `u128`)
- **interface**: `api.events.balances.Endowed.is`
- **summary**:    An account was created with some free balance. 
 
### Frozen(`AccountId32`, `u128`)
- **interface**: `api.events.balances.Frozen.is`
- **summary**:    Some balance was frozen. 
 
### Issued(`u128`)
- **interface**: `api.events.balances.Issued.is`
- **summary**:    Total issuance was increased by `amount`, creating a credit to be balanced. 
 
### Locked(`AccountId32`, `u128`)
- **interface**: `api.events.balances.Locked.is`
- **summary**:    Some balance was locked. 
 
### Minted(`AccountId32`, `u128`)
- **interface**: `api.events.balances.Minted.is`
- **summary**:    Some amount was minted into an account. 
 
### Rescinded(`u128`)
- **interface**: `api.events.balances.Rescinded.is`
- **summary**:    Total issuance was decreased by `amount`, creating a debt to be balanced. 
 
### Reserved(`AccountId32`, `u128`)
- **interface**: `api.events.balances.Reserved.is`
- **summary**:    Some balance was reserved (moved from free to reserved). 
 
### ReserveRepatriated(`AccountId32`, `AccountId32`, `u128`, `FrameSupportTokensMiscBalanceStatus`)
- **interface**: `api.events.balances.ReserveRepatriated.is`
- **summary**:    Some balance was moved from the reserve of the first account to the second account.  Final argument indicates the destination balance type. 
 
### Restored(`AccountId32`, `u128`)
- **interface**: `api.events.balances.Restored.is`
- **summary**:    Some amount was restored into an account. 
 
### Slashed(`AccountId32`, `u128`)
- **interface**: `api.events.balances.Slashed.is`
- **summary**:    Some amount was removed from the account (e.g. for misbehavior). 
 
### Suspended(`AccountId32`, `u128`)
- **interface**: `api.events.balances.Suspended.is`
- **summary**:    Some amount was suspended from an account (it can be restored later). 
 
### Thawed(`AccountId32`, `u128`)
- **interface**: `api.events.balances.Thawed.is`
- **summary**:    Some balance was thawed. 
 
### TotalIssuanceForced(`u128`, `u128`)
- **interface**: `api.events.balances.TotalIssuanceForced.is`
- **summary**:    The `TotalIssuance` was forcefully changed. 
 
### Transfer(`AccountId32`, `AccountId32`, `u128`)
- **interface**: `api.events.balances.Transfer.is`
- **summary**:    Transfer succeeded. 
 
### Unlocked(`AccountId32`, `u128`)
- **interface**: `api.events.balances.Unlocked.is`
- **summary**:    Some balance was unlocked. 
 
### Unreserved(`AccountId32`, `u128`)
- **interface**: `api.events.balances.Unreserved.is`
- **summary**:    Some balance was unreserved (moved from reserved to free). 
 
### Upgraded(`AccountId32`)
- **interface**: `api.events.balances.Upgraded.is`
- **summary**:    An account was upgraded. 
 
### Withdraw(`AccountId32`, `u128`)
- **interface**: `api.events.balances.Withdraw.is`
- **summary**:    Some amount was withdrawn from the account (e.g. for transaction fees). 

___


## collatorSelection
 
### CandidateAdded(`AccountId32`, `u128`)
- **interface**: `api.events.collatorSelection.CandidateAdded.is`
- **summary**:    A new candidate joined. 
 
### CandidateBondUpdated(`AccountId32`, `u128`)
- **interface**: `api.events.collatorSelection.CandidateBondUpdated.is`
- **summary**:    Bond of a candidate updated. 
 
### CandidateRemoved(`AccountId32`)
- **interface**: `api.events.collatorSelection.CandidateRemoved.is`
- **summary**:    A candidate was removed. 
 
### CandidateReplaced(`AccountId32`, `AccountId32`, `u128`)
- **interface**: `api.events.collatorSelection.CandidateReplaced.is`
- **summary**:    An account was replaced in the candidate list by another one. 
 
### InvalidInvulnerableSkipped(`AccountId32`)
- **interface**: `api.events.collatorSelection.InvalidInvulnerableSkipped.is`
- **summary**:    An account was unable to be added to the Invulnerables because they did not have keys  registered. Other Invulnerables may have been set. 
 
### InvulnerableAdded(`AccountId32`)
- **interface**: `api.events.collatorSelection.InvulnerableAdded.is`
- **summary**:    A new Invulnerable was added. 
 
### InvulnerableRemoved(`AccountId32`)
- **interface**: `api.events.collatorSelection.InvulnerableRemoved.is`
- **summary**:    An Invulnerable was removed. 
 
### NewCandidacyBond(`u128`)
- **interface**: `api.events.collatorSelection.NewCandidacyBond.is`
- **summary**:    The candidacy bond was set. 
 
### NewDesiredCandidates(`u32`)
- **interface**: `api.events.collatorSelection.NewDesiredCandidates.is`
- **summary**:    The number of desired candidates was set. 
 
### NewInvulnerables(`Vec<AccountId32>`)
- **interface**: `api.events.collatorSelection.NewInvulnerables.is`
- **summary**:    New Invulnerables were set. 

___


## cumulusXcm
 
### ExecutedDownward(`[u8;32]`, `StagingXcmV5TraitsOutcome`)
- **interface**: `api.events.cumulusXcm.ExecutedDownward.is`
- **summary**:    Downward message executed with the given outcome.  \[ id, outcome \] 
 
### InvalidFormat(`[u8;32]`)
- **interface**: `api.events.cumulusXcm.InvalidFormat.is`
- **summary**:    Downward message is invalid XCM.  \[ id \] 
 
### UnsupportedVersion(`[u8;32]`)
- **interface**: `api.events.cumulusXcm.UnsupportedVersion.is`
- **summary**:    Downward message is unsupported version of XCM.  \[ id \] 

___


## foreignAssets
 
### AccountsDestroyed(`StagingXcmV4Location`, `u32`, `u32`)
- **interface**: `api.events.foreignAssets.AccountsDestroyed.is`
- **summary**:    Accounts were destroyed for given asset. 
 
### ApprovalCancelled(`StagingXcmV4Location`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.foreignAssets.ApprovalCancelled.is`
- **summary**:    An approval for account `delegate` was cancelled by `owner`. 
 
### ApprovalsDestroyed(`StagingXcmV4Location`, `u32`, `u32`)
- **interface**: `api.events.foreignAssets.ApprovalsDestroyed.is`
- **summary**:    Approvals were destroyed for given asset. 
 
### ApprovedTransfer(`StagingXcmV4Location`, `AccountId32`, `AccountId32`, `u128`)
- **interface**: `api.events.foreignAssets.ApprovedTransfer.is`
- **summary**:    (Additional) funds have been approved for transfer to a destination account. 
 
### AssetFrozen(`StagingXcmV4Location`)
- **interface**: `api.events.foreignAssets.AssetFrozen.is`
- **summary**:    Some asset `asset_id` was frozen. 
 
### AssetMinBalanceChanged(`StagingXcmV4Location`, `u128`)
- **interface**: `api.events.foreignAssets.AssetMinBalanceChanged.is`
- **summary**:    The min_balance of an asset has been updated by the asset owner. 
 
### AssetStatusChanged(`StagingXcmV4Location`)
- **interface**: `api.events.foreignAssets.AssetStatusChanged.is`
- **summary**:    An asset has had its attributes changed by the `Force` origin. 
 
### AssetThawed(`StagingXcmV4Location`)
- **interface**: `api.events.foreignAssets.AssetThawed.is`
- **summary**:    Some asset `asset_id` was thawed. 
 
### Blocked(`StagingXcmV4Location`, `AccountId32`)
- **interface**: `api.events.foreignAssets.Blocked.is`
- **summary**:    Some account `who` was blocked. 
 
### Burned(`StagingXcmV4Location`, `AccountId32`, `u128`)
- **interface**: `api.events.foreignAssets.Burned.is`
- **summary**:    Some assets were destroyed. 
 
### Created(`StagingXcmV4Location`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.foreignAssets.Created.is`
- **summary**:    Some asset class was created. 
 
### Deposited(`StagingXcmV4Location`, `AccountId32`, `u128`)
- **interface**: `api.events.foreignAssets.Deposited.is`
- **summary**:    Some assets were deposited (e.g. for transaction fees). 
 
### Destroyed(`StagingXcmV4Location`)
- **interface**: `api.events.foreignAssets.Destroyed.is`
- **summary**:    An asset class was destroyed. 
 
### DestructionStarted(`StagingXcmV4Location`)
- **interface**: `api.events.foreignAssets.DestructionStarted.is`
- **summary**:    An asset class is in the process of being destroyed. 
 
### ForceCreated(`StagingXcmV4Location`, `AccountId32`)
- **interface**: `api.events.foreignAssets.ForceCreated.is`
- **summary**:    Some asset class was force-created. 
 
### Frozen(`StagingXcmV4Location`, `AccountId32`)
- **interface**: `api.events.foreignAssets.Frozen.is`
- **summary**:    Some account `who` was frozen. 
 
### Issued(`StagingXcmV4Location`, `AccountId32`, `u128`)
- **interface**: `api.events.foreignAssets.Issued.is`
- **summary**:    Some assets were issued. 
 
### MetadataCleared(`StagingXcmV4Location`)
- **interface**: `api.events.foreignAssets.MetadataCleared.is`
- **summary**:    Metadata has been cleared for an asset. 
 
### MetadataSet(`StagingXcmV4Location`, `Bytes`, `Bytes`, `u8`, `bool`)
- **interface**: `api.events.foreignAssets.MetadataSet.is`
- **summary**:    New metadata has been set for an asset. 
 
### OwnerChanged(`StagingXcmV4Location`, `AccountId32`)
- **interface**: `api.events.foreignAssets.OwnerChanged.is`
- **summary**:    The owner changed. 
 
### TeamChanged(`StagingXcmV4Location`, `AccountId32`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.foreignAssets.TeamChanged.is`
- **summary**:    The management team changed. 
 
### Thawed(`StagingXcmV4Location`, `AccountId32`)
- **interface**: `api.events.foreignAssets.Thawed.is`
- **summary**:    Some account `who` was thawed. 
 
### Touched(`StagingXcmV4Location`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.foreignAssets.Touched.is`
- **summary**:    Some account `who` was created with a deposit from `depositor`. 
 
### Transferred(`StagingXcmV4Location`, `AccountId32`, `AccountId32`, `u128`)
- **interface**: `api.events.foreignAssets.Transferred.is`
- **summary**:    Some assets were transferred. 
 
### TransferredApproved(`StagingXcmV4Location`, `AccountId32`, `AccountId32`, `AccountId32`, `u128`)
- **interface**: `api.events.foreignAssets.TransferredApproved.is`
- **summary**:    An `amount` was transferred in its entirety from `owner` to `destination` by  the approved `delegate`. 
 
### Withdrawn(`StagingXcmV4Location`, `AccountId32`, `u128`)
- **interface**: `api.events.foreignAssets.Withdrawn.is`
- **summary**:    Some assets were withdrawn from the account (e.g. for transaction fees). 

___


## messageQueue
 
### OverweightEnqueued(`[u8;32]`, `CumulusPrimitivesCoreAggregateMessageOrigin`, `u32`, `u32`)
- **interface**: `api.events.messageQueue.OverweightEnqueued.is`
- **summary**:    Message placed in overweight queue. 
 
### PageReaped(`CumulusPrimitivesCoreAggregateMessageOrigin`, `u32`)
- **interface**: `api.events.messageQueue.PageReaped.is`
- **summary**:    This page was reaped. 
 
### Processed(`H256`, `CumulusPrimitivesCoreAggregateMessageOrigin`, `SpWeightsWeightV2Weight`, `bool`)
- **interface**: `api.events.messageQueue.Processed.is`
- **summary**:    Message is processed. 
 
### ProcessingFailed(`H256`, `CumulusPrimitivesCoreAggregateMessageOrigin`, `FrameSupportMessagesProcessMessageError`)
- **interface**: `api.events.messageQueue.ProcessingFailed.is`
- **summary**:    Message discarded due to an error in the `MessageProcessor` (usually a format error). 

___


## multisig
 
### DepositPoked(`AccountId32`, `[u8;32]`, `u128`, `u128`)
- **interface**: `api.events.multisig.DepositPoked.is`
- **summary**:    The deposit for a multisig operation has been updated/poked. 
 
### MultisigApproval(`AccountId32`, `PalletMultisigTimepoint`, `AccountId32`, `[u8;32]`)
- **interface**: `api.events.multisig.MultisigApproval.is`
- **summary**:    A multisig operation has been approved by someone. 
 
### MultisigCancelled(`AccountId32`, `PalletMultisigTimepoint`, `AccountId32`, `[u8;32]`)
- **interface**: `api.events.multisig.MultisigCancelled.is`
- **summary**:    A multisig operation has been cancelled. 
 
### MultisigExecuted(`AccountId32`, `PalletMultisigTimepoint`, `AccountId32`, `[u8;32]`, `Result<Null, SpRuntimeDispatchError>`)
- **interface**: `api.events.multisig.MultisigExecuted.is`
- **summary**:    A multisig operation has been executed. 
 
### NewMultisig(`AccountId32`, `AccountId32`, `[u8;32]`)
- **interface**: `api.events.multisig.NewMultisig.is`
- **summary**:    A new multisig operation has begun. 

___


## nfts
 
### AllApprovalsCancelled(`u32`, `u32`, `AccountId32`)
- **interface**: `api.events.nfts.AllApprovalsCancelled.is`
- **summary**:    All approvals of an item got cancelled. 
 
### ApprovalCancelled(`u32`, `u32`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.nfts.ApprovalCancelled.is`
- **summary**:    An approval for a `delegate` account to transfer the `item` of an item  `collection` was cancelled by its `owner`. 
 
### AttributeCleared(`u32`, `Option<u32>`, `Bytes`, `PalletNftsAttributeNamespace`)
- **interface**: `api.events.nfts.AttributeCleared.is`
- **summary**:    Attribute metadata has been cleared for a `collection` or `item`. 
 
### AttributeSet(`u32`, `Option<u32>`, `Bytes`, `Bytes`, `PalletNftsAttributeNamespace`)
- **interface**: `api.events.nfts.AttributeSet.is`
- **summary**:    New attribute metadata has been set for a `collection` or `item`. 
 
### Burned(`u32`, `u32`, `AccountId32`)
- **interface**: `api.events.nfts.Burned.is`
- **summary**:    An `item` was destroyed. 
 
### CollectionConfigChanged(`u32`)
- **interface**: `api.events.nfts.CollectionConfigChanged.is`
- **summary**:    A `collection` has had its config changed by the `Force` origin. 
 
### CollectionLocked(`u32`)
- **interface**: `api.events.nfts.CollectionLocked.is`
- **summary**:    Some `collection` was locked. 
 
### CollectionMaxSupplySet(`u32`, `u32`)
- **interface**: `api.events.nfts.CollectionMaxSupplySet.is`
- **summary**:    Max supply has been set for a collection. 
 
### CollectionMetadataCleared(`u32`)
- **interface**: `api.events.nfts.CollectionMetadataCleared.is`
- **summary**:    Metadata has been cleared for a `collection`. 
 
### CollectionMetadataSet(`u32`, `Bytes`)
- **interface**: `api.events.nfts.CollectionMetadataSet.is`
- **summary**:    New metadata has been set for a `collection`. 
 
### CollectionMintSettingsUpdated(`u32`)
- **interface**: `api.events.nfts.CollectionMintSettingsUpdated.is`
- **summary**:    Mint settings for a collection had changed. 
 
### Created(`u32`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.nfts.Created.is`
- **summary**:    A `collection` was created. 
 
### Destroyed(`u32`)
- **interface**: `api.events.nfts.Destroyed.is`
- **summary**:    A `collection` was destroyed. 
 
### ForceCreated(`u32`, `AccountId32`)
- **interface**: `api.events.nfts.ForceCreated.is`
- **summary**:    A `collection` was force-created. 
 
### Issued(`u32`, `u32`, `AccountId32`)
- **interface**: `api.events.nfts.Issued.is`
- **summary**:    An `item` was issued. 
 
### ItemAttributesApprovalAdded(`u32`, `u32`, `AccountId32`)
- **interface**: `api.events.nfts.ItemAttributesApprovalAdded.is`
- **summary**:    A new approval to modify item attributes was added. 
 
### ItemAttributesApprovalRemoved(`u32`, `u32`, `AccountId32`)
- **interface**: `api.events.nfts.ItemAttributesApprovalRemoved.is`
- **summary**:    A new approval to modify item attributes was removed. 
 
### ItemBought(`u32`, `u32`, `u128`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.nfts.ItemBought.is`
- **summary**:    An item was bought. 
 
### ItemMetadataCleared(`u32`, `u32`)
- **interface**: `api.events.nfts.ItemMetadataCleared.is`
- **summary**:    Metadata has been cleared for an item. 
 
### ItemMetadataSet(`u32`, `u32`, `Bytes`)
- **interface**: `api.events.nfts.ItemMetadataSet.is`
- **summary**:    New metadata has been set for an item. 
 
### ItemPriceRemoved(`u32`, `u32`)
- **interface**: `api.events.nfts.ItemPriceRemoved.is`
- **summary**:    The price for the item was removed. 
 
### ItemPriceSet(`u32`, `u32`, `u128`, `Option<AccountId32>`)
- **interface**: `api.events.nfts.ItemPriceSet.is`
- **summary**:    The price was set for the item. 
 
### ItemPropertiesLocked(`u32`, `u32`, `bool`, `bool`)
- **interface**: `api.events.nfts.ItemPropertiesLocked.is`
- **summary**:    `item` metadata or attributes were locked. 
 
### ItemTransferLocked(`u32`, `u32`)
- **interface**: `api.events.nfts.ItemTransferLocked.is`
- **summary**:    An `item` became non-transferable. 
 
### ItemTransferUnlocked(`u32`, `u32`)
- **interface**: `api.events.nfts.ItemTransferUnlocked.is`
- **summary**:    An `item` became transferable. 
 
### NextCollectionIdIncremented(`Option<u32>`)
- **interface**: `api.events.nfts.NextCollectionIdIncremented.is`
- **summary**:    Event gets emitted when the `NextCollectionId` gets incremented. 
 
### OwnerChanged(`u32`, `AccountId32`)
- **interface**: `api.events.nfts.OwnerChanged.is`
- **summary**:    The owner changed. 
 
### OwnershipAcceptanceChanged(`AccountId32`, `Option<u32>`)
- **interface**: `api.events.nfts.OwnershipAcceptanceChanged.is`
- **summary**:    Ownership acceptance has changed for an account. 
 
### PalletAttributeSet(`u32`, `Option<u32>`, `PalletNftsPalletAttributes`, `Bytes`)
- **interface**: `api.events.nfts.PalletAttributeSet.is`
- **summary**:    A new attribute in the `Pallet` namespace was set for the `collection` or an `item`  within that `collection`. 
 
### PreSignedAttributesSet(`u32`, `u32`, `PalletNftsAttributeNamespace`)
- **interface**: `api.events.nfts.PreSignedAttributesSet.is`
- **summary**:    New attributes have been set for an `item` of the `collection`. 
 
### Redeposited(`u32`, `Vec<u32>`)
- **interface**: `api.events.nfts.Redeposited.is`
- **summary**:    The deposit for a set of `item`s within a `collection` has been updated. 
 
### SwapCancelled(`u32`, `u32`, `u32`, `Option<u32>`, `Option<PalletNftsPriceWithDirection>`, `u32`)
- **interface**: `api.events.nfts.SwapCancelled.is`
- **summary**:    The swap was cancelled. 
 
### SwapClaimed(`u32`, `u32`, `AccountId32`, `u32`, `u32`, `AccountId32`, `Option<PalletNftsPriceWithDirection>`, `u32`)
- **interface**: `api.events.nfts.SwapClaimed.is`
- **summary**:    The swap has been claimed. 
 
### SwapCreated(`u32`, `u32`, `u32`, `Option<u32>`, `Option<PalletNftsPriceWithDirection>`, `u32`)
- **interface**: `api.events.nfts.SwapCreated.is`
- **summary**:    An `item` swap intent was created. 
 
### TeamChanged(`u32`, `Option<AccountId32>`, `Option<AccountId32>`, `Option<AccountId32>`)
- **interface**: `api.events.nfts.TeamChanged.is`
- **summary**:    The management team changed. 
 
### TipSent(`u32`, `u32`, `AccountId32`, `AccountId32`, `u128`)
- **interface**: `api.events.nfts.TipSent.is`
- **summary**:    A tip was sent. 
 
### TransferApproved(`u32`, `u32`, `AccountId32`, `AccountId32`, `Option<u32>`)
- **interface**: `api.events.nfts.TransferApproved.is`
- **summary**:    An `item` of a `collection` has been approved by the `owner` for transfer by  a `delegate`. 
 
### Transferred(`u32`, `u32`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.nfts.Transferred.is`
- **summary**:    An `item` was transferred. 

___


## parachainSystem
 
### DownwardMessagesProcessed(`SpWeightsWeightV2Weight`, `H256`)
- **interface**: `api.events.parachainSystem.DownwardMessagesProcessed.is`
- **summary**:    Downward messages were processed using the given weight. 
 
### DownwardMessagesReceived(`u32`)
- **interface**: `api.events.parachainSystem.DownwardMessagesReceived.is`
- **summary**:    Some downward messages have been received and will be processed. 
 
### UpwardMessageSent(`Option<[u8;32]>`)
- **interface**: `api.events.parachainSystem.UpwardMessageSent.is`
- **summary**:    An upward message was sent to the relay chain. 
 
### ValidationFunctionApplied(`u32`)
- **interface**: `api.events.parachainSystem.ValidationFunctionApplied.is`
- **summary**:    The validation function was applied as of the contained relay chain block number. 
 
### ValidationFunctionDiscarded()
- **interface**: `api.events.parachainSystem.ValidationFunctionDiscarded.is`
- **summary**:    The relay-chain aborted the upgrade process. 
 
### ValidationFunctionStored()
- **interface**: `api.events.parachainSystem.ValidationFunctionStored.is`
- **summary**:    The validation function has been scheduled to apply. 

___


## polkadotXcm
 
### AliasAuthorizationRemoved(`StagingXcmV5Location`, `StagingXcmV5Location`)
- **interface**: `api.events.polkadotXcm.AliasAuthorizationRemoved.is`
- **summary**:    `target` removed alias authorization for `aliaser`. 
 
### AliasAuthorized(`StagingXcmV5Location`, `StagingXcmV5Location`, `Option<u64>`)
- **interface**: `api.events.polkadotXcm.AliasAuthorized.is`
- **summary**:    An `aliaser` location was authorized by `target` to alias it, authorization valid until  `expiry` block number. 
 
### AliasesAuthorizationsRemoved(`StagingXcmV5Location`)
- **interface**: `api.events.polkadotXcm.AliasesAuthorizationsRemoved.is`
- **summary**:    `target` removed all alias authorizations. 
 
### AssetsClaimed(`H256`, `StagingXcmV5Location`, `XcmVersionedAssets`)
- **interface**: `api.events.polkadotXcm.AssetsClaimed.is`
- **summary**:    Some assets have been claimed from an asset trap 
 
### AssetsTrapped(`H256`, `StagingXcmV5Location`, `XcmVersionedAssets`)
- **interface**: `api.events.polkadotXcm.AssetsTrapped.is`
- **summary**:    Some assets have been placed in an asset trap. 
 
### Attempted(`StagingXcmV5TraitsOutcome`)
- **interface**: `api.events.polkadotXcm.Attempted.is`
- **summary**:    Execution of an XCM message was attempted. 
 
### FeesPaid(`StagingXcmV5Location`, `StagingXcmV5AssetAssets`)
- **interface**: `api.events.polkadotXcm.FeesPaid.is`
- **summary**:    Fees were paid from a location for an operation (often for using `SendXcm`). 
 
### InvalidQuerier(`StagingXcmV5Location`, `u64`, `StagingXcmV5Location`, `Option<StagingXcmV5Location>`)
- **interface**: `api.events.polkadotXcm.InvalidQuerier.is`
- **summary**:    Expected query response has been received but the querier location of the response does  not match the expected. The query remains registered for a later, valid, response to  be received and acted upon. 
 
### InvalidQuerierVersion(`StagingXcmV5Location`, `u64`)
- **interface**: `api.events.polkadotXcm.InvalidQuerierVersion.is`
- **summary**:    Expected query response has been received but the expected querier location placed in  storage by this runtime previously cannot be decoded. The query remains registered. 

   This is unexpected (since a location placed in storage in a previously executing  runtime should be readable prior to query timeout) and dangerous since the possibly  valid response will be dropped. Manual governance intervention is probably going to be  needed. 
 
### InvalidResponder(`StagingXcmV5Location`, `u64`, `Option<StagingXcmV5Location>`)
- **interface**: `api.events.polkadotXcm.InvalidResponder.is`
- **summary**:    Expected query response has been received but the origin location of the response does  not match that expected. The query remains registered for a later, valid, response to  be received and acted upon. 
 
### InvalidResponderVersion(`StagingXcmV5Location`, `u64`)
- **interface**: `api.events.polkadotXcm.InvalidResponderVersion.is`
- **summary**:    Expected query response has been received but the expected origin location placed in  storage by this runtime previously cannot be decoded. The query remains registered. 

   This is unexpected (since a location placed in storage in a previously executing  runtime should be readable prior to query timeout) and dangerous since the possibly  valid response will be dropped. Manual governance intervention is probably going to be  needed. 
 
### Notified(`u64`, `u8`, `u8`)
- **interface**: `api.events.polkadotXcm.Notified.is`
- **summary**:    Query response has been received and query is removed. The registered notification has  been dispatched and executed successfully. 
 
### NotifyDecodeFailed(`u64`, `u8`, `u8`)
- **interface**: `api.events.polkadotXcm.NotifyDecodeFailed.is`
- **summary**:    Query response has been received and query is removed. The dispatch was unable to be  decoded into a `Call`; this might be due to dispatch function having a signature which  is not `(origin, QueryId, Response)`. 
 
### NotifyDispatchError(`u64`, `u8`, `u8`)
- **interface**: `api.events.polkadotXcm.NotifyDispatchError.is`
- **summary**:    Query response has been received and query is removed. There was a general error with  dispatching the notification call. 
 
### NotifyOverweight(`u64`, `u8`, `u8`, `SpWeightsWeightV2Weight`, `SpWeightsWeightV2Weight`)
- **interface**: `api.events.polkadotXcm.NotifyOverweight.is`
- **summary**:    Query response has been received and query is removed. The registered notification  could not be dispatched because the dispatch weight is greater than the maximum weight  originally budgeted by this runtime for the query result. 
 
### NotifyTargetMigrationFail(`XcmVersionedLocation`, `u64`)
- **interface**: `api.events.polkadotXcm.NotifyTargetMigrationFail.is`
- **summary**:    A given location which had a version change subscription was dropped owing to an error  migrating the location to our new XCM format. 
 
### NotifyTargetSendFail(`StagingXcmV5Location`, `u64`, `XcmV5TraitsError`)
- **interface**: `api.events.polkadotXcm.NotifyTargetSendFail.is`
- **summary**:    A given location which had a version change subscription was dropped owing to an error  sending the notification to it. 
 
### ProcessXcmError(`StagingXcmV5Location`, `XcmV5TraitsError`, `[u8;32]`)
- **interface**: `api.events.polkadotXcm.ProcessXcmError.is`
- **summary**:    An XCM message failed to process. 
 
### ResponseReady(`u64`, `StagingXcmV5Response`)
- **interface**: `api.events.polkadotXcm.ResponseReady.is`
- **summary**:    Query response has been received and is ready for taking with `take_response`. There is  no registered notification call. 
 
### ResponseTaken(`u64`)
- **interface**: `api.events.polkadotXcm.ResponseTaken.is`
- **summary**:    Received query response has been read and removed. 
 
### SendFailed(`StagingXcmV5Location`, `StagingXcmV5Location`, `XcmV3TraitsSendError`, `[u8;32]`)
- **interface**: `api.events.polkadotXcm.SendFailed.is`
- **summary**:    An XCM message failed to send. 
 
### Sent(`StagingXcmV5Location`, `StagingXcmV5Location`, `StagingXcmV5Xcm`, `[u8;32]`)
- **interface**: `api.events.polkadotXcm.Sent.is`
- **summary**:    An XCM message was sent. 
 
### SupportedVersionChanged(`StagingXcmV5Location`, `u32`)
- **interface**: `api.events.polkadotXcm.SupportedVersionChanged.is`
- **summary**:    The supported version of a location has been changed. This might be through an  automatic notification or a manual intervention. 
 
### UnexpectedResponse(`StagingXcmV5Location`, `u64`)
- **interface**: `api.events.polkadotXcm.UnexpectedResponse.is`
- **summary**:    Query response received which does not match a registered query. This may be because a  matching query was never registered, it may be because it is a duplicate response, or  because the query timed out. 
 
### VersionChangeNotified(`StagingXcmV5Location`, `u32`, `StagingXcmV5AssetAssets`, `[u8;32]`)
- **interface**: `api.events.polkadotXcm.VersionChangeNotified.is`
- **summary**:    An XCM version change notification message has been attempted to be sent. 

   The cost of sending it (borne by the chain) is included. 
 
### VersionMigrationFinished(`u32`)
- **interface**: `api.events.polkadotXcm.VersionMigrationFinished.is`
- **summary**:    A XCM version migration finished. 
 
### VersionNotifyRequested(`StagingXcmV5Location`, `StagingXcmV5AssetAssets`, `[u8;32]`)
- **interface**: `api.events.polkadotXcm.VersionNotifyRequested.is`
- **summary**:    We have requested that a remote chain send us XCM version change notifications. 
 
### VersionNotifyStarted(`StagingXcmV5Location`, `StagingXcmV5AssetAssets`, `[u8;32]`)
- **interface**: `api.events.polkadotXcm.VersionNotifyStarted.is`
- **summary**:    A remote has requested XCM version change notification from us and we have honored it.  A version information message is sent to them and its cost is included. 
 
### VersionNotifyUnrequested(`StagingXcmV5Location`, `StagingXcmV5AssetAssets`, `[u8;32]`)
- **interface**: `api.events.polkadotXcm.VersionNotifyUnrequested.is`
- **summary**:    We have requested that a remote chain stops sending us XCM version change  notifications. 

___


## poolAssets
 
### AccountsDestroyed(`u32`, `u32`, `u32`)
- **interface**: `api.events.poolAssets.AccountsDestroyed.is`
- **summary**:    Accounts were destroyed for given asset. 
 
### ApprovalCancelled(`u32`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.poolAssets.ApprovalCancelled.is`
- **summary**:    An approval for account `delegate` was cancelled by `owner`. 
 
### ApprovalsDestroyed(`u32`, `u32`, `u32`)
- **interface**: `api.events.poolAssets.ApprovalsDestroyed.is`
- **summary**:    Approvals were destroyed for given asset. 
 
### ApprovedTransfer(`u32`, `AccountId32`, `AccountId32`, `u128`)
- **interface**: `api.events.poolAssets.ApprovedTransfer.is`
- **summary**:    (Additional) funds have been approved for transfer to a destination account. 
 
### AssetFrozen(`u32`)
- **interface**: `api.events.poolAssets.AssetFrozen.is`
- **summary**:    Some asset `asset_id` was frozen. 
 
### AssetMinBalanceChanged(`u32`, `u128`)
- **interface**: `api.events.poolAssets.AssetMinBalanceChanged.is`
- **summary**:    The min_balance of an asset has been updated by the asset owner. 
 
### AssetStatusChanged(`u32`)
- **interface**: `api.events.poolAssets.AssetStatusChanged.is`
- **summary**:    An asset has had its attributes changed by the `Force` origin. 
 
### AssetThawed(`u32`)
- **interface**: `api.events.poolAssets.AssetThawed.is`
- **summary**:    Some asset `asset_id` was thawed. 
 
### Blocked(`u32`, `AccountId32`)
- **interface**: `api.events.poolAssets.Blocked.is`
- **summary**:    Some account `who` was blocked. 
 
### Burned(`u32`, `AccountId32`, `u128`)
- **interface**: `api.events.poolAssets.Burned.is`
- **summary**:    Some assets were destroyed. 
 
### Created(`u32`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.poolAssets.Created.is`
- **summary**:    Some asset class was created. 
 
### Deposited(`u32`, `AccountId32`, `u128`)
- **interface**: `api.events.poolAssets.Deposited.is`
- **summary**:    Some assets were deposited (e.g. for transaction fees). 
 
### Destroyed(`u32`)
- **interface**: `api.events.poolAssets.Destroyed.is`
- **summary**:    An asset class was destroyed. 
 
### DestructionStarted(`u32`)
- **interface**: `api.events.poolAssets.DestructionStarted.is`
- **summary**:    An asset class is in the process of being destroyed. 
 
### ForceCreated(`u32`, `AccountId32`)
- **interface**: `api.events.poolAssets.ForceCreated.is`
- **summary**:    Some asset class was force-created. 
 
### Frozen(`u32`, `AccountId32`)
- **interface**: `api.events.poolAssets.Frozen.is`
- **summary**:    Some account `who` was frozen. 
 
### Issued(`u32`, `AccountId32`, `u128`)
- **interface**: `api.events.poolAssets.Issued.is`
- **summary**:    Some assets were issued. 
 
### MetadataCleared(`u32`)
- **interface**: `api.events.poolAssets.MetadataCleared.is`
- **summary**:    Metadata has been cleared for an asset. 
 
### MetadataSet(`u32`, `Bytes`, `Bytes`, `u8`, `bool`)
- **interface**: `api.events.poolAssets.MetadataSet.is`
- **summary**:    New metadata has been set for an asset. 
 
### OwnerChanged(`u32`, `AccountId32`)
- **interface**: `api.events.poolAssets.OwnerChanged.is`
- **summary**:    The owner changed. 
 
### TeamChanged(`u32`, `AccountId32`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.poolAssets.TeamChanged.is`
- **summary**:    The management team changed. 
 
### Thawed(`u32`, `AccountId32`)
- **interface**: `api.events.poolAssets.Thawed.is`
- **summary**:    Some account `who` was thawed. 
 
### Touched(`u32`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.poolAssets.Touched.is`
- **summary**:    Some account `who` was created with a deposit from `depositor`. 
 
### Transferred(`u32`, `AccountId32`, `AccountId32`, `u128`)
- **interface**: `api.events.poolAssets.Transferred.is`
- **summary**:    Some assets were transferred. 
 
### TransferredApproved(`u32`, `AccountId32`, `AccountId32`, `AccountId32`, `u128`)
- **interface**: `api.events.poolAssets.TransferredApproved.is`
- **summary**:    An `amount` was transferred in its entirety from `owner` to `destination` by  the approved `delegate`. 
 
### Withdrawn(`u32`, `AccountId32`, `u128`)
- **interface**: `api.events.poolAssets.Withdrawn.is`
- **summary**:    Some assets were withdrawn from the account (e.g. for transaction fees). 

___


## proxy
 
### Announced(`AccountId32`, `AccountId32`, `H256`)
- **interface**: `api.events.proxy.Announced.is`
- **summary**:    An announcement was placed to make a call in the future. 
 
### DepositPoked(`AccountId32`, `PalletProxyDepositKind`, `u128`, `u128`)
- **interface**: `api.events.proxy.DepositPoked.is`
- **summary**:    A deposit stored for proxies or announcements was poked / updated. 
 
### ProxyAdded(`AccountId32`, `AccountId32`, `AssetHubPolkadotRuntimeProxyType`, `u32`)
- **interface**: `api.events.proxy.ProxyAdded.is`
- **summary**:    A proxy was added. 
 
### ProxyExecuted(`Result<Null, SpRuntimeDispatchError>`)
- **interface**: `api.events.proxy.ProxyExecuted.is`
- **summary**:    A proxy was executed correctly, with the given. 
 
### ProxyRemoved(`AccountId32`, `AccountId32`, `AssetHubPolkadotRuntimeProxyType`, `u32`)
- **interface**: `api.events.proxy.ProxyRemoved.is`
- **summary**:    A proxy was removed. 
 
### PureCreated(`AccountId32`, `AccountId32`, `AssetHubPolkadotRuntimeProxyType`, `u16`)
- **interface**: `api.events.proxy.PureCreated.is`
- **summary**:    A pure account has been created by new proxy with given  disambiguation index and proxy type. 

___


## session
 
### NewSession(`u32`)
- **interface**: `api.events.session.NewSession.is`
- **summary**:    New session has happened. Note that the argument is the session index, not the  block number as the type might suggest. 
 
### ValidatorDisabled(`AccountId32`)
- **interface**: `api.events.session.ValidatorDisabled.is`
- **summary**:    Validator has been disabled. 
 
### ValidatorReenabled(`AccountId32`)
- **interface**: `api.events.session.ValidatorReenabled.is`
- **summary**:    Validator has been re-enabled. 

___


## stateTrieMigration
 
### AutoMigrationFinished()
- **interface**: `api.events.stateTrieMigration.AutoMigrationFinished.is`
- **summary**:    The auto migration task finished. 
 
### Halted(`PalletStateTrieMigrationError`)
- **interface**: `api.events.stateTrieMigration.Halted.is`
- **summary**:    Migration got halted due to an error or miss-configuration. 
 
### Migrated(`u32`, `u32`, `PalletStateTrieMigrationMigrationCompute`)
- **interface**: `api.events.stateTrieMigration.Migrated.is`
- **summary**:    Given number of `(top, child)` keys were migrated respectively, with the given  `compute`. 
 
### Slashed(`AccountId32`, `u128`)
- **interface**: `api.events.stateTrieMigration.Slashed.is`
- **summary**:    Some account got slashed by the given amount. 

___


## system
 
### CodeUpdated()
- **interface**: `api.events.system.CodeUpdated.is`
- **summary**:    `:code` was updated. 
 
### ExtrinsicFailed(`SpRuntimeDispatchError`, `FrameSystemDispatchEventInfo`)
- **interface**: `api.events.system.ExtrinsicFailed.is`
- **summary**:    An extrinsic failed. 
 
### ExtrinsicSuccess(`FrameSystemDispatchEventInfo`)
- **interface**: `api.events.system.ExtrinsicSuccess.is`
- **summary**:    An extrinsic completed successfully. 
 
### KilledAccount(`AccountId32`)
- **interface**: `api.events.system.KilledAccount.is`
- **summary**:    An account was reaped. 
 
### NewAccount(`AccountId32`)
- **interface**: `api.events.system.NewAccount.is`
- **summary**:    A new account was created. 
 
### RejectedInvalidAuthorizedUpgrade(`H256`, `SpRuntimeDispatchError`)
- **interface**: `api.events.system.RejectedInvalidAuthorizedUpgrade.is`
- **summary**:    An invalid authorized upgrade was rejected while trying to apply it. 
 
### Remarked(`AccountId32`, `H256`)
- **interface**: `api.events.system.Remarked.is`
- **summary**:    On on-chain remark happened. 
 
### UpgradeAuthorized(`H256`, `bool`)
- **interface**: `api.events.system.UpgradeAuthorized.is`
- **summary**:    An upgrade was authorized. 

___


## toKusamaXcmRouter
 
### DeliveryFeeFactorDecreased(`u128`)
- **interface**: `api.events.toKusamaXcmRouter.DeliveryFeeFactorDecreased.is`
- **summary**:    Delivery fee factor has been decreased. 
 
### DeliveryFeeFactorIncreased(`u128`)
- **interface**: `api.events.toKusamaXcmRouter.DeliveryFeeFactorIncreased.is`
- **summary**:    Delivery fee factor has been increased. 

___


## transactionPayment
 
### TransactionFeePaid(`AccountId32`, `u128`, `u128`)
- **interface**: `api.events.transactionPayment.TransactionFeePaid.is`
- **summary**:    A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,  has been paid by `who`. 

___


## uniques
 
### ApprovalCancelled(`u32`, `u32`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.uniques.ApprovalCancelled.is`
- **summary**:    An approval for a `delegate` account to transfer the `item` of an item  `collection` was cancelled by its `owner`. 
 
### ApprovedTransfer(`u32`, `u32`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.uniques.ApprovedTransfer.is`
- **summary**:    An `item` of a `collection` has been approved by the `owner` for transfer by  a `delegate`. 
 
### AttributeCleared(`u32`, `Option<u32>`, `Bytes`)
- **interface**: `api.events.uniques.AttributeCleared.is`
- **summary**:    Attribute metadata has been cleared for a `collection` or `item`. 
 
### AttributeSet(`u32`, `Option<u32>`, `Bytes`, `Bytes`)
- **interface**: `api.events.uniques.AttributeSet.is`
- **summary**:    New attribute metadata has been set for a `collection` or `item`. 
 
### Burned(`u32`, `u32`, `AccountId32`)
- **interface**: `api.events.uniques.Burned.is`
- **summary**:    An `item` was destroyed. 
 
### CollectionFrozen(`u32`)
- **interface**: `api.events.uniques.CollectionFrozen.is`
- **summary**:    Some `collection` was frozen. 
 
### CollectionMaxSupplySet(`u32`, `u32`)
- **interface**: `api.events.uniques.CollectionMaxSupplySet.is`
- **summary**:    Max supply has been set for a collection. 
 
### CollectionMetadataCleared(`u32`)
- **interface**: `api.events.uniques.CollectionMetadataCleared.is`
- **summary**:    Metadata has been cleared for a `collection`. 
 
### CollectionMetadataSet(`u32`, `Bytes`, `bool`)
- **interface**: `api.events.uniques.CollectionMetadataSet.is`
- **summary**:    New metadata has been set for a `collection`. 
 
### CollectionThawed(`u32`)
- **interface**: `api.events.uniques.CollectionThawed.is`
- **summary**:    Some `collection` was thawed. 
 
### Created(`u32`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.uniques.Created.is`
- **summary**:    A `collection` was created. 
 
### Destroyed(`u32`)
- **interface**: `api.events.uniques.Destroyed.is`
- **summary**:    A `collection` was destroyed. 
 
### ForceCreated(`u32`, `AccountId32`)
- **interface**: `api.events.uniques.ForceCreated.is`
- **summary**:    A `collection` was force-created. 
 
### Frozen(`u32`, `u32`)
- **interface**: `api.events.uniques.Frozen.is`
- **summary**:    Some `item` was frozen. 
 
### Issued(`u32`, `u32`, `AccountId32`)
- **interface**: `api.events.uniques.Issued.is`
- **summary**:    An `item` was issued. 
 
### ItemBought(`u32`, `u32`, `u128`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.uniques.ItemBought.is`
- **summary**:    An item was bought. 
 
### ItemPriceRemoved(`u32`, `u32`)
- **interface**: `api.events.uniques.ItemPriceRemoved.is`
- **summary**:    The price for the instance was removed. 
 
### ItemPriceSet(`u32`, `u32`, `u128`, `Option<AccountId32>`)
- **interface**: `api.events.uniques.ItemPriceSet.is`
- **summary**:    The price was set for the instance. 
 
### ItemStatusChanged(`u32`)
- **interface**: `api.events.uniques.ItemStatusChanged.is`
- **summary**:    A `collection` has had its attributes changed by the `Force` origin. 
 
### MetadataCleared(`u32`, `u32`)
- **interface**: `api.events.uniques.MetadataCleared.is`
- **summary**:    Metadata has been cleared for an item. 
 
### MetadataSet(`u32`, `u32`, `Bytes`, `bool`)
- **interface**: `api.events.uniques.MetadataSet.is`
- **summary**:    New metadata has been set for an item. 
 
### OwnerChanged(`u32`, `AccountId32`)
- **interface**: `api.events.uniques.OwnerChanged.is`
- **summary**:    The owner changed. 
 
### OwnershipAcceptanceChanged(`AccountId32`, `Option<u32>`)
- **interface**: `api.events.uniques.OwnershipAcceptanceChanged.is`
- **summary**:    Ownership acceptance has changed for an account. 
 
### Redeposited(`u32`, `Vec<u32>`)
- **interface**: `api.events.uniques.Redeposited.is`
- **summary**:    Metadata has been cleared for an item. 
 
### TeamChanged(`u32`, `AccountId32`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.uniques.TeamChanged.is`
- **summary**:    The management team changed. 
 
### Thawed(`u32`, `u32`)
- **interface**: `api.events.uniques.Thawed.is`
- **summary**:    Some `item` was thawed. 
 
### Transferred(`u32`, `u32`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.uniques.Transferred.is`
- **summary**:    An `item` was transferred. 

___


## utility
 
### BatchCompleted()
- **interface**: `api.events.utility.BatchCompleted.is`
- **summary**:    Batch of dispatches completed fully with no error. 
 
### BatchCompletedWithErrors()
- **interface**: `api.events.utility.BatchCompletedWithErrors.is`
- **summary**:    Batch of dispatches completed but has errors. 
 
### BatchInterrupted(`u32`, `SpRuntimeDispatchError`)
- **interface**: `api.events.utility.BatchInterrupted.is`
- **summary**:    Batch of dispatches did not complete fully. Index of first failing dispatch given, as  well as the error. 
 
### DispatchedAs(`Result<Null, SpRuntimeDispatchError>`)
- **interface**: `api.events.utility.DispatchedAs.is`
- **summary**:    A call was dispatched. 
 
### IfElseFallbackCalled(`SpRuntimeDispatchError`)
- **interface**: `api.events.utility.IfElseFallbackCalled.is`
- **summary**:    The fallback call was dispatched. 
 
### IfElseMainSuccess()
- **interface**: `api.events.utility.IfElseMainSuccess.is`
- **summary**:    Main call was dispatched. 
 
### ItemCompleted()
- **interface**: `api.events.utility.ItemCompleted.is`
- **summary**:    A single item within a Batch of dispatches has completed with no error. 
 
### ItemFailed(`SpRuntimeDispatchError`)
- **interface**: `api.events.utility.ItemFailed.is`
- **summary**:    A single item within a Batch of dispatches has completed with error. 

___


## vesting
 
### VestingCompleted(`AccountId32`)
- **interface**: `api.events.vesting.VestingCompleted.is`
- **summary**:    An \[account\] has become fully vested. 
 
### VestingUpdated(`AccountId32`, `u128`)
- **interface**: `api.events.vesting.VestingUpdated.is`
- **summary**:    The amount vested has been updated. This could indicate a change in funds available.  The balance given is the amount which is left unvested (and thus locked). 

___


## xcmpQueue
 
### XcmpMessageSent(`[u8;32]`)
- **interface**: `api.events.xcmpQueue.XcmpMessageSent.is`
- **summary**:    An HRMP message was sent to a sibling parachain. 
