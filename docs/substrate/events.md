---
title: Events
---

Events are emitted for certain operations on the runtime. The following sections describe the events that are part of the default Substrate runtime. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[alliance](#alliance)**

- **[allianceMotion](#alliancemotion)**

- **[assets](#assets)**

- **[bagsList](#bagslist)**

- **[balances](#balances)**

- **[bounties](#bounties)**

- **[childBounties](#childbounties)**

- **[contracts](#contracts)**

- **[convictionVoting](#convictionvoting)**

- **[council](#council)**

- **[democracy](#democracy)**

- **[electionProviderMultiPhase](#electionprovidermultiphase)**

- **[elections](#elections)**

- **[gilt](#gilt)**

- **[grandpa](#grandpa)**

- **[identity](#identity)**

- **[imOnline](#imonline)**

- **[indices](#indices)**

- **[lottery](#lottery)**

- **[multisig](#multisig)**

- **[nominationPools](#nominationpools)**

- **[offences](#offences)**

- **[preimage](#preimage)**

- **[proxy](#proxy)**

- **[rankedCollective](#rankedcollective)**

- **[rankedPolls](#rankedpolls)**

- **[recovery](#recovery)**

- **[referenda](#referenda)**

- **[remark](#remark)**

- **[scheduler](#scheduler)**

- **[session](#session)**

- **[society](#society)**

- **[staking](#staking)**

- **[stateTrieMigration](#statetriemigration)**

- **[sudo](#sudo)**

- **[system](#system)**

- **[technicalCommittee](#technicalcommittee)**

- **[technicalMembership](#technicalmembership)**

- **[tips](#tips)**

- **[transactionPayment](#transactionpayment)**

- **[transactionStorage](#transactionstorage)**

- **[treasury](#treasury)**

- **[uniques](#uniques)**

- **[utility](#utility)**

- **[vesting](#vesting)**

- **[whitelist](#whitelist)**


___


## alliance
 
### AllyElevated(`AccountId32`)
- **interface**: `api.events.alliance.AllyElevated.is`
- **summary**:    An ally has been elevated to Fellow. 
 
### Announced(`PalletAllianceCid`)
- **interface**: `api.events.alliance.Announced.is`
- **summary**:    A new announcement has been proposed. 
 
### AnnouncementRemoved(`PalletAllianceCid`)
- **interface**: `api.events.alliance.AnnouncementRemoved.is`
- **summary**:    An on-chain announcement has been removed. 
 
### MemberKicked(`AccountId32`, `Option<u128>`)
- **interface**: `api.events.alliance.MemberKicked.is`
- **summary**:    A member has been kicked out with its deposit slashed. 
 
### MemberRetired(`AccountId32`, `Option<u128>`)
- **interface**: `api.events.alliance.MemberRetired.is`
- **summary**:    A member has retired with its deposit unreserved. 
 
### MembersInitialized(`Vec<AccountId32>`, `Vec<AccountId32>`, `Vec<AccountId32>`)
- **interface**: `api.events.alliance.MembersInitialized.is`
- **summary**:    Some accounts have been initialized as members (founders/fellows/allies). 
 
### NewAllyJoined(`AccountId32`, `Option<AccountId32>`, `Option<u128>`)
- **interface**: `api.events.alliance.NewAllyJoined.is`
- **summary**:    An account has been added as an Ally and reserved its deposit. 
 
### NewRuleSet(`PalletAllianceCid`)
- **interface**: `api.events.alliance.NewRuleSet.is`
- **summary**:    A new rule has been set. 
 
### UnscrupulousItemAdded(`Vec<PalletAllianceUnscrupulousItem>`)
- **interface**: `api.events.alliance.UnscrupulousItemAdded.is`
- **summary**:    Accounts or websites have been added into the list of unscrupulous items. 
 
### UnscrupulousItemRemoved(`Vec<PalletAllianceUnscrupulousItem>`)
- **interface**: `api.events.alliance.UnscrupulousItemRemoved.is`
- **summary**:    Accounts or websites have been removed from the list of unscrupulous items. 

___


## allianceMotion
 
### Approved(`H256`)
- **interface**: `api.events.allianceMotion.Approved.is`
- **summary**:    A motion was approved by the required threshold. 
 
### Closed(`H256`, `u32`, `u32`)
- **interface**: `api.events.allianceMotion.Closed.is`
- **summary**:    A proposal was closed because its threshold was reached or after its duration was up. 
 
### Disapproved(`H256`)
- **interface**: `api.events.allianceMotion.Disapproved.is`
- **summary**:    A motion was not approved by the required threshold. 
 
### Executed(`H256`, `Result<Null, SpRuntimeDispatchError>`)
- **interface**: `api.events.allianceMotion.Executed.is`
- **summary**:    A motion was executed; result will be `Ok` if it returned without error. 
 
### MemberExecuted(`H256`, `Result<Null, SpRuntimeDispatchError>`)
- **interface**: `api.events.allianceMotion.MemberExecuted.is`
- **summary**:    A single member did some action; result will be `Ok` if it returned without error. 
 
### Proposed(`AccountId32`, `u32`, `H256`, `u32`)
- **interface**: `api.events.allianceMotion.Proposed.is`
- **summary**:    A motion (given hash) has been proposed (by given account) with a threshold (given  `MemberCount`). 
 
### Voted(`AccountId32`, `H256`, `bool`, `u32`, `u32`)
- **interface**: `api.events.allianceMotion.Voted.is`
- **summary**:    A motion (given hash) has been voted on by given account, leaving  a tally (yes votes and no votes given respectively as `MemberCount`). 

___


## assets
 
### ApprovalCancelled(`u32`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.assets.ApprovalCancelled.is`
- **summary**:    An approval for account `delegate` was cancelled by `owner`. 
 
### ApprovedTransfer(`u32`, `AccountId32`, `AccountId32`, `u128`)
- **interface**: `api.events.assets.ApprovedTransfer.is`
- **summary**:    (Additional) funds have been approved for transfer to a destination account. 
 
### AssetFrozen(`u32`)
- **interface**: `api.events.assets.AssetFrozen.is`
- **summary**:    Some asset `asset_id` was frozen. 
 
### AssetStatusChanged(`u32`)
- **interface**: `api.events.assets.AssetStatusChanged.is`
- **summary**:    An asset has had its attributes changed by the `Force` origin. 
 
### AssetThawed(`u32`)
- **interface**: `api.events.assets.AssetThawed.is`
- **summary**:    Some asset `asset_id` was thawed. 
 
### Burned(`u32`, `AccountId32`, `u128`)
- **interface**: `api.events.assets.Burned.is`
- **summary**:    Some assets were destroyed. 
 
### Created(`u32`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.assets.Created.is`
- **summary**:    Some asset class was created. 
 
### Destroyed(`u32`)
- **interface**: `api.events.assets.Destroyed.is`
- **summary**:    An asset class was destroyed. 
 
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
 
### Transferred(`u32`, `AccountId32`, `AccountId32`, `u128`)
- **interface**: `api.events.assets.Transferred.is`
- **summary**:    Some assets were transferred. 
 
### TransferredApproved(`u32`, `AccountId32`, `AccountId32`, `AccountId32`, `u128`)
- **interface**: `api.events.assets.TransferredApproved.is`
- **summary**:    An `amount` was transferred in its entirety from `owner` to `destination` by  the approved `delegate`. 

___


## bagsList
 
### Rebagged(`AccountId32`, `u64`, `u64`)
- **interface**: `api.events.bagsList.Rebagged.is`
- **summary**:    Moved an account from one bag to another. 
 
### ScoreUpdated(`AccountId32`, `u64`)
- **interface**: `api.events.bagsList.ScoreUpdated.is`
- **summary**:    Updated the score of some account to the given amount. 

___


## balances
 
### BalanceSet(`AccountId32`, `u128`, `u128`)
- **interface**: `api.events.balances.BalanceSet.is`
- **summary**:    A balance was set by root. 
 
### Deposit(`AccountId32`, `u128`)
- **interface**: `api.events.balances.Deposit.is`
- **summary**:    Some amount was deposited (e.g. for transaction fees). 
 
### DustLost(`AccountId32`, `u128`)
- **interface**: `api.events.balances.DustLost.is`
- **summary**:    An account was removed whose balance was non-zero but below ExistentialDeposit,  resulting in an outright loss. 
 
### Endowed(`AccountId32`, `u128`)
- **interface**: `api.events.balances.Endowed.is`
- **summary**:    An account was created with some free balance. 
 
### Reserved(`AccountId32`, `u128`)
- **interface**: `api.events.balances.Reserved.is`
- **summary**:    Some balance was reserved (moved from free to reserved). 
 
### ReserveRepatriated(`AccountId32`, `AccountId32`, `u128`, `FrameSupportTokensMiscBalanceStatus`)
- **interface**: `api.events.balances.ReserveRepatriated.is`
- **summary**:    Some balance was moved from the reserve of the first account to the second account.  Final argument indicates the destination balance type. 
 
### Slashed(`AccountId32`, `u128`)
- **interface**: `api.events.balances.Slashed.is`
- **summary**:    Some amount was removed from the account (e.g. for misbehavior). 
 
### Transfer(`AccountId32`, `AccountId32`, `u128`)
- **interface**: `api.events.balances.Transfer.is`
- **summary**:    Transfer succeeded. 
 
### Unreserved(`AccountId32`, `u128`)
- **interface**: `api.events.balances.Unreserved.is`
- **summary**:    Some balance was unreserved (moved from reserved to free). 
 
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


## contracts
 
### CodeRemoved(`H256`)
- **interface**: `api.events.contracts.CodeRemoved.is`
- **summary**:    A code with the specified hash was removed. 
 
### CodeStored(`H256`)
- **interface**: `api.events.contracts.CodeStored.is`
- **summary**:    Code with the specified hash has been stored. 
 
### ContractCodeUpdated(`AccountId32`, `H256`, `H256`)
- **interface**: `api.events.contracts.ContractCodeUpdated.is`
- **summary**:    A contract's code was updated. 
 
### ContractEmitted(`AccountId32`, `Bytes`)
- **interface**: `api.events.contracts.ContractEmitted.is`
- **summary**:    A custom event emitted by the contract. 
 
### Instantiated(`AccountId32`, `AccountId32`)
- **interface**: `api.events.contracts.Instantiated.is`
- **summary**:    Contract deployed by address at the specified address. 
 
### Terminated(`AccountId32`, `AccountId32`)
- **interface**: `api.events.contracts.Terminated.is`
- **summary**:    Contract has been removed. 

   #### Note 

   The only way for a contract to be removed and emitting this event is by calling  `seal_terminate`. 

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
 
### Executed(`u32`, `Result<Null, SpRuntimeDispatchError>`)
- **interface**: `api.events.democracy.Executed.is`
- **summary**:    A proposal has been enacted. 
 
### ExternalTabled()
- **interface**: `api.events.democracy.ExternalTabled.is`
- **summary**:    An external proposal has been tabled. 
 
### NotPassed(`u32`)
- **interface**: `api.events.democracy.NotPassed.is`
- **summary**:    A proposal has been rejected by referendum. 
 
### Passed(`u32`)
- **interface**: `api.events.democracy.Passed.is`
- **summary**:    A proposal has been approved by referendum. 
 
### PreimageInvalid(`H256`, `u32`)
- **interface**: `api.events.democracy.PreimageInvalid.is`
- **summary**:    A proposal could not be executed because its preimage was invalid. 
 
### PreimageMissing(`H256`, `u32`)
- **interface**: `api.events.democracy.PreimageMissing.is`
- **summary**:    A proposal could not be executed because its preimage was missing. 
 
### PreimageNoted(`H256`, `AccountId32`, `u128`)
- **interface**: `api.events.democracy.PreimageNoted.is`
- **summary**:    A proposal's preimage was noted, and the deposit taken. 
 
### PreimageReaped(`H256`, `AccountId32`, `u128`, `AccountId32`)
- **interface**: `api.events.democracy.PreimageReaped.is`
- **summary**:    A registered preimage was removed and the deposit collected by the reaper. 
 
### PreimageUsed(`H256`, `AccountId32`, `u128`)
- **interface**: `api.events.democracy.PreimageUsed.is`
- **summary**:    A proposal preimage was removed and used (the deposit was returned). 
 
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
 
### Tabled(`u32`, `u128`, `Vec<AccountId32>`)
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
 
### ElectionFinalized(`Option<PalletElectionProviderMultiPhaseElectionCompute>`)
- **interface**: `api.events.electionProviderMultiPhase.ElectionFinalized.is`
- **summary**:    The election has been finalized, with `Some` of the given computation, or else if the  election failed, `None`. 
 
### Rewarded(`AccountId32`, `u128`)
- **interface**: `api.events.electionProviderMultiPhase.Rewarded.is`
- **summary**:    An account has been rewarded for their signed submission being finalized. 
 
### SignedPhaseStarted(`u32`)
- **interface**: `api.events.electionProviderMultiPhase.SignedPhaseStarted.is`
- **summary**:    The signed phase of the given round has started. 
 
### Slashed(`AccountId32`, `u128`)
- **interface**: `api.events.electionProviderMultiPhase.Slashed.is`
- **summary**:    An account has been slashed for submitting an invalid signed submission. 
 
### SolutionStored(`PalletElectionProviderMultiPhaseElectionCompute`, `bool`)
- **interface**: `api.events.electionProviderMultiPhase.SolutionStored.is`
- **summary**:    A solution was stored with the given compute. 

   If the solution is signed, this means that it hasn't yet been processed. If the  solution is unsigned, this means that it has also been processed. 

   The `bool` is `true` when a previous solution was ejected to make room for this one. 
 
### UnsignedPhaseStarted(`u32`)
- **interface**: `api.events.electionProviderMultiPhase.UnsignedPhaseStarted.is`
- **summary**:    The unsigned phase of the given round has started. 

___


## elections
 
### CandidateSlashed(`AccountId32`, `u128`)
- **interface**: `api.events.elections.CandidateSlashed.is`
- **summary**:    A candidate was slashed by amount due to failing to obtain a seat as member or  runner-up. 

   Note that old members and runners-up are also candidates. 
 
### ElectionError()
- **interface**: `api.events.elections.ElectionError.is`
- **summary**:    Internal error happened while trying to perform election. 
 
### EmptyTerm()
- **interface**: `api.events.elections.EmptyTerm.is`
- **summary**:    No (or not enough) candidates existed for this round. This is different from  `NewTerm(\[\])`. See the description of `NewTerm`. 
 
### MemberKicked(`AccountId32`)
- **interface**: `api.events.elections.MemberKicked.is`
- **summary**:    A member has been removed. This should always be followed by either `NewTerm` or  `EmptyTerm`. 
 
### NewTerm(`Vec<(AccountId32,u128)>`)
- **interface**: `api.events.elections.NewTerm.is`
- **summary**:    A new term with new_members. This indicates that enough candidates existed to run  the election, not that enough have has been elected. The inner value must be examined  for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond  slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to  begin with. 
 
### Renounced(`AccountId32`)
- **interface**: `api.events.elections.Renounced.is`
- **summary**:    Someone has renounced their candidacy. 
 
### SeatHolderSlashed(`AccountId32`, `u128`)
- **interface**: `api.events.elections.SeatHolderSlashed.is`
- **summary**:    A seat holder was slashed by amount by being forcefully removed from the set. 

___


## gilt
 
### BidPlaced(`AccountId32`, `u128`, `u32`)
- **interface**: `api.events.gilt.BidPlaced.is`
- **summary**:    A bid was successfully placed. 
 
### BidRetracted(`AccountId32`, `u128`, `u32`)
- **interface**: `api.events.gilt.BidRetracted.is`
- **summary**:    A bid was successfully removed (before being accepted as a gilt). 
 
### GiltIssued(`u32`, `u32`, `AccountId32`, `u128`)
- **interface**: `api.events.gilt.GiltIssued.is`
- **summary**:    A bid was accepted as a gilt. The balance may not be released until expiry. 
 
### GiltThawed(`u32`, `AccountId32`, `u128`, `u128`)
- **interface**: `api.events.gilt.GiltThawed.is`
- **summary**:    An expired gilt has been thawed. 

___


## grandpa
 
### NewAuthorities(`Vec<(SpFinalityGrandpaAppPublic,u64)>`)
- **interface**: `api.events.grandpa.NewAuthorities.is`
- **summary**:    New authority set has been applied. 
 
### Paused()
- **interface**: `api.events.grandpa.Paused.is`
- **summary**:    Current authority set has been paused. 
 
### Resumed()
- **interface**: `api.events.grandpa.Resumed.is`
- **summary**:    Current authority set has been resumed. 

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


## lottery
 
### CallsUpdated()
- **interface**: `api.events.lottery.CallsUpdated.is`
- **summary**:    A new set of calls have been set! 
 
### LotteryStarted()
- **interface**: `api.events.lottery.LotteryStarted.is`
- **summary**:    A lottery has been started! 
 
### TicketBought(`AccountId32`, `(u8,u8)`)
- **interface**: `api.events.lottery.TicketBought.is`
- **summary**:    A ticket has been bought! 
 
### Winner(`AccountId32`, `u128`)
- **interface**: `api.events.lottery.Winner.is`
- **summary**:    A winner has been chosen! 

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
 
### PoolSlashed(`u32`, `u128`)
- **interface**: `api.events.nominationPools.PoolSlashed.is`
- **summary**:    The active balance of pool `pool_id` has been slashed to `balance`. 
 
### RolesUpdated(`Option<AccountId32>`, `Option<AccountId32>`, `Option<AccountId32>`)
- **interface**: `api.events.nominationPools.RolesUpdated.is`
- **summary**:    The roles of a pool have been updated to the given new roles. Note that the depositor  can never change. 
 
### StateChanged(`u32`, `PalletNominationPoolsPoolState`)
- **interface**: `api.events.nominationPools.StateChanged.is`
- **summary**:    The state of a pool has changed 
 
### Unbonded(`AccountId32`, `u32`, `u128`, `u128`)
- **interface**: `api.events.nominationPools.Unbonded.is`
- **summary**:    A member has unbonded from their pool. 

   - `balance` is the corresponding balance of the number of points that has been  requested to be unbonded (the argument of the `unbond` transaction) from the bonded  pool. 

  - `points` is the number of points that are issued as a result of `balance` being dissolved into the corresponding unbonding pool. 

   In the absence of slashing, these values will match. In the presence of slashing, the  number of points that are issued in the unbonding pool will be less than the amount  requested to be unbonded. 
 
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
 
### AnonymousCreated(`AccountId32`, `AccountId32`, `NodeRuntimeProxyType`, `u16`)
- **interface**: `api.events.proxy.AnonymousCreated.is`
- **summary**:    Anonymous account has been created by new proxy with given  disambiguation index and proxy type. 
 
### ProxyAdded(`AccountId32`, `AccountId32`, `NodeRuntimeProxyType`, `u32`)
- **interface**: `api.events.proxy.ProxyAdded.is`
- **summary**:    A proxy was added. 
 
### ProxyExecuted(`Result<Null, SpRuntimeDispatchError>`)
- **interface**: `api.events.proxy.ProxyExecuted.is`
- **summary**:    A proxy was executed correctly, with the given. 
 
### ProxyRemoved(`AccountId32`, `AccountId32`, `NodeRuntimeProxyType`, `u32`)
- **interface**: `api.events.proxy.ProxyRemoved.is`
- **summary**:    A proxy was removed. 

___


## rankedCollective
 
### MemberAdded(`AccountId32`)
- **interface**: `api.events.rankedCollective.MemberAdded.is`
- **summary**:    A member `who` has been added. 
 
### MemberRemoved(`AccountId32`, `u16`)
- **interface**: `api.events.rankedCollective.MemberRemoved.is`
- **summary**:    The member `who` of given `rank` has been removed from the collective. 
 
### RankChanged(`AccountId32`, `u16`)
- **interface**: `api.events.rankedCollective.RankChanged.is`
- **summary**:    The member `who`'s rank has been changed to the given `rank`. 
 
### Voted(`AccountId32`, `u32`, `PalletRankedCollectiveVoteRecord`, `PalletRankedCollectiveTally`)
- **interface**: `api.events.rankedCollective.Voted.is`
- **summary**:    The member `who` has voted for the `poll` with the given `vote` leading to an updated  `tally`. 

___


## rankedPolls
 
### Approved(`u32`)
- **interface**: `api.events.rankedPolls.Approved.is`
- **summary**:    A referendum has been approved and its proposal has been scheduled. 
 
### Cancelled(`u32`, `PalletRankedCollectiveTally`)
- **interface**: `api.events.rankedPolls.Cancelled.is`
- **summary**:    A referendum has been cancelled. 
 
### ConfirmAborted(`u32`)
- **interface**: `api.events.rankedPolls.ConfirmAborted.is`
 
### Confirmed(`u32`, `PalletRankedCollectiveTally`)
- **interface**: `api.events.rankedPolls.Confirmed.is`
- **summary**:    A referendum has ended its confirmation phase and is ready for approval. 
 
### ConfirmStarted(`u32`)
- **interface**: `api.events.rankedPolls.ConfirmStarted.is`
 
### DecisionDepositPlaced(`u32`, `AccountId32`, `u128`)
- **interface**: `api.events.rankedPolls.DecisionDepositPlaced.is`
- **summary**:    The decision deposit has been placed. 
 
### DecisionDepositRefunded(`u32`, `AccountId32`, `u128`)
- **interface**: `api.events.rankedPolls.DecisionDepositRefunded.is`
- **summary**:    The decision deposit has been refunded. 
 
### DecisionStarted(`u32`, `u16`, `H256`, `PalletRankedCollectiveTally`)
- **interface**: `api.events.rankedPolls.DecisionStarted.is`
- **summary**:    A referendum has moved into the deciding phase. 
 
### DepositSlashed(`AccountId32`, `u128`)
- **interface**: `api.events.rankedPolls.DepositSlashed.is`
- **summary**:    A deposit has been slashaed. 
 
### Killed(`u32`, `PalletRankedCollectiveTally`)
- **interface**: `api.events.rankedPolls.Killed.is`
- **summary**:    A referendum has been killed. 
 
### Rejected(`u32`, `PalletRankedCollectiveTally`)
- **interface**: `api.events.rankedPolls.Rejected.is`
- **summary**:    A proposal has been rejected by referendum. 
 
### Submitted(`u32`, `u16`, `H256`)
- **interface**: `api.events.rankedPolls.Submitted.is`
- **summary**:    A referendum has being submitted. 
 
### TimedOut(`u32`, `PalletRankedCollectiveTally`)
- **interface**: `api.events.rankedPolls.TimedOut.is`
- **summary**:    A referendum has been timed out without being decided. 

___


## recovery
 
### AccountRecovered(`AccountId32`, `AccountId32`)
- **interface**: `api.events.recovery.AccountRecovered.is`
- **summary**:    Lost account has been successfully recovered by rescuer account. 
 
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
 
### DecisionStarted(`u32`, `u16`, `H256`, `PalletConvictionVotingTally`)
- **interface**: `api.events.referenda.DecisionStarted.is`
- **summary**:    A referendum has moved into the deciding phase. 
 
### DepositSlashed(`AccountId32`, `u128`)
- **interface**: `api.events.referenda.DepositSlashed.is`
- **summary**:    A deposit has been slashaed. 
 
### Killed(`u32`, `PalletConvictionVotingTally`)
- **interface**: `api.events.referenda.Killed.is`
- **summary**:    A referendum has been killed. 
 
### Rejected(`u32`, `PalletConvictionVotingTally`)
- **interface**: `api.events.referenda.Rejected.is`
- **summary**:    A proposal has been rejected by referendum. 
 
### Submitted(`u32`, `u16`, `H256`)
- **interface**: `api.events.referenda.Submitted.is`
- **summary**:    A referendum has being submitted. 
 
### TimedOut(`u32`, `PalletConvictionVotingTally`)
- **interface**: `api.events.referenda.TimedOut.is`
- **summary**:    A referendum has been timed out without being decided. 

___


## remark
 
### Stored(`AccountId32`, `H256`)
- **interface**: `api.events.remark.Stored.is`
- **summary**:    Stored data off chain. 

___


## scheduler
 
### CallLookupFailed(`(u32,u32)`, `Option<Bytes>`, `FrameSupportScheduleLookupError`)
- **interface**: `api.events.scheduler.CallLookupFailed.is`
- **summary**:    The call for the provided hash was not found so the task has been aborted. 
 
### Canceled(`u32`, `u32`)
- **interface**: `api.events.scheduler.Canceled.is`
- **summary**:    Canceled some task. 
 
### Dispatched(`(u32,u32)`, `Option<Bytes>`, `Result<Null, SpRuntimeDispatchError>`)
- **interface**: `api.events.scheduler.Dispatched.is`
- **summary**:    Dispatched some task. 
 
### Scheduled(`u32`, `u32`)
- **interface**: `api.events.scheduler.Scheduled.is`
- **summary**:    Scheduled some task. 

___


## session
 
### NewSession(`u32`)
- **interface**: `api.events.session.NewSession.is`
- **summary**:    New session has happened. Note that the argument is the session index, not the  block number as the type might suggest. 

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
 
### Founded(`AccountId32`)
- **interface**: `api.events.society.Founded.is`
- **summary**:    The society is founded by the given identity. 
 
### Inducted(`AccountId32`, `Vec<AccountId32>`)
- **interface**: `api.events.society.Inducted.is`
- **summary**:    A group of candidates have been inducted. The batch's primary is the first value, the  batch in full is the second. 
 
### MemberSuspended(`AccountId32`)
- **interface**: `api.events.society.MemberSuspended.is`
- **summary**:    A member has been suspended 
 
### NewMaxMembers(`u32`)
- **interface**: `api.events.society.NewMaxMembers.is`
- **summary**:    A new \[max\] member count has been set 
 
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
- **summary**:    An account has stopped participating as either a validator or nominator.  \[stash\] 
 
### EraPaid(`u32`, `u128`, `u128`)
- **interface**: `api.events.staking.EraPaid.is`
- **summary**:    The era payout has been set; the first balance is the validator-payout; the second is  the remainder from the maximum amount of reward.  \[era_index, validator_payout, remainder\] 
 
### Kicked(`AccountId32`, `AccountId32`)
- **interface**: `api.events.staking.Kicked.is`
- **summary**:    A nominator has been kicked from a validator. \[nominator, stash\] 
 
### OldSlashingReportDiscarded(`u32`)
- **interface**: `api.events.staking.OldSlashingReportDiscarded.is`
- **summary**:    An old slashing report from a prior era was discarded because it could  not be processed. \[session_index\] 
 
### PayoutStarted(`u32`, `AccountId32`)
- **interface**: `api.events.staking.PayoutStarted.is`
- **summary**:    The stakers' rewards are getting paid. \[era_index, validator_stash\] 
 
### Rewarded(`AccountId32`, `u128`)
- **interface**: `api.events.staking.Rewarded.is`
- **summary**:    The nominator has been rewarded by this amount. \[stash, amount\] 
 
### Slashed(`AccountId32`, `u128`)
- **interface**: `api.events.staking.Slashed.is`
- **summary**:    One validator (and its nominators) has been slashed by the given amount.  \[validator, amount\] 
 
### StakersElected()
- **interface**: `api.events.staking.StakersElected.is`
- **summary**:    A new set of stakers was elected. 
 
### StakingElectionFailed()
- **interface**: `api.events.staking.StakingElectionFailed.is`
- **summary**:    The election failed. No new era is planned. 
 
### Unbonded(`AccountId32`, `u128`)
- **interface**: `api.events.staking.Unbonded.is`
- **summary**:    An account has unbonded this amount. \[stash, amount\] 
 
### ValidatorPrefsSet(`AccountId32`, `PalletStakingValidatorPrefs`)
- **interface**: `api.events.staking.ValidatorPrefsSet.is`
- **summary**:    A validator has set their preferences. 
 
### Withdrawn(`AccountId32`, `u128`)
- **interface**: `api.events.staking.Withdrawn.is`
- **summary**:    An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`  from the unlocking queue. \[stash, amount\] 

___


## stateTrieMigration
 
### AutoMigrationFinished()
- **interface**: `api.events.stateTrieMigration.AutoMigrationFinished.is`
- **summary**:    The auto migration task finished. 
 
### Halted()
- **interface**: `api.events.stateTrieMigration.Halted.is`
- **summary**:    Migration got halted due to an error or miss-configuration. 
 
### Migrated(`u32`, `u32`, `PalletStateTrieMigrationMigrationCompute`)
- **interface**: `api.events.stateTrieMigration.Migrated.is`
- **summary**:    Given number of `(top, child)` keys were migrated respectively, with the given  `compute`. 
 
### Slashed(`AccountId32`, `u128`)
- **interface**: `api.events.stateTrieMigration.Slashed.is`
- **summary**:    Some account got slashed by the given amount. 

___


## sudo
 
### KeyChanged(`Option<AccountId32>`)
- **interface**: `api.events.sudo.KeyChanged.is`
- **summary**:    The \[sudoer\] just switched identity; the old key is supplied if one existed. 
 
### Sudid(`Result<Null, SpRuntimeDispatchError>`)
- **interface**: `api.events.sudo.Sudid.is`
- **summary**:    A sudo just took place. \[result\] 
 
### SudoAsDone(`Result<Null, SpRuntimeDispatchError>`)
- **interface**: `api.events.sudo.SudoAsDone.is`
- **summary**:    A sudo just took place. \[result\] 

___


## system
 
### CodeUpdated()
- **interface**: `api.events.system.CodeUpdated.is`
- **summary**:    `:code` was updated. 
 
### ExtrinsicFailed(`SpRuntimeDispatchError`, `FrameSupportWeightsDispatchInfo`)
- **interface**: `api.events.system.ExtrinsicFailed.is`
- **summary**:    An extrinsic failed. 
 
### ExtrinsicSuccess(`FrameSupportWeightsDispatchInfo`)
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


## transactionStorage
 
### ProofChecked()
- **interface**: `api.events.transactionStorage.ProofChecked.is`
- **summary**:    Storage proof was successfully checked. 
 
### Renewed(`u32`)
- **interface**: `api.events.transactionStorage.Renewed.is`
- **summary**:    Renewed data under specified index. 
 
### Stored(`u32`)
- **interface**: `api.events.transactionStorage.Stored.is`
- **summary**:    Stored data under specified index. 

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


## whitelist
 
### CallWhitelisted(`H256`)
- **interface**: `api.events.whitelist.CallWhitelisted.is`
 
### WhitelistedCallDispatched(`H256`, `Result<FrameSupportWeightsPostDispatchInfo, SpRuntimeDispatchErrorWithPostInfo>`)
- **interface**: `api.events.whitelist.WhitelistedCallDispatched.is`
 
### WhitelistedCallRemoved(`H256`)
- **interface**: `api.events.whitelist.WhitelistedCallRemoved.is`
