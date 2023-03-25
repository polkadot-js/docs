---
title: Events
---

Events are emitted for certain operations on the runtime. The following sections describe the events that are part of the default Substrate runtime. 

(NOTE: These were generated from a static/snapshot view of a recent default Substrate runtime. Some items may not be available in older nodes, or in any customized implementations.)

- **[alliance](#alliance)**

- **[allianceMotion](#alliancemotion)**

- **[assets](#assets)**

- **[assetTxPayment](#assettxpayment)**

- **[balances](#balances)**

- **[bounties](#bounties)**

- **[childBounties](#childbounties)**

- **[contracts](#contracts)**

- **[convictionVoting](#convictionvoting)**

- **[coreFellowship](#corefellowship)**

- **[council](#council)**

- **[democracy](#democracy)**

- **[electionProviderMultiPhase](#electionprovidermultiphase)**

- **[elections](#elections)**

- **[fastUnstake](#fastunstake)**

- **[glutton](#glutton)**

- **[grandpa](#grandpa)**

- **[identity](#identity)**

- **[imOnline](#imonline)**

- **[indices](#indices)**

- **[lottery](#lottery)**

- **[messageQueue](#messagequeue)**

- **[multisig](#multisig)**

- **[nfts](#nfts)**

- **[nis](#nis)**

- **[nominationPools](#nominationpools)**

- **[offences](#offences)**

- **[pov](#pov)**

- **[preimage](#preimage)**

- **[proxy](#proxy)**

- **[rankedCollective](#rankedcollective)**

- **[rankedPolls](#rankedpolls)**

- **[recovery](#recovery)**

- **[referenda](#referenda)**

- **[remark](#remark)**

- **[salary](#salary)**

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

- **[voterList](#voterlist)**

- **[whitelist](#whitelist)**


___


## alliance
 
### AllianceDisbanded(`u32`, `u32`, `u32`)
- **interface**: `api.events.alliance.AllianceDisbanded.is`
- **summary**:    Alliance disbanded. Includes number deleted members and unreserved deposits. 
 
### AllyElevated(`AccountId32`)
- **interface**: `api.events.alliance.AllyElevated.is`
- **summary**:    An ally has been elevated to Fellow. 
 
### Announced(`PalletAllianceCid`)
- **interface**: `api.events.alliance.Announced.is`
- **summary**:    A new announcement has been proposed. 
 
### AnnouncementRemoved(`PalletAllianceCid`)
- **interface**: `api.events.alliance.AnnouncementRemoved.is`
- **summary**:    An on-chain announcement has been removed. 
 
### FellowAbdicated(`AccountId32`)
- **interface**: `api.events.alliance.FellowAbdicated.is`
- **summary**:    A Fellow abdicated their voting rights. They are now an Ally. 
 
### MemberKicked(`AccountId32`, `Option<u128>`)
- **interface**: `api.events.alliance.MemberKicked.is`
- **summary**:    A member has been kicked out with its deposit slashed. 
 
### MemberRetired(`AccountId32`, `Option<u128>`)
- **interface**: `api.events.alliance.MemberRetired.is`
- **summary**:    A member has retired with its deposit unreserved. 
 
### MemberRetirementPeriodStarted(`AccountId32`)
- **interface**: `api.events.alliance.MemberRetirementPeriodStarted.is`
- **summary**:    A member gave retirement notice and their retirement period started. 
 
### MembersInitialized(`Vec<AccountId32>`, `Vec<AccountId32>`)
- **interface**: `api.events.alliance.MembersInitialized.is`
- **summary**:    Some accounts have been initialized as members (fellows/allies). 
 
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
 
### Burned(`u32`, `AccountId32`, `u128`)
- **interface**: `api.events.assets.Burned.is`
- **summary**:    Some assets were destroyed. 
 
### Created(`u32`, `AccountId32`, `AccountId32`)
- **interface**: `api.events.assets.Created.is`
- **summary**:    Some asset class was created. 
 
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
 
### Transferred(`u32`, `AccountId32`, `AccountId32`, `u128`)
- **interface**: `api.events.assets.Transferred.is`
- **summary**:    Some assets were transferred. 
 
### TransferredApproved(`u32`, `AccountId32`, `AccountId32`, `AccountId32`, `u128`)
- **interface**: `api.events.assets.TransferredApproved.is`
- **summary**:    An `amount` was transferred in its entirety from `owner` to `destination` by  the approved `delegate`. 

___


## assetTxPayment
 
### AssetTxFeePaid(`AccountId32`, `u128`, `u128`, `Option<u32>`)
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


## contracts
 
### Called(`AccountId32`, `AccountId32`)
- **interface**: `api.events.contracts.Called.is`
- **summary**:    A contract was called either by a plain account or another contract. 

   #### Note 

   Please keep in mind that like all events this is only emitted for successful  calls. This is because on failure all storage changes including events are  rolled back. 
 
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
 
### DelegateCalled(`AccountId32`, `H256`)
- **interface**: `api.events.contracts.DelegateCalled.is`
- **summary**:    A contract delegate called a code hash. 

   #### Note 

   Please keep in mind that like all events this is only emitted for successful  calls. This is because on failure all storage changes including events are  rolled back. 
 
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


## coreFellowship
 
### ActiveChanged(`AccountId32`, `bool`)
- **interface**: `api.events.coreFellowship.ActiveChanged.is`
- **summary**:    Member activity flag has been set. 
 
### Demoted(`AccountId32`, `u16`)
- **interface**: `api.events.coreFellowship.Demoted.is`
- **summary**:    Member has been demoted to the given (non-zero) rank. 
 
### EvidenceJudged(`AccountId32`, `PalletCoreFellowshipWish`, `Bytes`, `u16`, `Option<u16>`)
- **interface**: `api.events.coreFellowship.EvidenceJudged.is`
- **summary**:    Some submitted evidence was judged and removed. There may or may not have been a change  to the rank, but in any case, `last_proof` is reset. 
 
### Imported(`AccountId32`, `u16`)
- **interface**: `api.events.coreFellowship.Imported.is`
- **summary**:    Pre-ranked account has been inducted at their current rank. 
 
### Inducted(`AccountId32`)
- **interface**: `api.events.coreFellowship.Inducted.is`
- **summary**:    Member has begun being tracked in this pallet. 
 
### Offboarded(`AccountId32`)
- **interface**: `api.events.coreFellowship.Offboarded.is`
- **summary**:    Member has been removed from being tracked in this pallet (i.e. because rank is now  zero). 
 
### ParamsChanged(`PalletCoreFellowshipParamsType`)
- **interface**: `api.events.coreFellowship.ParamsChanged.is`
- **summary**:    Parameters for the pallet have changed. 
 
### Promoted(`AccountId32`, `u16`)
- **interface**: `api.events.coreFellowship.Promoted.is`
- **summary**:    Member has been promoted to the given rank. 
 
### Proven(`AccountId32`, `u16`)
- **interface**: `api.events.coreFellowship.Proven.is`
- **summary**:    Member has been proven at their current rank, postponing auto-demotion. 
 
### Requested(`AccountId32`, `PalletCoreFellowshipWish`)
- **interface**: `api.events.coreFellowship.Requested.is`
- **summary**:    Member has stated evidence of their efforts their request for rank. 

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


## glutton
 
### ComputationLimitSet(`Perbill`)
- **interface**: `api.events.glutton.ComputationLimitSet.is`
- **summary**:    The computation limit has been updated by root. 
 
### PalletInitialized(`bool`)
- **interface**: `api.events.glutton.PalletInitialized.is`
- **summary**:    The pallet has been (re)initialized by root. 
 
### StorageLimitSet(`Perbill`)
- **interface**: `api.events.glutton.StorageLimitSet.is`
- **summary**:    The storage limit has been updated by root. 

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


## messageQueue
 
### Discarded(`H256`)
- **interface**: `api.events.messageQueue.Discarded.is`
- **summary**:    Message discarded due to an inability to decode the item. Usually caused by state  corruption. 
 
### OverweightEnqueued(`H256`, `u32`, `u32`, `u32`)
- **interface**: `api.events.messageQueue.OverweightEnqueued.is`
- **summary**:    Message placed in overweight queue. 
 
### PageReaped(`u32`, `u32`)
- **interface**: `api.events.messageQueue.PageReaped.is`
- **summary**:    This page was reaped. 
 
### Processed(`H256`, `u32`, `SpWeightsWeightV2Weight`, `bool`)
- **interface**: `api.events.messageQueue.Processed.is`
- **summary**:    Message is processed. 
 
### ProcessingFailed(`H256`, `u32`, `FrameSupportMessagesProcessMessageError`)
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
 
### NextCollectionIdIncremented(`u32`)
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


## nis
 
### BidDropped(`AccountId32`, `u128`, `u32`)
- **interface**: `api.events.nis.BidDropped.is`
- **summary**:    A bid was dropped from a queue because of another, more substantial, bid was present. 
 
### BidPlaced(`AccountId32`, `u128`, `u32`)
- **interface**: `api.events.nis.BidPlaced.is`
- **summary**:    A bid was successfully placed. 
 
### BidRetracted(`AccountId32`, `u128`, `u32`)
- **interface**: `api.events.nis.BidRetracted.is`
- **summary**:    A bid was successfully removed (before being accepted). 
 
### Funded(`u128`)
- **interface**: `api.events.nis.Funded.is`
- **summary**:    An automatic funding of the deficit was made. 
 
### Issued(`u32`, `u32`, `AccountId32`, `Perquintill`, `u128`)
- **interface**: `api.events.nis.Issued.is`
- **summary**:    A bid was accepted. The balance may not be released until expiry. 
 
### Thawed(`u32`, `AccountId32`, `Perquintill`, `u128`, `bool`)
- **interface**: `api.events.nis.Thawed.is`
- **summary**:    An receipt has been (at least partially) thawed. 
 
### Transferred(`AccountId32`, `AccountId32`, `u32`)
- **interface**: `api.events.nis.Transferred.is`
- **summary**:    A receipt was transfered. 

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


## pov
 
### TestEvent()
- **interface**: `api.events.pov.TestEvent.is`

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
 
### ProxyAdded(`AccountId32`, `AccountId32`, `KitchensinkRuntimeProxyType`, `u32`)
- **interface**: `api.events.proxy.ProxyAdded.is`
- **summary**:    A proxy was added. 
 
### ProxyExecuted(`Result<Null, SpRuntimeDispatchError>`)
- **interface**: `api.events.proxy.ProxyExecuted.is`
- **summary**:    A proxy was executed correctly, with the given. 
 
### ProxyRemoved(`AccountId32`, `AccountId32`, `KitchensinkRuntimeProxyType`, `u32`)
- **interface**: `api.events.proxy.ProxyRemoved.is`
- **summary**:    A proxy was removed. 
 
### PureCreated(`AccountId32`, `AccountId32`, `KitchensinkRuntimeProxyType`, `u16`)
- **interface**: `api.events.proxy.PureCreated.is`
- **summary**:    A pure account has been created by new proxy with given  disambiguation index and proxy type. 

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
- **summary**:    The member `who`se rank has been changed to the given `rank`. 
 
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
 
### DecisionStarted(`u32`, `u16`, `FrameSupportPreimagesBounded`, `PalletRankedCollectiveTally`)
- **interface**: `api.events.rankedPolls.DecisionStarted.is`
- **summary**:    A referendum has moved into the deciding phase. 
 
### DepositSlashed(`AccountId32`, `u128`)
- **interface**: `api.events.rankedPolls.DepositSlashed.is`
- **summary**:    A deposit has been slashaed. 
 
### Killed(`u32`, `PalletRankedCollectiveTally`)
- **interface**: `api.events.rankedPolls.Killed.is`
- **summary**:    A referendum has been killed. 
 
### MetadataCleared(`u32`, `H256`)
- **interface**: `api.events.rankedPolls.MetadataCleared.is`
- **summary**:    Metadata for a referendum has been cleared. 
 
### MetadataSet(`u32`, `H256`)
- **interface**: `api.events.rankedPolls.MetadataSet.is`
- **summary**:    Metadata for a referendum has been set. 
 
### Rejected(`u32`, `PalletRankedCollectiveTally`)
- **interface**: `api.events.rankedPolls.Rejected.is`
- **summary**:    A proposal has been rejected by referendum. 
 
### SubmissionDepositRefunded(`u32`, `AccountId32`, `u128`)
- **interface**: `api.events.rankedPolls.SubmissionDepositRefunded.is`
- **summary**:    The submission deposit has been refunded. 
 
### Submitted(`u32`, `u16`, `FrameSupportPreimagesBounded`)
- **interface**: `api.events.rankedPolls.Submitted.is`
- **summary**:    A referendum has been submitted. 
 
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


## remark
 
### Stored(`AccountId32`, `H256`)
- **interface**: `api.events.remark.Stored.is`
- **summary**:    Stored data off chain. 

___


## salary
 
### CycleStarted(`u32`)
- **interface**: `api.events.salary.CycleStarted.is`
- **summary**:    The next cycle begins. 
 
### Inducted(`AccountId32`)
- **interface**: `api.events.salary.Inducted.is`
- **summary**:    A member is inducted into the payroll. 
 
### Paid(`AccountId32`, `AccountId32`, `u128`, `Null`)
- **interface**: `api.events.salary.Paid.is`
- **summary**:    A payment happened. 
 
### Registered(`AccountId32`, `u128`)
- **interface**: `api.events.salary.Registered.is`
- **summary**:    A member registered for a payout. 

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
 
### SkepticsChosen(`Vec<AccountId32>`)
- **interface**: `api.events.society.SkepticsChosen.is`
- **summary**:    A group of members has been choosen as Skeptics 
 
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
