---
title: Events
---

Events are emitted for certain operations on the runtime. The following sections describe the events that are part of the default Polkadot runtime. 

(NOTE: These were generated from a static/snapshot view of a recent default Polkadot runtime. Some items may not be available in older nodes, or in any customized implementations.)

- **[auctions](#auctions)**

- **[balances](#balances)**

- **[bounties](#bounties)**

- **[childBounties](#childbounties)**

- **[claims](#claims)**

- **[convictionVoting](#convictionvoting)**

- **[council](#council)**

- **[crowdloan](#crowdloan)**

- **[democracy](#democracy)**

- **[electionProviderMultiPhase](#electionprovidermultiphase)**

- **[fastUnstake](#fastunstake)**

- **[grandpa](#grandpa)**

- **[hrmp](#hrmp)**

- **[identity](#identity)**

- **[imOnline](#imonline)**

- **[indices](#indices)**

- **[multisig](#multisig)**

- **[nominationPools](#nominationpools)**

- **[offences](#offences)**

- **[paraInclusion](#parainclusion)**

- **[paras](#paras)**

- **[parasDisputes](#parasdisputes)**

- **[phragmenElection](#phragmenelection)**

- **[preimage](#preimage)**

- **[proxy](#proxy)**

- **[referenda](#referenda)**

- **[registrar](#registrar)**

- **[scheduler](#scheduler)**

- **[session](#session)**

- **[slots](#slots)**

- **[staking](#staking)**

- **[system](#system)**

- **[technicalCommittee](#technicalcommittee)**

- **[technicalMembership](#technicalmembership)**

- **[tips](#tips)**

- **[transactionPayment](#transactionpayment)**

- **[treasury](#treasury)**

- **[ump](#ump)**

- **[utility](#utility)**

- **[vesting](#vesting)**

- **[voterList](#voterlist)**

- **[whitelist](#whitelist)**

- **[xcmPallet](#xcmpallet)**


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
- **summary**:    Someone attempted to lease the same slot twice for a parachain. The amount is held in reserve  but no parachain slot has been leased. 
 
### Reserved(`AccountId32`, `u128`, `u128`)
- **interface**: `api.events.auctions.Reserved.is`
- **summary**:    Funds were reserved for a winning bid. First balance is the extra amount reserved.  Second is the total. 
 
### Unreserved(`AccountId32`, `u128`)
- **interface**: `api.events.auctions.Unreserved.is`
- **summary**:    Funds were unreserved since bidder is no longer active. `[bidder, amount]` 
 
### WinningOffset(`u32`, `u32`)
- **interface**: `api.events.auctions.WinningOffset.is`
- **summary**:    The winning offset was chosen for an auction. This will map into the `Winning` storage map. 

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


## council
 
### Approved(`H256`)
- **interface**: `api.events.council.Approved.is`
- **summary**:    A motion was approved by the required threshold. 
 
### Closed(`H256`, `u32`, `u32`)
- **interface**: `api.events.council.Closed.is`
- **summary**:    A proposal was closed because its threshold was reached or after its duration was up. 
 
### Disapproved(`H256`)
- **interface**: `api.events.council.Disapproved.is`
- **summary**:    A motion was not approved by the required threshold. 
 
### Executed(`H256`, `Result<Null, SpRuntimeDispatchError>`)
- **interface**: `api.events.council.Executed.is`
- **summary**:    A motion was executed; result will be `Ok` if it returned without error. 
 
### MemberExecuted(`H256`, `Result<Null, SpRuntimeDispatchError>`)
- **interface**: `api.events.council.MemberExecuted.is`
- **summary**:    A single member did some action; result will be `Ok` if it returned without error. 
 
### Proposed(`AccountId32`, `u32`, `H256`, `u32`)
- **interface**: `api.events.council.Proposed.is`
- **summary**:    A motion (given hash) has been proposed (by given account) with a threshold (given  `MemberCount`). 
 
### Voted(`AccountId32`, `H256`, `bool`, `u32`, `u32`)
- **interface**: `api.events.council.Voted.is`
- **summary**:    A motion (given hash) has been voted on by given account, leaving  a tally (yes votes and no votes given respectively as `MemberCount`). 

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


## democracy
 
### Blacklisted(`H256`)
- **interface**: `api.events.democracy.Blacklisted.is`
- **summary**:    A proposal_hash has been blacklisted permanently. 
 
### Cancelled(`u32`)
- **interface**: `api.events.democracy.Cancelled.is`
- **summary**:    A referendum has been cancelled. 
 
### Delegated(`AccountId32`, `AccountId32`)
- **interface**: `api.events.democracy.Delegated.is`
- **summary**:    An account has delegated their vote to another account. 
 
### ExternalTabled()
- **interface**: `api.events.democracy.ExternalTabled.is`
- **summary**:    An external proposal has been tabled. 
 
### MetadataCleared(`PalletDemocracyMetadataOwner`, `H256`)
- **interface**: `api.events.democracy.MetadataCleared.is`
- **summary**:    Metadata for a proposal or a referendum has been cleared. 
 
### MetadataSet(`PalletDemocracyMetadataOwner`, `H256`)
- **interface**: `api.events.democracy.MetadataSet.is`
- **summary**:    Metadata for a proposal or a referendum has been set. 
 
### MetadataTransferred(`PalletDemocracyMetadataOwner`, `PalletDemocracyMetadataOwner`, `H256`)
- **interface**: `api.events.democracy.MetadataTransferred.is`
- **summary**:    Metadata has been transferred to new owner. 
 
### NotPassed(`u32`)
- **interface**: `api.events.democracy.NotPassed.is`
- **summary**:    A proposal has been rejected by referendum. 
 
### Passed(`u32`)
- **interface**: `api.events.democracy.Passed.is`
- **summary**:    A proposal has been approved by referendum. 
 
### ProposalCanceled(`u32`)
- **interface**: `api.events.democracy.ProposalCanceled.is`
- **summary**:    A proposal got canceled. 
 
### Proposed(`u32`, `u128`)
- **interface**: `api.events.democracy.Proposed.is`
- **summary**:    A motion has been proposed by a public account. 
 
### Seconded(`AccountId32`, `u32`)
- **interface**: `api.events.democracy.Seconded.is`
- **summary**:    An account has secconded a proposal 
 
### Started(`u32`, `PalletDemocracyVoteThreshold`)
- **interface**: `api.events.democracy.Started.is`
- **summary**:    A referendum has begun. 
 
### Tabled(`u32`, `u128`)
- **interface**: `api.events.democracy.Tabled.is`
- **summary**:    A public proposal has been tabled for referendum vote. 
 
### Undelegated(`AccountId32`)
- **interface**: `api.events.democracy.Undelegated.is`
- **summary**:    An account has cancelled a previous delegation operation. 
 
### Vetoed(`AccountId32`, `H256`, `u32`)
- **interface**: `api.events.democracy.Vetoed.is`
- **summary**:    An external proposal has been vetoed. 
 
### Voted(`AccountId32`, `u32`, `PalletDemocracyVoteAccountVote`)
- **interface**: `api.events.democracy.Voted.is`
- **summary**:    An account has voted in a referendum 

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
 
### ChannelClosed(`u32`, `PolkadotParachainPrimitivesHrmpChannelId`)
- **interface**: `api.events.hrmp.ChannelClosed.is`
- **summary**:    HRMP channel closed. `[by_parachain, channel_id]` 
 
### HrmpChannelForceOpened(`u32`, `u32`, `u32`, `u32`)
- **interface**: `api.events.hrmp.HrmpChannelForceOpened.is`
- **summary**:    An HRMP channel was opened via Root origin.  `[sender, recipient, proposed_max_capacity, proposed_max_message_size]` 
 
### OpenChannelAccepted(`u32`, `u32`)
- **interface**: `api.events.hrmp.OpenChannelAccepted.is`
- **summary**:    Open HRMP channel accepted. `[sender, recipient]` 
 
### OpenChannelCanceled(`u32`, `PolkadotParachainPrimitivesHrmpChannelId`)
- **interface**: `api.events.hrmp.OpenChannelCanceled.is`
- **summary**:    An HRMP channel request sent by the receiver was canceled by either party.  `[by_parachain, channel_id]` 
 
### OpenChannelRequested(`u32`, `u32`, `u32`, `u32`)
- **interface**: `api.events.hrmp.OpenChannelRequested.is`
- **summary**:    Open HRMP channel requested.  `[sender, recipient, proposed_max_capacity, proposed_max_message_size]` 

___


## identity
 
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

___


## imOnline
 
### AllGood()
- **interface**: `api.events.imOnline.AllGood.is`
- **summary**:    At the end of the session, no offence was committed. 
 
### HeartbeatReceived(`PalletImOnlineSr25519AppSr25519Public`)
- **interface**: `api.events.imOnline.HeartbeatReceived.is`
- **summary**:    A new heartbeat was received from `AuthorityId`. 
 
### SomeOffline(`Vec<(AccountId32,PalletStakingExposure)>`)
- **interface**: `api.events.imOnline.SomeOffline.is`
- **summary**:    At the end of the session, at least one validator was found to be offline. 

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
 
### PaidOut(`AccountId32`, `u32`, `u128`)
- **interface**: `api.events.nominationPools.PaidOut.is`
- **summary**:    A payout has been made to a member. 
 
### PoolCommissionChangeRateUpdated(`u32`, `PalletNominationPoolsCommissionChangeRate`)
- **interface**: `api.events.nominationPools.PoolCommissionChangeRateUpdated.is`
- **summary**:    A pool's commission `change_rate` has been changed. 
 
### PoolCommissionClaimed(`u32`, `u128`)
- **interface**: `api.events.nominationPools.PoolCommissionClaimed.is`
- **summary**:    Pool commission has been claimed. 
 
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
 
### CandidateBacked(`PolkadotPrimitivesV4CandidateReceipt`, `Bytes`, `u32`, `u32`)
- **interface**: `api.events.paraInclusion.CandidateBacked.is`
- **summary**:    A candidate was backed. `[candidate, head_data]` 
 
### CandidateIncluded(`PolkadotPrimitivesV4CandidateReceipt`, `Bytes`, `u32`, `u32`)
- **interface**: `api.events.paraInclusion.CandidateIncluded.is`
- **summary**:    A candidate was included. `[candidate, head_data]` 
 
### CandidateTimedOut(`PolkadotPrimitivesV4CandidateReceipt`, `Bytes`, `u32`)
- **interface**: `api.events.paraInclusion.CandidateTimedOut.is`
- **summary**:    A candidate timed out. `[candidate, head_data]` 

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


## phragmenElection
 
### CandidateSlashed(`AccountId32`, `u128`)
- **interface**: `api.events.phragmenElection.CandidateSlashed.is`
- **summary**:    A candidate was slashed by amount due to failing to obtain a seat as member or  runner-up. 

   Note that old members and runners-up are also candidates. 
 
### ElectionError()
- **interface**: `api.events.phragmenElection.ElectionError.is`
- **summary**:    Internal error happened while trying to perform election. 
 
### EmptyTerm()
- **interface**: `api.events.phragmenElection.EmptyTerm.is`
- **summary**:    No (or not enough) candidates existed for this round. This is different from  `NewTerm(\[\])`. See the description of `NewTerm`. 
 
### MemberKicked(`AccountId32`)
- **interface**: `api.events.phragmenElection.MemberKicked.is`
- **summary**:    A member has been removed. This should always be followed by either `NewTerm` or  `EmptyTerm`. 
 
### NewTerm(`Vec<(AccountId32,u128)>`)
- **interface**: `api.events.phragmenElection.NewTerm.is`
- **summary**:    A new term with new_members. This indicates that enough candidates existed to run  the election, not that enough have has been elected. The inner value must be examined  for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond  slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to  begin with. 
 
### Renounced(`AccountId32`)
- **interface**: `api.events.phragmenElection.Renounced.is`
- **summary**:    Someone has renounced their candidacy. 
 
### SeatHolderSlashed(`AccountId32`, `u128`)
- **interface**: `api.events.phragmenElection.SeatHolderSlashed.is`
- **summary**:    A seat holder was slashed by amount by being forcefully removed from the set. 

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
- **summary**:    A deposit has been slashaed. 
 
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
 
### Rewarded(`AccountId32`, `u128`)
- **interface**: `api.events.staking.Rewarded.is`
- **summary**:    The nominator has been rewarded by this amount. 
 
### Slashed(`AccountId32`, `u128`)
- **interface**: `api.events.staking.Slashed.is`
- **summary**:    A staker (validator or nominator) has been slashed by the given amount. 
 
### SlashReported(`AccountId32`, `Perbill`, `u32`)
- **interface**: `api.events.staking.SlashReported.is`
- **summary**:    A slash for the given validator, for the given percentage of their stake, at the given  era as been reported. 
 
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

___


## technicalCommittee
 
### Approved(`H256`)
- **interface**: `api.events.technicalCommittee.Approved.is`
- **summary**:    A motion was approved by the required threshold. 
 
### Closed(`H256`, `u32`, `u32`)
- **interface**: `api.events.technicalCommittee.Closed.is`
- **summary**:    A proposal was closed because its threshold was reached or after its duration was up. 
 
### Disapproved(`H256`)
- **interface**: `api.events.technicalCommittee.Disapproved.is`
- **summary**:    A motion was not approved by the required threshold. 
 
### Executed(`H256`, `Result<Null, SpRuntimeDispatchError>`)
- **interface**: `api.events.technicalCommittee.Executed.is`
- **summary**:    A motion was executed; result will be `Ok` if it returned without error. 
 
### MemberExecuted(`H256`, `Result<Null, SpRuntimeDispatchError>`)
- **interface**: `api.events.technicalCommittee.MemberExecuted.is`
- **summary**:    A single member did some action; result will be `Ok` if it returned without error. 
 
### Proposed(`AccountId32`, `u32`, `H256`, `u32`)
- **interface**: `api.events.technicalCommittee.Proposed.is`
- **summary**:    A motion (given hash) has been proposed (by given account) with a threshold (given  `MemberCount`). 
 
### Voted(`AccountId32`, `H256`, `bool`, `u32`, `u32`)
- **interface**: `api.events.technicalCommittee.Voted.is`
- **summary**:    A motion (given hash) has been voted on by given account, leaving  a tally (yes votes and no votes given respectively as `MemberCount`). 

___


## technicalMembership
 
### Dummy()
- **interface**: `api.events.technicalMembership.Dummy.is`
- **summary**:    Phantom member, never used. 
 
### KeyChanged()
- **interface**: `api.events.technicalMembership.KeyChanged.is`
- **summary**:    One of the members' keys changed. 
 
### MemberAdded()
- **interface**: `api.events.technicalMembership.MemberAdded.is`
- **summary**:    The given member was added; see the transaction for who. 
 
### MemberRemoved()
- **interface**: `api.events.technicalMembership.MemberRemoved.is`
- **summary**:    The given member was removed; see the transaction for who. 
 
### MembersReset()
- **interface**: `api.events.technicalMembership.MembersReset.is`
- **summary**:    The membership was reset; see the transaction for who the new set is. 
 
### MembersSwapped()
- **interface**: `api.events.technicalMembership.MembersSwapped.is`
- **summary**:    Two members were swapped; see the transaction for who. 

___


## tips
 
### NewTip(`H256`)
- **interface**: `api.events.tips.NewTip.is`
- **summary**:    A new tip suggestion has been opened. 
 
### TipClosed(`H256`, `AccountId32`, `u128`)
- **interface**: `api.events.tips.TipClosed.is`
- **summary**:    A tip suggestion has been closed. 
 
### TipClosing(`H256`)
- **interface**: `api.events.tips.TipClosing.is`
- **summary**:    A tip suggestion has reached threshold and is closing. 
 
### TipRetracted(`H256`)
- **interface**: `api.events.tips.TipRetracted.is`
- **summary**:    A tip suggestion has been retracted. 
 
### TipSlashed(`H256`, `AccountId32`, `u128`)
- **interface**: `api.events.tips.TipSlashed.is`
- **summary**:    A tip suggestion has been slashed. 

___


## transactionPayment
 
### TransactionFeePaid(`AccountId32`, `u128`, `u128`)
- **interface**: `api.events.transactionPayment.TransactionFeePaid.is`
- **summary**:    A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,  has been paid by `who`. 

___


## treasury
 
### Awarded(`u32`, `u128`, `AccountId32`)
- **interface**: `api.events.treasury.Awarded.is`
- **summary**:    Some funds have been allocated. 
 
### Burnt(`u128`)
- **interface**: `api.events.treasury.Burnt.is`
- **summary**:    Some of our funds have been burnt. 
 
### Deposit(`u128`)
- **interface**: `api.events.treasury.Deposit.is`
- **summary**:    Some funds have been deposited. 
 
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
 
### UpdatedInactive(`u128`, `u128`)
- **interface**: `api.events.treasury.UpdatedInactive.is`
- **summary**:    The inactive funds of the pallet have been updated. 

___


## ump
 
### ExecutedUpward(`[u8;32]`, `XcmV3TraitsOutcome`)
- **interface**: `api.events.ump.ExecutedUpward.is`
- **summary**:    Upward message executed with the given outcome.  \[ id, outcome \] 
 
### InvalidFormat(`[u8;32]`)
- **interface**: `api.events.ump.InvalidFormat.is`
- **summary**:    Upward message is invalid XCM.  \[ id \] 
 
### OverweightEnqueued(`u32`, `[u8;32]`, `u64`, `SpWeightsWeightV2Weight`)
- **interface**: `api.events.ump.OverweightEnqueued.is`
- **summary**:    The weight budget was exceeded for an individual upward message. 

   This message can be later dispatched manually using `service_overweight` dispatchable  using the assigned `overweight_index`. 

   \[ para, id, overweight_index, required \] 
 
### OverweightServiced(`u64`, `SpWeightsWeightV2Weight`)
- **interface**: `api.events.ump.OverweightServiced.is`
- **summary**:    Upward message from the overweight queue was executed with the given actual weight  used. 

   \[ overweight_index, used \] 
 
### UnsupportedVersion(`[u8;32]`)
- **interface**: `api.events.ump.UnsupportedVersion.is`
- **summary**:    Upward message is unsupported version of XCM.  \[ id \] 
 
### UpwardMessagesReceived(`u32`, `u32`, `u32`)
- **interface**: `api.events.ump.UpwardMessagesReceived.is`
- **summary**:    Some upward messages have been received and will be processed.  \[ para, count, size \] 
 
### WeightExhausted(`[u8;32]`, `SpWeightsWeightV2Weight`, `SpWeightsWeightV2Weight`)
- **interface**: `api.events.ump.WeightExhausted.is`
- **summary**:    The weight limit for handling upward messages was reached.  \[ id, remaining, required \] 

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
 
### AssetsClaimed(`H256`, `XcmV3MultiLocation`, `XcmVersionedMultiAssets`)
- **interface**: `api.events.xcmPallet.AssetsClaimed.is`
- **summary**:    Some assets have been claimed from an asset trap 

   \[ hash, origin, assets \] 
 
### AssetsTrapped(`H256`, `XcmV3MultiLocation`, `XcmVersionedMultiAssets`)
- **interface**: `api.events.xcmPallet.AssetsTrapped.is`
- **summary**:    Some assets have been placed in an asset trap. 

   \[ hash, origin, assets \] 
 
### Attempted(`XcmV3TraitsOutcome`)
- **interface**: `api.events.xcmPallet.Attempted.is`
- **summary**:    Execution of an XCM message was attempted. 

   \[ outcome \] 
 
### FeesPaid(`XcmV3MultiLocation`, `XcmV3MultiassetMultiAssets`)
- **interface**: `api.events.xcmPallet.FeesPaid.is`
- **summary**:    Fees were paid from a location for an operation (often for using `SendXcm`). 

   \[ paying location, fees \] 
 
### InvalidQuerier(`XcmV3MultiLocation`, `u64`, `XcmV3MultiLocation`, `Option<XcmV3MultiLocation>`)
- **interface**: `api.events.xcmPallet.InvalidQuerier.is`
- **summary**:    Expected query response has been received but the querier location of the response does  not match the expected. The query remains registered for a later, valid, response to  be received and acted upon. 

   \[ origin location, id, expected querier, maybe actual querier \] 
 
### InvalidQuerierVersion(`XcmV3MultiLocation`, `u64`)
- **interface**: `api.events.xcmPallet.InvalidQuerierVersion.is`
- **summary**:    Expected query response has been received but the expected querier location placed in  storage by this runtime previously cannot be decoded. The query remains registered. 

   This is unexpected (since a location placed in storage in a previously executing  runtime should be readable prior to query timeout) and dangerous since the possibly  valid response will be dropped. Manual governance intervention is probably going to be  needed. 

   \[ origin location, id \] 
 
### InvalidResponder(`XcmV3MultiLocation`, `u64`, `Option<XcmV3MultiLocation>`)
- **interface**: `api.events.xcmPallet.InvalidResponder.is`
- **summary**:    Expected query response has been received but the origin location of the response does  not match that expected. The query remains registered for a later, valid, response to  be received and acted upon. 

   \[ origin location, id, expected location \] 
 
### InvalidResponderVersion(`XcmV3MultiLocation`, `u64`)
- **interface**: `api.events.xcmPallet.InvalidResponderVersion.is`
- **summary**:    Expected query response has been received but the expected origin location placed in  storage by this runtime previously cannot be decoded. The query remains registered. 

   This is unexpected (since a location placed in storage in a previously executing  runtime should be readable prior to query timeout) and dangerous since the possibly  valid response will be dropped. Manual governance intervention is probably going to be  needed. 

   \[ origin location, id \] 
 
### Notified(`u64`, `u8`, `u8`)
- **interface**: `api.events.xcmPallet.Notified.is`
- **summary**:    Query response has been received and query is removed. The registered notification has  been dispatched and executed successfully. 

   \[ id, pallet index, call index \] 
 
### NotifyDecodeFailed(`u64`, `u8`, `u8`)
- **interface**: `api.events.xcmPallet.NotifyDecodeFailed.is`
- **summary**:    Query response has been received and query is removed. The dispatch was unable to be  decoded into a `Call`; this might be due to dispatch function having a signature which  is not `(origin, QueryId, Response)`. 

   \[ id, pallet index, call index \] 
 
### NotifyDispatchError(`u64`, `u8`, `u8`)
- **interface**: `api.events.xcmPallet.NotifyDispatchError.is`
- **summary**:    Query response has been received and query is removed. There was a general error with  dispatching the notification call. 

   \[ id, pallet index, call index \] 
 
### NotifyOverweight(`u64`, `u8`, `u8`, `SpWeightsWeightV2Weight`, `SpWeightsWeightV2Weight`)
- **interface**: `api.events.xcmPallet.NotifyOverweight.is`
- **summary**:    Query response has been received and query is removed. The registered notification could  not be dispatched because the dispatch weight is greater than the maximum weight  originally budgeted by this runtime for the query result. 

   \[ id, pallet index, call index, actual weight, max budgeted weight \] 
 
### NotifyTargetMigrationFail(`XcmVersionedMultiLocation`, `u64`)
- **interface**: `api.events.xcmPallet.NotifyTargetMigrationFail.is`
- **summary**:    A given location which had a version change subscription was dropped owing to an error  migrating the location to our new XCM format. 

   \[ location, query ID \] 
 
### NotifyTargetSendFail(`XcmV3MultiLocation`, `u64`, `XcmV3TraitsError`)
- **interface**: `api.events.xcmPallet.NotifyTargetSendFail.is`
- **summary**:    A given location which had a version change subscription was dropped owing to an error  sending the notification to it. 

   \[ location, query ID, error \] 
 
### ResponseReady(`u64`, `XcmV3Response`)
- **interface**: `api.events.xcmPallet.ResponseReady.is`
- **summary**:    Query response has been received and is ready for taking with `take_response`. There is  no registered notification call. 

   \[ id, response \] 
 
### ResponseTaken(`u64`)
- **interface**: `api.events.xcmPallet.ResponseTaken.is`
- **summary**:    Received query response has been read and removed. 

   \[ id \] 
 
### Sent(`XcmV3MultiLocation`, `XcmV3MultiLocation`, `XcmV3Xcm`)
- **interface**: `api.events.xcmPallet.Sent.is`
- **summary**:    A XCM message was sent. 

   \[ origin, destination, message \] 
 
### SupportedVersionChanged(`XcmV3MultiLocation`, `u32`)
- **interface**: `api.events.xcmPallet.SupportedVersionChanged.is`
- **summary**:    The supported version of a location has been changed. This might be through an  automatic notification or a manual intervention. 

   \[ location, XCM version \] 
 
### UnexpectedResponse(`XcmV3MultiLocation`, `u64`)
- **interface**: `api.events.xcmPallet.UnexpectedResponse.is`
- **summary**:    Query response received which does not match a registered query. This may be because a  matching query was never registered, it may be because it is a duplicate response, or  because the query timed out. 

   \[ origin location, id \] 
 
### VersionChangeNotified(`XcmV3MultiLocation`, `u32`, `XcmV3MultiassetMultiAssets`)
- **interface**: `api.events.xcmPallet.VersionChangeNotified.is`
- **summary**:    An XCM version change notification message has been attempted to be sent. 

   The cost of sending it (borne by the chain) is included. 

   \[ destination, result, cost \] 
 
### VersionNotifyRequested(`XcmV3MultiLocation`, `XcmV3MultiassetMultiAssets`)
- **interface**: `api.events.xcmPallet.VersionNotifyRequested.is`
- **summary**:    We have requested that a remote chain sends us XCM version change notifications. 

   \[ destination location, cost \] 
 
### VersionNotifyStarted(`XcmV3MultiLocation`, `XcmV3MultiassetMultiAssets`)
- **interface**: `api.events.xcmPallet.VersionNotifyStarted.is`
- **summary**:    A remote has requested XCM version change notification from us and we have honored it.  A version information message is sent to them and its cost is included. 

   \[ destination location, cost \] 
 
### VersionNotifyUnrequested(`XcmV3MultiLocation`, `XcmV3MultiassetMultiAssets`)
- **interface**: `api.events.xcmPallet.VersionNotifyUnrequested.is`
- **summary**:    We have requested that a remote chain stops sending us XCM version change notifications. 

   \[ destination location, cost \] 
