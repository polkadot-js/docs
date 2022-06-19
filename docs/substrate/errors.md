---
title: Errors
---

This page lists the errors that can be encountered in the different modules. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[alliance](#alliance)**

- **[allianceMotion](#alliancemotion)**

- **[assets](#assets)**

- **[authorship](#authorship)**

- **[babe](#babe)**

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

- **[transactionStorage](#transactionstorage)**

- **[treasury](#treasury)**

- **[uniques](#uniques)**

- **[utility](#utility)**

- **[vesting](#vesting)**

- **[whitelist](#whitelist)**


___


## alliance
 
### AccountNonGrata
- **interface**: `api.errors.alliance.AccountNonGrata.is`
- **summary**:    Account has been deemed unscrupulous by the Alliance and is not welcome to join or be  nominated. 
 
### AlreadyElevated
- **interface**: `api.errors.alliance.AlreadyElevated.is`
- **summary**:    Account is already an elevated (fellow) member. 
 
### AlreadyMember
- **interface**: `api.errors.alliance.AlreadyMember.is`
- **summary**:    Account is already a member. 
 
### AlreadyUnscrupulous
- **interface**: `api.errors.alliance.AlreadyUnscrupulous.is`
- **summary**:    Item is already listed as unscrupulous. 
 
### InsufficientFunds
- **interface**: `api.errors.alliance.InsufficientFunds.is`
- **summary**:    Balance is insufficient for the required deposit. 
 
### MembersAlreadyInitialized
- **interface**: `api.errors.alliance.MembersAlreadyInitialized.is`
- **summary**:    The founders/fellows/allies have already been initialized. 
 
### MissingAnnouncement
- **interface**: `api.errors.alliance.MissingAnnouncement.is`
- **summary**:    The announcement is not found. 
 
### MissingProposalHash
- **interface**: `api.errors.alliance.MissingProposalHash.is`
- **summary**:    The proposal hash is not found. 
 
### NotAlly
- **interface**: `api.errors.alliance.NotAlly.is`
- **summary**:    Account is not an ally. 
 
### NotFounder
- **interface**: `api.errors.alliance.NotFounder.is`
- **summary**:    Account is not a founder. 
 
### NotListedAsUnscrupulous
- **interface**: `api.errors.alliance.NotListedAsUnscrupulous.is`
- **summary**:    Item has not been deemed unscrupulous. 
 
### NotMember
- **interface**: `api.errors.alliance.NotMember.is`
- **summary**:    Account is not a member. 
 
### NotVetoableProposal
- **interface**: `api.errors.alliance.NotVetoableProposal.is`
- **summary**:    The proposal is not vetoable. 
 
### NoVotingRights
- **interface**: `api.errors.alliance.NoVotingRights.is`
- **summary**:    Account does not have voting rights. 
 
### TooLongWebsiteUrl
- **interface**: `api.errors.alliance.TooLongWebsiteUrl.is`
- **summary**:    Length of website URL exceeds `MaxWebsiteUrlLength`. 
 
### TooManyAnnouncements
- **interface**: `api.errors.alliance.TooManyAnnouncements.is`
- **summary**:    Number of announcements exceeds `MaxAnnouncementsCount`. 
 
### TooManyMembers
- **interface**: `api.errors.alliance.TooManyMembers.is`
- **summary**:    Number of members exceeds `MaxMembersCount`. 
 
### TooManyUnscrupulousItems
- **interface**: `api.errors.alliance.TooManyUnscrupulousItems.is`
- **summary**:    The number of unscrupulous items exceeds `MaxUnscrupulousItems`. 
 
### UpForKicking
- **interface**: `api.errors.alliance.UpForKicking.is`
- **summary**:    This member is up for being kicked from the Alliance and cannot perform this operation. 
 
### WithoutGoodIdentityJudgement
- **interface**: `api.errors.alliance.WithoutGoodIdentityJudgement.is`
- **summary**:    The account's identity has no good judgement. 
 
### WithoutIdentityDisplayAndWebsite
- **interface**: `api.errors.alliance.WithoutIdentityDisplayAndWebsite.is`
- **summary**:    The account's identity does not have display field and website field. 

___


## allianceMotion
 
### AlreadyInitialized
- **interface**: `api.errors.allianceMotion.AlreadyInitialized.is`
- **summary**:    Members are already initialized! 
 
### DuplicateProposal
- **interface**: `api.errors.allianceMotion.DuplicateProposal.is`
- **summary**:    Duplicate proposals not allowed 
 
### DuplicateVote
- **interface**: `api.errors.allianceMotion.DuplicateVote.is`
- **summary**:    Duplicate vote ignored 
 
### NotMember
- **interface**: `api.errors.allianceMotion.NotMember.is`
- **summary**:    Account is not a member 
 
### ProposalMissing
- **interface**: `api.errors.allianceMotion.ProposalMissing.is`
- **summary**:    Proposal must exist 
 
### TooEarly
- **interface**: `api.errors.allianceMotion.TooEarly.is`
- **summary**:    The close call was made too early, before the end of the voting. 
 
### TooManyProposals
- **interface**: `api.errors.allianceMotion.TooManyProposals.is`
- **summary**:    There can only be a maximum of `MaxProposals` active proposals. 
 
### WrongIndex
- **interface**: `api.errors.allianceMotion.WrongIndex.is`
- **summary**:    Mismatched index 
 
### WrongProposalLength
- **interface**: `api.errors.allianceMotion.WrongProposalLength.is`
- **summary**:    The given length bound for the proposal was too low. 
 
### WrongProposalWeight
- **interface**: `api.errors.allianceMotion.WrongProposalWeight.is`
- **summary**:    The given weight bound for the proposal was too low. 

___


## assets
 
### AlreadyExists
- **interface**: `api.errors.assets.AlreadyExists.is`
- **summary**:    The asset-account already exists. 
 
### BadMetadata
- **interface**: `api.errors.assets.BadMetadata.is`
- **summary**:    Invalid metadata given. 
 
### BadWitness
- **interface**: `api.errors.assets.BadWitness.is`
- **summary**:    Invalid witness data given. 
 
### BalanceLow
- **interface**: `api.errors.assets.BalanceLow.is`
- **summary**:    Account balance must be greater than or equal to the transfer amount. 
 
### Frozen
- **interface**: `api.errors.assets.Frozen.is`
- **summary**:    The origin account is frozen. 
 
### InUse
- **interface**: `api.errors.assets.InUse.is`
- **summary**:    The asset ID is already taken. 
 
### MinBalanceZero
- **interface**: `api.errors.assets.MinBalanceZero.is`
- **summary**:    Minimum balance should be non-zero. 
 
### NoAccount
- **interface**: `api.errors.assets.NoAccount.is`
- **summary**:    The account to alter does not exist. 
 
### NoDeposit
- **interface**: `api.errors.assets.NoDeposit.is`
- **summary**:    The asset-account doesn't have an associated deposit. 
 
### NoPermission
- **interface**: `api.errors.assets.NoPermission.is`
- **summary**:    The signing account has no permission to do the operation. 
 
### NoProvider
- **interface**: `api.errors.assets.NoProvider.is`
- **summary**:    Unable to increment the consumer reference counters on the account. Either no provider  reference exists to allow a non-zero balance of a non-self-sufficient asset, or the  maximum number of consumers has been reached. 
 
### Unapproved
- **interface**: `api.errors.assets.Unapproved.is`
- **summary**:    No approval exists that would allow the transfer. 
 
### Unknown
- **interface**: `api.errors.assets.Unknown.is`
- **summary**:    The given asset ID is unknown. 
 
### WouldBurn
- **interface**: `api.errors.assets.WouldBurn.is`
- **summary**:    The operation would result in funds being burned. 
 
### WouldDie
- **interface**: `api.errors.assets.WouldDie.is`
- **summary**:    The source account would not survive the transfer and it needs to stay alive. 

___


## authorship
 
### GenesisUncle
- **interface**: `api.errors.authorship.GenesisUncle.is`
- **summary**:    The uncle is genesis. 
 
### InvalidUncleParent
- **interface**: `api.errors.authorship.InvalidUncleParent.is`
- **summary**:    The uncle parent not in the chain. 
 
### OldUncle
- **interface**: `api.errors.authorship.OldUncle.is`
- **summary**:    The uncle isn't recent enough to be included. 
 
### TooHighUncle
- **interface**: `api.errors.authorship.TooHighUncle.is`
- **summary**:    The uncle is too high in chain. 
 
### TooManyUncles
- **interface**: `api.errors.authorship.TooManyUncles.is`
- **summary**:    Too many uncles. 
 
### UncleAlreadyIncluded
- **interface**: `api.errors.authorship.UncleAlreadyIncluded.is`
- **summary**:    The uncle is already included. 
 
### UnclesAlreadySet
- **interface**: `api.errors.authorship.UnclesAlreadySet.is`
- **summary**:    Uncles already set in the block. 

___


## babe
 
### DuplicateOffenceReport
- **interface**: `api.errors.babe.DuplicateOffenceReport.is`
- **summary**:    A given equivocation report is valid but already previously reported. 
 
### InvalidConfiguration
- **interface**: `api.errors.babe.InvalidConfiguration.is`
- **summary**:    Submitted configuration is invalid. 
 
### InvalidEquivocationProof
- **interface**: `api.errors.babe.InvalidEquivocationProof.is`
- **summary**:    An equivocation proof provided as part of an equivocation report is invalid. 
 
### InvalidKeyOwnershipProof
- **interface**: `api.errors.babe.InvalidKeyOwnershipProof.is`
- **summary**:    A key ownership proof provided as part of an equivocation report is invalid. 

___


## bagsList
 
### List
- **interface**: `api.errors.bagsList.List.is`
- **summary**:    A error in the list interface implementation. 

___


## balances
 
### DeadAccount
- **interface**: `api.errors.balances.DeadAccount.is`
- **summary**:    Beneficiary account must pre-exist 
 
### ExistentialDeposit
- **interface**: `api.errors.balances.ExistentialDeposit.is`
- **summary**:    Value too low to create account due to existential deposit 
 
### ExistingVestingSchedule
- **interface**: `api.errors.balances.ExistingVestingSchedule.is`
- **summary**:    A vesting schedule already exists for this account 
 
### InsufficientBalance
- **interface**: `api.errors.balances.InsufficientBalance.is`
- **summary**:    Balance too low to send value 
 
### KeepAlive
- **interface**: `api.errors.balances.KeepAlive.is`
- **summary**:    Transfer/payment would kill account 
 
### LiquidityRestrictions
- **interface**: `api.errors.balances.LiquidityRestrictions.is`
- **summary**:    Account liquidity restrictions prevent withdrawal 
 
### TooManyReserves
- **interface**: `api.errors.balances.TooManyReserves.is`
- **summary**:    Number of named reserves exceed MaxReserves 
 
### VestingBalance
- **interface**: `api.errors.balances.VestingBalance.is`
- **summary**:    Vesting balance too high to send value 

___


## bounties
 
### HasActiveChildBounty
- **interface**: `api.errors.bounties.HasActiveChildBounty.is`
- **summary**:    The bounty cannot be closed because it has active child bounties. 
 
### InsufficientProposersBalance
- **interface**: `api.errors.bounties.InsufficientProposersBalance.is`
- **summary**:    Proposer's balance is too low. 
 
### InvalidFee
- **interface**: `api.errors.bounties.InvalidFee.is`
- **summary**:    Invalid bounty fee. 
 
### InvalidIndex
- **interface**: `api.errors.bounties.InvalidIndex.is`
- **summary**:    No proposal or bounty at that index. 
 
### InvalidValue
- **interface**: `api.errors.bounties.InvalidValue.is`
- **summary**:    Invalid bounty value. 
 
### PendingPayout
- **interface**: `api.errors.bounties.PendingPayout.is`
- **summary**:    A bounty payout is pending.  To cancel the bounty, you must unassign and slash the curator. 
 
### Premature
- **interface**: `api.errors.bounties.Premature.is`
- **summary**:    The bounties cannot be claimed/closed because it's still in the countdown period. 
 
### ReasonTooBig
- **interface**: `api.errors.bounties.ReasonTooBig.is`
- **summary**:    The reason given is just too big. 
 
### RequireCurator
- **interface**: `api.errors.bounties.RequireCurator.is`
- **summary**:    Require bounty curator. 
 
### TooManyQueued
- **interface**: `api.errors.bounties.TooManyQueued.is`
- **summary**:    Too many approvals are already queued. 
 
### UnexpectedStatus
- **interface**: `api.errors.bounties.UnexpectedStatus.is`
- **summary**:    The bounty status is unexpected. 

___


## childBounties
 
### InsufficientBountyBalance
- **interface**: `api.errors.childBounties.InsufficientBountyBalance.is`
- **summary**:    The bounty balance is not enough to add new child-bounty. 
 
### ParentBountyNotActive
- **interface**: `api.errors.childBounties.ParentBountyNotActive.is`
- **summary**:    The parent bounty is not in active state. 
 
### TooManyChildBounties
- **interface**: `api.errors.childBounties.TooManyChildBounties.is`
- **summary**:    Number of child bounties exceeds limit `MaxActiveChildBountyCount`. 

___


## contracts
 
### CodeInUse
- **interface**: `api.errors.contracts.CodeInUse.is`
- **summary**:    Code removal was denied because the code is still in use by at least one contract. 
 
### CodeNotFound
- **interface**: `api.errors.contracts.CodeNotFound.is`
- **summary**:    No code could be found at the supplied code hash. 
 
### CodeRejected
- **interface**: `api.errors.contracts.CodeRejected.is`
- **summary**:    The contract's code was found to be invalid during validation or instrumentation.  A more detailed error can be found on the node console if debug messages are enabled  or in the debug buffer which is returned to RPC clients. 
 
### CodeTooLarge
- **interface**: `api.errors.contracts.CodeTooLarge.is`
- **summary**:    The code supplied to `instantiate_with_code` exceeds the limit specified in the  current schedule. 
 
### ContractNotFound
- **interface**: `api.errors.contracts.ContractNotFound.is`
- **summary**:    No contract was found at the specified address. 
 
### ContractReverted
- **interface**: `api.errors.contracts.ContractReverted.is`
- **summary**:    The contract ran to completion but decided to revert its storage changes.  Please note that this error is only returned from extrinsics. When called directly  or via RPC an `Ok` will be returned. In this case the caller needs to inspect the flags  to determine whether a reversion has taken place. 
 
### ContractTrapped
- **interface**: `api.errors.contracts.ContractTrapped.is`
- **summary**:    Contract trapped during execution. 
 
### DebugMessageInvalidUTF8
- **interface**: `api.errors.contracts.DebugMessageInvalidUTF8.is`
- **summary**:    The debug message specified to `seal_debug_message` does contain invalid UTF-8. 
 
### DecodingFailed
- **interface**: `api.errors.contracts.DecodingFailed.is`
- **summary**:    Input passed to a contract API function failed to decode as expected type. 
 
### DeletionQueueFull
- **interface**: `api.errors.contracts.DeletionQueueFull.is`
- **summary**:    Removal of a contract failed because the deletion queue is full. 

   This can happen when calling `seal_terminate`.  The queue is filled by deleting contracts and emptied by a fixed amount each block.  Trying again during another block is the only way to resolve this issue. 
 
### DuplicateContract
- **interface**: `api.errors.contracts.DuplicateContract.is`
- **summary**:    A contract with the same AccountId already exists. 
 
### DuplicateTopics
- **interface**: `api.errors.contracts.DuplicateTopics.is`
- **summary**:    The topics passed to `seal_deposit_events` contains at least one duplicate. 
 
### InputForwarded
- **interface**: `api.errors.contracts.InputForwarded.is`
- **summary**:    `seal_call` forwarded this contracts input. It therefore is no longer available. 
 
### InvalidCallFlags
- **interface**: `api.errors.contracts.InvalidCallFlags.is`
- **summary**:    Invalid combination of flags supplied to `seal_call` or `seal_delegate_call`. 
 
### InvalidScheduleVersion
- **interface**: `api.errors.contracts.InvalidScheduleVersion.is`
- **summary**:    A new schedule must have a greater version than the current one. 
 
### MaxCallDepthReached
- **interface**: `api.errors.contracts.MaxCallDepthReached.is`
- **summary**:    Performing a call was denied because the calling depth reached the limit  of what is specified in the schedule. 
 
### NoChainExtension
- **interface**: `api.errors.contracts.NoChainExtension.is`
- **summary**:    The chain does not provide a chain extension. Calling the chain extension results  in this error. Note that this usually  shouldn't happen as deploying such contracts  is rejected. 
 
### OutOfBounds
- **interface**: `api.errors.contracts.OutOfBounds.is`
- **summary**:    A buffer outside of sandbox memory was passed to a contract API function. 
 
### OutOfGas
- **interface**: `api.errors.contracts.OutOfGas.is`
- **summary**:    The executed contract exhausted its gas limit. 
 
### OutputBufferTooSmall
- **interface**: `api.errors.contracts.OutputBufferTooSmall.is`
- **summary**:    The output buffer supplied to a contract API call was too small. 
 
### RandomSubjectTooLong
- **interface**: `api.errors.contracts.RandomSubjectTooLong.is`
- **summary**:    The subject passed to `seal_random` exceeds the limit. 
 
### ReentranceDenied
- **interface**: `api.errors.contracts.ReentranceDenied.is`
- **summary**:    A call tried to invoke a contract that is flagged as non-reentrant. 
 
### StorageDepositLimitExhausted
- **interface**: `api.errors.contracts.StorageDepositLimitExhausted.is`
- **summary**:    More storage was created than allowed by the storage deposit limit. 
 
### StorageDepositNotEnoughFunds
- **interface**: `api.errors.contracts.StorageDepositNotEnoughFunds.is`
- **summary**:    Origin doesn't have enough balance to pay the required storage deposits. 
 
### TerminatedInConstructor
- **interface**: `api.errors.contracts.TerminatedInConstructor.is`
- **summary**:    A contract self destructed in its constructor. 

   This can be triggered by a call to `seal_terminate`. 
 
### TerminatedWhileReentrant
- **interface**: `api.errors.contracts.TerminatedWhileReentrant.is`
- **summary**:    Termination of a contract is not allowed while the contract is already  on the call stack. Can be triggered by `seal_terminate`. 
 
### TooManyTopics
- **interface**: `api.errors.contracts.TooManyTopics.is`
- **summary**:    The amount of topics passed to `seal_deposit_events` exceeds the limit. 
 
### TransferFailed
- **interface**: `api.errors.contracts.TransferFailed.is`
- **summary**:    Performing the requested transfer failed. Probably because there isn't enough  free balance in the sender's account. 
 
### ValueTooLarge
- **interface**: `api.errors.contracts.ValueTooLarge.is`
- **summary**:    The size defined in `T::MaxValueSize` was exceeded. 

___


## convictionVoting
 
### AlreadyDelegating
- **interface**: `api.errors.convictionVoting.AlreadyDelegating.is`
- **summary**:    The account is already delegating. 
 
### AlreadyVoting
- **interface**: `api.errors.convictionVoting.AlreadyVoting.is`
- **summary**:    The account currently has votes attached to it and the operation cannot succeed until  these are removed, either through `unvote` or `reap_vote`. 
 
### BadClass
- **interface**: `api.errors.convictionVoting.BadClass.is`
- **summary**:    The class ID supplied is invalid. 
 
### ClassNeeded
- **interface**: `api.errors.convictionVoting.ClassNeeded.is`
- **summary**:    The class must be supplied since it is not easily determinable from the state. 
 
### InsufficientFunds
- **interface**: `api.errors.convictionVoting.InsufficientFunds.is`
- **summary**:    Too high a balance was provided that the account cannot afford. 
 
### MaxVotesReached
- **interface**: `api.errors.convictionVoting.MaxVotesReached.is`
- **summary**:    Maximum number of votes reached. 
 
### Nonsense
- **interface**: `api.errors.convictionVoting.Nonsense.is`
- **summary**:    Delegation to oneself makes no sense. 
 
### NoPermission
- **interface**: `api.errors.convictionVoting.NoPermission.is`
- **summary**:    The actor has no permission to conduct the action. 
 
### NoPermissionYet
- **interface**: `api.errors.convictionVoting.NoPermissionYet.is`
- **summary**:    The actor has no permission to conduct the action right now but will do in the future. 
 
### NotDelegating
- **interface**: `api.errors.convictionVoting.NotDelegating.is`
- **summary**:    The account is not currently delegating. 
 
### NotOngoing
- **interface**: `api.errors.convictionVoting.NotOngoing.is`
- **summary**:    Poll is not ongoing. 
 
### NotVoter
- **interface**: `api.errors.convictionVoting.NotVoter.is`
- **summary**:    The given account did not vote on the poll. 

___


## council
 
### AlreadyInitialized
- **interface**: `api.errors.council.AlreadyInitialized.is`
- **summary**:    Members are already initialized! 
 
### DuplicateProposal
- **interface**: `api.errors.council.DuplicateProposal.is`
- **summary**:    Duplicate proposals not allowed 
 
### DuplicateVote
- **interface**: `api.errors.council.DuplicateVote.is`
- **summary**:    Duplicate vote ignored 
 
### NotMember
- **interface**: `api.errors.council.NotMember.is`
- **summary**:    Account is not a member 
 
### ProposalMissing
- **interface**: `api.errors.council.ProposalMissing.is`
- **summary**:    Proposal must exist 
 
### TooEarly
- **interface**: `api.errors.council.TooEarly.is`
- **summary**:    The close call was made too early, before the end of the voting. 
 
### TooManyProposals
- **interface**: `api.errors.council.TooManyProposals.is`
- **summary**:    There can only be a maximum of `MaxProposals` active proposals. 
 
### WrongIndex
- **interface**: `api.errors.council.WrongIndex.is`
- **summary**:    Mismatched index 
 
### WrongProposalLength
- **interface**: `api.errors.council.WrongProposalLength.is`
- **summary**:    The given length bound for the proposal was too low. 
 
### WrongProposalWeight
- **interface**: `api.errors.council.WrongProposalWeight.is`
- **summary**:    The given weight bound for the proposal was too low. 

___


## democracy
 
### AlreadyCanceled
- **interface**: `api.errors.democracy.AlreadyCanceled.is`
- **summary**:    Cannot cancel the same proposal twice 
 
### AlreadyDelegating
- **interface**: `api.errors.democracy.AlreadyDelegating.is`
- **summary**:    The account is already delegating. 
 
### AlreadyVetoed
- **interface**: `api.errors.democracy.AlreadyVetoed.is`
- **summary**:    Identity may not veto a proposal twice 
 
### DuplicatePreimage
- **interface**: `api.errors.democracy.DuplicatePreimage.is`
- **summary**:    Preimage already noted 
 
### DuplicateProposal
- **interface**: `api.errors.democracy.DuplicateProposal.is`
- **summary**:    Proposal already made 
 
### Imminent
- **interface**: `api.errors.democracy.Imminent.is`
- **summary**:    Imminent 
 
### InstantNotAllowed
- **interface**: `api.errors.democracy.InstantNotAllowed.is`
- **summary**:    The instant referendum origin is currently disallowed. 
 
### InsufficientFunds
- **interface**: `api.errors.democracy.InsufficientFunds.is`
- **summary**:    Too high a balance was provided that the account cannot afford. 
 
### InvalidHash
- **interface**: `api.errors.democracy.InvalidHash.is`
- **summary**:    Invalid hash 
 
### MaxVotesReached
- **interface**: `api.errors.democracy.MaxVotesReached.is`
- **summary**:    Maximum number of votes reached. 
 
### NoneWaiting
- **interface**: `api.errors.democracy.NoneWaiting.is`
- **summary**:    No proposals waiting 
 
### Nonsense
- **interface**: `api.errors.democracy.Nonsense.is`
- **summary**:    Delegation to oneself makes no sense. 
 
### NoPermission
- **interface**: `api.errors.democracy.NoPermission.is`
- **summary**:    The actor has no permission to conduct the action. 
 
### NoProposal
- **interface**: `api.errors.democracy.NoProposal.is`
- **summary**:    No external proposal 
 
### NotDelegating
- **interface**: `api.errors.democracy.NotDelegating.is`
- **summary**:    The account is not currently delegating. 
 
### NotImminent
- **interface**: `api.errors.democracy.NotImminent.is`
- **summary**:    Not imminent 
 
### NotSimpleMajority
- **interface**: `api.errors.democracy.NotSimpleMajority.is`
- **summary**:    Next external proposal not simple majority 
 
### NotVoter
- **interface**: `api.errors.democracy.NotVoter.is`
- **summary**:    The given account did not vote on the referendum. 
 
### PreimageInvalid
- **interface**: `api.errors.democracy.PreimageInvalid.is`
- **summary**:    Invalid preimage 
 
### PreimageMissing
- **interface**: `api.errors.democracy.PreimageMissing.is`
- **summary**:    Preimage not found 
 
### ProposalBlacklisted
- **interface**: `api.errors.democracy.ProposalBlacklisted.is`
- **summary**:    Proposal still blacklisted 
 
### ProposalMissing
- **interface**: `api.errors.democracy.ProposalMissing.is`
- **summary**:    Proposal does not exist 
 
### ReferendumInvalid
- **interface**: `api.errors.democracy.ReferendumInvalid.is`
- **summary**:    Vote given for invalid referendum 
 
### TooEarly
- **interface**: `api.errors.democracy.TooEarly.is`
- **summary**:    Too early 
 
### TooManyProposals
- **interface**: `api.errors.democracy.TooManyProposals.is`
- **summary**:    Maximum number of proposals reached. 
 
### ValueLow
- **interface**: `api.errors.democracy.ValueLow.is`
- **summary**:    Value too low 
 
### VotesExist
- **interface**: `api.errors.democracy.VotesExist.is`
- **summary**:    The account currently has votes attached to it and the operation cannot succeed until  these are removed, either through `unvote` or `reap_vote`. 
 
### WrongUpperBound
- **interface**: `api.errors.democracy.WrongUpperBound.is`
- **summary**:    Invalid upper bound. 

___


## electionProviderMultiPhase
 
### CallNotAllowed
- **interface**: `api.errors.electionProviderMultiPhase.CallNotAllowed.is`
- **summary**:    The call is not allowed at this point. 
 
### FallbackFailed
- **interface**: `api.errors.electionProviderMultiPhase.FallbackFailed.is`
- **summary**:    The fallback failed 
 
### InvalidSubmissionIndex
- **interface**: `api.errors.electionProviderMultiPhase.InvalidSubmissionIndex.is`
- **summary**:    `Self::insert_submission` returned an invalid index. 
 
### MissingSnapshotMetadata
- **interface**: `api.errors.electionProviderMultiPhase.MissingSnapshotMetadata.is`
- **summary**:    Snapshot metadata should exist but didn't. 
 
### OcwCallWrongEra
- **interface**: `api.errors.electionProviderMultiPhase.OcwCallWrongEra.is`
- **summary**:    OCW submitted solution for wrong round 
 
### PreDispatchEarlySubmission
- **interface**: `api.errors.electionProviderMultiPhase.PreDispatchEarlySubmission.is`
- **summary**:    Submission was too early. 
 
### PreDispatchWeakSubmission
- **interface**: `api.errors.electionProviderMultiPhase.PreDispatchWeakSubmission.is`
- **summary**:    Submission was too weak, score-wise. 
 
### PreDispatchWrongWinnerCount
- **interface**: `api.errors.electionProviderMultiPhase.PreDispatchWrongWinnerCount.is`
- **summary**:    Wrong number of winners presented. 
 
### SignedCannotPayDeposit
- **interface**: `api.errors.electionProviderMultiPhase.SignedCannotPayDeposit.is`
- **summary**:    The origin failed to pay the deposit. 
 
### SignedInvalidWitness
- **interface**: `api.errors.electionProviderMultiPhase.SignedInvalidWitness.is`
- **summary**:    Witness data to dispatchable is invalid. 
 
### SignedQueueFull
- **interface**: `api.errors.electionProviderMultiPhase.SignedQueueFull.is`
- **summary**:    The queue was full, and the solution was not better than any of the existing ones. 
 
### SignedTooMuchWeight
- **interface**: `api.errors.electionProviderMultiPhase.SignedTooMuchWeight.is`
- **summary**:    The signed submission consumes too much weight 

___


## elections
 
### DuplicatedCandidate
- **interface**: `api.errors.elections.DuplicatedCandidate.is`
- **summary**:    Duplicated candidate submission. 
 
### InsufficientCandidateFunds
- **interface**: `api.errors.elections.InsufficientCandidateFunds.is`
- **summary**:    Candidate does not have enough funds. 
 
### InvalidRenouncing
- **interface**: `api.errors.elections.InvalidRenouncing.is`
- **summary**:    The renouncing origin presented a wrong `Renouncing` parameter. 
 
### InvalidReplacement
- **interface**: `api.errors.elections.InvalidReplacement.is`
- **summary**:    Prediction regarding replacement after member removal is wrong. 
 
### InvalidVoteCount
- **interface**: `api.errors.elections.InvalidVoteCount.is`
- **summary**:    The provided count of number of votes is incorrect. 
 
### InvalidWitnessData
- **interface**: `api.errors.elections.InvalidWitnessData.is`
- **summary**:    The provided count of number of candidates is incorrect. 
 
### LowBalance
- **interface**: `api.errors.elections.LowBalance.is`
- **summary**:    Cannot vote with stake less than minimum balance. 
 
### MaximumVotesExceeded
- **interface**: `api.errors.elections.MaximumVotesExceeded.is`
- **summary**:    Cannot vote more than maximum allowed. 
 
### MemberSubmit
- **interface**: `api.errors.elections.MemberSubmit.is`
- **summary**:    Member cannot re-submit candidacy. 
 
### MustBeVoter
- **interface**: `api.errors.elections.MustBeVoter.is`
- **summary**:    Must be a voter. 
 
### NotMember
- **interface**: `api.errors.elections.NotMember.is`
- **summary**:    Not a member. 
 
### NoVotes
- **interface**: `api.errors.elections.NoVotes.is`
- **summary**:    Must vote for at least one candidate. 
 
### ReportSelf
- **interface**: `api.errors.elections.ReportSelf.is`
- **summary**:    Cannot report self. 
 
### RunnerUpSubmit
- **interface**: `api.errors.elections.RunnerUpSubmit.is`
- **summary**:    Runner cannot re-submit candidacy. 
 
### TooManyVotes
- **interface**: `api.errors.elections.TooManyVotes.is`
- **summary**:    Cannot vote more than candidates. 
 
### UnableToPayBond
- **interface**: `api.errors.elections.UnableToPayBond.is`
- **summary**:    Voter can not pay voting bond. 
 
### UnableToVote
- **interface**: `api.errors.elections.UnableToVote.is`
- **summary**:    Cannot vote when no candidates or members exist. 

___


## gilt
 
### AmountTooSmall
- **interface**: `api.errors.gilt.AmountTooSmall.is`
- **summary**:    The amount of the bid is less than the minimum allowed. 
 
### BidTooLow
- **interface**: `api.errors.gilt.BidTooLow.is`
- **summary**:    The queue for the bid's duration is full and the amount bid is too low to get in  through replacing an existing bid. 
 
### DurationTooBig
- **interface**: `api.errors.gilt.DurationTooBig.is`
- **summary**:    The duration is the bid is greater than the number of queues. 
 
### DurationTooSmall
- **interface**: `api.errors.gilt.DurationTooSmall.is`
- **summary**:    The duration of the bid is less than one. 
 
### NotExpired
- **interface**: `api.errors.gilt.NotExpired.is`
- **summary**:    Gilt not yet at expiry date. 
 
### NotFound
- **interface**: `api.errors.gilt.NotFound.is`
- **summary**:    The given bid for retraction is not found. 
 
### NotOwner
- **interface**: `api.errors.gilt.NotOwner.is`
- **summary**:    Not the owner of the gilt. 
 
### Unknown
- **interface**: `api.errors.gilt.Unknown.is`
- **summary**:    Gilt index is unknown. 

___


## grandpa
 
### ChangePending
- **interface**: `api.errors.grandpa.ChangePending.is`
- **summary**:    Attempt to signal GRANDPA change with one already pending. 
 
### DuplicateOffenceReport
- **interface**: `api.errors.grandpa.DuplicateOffenceReport.is`
- **summary**:    A given equivocation report is valid but already previously reported. 
 
### InvalidEquivocationProof
- **interface**: `api.errors.grandpa.InvalidEquivocationProof.is`
- **summary**:    An equivocation proof provided as part of an equivocation report is invalid. 
 
### InvalidKeyOwnershipProof
- **interface**: `api.errors.grandpa.InvalidKeyOwnershipProof.is`
- **summary**:    A key ownership proof provided as part of an equivocation report is invalid. 
 
### PauseFailed
- **interface**: `api.errors.grandpa.PauseFailed.is`
- **summary**:    Attempt to signal GRANDPA pause when the authority set isn't live  (either paused or already pending pause). 
 
### ResumeFailed
- **interface**: `api.errors.grandpa.ResumeFailed.is`
- **summary**:    Attempt to signal GRANDPA resume when the authority set isn't paused  (either live or already pending resume). 
 
### TooSoon
- **interface**: `api.errors.grandpa.TooSoon.is`
- **summary**:    Cannot signal forced change so soon after last. 

___


## identity
 
### AlreadyClaimed
- **interface**: `api.errors.identity.AlreadyClaimed.is`
- **summary**:    Account ID is already named. 
 
### EmptyIndex
- **interface**: `api.errors.identity.EmptyIndex.is`
- **summary**:    Empty index. 
 
### FeeChanged
- **interface**: `api.errors.identity.FeeChanged.is`
- **summary**:    Fee is changed. 
 
### InvalidIndex
- **interface**: `api.errors.identity.InvalidIndex.is`
- **summary**:    The index is invalid. 
 
### InvalidJudgement
- **interface**: `api.errors.identity.InvalidJudgement.is`
- **summary**:    Invalid judgement. 
 
### InvalidTarget
- **interface**: `api.errors.identity.InvalidTarget.is`
- **summary**:    The target is invalid. 
 
### JudgementGiven
- **interface**: `api.errors.identity.JudgementGiven.is`
- **summary**:    Judgement given. 
 
### NoIdentity
- **interface**: `api.errors.identity.NoIdentity.is`
- **summary**:    No identity found. 
 
### NotFound
- **interface**: `api.errors.identity.NotFound.is`
- **summary**:    Account isn't found. 
 
### NotNamed
- **interface**: `api.errors.identity.NotNamed.is`
- **summary**:    Account isn't named. 
 
### NotOwned
- **interface**: `api.errors.identity.NotOwned.is`
- **summary**:    Sub-account isn't owned by sender. 
 
### NotSub
- **interface**: `api.errors.identity.NotSub.is`
- **summary**:    Sender is not a sub-account. 
 
### StickyJudgement
- **interface**: `api.errors.identity.StickyJudgement.is`
- **summary**:    Sticky judgement. 
 
### TooManyFields
- **interface**: `api.errors.identity.TooManyFields.is`
- **summary**:    Too many additional fields. 
 
### TooManyRegistrars
- **interface**: `api.errors.identity.TooManyRegistrars.is`
- **summary**:    Maximum amount of registrars reached. Cannot add any more. 
 
### TooManySubAccounts
- **interface**: `api.errors.identity.TooManySubAccounts.is`
- **summary**:    Too many subs-accounts. 

___


## imOnline
 
### DuplicatedHeartbeat
- **interface**: `api.errors.imOnline.DuplicatedHeartbeat.is`
- **summary**:    Duplicated heartbeat. 
 
### InvalidKey
- **interface**: `api.errors.imOnline.InvalidKey.is`
- **summary**:    Non existent public key. 

___


## indices
 
### InUse
- **interface**: `api.errors.indices.InUse.is`
- **summary**:    The index was not available. 
 
### NotAssigned
- **interface**: `api.errors.indices.NotAssigned.is`
- **summary**:    The index was not already assigned. 
 
### NotOwner
- **interface**: `api.errors.indices.NotOwner.is`
- **summary**:    The index is assigned to another account. 
 
### NotTransfer
- **interface**: `api.errors.indices.NotTransfer.is`
- **summary**:    The source and destination accounts are identical. 
 
### Permanent
- **interface**: `api.errors.indices.Permanent.is`
- **summary**:    The index is permanent and may not be freed/changed. 

___


## lottery
 
### AlreadyEnded
- **interface**: `api.errors.lottery.AlreadyEnded.is`
- **summary**:    A lottery has already ended. 
 
### AlreadyParticipating
- **interface**: `api.errors.lottery.AlreadyParticipating.is`
- **summary**:    You are already participating in the lottery with this call. 
 
### EncodingFailed
- **interface**: `api.errors.lottery.EncodingFailed.is`
- **summary**:    Failed to encode calls 
 
### InProgress
- **interface**: `api.errors.lottery.InProgress.is`
- **summary**:    A lottery is already in progress. 
 
### InvalidCall
- **interface**: `api.errors.lottery.InvalidCall.is`
- **summary**:    The call is not valid for an open lottery. 
 
### NotConfigured
- **interface**: `api.errors.lottery.NotConfigured.is`
- **summary**:    A lottery has not been configured. 
 
### TooManyCalls
- **interface**: `api.errors.lottery.TooManyCalls.is`
- **summary**:    Too many calls for a single lottery. 

___


## multisig
 
### AlreadyApproved
- **interface**: `api.errors.multisig.AlreadyApproved.is`
- **summary**:    Call is already approved by this signatory. 
 
### AlreadyStored
- **interface**: `api.errors.multisig.AlreadyStored.is`
- **summary**:    The data to be stored is already stored. 
 
### MaxWeightTooLow
- **interface**: `api.errors.multisig.MaxWeightTooLow.is`
- **summary**:    The maximum weight information provided was too low. 
 
### MinimumThreshold
- **interface**: `api.errors.multisig.MinimumThreshold.is`
- **summary**:    Threshold must be 2 or greater. 
 
### NoApprovalsNeeded
- **interface**: `api.errors.multisig.NoApprovalsNeeded.is`
- **summary**:    Call doesn't need any (more) approvals. 
 
### NotFound
- **interface**: `api.errors.multisig.NotFound.is`
- **summary**:    Multisig operation not found when attempting to cancel. 
 
### NoTimepoint
- **interface**: `api.errors.multisig.NoTimepoint.is`
- **summary**:    No timepoint was given, yet the multisig operation is already underway. 
 
### NotOwner
- **interface**: `api.errors.multisig.NotOwner.is`
- **summary**:    Only the account that originally created the multisig is able to cancel it. 
 
### SenderInSignatories
- **interface**: `api.errors.multisig.SenderInSignatories.is`
- **summary**:    The sender was contained in the other signatories; it shouldn't be. 
 
### SignatoriesOutOfOrder
- **interface**: `api.errors.multisig.SignatoriesOutOfOrder.is`
- **summary**:    The signatories were provided out of order; they should be ordered. 
 
### TooFewSignatories
- **interface**: `api.errors.multisig.TooFewSignatories.is`
- **summary**:    There are too few signatories in the list. 
 
### TooManySignatories
- **interface**: `api.errors.multisig.TooManySignatories.is`
- **summary**:    There are too many signatories in the list. 
 
### UnexpectedTimepoint
- **interface**: `api.errors.multisig.UnexpectedTimepoint.is`
- **summary**:    A timepoint was given, yet no multisig operation is underway. 
 
### WrongTimepoint
- **interface**: `api.errors.multisig.WrongTimepoint.is`
- **summary**:    A different timepoint was given to the multisig operation that is underway. 

___


## nominationPools
 
### AccountBelongsToOtherPool
- **interface**: `api.errors.nominationPools.AccountBelongsToOtherPool.is`
- **summary**:    An account is already delegating in another pool. An account may only belong to one  pool at a time. 
 
### CanNotChangeState
- **interface**: `api.errors.nominationPools.CanNotChangeState.is`
- **summary**:    The pools state cannot be changed. 
 
### CannotWithdrawAny
- **interface**: `api.errors.nominationPools.CannotWithdrawAny.is`
- **summary**:    None of the funds can be withdrawn yet because the bonding duration has not passed. 
 
### Defensive
- **interface**: `api.errors.nominationPools.Defensive.is`
- **summary**:    Some error occurred that should never happen. This should be reported to the  maintainers. 
 
### DoesNotHavePermission
- **interface**: `api.errors.nominationPools.DoesNotHavePermission.is`
- **summary**:    The caller does not have adequate permissions. 
 
### FullyUnbonding
- **interface**: `api.errors.nominationPools.FullyUnbonding.is`
- **summary**:    The member is fully unbonded (and thus cannot access the bonded and reward pool  anymore to, for example, collect rewards). 
 
### MaxPoolMembers
- **interface**: `api.errors.nominationPools.MaxPoolMembers.is`
- **summary**:    Too many members in the pool or system. 
 
### MaxPools
- **interface**: `api.errors.nominationPools.MaxPools.is`
- **summary**:    The system is maxed out on pools. 
 
### MaxUnbondingLimit
- **interface**: `api.errors.nominationPools.MaxUnbondingLimit.is`
- **summary**:    The member cannot unbond further chunks due to reaching the limit. 
 
### MetadataExceedsMaxLen
- **interface**: `api.errors.nominationPools.MetadataExceedsMaxLen.is`
- **summary**:    Metadata exceeds [`Config::MaxMetadataLen`] 
 
### MinimumBondNotMet
- **interface**: `api.errors.nominationPools.MinimumBondNotMet.is`
- **summary**:    The amount does not meet the minimum bond to either join or create a pool. 
 
### NotDestroying
- **interface**: `api.errors.nominationPools.NotDestroying.is`
- **summary**:    A pool must be in [`PoolState::Destroying`] in order for the depositor to unbond or for  other members to be permissionlessly unbonded. 
 
### NotEnoughPointsToUnbond
- **interface**: `api.errors.nominationPools.NotEnoughPointsToUnbond.is`
- **summary**:    Not enough points. Ty unbonding less. 
 
### NotKickerOrDestroying
- **interface**: `api.errors.nominationPools.NotKickerOrDestroying.is`
- **summary**:    Either a) the caller cannot make a valid kick or b) the pool is not destroying. 
 
### NotNominator
- **interface**: `api.errors.nominationPools.NotNominator.is`
- **summary**:    The caller does not have nominating permissions for the pool. 
 
### NotOnlyPoolMember
- **interface**: `api.errors.nominationPools.NotOnlyPoolMember.is`
- **summary**:    The depositor must be the only member in the bonded pool in order to unbond. And the  depositor must be the only member in the sub pools in order to withdraw unbonded. 
 
### NotOpen
- **interface**: `api.errors.nominationPools.NotOpen.is`
- **summary**:    The pool is not open to join 
 
### OverflowRisk
- **interface**: `api.errors.nominationPools.OverflowRisk.is`
- **summary**:    The transaction could not be executed due to overflow risk for the pool. 
 
### PartialUnbondNotAllowedPermissionlessly
- **interface**: `api.errors.nominationPools.PartialUnbondNotAllowedPermissionlessly.is`
- **summary**:    Partial unbonding now allowed permissionlessly. 
 
### PoolMemberNotFound
- **interface**: `api.errors.nominationPools.PoolMemberNotFound.is`
- **summary**:    An account is not a member. 
 
### PoolNotFound
- **interface**: `api.errors.nominationPools.PoolNotFound.is`
- **summary**:    A (bonded) pool id does not exist. 
 
### RewardPoolNotFound
- **interface**: `api.errors.nominationPools.RewardPoolNotFound.is`
- **summary**:    A reward pool does not exist. In all cases this is a system logic error. 
 
### SubPoolsNotFound
- **interface**: `api.errors.nominationPools.SubPoolsNotFound.is`
- **summary**:    A sub pool does not exist. 

___


## preimage
 
### AlreadyNoted
- **interface**: `api.errors.preimage.AlreadyNoted.is`
- **summary**:    Preimage has already been noted on-chain. 
 
### NotAuthorized
- **interface**: `api.errors.preimage.NotAuthorized.is`
- **summary**:    The user is not authorized to perform this action. 
 
### NotNoted
- **interface**: `api.errors.preimage.NotNoted.is`
- **summary**:    The preimage cannot be removed since it has not yet been noted. 
 
### NotRequested
- **interface**: `api.errors.preimage.NotRequested.is`
- **summary**:    The preimage request cannot be removed since no outstanding requests exist. 
 
### Requested
- **interface**: `api.errors.preimage.Requested.is`
- **summary**:    A preimage may not be removed when there are outstanding requests. 
 
### TooLarge
- **interface**: `api.errors.preimage.TooLarge.is`
- **summary**:    Preimage is too large to store on-chain. 

___


## proxy
 
### Duplicate
- **interface**: `api.errors.proxy.Duplicate.is`
- **summary**:    Account is already a proxy. 
 
### NoPermission
- **interface**: `api.errors.proxy.NoPermission.is`
- **summary**:    Call may not be made by proxy because it may escalate its privileges. 
 
### NoSelfProxy
- **interface**: `api.errors.proxy.NoSelfProxy.is`
- **summary**:    Cannot add self as proxy. 
 
### NotFound
- **interface**: `api.errors.proxy.NotFound.is`
- **summary**:    Proxy registration not found. 
 
### NotProxy
- **interface**: `api.errors.proxy.NotProxy.is`
- **summary**:    Sender is not a proxy of the account to be proxied. 
 
### TooMany
- **interface**: `api.errors.proxy.TooMany.is`
- **summary**:    There are too many proxies registered or too many announcements pending. 
 
### Unannounced
- **interface**: `api.errors.proxy.Unannounced.is`
- **summary**:    Announcement, if made at all, was made too recently. 
 
### Unproxyable
- **interface**: `api.errors.proxy.Unproxyable.is`
- **summary**:    A call which is incompatible with the proxy type's filter was attempted. 

___


## rankedCollective
 
### AlreadyMember
- **interface**: `api.errors.rankedCollective.AlreadyMember.is`
- **summary**:    Account is already a member. 
 
### Corruption
- **interface**: `api.errors.rankedCollective.Corruption.is`
- **summary**:    Unexpected error in state. 
 
### InvalidWitness
- **interface**: `api.errors.rankedCollective.InvalidWitness.is`
- **summary**:    The information provided is incorrect. 
 
### NoneRemaining
- **interface**: `api.errors.rankedCollective.NoneRemaining.is`
- **summary**:    There are no further records to be removed. 
 
### NoPermission
- **interface**: `api.errors.rankedCollective.NoPermission.is`
- **summary**:    The origin is not sufficiently privileged to do the operation. 
 
### NotMember
- **interface**: `api.errors.rankedCollective.NotMember.is`
- **summary**:    Account is not a member. 
 
### NotPolling
- **interface**: `api.errors.rankedCollective.NotPolling.is`
- **summary**:    The given poll index is unknown or has closed. 
 
### Ongoing
- **interface**: `api.errors.rankedCollective.Ongoing.is`
- **summary**:    The given poll is still ongoing. 
 
### RankTooLow
- **interface**: `api.errors.rankedCollective.RankTooLow.is`
- **summary**:    The member's rank is too low to vote. 

___


## rankedPolls
 
### BadReferendum
- **interface**: `api.errors.rankedPolls.BadReferendum.is`
- **summary**:    The referendum index provided is invalid in this context. 
 
### BadTrack
- **interface**: `api.errors.rankedPolls.BadTrack.is`
- **summary**:    The track identifier given was invalid. 
 
### Full
- **interface**: `api.errors.rankedPolls.Full.is`
- **summary**:    There are already a full complement of referendums in progress for this track. 
 
### HasDeposit
- **interface**: `api.errors.rankedPolls.HasDeposit.is`
- **summary**:    Referendum's decision deposit is already paid. 
 
### NoDeposit
- **interface**: `api.errors.rankedPolls.NoDeposit.is`
- **summary**:    The deposit cannot be refunded since none was made. 
 
### NoPermission
- **interface**: `api.errors.rankedPolls.NoPermission.is`
- **summary**:    The deposit refunder is not the depositor. 
 
### NothingToDo
- **interface**: `api.errors.rankedPolls.NothingToDo.is`
- **summary**:    There was nothing to do in the advancement. 
 
### NotOngoing
- **interface**: `api.errors.rankedPolls.NotOngoing.is`
- **summary**:    Referendum is not ongoing. 
 
### NoTrack
- **interface**: `api.errors.rankedPolls.NoTrack.is`
- **summary**:    No track exists for the proposal origin. 
 
### QueueEmpty
- **interface**: `api.errors.rankedPolls.QueueEmpty.is`
- **summary**:    The queue of the track is empty. 
 
### Unfinished
- **interface**: `api.errors.rankedPolls.Unfinished.is`
- **summary**:    Any deposit cannot be refunded until after the decision is over. 

___


## recovery
 
### AlreadyProxy
- **interface**: `api.errors.recovery.AlreadyProxy.is`
- **summary**:    This account is already set up for recovery 
 
### AlreadyRecoverable
- **interface**: `api.errors.recovery.AlreadyRecoverable.is`
- **summary**:    This account is already set up for recovery 
 
### AlreadyStarted
- **interface**: `api.errors.recovery.AlreadyStarted.is`
- **summary**:    A recovery process has already started for this account 
 
### AlreadyVouched
- **interface**: `api.errors.recovery.AlreadyVouched.is`
- **summary**:    This user has already vouched for this recovery 
 
### BadState
- **interface**: `api.errors.recovery.BadState.is`
- **summary**:    Some internal state is broken. 
 
### DelayPeriod
- **interface**: `api.errors.recovery.DelayPeriod.is`
- **summary**:    The friend must wait until the delay period to vouch for this recovery 
 
### MaxFriends
- **interface**: `api.errors.recovery.MaxFriends.is`
- **summary**:    Friends list must be less than max friends 
 
### NotAllowed
- **interface**: `api.errors.recovery.NotAllowed.is`
- **summary**:    User is not allowed to make a call on behalf of this account 
 
### NotEnoughFriends
- **interface**: `api.errors.recovery.NotEnoughFriends.is`
- **summary**:    Friends list must be greater than zero and threshold 
 
### NotFriend
- **interface**: `api.errors.recovery.NotFriend.is`
- **summary**:    This account is not a friend who can vouch 
 
### NotRecoverable
- **interface**: `api.errors.recovery.NotRecoverable.is`
- **summary**:    This account is not set up for recovery 
 
### NotSorted
- **interface**: `api.errors.recovery.NotSorted.is`
- **summary**:    Friends list must be sorted and free of duplicates 
 
### NotStarted
- **interface**: `api.errors.recovery.NotStarted.is`
- **summary**:    A recovery process has not started for this rescuer 
 
### StillActive
- **interface**: `api.errors.recovery.StillActive.is`
- **summary**:    There are still active recovery attempts that need to be closed 
 
### Threshold
- **interface**: `api.errors.recovery.Threshold.is`
- **summary**:    The threshold for recovering this account has not been met 
 
### ZeroThreshold
- **interface**: `api.errors.recovery.ZeroThreshold.is`
- **summary**:    Threshold must be greater than zero 

___


## referenda
 
### BadReferendum
- **interface**: `api.errors.referenda.BadReferendum.is`
- **summary**:    The referendum index provided is invalid in this context. 
 
### BadTrack
- **interface**: `api.errors.referenda.BadTrack.is`
- **summary**:    The track identifier given was invalid. 
 
### Full
- **interface**: `api.errors.referenda.Full.is`
- **summary**:    There are already a full complement of referendums in progress for this track. 
 
### HasDeposit
- **interface**: `api.errors.referenda.HasDeposit.is`
- **summary**:    Referendum's decision deposit is already paid. 
 
### NoDeposit
- **interface**: `api.errors.referenda.NoDeposit.is`
- **summary**:    The deposit cannot be refunded since none was made. 
 
### NoPermission
- **interface**: `api.errors.referenda.NoPermission.is`
- **summary**:    The deposit refunder is not the depositor. 
 
### NothingToDo
- **interface**: `api.errors.referenda.NothingToDo.is`
- **summary**:    There was nothing to do in the advancement. 
 
### NotOngoing
- **interface**: `api.errors.referenda.NotOngoing.is`
- **summary**:    Referendum is not ongoing. 
 
### NoTrack
- **interface**: `api.errors.referenda.NoTrack.is`
- **summary**:    No track exists for the proposal origin. 
 
### QueueEmpty
- **interface**: `api.errors.referenda.QueueEmpty.is`
- **summary**:    The queue of the track is empty. 
 
### Unfinished
- **interface**: `api.errors.referenda.Unfinished.is`
- **summary**:    Any deposit cannot be refunded until after the decision is over. 

___


## remark
 
### BadContext
- **interface**: `api.errors.remark.BadContext.is`
- **summary**:    Attempted to call `store` outside of block execution. 
 
### Empty
- **interface**: `api.errors.remark.Empty.is`
- **summary**:    Attempting to store empty data. 

___


## scheduler
 
### FailedToSchedule
- **interface**: `api.errors.scheduler.FailedToSchedule.is`
- **summary**:    Failed to schedule a call 
 
### NotFound
- **interface**: `api.errors.scheduler.NotFound.is`
- **summary**:    Cannot find the scheduled call. 
 
### RescheduleNoChange
- **interface**: `api.errors.scheduler.RescheduleNoChange.is`
- **summary**:    Reschedule failed because it does not change scheduled time. 
 
### TargetBlockNumberInPast
- **interface**: `api.errors.scheduler.TargetBlockNumberInPast.is`
- **summary**:    Given target block number is in the past. 

___


## session
 
### DuplicatedKey
- **interface**: `api.errors.session.DuplicatedKey.is`
- **summary**:    Registered duplicate key. 
 
### InvalidProof
- **interface**: `api.errors.session.InvalidProof.is`
- **summary**:    Invalid ownership proof. 
 
### NoAccount
- **interface**: `api.errors.session.NoAccount.is`
- **summary**:    Key setting account is not live, so it's impossible to associate keys. 
 
### NoAssociatedValidatorId
- **interface**: `api.errors.session.NoAssociatedValidatorId.is`
- **summary**:    No associated validator ID for account. 
 
### NoKeys
- **interface**: `api.errors.session.NoKeys.is`
- **summary**:    No keys are associated with this account. 

___


## society
 
### AlreadyBid
- **interface**: `api.errors.society.AlreadyBid.is`
- **summary**:    User has already made a bid. 
 
### AlreadyCandidate
- **interface**: `api.errors.society.AlreadyCandidate.is`
- **summary**:    User is already a candidate. 
 
### AlreadyFounded
- **interface**: `api.errors.society.AlreadyFounded.is`
- **summary**:    Society already founded. 
 
### AlreadyMember
- **interface**: `api.errors.society.AlreadyMember.is`
- **summary**:    User is already a member. 
 
### AlreadyVouching
- **interface**: `api.errors.society.AlreadyVouching.is`
- **summary**:    Member is already vouching or banned from vouching again. 
 
### BadPosition
- **interface**: `api.errors.society.BadPosition.is`
- **summary**:    An incorrect position was provided. 
 
### Founder
- **interface**: `api.errors.society.Founder.is`
- **summary**:    Cannot remove the founder. 
 
### Head
- **interface**: `api.errors.society.Head.is`
- **summary**:    Cannot remove the head of the chain. 
 
### InsufficientPot
- **interface**: `api.errors.society.InsufficientPot.is`
- **summary**:    Not enough in pot to accept candidate. 
 
### MaxMembers
- **interface**: `api.errors.society.MaxMembers.is`
- **summary**:    Too many members in the society. 
 
### NoPayout
- **interface**: `api.errors.society.NoPayout.is`
- **summary**:    Nothing to payout. 
 
### NotCandidate
- **interface**: `api.errors.society.NotCandidate.is`
- **summary**:    User is not a candidate. 
 
### NotFounder
- **interface**: `api.errors.society.NotFounder.is`
- **summary**:    The caller is not the founder. 
 
### NotHead
- **interface**: `api.errors.society.NotHead.is`
- **summary**:    The caller is not the head. 
 
### NotMember
- **interface**: `api.errors.society.NotMember.is`
- **summary**:    User is not a member. 
 
### NotSuspended
- **interface**: `api.errors.society.NotSuspended.is`
- **summary**:    User is not suspended. 
 
### NotVouching
- **interface**: `api.errors.society.NotVouching.is`
- **summary**:    Member is not vouching. 
 
### Suspended
- **interface**: `api.errors.society.Suspended.is`
- **summary**:    User is suspended. 

___


## staking
 
### AlreadyBonded
- **interface**: `api.errors.staking.AlreadyBonded.is`
- **summary**:    Stash is already bonded. 
 
### AlreadyClaimed
- **interface**: `api.errors.staking.AlreadyClaimed.is`
- **summary**:    Rewards for this era have already been claimed for this validator. 
 
### AlreadyPaired
- **interface**: `api.errors.staking.AlreadyPaired.is`
- **summary**:    Controller is already paired. 
 
### BadState
- **interface**: `api.errors.staking.BadState.is`
- **summary**:    Internal state has become somehow corrupted and the operation cannot continue. 
 
### BadTarget
- **interface**: `api.errors.staking.BadTarget.is`
- **summary**:    A nomination target was supplied that was blocked or otherwise not a validator. 
 
### CannotChillOther
- **interface**: `api.errors.staking.CannotChillOther.is`
- **summary**:    The user has enough bond and thus cannot be chilled forcefully by an external person. 
 
### CommissionTooLow
- **interface**: `api.errors.staking.CommissionTooLow.is`
- **summary**:    Commission is too low. Must be at least `MinCommission`. 
 
### DuplicateIndex
- **interface**: `api.errors.staking.DuplicateIndex.is`
- **summary**:    Duplicate index. 
 
### EmptyTargets
- **interface**: `api.errors.staking.EmptyTargets.is`
- **summary**:    Targets cannot be empty. 
 
### FundedTarget
- **interface**: `api.errors.staking.FundedTarget.is`
- **summary**:    Attempting to target a stash that still has funds. 
 
### IncorrectHistoryDepth
- **interface**: `api.errors.staking.IncorrectHistoryDepth.is`
- **summary**:    Incorrect previous history depth input provided. 
 
### IncorrectSlashingSpans
- **interface**: `api.errors.staking.IncorrectSlashingSpans.is`
- **summary**:    Incorrect number of slashing spans provided. 
 
### InsufficientBond
- **interface**: `api.errors.staking.InsufficientBond.is`
- **summary**:    Cannot have a validator or nominator role, with value less than the minimum defined by  governance (see `MinValidatorBond` and `MinNominatorBond`). If unbonding is the  intention, `chill` first to remove one's role as validator/nominator. 
 
### InvalidEraToReward
- **interface**: `api.errors.staking.InvalidEraToReward.is`
- **summary**:    Invalid era to reward. 
 
### InvalidNumberOfNominations
- **interface**: `api.errors.staking.InvalidNumberOfNominations.is`
- **summary**:    Invalid number of nominations. 
 
### InvalidSlashIndex
- **interface**: `api.errors.staking.InvalidSlashIndex.is`
- **summary**:    Slash record index out of bounds. 
 
### NoMoreChunks
- **interface**: `api.errors.staking.NoMoreChunks.is`
- **summary**:    Can not schedule more unlock chunks. 
 
### NotController
- **interface**: `api.errors.staking.NotController.is`
- **summary**:    Not a controller account. 
 
### NotSortedAndUnique
- **interface**: `api.errors.staking.NotSortedAndUnique.is`
- **summary**:    Items are not sorted and unique. 
 
### NotStash
- **interface**: `api.errors.staking.NotStash.is`
- **summary**:    Not a stash account. 
 
### NoUnlockChunk
- **interface**: `api.errors.staking.NoUnlockChunk.is`
- **summary**:    Can not rebond without unlocking chunks. 
 
### TooManyNominators
- **interface**: `api.errors.staking.TooManyNominators.is`
- **summary**:    There are too many nominators in the system. Governance needs to adjust the staking  settings to keep things safe for the runtime. 
 
### TooManyTargets
- **interface**: `api.errors.staking.TooManyTargets.is`
- **summary**:    Too many nomination targets supplied. 
 
### TooManyValidators
- **interface**: `api.errors.staking.TooManyValidators.is`
- **summary**:    There are too many validators in the system. Governance needs to adjust the staking  settings to keep things safe for the runtime. 

___


## stateTrieMigration
 
### BadWitness
- **interface**: `api.errors.stateTrieMigration.BadWitness.is`
- **summary**:    bad witness data provided. 
 
### KeyTooLong
- **interface**: `api.errors.stateTrieMigration.KeyTooLong.is`
- **summary**:    A key was longer than the configured maximum. 

   This means that the migration halted at the current [`Progress`] and  can be resumed with a larger [`crate::Config::MaxKeyLen`] value.  Retrying with the same [`crate::Config::MaxKeyLen`] value will not work.  The value should only be increased to avoid a storage migration for the currently  stored [`crate::Progress::LastKey`]. 
 
### MaxSignedLimits
- **interface**: `api.errors.stateTrieMigration.MaxSignedLimits.is`
- **summary**:    max signed limits not respected. 
 
### NotEnoughFunds
- **interface**: `api.errors.stateTrieMigration.NotEnoughFunds.is`
- **summary**:    submitter does not have enough funds. 
 
### SignedMigrationNotAllowed
- **interface**: `api.errors.stateTrieMigration.SignedMigrationNotAllowed.is`
- **summary**:    Signed migration is not allowed because the maximum limit is not set yet. 
 
### SizeUpperBoundExceeded
- **interface**: `api.errors.stateTrieMigration.SizeUpperBoundExceeded.is`
- **summary**:    upper bound of size is exceeded, 

___


## sudo
 
### RequireSudo
- **interface**: `api.errors.sudo.RequireSudo.is`
- **summary**:    Sender must be the Sudo account 

___


## system
 
### CallFiltered
- **interface**: `api.errors.system.CallFiltered.is`
- **summary**:    The origin filter prevent the call to be dispatched. 
 
### FailedToExtractRuntimeVersion
- **interface**: `api.errors.system.FailedToExtractRuntimeVersion.is`
- **summary**:    Failed to extract the runtime version from the new runtime. 

   Either calling `Core_version` or decoding `RuntimeVersion` failed. 
 
### InvalidSpecName
- **interface**: `api.errors.system.InvalidSpecName.is`
- **summary**:    The name of specification does not match between the current runtime  and the new runtime. 
 
### NonDefaultComposite
- **interface**: `api.errors.system.NonDefaultComposite.is`
- **summary**:    Suicide called when the account has non-default composite data. 
 
### NonZeroRefCount
- **interface**: `api.errors.system.NonZeroRefCount.is`
- **summary**:    There is a non-zero reference count preventing the account from being purged. 
 
### SpecVersionNeedsToIncrease
- **interface**: `api.errors.system.SpecVersionNeedsToIncrease.is`
- **summary**:    The specification version is not allowed to decrease between the current runtime  and the new runtime. 

___


## technicalCommittee
 
### AlreadyInitialized
- **interface**: `api.errors.technicalCommittee.AlreadyInitialized.is`
- **summary**:    Members are already initialized! 
 
### DuplicateProposal
- **interface**: `api.errors.technicalCommittee.DuplicateProposal.is`
- **summary**:    Duplicate proposals not allowed 
 
### DuplicateVote
- **interface**: `api.errors.technicalCommittee.DuplicateVote.is`
- **summary**:    Duplicate vote ignored 
 
### NotMember
- **interface**: `api.errors.technicalCommittee.NotMember.is`
- **summary**:    Account is not a member 
 
### ProposalMissing
- **interface**: `api.errors.technicalCommittee.ProposalMissing.is`
- **summary**:    Proposal must exist 
 
### TooEarly
- **interface**: `api.errors.technicalCommittee.TooEarly.is`
- **summary**:    The close call was made too early, before the end of the voting. 
 
### TooManyProposals
- **interface**: `api.errors.technicalCommittee.TooManyProposals.is`
- **summary**:    There can only be a maximum of `MaxProposals` active proposals. 
 
### WrongIndex
- **interface**: `api.errors.technicalCommittee.WrongIndex.is`
- **summary**:    Mismatched index 
 
### WrongProposalLength
- **interface**: `api.errors.technicalCommittee.WrongProposalLength.is`
- **summary**:    The given length bound for the proposal was too low. 
 
### WrongProposalWeight
- **interface**: `api.errors.technicalCommittee.WrongProposalWeight.is`
- **summary**:    The given weight bound for the proposal was too low. 

___


## technicalMembership
 
### AlreadyMember
- **interface**: `api.errors.technicalMembership.AlreadyMember.is`
- **summary**:    Already a member. 
 
### NotMember
- **interface**: `api.errors.technicalMembership.NotMember.is`
- **summary**:    Not a member. 
 
### TooManyMembers
- **interface**: `api.errors.technicalMembership.TooManyMembers.is`
- **summary**:    Too many members. 

___


## tips
 
### AlreadyKnown
- **interface**: `api.errors.tips.AlreadyKnown.is`
- **summary**:    The tip was already found/started. 
 
### NotFinder
- **interface**: `api.errors.tips.NotFinder.is`
- **summary**:    The account attempting to retract the tip is not the finder of the tip. 
 
### Premature
- **interface**: `api.errors.tips.Premature.is`
- **summary**:    The tip cannot be claimed/closed because it's still in the countdown period. 
 
### ReasonTooBig
- **interface**: `api.errors.tips.ReasonTooBig.is`
- **summary**:    The reason given is just too big. 
 
### StillOpen
- **interface**: `api.errors.tips.StillOpen.is`
- **summary**:    The tip cannot be claimed/closed because there are not enough tippers yet. 
 
### UnknownTip
- **interface**: `api.errors.tips.UnknownTip.is`
- **summary**:    The tip hash is unknown. 

___


## transactionStorage
 
### BadContext
- **interface**: `api.errors.transactionStorage.BadContext.is`
- **summary**:    Attempted to call `store` outside of block execution. 
 
### DoubleCheck
- **interface**: `api.errors.transactionStorage.DoubleCheck.is`
- **summary**:    Double proof check in the block. 
 
### EmptyTransaction
- **interface**: `api.errors.transactionStorage.EmptyTransaction.is`
- **summary**:    Attempting to store empty transaction 
 
### InsufficientFunds
- **interface**: `api.errors.transactionStorage.InsufficientFunds.is`
- **summary**:    Insufficient account balance. 
 
### InvalidProof
- **interface**: `api.errors.transactionStorage.InvalidProof.is`
- **summary**:    Proof failed verification. 
 
### MissingProof
- **interface**: `api.errors.transactionStorage.MissingProof.is`
- **summary**:    Missing storage proof. 
 
### MissingStateData
- **interface**: `api.errors.transactionStorage.MissingStateData.is`
- **summary**:    Unable to verify proof becasue state data is missing. 
 
### NotConfigured
- **interface**: `api.errors.transactionStorage.NotConfigured.is`
- **summary**:    Invalid configuration. 
 
### ProofNotChecked
- **interface**: `api.errors.transactionStorage.ProofNotChecked.is`
- **summary**:    Storage proof was not checked in the block. 
 
### RenewedNotFound
- **interface**: `api.errors.transactionStorage.RenewedNotFound.is`
- **summary**:    Renewed extrinsic is not found. 
 
### TooManyTransactions
- **interface**: `api.errors.transactionStorage.TooManyTransactions.is`
- **summary**:    Too many transactions in the block. 
 
### TransactionTooLarge
- **interface**: `api.errors.transactionStorage.TransactionTooLarge.is`
- **summary**:    Transaction is too large. 
 
### UnexpectedProof
- **interface**: `api.errors.transactionStorage.UnexpectedProof.is`
- **summary**:    Proof was not expected in this block. 

___


## treasury
 
### InsufficientPermission
- **interface**: `api.errors.treasury.InsufficientPermission.is`
- **summary**:    The spend origin is valid but the amount it is allowed to spend is lower than the  amount to be spent. 
 
### InsufficientProposersBalance
- **interface**: `api.errors.treasury.InsufficientProposersBalance.is`
- **summary**:    Proposer's balance is too low. 
 
### InvalidIndex
- **interface**: `api.errors.treasury.InvalidIndex.is`
- **summary**:    No proposal or bounty at that index. 
 
### ProposalNotApproved
- **interface**: `api.errors.treasury.ProposalNotApproved.is`
- **summary**:    Proposal has not been approved. 
 
### TooManyApprovals
- **interface**: `api.errors.treasury.TooManyApprovals.is`
- **summary**:    Too many approvals in the queue. 

___


## uniques
 
### AlreadyExists
- **interface**: `api.errors.uniques.AlreadyExists.is`
- **summary**:    The item ID has already been used for an item. 
 
### BadWitness
- **interface**: `api.errors.uniques.BadWitness.is`
- **summary**:    Invalid witness data given. 
 
### Frozen
- **interface**: `api.errors.uniques.Frozen.is`
- **summary**:    The item or collection is frozen. 
 
### InUse
- **interface**: `api.errors.uniques.InUse.is`
- **summary**:    The item ID is already taken. 
 
### Locked
- **interface**: `api.errors.uniques.Locked.is`
- **summary**:    The item is locked. 
 
### MaxSupplyAlreadySet
- **interface**: `api.errors.uniques.MaxSupplyAlreadySet.is`
- **summary**:    The max supply has already been set. 
 
### MaxSupplyReached
- **interface**: `api.errors.uniques.MaxSupplyReached.is`
- **summary**:    All items have been minted. 
 
### MaxSupplyTooSmall
- **interface**: `api.errors.uniques.MaxSupplyTooSmall.is`
- **summary**:    The provided max supply is less to the amount of items a collection already has. 
 
### NoDelegate
- **interface**: `api.errors.uniques.NoDelegate.is`
- **summary**:    There is no delegate approved. 
 
### NoPermission
- **interface**: `api.errors.uniques.NoPermission.is`
- **summary**:    The signing account has no permission to do the operation. 
 
### Unaccepted
- **interface**: `api.errors.uniques.Unaccepted.is`
- **summary**:    The named owner has not signed ownership of the collection is acceptable. 
 
### Unapproved
- **interface**: `api.errors.uniques.Unapproved.is`
- **summary**:    No approval exists that would allow the transfer. 
 
### UnknownCollection
- **interface**: `api.errors.uniques.UnknownCollection.is`
- **summary**:    The given item ID is unknown. 
 
### WrongDelegate
- **interface**: `api.errors.uniques.WrongDelegate.is`
- **summary**:    The delegate turned out to be different to what was expected. 
 
### WrongOwner
- **interface**: `api.errors.uniques.WrongOwner.is`
- **summary**:    The owner turned out to be different to what was expected. 

___


## utility
 
### TooManyCalls
- **interface**: `api.errors.utility.TooManyCalls.is`
- **summary**:    Too many calls batched. 

___


## vesting
 
### AmountLow
- **interface**: `api.errors.vesting.AmountLow.is`
- **summary**:    Amount being transferred is too low to create a vesting schedule. 
 
### AtMaxVestingSchedules
- **interface**: `api.errors.vesting.AtMaxVestingSchedules.is`
- **summary**:    The account already has `MaxVestingSchedules` count of schedules and thus  cannot add another one. Consider merging existing schedules in order to add another. 
 
### InvalidScheduleParams
- **interface**: `api.errors.vesting.InvalidScheduleParams.is`
- **summary**:    Failed to create a new schedule because some parameter was invalid. 
 
### NotVesting
- **interface**: `api.errors.vesting.NotVesting.is`
- **summary**:    The account given is not vesting. 
 
### ScheduleIndexOutOfBounds
- **interface**: `api.errors.vesting.ScheduleIndexOutOfBounds.is`
- **summary**:    An index was out of bounds of the vesting schedules. 

___


## whitelist
 
### CallAlreadyWhitelisted
- **interface**: `api.errors.whitelist.CallAlreadyWhitelisted.is`
- **summary**:    The call was already whitelisted; No-Op. 
 
### CallIsNotWhitelisted
- **interface**: `api.errors.whitelist.CallIsNotWhitelisted.is`
- **summary**:    The call was not whitelisted. 
 
### InvalidCallWeightWitness
- **interface**: `api.errors.whitelist.InvalidCallWeightWitness.is`
- **summary**:    The weight of the decoded call was higher than the witness. 
 
### UnavailablePreImage
- **interface**: `api.errors.whitelist.UnavailablePreImage.is`
- **summary**:    The preimage of the call hash could not be loaded. 
 
### UndecodableCall
- **interface**: `api.errors.whitelist.UndecodableCall.is`
- **summary**:    The call could not be decoded. 
