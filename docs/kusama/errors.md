---
title: Errors
---

This page lists the errors that can be encountered in the different modules. 

(NOTE: These were generated from a static/snapshot view of a recent default Kusama runtime. Some items may not be available in older nodes, or in any customized implementations.)

- **[auctions](#auctions)**

- **[babe](#babe)**

- **[balances](#balances)**

- **[beefy](#beefy)**

- **[bounties](#bounties)**

- **[childBounties](#childbounties)**

- **[claims](#claims)**

- **[configuration](#configuration)**

- **[convictionVoting](#convictionvoting)**

- **[crowdloan](#crowdloan)**

- **[electionProviderMultiPhase](#electionprovidermultiphase)**

- **[fastUnstake](#fastunstake)**

- **[fellowshipCollective](#fellowshipcollective)**

- **[fellowshipReferenda](#fellowshipreferenda)**

- **[grandpa](#grandpa)**

- **[hrmp](#hrmp)**

- **[identity](#identity)**

- **[imOnline](#imonline)**

- **[indices](#indices)**

- **[messageQueue](#messagequeue)**

- **[multisig](#multisig)**

- **[nis](#nis)**

- **[nisCounterpartBalances](#niscounterpartbalances)**

- **[nominationPools](#nominationpools)**

- **[paraInclusion](#parainclusion)**

- **[paraInherent](#parainherent)**

- **[paras](#paras)**

- **[parasDisputes](#parasdisputes)**

- **[parasSlashing](#parasslashing)**

- **[preimage](#preimage)**

- **[proxy](#proxy)**

- **[recovery](#recovery)**

- **[referenda](#referenda)**

- **[registrar](#registrar)**

- **[scheduler](#scheduler)**

- **[session](#session)**

- **[slots](#slots)**

- **[society](#society)**

- **[staking](#staking)**

- **[stateTrieMigration](#statetriemigration)**

- **[system](#system)**

- **[treasury](#treasury)**

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


## beefy
 
### DuplicateOffenceReport
- **interface**: `api.errors.beefy.DuplicateOffenceReport.is`
- **summary**:    A given equivocation report is valid but already previously reported. 
 
### InvalidEquivocationProof
- **interface**: `api.errors.beefy.InvalidEquivocationProof.is`
- **summary**:    An equivocation proof provided as part of an equivocation report is invalid. 
 
### InvalidKeyOwnershipProof
- **interface**: `api.errors.beefy.InvalidKeyOwnershipProof.is`
- **summary**:    A key ownership proof provided as part of an equivocation report is invalid. 

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
- **summary**:    There's not enough in the pot to pay out some unvested amount. Generally implies a  logic error. 
 
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
- **summary**:    The crowdloan is not ready to dissolve. Potentially still has a slot or in retirement  period. 
 
### Overflow
- **interface**: `api.errors.crowdloan.Overflow.is`
- **summary**:    There was an overflow. 
 
### VrfDelayInProgress
- **interface**: `api.errors.crowdloan.VrfDelayInProgress.is`
- **summary**:    No contributions allowed during the VRF delay 

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


## fellowshipCollective
 
### AlreadyMember
- **interface**: `api.errors.fellowshipCollective.AlreadyMember.is`
- **summary**:    Account is already a member. 
 
### Corruption
- **interface**: `api.errors.fellowshipCollective.Corruption.is`
- **summary**:    Unexpected error in state. 
 
### InvalidWitness
- **interface**: `api.errors.fellowshipCollective.InvalidWitness.is`
- **summary**:    The information provided is incorrect. 
 
### NoneRemaining
- **interface**: `api.errors.fellowshipCollective.NoneRemaining.is`
- **summary**:    There are no further records to be removed. 
 
### NoPermission
- **interface**: `api.errors.fellowshipCollective.NoPermission.is`
- **summary**:    The origin is not sufficiently privileged to do the operation. 
 
### NotMember
- **interface**: `api.errors.fellowshipCollective.NotMember.is`
- **summary**:    Account is not a member. 
 
### NotPolling
- **interface**: `api.errors.fellowshipCollective.NotPolling.is`
- **summary**:    The given poll index is unknown or has closed. 
 
### Ongoing
- **interface**: `api.errors.fellowshipCollective.Ongoing.is`
- **summary**:    The given poll is still ongoing. 
 
### RankTooLow
- **interface**: `api.errors.fellowshipCollective.RankTooLow.is`
- **summary**:    The member's rank is too low to vote. 

___


## fellowshipReferenda
 
### BadReferendum
- **interface**: `api.errors.fellowshipReferenda.BadReferendum.is`
- **summary**:    The referendum index provided is invalid in this context. 
 
### BadStatus
- **interface**: `api.errors.fellowshipReferenda.BadStatus.is`
- **summary**:    The referendum status is invalid for this operation. 
 
### BadTrack
- **interface**: `api.errors.fellowshipReferenda.BadTrack.is`
- **summary**:    The track identifier given was invalid. 
 
### Full
- **interface**: `api.errors.fellowshipReferenda.Full.is`
- **summary**:    There are already a full complement of referenda in progress for this track. 
 
### HasDeposit
- **interface**: `api.errors.fellowshipReferenda.HasDeposit.is`
- **summary**:    Referendum's decision deposit is already paid. 
 
### NoDeposit
- **interface**: `api.errors.fellowshipReferenda.NoDeposit.is`
- **summary**:    The deposit cannot be refunded since none was made. 
 
### NoPermission
- **interface**: `api.errors.fellowshipReferenda.NoPermission.is`
- **summary**:    The deposit refunder is not the depositor. 
 
### NothingToDo
- **interface**: `api.errors.fellowshipReferenda.NothingToDo.is`
- **summary**:    There was nothing to do in the advancement. 
 
### NotOngoing
- **interface**: `api.errors.fellowshipReferenda.NotOngoing.is`
- **summary**:    Referendum is not ongoing. 
 
### NoTrack
- **interface**: `api.errors.fellowshipReferenda.NoTrack.is`
- **summary**:    No track exists for the proposal origin. 
 
### PreimageNotExist
- **interface**: `api.errors.fellowshipReferenda.PreimageNotExist.is`
- **summary**:    The preimage does not exist. 
 
### QueueEmpty
- **interface**: `api.errors.fellowshipReferenda.QueueEmpty.is`
- **summary**:    The queue of the track is empty. 
 
### Unfinished
- **interface**: `api.errors.fellowshipReferenda.Unfinished.is`
- **summary**:    Any deposit cannot be refunded until after the decision is over. 

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


## messageQueue
 
### AlreadyProcessed
- **interface**: `api.errors.messageQueue.AlreadyProcessed.is`
- **summary**:    The message was already processed and cannot be processed again. 
 
### InsufficientWeight
- **interface**: `api.errors.messageQueue.InsufficientWeight.is`
- **summary**:    There is temporarily not enough weight to continue servicing messages. 
 
### NoMessage
- **interface**: `api.errors.messageQueue.NoMessage.is`
- **summary**:    The referenced message could not be found. 
 
### NoPage
- **interface**: `api.errors.messageQueue.NoPage.is`
- **summary**:    Page to be reaped does not exist. 
 
### NotReapable
- **interface**: `api.errors.messageQueue.NotReapable.is`
- **summary**:    Page is not reapable because it has items remaining to be processed and is not old  enough. 
 
### Queued
- **interface**: `api.errors.messageQueue.Queued.is`
- **summary**:    The message is queued for future execution. 
 
### QueuePaused
- **interface**: `api.errors.messageQueue.QueuePaused.is`
- **summary**:    The queue is paused and no message can be executed from it. 

   This can change at any time and may resolve in the future by re-trying. 
 
### TemporarilyUnprocessable
- **interface**: `api.errors.messageQueue.TemporarilyUnprocessable.is`
- **summary**:    This message is temporarily unprocessable. 

   Such errors are expected, but not guaranteed, to resolve themselves eventually through  retrying. 

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


## nis
 
### AlreadyCommunal
- **interface**: `api.errors.nis.AlreadyCommunal.is`
- **summary**:    The receipt is already communal. 
 
### AlreadyFunded
- **interface**: `api.errors.nis.AlreadyFunded.is`
- **summary**:    There are enough funds for what is required. 
 
### AlreadyPrivate
- **interface**: `api.errors.nis.AlreadyPrivate.is`
- **summary**:    The receipt is already private. 
 
### AmountTooSmall
- **interface**: `api.errors.nis.AmountTooSmall.is`
- **summary**:    The amount of the bid is less than the minimum allowed. 
 
### BidTooLow
- **interface**: `api.errors.nis.BidTooLow.is`
- **summary**:    The queue for the bid's duration is full and the amount bid is too low to get in  through replacing an existing bid. 
 
### DurationTooBig
- **interface**: `api.errors.nis.DurationTooBig.is`
- **summary**:    The duration is the bid is greater than the number of queues. 
 
### DurationTooSmall
- **interface**: `api.errors.nis.DurationTooSmall.is`
- **summary**:    The duration of the bid is less than one. 
 
### MakesDust
- **interface**: `api.errors.nis.MakesDust.is`
- **summary**:    The operation would result in a receipt worth an insignficant value. 
 
### NotExpired
- **interface**: `api.errors.nis.NotExpired.is`
- **summary**:    Bond not yet at expiry date. 
 
### NotOwner
- **interface**: `api.errors.nis.NotOwner.is`
- **summary**:    Not the owner of the receipt. 
 
### PortionTooBig
- **interface**: `api.errors.nis.PortionTooBig.is`
- **summary**:    The portion supplied is beyond the value of the receipt. 
 
### Throttled
- **interface**: `api.errors.nis.Throttled.is`
- **summary**:    The thaw throttle has been reached for this period. 
 
### Unfunded
- **interface**: `api.errors.nis.Unfunded.is`
- **summary**:    Not enough funds are held to pay out. 
 
### UnknownBid
- **interface**: `api.errors.nis.UnknownBid.is`
- **summary**:    The given bid for retraction is not found. 
 
### UnknownReceipt
- **interface**: `api.errors.nis.UnknownReceipt.is`
- **summary**:    Receipt index is unknown. 

___


## nisCounterpartBalances
 
### DeadAccount
- **interface**: `api.errors.nisCounterpartBalances.DeadAccount.is`
- **summary**:    Beneficiary account must pre-exist. 
 
### ExistentialDeposit
- **interface**: `api.errors.nisCounterpartBalances.ExistentialDeposit.is`
- **summary**:    Value too low to create account due to existential deposit. 
 
### ExistingVestingSchedule
- **interface**: `api.errors.nisCounterpartBalances.ExistingVestingSchedule.is`
- **summary**:    A vesting schedule already exists for this account. 
 
### Expendability
- **interface**: `api.errors.nisCounterpartBalances.Expendability.is`
- **summary**:    Transfer/payment would kill account. 
 
### InsufficientBalance
- **interface**: `api.errors.nisCounterpartBalances.InsufficientBalance.is`
- **summary**:    Balance too low to send value. 
 
### LiquidityRestrictions
- **interface**: `api.errors.nisCounterpartBalances.LiquidityRestrictions.is`
- **summary**:    Account liquidity restrictions prevent withdrawal. 
 
### TooManyFreezes
- **interface**: `api.errors.nisCounterpartBalances.TooManyFreezes.is`
- **summary**:    Number of freezes exceed `MaxFreezes`. 
 
### TooManyHolds
- **interface**: `api.errors.nisCounterpartBalances.TooManyHolds.is`
- **summary**:    Number of holds exceed `MaxHolds`. 
 
### TooManyReserves
- **interface**: `api.errors.nisCounterpartBalances.TooManyReserves.is`
- **summary**:    Number of named reserves exceed `MaxReserves`. 
 
### VestingBalance
- **interface**: `api.errors.nisCounterpartBalances.VestingBalance.is`
- **summary**:    Vesting balance too high to send value. 

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
 
### CommissionExceedsGlobalMaximum
- **interface**: `api.errors.nominationPools.CommissionExceedsGlobalMaximum.is`
- **summary**:    The supplied commission exceeds global maximum commission. 
 
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
 
### CandidateScheduledBeforeParaFree
- **interface**: `api.errors.paraInclusion.CandidateScheduledBeforeParaFree.is`
- **summary**:    Candidate scheduled despite pending candidate already existing for the para. 
 
### DisallowedRelayParent
- **interface**: `api.errors.paraInclusion.DisallowedRelayParent.is`
- **summary**:    The candidate's relay-parent was not allowed. Either it was  not recent enough or it didn't advance based on the last parachain block. 
 
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
 
### InvalidAssignment
- **interface**: `api.errors.paraInclusion.InvalidAssignment.is`
- **summary**:    Failed to compute group index for the core: either it's out of bounds  or the relay parent doesn't belong to the current session. 
 
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
- **summary**:    The `para_head` hash in the candidate descriptor doesn't match the hash of the actual  para head in the commitments. 
 
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
- **summary**:    Para cannot be downgraded to an on-demand parachain. 
 
### CannotOffboard
- **interface**: `api.errors.paras.CannotOffboard.is`
- **summary**:    Para cannot be offboarded at this time. 
 
### CannotOnboard
- **interface**: `api.errors.paras.CannotOnboard.is`
- **summary**:    Para cannot be onboarded because it is already tracked by our system. 
 
### CannotUpgrade
- **interface**: `api.errors.paras.CannotUpgrade.is`
- **summary**:    Para cannot be upgraded to a lease holding parachain. 
 
### CannotUpgradeCode
- **interface**: `api.errors.paras.CannotUpgradeCode.is`
- **summary**:    Parachain cannot currently schedule a code upgrade. 
 
### NotRegistered
- **interface**: `api.errors.paras.NotRegistered.is`
- **summary**:    Para is not registered in our system. 
 
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


## parasSlashing
 
### DuplicateSlashingReport
- **interface**: `api.errors.parasSlashing.DuplicateSlashingReport.is`
- **summary**:    The given slashing report is valid but already previously reported. 
 
### InvalidCandidateHash
- **interface**: `api.errors.parasSlashing.InvalidCandidateHash.is`
- **summary**:    The candidate hash is invalid. 
 
### InvalidKeyOwnershipProof
- **interface**: `api.errors.parasSlashing.InvalidKeyOwnershipProof.is`
- **summary**:    The key ownership proof is invalid. 
 
### InvalidSessionIndex
- **interface**: `api.errors.parasSlashing.InvalidSessionIndex.is`
- **summary**:    The session index is too old or invalid. 
 
### InvalidValidatorIndex
- **interface**: `api.errors.parasSlashing.InvalidValidatorIndex.is`
- **summary**:    There is no pending slash for the given validator index and time  slot. 
 
### ValidatorIndexIdMismatch
- **interface**: `api.errors.parasSlashing.ValidatorIndexIdMismatch.is`
- **summary**:    The validator index does not match the validator id. 

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
- **summary**:    Cannot schedule downgrade of lease holding parachain to on-demand parachain 
 
### CannotSwap
- **interface**: `api.errors.registrar.CannotSwap.is`
- **summary**:    Cannot perform a parachain slot / lifecycle swap. Check that the state of both paras  are correct for the swap to work. 
 
### CannotUpgrade
- **interface**: `api.errors.registrar.CannotUpgrade.is`
- **summary**:    Cannot schedule upgrade of on-demand parachain to lease holding parachain 
 
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
- **summary**:    Para is not a Parathread (on-demand parachain). 
 
### NotRegistered
- **interface**: `api.errors.registrar.NotRegistered.is`
- **summary**:    The ID is not registered. 
 
### NotReserved
- **interface**: `api.errors.registrar.NotReserved.is`
- **summary**:    The ID given for registration has not been reserved. 
 
### ParaLocked
- **interface**: `api.errors.registrar.ParaLocked.is`
- **summary**:    Para is locked from manipulation by the manager. Must use parachain or relay chain  governance. 

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


## society
 
### AlreadyBid
- **interface**: `api.errors.society.AlreadyBid.is`
- **summary**:    User has already made a bid. 
 
### AlreadyCandidate
- **interface**: `api.errors.society.AlreadyCandidate.is`
- **summary**:    User is already a candidate. 
 
### AlreadyElevated
- **interface**: `api.errors.society.AlreadyElevated.is`
- **summary**:    The member is already elevated to this rank. 
 
### AlreadyFounded
- **interface**: `api.errors.society.AlreadyFounded.is`
- **summary**:    Society already founded. 
 
### AlreadyMember
- **interface**: `api.errors.society.AlreadyMember.is`
- **summary**:    User is already a member. 
 
### AlreadyPunished
- **interface**: `api.errors.society.AlreadyPunished.is`
- **summary**:    The skeptic has already been punished for this offence. 
 
### AlreadyVouching
- **interface**: `api.errors.society.AlreadyVouching.is`
- **summary**:    Member is already vouching or banned from vouching again. 
 
### Approved
- **interface**: `api.errors.society.Approved.is`
- **summary**:    The candidacy cannot be dropped as the candidate was clearly approved. 
 
### Expired
- **interface**: `api.errors.society.Expired.is`
- **summary**:    The skeptic need not vote on candidates from expired rounds. 
 
### Founder
- **interface**: `api.errors.society.Founder.is`
- **summary**:    Cannot remove the founder. 
 
### Head
- **interface**: `api.errors.society.Head.is`
- **summary**:    Cannot remove the head of the chain. 
 
### InProgress
- **interface**: `api.errors.society.InProgress.is`
- **summary**:    The candidacy cannot be concluded as the voting is still in progress. 
 
### InsufficientFunds
- **interface**: `api.errors.society.InsufficientFunds.is`
- **summary**:    Funds are insufficient to pay off society debts. 
 
### InsufficientPot
- **interface**: `api.errors.society.InsufficientPot.is`
- **summary**:    Not enough in pot to accept candidate. 
 
### MaxMembers
- **interface**: `api.errors.society.MaxMembers.is`
- **summary**:    Too many members in the society. 
 
### NoDefender
- **interface**: `api.errors.society.NoDefender.is`
- **summary**:    There is no defender currently. 
 
### NoPayout
- **interface**: `api.errors.society.NoPayout.is`
- **summary**:    Nothing to payout. 
 
### NotApproved
- **interface**: `api.errors.society.NotApproved.is`
- **summary**:    The membership cannot be claimed as the candidate was not clearly approved. 
 
### NotBidder
- **interface**: `api.errors.society.NotBidder.is`
- **summary**:    User is not a bidder. 
 
### NotCandidate
- **interface**: `api.errors.society.NotCandidate.is`
- **summary**:    User is not a candidate. 
 
### NotFounder
- **interface**: `api.errors.society.NotFounder.is`
- **summary**:    The caller is not the founder. 
 
### NotGroup
- **interface**: `api.errors.society.NotGroup.is`
- **summary**:    Group doesn't exist. 
 
### NotHead
- **interface**: `api.errors.society.NotHead.is`
- **summary**:    The caller is not the head. 
 
### NotMember
- **interface**: `api.errors.society.NotMember.is`
- **summary**:    User is not a member. 
 
### NotRejected
- **interface**: `api.errors.society.NotRejected.is`
- **summary**:    The candidate cannot be kicked as the candidate was not clearly rejected. 
 
### NotSuspended
- **interface**: `api.errors.society.NotSuspended.is`
- **summary**:    User is not suspended. 
 
### NotVouchingOnBidder
- **interface**: `api.errors.society.NotVouchingOnBidder.is`
- **summary**:    Member is not vouching. 
 
### NoVotes
- **interface**: `api.errors.society.NoVotes.is`
- **summary**:    The candidate/defender has no stale votes to remove. 
 
### Rejected
- **interface**: `api.errors.society.Rejected.is`
- **summary**:    The candidacy cannot be bestowed as the candidate was clearly rejected. 
 
### Suspended
- **interface**: `api.errors.society.Suspended.is`
- **summary**:    User is suspended. 
 
### TooEarly
- **interface**: `api.errors.society.TooEarly.is`
- **summary**:    The candidacy cannot be pruned until a full additional intake period has passed. 
 
### Voted
- **interface**: `api.errors.society.Voted.is`
- **summary**:    The skeptic already voted. 

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


## stateTrieMigration
 
### BadChildRoot
- **interface**: `api.errors.stateTrieMigration.BadChildRoot.is`
- **summary**:    Bad child root provided. 
 
### BadWitness
- **interface**: `api.errors.stateTrieMigration.BadWitness.is`
- **summary**:    Bad witness data provided. 
 
### KeyTooLong
- **interface**: `api.errors.stateTrieMigration.KeyTooLong.is`
- **summary**:    A key was longer than the configured maximum. 

   This means that the migration halted at the current [`Progress`] and  can be resumed with a larger [`crate::Config::MaxKeyLen`] value.  Retrying with the same [`crate::Config::MaxKeyLen`] value will not work.  The value should only be increased to avoid a storage migration for the currently  stored [`crate::Progress::LastKey`]. 
 
### MaxSignedLimits
- **interface**: `api.errors.stateTrieMigration.MaxSignedLimits.is`
- **summary**:    Max signed limits not respected. 
 
### NotEnoughFunds
- **interface**: `api.errors.stateTrieMigration.NotEnoughFunds.is`
- **summary**:    submitter does not have enough funds. 
 
### SignedMigrationNotAllowed
- **interface**: `api.errors.stateTrieMigration.SignedMigrationNotAllowed.is`
- **summary**:    Signed migration is not allowed because the maximum limit is not set yet. 

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
- **summary**:    The unlock operation cannot succeed because there are still consumers of the lock. 
 
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
- **summary**:    There was some other issue (i.e. not to do with routing) in sending the message.  Perhaps a lack of space for buffering the message. 
 
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
