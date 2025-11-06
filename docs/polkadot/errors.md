---
title: Errors
---

This page lists the errors that can be encountered in the different modules. 

(NOTE: These were generated from a static/snapshot view of a recent default Polkadot runtime. Some items may not be available in older nodes, or in any customized implementations.)

- **[assetRate](#assetrate)**

- **[auctions](#auctions)**

- **[babe](#babe)**

- **[balances](#balances)**

- **[beefy](#beefy)**

- **[bounties](#bounties)**

- **[childBounties](#childbounties)**

- **[claims](#claims)**

- **[configuration](#configuration)**

- **[convictionVoting](#convictionvoting)**

- **[coretime](#coretime)**

- **[coretimeAssignmentProvider](#coretimeassignmentprovider)**

- **[crowdloan](#crowdloan)**

- **[delegatedStaking](#delegatedstaking)**

- **[electionProviderMultiPhase](#electionprovidermultiphase)**

- **[fastUnstake](#fastunstake)**

- **[grandpa](#grandpa)**

- **[hrmp](#hrmp)**

- **[indices](#indices)**

- **[messageQueue](#messagequeue)**

- **[multisig](#multisig)**

- **[nominationPools](#nominationpools)**

- **[onDemand](#ondemand)**

- **[paraInclusion](#parainclusion)**

- **[paraInherent](#parainherent)**

- **[paras](#paras)**

- **[parasDisputes](#parasdisputes)**

- **[parasSlashing](#parasslashing)**

- **[preimage](#preimage)**

- **[proxy](#proxy)**

- **[rcMigrator](#rcmigrator)**

- **[referenda](#referenda)**

- **[registrar](#registrar)**

- **[scheduler](#scheduler)**

- **[session](#session)**

- **[slots](#slots)**

- **[staking](#staking)**

- **[stakingAhClient](#stakingahclient)**

- **[stateTrieMigration](#statetriemigration)**

- **[system](#system)**

- **[treasury](#treasury)**

- **[utility](#utility)**

- **[vesting](#vesting)**

- **[voterList](#voterlist)**

- **[whitelist](#whitelist)**

- **[xcmPallet](#xcmpallet)**


___


## assetRate
 
### AlreadyExists
- **interface**: `api.errors.assetRate.AlreadyExists.is`
- **summary**:    The given asset ID already has an assigned conversion rate and cannot be re-created. 
 
### Overflow
- **interface**: `api.errors.assetRate.Overflow.is`
- **summary**:    Overflow ocurred when calculating the inverse rate. 
 
### UnknownAssetKind
- **interface**: `api.errors.assetRate.UnknownAssetKind.is`
- **summary**:    The given asset ID is unknown. 

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
 
### DeltaZero
- **interface**: `api.errors.balances.DeltaZero.is`
- **summary**:    The delta cannot be zero. 
 
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
 
### IssuanceDeactivated
- **interface**: `api.errors.balances.IssuanceDeactivated.is`
- **summary**:    The issuance cannot be modified since it is already deactivated. 
 
### LiquidityRestrictions
- **interface**: `api.errors.balances.LiquidityRestrictions.is`
- **summary**:    Account liquidity restrictions prevent withdrawal. 
 
### TooManyFreezes
- **interface**: `api.errors.balances.TooManyFreezes.is`
- **summary**:    Number of freezes exceed `MaxFreezes`. 
 
### TooManyHolds
- **interface**: `api.errors.balances.TooManyHolds.is`
- **summary**:    Number of holds exceed `VariantCountOf<T::RuntimeHoldReason>`. 
 
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
 
### InvalidConfiguration
- **interface**: `api.errors.beefy.InvalidConfiguration.is`
- **summary**:    Submitted configuration is invalid. 
 
### InvalidDoubleVotingProof
- **interface**: `api.errors.beefy.InvalidDoubleVotingProof.is`
- **summary**:    A double voting proof provided as part of an equivocation report is invalid. 
 
### InvalidEquivocationProofSession
- **interface**: `api.errors.beefy.InvalidEquivocationProofSession.is`
- **summary**:    The session of the equivocation proof is invalid 
 
### InvalidForkVotingProof
- **interface**: `api.errors.beefy.InvalidForkVotingProof.is`
- **summary**:    A fork voting proof provided as part of an equivocation report is invalid. 
 
### InvalidFutureBlockVotingProof
- **interface**: `api.errors.beefy.InvalidFutureBlockVotingProof.is`
- **summary**:    A future block voting proof provided as part of an equivocation report is invalid. 
 
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
 
### NotProposer
- **interface**: `api.errors.bounties.NotProposer.is`
- **summary**:    User is not the proposer of the bounty. 
 
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
- **summary**:    The account currently has votes attached to it and the operation cannot succeed until  these are removed through `remove_vote`. 
 
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


## coretime
 
### AssetTransferFailed
- **interface**: `api.errors.coretime.AssetTransferFailed.is`
- **summary**:    Failed to transfer assets to the coretime chain 
 
### NotBroker
- **interface**: `api.errors.coretime.NotBroker.is`
- **summary**:    The paraid making the call is not the coretime brokerage system parachain. 
 
### RequestedFutureRevenue
- **interface**: `api.errors.coretime.RequestedFutureRevenue.is`
- **summary**:    Requested revenue information `when` parameter was in the future from the current  block height. 

___


## coretimeAssignmentProvider
 
### AssignmentsEmpty
- **interface**: `api.errors.coretimeAssignmentProvider.AssignmentsEmpty.is`
 
### DisallowedInsert
- **interface**: `api.errors.coretimeAssignmentProvider.DisallowedInsert.is`
- **summary**:    assign_core is only allowed to append new assignments at the end of already existing  ones or update the last entry. 

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


## delegatedStaking
 
### AlreadyStaking
- **interface**: `api.errors.delegatedStaking.AlreadyStaking.is`
- **summary**:    An existing staker cannot perform this action. 
 
### BadState
- **interface**: `api.errors.delegatedStaking.BadState.is`
- **summary**:    Some corruption in internal state. 
 
### InvalidDelegation
- **interface**: `api.errors.delegatedStaking.InvalidDelegation.is`
- **summary**:    Delegation conditions are not met. 

   Possible issues are  1) Cannot delegate to self,  2) Cannot delegate to multiple delegates. 
 
### InvalidRewardDestination
- **interface**: `api.errors.delegatedStaking.InvalidRewardDestination.is`
- **summary**:    Reward Destination cannot be same as `Agent` account. 
 
### NotAgent
- **interface**: `api.errors.delegatedStaking.NotAgent.is`
- **summary**:    Not an existing `Agent` account. 
 
### NotAllowed
- **interface**: `api.errors.delegatedStaking.NotAllowed.is`
- **summary**:    The account cannot perform this operation. 
 
### NotDelegator
- **interface**: `api.errors.delegatedStaking.NotDelegator.is`
- **summary**:    Not a Delegator account. 
 
### NotEnoughFunds
- **interface**: `api.errors.delegatedStaking.NotEnoughFunds.is`
- **summary**:    The account does not have enough funds to perform the operation. 
 
### NothingToSlash
- **interface**: `api.errors.delegatedStaking.NothingToSlash.is`
- **summary**:    `Agent` has no pending slash to be applied. 
 
### NotSupported
- **interface**: `api.errors.delegatedStaking.NotSupported.is`
- **summary**:    Operation not supported by this pallet. 
 
### UnappliedSlash
- **interface**: `api.errors.delegatedStaking.UnappliedSlash.is`
- **summary**:    Unapplied pending slash restricts operation on `Agent`. 
 
### WithdrawFailed
- **interface**: `api.errors.delegatedStaking.WithdrawFailed.is`
- **summary**:    Failed to withdraw amount from Core Staking. 

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
 
### PreDispatchDifferentRound
- **interface**: `api.errors.electionProviderMultiPhase.PreDispatchDifferentRound.is`
- **summary**:    Submission was prepared for a different round. 
 
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
 
### ChannelCreationNotAuthorized
- **interface**: `api.errors.hrmp.ChannelCreationNotAuthorized.is`
- **summary**:    The channel between these two chains cannot be authorized. 
 
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
 
### RecursiveDisallowed
- **interface**: `api.errors.messageQueue.RecursiveDisallowed.is`
- **summary**:    Another call is in progress and needs to finish before this call can happen. 
 
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
- **summary**:    Multisig operation not found in storage. 
 
### NoTimepoint
- **interface**: `api.errors.multisig.NoTimepoint.is`
- **summary**:    No timepoint was given, yet the multisig operation is already underway. 
 
### NotOwner
- **interface**: `api.errors.multisig.NotOwner.is`
- **summary**:    Only the account that originally created the multisig is able to cancel it or update  its deposits. 
 
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
 
### AlreadyMigrated
- **interface**: `api.errors.nominationPools.AlreadyMigrated.is`
- **summary**:    The pool or member delegation has already migrated to delegate stake. 
 
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

   The depositor can never unbond to a value less than `Pallet::depositor_min_bond`. The  caller does not have nominating permissions for the pool. Members can never unbond to a  value below `MinJoinBond`. 
 
### NoCommissionCurrentSet
- **interface**: `api.errors.nominationPools.NoCommissionCurrentSet.is`
- **summary**:    No commission current has been set. 
 
### NoPendingCommission
- **interface**: `api.errors.nominationPools.NoPendingCommission.is`
- **summary**:    There is no pending commission to claim. 
 
### NotDestroying
- **interface**: `api.errors.nominationPools.NotDestroying.is`
- **summary**:    A pool must be in [`PoolState::Destroying`] in order for the depositor to unbond or for  other members to be permissionlessly unbonded. 
 
### NothingToAdjust
- **interface**: `api.errors.nominationPools.NothingToAdjust.is`
- **summary**:    No imbalance in the ED deposit for the pool. 
 
### NothingToSlash
- **interface**: `api.errors.nominationPools.NothingToSlash.is`
- **summary**:    No slash pending that can be applied to the member. 
 
### NotKickerOrDestroying
- **interface**: `api.errors.nominationPools.NotKickerOrDestroying.is`
- **summary**:    Either a) the caller cannot make a valid kick or b) the pool is not destroying. 
 
### NotMigrated
- **interface**: `api.errors.nominationPools.NotMigrated.is`
- **summary**:    The pool or member delegation has not migrated yet to delegate stake. 
 
### NotNominator
- **interface**: `api.errors.nominationPools.NotNominator.is`
- **summary**:    The caller does not have nominating permissions for the pool. 
 
### NotOpen
- **interface**: `api.errors.nominationPools.NotOpen.is`
- **summary**:    The pool is not open to join 
 
### NotSupported
- **interface**: `api.errors.nominationPools.NotSupported.is`
- **summary**:    This call is not allowed in the current state of the pallet. 
 
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
 
### Restricted
- **interface**: `api.errors.nominationPools.Restricted.is`
- **summary**:    Account is restricted from participation in pools. This may happen if the account is  staking in another way already. 
 
### RewardPoolNotFound
- **interface**: `api.errors.nominationPools.RewardPoolNotFound.is`
- **summary**:    A reward pool does not exist. In all cases this is a system logic error. 
 
### SlashTooLow
- **interface**: `api.errors.nominationPools.SlashTooLow.is`
- **summary**:    The slash amount is too low to be applied. 
 
### SubPoolsNotFound
- **interface**: `api.errors.nominationPools.SubPoolsNotFound.is`
- **summary**:    A sub pool does not exist. 

___


## onDemand
 
### InsufficientCredits
- **interface**: `api.errors.onDemand.InsufficientCredits.is`
- **summary**:    The account doesn't have enough credits to purchase on-demand coretime. 
 
### QueueFull
- **interface**: `api.errors.onDemand.QueueFull.is`
- **summary**:    The order queue is full, `place_order` will not continue. 
 
### SpotPriceHigherThanMaxAmount
- **interface**: `api.errors.onDemand.SpotPriceHigherThanMaxAmount.is`
- **summary**:    The current spot price is higher than the max amount specified in the `place_order`  call, making it invalid. 

___


## paraInclusion
 
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
 
### ParaHeadMismatch
- **interface**: `api.errors.paraInclusion.ParaHeadMismatch.is`
- **summary**:    The `para_head` hash in the candidate descriptor doesn't match the hash of the actual  para head in the commitments. 
 
### PrematureCodeUpgrade
- **interface**: `api.errors.paraInclusion.PrematureCodeUpgrade.is`
- **summary**:    Code upgrade prematurely. 
 
### UnscheduledCandidate
- **interface**: `api.errors.paraInclusion.UnscheduledCandidate.is`
- **summary**:    Candidate submitted but para not scheduled. 
 
### ValidationDataHashMismatch
- **interface**: `api.errors.paraInclusion.ValidationDataHashMismatch.is`
- **summary**:    The validation data hash does not match expected. 
 
### ValidatorIndexOutOfBounds
- **interface**: `api.errors.paraInclusion.ValidatorIndexOutOfBounds.is`
- **summary**:    Validator index out of bounds. 

___


## paraInherent
 
### InherentDataFilteredDuringExecution
- **interface**: `api.errors.paraInherent.InherentDataFilteredDuringExecution.is`
- **summary**:    Inherent data was filtered during execution. This should have only been done  during creation. 
 
### InvalidParentHeader
- **interface**: `api.errors.paraInherent.InvalidParentHeader.is`
- **summary**:    The hash of the submitted parent header doesn't correspond to the saved block hash of  the parent. 
 
### TooManyInclusionInherents
- **interface**: `api.errors.paraInherent.TooManyInclusionInherents.is`
- **summary**:    Inclusion inherent called more than once per block. 
 
### UnscheduledCandidate
- **interface**: `api.errors.paraInherent.UnscheduledCandidate.is`
- **summary**:    Too many candidates supplied. 

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
 
### InvalidBlockNumber
- **interface**: `api.errors.paras.InvalidBlockNumber.is`
- **summary**:    Invalid block number. 
 
### InvalidCode
- **interface**: `api.errors.paras.InvalidCode.is`
- **summary**:    Invalid validation code size. 
 
### NothingAuthorized
- **interface**: `api.errors.paras.NothingAuthorized.is`
- **summary**:    No upgrade authorized. 
 
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
 
### Unauthorized
- **interface**: `api.errors.paras.Unauthorized.is`
- **summary**:    The submitted code is not authorized. 

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
 
### TooFew
- **interface**: `api.errors.preimage.TooFew.is`
- **summary**:    Too few hashes were requested to be upgraded (i.e. zero). 
 
### TooMany
- **interface**: `api.errors.preimage.TooMany.is`
- **summary**:    More than `MAX_HASH_UPGRADE_BULK_COUNT` hashes were requested to be upgraded at once. 

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


## rcMigrator
 
### AccountReferenced
- **interface**: `api.errors.rcMigrator.AccountReferenced.is`
- **summary**:    The account is referenced by some other pallet. It might have freezes or holds. 
 
### AhUmpQueuePriorityAlreadySet
- **interface**: `api.errors.rcMigrator.AhUmpQueuePriorityAlreadySet.is`
- **summary**:    The AH UMP queue priority configuration is already set. 
 
### BadXcmVersion
- **interface**: `api.errors.rcMigrator.BadXcmVersion.is`
- **summary**:    The XCM version is invalid. 
 
### BalanceOverflow
- **interface**: `api.errors.rcMigrator.BalanceOverflow.is`
- **summary**:    Balance accounting overflow. 
 
### BalanceUnderflow
- **interface**: `api.errors.rcMigrator.BalanceUnderflow.is`
- **summary**:    Balance accounting underflow. 
 
### EraEndsTooSoon
- **interface**: `api.errors.rcMigrator.EraEndsTooSoon.is`
- **summary**:    Indicates that there is not enough time for staking to lock. 

   Schedule the migration at least two sessions before the current era ends. 
 
### FailedToWithdrawAccount
- **interface**: `api.errors.rcMigrator.FailedToWithdrawAccount.is`
- **summary**:    Failed to withdraw account from RC for migration to AH. 
 
### InvalidOrigin
- **interface**: `api.errors.rcMigrator.InvalidOrigin.is`
- **summary**:    The origin is invalid. 
 
### InvalidParameter
- **interface**: `api.errors.rcMigrator.InvalidParameter.is`
- **summary**:    Invalid parameter. 
 
### InvalidQueryResponse
- **interface**: `api.errors.rcMigrator.InvalidQueryResponse.is`
- **summary**:    The query response is invalid. 
 
### InvalidStageTransition
- **interface**: `api.errors.rcMigrator.InvalidStageTransition.is`
- **summary**:    The stage transition is invalid. 
 
### OutOfWeight
- **interface**: `api.errors.rcMigrator.OutOfWeight.is`
 
### PastBlockNumber
- **interface**: `api.errors.rcMigrator.PastBlockNumber.is`
- **summary**:    Indicates that the specified block number is in the past. 
 
### QueryNotFound
- **interface**: `api.errors.rcMigrator.QueryNotFound.is`
- **summary**:    The xcm query was not found. 
 
### Unreachable
- **interface**: `api.errors.rcMigrator.Unreachable.is`
 
### UnreachableStage
- **interface**: `api.errors.rcMigrator.UnreachableStage.is`
- **summary**:    The migration stage is not reachable from the current stage. 
 
### UnsignedValidationFailed
- **interface**: `api.errors.rcMigrator.UnsignedValidationFailed.is`
- **summary**:    Unsigned validation failed. 
 
### XcmError
- **interface**: `api.errors.rcMigrator.XcmError.is`
- **summary**:    Failed to send XCM message to AH. 
 
### XcmSendError
- **interface**: `api.errors.rcMigrator.XcmSendError.is`
- **summary**:    Failed to send XCM message. 

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
 
### PreimageStoredWithDifferentLength
- **interface**: `api.errors.referenda.PreimageStoredWithDifferentLength.is`
- **summary**:    The preimage is stored with a different length than the one provided. 
 
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
 
### HeadDataTooLarge
- **interface**: `api.errors.registrar.HeadDataTooLarge.is`
- **summary**:    Invalid para head data size. 
 
### InvalidCode
- **interface**: `api.errors.registrar.InvalidCode.is`
- **summary**:    The validation code is invalid. 
 
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


## staking
 
### AlreadyBonded
- **interface**: `api.errors.staking.AlreadyBonded.is`
- **summary**:    Stash is already bonded. 
 
### AlreadyClaimed
- **interface**: `api.errors.staking.AlreadyClaimed.is`
- **summary**:    Rewards for this era have already been claimed for this validator. 
 
### AlreadyMigrated
- **interface**: `api.errors.staking.AlreadyMigrated.is`
- **summary**:    The stake of this account is already migrated to `Fungible` holds. 
 
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
 
### CannotReapStash
- **interface**: `api.errors.staking.CannotReapStash.is`
- **summary**:    Stash could not be reaped as other pallet might depend on it. 
 
### CannotRestoreLedger
- **interface**: `api.errors.staking.CannotRestoreLedger.is`
- **summary**:    Cannot reset a ledger. 
 
### CommissionTooLow
- **interface**: `api.errors.staking.CommissionTooLow.is`
- **summary**:    Commission is too low. Must be at least `MinCommission`. 
 
### ControllerDeprecated
- **interface**: `api.errors.staking.ControllerDeprecated.is`
- **summary**:    Used when attempting to use deprecated controller account logic. 
 
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
 
### InvalidPage
- **interface**: `api.errors.staking.InvalidPage.is`
- **summary**:    No nominators exist on this page. 
 
### InvalidSlashIndex
- **interface**: `api.errors.staking.InvalidSlashIndex.is`
- **summary**:    Slash record index out of bounds. 
 
### NoMoreChunks
- **interface**: `api.errors.staking.NoMoreChunks.is`
- **summary**:    Can not schedule more unlock chunks. 
 
### NotController
- **interface**: `api.errors.staking.NotController.is`
- **summary**:    Not a controller account. 
 
### NotEnoughFunds
- **interface**: `api.errors.staking.NotEnoughFunds.is`
- **summary**:    Not enough funds available to withdraw. 
 
### NotSortedAndUnique
- **interface**: `api.errors.staking.NotSortedAndUnique.is`
- **summary**:    Items are not sorted and unique. 
 
### NotStash
- **interface**: `api.errors.staking.NotStash.is`
- **summary**:    Not a stash account. 
 
### NoUnlockChunk
- **interface**: `api.errors.staking.NoUnlockChunk.is`
- **summary**:    Can not rebond without unlocking chunks. 
 
### Restricted
- **interface**: `api.errors.staking.Restricted.is`
- **summary**:    Account is restricted from participation in staking. This may happen if the account is  staking in another way already, such as via pool. 
 
### RewardDestinationRestricted
- **interface**: `api.errors.staking.RewardDestinationRestricted.is`
- **summary**:    Provided reward destination is not allowed. 
 
### TooManyNominators
- **interface**: `api.errors.staking.TooManyNominators.is`
- **summary**:    There are too many nominators in the system. Governance needs to adjust the staking  settings to keep things safe for the runtime. 
 
### TooManyTargets
- **interface**: `api.errors.staking.TooManyTargets.is`
- **summary**:    Too many nomination targets supplied. 
 
### TooManyValidators
- **interface**: `api.errors.staking.TooManyValidators.is`
- **summary**:    There are too many validator candidates in the system. Governance needs to adjust the  staking settings to keep things safe for the runtime. 
 
### VirtualStakerNotAllowed
- **interface**: `api.errors.staking.VirtualStakerNotAllowed.is`
- **summary**:    Operation not allowed for virtual stakers. 

___


## stakingAhClient
 
### Blocked
- **interface**: `api.errors.stakingAhClient.Blocked.is`
- **summary**:    Could not process incoming message because incoming messages are blocked. 

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
 
### MultiBlockMigrationsOngoing
- **interface**: `api.errors.system.MultiBlockMigrationsOngoing.is`
- **summary**:    A multi-block migration is ongoing and prevents the current code from being replaced. 
 
### NonDefaultComposite
- **interface**: `api.errors.system.NonDefaultComposite.is`
- **summary**:    Suicide called when the account has non-default composite data. 
 
### NonZeroRefCount
- **interface**: `api.errors.system.NonZeroRefCount.is`
- **summary**:    There is a non-zero reference count preventing the account from being purged. 
 
### NothingAuthorized
- **interface**: `api.errors.system.NothingAuthorized.is`
- **summary**:    No upgrade authorized. 
 
### SpecVersionNeedsToIncrease
- **interface**: `api.errors.system.SpecVersionNeedsToIncrease.is`
- **summary**:    The specification version is not allowed to decrease between the current runtime  and the new runtime. 
 
### Unauthorized
- **interface**: `api.errors.system.Unauthorized.is`
- **summary**:    The submitted code is not authorized. 

___


## treasury
 
### AlreadyAttempted
- **interface**: `api.errors.treasury.AlreadyAttempted.is`
- **summary**:    The payment has already been attempted. 
 
### EarlyPayout
- **interface**: `api.errors.treasury.EarlyPayout.is`
- **summary**:    The spend is not yet eligible for payout. 
 
### FailedToConvertBalance
- **interface**: `api.errors.treasury.FailedToConvertBalance.is`
- **summary**:    The balance of the asset kind is not convertible to the balance of the native asset. 
 
### Inconclusive
- **interface**: `api.errors.treasury.Inconclusive.is`
- **summary**:    The payment has neither failed nor succeeded yet. 
 
### InsufficientPermission
- **interface**: `api.errors.treasury.InsufficientPermission.is`
- **summary**:    The spend origin is valid but the amount it is allowed to spend is lower than the  amount to be spent. 
 
### InvalidIndex
- **interface**: `api.errors.treasury.InvalidIndex.is`
- **summary**:    No proposal, bounty or spend at that index. 
 
### NotAttempted
- **interface**: `api.errors.treasury.NotAttempted.is`
- **summary**:    The payout was not yet attempted/claimed. 
 
### PayoutError
- **interface**: `api.errors.treasury.PayoutError.is`
- **summary**:    There was some issue with the mechanism of payment. 
 
### ProposalNotApproved
- **interface**: `api.errors.treasury.ProposalNotApproved.is`
- **summary**:    Proposal has not been approved. 
 
### SpendExpired
- **interface**: `api.errors.treasury.SpendExpired.is`
- **summary**:    The spend has expired and cannot be claimed. 
 
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
 
### Locked
- **interface**: `api.errors.voterList.Locked.is`
- **summary**:    Could not update a node, because the pallet is locked. 

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
 
### AliasNotFound
- **interface**: `api.errors.xcmPallet.AliasNotFound.is`
- **summary**:    The alias to remove authorization for was not found. 
 
### AlreadySubscribed
- **interface**: `api.errors.xcmPallet.AlreadySubscribed.is`
- **summary**:    The location is invalid since it already has a subscription from us. 
 
### BadLocation
- **interface**: `api.errors.xcmPallet.BadLocation.is`
- **summary**:    The given location could not be used (e.g. because it cannot be expressed in the  desired version of XCM). 
 
### BadVersion
- **interface**: `api.errors.xcmPallet.BadVersion.is`
- **summary**:    The version of the `Versioned` value used is not able to be interpreted. 
 
### CannotCheckOutTeleport
- **interface**: `api.errors.xcmPallet.CannotCheckOutTeleport.is`
- **summary**:    Could not check-out the assets for teleportation to the destination chain. 
 
### CannotReanchor
- **interface**: `api.errors.xcmPallet.CannotReanchor.is`
- **summary**:    Could not re-anchor the assets to declare the fees for the destination chain. 
 
### DestinationNotInvertible
- **interface**: `api.errors.xcmPallet.DestinationNotInvertible.is`
- **summary**:    The destination `Location` provided cannot be inverted. 
 
### Empty
- **interface**: `api.errors.xcmPallet.Empty.is`
- **summary**:    The assets to be sent are empty. 
 
### ExpiresInPast
- **interface**: `api.errors.xcmPallet.ExpiresInPast.is`
- **summary**:    Expiry block number is in the past. 
 
### FeesNotMet
- **interface**: `api.errors.xcmPallet.FeesNotMet.is`
- **summary**:    The operation required fees to be paid which the initiator could not meet. 
 
### Filtered
- **interface**: `api.errors.xcmPallet.Filtered.is`
- **summary**:    The message execution fails the filter. 
 
### InUse
- **interface**: `api.errors.xcmPallet.InUse.is`
- **summary**:    The unlock operation cannot succeed because there are still consumers of the lock. 
 
### InvalidAssetUnknownReserve
- **interface**: `api.errors.xcmPallet.InvalidAssetUnknownReserve.is`
- **summary**:    Invalid asset, reserve chain could not be determined for it. 
 
### InvalidAssetUnsupportedReserve
- **interface**: `api.errors.xcmPallet.InvalidAssetUnsupportedReserve.is`
- **summary**:    Invalid asset, do not support remote asset reserves with different fees reserves. 
 
### InvalidOrigin
- **interface**: `api.errors.xcmPallet.InvalidOrigin.is`
- **summary**:    Origin is invalid for sending. 
 
### LocalExecutionIncomplete
- **interface**: `api.errors.xcmPallet.LocalExecutionIncomplete.is`
- **summary**:    Local XCM execution incomplete. 
 
### LocalExecutionIncompleteWithError
- **interface**: `api.errors.xcmPallet.LocalExecutionIncompleteWithError.is`
- **summary**:    Local XCM execution incomplete with the actual XCM error and the index of the  instruction that caused the error. 
 
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
 
### TooManyAuthorizedAliases
- **interface**: `api.errors.xcmPallet.TooManyAuthorizedAliases.is`
- **summary**:    Too many locations authorized to alias origin. 
 
### TooManyLocks
- **interface**: `api.errors.xcmPallet.TooManyLocks.is`
- **summary**:    The asset owner has too many locks on the asset. 
 
### TooManyReserves
- **interface**: `api.errors.xcmPallet.TooManyReserves.is`
- **summary**:    Too many assets with different reserve locations have been attempted for transfer. 
 
### Unreachable
- **interface**: `api.errors.xcmPallet.Unreachable.is`
- **summary**:    The desired destination was unreachable, generally because there is a no way of routing  to it. 
 
### UnweighableMessage
- **interface**: `api.errors.xcmPallet.UnweighableMessage.is`
- **summary**:    The message's weight could not be determined. 
