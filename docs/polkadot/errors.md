---
title: Errors
---

This page lists the errors that can be encountered in the different modules. 

(NOTE: These were generated from a static/snapshot view of a recent default Polkadot runtime. Some items may not be available in older nodes, or in any customized implementations.)

- **[auctions](#auctions)**

- **[babe](#babe)**

- **[balances](#balances)**

- **[bounties](#bounties)**

- **[childBounties](#childbounties)**

- **[claims](#claims)**

- **[configuration](#configuration)**

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

- **[paraInclusion](#parainclusion)**

- **[paraInherent](#parainherent)**

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

- **[treasury](#treasury)**

- **[ump](#ump)**

- **[utility](#utility)**

- **[vesting](#vesting)**

- **[voterList](#voterlist)**

- **[whitelist](#whitelist)**

- **[xcmPallet](#xcmpallet)**


___


## auctions
 
### AlreadyLeasedOut
- **interface**: `api.errors.auctions.AlreadyLeasedOut.is`
- **summary**:    The para is already leased out for part of this range. 
 
### AuctionEnded
- **interface**: `api.errors.auctions.AuctionEnded.is`
- **summary**:    Auction has already ended. 
 
### AuctionInProgress
- **interface**: `api.errors.auctions.AuctionInProgress.is`
- **summary**:    This auction is already in progress. 
 
### LeasePeriodInPast
- **interface**: `api.errors.auctions.LeasePeriodInPast.is`
- **summary**:    The lease period is in the past. 
 
### NotAuction
- **interface**: `api.errors.auctions.NotAuction.is`
- **summary**:    Not an auction. 
 
### NotCurrentAuction
- **interface**: `api.errors.auctions.NotCurrentAuction.is`
- **summary**:    Not a current auction. 
 
### ParaNotRegistered
- **interface**: `api.errors.auctions.ParaNotRegistered.is`
- **summary**:    Para is not registered 

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


## balances
 
### DeadAccount
- **interface**: `api.errors.balances.DeadAccount.is`
- **summary**:    Beneficiary account must pre-exist. 
 
### ExistentialDeposit
- **interface**: `api.errors.balances.ExistentialDeposit.is`
- **summary**:    Value too low to create account due to existential deposit. 
 
### ExistingVestingSchedule
- **interface**: `api.errors.balances.ExistingVestingSchedule.is`
- **summary**:    A vesting schedule already exists for this account. 
 
### Expendability
- **interface**: `api.errors.balances.Expendability.is`
- **summary**:    Transfer/payment would kill account. 
 
### InsufficientBalance
- **interface**: `api.errors.balances.InsufficientBalance.is`
- **summary**:    Balance too low to send value. 
 
### LiquidityRestrictions
- **interface**: `api.errors.balances.LiquidityRestrictions.is`
- **summary**:    Account liquidity restrictions prevent withdrawal. 
 
### TooManyFreezes
- **interface**: `api.errors.balances.TooManyFreezes.is`
- **summary**:    Number of freezes exceed `MaxFreezes`. 
 
### TooManyHolds
- **interface**: `api.errors.balances.TooManyHolds.is`
- **summary**:    Number of holds exceed `MaxHolds`. 
 
### TooManyReserves
- **interface**: `api.errors.balances.TooManyReserves.is`
- **summary**:    Number of named reserves exceed `MaxReserves`. 
 
### VestingBalance
- **interface**: `api.errors.balances.VestingBalance.is`
- **summary**:    Vesting balance too high to send value. 

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


## claims
 
### InvalidEthereumSignature
- **interface**: `api.errors.claims.InvalidEthereumSignature.is`
- **summary**:    Invalid Ethereum signature. 
 
### InvalidStatement
- **interface**: `api.errors.claims.InvalidStatement.is`
- **summary**:    A needed statement was not included. 
 
### PotUnderflow
- **interface**: `api.errors.claims.PotUnderflow.is`
- **summary**:    There's not enough in the pot to pay out some unvested amount. Generally implies a logic  error. 
 
### SenderHasNoClaim
- **interface**: `api.errors.claims.SenderHasNoClaim.is`
- **summary**:    Account ID sending transaction has no claim. 
 
### SignerHasNoClaim
- **interface**: `api.errors.claims.SignerHasNoClaim.is`
- **summary**:    Ethereum address has no claim. 
 
### VestedBalanceExists
- **interface**: `api.errors.claims.VestedBalanceExists.is`
- **summary**:    The account already has a vested balance. 

___


## configuration
 
### InvalidNewValue
- **interface**: `api.errors.configuration.InvalidNewValue.is`
- **summary**:    The new value for a configuration parameter is invalid. 

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


## crowdloan
 
### AlreadyInNewRaise
- **interface**: `api.errors.crowdloan.AlreadyInNewRaise.is`
- **summary**:    The fund is already in `NewRaise` 
 
### BidOrLeaseActive
- **interface**: `api.errors.crowdloan.BidOrLeaseActive.is`
- **summary**:    This parachain's bid or lease is still active and withdraw cannot yet begin. 
 
### CannotEndInPast
- **interface**: `api.errors.crowdloan.CannotEndInPast.is`
- **summary**:    The campaign ends before the current block number. The end must be in the future. 
 
### CapExceeded
- **interface**: `api.errors.crowdloan.CapExceeded.is`
- **summary**:    Contributions exceed maximum amount. 
 
### ContributionPeriodOver
- **interface**: `api.errors.crowdloan.ContributionPeriodOver.is`
- **summary**:    The contribution period has already ended. 
 
### ContributionTooSmall
- **interface**: `api.errors.crowdloan.ContributionTooSmall.is`
- **summary**:    The contribution was below the minimum, `MinContribution`. 
 
### EndTooFarInFuture
- **interface**: `api.errors.crowdloan.EndTooFarInFuture.is`
- **summary**:    The end date for this crowdloan is not sensible. 
 
### FirstPeriodInPast
- **interface**: `api.errors.crowdloan.FirstPeriodInPast.is`
- **summary**:    The current lease period is more than the first lease period. 
 
### FirstPeriodTooFarInFuture
- **interface**: `api.errors.crowdloan.FirstPeriodTooFarInFuture.is`
- **summary**:    The first lease period needs to at least be less than 3 `max_value`. 
 
### FundNotEnded
- **interface**: `api.errors.crowdloan.FundNotEnded.is`
- **summary**:    The crowdloan has not yet ended. 
 
### InvalidOrigin
- **interface**: `api.errors.crowdloan.InvalidOrigin.is`
- **summary**:    The origin of this call is invalid. 
 
### InvalidParaId
- **interface**: `api.errors.crowdloan.InvalidParaId.is`
- **summary**:    Invalid fund index. 
 
### InvalidSignature
- **interface**: `api.errors.crowdloan.InvalidSignature.is`
- **summary**:    Invalid signature. 
 
### LastPeriodBeforeFirstPeriod
- **interface**: `api.errors.crowdloan.LastPeriodBeforeFirstPeriod.is`
- **summary**:    Last lease period must be greater than first lease period. 
 
### LastPeriodTooFarInFuture
- **interface**: `api.errors.crowdloan.LastPeriodTooFarInFuture.is`
- **summary**:    The last lease period cannot be more than 3 periods after the first period. 
 
### LeaseActive
- **interface**: `api.errors.crowdloan.LeaseActive.is`
- **summary**:    This parachain lease is still active and retirement cannot yet begin. 
 
### MemoTooLarge
- **interface**: `api.errors.crowdloan.MemoTooLarge.is`
- **summary**:    The provided memo is too large. 
 
### NoContributions
- **interface**: `api.errors.crowdloan.NoContributions.is`
- **summary**:    There are no contributions stored in this crowdloan. 
 
### NoLeasePeriod
- **interface**: `api.errors.crowdloan.NoLeasePeriod.is`
- **summary**:    A lease period has not started yet, due to an offset in the starting block. 
 
### NotParachain
- **interface**: `api.errors.crowdloan.NotParachain.is`
- **summary**:    This crowdloan does not correspond to a parachain. 
 
### NotReadyToDissolve
- **interface**: `api.errors.crowdloan.NotReadyToDissolve.is`
- **summary**:    The crowdloan is not ready to dissolve. Potentially still has a slot or in retirement period. 
 
### Overflow
- **interface**: `api.errors.crowdloan.Overflow.is`
- **summary**:    There was an overflow. 
 
### VrfDelayInProgress
- **interface**: `api.errors.crowdloan.VrfDelayInProgress.is`
- **summary**:    No contributions allowed during the VRF delay 

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
 
### DuplicateProposal
- **interface**: `api.errors.democracy.DuplicateProposal.is`
- **summary**:    Proposal already made 
 
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
 
### NotSimpleMajority
- **interface**: `api.errors.democracy.NotSimpleMajority.is`
- **summary**:    Next external proposal not simple majority 
 
### NotVoter
- **interface**: `api.errors.democracy.NotVoter.is`
- **summary**:    The given account did not vote on the referendum. 
 
### PreimageNotExist
- **interface**: `api.errors.democracy.PreimageNotExist.is`
- **summary**:    The preimage does not exist. 
 
### ProposalBlacklisted
- **interface**: `api.errors.democracy.ProposalBlacklisted.is`
- **summary**:    Proposal still blacklisted 
 
### ProposalMissing
- **interface**: `api.errors.democracy.ProposalMissing.is`
- **summary**:    Proposal does not exist 
 
### ReferendumInvalid
- **interface**: `api.errors.democracy.ReferendumInvalid.is`
- **summary**:    Vote given for invalid referendum 
 
### TooMany
- **interface**: `api.errors.democracy.TooMany.is`
- **summary**:    Maximum number of items reached. 
 
### ValueLow
- **interface**: `api.errors.democracy.ValueLow.is`
- **summary**:    Value too low 
 
### VotesExist
- **interface**: `api.errors.democracy.VotesExist.is`
- **summary**:    The account currently has votes attached to it and the operation cannot succeed until  these are removed, either through `unvote` or `reap_vote`. 
 
### VotingPeriodLow
- **interface**: `api.errors.democracy.VotingPeriodLow.is`
- **summary**:    Voting period too low 
 
### WrongUpperBound
- **interface**: `api.errors.democracy.WrongUpperBound.is`
- **summary**:    Invalid upper bound. 

___


## electionProviderMultiPhase
 
### BoundNotMet
- **interface**: `api.errors.electionProviderMultiPhase.BoundNotMet.is`
- **summary**:    Some bound not met 
 
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
 
### TooManyWinners
- **interface**: `api.errors.electionProviderMultiPhase.TooManyWinners.is`
- **summary**:    Submitted solution has too many winners 

___


## fastUnstake
 
### AlreadyHead
- **interface**: `api.errors.fastUnstake.AlreadyHead.is`
- **summary**:    The provided un-staker is already in Head, and cannot deregister. 
 
### AlreadyQueued
- **interface**: `api.errors.fastUnstake.AlreadyQueued.is`
- **summary**:    The bonded account has already been queued. 
 
### CallNotAllowed
- **interface**: `api.errors.fastUnstake.CallNotAllowed.is`
- **summary**:    The call is not allowed at this point because the pallet is not active. 
 
### NotController
- **interface**: `api.errors.fastUnstake.NotController.is`
- **summary**:    The provided Controller account was not found. 

   This means that the given account is not bonded. 
 
### NotFullyBonded
- **interface**: `api.errors.fastUnstake.NotFullyBonded.is`
- **summary**:    The bonded account has active unlocking chunks. 
 
### NotQueued
- **interface**: `api.errors.fastUnstake.NotQueued.is`
- **summary**:    The provided un-staker is not in the `Queue`. 

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


## hrmp
 
### AcceptHrmpChannelAlreadyConfirmed
- **interface**: `api.errors.hrmp.AcceptHrmpChannelAlreadyConfirmed.is`
- **summary**:    The channel is already confirmed. 
 
### AcceptHrmpChannelDoesntExist
- **interface**: `api.errors.hrmp.AcceptHrmpChannelDoesntExist.is`
- **summary**:    The channel from the sender to the origin doesn't exist. 
 
### AcceptHrmpChannelLimitExceeded
- **interface**: `api.errors.hrmp.AcceptHrmpChannelLimitExceeded.is`
- **summary**:    The recipient already has the maximum number of allowed inbound channels. 
 
### CancelHrmpOpenChannelUnauthorized
- **interface**: `api.errors.hrmp.CancelHrmpOpenChannelUnauthorized.is`
- **summary**:    Canceling is requested by neither the sender nor recipient of the open channel request. 
 
### CloseHrmpChannelAlreadyUnderway
- **interface**: `api.errors.hrmp.CloseHrmpChannelAlreadyUnderway.is`
- **summary**:    The channel close request is already requested. 
 
### CloseHrmpChannelDoesntExist
- **interface**: `api.errors.hrmp.CloseHrmpChannelDoesntExist.is`
- **summary**:    The channel to be closed doesn't exist. 
 
### CloseHrmpChannelUnauthorized
- **interface**: `api.errors.hrmp.CloseHrmpChannelUnauthorized.is`
- **summary**:    The origin tries to close a channel where it is neither the sender nor the recipient. 
 
### OpenHrmpChannelAlreadyConfirmed
- **interface**: `api.errors.hrmp.OpenHrmpChannelAlreadyConfirmed.is`
- **summary**:    Cannot cancel an HRMP open channel request because it is already confirmed. 
 
### OpenHrmpChannelAlreadyExists
- **interface**: `api.errors.hrmp.OpenHrmpChannelAlreadyExists.is`
- **summary**:    The channel already exists 
 
### OpenHrmpChannelAlreadyRequested
- **interface**: `api.errors.hrmp.OpenHrmpChannelAlreadyRequested.is`
- **summary**:    There is already a request to open the same channel. 
 
### OpenHrmpChannelCapacityExceedsLimit
- **interface**: `api.errors.hrmp.OpenHrmpChannelCapacityExceedsLimit.is`
- **summary**:    The requested capacity exceeds the global limit. 
 
### OpenHrmpChannelDoesntExist
- **interface**: `api.errors.hrmp.OpenHrmpChannelDoesntExist.is`
- **summary**:    The open request doesn't exist. 
 
### OpenHrmpChannelInvalidRecipient
- **interface**: `api.errors.hrmp.OpenHrmpChannelInvalidRecipient.is`
- **summary**:    The recipient is not a valid para. 
 
### OpenHrmpChannelLimitExceeded
- **interface**: `api.errors.hrmp.OpenHrmpChannelLimitExceeded.is`
- **summary**:    The sender already has the maximum number of allowed outbound channels. 
 
### OpenHrmpChannelMessageSizeExceedsLimit
- **interface**: `api.errors.hrmp.OpenHrmpChannelMessageSizeExceedsLimit.is`
- **summary**:    The open request requested the message size that exceeds the global limit. 
 
### OpenHrmpChannelToSelf
- **interface**: `api.errors.hrmp.OpenHrmpChannelToSelf.is`
- **summary**:    The sender tried to open a channel to themselves. 
 
### OpenHrmpChannelZeroCapacity
- **interface**: `api.errors.hrmp.OpenHrmpChannelZeroCapacity.is`
- **summary**:    The requested capacity is zero. 
 
### OpenHrmpChannelZeroMessageSize
- **interface**: `api.errors.hrmp.OpenHrmpChannelZeroMessageSize.is`
- **summary**:    The requested maximum message size is 0. 
 
### WrongWitness
- **interface**: `api.errors.hrmp.WrongWitness.is`
- **summary**:    The provided witness data is wrong. 

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
 
### JudgementForDifferentIdentity
- **interface**: `api.errors.identity.JudgementForDifferentIdentity.is`
- **summary**:    The provided judgement was for a different identity. 
 
### JudgementGiven
- **interface**: `api.errors.identity.JudgementGiven.is`
- **summary**:    Judgement given. 
 
### JudgementPaymentFailed
- **interface**: `api.errors.identity.JudgementPaymentFailed.is`
- **summary**:    Error that occurs when there is an issue paying for judgement. 
 
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
 
### BondExtraRestricted
- **interface**: `api.errors.nominationPools.BondExtraRestricted.is`
- **summary**:    Bonding extra is restricted to the exact pending reward amount. 
 
### CanNotChangeState
- **interface**: `api.errors.nominationPools.CanNotChangeState.is`
- **summary**:    The pools state cannot be changed. 
 
### CannotWithdrawAny
- **interface**: `api.errors.nominationPools.CannotWithdrawAny.is`
- **summary**:    None of the funds can be withdrawn yet because the bonding duration has not passed. 
 
### CommissionChangeRateNotAllowed
- **interface**: `api.errors.nominationPools.CommissionChangeRateNotAllowed.is`
- **summary**:    The submitted changes to commission change rate are not allowed. 
 
### CommissionChangeThrottled
- **interface**: `api.errors.nominationPools.CommissionChangeThrottled.is`
- **summary**:    Not enough blocks have surpassed since the last commission update. 
 
### CommissionExceedsMaximum
- **interface**: `api.errors.nominationPools.CommissionExceedsMaximum.is`
- **summary**:    The supplied commission exceeds the max allowed commission. 
 
### Defensive
- **interface**: `api.errors.nominationPools.Defensive.is`
- **summary**:    Some error occurred that should never happen. This should be reported to the  maintainers. 
 
### DoesNotHavePermission
- **interface**: `api.errors.nominationPools.DoesNotHavePermission.is`
- **summary**:    The caller does not have adequate permissions. 
 
### FullyUnbonding
- **interface**: `api.errors.nominationPools.FullyUnbonding.is`
- **summary**:    The member is fully unbonded (and thus cannot access the bonded and reward pool  anymore to, for example, collect rewards). 
 
### InvalidPoolId
- **interface**: `api.errors.nominationPools.InvalidPoolId.is`
- **summary**:    Pool id provided is not correct/usable. 
 
### MaxCommissionRestricted
- **interface**: `api.errors.nominationPools.MaxCommissionRestricted.is`
- **summary**:    The pool's max commission cannot be set higher than the existing value. 
 
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

   The depositor can never unbond to a value less than  `Pallet::depositor_min_bond`. The caller does not have nominating  permissions for the pool. Members can never unbond to a value below `MinJoinBond`. 
 
### NoCommissionCurrentSet
- **interface**: `api.errors.nominationPools.NoCommissionCurrentSet.is`
- **summary**:    No commission current has been set. 
 
### NoPendingCommission
- **interface**: `api.errors.nominationPools.NoPendingCommission.is`
- **summary**:    There is no pending commission to claim. 
 
### NotDestroying
- **interface**: `api.errors.nominationPools.NotDestroying.is`
- **summary**:    A pool must be in [`PoolState::Destroying`] in order for the depositor to unbond or for  other members to be permissionlessly unbonded. 
 
### NotKickerOrDestroying
- **interface**: `api.errors.nominationPools.NotKickerOrDestroying.is`
- **summary**:    Either a) the caller cannot make a valid kick or b) the pool is not destroying. 
 
### NotNominator
- **interface**: `api.errors.nominationPools.NotNominator.is`
- **summary**:    The caller does not have nominating permissions for the pool. 
 
### NotOpen
- **interface**: `api.errors.nominationPools.NotOpen.is`
- **summary**:    The pool is not open to join 
 
### OverflowRisk
- **interface**: `api.errors.nominationPools.OverflowRisk.is`
- **summary**:    The transaction could not be executed due to overflow risk for the pool. 
 
### PartialUnbondNotAllowedPermissionlessly
- **interface**: `api.errors.nominationPools.PartialUnbondNotAllowedPermissionlessly.is`
- **summary**:    Partial unbonding now allowed permissionlessly. 
 
### PoolIdInUse
- **interface**: `api.errors.nominationPools.PoolIdInUse.is`
- **summary**:    Pool id currently in use. 
 
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


## paraInclusion
 
### BitfieldAllZeros
- **interface**: `api.errors.paraInclusion.BitfieldAllZeros.is`
- **summary**:    Bitfield consists of zeros only. 
 
### BitfieldDuplicateOrUnordered
- **interface**: `api.errors.paraInclusion.BitfieldDuplicateOrUnordered.is`
- **summary**:    Multiple bitfields submitted by same validator or validators out of order by index. 
 
### BitfieldReferencesFreedCore
- **interface**: `api.errors.paraInclusion.BitfieldReferencesFreedCore.is`
- **summary**:    A bitfield that references a freed core,  either intentionally or as part of a concluded  invalid dispute. 
 
### CandidateNotInParentContext
- **interface**: `api.errors.paraInclusion.CandidateNotInParentContext.is`
- **summary**:    Candidate not in parent context. 
 
### CandidateScheduledBeforeParaFree
- **interface**: `api.errors.paraInclusion.CandidateScheduledBeforeParaFree.is`
- **summary**:    Candidate scheduled despite pending candidate already existing for the para. 
 
### HeadDataTooLarge
- **interface**: `api.errors.paraInclusion.HeadDataTooLarge.is`
- **summary**:    Head data exceeds the configured maximum. 
 
### HrmpWatermarkMishandling
- **interface**: `api.errors.paraInclusion.HrmpWatermarkMishandling.is`
- **summary**:    The candidate didn't follow the rules of HRMP watermark advancement. 
 
### IncorrectDownwardMessageHandling
- **interface**: `api.errors.paraInclusion.IncorrectDownwardMessageHandling.is`
- **summary**:    The downward message queue is not processed correctly. 
 
### InsufficientBacking
- **interface**: `api.errors.paraInclusion.InsufficientBacking.is`
- **summary**:    Insufficient (non-majority) backing. 
 
### InvalidBacking
- **interface**: `api.errors.paraInclusion.InvalidBacking.is`
- **summary**:    Invalid (bad signature, unknown validator, etc.) backing. 
 
### InvalidBitfieldSignature
- **interface**: `api.errors.paraInclusion.InvalidBitfieldSignature.is`
- **summary**:    Invalid signature 
 
### InvalidGroupIndex
- **interface**: `api.errors.paraInclusion.InvalidGroupIndex.is`
- **summary**:    Invalid group index in core assignment. 
 
### InvalidOutboundHrmp
- **interface**: `api.errors.paraInclusion.InvalidOutboundHrmp.is`
- **summary**:    The HRMP messages sent by the candidate is not valid. 
 
### InvalidUpwardMessages
- **interface**: `api.errors.paraInclusion.InvalidUpwardMessages.is`
- **summary**:    At least one upward message sent does not pass the acceptance criteria. 
 
### InvalidValidationCodeHash
- **interface**: `api.errors.paraInclusion.InvalidValidationCodeHash.is`
- **summary**:    The validation code hash of the candidate is not valid. 
 
### NewCodeTooLarge
- **interface**: `api.errors.paraInclusion.NewCodeTooLarge.is`
- **summary**:    Output code is too large 
 
### NotCollatorSigned
- **interface**: `api.errors.paraInclusion.NotCollatorSigned.is`
- **summary**:    Collator did not sign PoV. 
 
### ParaHeadMismatch
- **interface**: `api.errors.paraInclusion.ParaHeadMismatch.is`
- **summary**:    The `para_head` hash in the candidate descriptor doesn't match the hash of the actual para head in the  commitments. 
 
### PrematureCodeUpgrade
- **interface**: `api.errors.paraInclusion.PrematureCodeUpgrade.is`
- **summary**:    Code upgrade prematurely. 
 
### ScheduledOutOfOrder
- **interface**: `api.errors.paraInclusion.ScheduledOutOfOrder.is`
- **summary**:    Scheduled cores out of order. 
 
### UnexpectedRelayParent
- **interface**: `api.errors.paraInclusion.UnexpectedRelayParent.is`
- **summary**:    A different relay parent was provided compared to the on-chain stored one. 
 
### UnscheduledCandidate
- **interface**: `api.errors.paraInclusion.UnscheduledCandidate.is`
- **summary**:    Candidate submitted but para not scheduled. 
 
### UnsortedOrDuplicateBackedCandidates
- **interface**: `api.errors.paraInclusion.UnsortedOrDuplicateBackedCandidates.is`
- **summary**:    Backed candidates are out of order (core index) or contain duplicates. 
 
### UnsortedOrDuplicateDisputeStatementSet
- **interface**: `api.errors.paraInclusion.UnsortedOrDuplicateDisputeStatementSet.is`
- **summary**:    Dispute statement sets are out of order or contain duplicates. 
 
### UnsortedOrDuplicateValidatorIndices
- **interface**: `api.errors.paraInclusion.UnsortedOrDuplicateValidatorIndices.is`
- **summary**:    Validator indices are out of order or contains duplicates. 
 
### ValidationDataHashMismatch
- **interface**: `api.errors.paraInclusion.ValidationDataHashMismatch.is`
- **summary**:    The validation data hash does not match expected. 
 
### ValidatorIndexOutOfBounds
- **interface**: `api.errors.paraInclusion.ValidatorIndexOutOfBounds.is`
- **summary**:    Validator index out of bounds. 
 
### WrongBitfieldSize
- **interface**: `api.errors.paraInclusion.WrongBitfieldSize.is`
- **summary**:    Availability bitfield has unexpected size. 
 
### WrongCollator
- **interface**: `api.errors.paraInclusion.WrongCollator.is`
- **summary**:    Candidate included with the wrong collator. 

___


## paraInherent
 
### CandidateConcludedInvalid
- **interface**: `api.errors.paraInherent.CandidateConcludedInvalid.is`
- **summary**:    Disputed candidate that was concluded invalid. 
 
### DisputeInvalid
- **interface**: `api.errors.paraInherent.DisputeInvalid.is`
- **summary**:    A dispute statement was invalid. 
 
### DisputeStatementsUnsortedOrDuplicates
- **interface**: `api.errors.paraInherent.DisputeStatementsUnsortedOrDuplicates.is`
- **summary**:    The ordering of dispute statements was invalid. 
 
### InherentOverweight
- **interface**: `api.errors.paraInherent.InherentOverweight.is`
- **summary**:    The data given to the inherent will result in an overweight block. 
 
### InvalidParentHeader
- **interface**: `api.errors.paraInherent.InvalidParentHeader.is`
- **summary**:    The hash of the submitted parent header doesn't correspond to the saved block hash of  the parent. 
 
### TooManyInclusionInherents
- **interface**: `api.errors.paraInherent.TooManyInclusionInherents.is`
- **summary**:    Inclusion inherent called more than once per block. 

___


## paras
 
### CannotDowngrade
- **interface**: `api.errors.paras.CannotDowngrade.is`
- **summary**:    Para cannot be downgraded to a parathread. 
 
### CannotOffboard
- **interface**: `api.errors.paras.CannotOffboard.is`
- **summary**:    Para cannot be offboarded at this time. 
 
### CannotOnboard
- **interface**: `api.errors.paras.CannotOnboard.is`
- **summary**:    Para cannot be onboarded because it is already tracked by our system. 
 
### CannotUpgrade
- **interface**: `api.errors.paras.CannotUpgrade.is`
- **summary**:    Para cannot be upgraded to a parachain. 
 
### CannotUpgradeCode
- **interface**: `api.errors.paras.CannotUpgradeCode.is`
- **summary**:    Parachain cannot currently schedule a code upgrade. 
 
### NotRegistered
- **interface**: `api.errors.paras.NotRegistered.is`
- **summary**:    Para is not registered in our system. 
 
### PvfCheckDisabled
- **interface**: `api.errors.paras.PvfCheckDisabled.is`
- **summary**:    The PVF pre-checking statement cannot be included since the PVF pre-checking mechanism  is disabled. 
 
### PvfCheckDoubleVote
- **interface**: `api.errors.paras.PvfCheckDoubleVote.is`
- **summary**:    The given validator already has cast a vote. 
 
### PvfCheckInvalidSignature
- **interface**: `api.errors.paras.PvfCheckInvalidSignature.is`
- **summary**:    The signature for the PVF pre-checking is invalid. 
 
### PvfCheckStatementFuture
- **interface**: `api.errors.paras.PvfCheckStatementFuture.is`
- **summary**:    The statement for PVF pre-checking is for a future session. 
 
### PvfCheckStatementStale
- **interface**: `api.errors.paras.PvfCheckStatementStale.is`
- **summary**:    The statement for PVF pre-checking is stale. 
 
### PvfCheckSubjectInvalid
- **interface**: `api.errors.paras.PvfCheckSubjectInvalid.is`
- **summary**:    The given PVF does not exist at the moment of process a vote. 
 
### PvfCheckValidatorIndexOutOfBounds
- **interface**: `api.errors.paras.PvfCheckValidatorIndexOutOfBounds.is`
- **summary**:    Claimed validator index is out of bounds. 

___


## parasDisputes
 
### AncientDisputeStatement
- **interface**: `api.errors.parasDisputes.AncientDisputeStatement.is`
- **summary**:    Ancient dispute statement provided. 
 
### DuplicateDisputeStatementSets
- **interface**: `api.errors.parasDisputes.DuplicateDisputeStatementSets.is`
- **summary**:    Duplicate dispute statement sets provided. 
 
### DuplicateStatement
- **interface**: `api.errors.parasDisputes.DuplicateStatement.is`
- **summary**:    Validator vote submitted more than once to dispute. 
 
### InvalidSignature
- **interface**: `api.errors.parasDisputes.InvalidSignature.is`
- **summary**:    Invalid signature on statement. 
 
### MaliciousBacker
- **interface**: `api.errors.parasDisputes.MaliciousBacker.is`
- **summary**:    A dispute vote from a malicious backer. 
 
### MissingBackingVotes
- **interface**: `api.errors.parasDisputes.MissingBackingVotes.is`
- **summary**:    No backing votes were provides along dispute statements. 
 
### SingleSidedDispute
- **interface**: `api.errors.parasDisputes.SingleSidedDispute.is`
- **summary**:    A dispute where there are only votes on one side. 
 
### UnconfirmedDispute
- **interface**: `api.errors.parasDisputes.UnconfirmedDispute.is`
- **summary**:    Unconfirmed dispute statement sets provided. 
 
### ValidatorIndexOutOfBounds
- **interface**: `api.errors.parasDisputes.ValidatorIndexOutOfBounds.is`
- **summary**:    Validator index on statement is out of bounds for session. 

___


## phragmenElection
 
### DuplicatedCandidate
- **interface**: `api.errors.phragmenElection.DuplicatedCandidate.is`
- **summary**:    Duplicated candidate submission. 
 
### InsufficientCandidateFunds
- **interface**: `api.errors.phragmenElection.InsufficientCandidateFunds.is`
- **summary**:    Candidate does not have enough funds. 
 
### InvalidRenouncing
- **interface**: `api.errors.phragmenElection.InvalidRenouncing.is`
- **summary**:    The renouncing origin presented a wrong `Renouncing` parameter. 
 
### InvalidReplacement
- **interface**: `api.errors.phragmenElection.InvalidReplacement.is`
- **summary**:    Prediction regarding replacement after member removal is wrong. 
 
### InvalidVoteCount
- **interface**: `api.errors.phragmenElection.InvalidVoteCount.is`
- **summary**:    The provided count of number of votes is incorrect. 
 
### InvalidWitnessData
- **interface**: `api.errors.phragmenElection.InvalidWitnessData.is`
- **summary**:    The provided count of number of candidates is incorrect. 
 
### LowBalance
- **interface**: `api.errors.phragmenElection.LowBalance.is`
- **summary**:    Cannot vote with stake less than minimum balance. 
 
### MaximumVotesExceeded
- **interface**: `api.errors.phragmenElection.MaximumVotesExceeded.is`
- **summary**:    Cannot vote more than maximum allowed. 
 
### MemberSubmit
- **interface**: `api.errors.phragmenElection.MemberSubmit.is`
- **summary**:    Member cannot re-submit candidacy. 
 
### MustBeVoter
- **interface**: `api.errors.phragmenElection.MustBeVoter.is`
- **summary**:    Must be a voter. 
 
### NotMember
- **interface**: `api.errors.phragmenElection.NotMember.is`
- **summary**:    Not a member. 
 
### NoVotes
- **interface**: `api.errors.phragmenElection.NoVotes.is`
- **summary**:    Must vote for at least one candidate. 
 
### RunnerUpSubmit
- **interface**: `api.errors.phragmenElection.RunnerUpSubmit.is`
- **summary**:    Runner cannot re-submit candidacy. 
 
### TooManyCandidates
- **interface**: `api.errors.phragmenElection.TooManyCandidates.is`
- **summary**:    Too many candidates have been created. 
 
### TooManyVotes
- **interface**: `api.errors.phragmenElection.TooManyVotes.is`
- **summary**:    Cannot vote more than candidates. 
 
### UnableToPayBond
- **interface**: `api.errors.phragmenElection.UnableToPayBond.is`
- **summary**:    Voter can not pay voting bond. 
 
### UnableToVote
- **interface**: `api.errors.phragmenElection.UnableToVote.is`
- **summary**:    Cannot vote when no candidates or members exist. 

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
 
### TooBig
- **interface**: `api.errors.preimage.TooBig.is`
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


## referenda
 
### BadReferendum
- **interface**: `api.errors.referenda.BadReferendum.is`
- **summary**:    The referendum index provided is invalid in this context. 
 
### BadStatus
- **interface**: `api.errors.referenda.BadStatus.is`
- **summary**:    The referendum status is invalid for this operation. 
 
### BadTrack
- **interface**: `api.errors.referenda.BadTrack.is`
- **summary**:    The track identifier given was invalid. 
 
### Full
- **interface**: `api.errors.referenda.Full.is`
- **summary**:    There are already a full complement of referenda in progress for this track. 
 
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
 
### PreimageNotExist
- **interface**: `api.errors.referenda.PreimageNotExist.is`
- **summary**:    The preimage does not exist. 
 
### QueueEmpty
- **interface**: `api.errors.referenda.QueueEmpty.is`
- **summary**:    The queue of the track is empty. 
 
### Unfinished
- **interface**: `api.errors.referenda.Unfinished.is`
- **summary**:    Any deposit cannot be refunded until after the decision is over. 

___


## registrar
 
### AlreadyRegistered
- **interface**: `api.errors.registrar.AlreadyRegistered.is`
- **summary**:    The ID is already registered. 
 
### CannotDeregister
- **interface**: `api.errors.registrar.CannotDeregister.is`
- **summary**:    Cannot deregister para 
 
### CannotDowngrade
- **interface**: `api.errors.registrar.CannotDowngrade.is`
- **summary**:    Cannot schedule downgrade of parachain to parathread 
 
### CannotSwap
- **interface**: `api.errors.registrar.CannotSwap.is`
- **summary**:    Cannot perform a parachain slot / lifecycle swap. Check that the state of both paras are  correct for the swap to work. 
 
### CannotUpgrade
- **interface**: `api.errors.registrar.CannotUpgrade.is`
- **summary**:    Cannot schedule upgrade of parathread to parachain 
 
### CodeTooLarge
- **interface**: `api.errors.registrar.CodeTooLarge.is`
- **summary**:    Invalid para code size. 
 
### EmptyCode
- **interface**: `api.errors.registrar.EmptyCode.is`
- **summary**:    Registering parachain with empty code is not allowed. 
 
### HeadDataTooLarge
- **interface**: `api.errors.registrar.HeadDataTooLarge.is`
- **summary**:    Invalid para head data size. 
 
### NotOwner
- **interface**: `api.errors.registrar.NotOwner.is`
- **summary**:    The caller is not the owner of this Id. 
 
### NotParachain
- **interface**: `api.errors.registrar.NotParachain.is`
- **summary**:    Para is not a Parachain. 
 
### NotParathread
- **interface**: `api.errors.registrar.NotParathread.is`
- **summary**:    Para is not a Parathread. 
 
### NotRegistered
- **interface**: `api.errors.registrar.NotRegistered.is`
- **summary**:    The ID is not registered. 
 
### NotReserved
- **interface**: `api.errors.registrar.NotReserved.is`
- **summary**:    The ID given for registration has not been reserved. 
 
### ParaLocked
- **interface**: `api.errors.registrar.ParaLocked.is`
- **summary**:    Para is locked from manipulation by the manager. Must use parachain or relay chain governance. 

___


## scheduler
 
### FailedToSchedule
- **interface**: `api.errors.scheduler.FailedToSchedule.is`
- **summary**:    Failed to schedule a call 
 
### Named
- **interface**: `api.errors.scheduler.Named.is`
- **summary**:    Attempt to use a non-named function on a named task. 
 
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


## slots
 
### LeaseError
- **interface**: `api.errors.slots.LeaseError.is`
- **summary**:    There was an error with the lease. 
 
### ParaNotOnboarding
- **interface**: `api.errors.slots.ParaNotOnboarding.is`
- **summary**:    The parachain ID is not onboarding. 

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
 
### BoundNotMet
- **interface**: `api.errors.staking.BoundNotMet.is`
- **summary**:    Some bound is not met. 
 
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
- **summary**:    There are too many validator candidates in the system. Governance needs to adjust the  staking settings to keep things safe for the runtime. 

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


## ump
 
### UnknownMessageIndex
- **interface**: `api.errors.ump.UnknownMessageIndex.is`
- **summary**:    The message index given is unknown. 
 
### WeightOverLimit
- **interface**: `api.errors.ump.WeightOverLimit.is`
- **summary**:    The amount of weight given is possibly not enough for executing the message. 

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


## voterList
 
### List
- **interface**: `api.errors.voterList.List.is`
- **summary**:    A error in the list interface implementation. 

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

___


## xcmPallet
 
### AccountNotSovereign
- **interface**: `api.errors.xcmPallet.AccountNotSovereign.is`
- **summary**:    The given account is not an identifiable sovereign account for any location. 
 
### AlreadySubscribed
- **interface**: `api.errors.xcmPallet.AlreadySubscribed.is`
- **summary**:    The location is invalid since it already has a subscription from us. 
 
### BadLocation
- **interface**: `api.errors.xcmPallet.BadLocation.is`
- **summary**:    The given location could not be used (e.g. because it cannot be expressed in the  desired version of XCM). 
 
### BadVersion
- **interface**: `api.errors.xcmPallet.BadVersion.is`
- **summary**:    The version of the `Versioned` value used is not able to be interpreted. 
 
### CannotReanchor
- **interface**: `api.errors.xcmPallet.CannotReanchor.is`
- **summary**:    Could not re-anchor the assets to declare the fees for the destination chain. 
 
### DestinationNotInvertible
- **interface**: `api.errors.xcmPallet.DestinationNotInvertible.is`
- **summary**:    The destination `MultiLocation` provided cannot be inverted. 
 
### Empty
- **interface**: `api.errors.xcmPallet.Empty.is`
- **summary**:    The assets to be sent are empty. 
 
### FeesNotMet
- **interface**: `api.errors.xcmPallet.FeesNotMet.is`
- **summary**:    The operation required fees to be paid which the initiator could not meet. 
 
### Filtered
- **interface**: `api.errors.xcmPallet.Filtered.is`
- **summary**:    The message execution fails the filter. 
 
### InUse
- **interface**: `api.errors.xcmPallet.InUse.is`
- **summary**:    The unlock operation cannot succeed because there are still users of the lock. 
 
### InvalidAsset
- **interface**: `api.errors.xcmPallet.InvalidAsset.is`
- **summary**:    Invalid asset for the operation. 
 
### InvalidOrigin
- **interface**: `api.errors.xcmPallet.InvalidOrigin.is`
- **summary**:    Origin is invalid for sending. 
 
### LockNotFound
- **interface**: `api.errors.xcmPallet.LockNotFound.is`
- **summary**:    A remote lock with the corresponding data could not be found. 
 
### LowBalance
- **interface**: `api.errors.xcmPallet.LowBalance.is`
- **summary**:    The owner does not own (all) of the asset that they wish to do the operation on. 
 
### NoSubscription
- **interface**: `api.errors.xcmPallet.NoSubscription.is`
- **summary**:    The referenced subscription could not be found. 
 
### SendFailure
- **interface**: `api.errors.xcmPallet.SendFailure.is`
- **summary**:    There was some other issue (i.e. not to do with routing) in sending the message. Perhaps  a lack of space for buffering the message. 
 
### TooManyAssets
- **interface**: `api.errors.xcmPallet.TooManyAssets.is`
- **summary**:    Too many assets have been attempted for transfer. 
 
### TooManyLocks
- **interface**: `api.errors.xcmPallet.TooManyLocks.is`
- **summary**:    The asset owner has too many locks on the asset. 
 
### Unreachable
- **interface**: `api.errors.xcmPallet.Unreachable.is`
- **summary**:    The desired destination was unreachable, generally because there is a no way of routing  to it. 
 
### UnweighableMessage
- **interface**: `api.errors.xcmPallet.UnweighableMessage.is`
- **summary**:    The message's weight could not be determined. 
