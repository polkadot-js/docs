---
title: Errors
---

This page lists the errors that can be encountered in the different modules. 

(NOTE: These were generated from a static/snapshot view of a recent default asset-hub-polkadot runtime. Some items may not be available in older nodes, or in any customized implementations.)

- **[assetConversion](#assetconversion)**

- **[assets](#assets)**

- **[balances](#balances)**

- **[collatorSelection](#collatorselection)**

- **[foreignAssets](#foreignassets)**

- **[messageQueue](#messagequeue)**

- **[multisig](#multisig)**

- **[nfts](#nfts)**

- **[parachainSystem](#parachainsystem)**

- **[polkadotXcm](#polkadotxcm)**

- **[poolAssets](#poolassets)**

- **[proxy](#proxy)**

- **[session](#session)**

- **[stateTrieMigration](#statetriemigration)**

- **[system](#system)**

- **[uniques](#uniques)**

- **[utility](#utility)**

- **[vesting](#vesting)**

- **[xcmpQueue](#xcmpqueue)**


___


## assetConversion
 
### AmountOneLessThanMinimal
- **interface**: `api.errors.assetConversion.AmountOneLessThanMinimal.is`
- **summary**:    Provided amount should be greater than or equal to the existential deposit/asset's  minimal amount. 
 
### AmountOutTooHigh
- **interface**: `api.errors.assetConversion.AmountOutTooHigh.is`
- **summary**:    Desired amount can't be equal to the pool reserve. 
 
### AmountTwoLessThanMinimal
- **interface**: `api.errors.assetConversion.AmountTwoLessThanMinimal.is`
- **summary**:    Provided amount should be greater than or equal to the existential deposit/asset's  minimal amount. 
 
### AssetOneDepositDidNotMeetMinimum
- **interface**: `api.errors.assetConversion.AssetOneDepositDidNotMeetMinimum.is`
- **summary**:    The minimal amount requirement for the first token in the pair wasn't met. 
 
### AssetOneWithdrawalDidNotMeetMinimum
- **interface**: `api.errors.assetConversion.AssetOneWithdrawalDidNotMeetMinimum.is`
- **summary**:    The minimal amount requirement for the first token in the pair wasn't met. 
 
### AssetTwoDepositDidNotMeetMinimum
- **interface**: `api.errors.assetConversion.AssetTwoDepositDidNotMeetMinimum.is`
- **summary**:    The minimal amount requirement for the second token in the pair wasn't met. 
 
### AssetTwoWithdrawalDidNotMeetMinimum
- **interface**: `api.errors.assetConversion.AssetTwoWithdrawalDidNotMeetMinimum.is`
- **summary**:    The minimal amount requirement for the second token in the pair wasn't met. 
 
### BelowMinimum
- **interface**: `api.errors.assetConversion.BelowMinimum.is`
- **summary**:    The destination account cannot exist with the swapped funds. 
 
### IncorrectPoolAssetId
- **interface**: `api.errors.assetConversion.IncorrectPoolAssetId.is`
- **summary**:    It was not possible to get or increment the Id of the pool. 
 
### InsufficientLiquidityMinted
- **interface**: `api.errors.assetConversion.InsufficientLiquidityMinted.is`
- **summary**:    Insufficient liquidity minted. 
 
### InvalidAssetPair
- **interface**: `api.errors.assetConversion.InvalidAssetPair.is`
- **summary**:    Provided asset pair is not supported for pool. 
 
### InvalidPath
- **interface**: `api.errors.assetConversion.InvalidPath.is`
- **summary**:    The provided path must consists of 2 assets at least. 
 
### NonUniquePath
- **interface**: `api.errors.assetConversion.NonUniquePath.is`
- **summary**:    The provided path must consists of unique assets. 
 
### OptimalAmountLessThanDesired
- **interface**: `api.errors.assetConversion.OptimalAmountLessThanDesired.is`
- **summary**:    Optimal calculated amount is less than desired. 
 
### Overflow
- **interface**: `api.errors.assetConversion.Overflow.is`
- **summary**:    An overflow happened. 
 
### PoolExists
- **interface**: `api.errors.assetConversion.PoolExists.is`
- **summary**:    Pool already exists. 
 
### PoolNotFound
- **interface**: `api.errors.assetConversion.PoolNotFound.is`
- **summary**:    The pool doesn't exist. 
 
### ProvidedMaximumNotSufficientForSwap
- **interface**: `api.errors.assetConversion.ProvidedMaximumNotSufficientForSwap.is`
- **summary**:    Provided maximum amount is not sufficient for swap. 
 
### ProvidedMinimumNotSufficientForSwap
- **interface**: `api.errors.assetConversion.ProvidedMinimumNotSufficientForSwap.is`
- **summary**:    Calculated amount out is less than provided minimum amount. 
 
### ReserveLeftLessThanMinimal
- **interface**: `api.errors.assetConversion.ReserveLeftLessThanMinimal.is`
- **summary**:    Reserve needs to always be greater than or equal to the existential deposit/asset's  minimal amount. 
 
### WrongDesiredAmount
- **interface**: `api.errors.assetConversion.WrongDesiredAmount.is`
- **summary**:    Desired amount can't be zero. 
 
### ZeroAmount
- **interface**: `api.errors.assetConversion.ZeroAmount.is`
- **summary**:    Amount can't be zero. 
 
### ZeroLiquidity
- **interface**: `api.errors.assetConversion.ZeroLiquidity.is`
- **summary**:    Requested liquidity can't be zero. 

___


## assets
 
### AlreadyExists
- **interface**: `api.errors.assets.AlreadyExists.is`
- **summary**:    The asset-account already exists. 
 
### AssetNotLive
- **interface**: `api.errors.assets.AssetNotLive.is`
- **summary**:    The asset is not live, and likely being destroyed. 
 
### BadAssetId
- **interface**: `api.errors.assets.BadAssetId.is`
- **summary**:    The asset ID must be equal to the [`NextAssetId`]. 
 
### BadMetadata
- **interface**: `api.errors.assets.BadMetadata.is`
- **summary**:    Invalid metadata given. 
 
### BadWitness
- **interface**: `api.errors.assets.BadWitness.is`
- **summary**:    Invalid witness data given. 
 
### BalanceLow
- **interface**: `api.errors.assets.BalanceLow.is`
- **summary**:    Account balance must be greater than or equal to the transfer amount. 
 
### CallbackFailed
- **interface**: `api.errors.assets.CallbackFailed.is`
- **summary**:    Callback action resulted in error 
 
### ContainsFreezes
- **interface**: `api.errors.assets.ContainsFreezes.is`
- **summary**:    The asset cannot be destroyed because some accounts for this asset contain freezes. 
 
### ContainsHolds
- **interface**: `api.errors.assets.ContainsHolds.is`
- **summary**:    The asset cannot be destroyed because some accounts for this asset contain holds. 
 
### Frozen
- **interface**: `api.errors.assets.Frozen.is`
- **summary**:    The origin account is frozen. 
 
### IncorrectStatus
- **interface**: `api.errors.assets.IncorrectStatus.is`
- **summary**:    The asset status is not the expected status. 
 
### InUse
- **interface**: `api.errors.assets.InUse.is`
- **summary**:    The asset ID is already taken. 
 
### LiveAsset
- **interface**: `api.errors.assets.LiveAsset.is`
- **summary**:    The asset is a live asset and is actively being used. Usually emit for operations such  as `start_destroy` which require the asset to be in a destroying state. 
 
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
 
### NotFrozen
- **interface**: `api.errors.assets.NotFrozen.is`
- **summary**:    The asset should be frozen before the given operation. 
 
### Unapproved
- **interface**: `api.errors.assets.Unapproved.is`
- **summary**:    No approval exists that would allow the transfer. 
 
### UnavailableConsumer
- **interface**: `api.errors.assets.UnavailableConsumer.is`
- **summary**:    Unable to increment the consumer reference counters on the account. Either no provider  reference exists to allow a non-zero balance of a non-self-sufficient asset, or one  fewer then the maximum number of consumers has been reached. 
 
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


## collatorSelection
 
### AlreadyCandidate
- **interface**: `api.errors.collatorSelection.AlreadyCandidate.is`
- **summary**:    Account is already a candidate. 
 
### AlreadyInvulnerable
- **interface**: `api.errors.collatorSelection.AlreadyInvulnerable.is`
- **summary**:    Account is already an Invulnerable. 
 
### DepositTooLow
- **interface**: `api.errors.collatorSelection.DepositTooLow.is`
- **summary**:    New deposit amount would be below the minimum candidacy bond. 
 
### IdenticalDeposit
- **interface**: `api.errors.collatorSelection.IdenticalDeposit.is`
- **summary**:    The updated deposit amount is equal to the amount already reserved. 
 
### InsertToCandidateListFailed
- **interface**: `api.errors.collatorSelection.InsertToCandidateListFailed.is`
- **summary**:    Could not insert in the candidate list. 
 
### InsufficientBond
- **interface**: `api.errors.collatorSelection.InsufficientBond.is`
- **summary**:    Deposit amount is too low to take the target's slot in the candidate list. 
 
### InvalidUnreserve
- **interface**: `api.errors.collatorSelection.InvalidUnreserve.is`
- **summary**:    Cannot lower candidacy bond while occupying a future collator slot in the list. 
 
### NoAssociatedValidatorId
- **interface**: `api.errors.collatorSelection.NoAssociatedValidatorId.is`
- **summary**:    Account has no associated validator ID. 
 
### NotCandidate
- **interface**: `api.errors.collatorSelection.NotCandidate.is`
- **summary**:    Account is not a candidate. 
 
### NotInvulnerable
- **interface**: `api.errors.collatorSelection.NotInvulnerable.is`
- **summary**:    Account is not an Invulnerable. 
 
### RemoveFromCandidateListFailed
- **interface**: `api.errors.collatorSelection.RemoveFromCandidateListFailed.is`
- **summary**:    Could not remove from the candidate list. 
 
### TargetIsNotCandidate
- **interface**: `api.errors.collatorSelection.TargetIsNotCandidate.is`
- **summary**:    The target account to be replaced in the candidate list is not a candidate. 
 
### TooFewEligibleCollators
- **interface**: `api.errors.collatorSelection.TooFewEligibleCollators.is`
- **summary**:    Leaving would result in too few candidates. 
 
### TooManyCandidates
- **interface**: `api.errors.collatorSelection.TooManyCandidates.is`
- **summary**:    The pallet has too many candidates. 
 
### TooManyInvulnerables
- **interface**: `api.errors.collatorSelection.TooManyInvulnerables.is`
- **summary**:    There are too many Invulnerables. 
 
### UpdateCandidateListFailed
- **interface**: `api.errors.collatorSelection.UpdateCandidateListFailed.is`
- **summary**:    Could not update the candidate list. 
 
### ValidatorNotRegistered
- **interface**: `api.errors.collatorSelection.ValidatorNotRegistered.is`
- **summary**:    Validator ID is not yet registered. 

___


## foreignAssets
 
### AlreadyExists
- **interface**: `api.errors.foreignAssets.AlreadyExists.is`
- **summary**:    The asset-account already exists. 
 
### AssetNotLive
- **interface**: `api.errors.foreignAssets.AssetNotLive.is`
- **summary**:    The asset is not live, and likely being destroyed. 
 
### BadAssetId
- **interface**: `api.errors.foreignAssets.BadAssetId.is`
- **summary**:    The asset ID must be equal to the [`NextAssetId`]. 
 
### BadMetadata
- **interface**: `api.errors.foreignAssets.BadMetadata.is`
- **summary**:    Invalid metadata given. 
 
### BadWitness
- **interface**: `api.errors.foreignAssets.BadWitness.is`
- **summary**:    Invalid witness data given. 
 
### BalanceLow
- **interface**: `api.errors.foreignAssets.BalanceLow.is`
- **summary**:    Account balance must be greater than or equal to the transfer amount. 
 
### CallbackFailed
- **interface**: `api.errors.foreignAssets.CallbackFailed.is`
- **summary**:    Callback action resulted in error 
 
### ContainsFreezes
- **interface**: `api.errors.foreignAssets.ContainsFreezes.is`
- **summary**:    The asset cannot be destroyed because some accounts for this asset contain freezes. 
 
### ContainsHolds
- **interface**: `api.errors.foreignAssets.ContainsHolds.is`
- **summary**:    The asset cannot be destroyed because some accounts for this asset contain holds. 
 
### Frozen
- **interface**: `api.errors.foreignAssets.Frozen.is`
- **summary**:    The origin account is frozen. 
 
### IncorrectStatus
- **interface**: `api.errors.foreignAssets.IncorrectStatus.is`
- **summary**:    The asset status is not the expected status. 
 
### InUse
- **interface**: `api.errors.foreignAssets.InUse.is`
- **summary**:    The asset ID is already taken. 
 
### LiveAsset
- **interface**: `api.errors.foreignAssets.LiveAsset.is`
- **summary**:    The asset is a live asset and is actively being used. Usually emit for operations such  as `start_destroy` which require the asset to be in a destroying state. 
 
### MinBalanceZero
- **interface**: `api.errors.foreignAssets.MinBalanceZero.is`
- **summary**:    Minimum balance should be non-zero. 
 
### NoAccount
- **interface**: `api.errors.foreignAssets.NoAccount.is`
- **summary**:    The account to alter does not exist. 
 
### NoDeposit
- **interface**: `api.errors.foreignAssets.NoDeposit.is`
- **summary**:    The asset-account doesn't have an associated deposit. 
 
### NoPermission
- **interface**: `api.errors.foreignAssets.NoPermission.is`
- **summary**:    The signing account has no permission to do the operation. 
 
### NotFrozen
- **interface**: `api.errors.foreignAssets.NotFrozen.is`
- **summary**:    The asset should be frozen before the given operation. 
 
### Unapproved
- **interface**: `api.errors.foreignAssets.Unapproved.is`
- **summary**:    No approval exists that would allow the transfer. 
 
### UnavailableConsumer
- **interface**: `api.errors.foreignAssets.UnavailableConsumer.is`
- **summary**:    Unable to increment the consumer reference counters on the account. Either no provider  reference exists to allow a non-zero balance of a non-self-sufficient asset, or one  fewer then the maximum number of consumers has been reached. 
 
### Unknown
- **interface**: `api.errors.foreignAssets.Unknown.is`
- **summary**:    The given asset ID is unknown. 
 
### WouldBurn
- **interface**: `api.errors.foreignAssets.WouldBurn.is`
- **summary**:    The operation would result in funds being burned. 
 
### WouldDie
- **interface**: `api.errors.foreignAssets.WouldDie.is`
- **summary**:    The source account would not survive the transfer and it needs to stay alive. 

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


## nfts
 
### AlreadyClaimed
- **interface**: `api.errors.nfts.AlreadyClaimed.is`
- **summary**:    The provided Item was already used for claiming. 
 
### AlreadyExists
- **interface**: `api.errors.nfts.AlreadyExists.is`
- **summary**:    The item ID has already been used for an item. 
 
### ApprovalExpired
- **interface**: `api.errors.nfts.ApprovalExpired.is`
- **summary**:    The approval had a deadline that expired, so the approval isn't valid anymore. 
 
### AttributeNotFound
- **interface**: `api.errors.nfts.AttributeNotFound.is`
- **summary**:    The provided attribute can't be found. 
 
### BadWitness
- **interface**: `api.errors.nfts.BadWitness.is`
- **summary**:    The witness data given does not match the current state of the chain. 
 
### BidTooLow
- **interface**: `api.errors.nfts.BidTooLow.is`
- **summary**:    The provided bid is too low. 
 
### CollectionIdInUse
- **interface**: `api.errors.nfts.CollectionIdInUse.is`
- **summary**:    Collection ID is already taken. 
 
### CollectionNotEmpty
- **interface**: `api.errors.nfts.CollectionNotEmpty.is`
- **summary**:    Can't delete non-empty collections. 
 
### DeadlineExpired
- **interface**: `api.errors.nfts.DeadlineExpired.is`
- **summary**:    The deadline has already expired. 
 
### InconsistentItemConfig
- **interface**: `api.errors.nfts.InconsistentItemConfig.is`
- **summary**:    Item's config already exists and should be equal to the provided one. 
 
### IncorrectData
- **interface**: `api.errors.nfts.IncorrectData.is`
- **summary**:    The provided data is incorrect. 
 
### IncorrectMetadata
- **interface**: `api.errors.nfts.IncorrectMetadata.is`
- **summary**:    The provided metadata might be too long. 
 
### ItemLocked
- **interface**: `api.errors.nfts.ItemLocked.is`
- **summary**:    The item is locked (non-transferable). 
 
### ItemsNonTransferable
- **interface**: `api.errors.nfts.ItemsNonTransferable.is`
- **summary**:    Items within that collection are non-transferable. 
 
### LockedCollectionAttributes
- **interface**: `api.errors.nfts.LockedCollectionAttributes.is`
- **summary**:    Collection's attributes are locked. 
 
### LockedCollectionMetadata
- **interface**: `api.errors.nfts.LockedCollectionMetadata.is`
- **summary**:    Collection's metadata is locked. 
 
### LockedItemAttributes
- **interface**: `api.errors.nfts.LockedItemAttributes.is`
- **summary**:    Item's attributes are locked. 
 
### LockedItemMetadata
- **interface**: `api.errors.nfts.LockedItemMetadata.is`
- **summary**:    Item's metadata is locked. 
 
### MaxAttributesLimitReached
- **interface**: `api.errors.nfts.MaxAttributesLimitReached.is`
- **summary**:    Can't set more attributes per one call. 
 
### MaxSupplyLocked
- **interface**: `api.errors.nfts.MaxSupplyLocked.is`
- **summary**:    The max supply is locked and can't be changed. 
 
### MaxSupplyReached
- **interface**: `api.errors.nfts.MaxSupplyReached.is`
- **summary**:    All items have been minted. 
 
### MaxSupplyTooSmall
- **interface**: `api.errors.nfts.MaxSupplyTooSmall.is`
- **summary**:    The provided max supply is less than the number of items a collection already has. 
 
### MetadataNotFound
- **interface**: `api.errors.nfts.MetadataNotFound.is`
- **summary**:    The given item has no metadata set. 
 
### MethodDisabled
- **interface**: `api.errors.nfts.MethodDisabled.is`
- **summary**:    The method is disabled by system settings. 
 
### MintEnded
- **interface**: `api.errors.nfts.MintEnded.is`
- **summary**:    Mint has already ended. 
 
### MintNotStarted
- **interface**: `api.errors.nfts.MintNotStarted.is`
- **summary**:    Mint has not started yet. 
 
### NoConfig
- **interface**: `api.errors.nfts.NoConfig.is`
- **summary**:    Config for a collection or an item can't be found. 
 
### NoPermission
- **interface**: `api.errors.nfts.NoPermission.is`
- **summary**:    The signing account has no permission to do the operation. 
 
### NotDelegate
- **interface**: `api.errors.nfts.NotDelegate.is`
- **summary**:    The provided account is not a delegate. 
 
### NotForSale
- **interface**: `api.errors.nfts.NotForSale.is`
- **summary**:    Item is not for sale. 
 
### ReachedApprovalLimit
- **interface**: `api.errors.nfts.ReachedApprovalLimit.is`
- **summary**:    The item has reached its approval limit. 
 
### RolesNotCleared
- **interface**: `api.errors.nfts.RolesNotCleared.is`
- **summary**:    Some roles were not cleared. 
 
### Unaccepted
- **interface**: `api.errors.nfts.Unaccepted.is`
- **summary**:    The named owner has not signed ownership acceptance of the collection. 
 
### Unapproved
- **interface**: `api.errors.nfts.Unapproved.is`
- **summary**:    No approval exists that would allow the transfer. 
 
### UnknownCollection
- **interface**: `api.errors.nfts.UnknownCollection.is`
- **summary**:    The given item ID is unknown. 
 
### UnknownItem
- **interface**: `api.errors.nfts.UnknownItem.is`
- **summary**:    The given item ID is unknown. 
 
### UnknownSwap
- **interface**: `api.errors.nfts.UnknownSwap.is`
- **summary**:    Swap doesn't exist. 
 
### WitnessRequired
- **interface**: `api.errors.nfts.WitnessRequired.is`
- **summary**:    The witness data should be provided. 
 
### WrongDelegate
- **interface**: `api.errors.nfts.WrongDelegate.is`
- **summary**:    The delegate turned out to be different to what was expected. 
 
### WrongDuration
- **interface**: `api.errors.nfts.WrongDuration.is`
- **summary**:    The duration provided should be less than or equal to `MaxDeadlineDuration`. 
 
### WrongNamespace
- **interface**: `api.errors.nfts.WrongNamespace.is`
- **summary**:    The provided namespace isn't supported in this call. 
 
### WrongOrigin
- **interface**: `api.errors.nfts.WrongOrigin.is`
- **summary**:    The extrinsic was sent by the wrong origin. 
 
### WrongOwner
- **interface**: `api.errors.nfts.WrongOwner.is`
- **summary**:    The owner turned out to be different to what was expected. 
 
### WrongSetting
- **interface**: `api.errors.nfts.WrongSetting.is`
- **summary**:    The provided setting can't be set. 
 
### WrongSignature
- **interface**: `api.errors.nfts.WrongSignature.is`
- **summary**:    The provided signature is incorrect. 

___


## parachainSystem
 
### HostConfigurationNotAvailable
- **interface**: `api.errors.parachainSystem.HostConfigurationNotAvailable.is`
- **summary**:    The inherent which supplies the host configuration did not run this block. 
 
### NotScheduled
- **interface**: `api.errors.parachainSystem.NotScheduled.is`
- **summary**:    No validation function upgrade is currently scheduled. 
 
### OverlappingUpgrades
- **interface**: `api.errors.parachainSystem.OverlappingUpgrades.is`
- **summary**:    Attempt to upgrade validation function while existing upgrade pending. 
 
### ProhibitedByPolkadot
- **interface**: `api.errors.parachainSystem.ProhibitedByPolkadot.is`
- **summary**:    Polkadot currently prohibits this parachain from upgrading its validation function. 
 
### TooBig
- **interface**: `api.errors.parachainSystem.TooBig.is`
- **summary**:    The supplied validation function has compiled into a blob larger than Polkadot is  willing to run. 
 
### ValidationDataNotAvailable
- **interface**: `api.errors.parachainSystem.ValidationDataNotAvailable.is`
- **summary**:    The inherent which supplies the validation data did not run this block. 

___


## polkadotXcm
 
### AccountNotSovereign
- **interface**: `api.errors.polkadotXcm.AccountNotSovereign.is`
- **summary**:    The given account is not an identifiable sovereign account for any location. 
 
### AliasNotFound
- **interface**: `api.errors.polkadotXcm.AliasNotFound.is`
- **summary**:    The alias to remove authorization for was not found. 
 
### AlreadySubscribed
- **interface**: `api.errors.polkadotXcm.AlreadySubscribed.is`
- **summary**:    The location is invalid since it already has a subscription from us. 
 
### BadLocation
- **interface**: `api.errors.polkadotXcm.BadLocation.is`
- **summary**:    The given location could not be used (e.g. because it cannot be expressed in the  desired version of XCM). 
 
### BadVersion
- **interface**: `api.errors.polkadotXcm.BadVersion.is`
- **summary**:    The version of the `Versioned` value used is not able to be interpreted. 
 
### CannotCheckOutTeleport
- **interface**: `api.errors.polkadotXcm.CannotCheckOutTeleport.is`
- **summary**:    Could not check-out the assets for teleportation to the destination chain. 
 
### CannotReanchor
- **interface**: `api.errors.polkadotXcm.CannotReanchor.is`
- **summary**:    Could not re-anchor the assets to declare the fees for the destination chain. 
 
### DestinationNotInvertible
- **interface**: `api.errors.polkadotXcm.DestinationNotInvertible.is`
- **summary**:    The destination `Location` provided cannot be inverted. 
 
### Empty
- **interface**: `api.errors.polkadotXcm.Empty.is`
- **summary**:    The assets to be sent are empty. 
 
### ExpiresInPast
- **interface**: `api.errors.polkadotXcm.ExpiresInPast.is`
- **summary**:    Expiry block number is in the past. 
 
### FeesNotMet
- **interface**: `api.errors.polkadotXcm.FeesNotMet.is`
- **summary**:    The operation required fees to be paid which the initiator could not meet. 
 
### Filtered
- **interface**: `api.errors.polkadotXcm.Filtered.is`
- **summary**:    The message execution fails the filter. 
 
### InUse
- **interface**: `api.errors.polkadotXcm.InUse.is`
- **summary**:    The unlock operation cannot succeed because there are still consumers of the lock. 
 
### InvalidAssetUnknownReserve
- **interface**: `api.errors.polkadotXcm.InvalidAssetUnknownReserve.is`
- **summary**:    Invalid asset, reserve chain could not be determined for it. 
 
### InvalidAssetUnsupportedReserve
- **interface**: `api.errors.polkadotXcm.InvalidAssetUnsupportedReserve.is`
- **summary**:    Invalid asset, do not support remote asset reserves with different fees reserves. 
 
### InvalidOrigin
- **interface**: `api.errors.polkadotXcm.InvalidOrigin.is`
- **summary**:    Origin is invalid for sending. 
 
### LocalExecutionIncomplete
- **interface**: `api.errors.polkadotXcm.LocalExecutionIncomplete.is`
- **summary**:    Local XCM execution incomplete. 
 
### LockNotFound
- **interface**: `api.errors.polkadotXcm.LockNotFound.is`
- **summary**:    A remote lock with the corresponding data could not be found. 
 
### LowBalance
- **interface**: `api.errors.polkadotXcm.LowBalance.is`
- **summary**:    The owner does not own (all) of the asset that they wish to do the operation on. 
 
### NoSubscription
- **interface**: `api.errors.polkadotXcm.NoSubscription.is`
- **summary**:    The referenced subscription could not be found. 
 
### SendFailure
- **interface**: `api.errors.polkadotXcm.SendFailure.is`
- **summary**:    There was some other issue (i.e. not to do with routing) in sending the message.  Perhaps a lack of space for buffering the message. 
 
### TooManyAssets
- **interface**: `api.errors.polkadotXcm.TooManyAssets.is`
- **summary**:    Too many assets have been attempted for transfer. 
 
### TooManyAuthorizedAliases
- **interface**: `api.errors.polkadotXcm.TooManyAuthorizedAliases.is`
- **summary**:    Too many locations authorized to alias origin. 
 
### TooManyLocks
- **interface**: `api.errors.polkadotXcm.TooManyLocks.is`
- **summary**:    The asset owner has too many locks on the asset. 
 
### TooManyReserves
- **interface**: `api.errors.polkadotXcm.TooManyReserves.is`
- **summary**:    Too many assets with different reserve locations have been attempted for transfer. 
 
### Unreachable
- **interface**: `api.errors.polkadotXcm.Unreachable.is`
- **summary**:    The desired destination was unreachable, generally because there is a no way of routing  to it. 
 
### UnweighableMessage
- **interface**: `api.errors.polkadotXcm.UnweighableMessage.is`
- **summary**:    The message's weight could not be determined. 

___


## poolAssets
 
### AlreadyExists
- **interface**: `api.errors.poolAssets.AlreadyExists.is`
- **summary**:    The asset-account already exists. 
 
### AssetNotLive
- **interface**: `api.errors.poolAssets.AssetNotLive.is`
- **summary**:    The asset is not live, and likely being destroyed. 
 
### BadAssetId
- **interface**: `api.errors.poolAssets.BadAssetId.is`
- **summary**:    The asset ID must be equal to the [`NextAssetId`]. 
 
### BadMetadata
- **interface**: `api.errors.poolAssets.BadMetadata.is`
- **summary**:    Invalid metadata given. 
 
### BadWitness
- **interface**: `api.errors.poolAssets.BadWitness.is`
- **summary**:    Invalid witness data given. 
 
### BalanceLow
- **interface**: `api.errors.poolAssets.BalanceLow.is`
- **summary**:    Account balance must be greater than or equal to the transfer amount. 
 
### CallbackFailed
- **interface**: `api.errors.poolAssets.CallbackFailed.is`
- **summary**:    Callback action resulted in error 
 
### ContainsFreezes
- **interface**: `api.errors.poolAssets.ContainsFreezes.is`
- **summary**:    The asset cannot be destroyed because some accounts for this asset contain freezes. 
 
### ContainsHolds
- **interface**: `api.errors.poolAssets.ContainsHolds.is`
- **summary**:    The asset cannot be destroyed because some accounts for this asset contain holds. 
 
### Frozen
- **interface**: `api.errors.poolAssets.Frozen.is`
- **summary**:    The origin account is frozen. 
 
### IncorrectStatus
- **interface**: `api.errors.poolAssets.IncorrectStatus.is`
- **summary**:    The asset status is not the expected status. 
 
### InUse
- **interface**: `api.errors.poolAssets.InUse.is`
- **summary**:    The asset ID is already taken. 
 
### LiveAsset
- **interface**: `api.errors.poolAssets.LiveAsset.is`
- **summary**:    The asset is a live asset and is actively being used. Usually emit for operations such  as `start_destroy` which require the asset to be in a destroying state. 
 
### MinBalanceZero
- **interface**: `api.errors.poolAssets.MinBalanceZero.is`
- **summary**:    Minimum balance should be non-zero. 
 
### NoAccount
- **interface**: `api.errors.poolAssets.NoAccount.is`
- **summary**:    The account to alter does not exist. 
 
### NoDeposit
- **interface**: `api.errors.poolAssets.NoDeposit.is`
- **summary**:    The asset-account doesn't have an associated deposit. 
 
### NoPermission
- **interface**: `api.errors.poolAssets.NoPermission.is`
- **summary**:    The signing account has no permission to do the operation. 
 
### NotFrozen
- **interface**: `api.errors.poolAssets.NotFrozen.is`
- **summary**:    The asset should be frozen before the given operation. 
 
### Unapproved
- **interface**: `api.errors.poolAssets.Unapproved.is`
- **summary**:    No approval exists that would allow the transfer. 
 
### UnavailableConsumer
- **interface**: `api.errors.poolAssets.UnavailableConsumer.is`
- **summary**:    Unable to increment the consumer reference counters on the account. Either no provider  reference exists to allow a non-zero balance of a non-self-sufficient asset, or one  fewer then the maximum number of consumers has been reached. 
 
### Unknown
- **interface**: `api.errors.poolAssets.Unknown.is`
- **summary**:    The given asset ID is unknown. 
 
### WouldBurn
- **interface**: `api.errors.poolAssets.WouldBurn.is`
- **summary**:    The operation would result in funds being burned. 
 
### WouldDie
- **interface**: `api.errors.poolAssets.WouldDie.is`
- **summary**:    The source account would not survive the transfer and it needs to stay alive. 

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


## uniques
 
### AlreadyExists
- **interface**: `api.errors.uniques.AlreadyExists.is`
- **summary**:    The item ID has already been used for an item. 
 
### BadWitness
- **interface**: `api.errors.uniques.BadWitness.is`
- **summary**:    Invalid witness data given. 
 
### BidTooLow
- **interface**: `api.errors.uniques.BidTooLow.is`
- **summary**:    The provided bid is too low. 
 
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
 
### NotForSale
- **interface**: `api.errors.uniques.NotForSale.is`
- **summary**:    Item is not for sale. 
 
### Unaccepted
- **interface**: `api.errors.uniques.Unaccepted.is`
- **summary**:    The named owner has not signed ownership of the collection is acceptable. 
 
### Unapproved
- **interface**: `api.errors.uniques.Unapproved.is`
- **summary**:    No approval exists that would allow the transfer. 
 
### UnknownCollection
- **interface**: `api.errors.uniques.UnknownCollection.is`
- **summary**:    The given item ID is unknown. 
 
### UnknownItem
- **interface**: `api.errors.uniques.UnknownItem.is`
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


## xcmpQueue
 
### AlreadyResumed
- **interface**: `api.errors.xcmpQueue.AlreadyResumed.is`
- **summary**:    The execution is already resumed. 
 
### AlreadySuspended
- **interface**: `api.errors.xcmpQueue.AlreadySuspended.is`
- **summary**:    The execution is already suspended. 
 
### BadQueueConfig
- **interface**: `api.errors.xcmpQueue.BadQueueConfig.is`
- **summary**:    Setting the queue config failed since one of its values was invalid. 
 
### TooBig
- **interface**: `api.errors.xcmpQueue.TooBig.is`
- **summary**:    The message is too big. 
 
### TooManyActiveOutboundChannels
- **interface**: `api.errors.xcmpQueue.TooManyActiveOutboundChannels.is`
- **summary**:    There are too many active outbound channels. 
