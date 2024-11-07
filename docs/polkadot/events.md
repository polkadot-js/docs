---
title: Events
---

Events are emitted for certain operations on the runtime. The following sections describe the events that are part of the default Polkadot runtime. 

(NOTE: These were generated from a static/snapshot view of a recent default Polkadot runtime. Some items may not be available in older nodes, or in any customized implementations.)

- **[assetRate](#assetrate)**

- **[auctions](#auctions)**

- **[balances](#balances)**

- **[bounties](#bounties)**

- **[childBounties](#childbounties)**

- **[claims](#claims)**

- **[convictionVoting](#convictionvoting)**

- **[crowdloan](#crowdloan)**

- **[electionProviderMultiPhase](#electionprovidermultiphase)**

- **[fastUnstake](#fastunstake)**

- **[grandpa](#grandpa)**

- **[hrmp](#hrmp)**

- **[identity](#identity)**

- **[indices](#indices)**

- **[messageQueue](#messagequeue)**

- **[multisig](#multisig)**

- **[nominationPools](#nominationpools)**

- **[offences](#offences)**

- **[paraInclusion](#parainclusion)**

- **[paras](#paras)**

- **[parasDisputes](#parasdisputes)**

- **[preimage](#preimage)**

- **[proxy](#proxy)**

- **[referenda](#referenda)**

- **[registrar](#registrar)**

- **[scheduler](#scheduler)**

- **[session](#session)**

- **[slots](#slots)**

- **[staking](#staking)**

- **[stateTrieMigration](#statetriemigration)**

- **[system](#system)**

- **[transactionPayment](#transactionpayment)**

- **[treasury](#treasury)**

- **[utility](#utility)**

- **[vesting](#vesting)**

- **[voterList](#voterlist)**

- **[whitelist](#whitelist)**

- **[xcmPallet](#xcmpallet)**


___


## assetRate
 
### AssetRateCreated(`PolkadotRuntimeCommonImplsVersionedLocatableAsset`, `u128`)
- **interface**: `api.events.assetRate.AssetRateCreated.is`
 
### AssetRateRemoved(`PolkadotRuntimeCommonImplsVersionedLocatableAsset`)
- **interface**: `api.events.assetRate.AssetRateRemoved.is`
 
### AssetRateUpdated(`PolkadotRuntimeCommonImplsVersionedLocatableAsset`, `u128`, `u128`)
- **interface**: `api.events.assetRate.AssetRateUpdated.is`

___


## auctions
 
### AuctionClosed(`u32`)
- **interface**: `api.events.auctions.AuctionClosed.is`
- **summary**:    An auction ended. All funds become unreserved. 
 
### AuctionStarted(`u32`, `u32`, `u32`)
- **interface**: `api.events.auctions.AuctionStarted.is`
- **summary**:    An auction started. Provides its index and the block number where it will begin to  close and the first lease period of the quadruplet that is auctioned. 
 
### BidAccepted(`AccountId32`, `u32`, `u128`, `u32`, `u32`)
- **interface**: `api.events.auctions.BidAccepted.is`
- **summary**:    A new bid has been accepted as the current winner. 
 
### ReserveConfiscated(`u32`, `AccountId32`, `u128`)
- **interface**: `api.events.auctions.ReserveConfiscated.is`
- **summary**:    Someone attempted to lease the same slot twice for a parachain. The amount is held in  reserve but no parachain slot has been leased. 
 
### Reserved(`AccountId32`, `u128`, `u128`)
- **interface**: `api.events.auctions.Reserved.is`
- **summary**:    Funds were reserved for a winning bid. First balance is the extra amount reserved.  Second is the total. 
 
### Unreserved(`AccountId32`, `u128`)
- **interface**: `api.events.auctions.Unreserved.is`
- **summary**:    Funds were unreserved since bidder is no longer active. `[bidder, amount]` 
 
### WinningOffset(`u32`, `u32`)
- **interface**: `api.events.auctions.WinningOffset.is`
- **summary**:    The winning offset was chosen for an auction. This will map into the `Winning` storage  map. 

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


## convictionVoting
 
### Delegated(`AccountId32`, `AccountId32`)
- **interface**: `api.events.convictionVoting.Delegated.is`
- **summary**:    An account has delegated their vote to another account. \[who, target\] 
 
### Undelegated(`AccountId32`)
- **interface**: `api.events.convictionVoting.Undelegated.is`
- **summary**:    An \[account\] has cancelled a previous delegation operation. 

___


## crowdloan
 
### AddedToNewRaise(`u32`)
- **interface**: `api.events.crowdloan.AddedToNewRaise.is`
- **summary**:    A parachain has been moved to `NewRaise` 
 
### AllRefunded(`u32`)
- **interface**: `api.events.crowdloan.AllRefunded.is`
- **summary**:    All loans in a fund have been refunded. 
 
### Contributed(`AccountId32`, `u32`, `u128`)
- **interface**: `api.events.crowdloan.Contributed.is`
- **summary**:    Contributed to a crowd sale. 
 
### Created(`u32`)
- **interface**: `api.events.crowdloan.Created.is`
- **summary**:    Create a new crowdloaning campaign. 
 
### Dissolved(`u32`)
- **interface**: `api.events.crowdloan.Dissolved.is`
- **summary**:    Fund is dissolved. 
 
### Edited(`u32`)
- **interface**: `api.events.crowdloan.Edited.is`
- **summary**:    The configuration to a crowdloan has been edited. 
 
### HandleBidResult(`u32`, `Result<Null, SpRuntimeDispatchError>`)
- **interface**: `api.events.crowdloan.HandleBidResult.is`
- **summary**:    The result of trying to submit a new bid to the Slots pallet. 
 
### MemoUpdated(`AccountId32`, `u32`, `Bytes`)
- **interface**: `api.events.crowdloan.MemoUpdated.is`
- **summary**:    A memo has been updated. 
 
### PartiallyRefunded(`u32`)
- **interface**: `api.events.crowdloan.PartiallyRefunded.is`
- **summary**:    The loans in a fund have been partially dissolved, i.e. there are some left  over child keys that still need to be killed. 
 
### Withdrew(`AccountId32`, `u32`, `u128`)
- **interface**: `api.events.crowdloan.Withdrew.is`
- **summary**:    Withdrew full balance of a contributor. 

___


## electionProviderMultiPhase
 
### ElectionFailed()
- **interface**: `api.events.electionProviderMultiPhase.ElectionFailed.is`
- **summary**:    An election failed. 

   Not much can be said about which computes failed in the process. 
 
### ElectionFinalized(`PalletElectionProviderMultiPhaseElectionCompute`, `SpNposElectionsElectionScore`)
- **interface**: `api.events.electionProviderMultiPhase.ElectionFinalized.is`
- **summary**:    The election has been finalized, with the given computation and score. 
 
### PhaseTransitioned(`PalletElectionProviderMultiPhasePhase`, `PalletElectionProviderMultiPhasePhase`, `u32`)
- **interface**: `api.events.electionProviderMultiPhase.PhaseTransitioned.is`
- **summary**:    There was a phase transition in a given round. 
 
### Rewarded(`AccountId32`, `u128`)
- **interface**: `api.events.electionProviderMultiPhase.Rewarded.is`
- **summary**:    An account has been rewarded for their signed submission being finalized. 
 
### Slashed(`AccountId32`, `u128`)
- **interface**: `api.events.electionProviderMultiPhase.Slashed.is`
- **summary**:    An account has been slashed for submitting an invalid signed submission. 
 
### SolutionStored(`PalletElectionProviderMultiPhaseElectionCompute`, `Option<AccountId32>`, `bool`)
- **interface**: `api.events.electionProviderMultiPhase.SolutionStored.is`
- **summary**:    A solution was stored with the given compute. 

   The `origin` indicates the origin of the solution. If `origin` is `Some(AccountId)`,  the stored solution was submited in the signed phase by a miner with the `AccountId`.  Otherwise, the solution was stored either during the unsigned phase or by  `T::ForceOrigin`. The `bool` is `true` when a previous solution was ejected to make  room for this one. 

___


## fastUnstake
 
### BatchChecked(`Vec<u32>`)
- **interface**: `api.events.fastUnstake.BatchChecked.is`
- **summary**:    A batch was partially checked for the given eras, but the process did not finish. 
 
### BatchFinished(`u32`)
- **interface**: `api.events.fastUnstake.BatchFinished.is`
- **summary**:    A batch of a given size was terminated. 

   This is always follows by a number of `Unstaked` or `Slashed` events, marking the end  of the batch. A new batch will be created upon next block. 
 
### InternalError()
- **interface**: `api.events.fastUnstake.InternalError.is`
- **summary**:    An internal error happened. Operations will be paused now. 
 
### Slashed(`AccountId32`, `u128`)
- **interface**: `api.events.fastUnstake.Slashed.is`
- **summary**:    A staker was slashed for requesting fast-unstake whilst being exposed. 
 
### Unstaked(`AccountId32`, `Result<Null, SpRuntimeDispatchError>`)
- **interface**: `api.events.fastUnstake.Unstaked.is`
- **summary**:    A staker was unstaked. 

___


## grandpa
 
### NewAuthorities(`Vec<(SpConsensusGrandpaAppPublic,u64)>`)
- **interface**: `api.events.grandpa.NewAuthorities.is`
- **summary**:    New authority set has been applied. 
 
### Paused()
- **interface**: `api.events.grandpa.Paused.is`
- **summary**:    Current authority set has been paused. 
 
### Resumed()
- **interface**: `api.events.grandpa.Resumed.is`
- **summary**:    Current authority set has been resumed. 

___


## hrmp
 
### ChannelClosed(`u32`, `PolkadotParachainPrimitivesPrimitivesHrmpChannelId`)
- **interface**: `api.events.hrmp.ChannelClosed.is`
- **summary**:    HRMP channel closed. 
 
### HrmpChannelForceOpened(`u32`, `u32`, `u32`, `u32`)
- **interface**: `api.events.hrmp.HrmpChannelForceOpened.is`
- **summary**:    An HRMP channel was opened via Root origin. 
 
### HrmpSystemChannelOpened(`u32`, `u32`, `u32`, `u32`)
- **interface**: `api.events.hrmp.HrmpSystemChannelOpened.is`
- **summary**:    An HRMP channel was opened with a system chain. 
 
### OpenChannelAccepted(`u32`, `u32`)
- **interface**: `api.events.hrmp.OpenChannelAccepted.is`
- **summary**:    Open HRMP channel accepted. 
 
### OpenChannelCanceled(`u32`, `PolkadotParachainPrimitivesPrimitivesHrmpChannelId`)
- **interface**: `api.events.hrmp.OpenChannelCanceled.is`
- **summary**:    An HRMP channel request sent by the receiver was canceled by either party. 
 
### OpenChannelDepositsUpdated(`u32`, `u32`)
- **interface**: `api.events.hrmp.OpenChannelDepositsUpdated.is`
- **summary**:    An HRMP channel's deposits were updated. 
 
### OpenChannelRequested(`u32`, `u32`, `u32`, `u32`)
- **interface**: `api.events.hrmp.OpenChannelRequested.is`
- **summary**:    Open HRMP channel requested. 

___


## identity
 
### AuthorityAdded(`AccountId32`)
- **interface**: `api.events.identity.AuthorityAdded.is`
- **summary**:    A username authority was added. 
 
### AuthorityRemoved(`AccountId32`)
- **interface**: `api.events.identity.AuthorityRemoved.is`
- **summary**:    A username authority was removed. 
 
### DanglingUsernameRemoved(`AccountId32`, `Bytes`)
- **interface**: `api.events.identity.DanglingUsernameRemoved.is`
- **summary**:    A dangling username (as in, a username corresponding to an account that has removed its  identity) has been removed. 
 
### IdentityCleared(`AccountId32`, `u128`)
- **interface**: `api.events.identity.IdentityCleared.is`
- **summary**:    A name was cleared, and the given balance returned. 
 
### IdentityKilled(`AccountId32`, `u128`)
- **interface**: `api.events.identity.IdentityKilled.is`
- **summary**:    A name was removed and the given balance slashed. 
 
### IdentitySet(`AccountId32`)
- **interface**: `api.events.identity.IdentitySet.is`
- **summary**:    A name was set or reset (which will remove all judgements). 
 
### JudgementGiven(`AccountId32`, `u32`)
- **interface**: `api.events.identity.JudgementGiven.is`
- **summary**:    A judgement was given by a registrar. 
 
### JudgementRequested(`AccountId32`, `u32`)
- **interface**: `api.events.identity.JudgementRequested.is`
- **summary**:    A judgement was asked from a registrar. 
 
### JudgementUnrequested(`AccountId32`, `u32`)
- **interface**: `api.events.identity.JudgementUnrequested.is`
- **summary**:    A judgement request was retracted. 
 
### PreapprovalExpired(`AccountId32`)
- **interface**: `api.events.identity.PreapprovalExpired.is`
- **summary**:    A queued username passed its expiration without being claimed and was removed. 
 
### PrimaryUsernameSet(`AccountId32`, `Bytes`)
- **interface**: `api.events.identity.PrimaryUsernameSet.is`
- **summary**:    A username was set as a primary and can be looked up from `who`. 
 
### RegistrarAdded(`u32`)
- **interface**: `api.events.identity.RegistrarAdded.is`
- **summary**:    A registrar was added. 
 
### SubIdentityAdded(`AccountId32`, `AccountId32`, `u128`)
- **interface**: `api.events.identity.SubIdentityAdded.is`
- **summary**:    A sub-identity was added to an identity and the deposit paid. 
 
### SubIdentityRemoved(`AccountId32`, `AccountId32`, `u128`)
- **interface**: `api.events.identity.SubIdentityRemoved.is`
- **summary**:    A sub-identity was removed from an identity and the deposit freed. 
 
### SubIdentityRevoked(`AccountId32`, `AccountId32`, `u128`)
- **interface**: `api.events.identity.SubIdentityRevoked.is`
- **summary**:    A sub-identity was cleared, and the given deposit repatriated from the  main identity account to the sub-identity account. 
 
### UsernameQueued(`AccountId32`, `Bytes`, `u32`)
- **interface**: `api.events.identity.UsernameQueued.is`
- **summary**:    A username was queued, but `who` must accept it prior to `expiration`. 
 
### UsernameSet(`AccountId32`, `Bytes`)
- **interface**: `api.events.identity.UsernameSet.is`
- **summary**:    A username was set for `who`. 

___


## indices
 
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
 
### OverweightEnqueued(`[u8;32]`, `PolkadotRuntimeParachainsInclusionAggregateMessageOrigin`, `u32`, `u32`)
- **interface**: `api.events.messageQueue.OverweightEnqueued.is`
- **summary**:    Message placed in overweight queue. 
 
### PageReaped(`PolkadotRuntimeParachainsInclusionAggregateMessageOrigin`, `u32`)
- **interface**: `api.events.messageQueue.PageReaped.is`
- **summary**:    This page was reaped. 
 
### Processed(`H256`, `PolkadotRuntimeParachainsInclusionAggregateMessageOrigin`, `SpWeightsWeightV2Weight`, `bool`)
- **interface**: `api.events.messageQueue.Processed.is`
- **summary**:    Message is processed. 
 
### ProcessingFailed(`H256`, `PolkadotRuntimeParachainsInclusionAggregateMessageOrigin`, `FrameSupportMessagesProcessMessageError`)
- **interface**: `api.events.messageQueue.ProcessingFailed.is`
- **summary**:    Message discarded due to an error in the `MessageProcessor` (usually a format error). 

___


## multisig
 
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
 
### MemberRemoved(`u32`, `AccountId32`)
- **interface**: `api.events.nominationPools.MemberRemoved.is`
- **summary**:    A member has been removed from a pool. 

   The removal can be voluntary (withdrawn all unbonded funds) or involuntary (kicked). 
 
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


## offences
 
### Offence(`[u8;16]`, `Bytes`)
- **interface**: `api.events.offences.Offence.is`
- **summary**:    There is an offence reported of the given `kind` happened at the `session_index` and  (kind-specific) time slot. This event is not deposited for duplicate slashes.  \[kind, timeslot\]. 

___


## paraInclusion
 
### CandidateBacked(`PolkadotPrimitivesV6CandidateReceipt`, `Bytes`, `u32`, `u32`)
- **interface**: `api.events.paraInclusion.CandidateBacked.is`
- **summary**:    A candidate was backed. `[candidate, head_data]` 
 
### CandidateIncluded(`PolkadotPrimitivesV6CandidateReceipt`, `Bytes`, `u32`, `u32`)
- **interface**: `api.events.paraInclusion.CandidateIncluded.is`
- **summary**:    A candidate was included. `[candidate, head_data]` 
 
### CandidateTimedOut(`PolkadotPrimitivesV6CandidateReceipt`, `Bytes`, `u32`)
- **interface**: `api.events.paraInclusion.CandidateTimedOut.is`
- **summary**:    A candidate timed out. `[candidate, head_data]` 
 
### UpwardMessagesReceived(`u32`, `u32`)
- **interface**: `api.events.paraInclusion.UpwardMessagesReceived.is`
- **summary**:    Some upward messages have been received and will be processed. 

___


## paras
 
### ActionQueued(`u32`, `u32`)
- **interface**: `api.events.paras.ActionQueued.is`
- **summary**:    A para has been queued to execute pending actions. `para_id` 
 
### CodeUpgradeScheduled(`u32`)
- **interface**: `api.events.paras.CodeUpgradeScheduled.is`
- **summary**:    A code upgrade has been scheduled for a Para. `para_id` 
 
### CurrentCodeUpdated(`u32`)
- **interface**: `api.events.paras.CurrentCodeUpdated.is`
- **summary**:    Current code has been updated for a Para. `para_id` 
 
### CurrentHeadUpdated(`u32`)
- **interface**: `api.events.paras.CurrentHeadUpdated.is`
- **summary**:    Current head has been updated for a Para. `para_id` 
 
### NewHeadNoted(`u32`)
- **interface**: `api.events.paras.NewHeadNoted.is`
- **summary**:    A new head has been noted for a Para. `para_id` 
 
### PvfCheckAccepted(`H256`, `u32`)
- **interface**: `api.events.paras.PvfCheckAccepted.is`
- **summary**:    The given validation code was accepted by the PVF pre-checking vote.  `code_hash` `para_id` 
 
### PvfCheckRejected(`H256`, `u32`)
- **interface**: `api.events.paras.PvfCheckRejected.is`
- **summary**:    The given validation code was rejected by the PVF pre-checking vote.  `code_hash` `para_id` 
 
### PvfCheckStarted(`H256`, `u32`)
- **interface**: `api.events.paras.PvfCheckStarted.is`
- **summary**:    The given para either initiated or subscribed to a PVF check for the given validation  code. `code_hash` `para_id` 

___


## parasDisputes
 
### DisputeConcluded(`H256`, `PolkadotRuntimeParachainsDisputesDisputeResult`)
- **interface**: `api.events.parasDisputes.DisputeConcluded.is`
- **summary**:    A dispute has concluded for or against a candidate.  `\[para id, candidate hash, dispute result\]` 
 
### DisputeInitiated(`H256`, `PolkadotRuntimeParachainsDisputesDisputeLocation`)
- **interface**: `api.events.parasDisputes.DisputeInitiated.is`
- **summary**:    A dispute has been initiated. \[candidate hash, dispute location\] 
 
### Revert(`u32`)
- **interface**: `api.events.parasDisputes.Revert.is`
- **summary**:    A dispute has concluded with supermajority against a candidate.  Block authors should no longer build on top of this head and should  instead revert the block at the given height. This should be the  number of the child of the last known valid block in the chain. 

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
 
### ProxyAdded(`AccountId32`, `AccountId32`, `PolkadotRuntimeProxyType`, `u32`)
- **interface**: `api.events.proxy.ProxyAdded.is`
- **summary**:    A proxy was added. 
 
### ProxyExecuted(`Result<Null, SpRuntimeDispatchError>`)
- **interface**: `api.events.proxy.ProxyExecuted.is`
- **summary**:    A proxy was executed correctly, with the given. 
 
### ProxyRemoved(`AccountId32`, `AccountId32`, `PolkadotRuntimeProxyType`, `u32`)
- **interface**: `api.events.proxy.ProxyRemoved.is`
- **summary**:    A proxy was removed. 
 
### PureCreated(`AccountId32`, `AccountId32`, `PolkadotRuntimeProxyType`, `u16`)
- **interface**: `api.events.proxy.PureCreated.is`
- **summary**:    A pure account has been created by new proxy with given  disambiguation index and proxy type. 

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


## registrar
 
### Deregistered(`u32`)
- **interface**: `api.events.registrar.Deregistered.is`
 
### Registered(`u32`, `AccountId32`)
- **interface**: `api.events.registrar.Registered.is`
 
### Reserved(`u32`, `AccountId32`)
- **interface**: `api.events.registrar.Reserved.is`
 
### Swapped(`u32`, `u32`)
- **interface**: `api.events.registrar.Swapped.is`

___


## scheduler
 
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
 
### Scheduled(`u32`, `u32`)
- **interface**: `api.events.scheduler.Scheduled.is`
- **summary**:    Scheduled some task. 

___


## session
 
### NewSession(`u32`)
- **interface**: `api.events.session.NewSession.is`
- **summary**:    New session has happened. Note that the argument is the session index, not the  block number as the type might suggest. 

___


## slots
 
### Leased(`u32`, `AccountId32`, `u32`, `u32`, `u128`, `u128`)
- **interface**: `api.events.slots.Leased.is`
- **summary**:    A para has won the right to a continuous set of lease periods as a parachain.  First balance is any extra amount reserved on top of the para's existing deposit.  Second balance is the total amount reserved. 
 
### NewLeasePeriod(`u32`)
- **interface**: `api.events.slots.NewLeasePeriod.is`
- **summary**:    A new `[lease_period]` is beginning. 

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
 
### EraPaid(`u32`, `u128`, `u128`)
- **interface**: `api.events.staking.EraPaid.is`
- **summary**:    The era payout has been set; the first balance is the validator-payout; the second is  the remainder from the maximum amount of reward. 
 
### ForceEra(`PalletStakingForcing`)
- **interface**: `api.events.staking.ForceEra.is`
- **summary**:    A new force era mode was set. 
 
### Kicked(`AccountId32`, `AccountId32`)
- **interface**: `api.events.staking.Kicked.is`
- **summary**:    A nominator has been kicked from a validator. 
 
### OldSlashingReportDiscarded(`u32`)
- **interface**: `api.events.staking.OldSlashingReportDiscarded.is`
- **summary**:    An old slashing report from a prior era was discarded because it could  not be processed. 
 
### PayoutStarted(`u32`, `AccountId32`)
- **interface**: `api.events.staking.PayoutStarted.is`
- **summary**:    The stakers' rewards are getting paid. 
 
### Rewarded(`AccountId32`, `PalletStakingRewardDestination`, `u128`)
- **interface**: `api.events.staking.Rewarded.is`
- **summary**:    The nominator has been rewarded by this amount to this destination. 
 
### Slashed(`AccountId32`, `u128`)
- **interface**: `api.events.staking.Slashed.is`
- **summary**:    A staker (validator or nominator) has been slashed by the given amount. 
 
### SlashReported(`AccountId32`, `Perbill`, `u32`)
- **interface**: `api.events.staking.SlashReported.is`
- **summary**:    A slash for the given validator, for the given percentage of their stake, at the given  era as been reported. 
 
### SnapshotTargetsSizeExceeded(`u32`)
- **interface**: `api.events.staking.SnapshotTargetsSizeExceeded.is`
- **summary**:    Targets size limit reached. 
 
### SnapshotVotersSizeExceeded(`u32`)
- **interface**: `api.events.staking.SnapshotVotersSizeExceeded.is`
- **summary**:    Voters size limit reached. 
 
### StakersElected()
- **interface**: `api.events.staking.StakersElected.is`
- **summary**:    A new set of stakers was elected. 
 
### StakingElectionFailed()
- **interface**: `api.events.staking.StakingElectionFailed.is`
- **summary**:    The election failed. No new era is planned. 
 
### Unbonded(`AccountId32`, `u128`)
- **interface**: `api.events.staking.Unbonded.is`
- **summary**:    An account has unbonded this amount. 
 
### ValidatorPrefsSet(`AccountId32`, `PalletStakingValidatorPrefs`)
- **interface**: `api.events.staking.ValidatorPrefsSet.is`
- **summary**:    A validator has set their preferences. 
 
### Withdrawn(`AccountId32`, `u128`)
- **interface**: `api.events.staking.Withdrawn.is`
- **summary**:    An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`  from the unlocking queue. 

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
 
### ExtrinsicFailed(`SpRuntimeDispatchError`, `FrameSupportDispatchDispatchInfo`)
- **interface**: `api.events.system.ExtrinsicFailed.is`
- **summary**:    An extrinsic failed. 
 
### ExtrinsicSuccess(`FrameSupportDispatchDispatchInfo`)
- **interface**: `api.events.system.ExtrinsicSuccess.is`
- **summary**:    An extrinsic completed successfully. 
 
### KilledAccount(`AccountId32`)
- **interface**: `api.events.system.KilledAccount.is`
- **summary**:    An account was reaped. 
 
### NewAccount(`AccountId32`)
- **interface**: `api.events.system.NewAccount.is`
- **summary**:    A new account was created. 
 
### Remarked(`AccountId32`, `H256`)
- **interface**: `api.events.system.Remarked.is`
- **summary**:    On on-chain remark happened. 
 
### UpgradeAuthorized(`H256`, `bool`)
- **interface**: `api.events.system.UpgradeAuthorized.is`
- **summary**:    An upgrade was authorized. 

___


## transactionPayment
 
### TransactionFeePaid(`AccountId32`, `u128`, `u128`)
- **interface**: `api.events.transactionPayment.TransactionFeePaid.is`
- **summary**:    A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,  has been paid by `who`. 

___


## treasury
 
### AssetSpendApproved(`u32`, `PolkadotRuntimeCommonImplsVersionedLocatableAsset`, `u128`, `XcmVersionedLocation`, `u32`, `u32`)
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
 
### Proposed(`u32`)
- **interface**: `api.events.treasury.Proposed.is`
- **summary**:    New proposal. 
 
### Rejected(`u32`, `u128`)
- **interface**: `api.events.treasury.Rejected.is`
- **summary**:    A proposal was rejected; funds were slashed. 
 
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


## xcmPallet
 
### AssetsClaimed(`H256`, `StagingXcmV4Location`, `XcmVersionedAssets`)
- **interface**: `api.events.xcmPallet.AssetsClaimed.is`
- **summary**:    Some assets have been claimed from an asset trap 
 
### AssetsTrapped(`H256`, `StagingXcmV4Location`, `XcmVersionedAssets`)
- **interface**: `api.events.xcmPallet.AssetsTrapped.is`
- **summary**:    Some assets have been placed in an asset trap. 
 
### Attempted(`StagingXcmV4TraitsOutcome`)
- **interface**: `api.events.xcmPallet.Attempted.is`
- **summary**:    Execution of an XCM message was attempted. 
 
### FeesPaid(`StagingXcmV4Location`, `StagingXcmV4AssetAssets`)
- **interface**: `api.events.xcmPallet.FeesPaid.is`
- **summary**:    Fees were paid from a location for an operation (often for using `SendXcm`). 
 
### InvalidQuerier(`StagingXcmV4Location`, `u64`, `StagingXcmV4Location`, `Option<StagingXcmV4Location>`)
- **interface**: `api.events.xcmPallet.InvalidQuerier.is`
- **summary**:    Expected query response has been received but the querier location of the response does  not match the expected. The query remains registered for a later, valid, response to  be received and acted upon. 
 
### InvalidQuerierVersion(`StagingXcmV4Location`, `u64`)
- **interface**: `api.events.xcmPallet.InvalidQuerierVersion.is`
- **summary**:    Expected query response has been received but the expected querier location placed in  storage by this runtime previously cannot be decoded. The query remains registered. 

   This is unexpected (since a location placed in storage in a previously executing  runtime should be readable prior to query timeout) and dangerous since the possibly  valid response will be dropped. Manual governance intervention is probably going to be  needed. 
 
### InvalidResponder(`StagingXcmV4Location`, `u64`, `Option<StagingXcmV4Location>`)
- **interface**: `api.events.xcmPallet.InvalidResponder.is`
- **summary**:    Expected query response has been received but the origin location of the response does  not match that expected. The query remains registered for a later, valid, response to  be received and acted upon. 
 
### InvalidResponderVersion(`StagingXcmV4Location`, `u64`)
- **interface**: `api.events.xcmPallet.InvalidResponderVersion.is`
- **summary**:    Expected query response has been received but the expected origin location placed in  storage by this runtime previously cannot be decoded. The query remains registered. 

   This is unexpected (since a location placed in storage in a previously executing  runtime should be readable prior to query timeout) and dangerous since the possibly  valid response will be dropped. Manual governance intervention is probably going to be  needed. 
 
### Notified(`u64`, `u8`, `u8`)
- **interface**: `api.events.xcmPallet.Notified.is`
- **summary**:    Query response has been received and query is removed. The registered notification has  been dispatched and executed successfully. 
 
### NotifyDecodeFailed(`u64`, `u8`, `u8`)
- **interface**: `api.events.xcmPallet.NotifyDecodeFailed.is`
- **summary**:    Query response has been received and query is removed. The dispatch was unable to be  decoded into a `Call`; this might be due to dispatch function having a signature which  is not `(origin, QueryId, Response)`. 
 
### NotifyDispatchError(`u64`, `u8`, `u8`)
- **interface**: `api.events.xcmPallet.NotifyDispatchError.is`
- **summary**:    Query response has been received and query is removed. There was a general error with  dispatching the notification call. 
 
### NotifyOverweight(`u64`, `u8`, `u8`, `SpWeightsWeightV2Weight`, `SpWeightsWeightV2Weight`)
- **interface**: `api.events.xcmPallet.NotifyOverweight.is`
- **summary**:    Query response has been received and query is removed. The registered notification  could not be dispatched because the dispatch weight is greater than the maximum weight  originally budgeted by this runtime for the query result. 
 
### NotifyTargetMigrationFail(`XcmVersionedLocation`, `u64`)
- **interface**: `api.events.xcmPallet.NotifyTargetMigrationFail.is`
- **summary**:    A given location which had a version change subscription was dropped owing to an error  migrating the location to our new XCM format. 
 
### NotifyTargetSendFail(`StagingXcmV4Location`, `u64`, `XcmV3TraitsError`)
- **interface**: `api.events.xcmPallet.NotifyTargetSendFail.is`
- **summary**:    A given location which had a version change subscription was dropped owing to an error  sending the notification to it. 
 
### ResponseReady(`u64`, `StagingXcmV4Response`)
- **interface**: `api.events.xcmPallet.ResponseReady.is`
- **summary**:    Query response has been received and is ready for taking with `take_response`. There is  no registered notification call. 
 
### ResponseTaken(`u64`)
- **interface**: `api.events.xcmPallet.ResponseTaken.is`
- **summary**:    Received query response has been read and removed. 
 
### Sent(`StagingXcmV4Location`, `StagingXcmV4Location`, `StagingXcmV4Xcm`, `[u8;32]`)
- **interface**: `api.events.xcmPallet.Sent.is`
- **summary**:    A XCM message was sent. 
 
### SupportedVersionChanged(`StagingXcmV4Location`, `u32`)
- **interface**: `api.events.xcmPallet.SupportedVersionChanged.is`
- **summary**:    The supported version of a location has been changed. This might be through an  automatic notification or a manual intervention. 
 
### UnexpectedResponse(`StagingXcmV4Location`, `u64`)
- **interface**: `api.events.xcmPallet.UnexpectedResponse.is`
- **summary**:    Query response received which does not match a registered query. This may be because a  matching query was never registered, it may be because it is a duplicate response, or  because the query timed out. 
 
### VersionChangeNotified(`StagingXcmV4Location`, `u32`, `StagingXcmV4AssetAssets`, `[u8;32]`)
- **interface**: `api.events.xcmPallet.VersionChangeNotified.is`
- **summary**:    An XCM version change notification message has been attempted to be sent. 

   The cost of sending it (borne by the chain) is included. 
 
### VersionMigrationFinished(`u32`)
- **interface**: `api.events.xcmPallet.VersionMigrationFinished.is`
- **summary**:    A XCM version migration finished. 
 
### VersionNotifyRequested(`StagingXcmV4Location`, `StagingXcmV4AssetAssets`, `[u8;32]`)
- **interface**: `api.events.xcmPallet.VersionNotifyRequested.is`
- **summary**:    We have requested that a remote chain send us XCM version change notifications. 
 
### VersionNotifyStarted(`StagingXcmV4Location`, `StagingXcmV4AssetAssets`, `[u8;32]`)
- **interface**: `api.events.xcmPallet.VersionNotifyStarted.is`
- **summary**:    A remote has requested XCM version change notification from us and we have honored it.  A version information message is sent to them and its cost is included. 
 
### VersionNotifyUnrequested(`StagingXcmV4Location`, `StagingXcmV4AssetAssets`, `[u8;32]`)
- **interface**: `api.events.xcmPallet.VersionNotifyUnrequested.is`
- **summary**:    We have requested that a remote chain stops sending us XCM version change  notifications. 
