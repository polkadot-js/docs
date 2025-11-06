---
title: Events
---

Events are emitted for certain operations on the runtime. The following sections describe the events that are part of the default asset-hub-kusama runtime. 

(NOTE: These were generated from a static/snapshot view of a recent default asset-hub-kusama runtime. Some items may not be available in older nodes, or in any customized implementations.)

- **[ahMigrator](#ahmigrator)**

- **[ahOps](#ahops)**

- **[assetConversion](#assetconversion)**

- **[assetRate](#assetrate)**

- **[assets](#assets)**

- **[assetTxPayment](#assettxpayment)**

- **[balances](#balances)**

- **[bounties](#bounties)**

- **[childBounties](#childbounties)**

- **[claims](#claims)**

- **[collatorSelection](#collatorselection)**

- **[convictionVoting](#convictionvoting)**

- **[cumulusXcm](#cumulusxcm)**

- **[delegatedStaking](#delegatedstaking)**

- **[foreignAssets](#foreignassets)**

- **[indices](#indices)**

- **[messageQueue](#messagequeue)**

- **[multiBlockElection](#multiblockelection)**

- **[multiBlockElectionSigned](#multiblockelectionsigned)**

- **[multiBlockElectionVerifier](#multiblockelectionverifier)**

- **[multiBlockMigrations](#multiblockmigrations)**

- **[multisig](#multisig)**

- **[nftFractionalization](#nftfractionalization)**

- **[nfts](#nfts)**

- **[nominationPools](#nominationpools)**

- **[parachainSystem](#parachainsystem)**

- **[parameters](#parameters)**

- **[polkadotXcm](#polkadotxcm)**

- **[poolAssets](#poolassets)**

- **[preimage](#preimage)**

- **[proxy](#proxy)**

- **[recovery](#recovery)**

- **[referenda](#referenda)**

- **[revive](#revive)**

- **[scheduler](#scheduler)**

- **[session](#session)**

- **[society](#society)**

- **[staking](#staking)**

- **[stakingRcClient](#stakingrcclient)**

- **[stateTrieMigration](#statetriemigration)**

- **[system](#system)**

- **[toPolkadotXcmRouter](#topolkadotxcmrouter)**

- **[transactionPayment](#transactionpayment)**

- **[treasury](#treasury)**

- **[uniques](#uniques)**

- **[utility](#utility)**

- **[vesting](#vesting)**

- **[voterList](#voterlist)**

- **[whitelist](#whitelist)**

- **[xcmpQueue](#xcmpqueue)**


___


## ahMigrator
 
### AccountTranslatedParachainSovereign(`AccountId32`, `AccountId32`)
- **interface**: `api.events.ahMigrator.AccountTranslatedParachainSovereign.is`
 
### AccountTranslatedParachainSovereignDerived(`AccountId32`, `AccountId32`, `u16`)
- **interface**: `api.events.ahMigrator.AccountTranslatedParachainSovereignDerived.is`
 
### AssetHubMigrationFinished()
- **interface**: `api.events.ahMigrator.AssetHubMigrationFinished.is`
- **summary**:    The Asset Hub Migration finished. 

   This event is equivalent to `StageTransition { new: MigrationDone, .. }` but is easier  to understand. The finishing is immediate and affects all events happening  afterwards. 
 
### AssetHubMigrationStarted()
- **interface**: `api.events.ahMigrator.AssetHubMigrationStarted.is`
- **summary**:    The Asset Hub Migration started and is active until `AssetHubMigrationFinished` is  emitted. 

   This event is equivalent to `StageTransition { new: DataMigrationOngoing, .. }` but is  easier to understand. The activation is immediate and affects all events happening  afterwards. 
 
### BalancesBeforeRecordConsumed(`u128`, `u128`)
- **interface**: `api.events.ahMigrator.BalancesBeforeRecordConsumed.is`
- **summary**:    The balances before the migration were consumed. 
 
### BalancesBeforeRecordSet(`u128`, `u128`)
- **interface**: `api.events.ahMigrator.BalancesBeforeRecordSet.is`
- **summary**:    The balances before the migration were recorded. 
 
### BatchProcessed(`PalletAhMigratorPalletEventName`, `u32`, `u32`)
- **interface**: `api.events.ahMigrator.BatchProcessed.is`
- **summary**:    We processed a batch of messages for this pallet. 
 
### BatchReceived(`PalletAhMigratorPalletEventName`, `u32`)
- **interface**: `api.events.ahMigrator.BatchReceived.is`
- **summary**:    We received a batch of messages that will be integrated into a pallet. 
 
### DmpQueuePriorityConfigSet(`PalletRcMigratorQueuePriority`, `PalletRcMigratorQueuePriority`)
- **interface**: `api.events.ahMigrator.DmpQueuePriorityConfigSet.is`
- **summary**:    The DMP queue priority config was set. 
 
### DmpQueuePrioritySet(`bool`, `u32`, `u32`)
- **interface**: `api.events.ahMigrator.DmpQueuePrioritySet.is`
- **summary**:    Whether the DMP queue was prioritized for the next block. 
 
### ManagerSet(`Option<AccountId32>`, `Option<AccountId32>`)
- **interface**: `api.events.ahMigrator.ManagerSet.is`
- **summary**:    The manager account id was set. 
 
### ReferendumCanceled(`u32`)
- **interface**: `api.events.ahMigrator.ReferendumCanceled.is`
- **summary**:    A referendum was cancelled because it could not be mapped. 
 
### StageTransition(`PalletAhMigratorMigrationStage`, `PalletAhMigratorMigrationStage`)
- **interface**: `api.events.ahMigrator.StageTransition.is`
- **summary**:    A stage transition has occurred. 
 
### XcmSent(`StagingXcmV5Location`, `StagingXcmV5Location`, `StagingXcmV5Xcm`, `[u8;32]`)
- **interface**: `api.events.ahMigrator.XcmSent.is`
- **summary**:    An XCM message was sent. 

___


## ahOps
 
### CrowdloanUnreserveRemaining(`AccountId32`, `u32`, `u128`)
- **interface**: `api.events.ahOps.CrowdloanUnreserveRemaining.is`
- **summary**:    Some amount for a crowdloan reserve could not be unreserved and needs manual cleanup. 
 
### LeaseUnreserveRemaining(`AccountId32`, `u32`, `u128`)
- **interface**: `api.events.ahOps.LeaseUnreserveRemaining.is`
- **summary**:    Some lease reserve could not be unreserved and needs manual cleanup. 
 
### SovereignMigrated(`u32`, `AccountId32`, `AccountId32`, `Option<u16>`)
- **interface**: `api.events.ahOps.SovereignMigrated.is`
- **summary**:    A sovereign parachain account has been migrated from its child to sibling  representation. 

___


## assetConversion
 
### LiquidityAdded(`AccountId32`, `AccountId32`, `(StagingXcmV5Location,StagingXcmV5Location)`, `u128`, `u128`, `u32`, `u128`)
- **interface**: `api.events.assetConversion.LiquidityAdded.is`
- **summary**:    A successful call of the `AddLiquidity` extrinsic will create this event. 
 
### LiquidityRemoved(`AccountId32`, `AccountId32`, `(StagingXcmV5Location,StagingXcmV5Location)`, `u128`, `u128`, `u32`, `u128`, `Permill`)
- **interface**: `api.events.assetConversion.LiquidityRemoved.is`
- **summary**:    A successful call of the `RemoveLiquidity` extrinsic will create this event. 
 
### PoolCreated(`AccountId32`, `(StagingXcmV5Location,StagingXcmV5Location)`, `AccountId32`, `u32`)
- **interface**: `api.events.assetConversion.PoolCreated.is`
- **summary**:    A successful call of the `CreatePool` extrinsic will create this event. 
 
### SwapCreditExecuted(`u128`, `u128`, `Vec<(StagingXcmV5Location,u128)>`)
- **interface**: `api.events.assetConversion.SwapCreditExecuted.is`
- **summary**:    Assets have been converted from one to another. 
 
### SwapExecuted(`AccountId32`, `AccountId32`, `u128`, `u128`, `Vec<(StagingXcmV5Location,u128)>`)
- **interface**: `api.events.assetConversion.SwapExecuted.is`
- **summary**:    Assets have been converted from one to another. Both `SwapExactTokenForToken`  and `SwapTokenForExactToken` will generate this event. 
 
### Touched(`(StagingXcmV5Location,StagingXcmV5Location)`, `AccountId32`)
- **interface**: `api.events.assetConversion.Touched.is`
- **summary**:    Pool has been touched in order to fulfill operational requirements. 

___


## assetRate
 
### AssetRateCreated(`PolkadotRuntimeCommonImplsVersionedLocatableAsset`, `u128`)
- **interface**: `api.events.assetRate.AssetRateCreated.is`
 
### AssetRateRemoved(`PolkadotRuntimeCommonImplsVersionedLocatableAsset`)
- **interface**: `api.events.assetRate.AssetRateRemoved.is`
 
### AssetRateUpdated(`PolkadotRuntimeCommonImplsVersionedLocatableAsset`, `u128`, `u128`)
- **interface**: `api.events.assetRate.AssetRateUpdated.is`

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
 
### AssetTxFeePaid(`AccountId32`, `u128`, `u128`, `StagingXcmV5Location`)
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
 
### Unexpected(`PalletBalancesUnexpectedKind`)
- **interface**: `api.events.balances.Unexpected.is`
- **summary**:    An unexpected/defensive event was triggered. 
 
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


## bounties
 
### BountyApproved(`u32`)
- **interface**: `api.events.bounties.BountyApproved.is`
- **summary**:    A bounty is approved. 
 
### BountyAwarded(`u32`, `AccountId32`)
- **interface**: `api.events.bounties.BountyAwarded.is`
- **summary**:    A bounty is awarded to a beneficiary. 
 
### BountyBecameActive(`u32`)
- **interface**: `api.events.bounties.BountyBecameActive.is`
- **summary**:    A bounty proposal is funded and became active. 
 
### BountyCanceled(`u32`)
- **interface**: `api.events.bounties.BountyCanceled.is`
- **summary**:    A bounty is cancelled. 
 
### BountyClaimed(`u32`, `u128`, `AccountId32`)
- **interface**: `api.events.bounties.BountyClaimed.is`
- **summary**:    A bounty is claimed by beneficiary. 
 
### BountyExtended(`u32`)
- **interface**: `api.events.bounties.BountyExtended.is`
- **summary**:    A bounty expiry is extended. 
 
### BountyProposed(`u32`)
- **interface**: `api.events.bounties.BountyProposed.is`
- **summary**:    New bounty proposal. 
 
### BountyRejected(`u32`, `u128`)
- **interface**: `api.events.bounties.BountyRejected.is`
- **summary**:    A bounty proposal was rejected; funds were slashed. 
 
### CuratorAccepted(`u32`, `AccountId32`)
- **interface**: `api.events.bounties.CuratorAccepted.is`
- **summary**:    A bounty curator is accepted. 
 
### CuratorProposed(`u32`, `AccountId32`)
- **interface**: `api.events.bounties.CuratorProposed.is`
- **summary**:    A bounty curator is proposed. 
 
### CuratorUnassigned(`u32`)
- **interface**: `api.events.bounties.CuratorUnassigned.is`
- **summary**:    A bounty curator is unassigned. 
 
### DepositPoked(`u32`, `AccountId32`, `u128`, `u128`)
- **interface**: `api.events.bounties.DepositPoked.is`
- **summary**:    A bounty deposit has been poked. 

___


## childBounties
 
### Added(`u32`, `u32`)
- **interface**: `api.events.childBounties.Added.is`
- **summary**:    A child-bounty is added. 
 
### Awarded(`u32`, `u32`, `AccountId32`)
- **interface**: `api.events.childBounties.Awarded.is`
- **summary**:    A child-bounty is awarded to a beneficiary. 
 
### Canceled(`u32`, `u32`)
- **interface**: `api.events.childBounties.Canceled.is`
- **summary**:    A child-bounty is cancelled. 
 
### Claimed(`u32`, `u32`, `u128`, `AccountId32`)
- **interface**: `api.events.childBounties.Claimed.is`
- **summary**:    A child-bounty is claimed by beneficiary. 

___


## claims
 
### Claimed(`AccountId32`, `EthereumAddress`, `u128`)
- **interface**: `api.events.claims.Claimed.is`
- **summary**:    Someone claimed some DOTs. 

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


## convictionVoting
 
### Delegated(`AccountId32`, `AccountId32`)
- **interface**: `api.events.convictionVoting.Delegated.is`
- **summary**:    An account has delegated their vote to another account. \[who, target\] 
 
### Undelegated(`AccountId32`)
- **interface**: `api.events.convictionVoting.Undelegated.is`
- **summary**:    An \[account\] has cancelled a previous delegation operation. 
 
### Voted(`AccountId32`, `PalletConvictionVotingVoteAccountVote`)
- **interface**: `api.events.convictionVoting.Voted.is`
- **summary**:    An account has voted 
 
### VoteRemoved(`AccountId32`, `PalletConvictionVotingVoteAccountVote`)
- **interface**: `api.events.convictionVoting.VoteRemoved.is`
- **summary**:    A vote has been removed 
 
### VoteUnlocked(`AccountId32`, `u16`)
- **interface**: `api.events.convictionVoting.VoteUnlocked.is`
- **summary**:    The lockup period of a conviction vote expired, and the funds have been unlocked. 

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


## delegatedStaking
 
### Delegated(`AccountId32`, `AccountId32`, `u128`)
- **interface**: `api.events.delegatedStaking.Delegated.is`
- **summary**:    Funds delegated by a delegator. 
 
### MigratedDelegation(`AccountId32`, `AccountId32`, `u128`)
- **interface**: `api.events.delegatedStaking.MigratedDelegation.is`
- **summary**:    Unclaimed delegation funds migrated to delegator. 
 
### Released(`AccountId32`, `AccountId32`, `u128`)
- **interface**: `api.events.delegatedStaking.Released.is`
- **summary**:    Funds released to a delegator. 
 
### Slashed(`AccountId32`, `AccountId32`, `u128`)
- **interface**: `api.events.delegatedStaking.Slashed.is`
- **summary**:    Funds slashed from a delegator. 

___


## foreignAssets
 
### AccountsDestroyed(`StagingXcmV5Location`, `u32`, `u32`)
- **interface**: `api.events.foreignAssets.AccountsDestroyed.is`
- **summary**:    Accounts were destroyed for given asset. 
 
### ApprovalCancelled(`StagingXcmV5Location`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.foreignAssets.ApprovalCancelled.is`
- **summary**:    An approval for account `delegate` was cancelled by `owner`. 
 
### ApprovalsDestroyed(`StagingXcmV5Location`, `u32`, `u32`)
- **interface**: `api.events.foreignAssets.ApprovalsDestroyed.is`
- **summary**:    Approvals were destroyed for given asset. 
 
### ApprovedTransfer(`StagingXcmV5Location`, `AccountId32`, `AccountId32`, `u128`)
- **interface**: `api.events.foreignAssets.ApprovedTransfer.is`
- **summary**:    (Additional) funds have been approved for transfer to a destination account. 
 
### AssetFrozen(`StagingXcmV5Location`)
- **interface**: `api.events.foreignAssets.AssetFrozen.is`
- **summary**:    Some asset `asset_id` was frozen. 
 
### AssetMinBalanceChanged(`StagingXcmV5Location`, `u128`)
- **interface**: `api.events.foreignAssets.AssetMinBalanceChanged.is`
- **summary**:    The min_balance of an asset has been updated by the asset owner. 
 
### AssetStatusChanged(`StagingXcmV5Location`)
- **interface**: `api.events.foreignAssets.AssetStatusChanged.is`
- **summary**:    An asset has had its attributes changed by the `Force` origin. 
 
### AssetThawed(`StagingXcmV5Location`)
- **interface**: `api.events.foreignAssets.AssetThawed.is`
- **summary**:    Some asset `asset_id` was thawed. 
 
### Blocked(`StagingXcmV5Location`, `AccountId32`)
- **interface**: `api.events.foreignAssets.Blocked.is`
- **summary**:    Some account `who` was blocked. 
 
### Burned(`StagingXcmV5Location`, `AccountId32`, `u128`)
- **interface**: `api.events.foreignAssets.Burned.is`
- **summary**:    Some assets were destroyed. 
 
### Created(`StagingXcmV5Location`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.foreignAssets.Created.is`
- **summary**:    Some asset class was created. 
 
### Deposited(`StagingXcmV5Location`, `AccountId32`, `u128`)
- **interface**: `api.events.foreignAssets.Deposited.is`
- **summary**:    Some assets were deposited (e.g. for transaction fees). 
 
### Destroyed(`StagingXcmV5Location`)
- **interface**: `api.events.foreignAssets.Destroyed.is`
- **summary**:    An asset class was destroyed. 
 
### DestructionStarted(`StagingXcmV5Location`)
- **interface**: `api.events.foreignAssets.DestructionStarted.is`
- **summary**:    An asset class is in the process of being destroyed. 
 
### ForceCreated(`StagingXcmV5Location`, `AccountId32`)
- **interface**: `api.events.foreignAssets.ForceCreated.is`
- **summary**:    Some asset class was force-created. 
 
### Frozen(`StagingXcmV5Location`, `AccountId32`)
- **interface**: `api.events.foreignAssets.Frozen.is`
- **summary**:    Some account `who` was frozen. 
 
### Issued(`StagingXcmV5Location`, `AccountId32`, `u128`)
- **interface**: `api.events.foreignAssets.Issued.is`
- **summary**:    Some assets were issued. 
 
### MetadataCleared(`StagingXcmV5Location`)
- **interface**: `api.events.foreignAssets.MetadataCleared.is`
- **summary**:    Metadata has been cleared for an asset. 
 
### MetadataSet(`StagingXcmV5Location`, `Bytes`, `Bytes`, `u8`, `bool`)
- **interface**: `api.events.foreignAssets.MetadataSet.is`
- **summary**:    New metadata has been set for an asset. 
 
### OwnerChanged(`StagingXcmV5Location`, `AccountId32`)
- **interface**: `api.events.foreignAssets.OwnerChanged.is`
- **summary**:    The owner changed. 
 
### TeamChanged(`StagingXcmV5Location`, `AccountId32`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.foreignAssets.TeamChanged.is`
- **summary**:    The management team changed. 
 
### Thawed(`StagingXcmV5Location`, `AccountId32`)
- **interface**: `api.events.foreignAssets.Thawed.is`
- **summary**:    Some account `who` was thawed. 
 
### Touched(`StagingXcmV5Location`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.foreignAssets.Touched.is`
- **summary**:    Some account `who` was created with a deposit from `depositor`. 
 
### Transferred(`StagingXcmV5Location`, `AccountId32`, `AccountId32`, `u128`)
- **interface**: `api.events.foreignAssets.Transferred.is`
- **summary**:    Some assets were transferred. 
 
### TransferredApproved(`StagingXcmV5Location`, `AccountId32`, `AccountId32`, `AccountId32`, `u128`)
- **interface**: `api.events.foreignAssets.TransferredApproved.is`
- **summary**:    An `amount` was transferred in its entirety from `owner` to `destination` by  the approved `delegate`. 
 
### Withdrawn(`StagingXcmV5Location`, `AccountId32`, `u128`)
- **interface**: `api.events.foreignAssets.Withdrawn.is`
- **summary**:    Some assets were withdrawn from the account (e.g. for transaction fees). 

___


## indices
 
### DepositPoked(`AccountId32`, `u32`, `u128`, `u128`)
- **interface**: `api.events.indices.DepositPoked.is`
- **summary**:    A deposit to reserve an index has been poked/reconsidered. 
 
### IndexAssigned(`AccountId32`, `u32`)
- **interface**: `api.events.indices.IndexAssigned.is`
- **summary**:    A account index was assigned. 
 
### IndexFreed(`u32`)
- **interface**: `api.events.indices.IndexFreed.is`
- **summary**:    A account index has been freed up (unassigned). 
 
### IndexFrozen(`u32`, `AccountId32`)
- **interface**: `api.events.indices.IndexFrozen.is`
- **summary**:    A account index has been frozen to its current account ID. 

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


## multiBlockElection
 
### PhaseTransitioned(`PalletElectionProviderMultiBlockPhase`, `PalletElectionProviderMultiBlockPhase`)
- **interface**: `api.events.multiBlockElection.PhaseTransitioned.is`
- **summary**:    A phase transition happened. Only checks major changes in the variants, not minor inner  values. 
 
### UnexpectedTargetSnapshotFailed()
- **interface**: `api.events.multiBlockElection.UnexpectedTargetSnapshotFailed.is`
- **summary**:    Target snapshot creation failed 
 
### UnexpectedVoterSnapshotFailed()
- **interface**: `api.events.multiBlockElection.UnexpectedVoterSnapshotFailed.is`
- **summary**:    Voter snapshot creation failed 

___


## multiBlockElectionSigned
 
### Bailed(`u32`, `AccountId32`)
- **interface**: `api.events.multiBlockElectionSigned.Bailed.is`
- **summary**:    The given account has bailed. 
 
### Discarded(`u32`, `AccountId32`)
- **interface**: `api.events.multiBlockElectionSigned.Discarded.is`
- **summary**:    The given account has been discarded. 
 
### Ejected(`u32`, `AccountId32`)
- **interface**: `api.events.multiBlockElectionSigned.Ejected.is`
- **summary**:    The given solution, for the given round, was ejected. 
 
### Registered(`u32`, `AccountId32`, `SpNposElectionsElectionScore`)
- **interface**: `api.events.multiBlockElectionSigned.Registered.is`
- **summary**:    Upcoming submission has been registered for the given account, with the given score. 
 
### Rewarded(`u32`, `AccountId32`, `u128`)
- **interface**: `api.events.multiBlockElectionSigned.Rewarded.is`
- **summary**:    The given account has been rewarded with the given amount. 
 
### Slashed(`u32`, `AccountId32`, `u128`)
- **interface**: `api.events.multiBlockElectionSigned.Slashed.is`
- **summary**:    The given account has been slashed with the given amount. 
 
### Stored(`u32`, `AccountId32`, `u32`)
- **interface**: `api.events.multiBlockElectionSigned.Stored.is`
- **summary**:    A page of solution solution with the given index has been stored for the given account. 

___


## multiBlockElectionVerifier
 
### Queued(`SpNposElectionsElectionScore`, `Option<SpNposElectionsElectionScore>`)
- **interface**: `api.events.multiBlockElectionVerifier.Queued.is`
- **summary**:    A solution with the given score has replaced our current best solution. 
 
### VerificationFailed(`u32`, `PalletElectionProviderMultiBlockVerifierFeasibilityError`)
- **interface**: `api.events.multiBlockElectionVerifier.VerificationFailed.is`
- **summary**:    A verification failed at the given page. 

   NOTE: if the index is 0, then this could mean either the feasibility of the last page  was wrong, or the final checks of `finalize_verification` failed. 
 
### Verified(`u32`, `u32`)
- **interface**: `api.events.multiBlockElectionVerifier.Verified.is`
- **summary**:    The given page of a solution has been verified, with the given number of winners being  found in it. 

___


## multiBlockMigrations
 
### HistoricCleared(`Option<Bytes>`)
- **interface**: `api.events.multiBlockMigrations.HistoricCleared.is`
- **summary**:    The set of historical migrations has been cleared. 
 
### MigrationAdvanced(`u32`, `u32`)
- **interface**: `api.events.multiBlockMigrations.MigrationAdvanced.is`
- **summary**:    A migration progressed. 
 
### MigrationCompleted(`u32`, `u32`)
- **interface**: `api.events.multiBlockMigrations.MigrationCompleted.is`
- **summary**:    A Migration completed. 
 
### MigrationFailed(`u32`, `u32`)
- **interface**: `api.events.multiBlockMigrations.MigrationFailed.is`
- **summary**:    A Migration failed. 

   This implies that the whole upgrade failed and governance intervention is required. 
 
### MigrationSkipped(`u32`)
- **interface**: `api.events.multiBlockMigrations.MigrationSkipped.is`
- **summary**:    A migration was skipped since it was already executed in the past. 
 
### UpgradeCompleted()
- **interface**: `api.events.multiBlockMigrations.UpgradeCompleted.is`
- **summary**:    The current runtime upgrade completed. 

   This implies that all of its migrations completed successfully as well. 
 
### UpgradeFailed()
- **interface**: `api.events.multiBlockMigrations.UpgradeFailed.is`
- **summary**:    Runtime upgrade failed. 

   This is very bad and will require governance intervention. 
 
### UpgradeStarted(`u32`)
- **interface**: `api.events.multiBlockMigrations.UpgradeStarted.is`
- **summary**:    A Runtime upgrade started. 

   Its end is indicated by `UpgradeCompleted` or `UpgradeFailed`. 

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


## nftFractionalization
 
### NftFractionalized(`u32`, `u32`, `u128`, `u32`, `AccountId32`)
- **interface**: `api.events.nftFractionalization.NftFractionalized.is`
- **summary**:    An NFT was successfully fractionalized. 
 
### NftUnified(`u32`, `u32`, `u32`, `AccountId32`)
- **interface**: `api.events.nftFractionalization.NftUnified.is`
- **summary**:    An NFT was successfully returned back. 

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


## nominationPools
 
### Bonded(`AccountId32`, `u32`, `u128`, `bool`)
- **interface**: `api.events.nominationPools.Bonded.is`
- **summary**:    A member has became bonded in a pool. 
 
### Created(`AccountId32`, `u32`)
- **interface**: `api.events.nominationPools.Created.is`
- **summary**:    A pool has been created. 
 
### Destroyed(`u32`)
- **interface**: `api.events.nominationPools.Destroyed.is`
- **summary**:    A pool has been destroyed. 
 
### GlobalParamsUpdated(`u128`, `u128`, `Option<u32>`, `Option<u32>`, `Option<u32>`, `Option<Perbill>`)
- **interface**: `api.events.nominationPools.GlobalParamsUpdated.is`
- **summary**:    Global parameters regulating nomination pools have been updated. 
 
### MemberClaimPermissionUpdated(`AccountId32`, `PalletNominationPoolsClaimPermission`)
- **interface**: `api.events.nominationPools.MemberClaimPermissionUpdated.is`
- **summary**:    A pool member's claim permission has been updated. 
 
### MemberRemoved(`u32`, `AccountId32`, `u128`)
- **interface**: `api.events.nominationPools.MemberRemoved.is`
- **summary**:    A member has been removed from a pool. 

   The removal can be voluntary (withdrawn all unbonded funds) or involuntary (kicked).  Any funds that are still delegated (i.e. dangling delegation) are released and are  represented by `released_balance`. 
 
### MetadataUpdated(`u32`, `AccountId32`)
- **interface**: `api.events.nominationPools.MetadataUpdated.is`
- **summary**:    A pool's metadata was updated. 
 
### MinBalanceDeficitAdjusted(`u32`, `u128`)
- **interface**: `api.events.nominationPools.MinBalanceDeficitAdjusted.is`
- **summary**:    Topped up deficit in frozen ED of the reward pool. 
 
### MinBalanceExcessAdjusted(`u32`, `u128`)
- **interface**: `api.events.nominationPools.MinBalanceExcessAdjusted.is`
- **summary**:    Claimed excess frozen ED of af the reward pool. 
 
### PaidOut(`AccountId32`, `u32`, `u128`)
- **interface**: `api.events.nominationPools.PaidOut.is`
- **summary**:    A payout has been made to a member. 
 
### PoolCommissionChangeRateUpdated(`u32`, `PalletNominationPoolsCommissionChangeRate`)
- **interface**: `api.events.nominationPools.PoolCommissionChangeRateUpdated.is`
- **summary**:    A pool's commission `change_rate` has been changed. 
 
### PoolCommissionClaimed(`u32`, `u128`)
- **interface**: `api.events.nominationPools.PoolCommissionClaimed.is`
- **summary**:    Pool commission has been claimed. 
 
### PoolCommissionClaimPermissionUpdated(`u32`, `Option<PalletNominationPoolsCommissionClaimPermission>`)
- **interface**: `api.events.nominationPools.PoolCommissionClaimPermissionUpdated.is`
- **summary**:    Pool commission claim permission has been updated. 
 
### PoolCommissionUpdated(`u32`, `Option<(Perbill,AccountId32)>`)
- **interface**: `api.events.nominationPools.PoolCommissionUpdated.is`
- **summary**:    A pool's commission setting has been changed. 
 
### PoolMaxCommissionUpdated(`u32`, `Perbill`)
- **interface**: `api.events.nominationPools.PoolMaxCommissionUpdated.is`
- **summary**:    A pool's maximum commission setting has been changed. 
 
### PoolNominationMade(`u32`, `AccountId32`)
- **interface**: `api.events.nominationPools.PoolNominationMade.is`
- **summary**:    A pool's nominating account (or the pool's root account) has nominated a validator set  on behalf of the pool. 
 
### PoolNominatorChilled(`u32`, `AccountId32`)
- **interface**: `api.events.nominationPools.PoolNominatorChilled.is`
- **summary**:    The pool is chilled i.e. no longer nominating. 
 
### PoolSlashed(`u32`, `u128`)
- **interface**: `api.events.nominationPools.PoolSlashed.is`
- **summary**:    The active balance of pool `pool_id` has been slashed to `balance`. 
 
### RolesUpdated(`Option<AccountId32>`, `Option<AccountId32>`, `Option<AccountId32>`)
- **interface**: `api.events.nominationPools.RolesUpdated.is`
- **summary**:    The roles of a pool have been updated to the given new roles. Note that the depositor  can never change. 
 
### StateChanged(`u32`, `PalletNominationPoolsPoolState`)
- **interface**: `api.events.nominationPools.StateChanged.is`
- **summary**:    The state of a pool has changed 
 
### Unbonded(`AccountId32`, `u32`, `u128`, `u128`, `u32`)
- **interface**: `api.events.nominationPools.Unbonded.is`
- **summary**:    A member has unbonded from their pool. 

   - `balance` is the corresponding balance of the number of points that has been  requested to be unbonded (the argument of the `unbond` transaction) from the bonded  pool. 

  - `points` is the number of points that are issued as a result of `balance` being dissolved into the corresponding unbonding pool. 

  - `era` is the era in which the balance will be unbonded. In the absence of slashing, these values will match. In the presence of slashing, the  number of points that are issued in the unbonding pool will be less than the amount  requested to be unbonded. 
 
### UnbondingPoolSlashed(`u32`, `u32`, `u128`)
- **interface**: `api.events.nominationPools.UnbondingPoolSlashed.is`
- **summary**:    The unbond pool at `era` of pool `pool_id` has been slashed to `balance`. 
 
### Withdrawn(`AccountId32`, `u32`, `u128`, `u128`)
- **interface**: `api.events.nominationPools.Withdrawn.is`
- **summary**:    A member has withdrawn from their pool. 

   The given number of `points` have been dissolved in return of `balance`. 

   Similar to `Unbonded` event, in the absence of slashing, the ratio of point to balance  will be 1. 

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


## parameters
 
### Updated(`AssetHubKusamaRuntimeRuntimeParametersKey`, `Option<AssetHubKusamaRuntimeRuntimeParametersValue>`, `Option<AssetHubKusamaRuntimeRuntimeParametersValue>`)
- **interface**: `api.events.parameters.Updated.is`
- **summary**:    A Parameter was set. 

   Is also emitted when the value was not changed. 

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


## preimage
 
### Cleared(`H256`)
- **interface**: `api.events.preimage.Cleared.is`
- **summary**:    A preimage has ben cleared. 
 
### Noted(`H256`)
- **interface**: `api.events.preimage.Noted.is`
- **summary**:    A preimage has been noted. 
 
### Requested(`H256`)
- **interface**: `api.events.preimage.Requested.is`
- **summary**:    A preimage has been requested. 

___


## proxy
 
### Announced(`AccountId32`, `AccountId32`, `H256`)
- **interface**: `api.events.proxy.Announced.is`
- **summary**:    An announcement was placed to make a call in the future. 
 
### DepositPoked(`AccountId32`, `PalletProxyDepositKind`, `u128`, `u128`)
- **interface**: `api.events.proxy.DepositPoked.is`
- **summary**:    A deposit stored for proxies or announcements was poked / updated. 
 
### ProxyAdded(`AccountId32`, `AccountId32`, `AssetHubKusamaRuntimeProxyType`, `u32`)
- **interface**: `api.events.proxy.ProxyAdded.is`
- **summary**:    A proxy was added. 
 
### ProxyExecuted(`Result<Null, SpRuntimeDispatchError>`)
- **interface**: `api.events.proxy.ProxyExecuted.is`
- **summary**:    A proxy was executed correctly, with the given. 
 
### ProxyRemoved(`AccountId32`, `AccountId32`, `AssetHubKusamaRuntimeProxyType`, `u32`)
- **interface**: `api.events.proxy.ProxyRemoved.is`
- **summary**:    A proxy was removed. 
 
### PureCreated(`AccountId32`, `AccountId32`, `AssetHubKusamaRuntimeProxyType`, `u16`)
- **interface**: `api.events.proxy.PureCreated.is`
- **summary**:    A pure account has been created by new proxy with given  disambiguation index and proxy type. 
 
### PureKilled(`AccountId32`, `AccountId32`, `AssetHubKusamaRuntimeProxyType`, `u16`)
- **interface**: `api.events.proxy.PureKilled.is`
- **summary**:    A pure proxy was killed by its spawner. 

___


## recovery
 
### AccountRecovered(`AccountId32`, `AccountId32`)
- **interface**: `api.events.recovery.AccountRecovered.is`
- **summary**:    Lost account has been successfully recovered by rescuer account. 
 
### DepositPoked(`AccountId32`, `PalletRecoveryDepositKind`, `u128`, `u128`)
- **interface**: `api.events.recovery.DepositPoked.is`
- **summary**:    A deposit has been updated. 
 
### RecoveryClosed(`AccountId32`, `AccountId32`)
- **interface**: `api.events.recovery.RecoveryClosed.is`
- **summary**:    A recovery process for lost account by rescuer account has been closed. 
 
### RecoveryCreated(`AccountId32`)
- **interface**: `api.events.recovery.RecoveryCreated.is`
- **summary**:    A recovery process has been set up for an account. 
 
### RecoveryInitiated(`AccountId32`, `AccountId32`)
- **interface**: `api.events.recovery.RecoveryInitiated.is`
- **summary**:    A recovery process has been initiated for lost account by rescuer account. 
 
### RecoveryRemoved(`AccountId32`)
- **interface**: `api.events.recovery.RecoveryRemoved.is`
- **summary**:    A recovery process has been removed for an account. 
 
### RecoveryVouched(`AccountId32`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.recovery.RecoveryVouched.is`
- **summary**:    A recovery process for lost account by rescuer account has been vouched for by sender. 

___


## referenda
 
### Approved(`u32`)
- **interface**: `api.events.referenda.Approved.is`
- **summary**:    A referendum has been approved and its proposal has been scheduled. 
 
### Cancelled(`u32`, `PalletConvictionVotingTally`)
- **interface**: `api.events.referenda.Cancelled.is`
- **summary**:    A referendum has been cancelled. 
 
### ConfirmAborted(`u32`)
- **interface**: `api.events.referenda.ConfirmAborted.is`
 
### Confirmed(`u32`, `PalletConvictionVotingTally`)
- **interface**: `api.events.referenda.Confirmed.is`
- **summary**:    A referendum has ended its confirmation phase and is ready for approval. 
 
### ConfirmStarted(`u32`)
- **interface**: `api.events.referenda.ConfirmStarted.is`
 
### DecisionDepositPlaced(`u32`, `AccountId32`, `u128`)
- **interface**: `api.events.referenda.DecisionDepositPlaced.is`
- **summary**:    The decision deposit has been placed. 
 
### DecisionDepositRefunded(`u32`, `AccountId32`, `u128`)
- **interface**: `api.events.referenda.DecisionDepositRefunded.is`
- **summary**:    The decision deposit has been refunded. 
 
### DecisionStarted(`u32`, `u16`, `FrameSupportPreimagesBounded`, `PalletConvictionVotingTally`)
- **interface**: `api.events.referenda.DecisionStarted.is`
- **summary**:    A referendum has moved into the deciding phase. 
 
### DepositSlashed(`AccountId32`, `u128`)
- **interface**: `api.events.referenda.DepositSlashed.is`
- **summary**:    A deposit has been slashed. 
 
### Killed(`u32`, `PalletConvictionVotingTally`)
- **interface**: `api.events.referenda.Killed.is`
- **summary**:    A referendum has been killed. 
 
### MetadataCleared(`u32`, `H256`)
- **interface**: `api.events.referenda.MetadataCleared.is`
- **summary**:    Metadata for a referendum has been cleared. 
 
### MetadataSet(`u32`, `H256`)
- **interface**: `api.events.referenda.MetadataSet.is`
- **summary**:    Metadata for a referendum has been set. 
 
### Rejected(`u32`, `PalletConvictionVotingTally`)
- **interface**: `api.events.referenda.Rejected.is`
- **summary**:    A proposal has been rejected by referendum. 
 
### SubmissionDepositRefunded(`u32`, `AccountId32`, `u128`)
- **interface**: `api.events.referenda.SubmissionDepositRefunded.is`
- **summary**:    The submission deposit has been refunded. 
 
### Submitted(`u32`, `u16`, `FrameSupportPreimagesBounded`)
- **interface**: `api.events.referenda.Submitted.is`
- **summary**:    A referendum has been submitted. 
 
### TimedOut(`u32`, `PalletConvictionVotingTally`)
- **interface**: `api.events.referenda.TimedOut.is`
- **summary**:    A referendum has been timed out without being decided. 

___


## revive
 
### ContractEmitted(`H160`, `Bytes`, `Vec<H256>`)
- **interface**: `api.events.revive.ContractEmitted.is`
- **summary**:    A custom event emitted by the contract. 
 
### Instantiated(`H160`, `H160`)
- **interface**: `api.events.revive.Instantiated.is`
- **summary**:    Contract deployed by deployer at the specified address. 

___


## scheduler
 
### AgendaIncomplete(`u32`)
- **interface**: `api.events.scheduler.AgendaIncomplete.is`
- **summary**:    Agenda is incomplete from `when`. 
 
### CallUnavailable(`(u32,u32)`, `Option<[u8;32]>`)
- **interface**: `api.events.scheduler.CallUnavailable.is`
- **summary**:    The call for the provided hash was not found so the task has been aborted. 
 
### Canceled(`u32`, `u32`)
- **interface**: `api.events.scheduler.Canceled.is`
- **summary**:    Canceled some task. 
 
### Dispatched(`(u32,u32)`, `Option<[u8;32]>`, `Result<Null, SpRuntimeDispatchError>`)
- **interface**: `api.events.scheduler.Dispatched.is`
- **summary**:    Dispatched some task. 
 
### PeriodicFailed(`(u32,u32)`, `Option<[u8;32]>`)
- **interface**: `api.events.scheduler.PeriodicFailed.is`
- **summary**:    The given task was unable to be renewed since the agenda is full at that block. 
 
### PermanentlyOverweight(`(u32,u32)`, `Option<[u8;32]>`)
- **interface**: `api.events.scheduler.PermanentlyOverweight.is`
- **summary**:    The given task can never be executed since it is overweight. 
 
### RetryCancelled(`(u32,u32)`, `Option<[u8;32]>`)
- **interface**: `api.events.scheduler.RetryCancelled.is`
- **summary**:    Cancel a retry configuration for some task. 
 
### RetryFailed(`(u32,u32)`, `Option<[u8;32]>`)
- **interface**: `api.events.scheduler.RetryFailed.is`
- **summary**:    The given task was unable to be retried since the agenda is full at that block or there  was not enough weight to reschedule it. 
 
### RetrySet(`(u32,u32)`, `Option<[u8;32]>`, `u32`, `u8`)
- **interface**: `api.events.scheduler.RetrySet.is`
- **summary**:    Set a retry configuration for some task. 
 
### Scheduled(`u32`, `u32`)
- **interface**: `api.events.scheduler.Scheduled.is`
- **summary**:    Scheduled some task. 

___


## session
 
### NewQueued()
- **interface**: `api.events.session.NewQueued.is`
- **summary**:    The `NewSession` event in the current block also implies a new validator set to be  queued. 
 
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


## society
 
### AutoUnbid(`AccountId32`)
- **interface**: `api.events.society.AutoUnbid.is`
- **summary**:    A candidate was dropped (due to an excess of bids in the system). 
 
### Bid(`AccountId32`, `u128`)
- **interface**: `api.events.society.Bid.is`
- **summary**:    A membership bid just happened. The given account is the candidate's ID and their offer  is the second. 
 
### CandidateSuspended(`AccountId32`)
- **interface**: `api.events.society.CandidateSuspended.is`
- **summary**:    A candidate has been suspended 
 
### Challenged(`AccountId32`)
- **interface**: `api.events.society.Challenged.is`
- **summary**:    A member has been challenged 
 
### DefenderVote(`AccountId32`, `bool`)
- **interface**: `api.events.society.DefenderVote.is`
- **summary**:    A vote has been placed for a defending member 
 
### Deposit(`u128`)
- **interface**: `api.events.society.Deposit.is`
- **summary**:    Some funds were deposited into the society account. 
 
### DepositPoked(`AccountId32`, `u128`, `u128`)
- **interface**: `api.events.society.DepositPoked.is`
- **summary**:    A deposit was poked / adjusted. 
 
### Elevated(`AccountId32`, `u32`)
- **interface**: `api.events.society.Elevated.is`
- **summary**:    A \[member\] got elevated to \[rank\]. 
 
### Founded(`AccountId32`)
- **interface**: `api.events.society.Founded.is`
- **summary**:    The society is founded by the given identity. 
 
### Inducted(`AccountId32`, `Vec<AccountId32>`)
- **interface**: `api.events.society.Inducted.is`
- **summary**:    A group of candidates have been inducted. The batch's primary is the first value, the  batch in full is the second. 
 
### MemberSuspended(`AccountId32`)
- **interface**: `api.events.society.MemberSuspended.is`
- **summary**:    A member has been suspended 
 
### NewParams(`PalletSocietyGroupParams`)
- **interface**: `api.events.society.NewParams.is`
- **summary**:    A new set of \[params\] has been set for the group. 
 
### SuspendedMemberJudgement(`AccountId32`, `bool`)
- **interface**: `api.events.society.SuspendedMemberJudgement.is`
- **summary**:    A suspended member has been judged. 
 
### Unbid(`AccountId32`)
- **interface**: `api.events.society.Unbid.is`
- **summary**:    A candidate was dropped (by their request). 
 
### Unfounded(`AccountId32`)
- **interface**: `api.events.society.Unfounded.is`
- **summary**:    Society is unfounded. 
 
### Unvouch(`AccountId32`)
- **interface**: `api.events.society.Unvouch.is`
- **summary**:    A candidate was dropped (by request of who vouched for them). 
 
### Vote(`AccountId32`, `AccountId32`, `bool`)
- **interface**: `api.events.society.Vote.is`
- **summary**:    A vote has been placed 
 
### Vouch(`AccountId32`, `u128`, `AccountId32`)
- **interface**: `api.events.society.Vouch.is`
- **summary**:    A membership bid just happened by vouching. The given account is the candidate's ID and  their offer is the second. The vouching party is the third. 

___


## staking
 
### Bonded(`AccountId32`, `u128`)
- **interface**: `api.events.staking.Bonded.is`
- **summary**:    An account has bonded this amount. \[stash, amount\] 

   NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,  it will not be emitted for staking rewards when they are added to stake. 
 
### Chilled(`AccountId32`)
- **interface**: `api.events.staking.Chilled.is`
- **summary**:    An account has stopped participating as either a validator or nominator. 
 
### ControllerBatchDeprecated(`u32`)
- **interface**: `api.events.staking.ControllerBatchDeprecated.is`
- **summary**:    Report of a controller batch deprecation. 
 
### CurrencyMigrated(`AccountId32`, `u128`)
- **interface**: `api.events.staking.CurrencyMigrated.is`
- **summary**:    Staking balance migrated from locks to holds, with any balance that could not be held  is force withdrawn. 
 
### EraPaid(`u32`, `u128`, `u128`)
- **interface**: `api.events.staking.EraPaid.is`
- **summary**:    The era payout has been set; the first balance is the validator-payout; the second is  the remainder from the maximum amount of reward. 
 
### EraPruned(`u32`)
- **interface**: `api.events.staking.EraPruned.is`
- **summary**:    An old era with the given index was pruned. 
 
### ForceEra(`PalletStakingAsyncForcing`)
- **interface**: `api.events.staking.ForceEra.is`
 
### Kicked(`AccountId32`, `AccountId32`)
- **interface**: `api.events.staking.Kicked.is`
- **summary**:    A nominator has been kicked from a validator. 
 
### OffenceReported(`u32`, `AccountId32`, `Perbill`)
- **interface**: `api.events.staking.OffenceReported.is`
- **summary**:    An offence for the given validator, for the given percentage of their stake, at the  given era as been reported. 
 
### OffenceTooOld(`u32`, `AccountId32`, `Perbill`)
- **interface**: `api.events.staking.OffenceTooOld.is`
- **summary**:    An offence was reported that was too old to be processed, and thus was dropped. 
 
### OldSlashingReportDiscarded(`u32`)
- **interface**: `api.events.staking.OldSlashingReportDiscarded.is`
- **summary**:    An old slashing report from a prior era was discarded because it could  not be processed. 
 
### PagedElectionProceeded(`u32`, `Result<u32, u32>`)
- **interface**: `api.events.staking.PagedElectionProceeded.is`
- **summary**:    A page from a multi-page election was fetched. A number of these are followed by  `StakersElected`. 

   `Ok(count)` indicates the give number of stashes were added.  `Err(index)` indicates that the stashes after index were dropped.  `Err(0)` indicates that an error happened but no stashes were dropped nor added. 

   The error indicates that a number of validators were dropped due to excess size, but  the overall election will continue. 
 
### PayoutStarted(`u32`, `AccountId32`, `u32`, `Option<u32>`)
- **interface**: `api.events.staking.PayoutStarted.is`
- **summary**:    A Page of stakers rewards are getting paid. `next` is `None` if all pages are claimed. 
 
### Rewarded(`AccountId32`, `PalletStakingAsyncRewardDestination`, `u128`)
- **interface**: `api.events.staking.Rewarded.is`
- **summary**:    The nominator has been rewarded by this amount to this destination. 
 
### SessionRotated(`u32`, `u32`, `u32`)
- **interface**: `api.events.staking.SessionRotated.is`
- **summary**:    Session change has been triggered. 

   If planned_era is one era ahead of active_era, it implies new era is being planned and  election is ongoing. 
 
### SlashCancelled(`u32`, `AccountId32`)
- **interface**: `api.events.staking.SlashCancelled.is`
- **summary**:    An unapplied slash has been cancelled. 
 
### SlashComputed(`u32`, `u32`, `AccountId32`, `u32`)
- **interface**: `api.events.staking.SlashComputed.is`
- **summary**:    An offence has been processed and the corresponding slash has been computed. 
 
### Slashed(`AccountId32`, `u128`)
- **interface**: `api.events.staking.Slashed.is`
- **summary**:    A staker (validator or nominator) has been slashed by the given amount. 
 
### SnapshotTargetsSizeExceeded(`u32`)
- **interface**: `api.events.staking.SnapshotTargetsSizeExceeded.is`
- **summary**:    Targets size limit reached. 
 
### SnapshotVotersSizeExceeded(`u32`)
- **interface**: `api.events.staking.SnapshotVotersSizeExceeded.is`
- **summary**:    Voters size limit reached. 
 
### StakerRemoved(`AccountId32`)
- **interface**: `api.events.staking.StakerRemoved.is`
- **summary**:    A subsequent event of `Withdrawn`, indicating that `stash` was fully removed from the  system. 
 
### Unbonded(`AccountId32`, `u128`)
- **interface**: `api.events.staking.Unbonded.is`
- **summary**:    An account has unbonded this amount. 
 
### Unexpected(`PalletStakingAsyncPalletUnexpectedKind`)
- **interface**: `api.events.staking.Unexpected.is`
- **summary**:    Something occurred that should never happen under normal operation.  Logged as an event for fail-safe observability. 
 
### ValidatorPrefsSet(`AccountId32`, `PalletStakingAsyncValidatorPrefs`)
- **interface**: `api.events.staking.ValidatorPrefsSet.is`
- **summary**:    A validator has set their preferences. 
 
### Withdrawn(`AccountId32`, `u128`)
- **interface**: `api.events.staking.Withdrawn.is`
- **summary**:    An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`  from the unlocking queue. 

___


## stakingRcClient
 
### OffenceReceived(`u32`, `u32`)
- **interface**: `api.events.stakingRcClient.OffenceReceived.is`
- **summary**:    A new offence was reported. 
 
### SessionReportReceived(`u32`, `Option<(u64,u32)>`, `u32`, `bool`)
- **interface**: `api.events.stakingRcClient.SessionReportReceived.is`
- **summary**:    A said session report was received. 
 
### Unexpected(`PalletStakingAsyncRcClientUnexpectedKind`)
- **interface**: `api.events.stakingRcClient.Unexpected.is`
- **summary**:    Something occurred that should never happen under normal operation.  Logged as an event for fail-safe observability. 

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
 
### TaskCompleted(`AssetHubKusamaRuntimeRuntimeTask`)
- **interface**: `api.events.system.TaskCompleted.is`
- **summary**:    A [`Task`] has finished executing. 
 
### TaskFailed(`AssetHubKusamaRuntimeRuntimeTask`, `SpRuntimeDispatchError`)
- **interface**: `api.events.system.TaskFailed.is`
- **summary**:    A [`Task`] failed during execution. 
 
### TaskStarted(`AssetHubKusamaRuntimeRuntimeTask`)
- **interface**: `api.events.system.TaskStarted.is`
- **summary**:    A [`Task`] has started executing 
 
### UpgradeAuthorized(`H256`, `bool`)
- **interface**: `api.events.system.UpgradeAuthorized.is`
- **summary**:    An upgrade was authorized. 

___


## toPolkadotXcmRouter
 
### DeliveryFeeFactorDecreased(`u128`)
- **interface**: `api.events.toPolkadotXcmRouter.DeliveryFeeFactorDecreased.is`
- **summary**:    Delivery fee factor has been decreased. 
 
### DeliveryFeeFactorIncreased(`u128`)
- **interface**: `api.events.toPolkadotXcmRouter.DeliveryFeeFactorIncreased.is`
- **summary**:    Delivery fee factor has been increased. 

___


## transactionPayment
 
### TransactionFeePaid(`AccountId32`, `u128`, `u128`)
- **interface**: `api.events.transactionPayment.TransactionFeePaid.is`
- **summary**:    A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,  has been paid by `who`. 

___


## treasury
 
### AssetSpendApproved(`u32`, `PolkadotRuntimeCommonImplsVersionedLocatableAsset`, `u128`, `ParachainsCommonPayVersionedLocatableAccount`, `u32`, `u32`)
- **interface**: `api.events.treasury.AssetSpendApproved.is`
- **summary**:    A new asset spend proposal has been approved. 
 
### AssetSpendVoided(`u32`)
- **interface**: `api.events.treasury.AssetSpendVoided.is`
- **summary**:    An approved spend was voided. 
 
### Awarded(`u32`, `u128`, `AccountId32`)
- **interface**: `api.events.treasury.Awarded.is`
- **summary**:    Some funds have been allocated. 
 
### Burnt(`u128`)
- **interface**: `api.events.treasury.Burnt.is`
- **summary**:    Some of our funds have been burnt. 
 
### Deposit(`u128`)
- **interface**: `api.events.treasury.Deposit.is`
- **summary**:    Some funds have been deposited. 
 
### Paid(`u32`, `u64`)
- **interface**: `api.events.treasury.Paid.is`
- **summary**:    A payment happened. 
 
### PaymentFailed(`u32`, `u64`)
- **interface**: `api.events.treasury.PaymentFailed.is`
- **summary**:    A payment failed and can be retried. 
 
### Rollover(`u128`)
- **interface**: `api.events.treasury.Rollover.is`
- **summary**:    Spending has finished; this is the amount that rolls over until next spend. 
 
### SpendApproved(`u32`, `u128`, `AccountId32`)
- **interface**: `api.events.treasury.SpendApproved.is`
- **summary**:    A new spend proposal has been approved. 
 
### Spending(`u128`)
- **interface**: `api.events.treasury.Spending.is`
- **summary**:    We have ended a spend period and will now allocate funds. 
 
### SpendProcessed(`u32`)
- **interface**: `api.events.treasury.SpendProcessed.is`
- **summary**:    A spend was processed and removed from the storage. It might have been successfully  paid or it may have expired. 
 
### UpdatedInactive(`u128`, `u128`)
- **interface**: `api.events.treasury.UpdatedInactive.is`
- **summary**:    The inactive funds of the pallet have been updated. 

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
 
### VestingCreated(`AccountId32`, `u32`)
- **interface**: `api.events.vesting.VestingCreated.is`
- **summary**:    A vesting schedule has been created. 
 
### VestingUpdated(`AccountId32`, `u128`)
- **interface**: `api.events.vesting.VestingUpdated.is`
- **summary**:    The amount vested has been updated. This could indicate a change in funds available.  The balance given is the amount which is left unvested (and thus locked). 

___


## voterList
 
### Rebagged(`AccountId32`, `u64`, `u64`)
- **interface**: `api.events.voterList.Rebagged.is`
- **summary**:    Moved an account from one bag to another. 
 
### ScoreUpdated(`AccountId32`, `u64`)
- **interface**: `api.events.voterList.ScoreUpdated.is`
- **summary**:    Updated the score of some account to the given amount. 

___


## whitelist
 
### CallWhitelisted(`H256`)
- **interface**: `api.events.whitelist.CallWhitelisted.is`
 
### WhitelistedCallDispatched(`H256`, `Result<FrameSupportDispatchPostDispatchInfo, SpRuntimeDispatchErrorWithPostInfo>`)
- **interface**: `api.events.whitelist.WhitelistedCallDispatched.is`
 
### WhitelistedCallRemoved(`H256`)
- **interface**: `api.events.whitelist.WhitelistedCallRemoved.is`

___


## xcmpQueue
 
### XcmpMessageSent(`[u8;32]`)
- **interface**: `api.events.xcmpQueue.XcmpMessageSent.is`
- **summary**:    An HRMP message was sent to a sibling parachain. 
