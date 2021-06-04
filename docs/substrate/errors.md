---
title: Errors
---

This page lists the errors that can be encountered in the different modules. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[assets](#assets)**

- **[authorship](#authorship)**

- **[babe](#babe)**

- **[balances](#balances)**

- **[bounties](#bounties)**

- **[contracts](#contracts)**

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

- **[proxy](#proxy)**

- **[recovery](#recovery)**

- **[scheduler](#scheduler)**

- **[session](#session)**

- **[society](#society)**

- **[staking](#staking)**

- **[sudo](#sudo)**

- **[system](#system)**

- **[technicalCommittee](#technicalcommittee)**

- **[technicalMembership](#technicalmembership)**

- **[tips](#tips)**

- **[transactionStorage](#transactionstorage)**

- **[treasury](#treasury)**

- **[uniques](#uniques)**

- **[vesting](#vesting)**


___


## assets
 
### BadMetadata
- **interface**: `api.errors.assets.BadMetadata.is`
- **summary**:   Invalid metadata given. 
 
### BadWitness
- **interface**: `api.errors.assets.BadWitness.is`
- **summary**:   Invalid witness data given. 
 
### BalanceLow
- **interface**: `api.errors.assets.BalanceLow.is`
- **summary**:   Account balance must be greater than or equal to the transfer amount. 
 
### BalanceZero
- **interface**: `api.errors.assets.BalanceZero.is`
- **summary**:   Balance should be non-zero. 
 
### Frozen
- **interface**: `api.errors.assets.Frozen.is`
- **summary**:   The origin account is frozen. 
 
### InUse
- **interface**: `api.errors.assets.InUse.is`
- **summary**:   The asset ID is already taken. 
 
### MinBalanceZero
- **interface**: `api.errors.assets.MinBalanceZero.is`
- **summary**:   Minimum balance should be non-zero. 
 
### NoPermission
- **interface**: `api.errors.assets.NoPermission.is`
- **summary**:   The signing account has no permission to do the operation. 
 
### NoProvider
- **interface**: `api.errors.assets.NoProvider.is`
- **summary**:   No provider reference exists to allow a non-zero balance of a non-self-sufficient asset. 
 
### Unapproved
- **interface**: `api.errors.assets.Unapproved.is`
- **summary**:   No approval exists that would allow the transfer. 
 
### Unknown
- **interface**: `api.errors.assets.Unknown.is`
- **summary**:   The given asset ID is unknown. 
 
### WouldDie
- **interface**: `api.errors.assets.WouldDie.is`
- **summary**:   The source account would not survive the transfer and it needs to stay alive. 

___


## authorship
 
### GenesisUncle
- **interface**: `api.errors.authorship.GenesisUncle.is`
- **summary**:   The uncle is genesis. 
 
### InvalidUncleParent
- **interface**: `api.errors.authorship.InvalidUncleParent.is`
- **summary**:   The uncle parent not in the chain. 
 
### OldUncle
- **interface**: `api.errors.authorship.OldUncle.is`
- **summary**:   The uncle isn't recent enough to be included. 
 
### TooHighUncle
- **interface**: `api.errors.authorship.TooHighUncle.is`
- **summary**:   The uncle is too high in chain. 
 
### TooManyUncles
- **interface**: `api.errors.authorship.TooManyUncles.is`
- **summary**:   Too many uncles. 
 
### UncleAlreadyIncluded
- **interface**: `api.errors.authorship.UncleAlreadyIncluded.is`
- **summary**:   The uncle is already included. 
 
### UnclesAlreadySet
- **interface**: `api.errors.authorship.UnclesAlreadySet.is`
- **summary**:   Uncles already set in the block. 

___


## babe
 
### DuplicateOffenceReport
- **interface**: `api.errors.babe.DuplicateOffenceReport.is`
- **summary**:   A given equivocation report is valid but already previously reported. 
 
### InvalidEquivocationProof
- **interface**: `api.errors.babe.InvalidEquivocationProof.is`
- **summary**:   An equivocation proof provided as part of an equivocation report is invalid. 
 
### InvalidKeyOwnershipProof
- **interface**: `api.errors.babe.InvalidKeyOwnershipProof.is`
- **summary**:   A key ownership proof provided as part of an equivocation report is invalid. 

___


## balances
 
### DeadAccount
- **interface**: `api.errors.balances.DeadAccount.is`
- **summary**:   Beneficiary account must pre-exist 
 
### ExistentialDeposit
- **interface**: `api.errors.balances.ExistentialDeposit.is`
- **summary**:   Value too low to create account due to existential deposit 
 
### ExistingVestingSchedule
- **interface**: `api.errors.balances.ExistingVestingSchedule.is`
- **summary**:   A vesting schedule already exists for this account 
 
### InsufficientBalance
- **interface**: `api.errors.balances.InsufficientBalance.is`
- **summary**:   Balance too low to send value 
 
### KeepAlive
- **interface**: `api.errors.balances.KeepAlive.is`
- **summary**:   Transfer/payment would kill account 
 
### LiquidityRestrictions
- **interface**: `api.errors.balances.LiquidityRestrictions.is`
- **summary**:   Account liquidity restrictions prevent withdrawal 
 
### TooManyReserves
- **interface**: `api.errors.balances.TooManyReserves.is`
- **summary**:   Number of named reserves exceed MaxReserves 
 
### VestingBalance
- **interface**: `api.errors.balances.VestingBalance.is`
- **summary**:   Vesting balance too high to send value 

___


## bounties
 
### InsufficientProposersBalance
- **interface**: `api.errors.bounties.InsufficientProposersBalance.is`
- **summary**:   Proposer's balance is too low. 
 
### InvalidFee
- **interface**: `api.errors.bounties.InvalidFee.is`
- **summary**:   Invalid bounty fee. 
 
### InvalidIndex
- **interface**: `api.errors.bounties.InvalidIndex.is`
- **summary**:   No proposal or bounty at that index. 
 
### InvalidValue
- **interface**: `api.errors.bounties.InvalidValue.is`
- **summary**:   Invalid bounty value. 
 
### PendingPayout
- **interface**: `api.errors.bounties.PendingPayout.is`
- **summary**:   A bounty payout is pending. To cancel the bounty, you must unassign and slash the curator. 
 
### Premature
- **interface**: `api.errors.bounties.Premature.is`
- **summary**:   The bounties cannot be claimed/closed because it's still in the countdown period. 
 
### ReasonTooBig
- **interface**: `api.errors.bounties.ReasonTooBig.is`
- **summary**:   The reason given is just too big. 
 
### RequireCurator
- **interface**: `api.errors.bounties.RequireCurator.is`
- **summary**:   Require bounty curator. 
 
### UnexpectedStatus
- **interface**: `api.errors.bounties.UnexpectedStatus.is`
- **summary**:   The bounty status is unexpected. 

___


## contracts
 
### BelowSubsistenceThreshold
- **interface**: `api.errors.contracts.BelowSubsistenceThreshold.is`
- **summary**:   Performing the requested transfer would have brought the contract below the subsistence threshold. No transfer is allowed to do this in order to allow for a tombstone to be created. Use `seal_terminate` to remove a contract without leaving a tombstone behind. 
 
### CodeNotFound
- **interface**: `api.errors.contracts.CodeNotFound.is`
- **summary**:   No code could be found at the supplied code hash. 
 
### CodeTooLarge
- **interface**: `api.errors.contracts.CodeTooLarge.is`
- **summary**:   The code supplied to `instantiate_with_code` exceeds the limit specified in the current schedule. 
 
### ContractIsTombstone
- **interface**: `api.errors.contracts.ContractIsTombstone.is`
- **summary**:   A tombstone exist at the specified address. 

  Tombstone cannot be called. Anyone can use `seal_restore_to` in order to revive the contract, though. 
 
### ContractNotEvictable
- **interface**: `api.errors.contracts.ContractNotEvictable.is`
- **summary**:   A contract could not be evicted because it has enough balance to pay rent. 

  This can be returned from [`Pallet::claim_surcharge`] because the target contract has enough balance to pay for its rent. 
 
### ContractNotFound
- **interface**: `api.errors.contracts.ContractNotFound.is`
- **summary**:   No contract was found at the specified address. 
 
### ContractTrapped
- **interface**: `api.errors.contracts.ContractTrapped.is`
- **summary**:   Contract trapped during execution. 
 
### DebugMessageInvalidUTF8
- **interface**: `api.errors.contracts.DebugMessageInvalidUTF8.is`
- **summary**:   The debug message specified to `seal_debug_message` does contain invalid UTF-8. 
 
### DecodingFailed
- **interface**: `api.errors.contracts.DecodingFailed.is`
- **summary**:   Input passed to a contract API function failed to decode as expected type. 
 
### DeletionQueueFull
- **interface**: `api.errors.contracts.DeletionQueueFull.is`
- **summary**:   Removal of a contract failed because the deletion queue is full. 

  This can happen when either calling [`Pallet::claim_surcharge`] or `seal_terminate`. The queue is filled by deleting contracts and emptied by a fixed amount each block. Trying again during another block is the only way to resolve this issue. 
 
### DuplicateContract
- **interface**: `api.errors.contracts.DuplicateContract.is`
- **summary**:   A contract with the same AccountId already exists. 
 
### DuplicateTopics
- **interface**: `api.errors.contracts.DuplicateTopics.is`
- **summary**:   The topics passed to `seal_deposit_events` contains at least one duplicate. 
 
### InputAlreadyRead
- **interface**: `api.errors.contracts.InputAlreadyRead.is`
- **summary**:   `seal_input` was called twice from the same contract execution context. 
 
### InvalidContractOrigin
- **interface**: `api.errors.contracts.InvalidContractOrigin.is`
- **summary**:   An origin TrieId written in the current block. 
 
### InvalidDestinationContract
- **interface**: `api.errors.contracts.InvalidDestinationContract.is`
- **summary**:   Cannot restore to nonexisting or alive contract. 
 
### InvalidScheduleVersion
- **interface**: `api.errors.contracts.InvalidScheduleVersion.is`
- **summary**:   A new schedule must have a greater version than the current one. 
 
### InvalidSourceContract
- **interface**: `api.errors.contracts.InvalidSourceContract.is`
- **summary**:   Cannot restore from nonexisting or tombstone contract. 
 
### InvalidSurchargeClaim
- **interface**: `api.errors.contracts.InvalidSurchargeClaim.is`
- **summary**:   An origin must be signed or inherent and auxiliary sender only provided on inherent. 
 
### InvalidTombstone
- **interface**: `api.errors.contracts.InvalidTombstone.is`
- **summary**:   Tombstones don't match. 
 
### MaxCallDepthReached
- **interface**: `api.errors.contracts.MaxCallDepthReached.is`
- **summary**:   Performing a call was denied because the calling depth reached the limit of what is specified in the schedule. 
 
### NewContractNotFunded
- **interface**: `api.errors.contracts.NewContractNotFunded.is`
- **summary**:   The newly created contract is below the subsistence threshold after executing its contructor. No contracts are allowed to exist below that threshold. 
 
### NoChainExtension
- **interface**: `api.errors.contracts.NoChainExtension.is`
- **summary**:   The chain does not provide a chain extension. Calling the chain extension results in this error. Note that this usually  shouldn't happen as deploying such contracts is rejected. 
 
### OutOfBounds
- **interface**: `api.errors.contracts.OutOfBounds.is`
- **summary**:   A buffer outside of sandbox memory was passed to a contract API function. 
 
### OutOfGas
- **interface**: `api.errors.contracts.OutOfGas.is`
- **summary**:   The executed contract exhausted its gas limit. 
 
### OutputBufferTooSmall
- **interface**: `api.errors.contracts.OutputBufferTooSmall.is`
- **summary**:   The output buffer supplied to a contract API call was too small. 
 
### RandomSubjectTooLong
- **interface**: `api.errors.contracts.RandomSubjectTooLong.is`
- **summary**:   The subject passed to `seal_random` exceeds the limit. 
 
### ReentranceDenied
- **interface**: `api.errors.contracts.ReentranceDenied.is`
- **summary**:   The action performed is not allowed while the contract performing it is already on the call stack. Those actions are contract self destruction and restoration of a tombstone. 
 
### RentNotPaid
- **interface**: `api.errors.contracts.RentNotPaid.is`
- **summary**:   The called contract does not have enough balance to pay for its storage. 

  The contract ran out of balance and is therefore eligible for eviction into a tombstone. Anyone can evict the contract by submitting a `claim_surcharge` extrinsic. Alternatively, a plain balance transfer can be used in order to increase the contracts funds so that it can be called again. 
 
### StorageExhausted
- **interface**: `api.errors.contracts.StorageExhausted.is`
- **summary**:   A storage modification exhausted the 32bit type that holds the storage size. 

  This can either happen when the accumulated storage in bytes is too large or when number of storage items is too large. 
 
### TerminatedInConstructor
- **interface**: `api.errors.contracts.TerminatedInConstructor.is`
- **summary**:   A contract self destructed in its constructor. 

  This can be triggered by a call to `seal_terminate` or `seal_restore_to`. 
 
### TooManyTopics
- **interface**: `api.errors.contracts.TooManyTopics.is`
- **summary**:   The amount of topics passed to `seal_deposit_events` exceeds the limit. 
 
### TransferFailed
- **interface**: `api.errors.contracts.TransferFailed.is`
- **summary**:   Performing the requested transfer failed for a reason originating in the chosen currency implementation of the runtime. Most probably the balance is too low or locks are placed on it. 
 
### ValueTooLarge
- **interface**: `api.errors.contracts.ValueTooLarge.is`
- **summary**:   The size defined in `T::MaxValueSize` was exceeded. 

___


## council
 
### AlreadyInitialized
- **interface**: `api.errors.council.AlreadyInitialized.is`
- **summary**:   Members are already initialized! 
 
### DuplicateProposal
- **interface**: `api.errors.council.DuplicateProposal.is`
- **summary**:   Duplicate proposals not allowed 
 
### DuplicateVote
- **interface**: `api.errors.council.DuplicateVote.is`
- **summary**:   Duplicate vote ignored 
 
### NotMember
- **interface**: `api.errors.council.NotMember.is`
- **summary**:   Account is not a member 
 
### ProposalMissing
- **interface**: `api.errors.council.ProposalMissing.is`
- **summary**:   Proposal must exist 
 
### TooEarly
- **interface**: `api.errors.council.TooEarly.is`
- **summary**:   The close call was made too early, before the end of the voting. 
 
### TooManyProposals
- **interface**: `api.errors.council.TooManyProposals.is`
- **summary**:   There can only be a maximum of `MaxProposals` active proposals. 
 
### WrongIndex
- **interface**: `api.errors.council.WrongIndex.is`
- **summary**:   Mismatched index 
 
### WrongProposalLength
- **interface**: `api.errors.council.WrongProposalLength.is`
- **summary**:   The given length bound for the proposal was too low. 
 
### WrongProposalWeight
- **interface**: `api.errors.council.WrongProposalWeight.is`
- **summary**:   The given weight bound for the proposal was too low. 

___


## democracy
 
### AlreadyCanceled
- **interface**: `api.errors.democracy.AlreadyCanceled.is`
- **summary**:   Cannot cancel the same proposal twice 
 
### AlreadyDelegating
- **interface**: `api.errors.democracy.AlreadyDelegating.is`
- **summary**:   The account is already delegating. 
 
### AlreadyVetoed
- **interface**: `api.errors.democracy.AlreadyVetoed.is`
- **summary**:   Identity may not veto a proposal twice 
 
### BadIndex
- **interface**: `api.errors.democracy.BadIndex.is`
- **summary**:   Unknown index 
 
### DuplicatePreimage
- **interface**: `api.errors.democracy.DuplicatePreimage.is`
- **summary**:   Preimage already noted 
 
### DuplicateProposal
- **interface**: `api.errors.democracy.DuplicateProposal.is`
- **summary**:   Proposal already made 
 
### Imminent
- **interface**: `api.errors.democracy.Imminent.is`
- **summary**:   Imminent 
 
### InstantNotAllowed
- **interface**: `api.errors.democracy.InstantNotAllowed.is`
- **summary**:   The instant referendum origin is currently disallowed. 
 
### InsufficientFunds
- **interface**: `api.errors.democracy.InsufficientFunds.is`
- **summary**:   Too high a balance was provided that the account cannot afford. 
 
### InvalidHash
- **interface**: `api.errors.democracy.InvalidHash.is`
- **summary**:   Invalid hash 
 
### InvalidWitness
- **interface**: `api.errors.democracy.InvalidWitness.is`
- **summary**:   The provided witness data is wrong. 
 
### MaxVotesReached
- **interface**: `api.errors.democracy.MaxVotesReached.is`
- **summary**:   Maximum number of votes reached. 
 
### NoneWaiting
- **interface**: `api.errors.democracy.NoneWaiting.is`
- **summary**:   No proposals waiting 
 
### Nonsense
- **interface**: `api.errors.democracy.Nonsense.is`
- **summary**:   Delegation to oneself makes no sense. 
 
### NoPermission
- **interface**: `api.errors.democracy.NoPermission.is`
- **summary**:   The actor has no permission to conduct the action. 
 
### NoProposal
- **interface**: `api.errors.democracy.NoProposal.is`
- **summary**:   No external proposal 
 
### NotDelegated
- **interface**: `api.errors.democracy.NotDelegated.is`
- **summary**:   Not delegated 
 
### NotDelegating
- **interface**: `api.errors.democracy.NotDelegating.is`
- **summary**:   The account is not currently delegating. 
 
### NotExpired
- **interface**: `api.errors.democracy.NotExpired.is`
- **summary**:   The lock on the account to be unlocked has not yet expired. 
 
### NotImminent
- **interface**: `api.errors.democracy.NotImminent.is`
- **summary**:   Not imminent 
 
### NotLocked
- **interface**: `api.errors.democracy.NotLocked.is`
- **summary**:   The target account does not have a lock. 
 
### NotSimpleMajority
- **interface**: `api.errors.democracy.NotSimpleMajority.is`
- **summary**:   Next external proposal not simple majority 
 
### NotVoter
- **interface**: `api.errors.democracy.NotVoter.is`
- **summary**:   The given account did not vote on the referendum. 
 
### PreimageInvalid
- **interface**: `api.errors.democracy.PreimageInvalid.is`
- **summary**:   Invalid preimage 
 
### PreimageMissing
- **interface**: `api.errors.democracy.PreimageMissing.is`
- **summary**:   Preimage not found 
 
### ProposalBlacklisted
- **interface**: `api.errors.democracy.ProposalBlacklisted.is`
- **summary**:   Proposal still blacklisted 
 
### ProposalMissing
- **interface**: `api.errors.democracy.ProposalMissing.is`
- **summary**:   Proposal does not exist 
 
### ReferendumInvalid
- **interface**: `api.errors.democracy.ReferendumInvalid.is`
- **summary**:   Vote given for invalid referendum 
 
### TooEarly
- **interface**: `api.errors.democracy.TooEarly.is`
- **summary**:   Too early 
 
### TooManyProposals
- **interface**: `api.errors.democracy.TooManyProposals.is`
- **summary**:   Maximum number of proposals reached. 
 
### ValueLow
- **interface**: `api.errors.democracy.ValueLow.is`
- **summary**:   Value too low 
 
### VotesExist
- **interface**: `api.errors.democracy.VotesExist.is`
- **summary**:   The account currently has votes attached to it and the operation cannot succeed until these are removed, either through `unvote` or `reap_vote`. 
 
### WrongUpperBound
- **interface**: `api.errors.democracy.WrongUpperBound.is`
- **summary**:   Invalid upper bound. 

___


## electionProviderMultiPhase
 
### OcwCallWrongEra
- **interface**: `api.errors.electionProviderMultiPhase.OcwCallWrongEra.is`
- **summary**:   OCW submitted solution for wrong round 
 
### PreDispatchEarlySubmission
- **interface**: `api.errors.electionProviderMultiPhase.PreDispatchEarlySubmission.is`
- **summary**:   Submission was too early. 
 
### PreDispatchWeakSubmission
- **interface**: `api.errors.electionProviderMultiPhase.PreDispatchWeakSubmission.is`
- **summary**:   Submission was too weak, score-wise. 
 
### PreDispatchWrongWinnerCount
- **interface**: `api.errors.electionProviderMultiPhase.PreDispatchWrongWinnerCount.is`
- **summary**:   Wrong number of winners presented. 

___


## elections
 
### DuplicatedCandidate
- **interface**: `api.errors.elections.DuplicatedCandidate.is`
- **summary**:   Duplicated candidate submission. 
 
### InsufficientCandidateFunds
- **interface**: `api.errors.elections.InsufficientCandidateFunds.is`
- **summary**:   Candidate does not have enough funds. 
 
### InvalidRenouncing
- **interface**: `api.errors.elections.InvalidRenouncing.is`
- **summary**:   The renouncing origin presented a wrong `Renouncing` parameter. 
 
### InvalidReplacement
- **interface**: `api.errors.elections.InvalidReplacement.is`
- **summary**:   Prediction regarding replacement after member removal is wrong. 
 
### InvalidVoteCount
- **interface**: `api.errors.elections.InvalidVoteCount.is`
- **summary**:   The provided count of number of votes is incorrect. 
 
### InvalidWitnessData
- **interface**: `api.errors.elections.InvalidWitnessData.is`
- **summary**:   The provided count of number of candidates is incorrect. 
 
### LowBalance
- **interface**: `api.errors.elections.LowBalance.is`
- **summary**:   Cannot vote with stake less than minimum balance. 
 
### MaximumVotesExceeded
- **interface**: `api.errors.elections.MaximumVotesExceeded.is`
- **summary**:   Cannot vote more than maximum allowed. 
 
### MemberSubmit
- **interface**: `api.errors.elections.MemberSubmit.is`
- **summary**:   Member cannot re-submit candidacy. 
 
### MustBeVoter
- **interface**: `api.errors.elections.MustBeVoter.is`
- **summary**:   Must be a voter. 
 
### NotMember
- **interface**: `api.errors.elections.NotMember.is`
- **summary**:   Not a member. 
 
### NoVotes
- **interface**: `api.errors.elections.NoVotes.is`
- **summary**:   Must vote for at least one candidate. 
 
### ReportSelf
- **interface**: `api.errors.elections.ReportSelf.is`
- **summary**:   Cannot report self. 
 
### RunnerUpSubmit
- **interface**: `api.errors.elections.RunnerUpSubmit.is`
- **summary**:   Runner cannot re-submit candidacy. 
 
### TooManyVotes
- **interface**: `api.errors.elections.TooManyVotes.is`
- **summary**:   Cannot vote more than candidates. 
 
### UnableToPayBond
- **interface**: `api.errors.elections.UnableToPayBond.is`
- **summary**:   Voter can not pay voting bond. 
 
### UnableToVote
- **interface**: `api.errors.elections.UnableToVote.is`
- **summary**:   Cannot vote when no candidates or members exist. 

___


## gilt
 
### AmountTooSmall
- **interface**: `api.errors.gilt.AmountTooSmall.is`
- **summary**:   The amount of the bid is less than the minimum allowed. 
 
### BidTooLow
- **interface**: `api.errors.gilt.BidTooLow.is`
- **summary**:   The queue for the bid's duration is full and the amount bid is too low to get in through replacing an existing bid. 
 
### DurationTooBig
- **interface**: `api.errors.gilt.DurationTooBig.is`
- **summary**:   The duration is the bid is greater than the number of queues. 
 
### DurationTooSmall
- **interface**: `api.errors.gilt.DurationTooSmall.is`
- **summary**:   The duration of the bid is less than one. 
 
### NotExpired
- **interface**: `api.errors.gilt.NotExpired.is`
- **summary**:   Gilt not yet at expiry date. 
 
### NotFound
- **interface**: `api.errors.gilt.NotFound.is`
- **summary**:   The given bid for retraction is not found. 
 
### NotOwner
- **interface**: `api.errors.gilt.NotOwner.is`
- **summary**:   Not the owner of the gilt. 
 
### Unknown
- **interface**: `api.errors.gilt.Unknown.is`
- **summary**:   Gilt index is unknown. 

___


## grandpa
 
### ChangePending
- **interface**: `api.errors.grandpa.ChangePending.is`
- **summary**:   Attempt to signal GRANDPA change with one already pending. 
 
### DuplicateOffenceReport
- **interface**: `api.errors.grandpa.DuplicateOffenceReport.is`
- **summary**:   A given equivocation report is valid but already previously reported. 
 
### InvalidEquivocationProof
- **interface**: `api.errors.grandpa.InvalidEquivocationProof.is`
- **summary**:   An equivocation proof provided as part of an equivocation report is invalid. 
 
### InvalidKeyOwnershipProof
- **interface**: `api.errors.grandpa.InvalidKeyOwnershipProof.is`
- **summary**:   A key ownership proof provided as part of an equivocation report is invalid. 
 
### PauseFailed
- **interface**: `api.errors.grandpa.PauseFailed.is`
- **summary**:   Attempt to signal GRANDPA pause when the authority set isn't live (either paused or already pending pause). 
 
### ResumeFailed
- **interface**: `api.errors.grandpa.ResumeFailed.is`
- **summary**:   Attempt to signal GRANDPA resume when the authority set isn't paused (either live or already pending resume). 
 
### TooSoon
- **interface**: `api.errors.grandpa.TooSoon.is`
- **summary**:   Cannot signal forced change so soon after last. 

___


## identity
 
### AlreadyClaimed
- **interface**: `api.errors.identity.AlreadyClaimed.is`
- **summary**:   Account ID is already named. 
 
### EmptyIndex
- **interface**: `api.errors.identity.EmptyIndex.is`
- **summary**:   Empty index. 
 
### FeeChanged
- **interface**: `api.errors.identity.FeeChanged.is`
- **summary**:   Fee is changed. 
 
### InvalidIndex
- **interface**: `api.errors.identity.InvalidIndex.is`
- **summary**:   The index is invalid. 
 
### InvalidJudgement
- **interface**: `api.errors.identity.InvalidJudgement.is`
- **summary**:   Invalid judgement. 
 
### InvalidTarget
- **interface**: `api.errors.identity.InvalidTarget.is`
- **summary**:   The target is invalid. 
 
### JudgementGiven
- **interface**: `api.errors.identity.JudgementGiven.is`
- **summary**:   Judgement given. 
 
### NoIdentity
- **interface**: `api.errors.identity.NoIdentity.is`
- **summary**:   No identity found. 
 
### NotFound
- **interface**: `api.errors.identity.NotFound.is`
- **summary**:   Account isn't found. 
 
### NotNamed
- **interface**: `api.errors.identity.NotNamed.is`
- **summary**:   Account isn't named. 
 
### NotOwned
- **interface**: `api.errors.identity.NotOwned.is`
- **summary**:   Sub-account isn't owned by sender. 
 
### NotSub
- **interface**: `api.errors.identity.NotSub.is`
- **summary**:   Sender is not a sub-account. 
 
### StickyJudgement
- **interface**: `api.errors.identity.StickyJudgement.is`
- **summary**:   Sticky judgement. 
 
### TooManyFields
- **interface**: `api.errors.identity.TooManyFields.is`
- **summary**:   Too many additional fields. 
 
### TooManyRegistrars
- **interface**: `api.errors.identity.TooManyRegistrars.is`
- **summary**:   Maximum amount of registrars reached. Cannot add any more. 
 
### TooManySubAccounts
- **interface**: `api.errors.identity.TooManySubAccounts.is`
- **summary**:   Too many subs-accounts. 

___


## imOnline
 
### DuplicatedHeartbeat
- **interface**: `api.errors.imOnline.DuplicatedHeartbeat.is`
- **summary**:   Duplicated heartbeat. 
 
### InvalidKey
- **interface**: `api.errors.imOnline.InvalidKey.is`
- **summary**:   Non existent public key. 

___


## indices
 
### InUse
- **interface**: `api.errors.indices.InUse.is`
- **summary**:   The index was not available. 
 
### NotAssigned
- **interface**: `api.errors.indices.NotAssigned.is`
- **summary**:   The index was not already assigned. 
 
### NotOwner
- **interface**: `api.errors.indices.NotOwner.is`
- **summary**:   The index is assigned to another account. 
 
### NotTransfer
- **interface**: `api.errors.indices.NotTransfer.is`
- **summary**:   The source and destination accounts are identical. 
 
### Permanent
- **interface**: `api.errors.indices.Permanent.is`
- **summary**:   The index is permanent and may not be freed/changed. 

___


## lottery
 
### AlreadyEnded
- **interface**: `api.errors.lottery.AlreadyEnded.is`
- **summary**:   A lottery has already ended. 
 
### AlreadyParticipating
- **interface**: `api.errors.lottery.AlreadyParticipating.is`
- **summary**:   You are already participating in the lottery with this call. 
 
### EncodingFailed
- **interface**: `api.errors.lottery.EncodingFailed.is`
- **summary**:   Failed to encode calls 
 
### InProgress
- **interface**: `api.errors.lottery.InProgress.is`
- **summary**:   A lottery is already in progress. 
 
### InvalidCall
- **interface**: `api.errors.lottery.InvalidCall.is`
- **summary**:   The call is not valid for an open lottery. 
 
### NotConfigured
- **interface**: `api.errors.lottery.NotConfigured.is`
- **summary**:   A lottery has not been configured. 
 
### TooManyCalls
- **interface**: `api.errors.lottery.TooManyCalls.is`
- **summary**:   Too many calls for a single lottery. 

___


## multisig
 
### AlreadyApproved
- **interface**: `api.errors.multisig.AlreadyApproved.is`
- **summary**:   Call is already approved by this signatory. 
 
### AlreadyStored
- **interface**: `api.errors.multisig.AlreadyStored.is`
- **summary**:   The data to be stored is already stored. 
 
### MaxWeightTooLow
- **interface**: `api.errors.multisig.MaxWeightTooLow.is`
- **summary**:   The maximum weight information provided was too low. 
 
### MinimumThreshold
- **interface**: `api.errors.multisig.MinimumThreshold.is`
- **summary**:   Threshold must be 2 or greater. 
 
### NoApprovalsNeeded
- **interface**: `api.errors.multisig.NoApprovalsNeeded.is`
- **summary**:   Call doesn't need any (more) approvals. 
 
### NotFound
- **interface**: `api.errors.multisig.NotFound.is`
- **summary**:   Multisig operation not found when attempting to cancel. 
 
### NoTimepoint
- **interface**: `api.errors.multisig.NoTimepoint.is`
- **summary**:   No timepoint was given, yet the multisig operation is already underway. 
 
### NotOwner
- **interface**: `api.errors.multisig.NotOwner.is`
- **summary**:   Only the account that originally created the multisig is able to cancel it. 
 
### SenderInSignatories
- **interface**: `api.errors.multisig.SenderInSignatories.is`
- **summary**:   The sender was contained in the other signatories; it shouldn't be. 
 
### SignatoriesOutOfOrder
- **interface**: `api.errors.multisig.SignatoriesOutOfOrder.is`
- **summary**:   The signatories were provided out of order; they should be ordered. 
 
### TooFewSignatories
- **interface**: `api.errors.multisig.TooFewSignatories.is`
- **summary**:   There are too few signatories in the list. 
 
### TooManySignatories
- **interface**: `api.errors.multisig.TooManySignatories.is`
- **summary**:   There are too many signatories in the list. 
 
### UnexpectedTimepoint
- **interface**: `api.errors.multisig.UnexpectedTimepoint.is`
- **summary**:   A timepoint was given, yet no multisig operation is underway. 
 
### WrongTimepoint
- **interface**: `api.errors.multisig.WrongTimepoint.is`
- **summary**:   A different timepoint was given to the multisig operation that is underway. 

___


## proxy
 
### Duplicate
- **interface**: `api.errors.proxy.Duplicate.is`
- **summary**:   Account is already a proxy. 
 
### NoPermission
- **interface**: `api.errors.proxy.NoPermission.is`
- **summary**:   Call may not be made by proxy because it may escalate its privileges. 
 
### NoSelfProxy
- **interface**: `api.errors.proxy.NoSelfProxy.is`
- **summary**:   Cannot add self as proxy. 
 
### NotFound
- **interface**: `api.errors.proxy.NotFound.is`
- **summary**:   Proxy registration not found. 
 
### NotProxy
- **interface**: `api.errors.proxy.NotProxy.is`
- **summary**:   Sender is not a proxy of the account to be proxied. 
 
### TooMany
- **interface**: `api.errors.proxy.TooMany.is`
- **summary**:   There are too many proxies registered or too many announcements pending. 
 
### Unannounced
- **interface**: `api.errors.proxy.Unannounced.is`
- **summary**:   Announcement, if made at all, was made too recently. 
 
### Unproxyable
- **interface**: `api.errors.proxy.Unproxyable.is`
- **summary**:   A call which is incompatible with the proxy type's filter was attempted. 

___


## recovery
 
### AlreadyProxy
- **interface**: `api.errors.recovery.AlreadyProxy.is`
- **summary**:   This account is already set up for recovery 
 
### AlreadyRecoverable
- **interface**: `api.errors.recovery.AlreadyRecoverable.is`
- **summary**:   This account is already set up for recovery 
 
### AlreadyStarted
- **interface**: `api.errors.recovery.AlreadyStarted.is`
- **summary**:   A recovery process has already started for this account 
 
### AlreadyVouched
- **interface**: `api.errors.recovery.AlreadyVouched.is`
- **summary**:   This user has already vouched for this recovery 
 
### BadState
- **interface**: `api.errors.recovery.BadState.is`
- **summary**:   Some internal state is broken. 
 
### DelayPeriod
- **interface**: `api.errors.recovery.DelayPeriod.is`
- **summary**:   The friend must wait until the delay period to vouch for this recovery 
 
### MaxFriends
- **interface**: `api.errors.recovery.MaxFriends.is`
- **summary**:   Friends list must be less than max friends 
 
### NotAllowed
- **interface**: `api.errors.recovery.NotAllowed.is`
- **summary**:   User is not allowed to make a call on behalf of this account 
 
### NotEnoughFriends
- **interface**: `api.errors.recovery.NotEnoughFriends.is`
- **summary**:   Friends list must be greater than zero and threshold 
 
### NotFriend
- **interface**: `api.errors.recovery.NotFriend.is`
- **summary**:   This account is not a friend who can vouch 
 
### NotRecoverable
- **interface**: `api.errors.recovery.NotRecoverable.is`
- **summary**:   This account is not set up for recovery 
 
### NotSorted
- **interface**: `api.errors.recovery.NotSorted.is`
- **summary**:   Friends list must be sorted and free of duplicates 
 
### NotStarted
- **interface**: `api.errors.recovery.NotStarted.is`
- **summary**:   A recovery process has not started for this rescuer 
 
### StillActive
- **interface**: `api.errors.recovery.StillActive.is`
- **summary**:   There are still active recovery attempts that need to be closed 
 
### Threshold
- **interface**: `api.errors.recovery.Threshold.is`
- **summary**:   The threshold for recovering this account has not been met 
 
### ZeroThreshold
- **interface**: `api.errors.recovery.ZeroThreshold.is`
- **summary**:   Threshold must be greater than zero 

___


## scheduler
 
### FailedToSchedule
- **interface**: `api.errors.scheduler.FailedToSchedule.is`
- **summary**:   Failed to schedule a call 
 
### NotFound
- **interface**: `api.errors.scheduler.NotFound.is`
- **summary**:   Cannot find the scheduled call. 
 
### RescheduleNoChange
- **interface**: `api.errors.scheduler.RescheduleNoChange.is`
- **summary**:   Reschedule failed because it does not change scheduled time. 
 
### TargetBlockNumberInPast
- **interface**: `api.errors.scheduler.TargetBlockNumberInPast.is`
- **summary**:   Given target block number is in the past. 

___


## session
 
### DuplicatedKey
- **interface**: `api.errors.session.DuplicatedKey.is`
- **summary**:   Registered duplicate key. 
 
### InvalidProof
- **interface**: `api.errors.session.InvalidProof.is`
- **summary**:   Invalid ownership proof. 
 
### NoAccount
- **interface**: `api.errors.session.NoAccount.is`
- **summary**:   Key setting account is not live, so it's impossible to associate keys. 
 
### NoAssociatedValidatorId
- **interface**: `api.errors.session.NoAssociatedValidatorId.is`
- **summary**:   No associated validator ID for account. 
 
### NoKeys
- **interface**: `api.errors.session.NoKeys.is`
- **summary**:   No keys are associated with this account. 

___


## society
 
### AlreadyBid
- **interface**: `api.errors.society.AlreadyBid.is`
- **summary**:   User has already made a bid. 
 
### AlreadyCandidate
- **interface**: `api.errors.society.AlreadyCandidate.is`
- **summary**:   User is already a candidate. 
 
### AlreadyFounded
- **interface**: `api.errors.society.AlreadyFounded.is`
- **summary**:   Society already founded. 
 
### AlreadyMember
- **interface**: `api.errors.society.AlreadyMember.is`
- **summary**:   User is already a member. 
 
### AlreadyVouching
- **interface**: `api.errors.society.AlreadyVouching.is`
- **summary**:   Member is already vouching or banned from vouching again. 
 
### BadPosition
- **interface**: `api.errors.society.BadPosition.is`
- **summary**:   An incorrect position was provided. 
 
### Founder
- **interface**: `api.errors.society.Founder.is`
- **summary**:   Cannot remove the founder. 
 
### Head
- **interface**: `api.errors.society.Head.is`
- **summary**:   Cannot remove the head of the chain. 
 
### InsufficientPot
- **interface**: `api.errors.society.InsufficientPot.is`
- **summary**:   Not enough in pot to accept candidate. 
 
### MaxMembers
- **interface**: `api.errors.society.MaxMembers.is`
- **summary**:   Too many members in the society. 
 
### NoPayout
- **interface**: `api.errors.society.NoPayout.is`
- **summary**:   Nothing to payout. 
 
### NotCandidate
- **interface**: `api.errors.society.NotCandidate.is`
- **summary**:   User is not a candidate. 
 
### NotFounder
- **interface**: `api.errors.society.NotFounder.is`
- **summary**:   The caller is not the founder. 
 
### NotHead
- **interface**: `api.errors.society.NotHead.is`
- **summary**:   The caller is not the head. 
 
### NotMember
- **interface**: `api.errors.society.NotMember.is`
- **summary**:   User is not a member. 
 
### NotSuspended
- **interface**: `api.errors.society.NotSuspended.is`
- **summary**:   User is not suspended. 
 
### NotVouching
- **interface**: `api.errors.society.NotVouching.is`
- **summary**:   Member is not vouching. 
 
### Suspended
- **interface**: `api.errors.society.Suspended.is`
- **summary**:   User is suspended. 

___


## staking
 
### AlreadyBonded
- **interface**: `api.errors.staking.AlreadyBonded.is`
- **summary**:   Stash is already bonded. 
 
### AlreadyClaimed
- **interface**: `api.errors.staking.AlreadyClaimed.is`
- **summary**:   Rewards for this era have already been claimed for this validator. 
 
### AlreadyPaired
- **interface**: `api.errors.staking.AlreadyPaired.is`
- **summary**:   Controller is already paired. 
 
### BadState
- **interface**: `api.errors.staking.BadState.is`
- **summary**:   Internal state has become somehow corrupted and the operation cannot continue. 
 
### BadTarget
- **interface**: `api.errors.staking.BadTarget.is`
- **summary**:   A nomination target was supplied that was blocked or otherwise not a validator. 
 
### DuplicateIndex
- **interface**: `api.errors.staking.DuplicateIndex.is`
- **summary**:   Duplicate index. 
 
### EmptyTargets
- **interface**: `api.errors.staking.EmptyTargets.is`
- **summary**:   Targets cannot be empty. 
 
### FundedTarget
- **interface**: `api.errors.staking.FundedTarget.is`
- **summary**:   Attempting to target a stash that still has funds. 
 
### IncorrectHistoryDepth
- **interface**: `api.errors.staking.IncorrectHistoryDepth.is`
- **summary**:   Incorrect previous history depth input provided. 
 
### IncorrectSlashingSpans
- **interface**: `api.errors.staking.IncorrectSlashingSpans.is`
- **summary**:   Incorrect number of slashing spans provided. 
 
### InsufficientValue
- **interface**: `api.errors.staking.InsufficientValue.is`
- **summary**:   Can not bond with value less than minimum balance. 
 
### InvalidEraToReward
- **interface**: `api.errors.staking.InvalidEraToReward.is`
- **summary**:   Invalid era to reward. 
 
### InvalidNumberOfNominations
- **interface**: `api.errors.staking.InvalidNumberOfNominations.is`
- **summary**:   Invalid number of nominations. 
 
### InvalidSlashIndex
- **interface**: `api.errors.staking.InvalidSlashIndex.is`
- **summary**:   Slash record index out of bounds. 
 
### NoMoreChunks
- **interface**: `api.errors.staking.NoMoreChunks.is`
- **summary**:   Can not schedule more unlock chunks. 
 
### NotController
- **interface**: `api.errors.staking.NotController.is`
- **summary**:   Not a controller account. 
 
### NotSortedAndUnique
- **interface**: `api.errors.staking.NotSortedAndUnique.is`
- **summary**:   Items are not sorted and unique. 
 
### NotStash
- **interface**: `api.errors.staking.NotStash.is`
- **summary**:   Not a stash account. 
 
### NoUnlockChunk
- **interface**: `api.errors.staking.NoUnlockChunk.is`
- **summary**:   Can not rebond without unlocking chunks. 
 
### TooManyTargets
- **interface**: `api.errors.staking.TooManyTargets.is`
- **summary**:   Too many nomination targets supplied. 

___


## sudo
 
### RequireSudo
- **interface**: `api.errors.sudo.RequireSudo.is`
- **summary**:   Sender must be the Sudo account 

___


## system
 
### FailedToExtractRuntimeVersion
- **interface**: `api.errors.system.FailedToExtractRuntimeVersion.is`
- **summary**:   Failed to extract the runtime version from the new runtime. 

  Either calling `Core_version` or decoding `RuntimeVersion` failed. 
 
### InvalidSpecName
- **interface**: `api.errors.system.InvalidSpecName.is`
- **summary**:   The name of specification does not match between the current runtime and the new runtime. 
 
### NonDefaultComposite
- **interface**: `api.errors.system.NonDefaultComposite.is`
- **summary**:   Suicide called when the account has non-default composite data. 
 
### NonZeroRefCount
- **interface**: `api.errors.system.NonZeroRefCount.is`
- **summary**:   There is a non-zero reference count preventing the account from being purged. 
 
### SpecVersionNeedsToIncrease
- **interface**: `api.errors.system.SpecVersionNeedsToIncrease.is`
- **summary**:   The specification version is not allowed to decrease between the current runtime and the new runtime. 

___


## technicalCommittee
 
### AlreadyInitialized
- **interface**: `api.errors.technicalCommittee.AlreadyInitialized.is`
- **summary**:   Members are already initialized! 
 
### DuplicateProposal
- **interface**: `api.errors.technicalCommittee.DuplicateProposal.is`
- **summary**:   Duplicate proposals not allowed 
 
### DuplicateVote
- **interface**: `api.errors.technicalCommittee.DuplicateVote.is`
- **summary**:   Duplicate vote ignored 
 
### NotMember
- **interface**: `api.errors.technicalCommittee.NotMember.is`
- **summary**:   Account is not a member 
 
### ProposalMissing
- **interface**: `api.errors.technicalCommittee.ProposalMissing.is`
- **summary**:   Proposal must exist 
 
### TooEarly
- **interface**: `api.errors.technicalCommittee.TooEarly.is`
- **summary**:   The close call was made too early, before the end of the voting. 
 
### TooManyProposals
- **interface**: `api.errors.technicalCommittee.TooManyProposals.is`
- **summary**:   There can only be a maximum of `MaxProposals` active proposals. 
 
### WrongIndex
- **interface**: `api.errors.technicalCommittee.WrongIndex.is`
- **summary**:   Mismatched index 
 
### WrongProposalLength
- **interface**: `api.errors.technicalCommittee.WrongProposalLength.is`
- **summary**:   The given length bound for the proposal was too low. 
 
### WrongProposalWeight
- **interface**: `api.errors.technicalCommittee.WrongProposalWeight.is`
- **summary**:   The given weight bound for the proposal was too low. 

___


## technicalMembership
 
### AlreadyMember
- **interface**: `api.errors.technicalMembership.AlreadyMember.is`
- **summary**:   Already a member. 
 
### NotMember
- **interface**: `api.errors.technicalMembership.NotMember.is`
- **summary**:   Not a member. 

___


## tips
 
### AlreadyKnown
- **interface**: `api.errors.tips.AlreadyKnown.is`
- **summary**:   The tip was already found/started. 
 
### NotFinder
- **interface**: `api.errors.tips.NotFinder.is`
- **summary**:   The account attempting to retract the tip is not the finder of the tip. 
 
### Premature
- **interface**: `api.errors.tips.Premature.is`
- **summary**:   The tip cannot be claimed/closed because it's still in the countdown period. 
 
### ReasonTooBig
- **interface**: `api.errors.tips.ReasonTooBig.is`
- **summary**:   The reason given is just too big. 
 
### StillOpen
- **interface**: `api.errors.tips.StillOpen.is`
- **summary**:   The tip cannot be claimed/closed because there are not enough tippers yet. 
 
### UnknownTip
- **interface**: `api.errors.tips.UnknownTip.is`
- **summary**:   The tip hash is unknown. 

___


## transactionStorage
 
### BadContext
- **interface**: `api.errors.transactionStorage.BadContext.is`
- **summary**:   Attempted to call `store` outside of block execution. 
 
### DoubleCheck
- **interface**: `api.errors.transactionStorage.DoubleCheck.is`
- **summary**:   Double proof check in the block. 
 
### EmptyTransaction
- **interface**: `api.errors.transactionStorage.EmptyTransaction.is`
- **summary**:   Attempting to store empty transaction 
 
### InsufficientFunds
- **interface**: `api.errors.transactionStorage.InsufficientFunds.is`
- **summary**:   Insufficient account balance. 
 
### InvalidProof
- **interface**: `api.errors.transactionStorage.InvalidProof.is`
- **summary**:   Proof failed verification. 
 
### MissingProof
- **interface**: `api.errors.transactionStorage.MissingProof.is`
- **summary**:   Missing storage proof. 
 
### MissingStateData
- **interface**: `api.errors.transactionStorage.MissingStateData.is`
- **summary**:   Unable to verify proof becasue state data is missing. 
 
### NotConfigured
- **interface**: `api.errors.transactionStorage.NotConfigured.is`
- **summary**:   Invalid configuration. 
 
### ProofNotChecked
- **interface**: `api.errors.transactionStorage.ProofNotChecked.is`
- **summary**:   Storage proof was not checked in the block. 
 
### RenewedNotFound
- **interface**: `api.errors.transactionStorage.RenewedNotFound.is`
- **summary**:   Renewed extrinsic is not found. 
 
### TooManyTransactions
- **interface**: `api.errors.transactionStorage.TooManyTransactions.is`
- **summary**:   Too many transactions in the block. 
 
### TransactionTooLarge
- **interface**: `api.errors.transactionStorage.TransactionTooLarge.is`
- **summary**:   Transaction is too large. 
 
### UnexpectedProof
- **interface**: `api.errors.transactionStorage.UnexpectedProof.is`
- **summary**:   Proof was not expected in this block. 

___


## treasury
 
### InsufficientProposersBalance
- **interface**: `api.errors.treasury.InsufficientProposersBalance.is`
- **summary**:   Proposer's balance is too low. 
 
### InvalidIndex
- **interface**: `api.errors.treasury.InvalidIndex.is`
- **summary**:   No proposal or bounty at that index. 
 
### TooManyApprovals
- **interface**: `api.errors.treasury.TooManyApprovals.is`
- **summary**:   Too many approvals in the queue. 

___


## uniques
 
### AlreadyExists
- **interface**: `api.errors.uniques.AlreadyExists.is`
- **summary**:   The asset instance ID has already been used for an asset. 
 
### BadWitness
- **interface**: `api.errors.uniques.BadWitness.is`
- **summary**:   Invalid witness data given. 
 
### Frozen
- **interface**: `api.errors.uniques.Frozen.is`
- **summary**:   The asset instance or class is frozen. 
 
### InUse
- **interface**: `api.errors.uniques.InUse.is`
- **summary**:   The asset ID is already taken. 
 
### NoDelegate
- **interface**: `api.errors.uniques.NoDelegate.is`
- **summary**:   There is no delegate approved. 
 
### NoPermission
- **interface**: `api.errors.uniques.NoPermission.is`
- **summary**:   The signing account has no permission to do the operation. 
 
### Unapproved
- **interface**: `api.errors.uniques.Unapproved.is`
- **summary**:   No approval exists that would allow the transfer. 
 
### Unknown
- **interface**: `api.errors.uniques.Unknown.is`
- **summary**:   The given asset ID is unknown. 
 
### WrongDelegate
- **interface**: `api.errors.uniques.WrongDelegate.is`
- **summary**:   The delegate turned out to be different to what was expected. 
 
### WrongOwner
- **interface**: `api.errors.uniques.WrongOwner.is`
- **summary**:   The owner turned out to be different to what was expected. 

___


## vesting
 
### AmountLow
- **interface**: `api.errors.vesting.AmountLow.is`
- **summary**:   Amount being transferred is too low to create a vesting schedule. 
 
### ExistingVestingSchedule
- **interface**: `api.errors.vesting.ExistingVestingSchedule.is`
- **summary**:   An existing vesting schedule already exists for this account that cannot be clobbered. 
 
### NotVesting
- **interface**: `api.errors.vesting.NotVesting.is`
- **summary**:   The account given is not vesting. 
