---
title: Storage
---

The following sections contain Storage methods are part of the default asset-hub-kusama runtime. On the api, these are exposed via `api.query.<module>.<method>`. 

(NOTE: These were generated from a static/snapshot view of a recent default asset-hub-kusama runtime. Some items may not be available in older nodes, or in any customized implementations.)

- **[ahMigrator](#ahmigrator)**

- **[ahOps](#ahops)**

- **[assetConversion](#assetconversion)**

- **[assetRate](#assetrate)**

- **[assets](#assets)**

- **[aura](#aura)**

- **[auraExt](#auraext)**

- **[authorship](#authorship)**

- **[balances](#balances)**

- **[bounties](#bounties)**

- **[childBounties](#childbounties)**

- **[claims](#claims)**

- **[collatorSelection](#collatorselection)**

- **[convictionVoting](#convictionvoting)**

- **[delegatedStaking](#delegatedstaking)**

- **[foreignAssets](#foreignassets)**

- **[indices](#indices)**

- **[messageQueue](#messagequeue)**

- **[multiBlockElection](#multiblockelection)**

- **[multiBlockElectionSigned](#multiblockelectionsigned)**

- **[multiBlockElectionVerifier](#multiblockelectionverifier)**

- **[multiBlockMigrations](#multiblockmigrations)**

- **[multisig](#multisig)**

- **[nftFractionalization](#nftfractionalization)**

- **[nfts](#nfts)**

- **[nominationPools](#nominationpools)**

- **[parachainInfo](#parachaininfo)**

- **[parachainSystem](#parachainsystem)**

- **[parameters](#parameters)**

- **[polkadotXcm](#polkadotxcm)**

- **[poolAssets](#poolassets)**

- **[preimage](#preimage)**

- **[proxy](#proxy)**

- **[recovery](#recovery)**

- **[referenda](#referenda)**

- **[remoteProxyRelayChain](#remoteproxyrelaychain)**

- **[revive](#revive)**

- **[scheduler](#scheduler)**

- **[session](#session)**

- **[society](#society)**

- **[staking](#staking)**

- **[stakingRcClient](#stakingrcclient)**

- **[stateTrieMigration](#statetriemigration)**

- **[substrate](#substrate)**

- **[system](#system)**

- **[timestamp](#timestamp)**

- **[toPolkadotXcmRouter](#topolkadotxcmrouter)**

- **[transactionPayment](#transactionpayment)**

- **[treasury](#treasury)**

- **[uniques](#uniques)**

- **[vesting](#vesting)**

- **[voterList](#voterlist)**

- **[whitelist](#whitelist)**

- **[xcmpQueue](#xcmpqueue)**


___


## ahMigrator
 
### ahBalancesBefore(): `PalletAhMigratorBalancesBefore`
- **interface**: `api.query.ahMigrator.ahBalancesBefore`
- **summary**:    Helper storage item to store the total balance / total issuance of native token at the start  of the migration. Since teleports are disabled during migration, the total issuance will not  change for other reason than the migration itself. 
 
### ahMigrationStage(): `PalletAhMigratorMigrationStage`
- **interface**: `api.query.ahMigrator.ahMigrationStage`
- **summary**:    The Asset Hub migration state. 
 
### dmpQueuePriorityConfig(): `PalletRcMigratorQueuePriority`
- **interface**: `api.query.ahMigrator.dmpQueuePriorityConfig`
- **summary**:    The priority of the DMP queue during migration. 

   Controls how the DMP (Downward Message Passing) queue is processed relative to other queues  during the migration process. This helps ensure timely processing of migration messages.  The default priority pattern is defined in the pallet configuration, but can be overridden  by a storage value of this type. 
 
### manager(): `Option<AccountId32>`
- **interface**: `api.query.ahMigrator.manager`
- **summary**:    An optional account id of a manager. 

   This account id has similar privileges to [`Config::AdminOrigin`] except that it  can not set the manager account id via `set_manager` call. 
 
### migrationEndBlock(): `Option<u32>`
- **interface**: `api.query.ahMigrator.migrationEndBlock`
- **summary**:    Block number when migration finished and extrinsics were unlocked. 

   This is set when entering the `MigrationDone` stage hence when  `RcMigrationStage::is_finished()` becomes `true`. 
 
### migrationStartBlock(): `Option<u32>`
- **interface**: `api.query.ahMigrator.migrationStartBlock`
- **summary**:    The block number at which the migration began and the pallet's extrinsics were locked. 

   This value is set when entering the `WaitingForAh` stage, i.e., when  `RcMigrationStage::is_ongoing()` becomes `true`. 
 
### rcAccounts(`AccountId32`): `Option<PalletRcMigratorAccountsAccount>`
- **interface**: `api.query.ahMigrator.rcAccounts`
- **summary**:    RC accounts that failed to migrate when were received on the Asset Hub. 

   This is unlikely to happen, since we dry run the migration, but we keep it for completeness. 

___


## ahOps
 
### rcCrowdloanContribution(`u32, u32, AccountId32`): `Option<(AccountId32,u128)>`
- **interface**: `api.query.ahOps.rcCrowdloanContribution`
- **summary**:    Amount of balance that a contributor made towards a crowdloan. 

   `withdraw_crowdloan_contribution` can be permissionlessly called once the block number  passed to unlock the balance for a specific account. 

   The keys are as follows: 

  - Block number after which the balance can be unlocked.

  - The para_id of the crowdloan.

  - The account that made the contribution.

   The value is (fund_pot, balance). The contribution pot is the second key in the  `RcCrowdloanContribution` storage. 
 
### rcCrowdloanReserve(`u32, u32, AccountId32`): `Option<u128>`
- **interface**: `api.query.ahOps.rcCrowdloanReserve`
- **summary**:    The reserve that was taken to create a crowdloan. 

   This is normally 500 DOT and can be refunded as last step after all  `RcCrowdloanContribution`s of this loan have been withdrawn. 

   Keys: 

  - Block number after which this can be unreserved

  - The para_id of the crowdloan

  - The account that will have the balance unreserved
 
### rcLeaseReserve(`u32, u32, AccountId32`): `Option<u128>`
- **interface**: `api.query.ahOps.rcLeaseReserve`
- **summary**:    Amount of balance that was reserved for winning a lease auction. 

   `unreserve_lease_deposit` can be permissionlessly called once the block number passed to  unreserve the deposit. It is implicitly called by `withdraw_crowdloan_contribution`. 

   The account here can either be a crowdloan account or a solo bidder. If it is a crowdloan  account, then the summed up contributions for it in the contributions map will equate the  reserved balance here. 

   The keys are as follows: 

  - Block number after which the deposit can be unreserved.

  - The para_id of the lease slot.

  - The account that will have the balance unreserved.

  - The balance to be unreserved.

___


## assetConversion
 
### nextPoolAssetId(): `Option<u32>`
- **interface**: `api.query.assetConversion.nextPoolAssetId`
- **summary**:    Stores the `PoolAssetId` that is going to be used for the next lp token.  This gets incremented whenever a new lp pool is created. 
 
### pools(`(StagingXcmV5Location,StagingXcmV5Location)`): `Option<PalletAssetConversionPoolInfo>`
- **interface**: `api.query.assetConversion.pools`
- **summary**:    Map from `PoolAssetId` to `PoolInfo`. This establishes whether a pool has been officially  created rather than people sending tokens directly to a pool's public account. 

___


## assetRate
 
### conversionRateToNative(`PolkadotRuntimeCommonImplsVersionedLocatableAsset`): `Option<u128>`
- **interface**: `api.query.assetRate.conversionRateToNative`
- **summary**:    Maps an asset to its fixed point representation in the native balance. 

   E.g. `native_amount = asset_amount * ConversionRateToNative::<T>::get(asset_kind)` 

___


## assets
 
### account(`u32, AccountId32`): `Option<PalletAssetsAssetAccount>`
- **interface**: `api.query.assets.account`
- **summary**:    The holdings of a specific account for a specific asset. 
 
### approvals(`u32, AccountId32, AccountId32`): `Option<PalletAssetsApproval>`
- **interface**: `api.query.assets.approvals`
- **summary**:    Approved balance transfers. First balance is the amount approved for transfer. Second  is the amount of `T::Currency` reserved for storing this.  First key is the asset ID, second key is the owner and third key is the delegate. 
 
### asset(`u32`): `Option<PalletAssetsAssetDetails>`
- **interface**: `api.query.assets.asset`
- **summary**:    Details of an asset. 
 
### metadata(`u32`): `{"deposit":"u128","name":"Bytes","symbol":"Bytes","decimals":"u8","isFrozen":"bool"}`
- **interface**: `api.query.assets.metadata`
- **summary**:    Metadata of an asset. 
 
### nextAssetId(): `Option<u32>`
- **interface**: `api.query.assets.nextAssetId`
- **summary**:    The asset ID enforced for the next asset creation, if any present. Otherwise, this storage  item has no effect. 

   This can be useful for setting up constraints for IDs of the new assets. For example, by  providing an initial [`NextAssetId`] and using the [`crate::AutoIncAssetId`] callback, an  auto-increment model can be applied to all new asset IDs. 

   The initial next asset ID can be set using the [`GenesisConfig`] or the  [SetNextAssetId](`migration::next_asset_id::SetNextAssetId`) migration. 

___


## aura
 
### authorities(): `Vec<SpConsensusAuraSr25519AppSr25519Public>`
- **interface**: `api.query.aura.authorities`
- **summary**:    The current authority set. 
 
### currentSlot(): `u64`
- **interface**: `api.query.aura.currentSlot`
- **summary**:    The current slot of this block. 

   This will be set in `on_initialize`. 

___


## auraExt
 
### authorities(): `Vec<SpConsensusAuraSr25519AppSr25519Public>`
- **interface**: `api.query.auraExt.authorities`
- **summary**:    Serves as cache for the authorities. 

   The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,  but we require the old authorities to verify the seal when validating a PoV. This will  always be updated to the latest AuRa authorities in `on_finalize`. 
 
### relaySlotInfo(): `Option<(u64,u32)>`
- **interface**: `api.query.auraExt.relaySlotInfo`
- **summary**:    Current relay chain slot paired with a number of authored blocks. 

   This is updated in [`FixedVelocityConsensusHook::on_state_proof`] with the current relay  chain slot as provided by the relay chain state proof. 

___


## authorship
 
### author(): `Option<AccountId32>`
- **interface**: `api.query.authorship.author`
- **summary**:    Author of current block. 

___


## balances
 
### account(`AccountId32`): `PalletBalancesAccountData`
- **interface**: `api.query.balances.account`
- **summary**:    The Balances pallet example of storing the balance of an account. 

   #### Example 

   ```nocompile  impl pallet_balances::Config for Runtime {  type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>  }  ``` 

   You can also store the balance of an account in the `System` pallet. 

   #### Example 

   ```nocompile  impl pallet_balances::Config for Runtime {  type AccountStore = System  }  ``` 

   But this comes with tradeoffs, storing account balances in the system pallet stores  `frame_system` data alongside the account data contrary to storing account balances in the  `Balances` pallet, which uses a `StorageMap` to store balances data only.  NOTE: This is only used in the case that this pallet is used to store balances. 
 
### freezes(`AccountId32`): `Vec<FrameSupportTokensMiscIdAmountRuntimeFreezeReason>`
- **interface**: `api.query.balances.freezes`
- **summary**:    Freeze locks on account balances. 
 
### holds(`AccountId32`): `Vec<FrameSupportTokensMiscIdAmountRuntimeHoldReason>`
- **interface**: `api.query.balances.holds`
- **summary**:    Holds on account balances. 
 
### inactiveIssuance(): `u128`
- **interface**: `api.query.balances.inactiveIssuance`
- **summary**:    The total units of outstanding deactivated balance in the system. 
 
### locks(`AccountId32`): `Vec<PalletBalancesBalanceLock>`
- **interface**: `api.query.balances.locks`
- **summary**:    Any liquidity locks on some account balances.  NOTE: Should only be accessed when setting, changing and freeing a lock. 

   Use of locks is deprecated in favour of freezes. See `https://github.com/paritytech/substrate/pull/12951/` 
 
### reserves(`AccountId32`): `Vec<PalletBalancesReserveData>`
- **interface**: `api.query.balances.reserves`
- **summary**:    Named reserves on some account balances. 

   Use of reserves is deprecated in favour of holds. See `https://github.com/paritytech/substrate/pull/12951/` 
 
### totalIssuance(): `u128`
- **interface**: `api.query.balances.totalIssuance`
- **summary**:    The total units issued in the system. 

___


## bounties
 
### bounties(`u32`): `Option<PalletBountiesBounty>`
- **interface**: `api.query.bounties.bounties`
- **summary**:    Bounties that have been made. 
 
### bountyApprovals(): `Vec<u32>`
- **interface**: `api.query.bounties.bountyApprovals`
- **summary**:    Bounty indices that have been approved but not yet funded. 
 
### bountyCount(): `u32`
- **interface**: `api.query.bounties.bountyCount`
- **summary**:    Number of bounty proposals that have been made. 
 
### bountyDescriptions(`u32`): `Option<Bytes>`
- **interface**: `api.query.bounties.bountyDescriptions`
- **summary**:    The description of each bounty. 

___


## childBounties
 
### childBounties(`u32, u32`): `Option<PalletChildBountiesChildBounty>`
- **interface**: `api.query.childBounties.childBounties`
- **summary**:    Child bounties that have been added. 
 
### childBountyCount(): `u32`
- **interface**: `api.query.childBounties.childBountyCount`
- **summary**:    DEPRECATED: Replaced with `ParentTotalChildBounties` storage item keeping dedicated counts  for each parent bounty. Number of total child bounties. Will be removed in May 2025. 
 
### childBountyDescriptionsV1(`u32, u32`): `Option<Bytes>`
- **interface**: `api.query.childBounties.childBountyDescriptionsV1`
- **summary**:    The description of each child-bounty. Indexed by `(parent_id, child_id)`. 

   This item replaces the `ChildBountyDescriptions` storage item from the V0 storage version. 
 
### childrenCuratorFees(`u32`): `u128`
- **interface**: `api.query.childBounties.childrenCuratorFees`
- **summary**:    The cumulative child-bounty curator fee for each parent bounty. 
 
### parentChildBounties(`u32`): `u32`
- **interface**: `api.query.childBounties.parentChildBounties`
- **summary**:    Number of active child bounties per parent bounty.  Map of parent bounty index to number of child bounties. 
 
### parentTotalChildBounties(`u32`): `u32`
- **interface**: `api.query.childBounties.parentTotalChildBounties`
- **summary**:    Number of total child bounties per parent bounty, including completed bounties. 
 
### v0ToV1ChildBountyIds(`u32`): `Option<(u32,u32)>`
- **interface**: `api.query.childBounties.v0ToV1ChildBountyIds`
- **summary**:    The mapping of the child bounty ids from storage version `V0` to the new `V1` version. 

   The `V0` ids based on total child bounty count [`ChildBountyCount`]`. The `V1` version ids  based on the child bounty count per parent bounty [`ParentTotalChildBounties`].  The item intended solely for client convenience and not used in the pallet's core logic. 

___


## claims
 
### claims(`EthereumAddress`): `Option<u128>`
- **interface**: `api.query.claims.claims`
 
### preclaims(`AccountId32`): `Option<EthereumAddress>`
- **interface**: `api.query.claims.preclaims`
- **summary**:    Pre-claimed Ethereum accounts, by the Account ID that they are claimed to. 
 
### signing(`EthereumAddress`): `Option<PolkadotRuntimeCommonClaimsStatementKind>`
- **interface**: `api.query.claims.signing`
- **summary**:    The statement kind that must be signed, if any. 
 
### total(): `u128`
- **interface**: `api.query.claims.total`
 
### vesting(`EthereumAddress`): `Option<(u128,u128,u32)>`
- **interface**: `api.query.claims.vesting`
- **summary**:    Vesting schedule for a claim.  First balance is the total amount that should be held for vesting.  Second balance is how much should be unlocked per block.  The block number is when the vesting should start. 

___


## collatorSelection
 
### candidacyBond(): `u128`
- **interface**: `api.query.collatorSelection.candidacyBond`
- **summary**:    Fixed amount to deposit to become a collator. 

   When a collator calls `leave_intent` they immediately receive the deposit back. 
 
### candidateList(): `Vec<PalletCollatorSelectionCandidateInfo>`
- **interface**: `api.query.collatorSelection.candidateList`
- **summary**:    The (community, limited) collation candidates. `Candidates` and `Invulnerables` should be  mutually exclusive. 

   This list is sorted in ascending order by deposit and when the deposits are equal, the least  recently updated is considered greater. 
 
### desiredCandidates(): `u32`
- **interface**: `api.query.collatorSelection.desiredCandidates`
- **summary**:    Desired number of candidates. 

   This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct. 
 
### invulnerables(): `Vec<AccountId32>`
- **interface**: `api.query.collatorSelection.invulnerables`
- **summary**:    The invulnerable, permissioned collators. This list must be sorted. 
 
### lastAuthoredBlock(`AccountId32`): `u32`
- **interface**: `api.query.collatorSelection.lastAuthoredBlock`
- **summary**:    Last block authored by collator. 

___


## convictionVoting
 
### classLocksFor(`AccountId32`): `Vec<(u16,u128)>`
- **interface**: `api.query.convictionVoting.classLocksFor`
- **summary**:    The voting classes which have a non-zero lock requirement and the lock amounts which they  require. The actual amount locked on behalf of this pallet should always be the maximum of  this list. 
 
### votingFor(`AccountId32, u16`): `PalletConvictionVotingVoteVoting`
- **interface**: `api.query.convictionVoting.votingFor`
- **summary**:    All voting for a particular voter in a particular voting class. We store the balance for the  number of votes that we have recorded. 

___


## delegatedStaking
 
### agents(`AccountId32`): `Option<PalletDelegatedStakingAgentLedger>`
- **interface**: `api.query.delegatedStaking.agents`
- **summary**:    Map of `Agent` to their `Ledger`. 
 
### counterForAgents(): `u32`
- **interface**: `api.query.delegatedStaking.counterForAgents`
- **summary**:    Counter for the related counted storage map 
 
### counterForDelegators(): `u32`
- **interface**: `api.query.delegatedStaking.counterForDelegators`
- **summary**:    Counter for the related counted storage map 
 
### delegators(`AccountId32`): `Option<PalletDelegatedStakingDelegation>`
- **interface**: `api.query.delegatedStaking.delegators`
- **summary**:    Map of Delegators to their `Delegation`. 

   Implementation note: We are not using a double map with `delegator` and `agent` account  as keys since we want to restrict delegators to delegate only to one account at a time. 

___


## foreignAssets
 
### account(`StagingXcmV5Location, AccountId32`): `Option<PalletAssetsAssetAccount>`
- **interface**: `api.query.foreignAssets.account`
- **summary**:    The holdings of a specific account for a specific asset. 
 
### approvals(`StagingXcmV5Location, AccountId32, AccountId32`): `Option<PalletAssetsApproval>`
- **interface**: `api.query.foreignAssets.approvals`
- **summary**:    Approved balance transfers. First balance is the amount approved for transfer. Second  is the amount of `T::Currency` reserved for storing this.  First key is the asset ID, second key is the owner and third key is the delegate. 
 
### asset(`StagingXcmV5Location`): `Option<PalletAssetsAssetDetails>`
- **interface**: `api.query.foreignAssets.asset`
- **summary**:    Details of an asset. 
 
### metadata(`StagingXcmV5Location`): `{"deposit":"u128","name":"Bytes","symbol":"Bytes","decimals":"u8","isFrozen":"bool"}`
- **interface**: `api.query.foreignAssets.metadata`
- **summary**:    Metadata of an asset. 
 
### nextAssetId(): `Option<StagingXcmV5Location>`
- **interface**: `api.query.foreignAssets.nextAssetId`
- **summary**:    The asset ID enforced for the next asset creation, if any present. Otherwise, this storage  item has no effect. 

   This can be useful for setting up constraints for IDs of the new assets. For example, by  providing an initial [`NextAssetId`] and using the [`crate::AutoIncAssetId`] callback, an  auto-increment model can be applied to all new asset IDs. 

   The initial next asset ID can be set using the [`GenesisConfig`] or the  [SetNextAssetId](`migration::next_asset_id::SetNextAssetId`) migration. 

___


## indices
 
### accounts(`u32`): `Option<(AccountId32,u128,bool)>`
- **interface**: `api.query.indices.accounts`
- **summary**:    The lookup from index to account. 

___


## messageQueue
 
### bookStateFor(`CumulusPrimitivesCoreAggregateMessageOrigin`): `PalletMessageQueueBookState`
- **interface**: `api.query.messageQueue.bookStateFor`
- **summary**:    The index of the first and last (non-empty) pages. 
 
### pages(`CumulusPrimitivesCoreAggregateMessageOrigin, u32`): `Option<PalletMessageQueuePage>`
- **interface**: `api.query.messageQueue.pages`
- **summary**:    The map of page indices to pages. 
 
### serviceHead(): `Option<CumulusPrimitivesCoreAggregateMessageOrigin>`
- **interface**: `api.query.messageQueue.serviceHead`
- **summary**:    The origin at which we should begin servicing. 

___


## multiBlockElection
 
### currentPhase(): `PalletElectionProviderMultiBlockPhase`
- **interface**: `api.query.multiBlockElection.currentPhase`
- **summary**:    Current phase. 
 
### desiredTargets(`u32`): `Option<u32>`
- **interface**: `api.query.multiBlockElection.desiredTargets`
- **summary**:    Desired number of targets to elect for this round. 
 
### pagedTargetSnapshot(`u32, u32`): `Option<Vec<AccountId32>>`
- **interface**: `api.query.multiBlockElection.pagedTargetSnapshot`
- **summary**:    Paginated target snapshot. 

   For the time being, since we assume one pages of targets, at most ONE key will exist. 
 
### pagedTargetSnapshotHash(`u32, u32`): `Option<H256>`
- **interface**: `api.query.multiBlockElection.pagedTargetSnapshotHash`
- **summary**:    Same as [`PagedTargetSnapshot`], but it will store the hash of the snapshot. 

   The hash is generated using [`frame_system::Config::Hashing`]. 
 
### pagedVoterSnapshot(`u32, u32`): `Option<Vec<(AccountId32,u64,Vec<AccountId32>)>>`
- **interface**: `api.query.multiBlockElection.pagedVoterSnapshot`
- **summary**:    Paginated voter snapshot. At most [`T::Pages`] keys will exist. 
 
### pagedVoterSnapshotHash(`u32, u32`): `Option<H256>`
- **interface**: `api.query.multiBlockElection.pagedVoterSnapshotHash`
- **summary**:    Same as [`PagedVoterSnapshot`], but it will store the hash of the snapshot. 

   The hash is generated using [`frame_system::Config::Hashing`]. 
 
### round(): `u32`
- **interface**: `api.query.multiBlockElection.round`
- **summary**:    Internal counter for the number of rounds. 

   This is useful for de-duplication of transactions submitted to the pool, and general  diagnostics of the pallet. 

   This is merely incremented once per every time that an upstream `elect` is called. 

___


## multiBlockElectionSigned
 
### invulnerables(): `Vec<AccountId32>`
- **interface**: `api.query.multiBlockElectionSigned.invulnerables`
- **summary**:    Accounts whitelisted by governance to always submit their solutions. 

   They are different in that: 

   * They always pay a fixed deposit for submission, specified by  [`Config::InvulnerableDeposit`]. They pay no page deposit. 

  * If _ejected_ by better solution from [`SortedScores`], they will get their full deposit back. 

  * They always get their tx-fee back even if they are _discarded_.
 
### sortedScores(`u32`): `Vec<(AccountId32,SpNposElectionsElectionScore)>`
- **interface**: `api.query.multiBlockElectionSigned.sortedScores`
 
### submissionMetadataStorage(`u32, AccountId32`): `Option<PalletElectionProviderMultiBlockSignedSubmissionMetadata>`
- **interface**: `api.query.multiBlockElectionSigned.submissionMetadataStorage`
- **summary**:    Map from account to the metadata of their submission. 

   invariant: for any Key1 of type `AccountId` in [`Submissions`], this storage map also has a  value. 
 
### submissionStorage(`u32, AccountId32, u32`): `Option<AssetHubKusamaRuntimeStakingNposCompactSolution24>`
- **interface**: `api.query.multiBlockElectionSigned.submissionStorage`
- **summary**:    Triple map from (round, account, page) to a solution page. 

___


## multiBlockElectionVerifier
 
### minimumScore(): `Option<SpNposElectionsElectionScore>`
- **interface**: `api.query.multiBlockElectionVerifier.minimumScore`
- **summary**:    The minimum score that each solution must attain in order to be considered feasible. 
 
### queuedSolutionBackings(`u32, u32`): `Option<Vec<(AccountId32,PalletElectionProviderMultiBlockVerifierImplsPartialBackings)>>`
- **interface**: `api.query.multiBlockElectionVerifier.queuedSolutionBackings`
- **summary**:    The `(amount, count)` of backings, divided per page. 

   This is stored because in the last block of verification we need them to compute the score,  and check `MaxBackersPerWinnerFinal`. 

   This can only ever live for the invalid variant of the solution. Once it is valid, we don't  need this information anymore; the score is already computed once in  [`QueuedSolutionScore`], and the backing counts are checked. 
 
### queuedSolutionScore(`u32`): `Option<SpNposElectionsElectionScore>`
- **interface**: `api.query.multiBlockElectionVerifier.queuedSolutionScore`
- **summary**:    The score of the valid variant of [`QueuedSolution`]. 

   This only ever lives for the `valid` variant. 
 
### queuedSolutionX(`u32, u32`): `Option<FrameElectionProviderSupportBoundedSupports>`
- **interface**: `api.query.multiBlockElectionVerifier.queuedSolutionX`
- **summary**:    The `X` variant of the current queued solution. Might be the valid one or not. 

   The two variants of this storage item is to avoid the need of copying. Recall that once a  `VerifyingSolution` is being processed, it needs to write its partial supports *somewhere*.  Writing theses supports on top of a *good* queued supports is wrong, since we might bail.  Writing them to a bugger and copying at the ned is slightly better, but expensive. This flag  system is best of both worlds. 
 
### queuedSolutionY(`u32, u32`): `Option<FrameElectionProviderSupportBoundedSupports>`
- **interface**: `api.query.multiBlockElectionVerifier.queuedSolutionY`
- **summary**:    The `Y` variant of the current queued solution. Might be the valid one or not. 
 
### queuedValidVariant(`u32`): `PalletElectionProviderMultiBlockVerifierImplsValidSolution`
- **interface**: `api.query.multiBlockElectionVerifier.queuedValidVariant`
- **summary**:    Pointer to the variant of [`QueuedSolutionX`] or [`QueuedSolutionY`] that is currently  valid. 
 
### statusStorage(): `PalletElectionProviderMultiBlockVerifierImplsStatus`
- **interface**: `api.query.multiBlockElectionVerifier.statusStorage`
- **summary**:    Storage item for [`Status`]. 

___


## multiBlockMigrations
 
### cursor(): `Option<PalletMigrationsMigrationCursor>`
- **interface**: `api.query.multiBlockMigrations.cursor`
- **summary**:    The currently active migration to run and its cursor. 

   `None` indicates that no migration is running. 
 
### historic(`Bytes`): `Option<Null>`
- **interface**: `api.query.multiBlockMigrations.historic`
- **summary**:    Set of all successfully executed migrations. 

   This is used as blacklist, to not re-execute migrations that have not been removed from the  codebase yet. Governance can regularly clear this out via `clear_historic`. 

___


## multisig
 
### multisigs(`AccountId32, [u8;32]`): `Option<PalletMultisigMultisig>`
- **interface**: `api.query.multisig.multisigs`
- **summary**:    The set of open multisig operations. 

___


## nftFractionalization
 
### nftToAsset(`(u32,u32)`): `Option<PalletNftFractionalizationDetails>`
- **interface**: `api.query.nftFractionalization.nftToAsset`
- **summary**:    Keeps track of the corresponding NFT ID, asset ID and amount minted. 

___


## nfts
 
### account(`AccountId32, u32, u32`): `Option<Null>`
- **interface**: `api.query.nfts.account`
- **summary**:    The items held by any given account; set out this way so that items owned by a single  account can be enumerated. 
 
### attribute(`u32, Option<u32>, PalletNftsAttributeNamespace, Bytes`): `Option<(Bytes,PalletNftsAttributeDeposit)>`
- **interface**: `api.query.nfts.attribute`
- **summary**:    Attributes of a collection. 
 
### collection(`u32`): `Option<PalletNftsCollectionDetails>`
- **interface**: `api.query.nfts.collection`
- **summary**:    Details of a collection. 
 
### collectionAccount(`AccountId32, u32`): `Option<Null>`
- **interface**: `api.query.nfts.collectionAccount`
- **summary**:    The collections owned by any given account; set out this way so that collections owned by  a single account can be enumerated. 
 
### collectionConfigOf(`u32`): `Option<PalletNftsCollectionConfig>`
- **interface**: `api.query.nfts.collectionConfigOf`
- **summary**:    Config of a collection. 
 
### collectionMetadataOf(`u32`): `Option<PalletNftsCollectionMetadata>`
- **interface**: `api.query.nfts.collectionMetadataOf`
- **summary**:    Metadata of a collection. 
 
### collectionRoleOf(`u32, AccountId32`): `Option<u8>`
- **interface**: `api.query.nfts.collectionRoleOf`
- **summary**:    The items in existence and their ownership details.  Stores collection roles as per account. 
 
### item(`u32, u32`): `Option<PalletNftsItemDetails>`
- **interface**: `api.query.nfts.item`
- **summary**:    The items in existence and their ownership details. 
 
### itemAttributesApprovalsOf(`u32, u32`): `BTreeSet<AccountId32>`
- **interface**: `api.query.nfts.itemAttributesApprovalsOf`
- **summary**:    Item attribute approvals. 
 
### itemConfigOf(`u32, u32`): `Option<PalletNftsItemConfig>`
- **interface**: `api.query.nfts.itemConfigOf`
- **summary**:    Config of an item. 
 
### itemMetadataOf(`u32, u32`): `Option<PalletNftsItemMetadata>`
- **interface**: `api.query.nfts.itemMetadataOf`
- **summary**:    Metadata of an item. 
 
### itemPriceOf(`u32, u32`): `Option<(u128,Option<AccountId32>)>`
- **interface**: `api.query.nfts.itemPriceOf`
- **summary**:    A price of an item. 
 
### nextCollectionId(): `Option<u32>`
- **interface**: `api.query.nfts.nextCollectionId`
- **summary**:    Stores the `CollectionId` that is going to be used for the next collection.  This gets incremented whenever a new collection is created. 
 
### ownershipAcceptance(`AccountId32`): `Option<u32>`
- **interface**: `api.query.nfts.ownershipAcceptance`
- **summary**:    The collection, if any, of which an account is willing to take ownership. 
 
### pendingSwapOf(`u32, u32`): `Option<PalletNftsPendingSwap>`
- **interface**: `api.query.nfts.pendingSwapOf`
- **summary**:    Handles all the pending swaps. 

___


## nominationPools
 
### bondedPools(`u32`): `Option<PalletNominationPoolsBondedPoolInner>`
- **interface**: `api.query.nominationPools.bondedPools`
- **summary**:    Storage for bonded pools. 
 
### claimPermissions(`AccountId32`): `PalletNominationPoolsClaimPermission`
- **interface**: `api.query.nominationPools.claimPermissions`
- **summary**:    Map from a pool member account to their opted claim permission. 
 
### counterForBondedPools(): `u32`
- **interface**: `api.query.nominationPools.counterForBondedPools`
- **summary**:    Counter for the related counted storage map 
 
### counterForMetadata(): `u32`
- **interface**: `api.query.nominationPools.counterForMetadata`
- **summary**:    Counter for the related counted storage map 
 
### counterForPoolMembers(): `u32`
- **interface**: `api.query.nominationPools.counterForPoolMembers`
- **summary**:    Counter for the related counted storage map 
 
### counterForReversePoolIdLookup(): `u32`
- **interface**: `api.query.nominationPools.counterForReversePoolIdLookup`
- **summary**:    Counter for the related counted storage map 
 
### counterForRewardPools(): `u32`
- **interface**: `api.query.nominationPools.counterForRewardPools`
- **summary**:    Counter for the related counted storage map 
 
### counterForSubPoolsStorage(): `u32`
- **interface**: `api.query.nominationPools.counterForSubPoolsStorage`
- **summary**:    Counter for the related counted storage map 
 
### globalMaxCommission(): `Option<Perbill>`
- **interface**: `api.query.nominationPools.globalMaxCommission`
- **summary**:    The maximum commission that can be charged by a pool. Used on commission payouts to bound  pool commissions that are > `GlobalMaxCommission`, necessary if a future  `GlobalMaxCommission` is lower than some current pool commissions. 
 
### lastPoolId(): `u32`
- **interface**: `api.query.nominationPools.lastPoolId`
- **summary**:    Ever increasing number of all pools created so far. 
 
### maxPoolMembers(): `Option<u32>`
- **interface**: `api.query.nominationPools.maxPoolMembers`
- **summary**:    Maximum number of members that can exist in the system. If `None`, then the count  members are not bound on a system wide basis. 
 
### maxPoolMembersPerPool(): `Option<u32>`
- **interface**: `api.query.nominationPools.maxPoolMembersPerPool`
- **summary**:    Maximum number of members that may belong to pool. If `None`, then the count of  members is not bound on a per pool basis. 
 
### maxPools(): `Option<u32>`
- **interface**: `api.query.nominationPools.maxPools`
- **summary**:    Maximum number of nomination pools that can exist. If `None`, then an unbounded number of  pools can exist. 
 
### metadata(`u32`): `Bytes`
- **interface**: `api.query.nominationPools.metadata`
- **summary**:    Metadata for the pool. 
 
### minCreateBond(): `u128`
- **interface**: `api.query.nominationPools.minCreateBond`
- **summary**:    Minimum bond required to create a pool. 

   This is the amount that the depositor must put as their initial stake in the pool, as an  indication of "skin in the game". 

   This is the value that will always exist in the staking ledger of the pool bonded account  while all other accounts leave. 
 
### minJoinBond(): `u128`
- **interface**: `api.query.nominationPools.minJoinBond`
- **summary**:    Minimum amount to bond to join a pool. 
 
### poolMembers(`AccountId32`): `Option<PalletNominationPoolsPoolMember>`
- **interface**: `api.query.nominationPools.poolMembers`
- **summary**:    Active members. 

   TWOX-NOTE: SAFE since `AccountId` is a secure hash. 
 
### reversePoolIdLookup(`AccountId32`): `Option<u32>`
- **interface**: `api.query.nominationPools.reversePoolIdLookup`
- **summary**:    A reverse lookup from the pool's account id to its id. 

   This is only used for slashing and on automatic withdraw update. In all other instances, the  pool id is used, and the accounts are deterministically derived from it. 
 
### rewardPools(`u32`): `Option<PalletNominationPoolsRewardPool>`
- **interface**: `api.query.nominationPools.rewardPools`
- **summary**:    Reward pools. This is where there rewards for each pool accumulate. When a members payout is  claimed, the balance comes out of the reward pool. Keyed by the bonded pools account. 
 
### subPoolsStorage(`u32`): `Option<PalletNominationPoolsSubPools>`
- **interface**: `api.query.nominationPools.subPoolsStorage`
- **summary**:    Groups of unbonding pools. Each group of unbonding pools belongs to a  bonded pool, hence the name sub-pools. Keyed by the bonded pools account. 
 
### totalValueLocked(): `u128`
- **interface**: `api.query.nominationPools.totalValueLocked`
- **summary**:    The sum of funds across all pools. 

   This might be lower but never higher than the sum of `total_balance` of all [`PoolMembers`]  because calling `pool_withdraw_unbonded` might decrease the total stake of the pool's  `bonded_account` without adjusting the pallet-internal `UnbondingPool`'s. 

___


## parachainInfo
 
### parachainId(): `u32`
- **interface**: `api.query.parachainInfo.parachainId`

___


## parachainSystem
 
### aggregatedUnincludedSegment(): `Option<CumulusPalletParachainSystemUnincludedSegmentSegmentTracker>`
- **interface**: `api.query.parachainSystem.aggregatedUnincludedSegment`
- **summary**:    Storage field that keeps track of bandwidth used by the unincluded segment along with the  latest HRMP watermark. Used for limiting the acceptance of new blocks with  respect to relay chain constraints. 
 
### announcedHrmpMessagesPerCandidate(): `u32`
- **interface**: `api.query.parachainSystem.announcedHrmpMessagesPerCandidate`
- **summary**:    The number of HRMP messages we observed in `on_initialize` and thus used that number for  announcing the weight of `on_initialize` and `on_finalize`. 
 
### customValidationHeadData(): `Option<Bytes>`
- **interface**: `api.query.parachainSystem.customValidationHeadData`
- **summary**:    A custom head data that should be returned as result of `validate_block`. 

   See `Pallet::set_custom_validation_head_data` for more information. 
 
### didSetValidationCode(): `bool`
- **interface**: `api.query.parachainSystem.didSetValidationCode`
- **summary**:    Were the validation data set to notify the relay chain? 
 
### hostConfiguration(): `Option<PolkadotPrimitivesV8AbridgedHostConfiguration>`
- **interface**: `api.query.parachainSystem.hostConfiguration`
- **summary**:    The parachain host configuration that was obtained from the relay parent. 

   This field is meant to be updated each block with the validation data inherent. Therefore,  before processing of the inherent, e.g. in `on_initialize` this data may be stale. 

   This data is also absent from the genesis. 
 
### hrmpOutboundMessages(): `Vec<PolkadotCorePrimitivesOutboundHrmpMessage>`
- **interface**: `api.query.parachainSystem.hrmpOutboundMessages`
- **summary**:    HRMP messages that were sent in a block. 

   This will be cleared in `on_initialize` of each new block. 
 
### hrmpWatermark(): `u32`
- **interface**: `api.query.parachainSystem.hrmpWatermark`
- **summary**:    HRMP watermark that was set in a block. 
 
### lastDmqMqcHead(): `H256`
- **interface**: `api.query.parachainSystem.lastDmqMqcHead`
- **summary**:    The last downward message queue chain head we have observed. 

   This value is loaded before and saved after processing inbound downward messages carried  by the system inherent. 
 
### lastHrmpMqcHeads(): `BTreeMap<u32, H256>`
- **interface**: `api.query.parachainSystem.lastHrmpMqcHeads`
- **summary**:    The message queue chain heads we have observed per each channel incoming channel. 

   This value is loaded before and saved after processing inbound downward messages carried  by the system inherent. 
 
### lastProcessedDownwardMessage(): `Option<CumulusPalletParachainSystemParachainInherentInboundMessageId>`
- **interface**: `api.query.parachainSystem.lastProcessedDownwardMessage`
- **summary**:    The last processed downward message. 

   We need to keep track of this to filter the messages that have been already processed. 
 
### lastProcessedHrmpMessage(): `Option<CumulusPalletParachainSystemParachainInherentInboundMessageId>`
- **interface**: `api.query.parachainSystem.lastProcessedHrmpMessage`
- **summary**:    The last processed HRMP message. 

   We need to keep track of this to filter the messages that have been already processed. 
 
### lastRelayChainBlockNumber(): `u32`
- **interface**: `api.query.parachainSystem.lastRelayChainBlockNumber`
- **summary**:    The relay chain block number associated with the last parachain block. 

   This is updated in `on_finalize`. 
 
### newValidationCode(): `Option<Bytes>`
- **interface**: `api.query.parachainSystem.newValidationCode`
- **summary**:    Validation code that is set by the parachain and is to be communicated to collator and  consequently the relay-chain. 

   This will be cleared in `on_initialize` of each new block if no other pallet already set  the value. 
 
### pendingUpwardMessages(): `Vec<Bytes>`
- **interface**: `api.query.parachainSystem.pendingUpwardMessages`
- **summary**:    Upward messages that are still pending and not yet send to the relay chain. 
 
### pendingValidationCode(): `Bytes`
- **interface**: `api.query.parachainSystem.pendingValidationCode`
- **summary**:    In case of a scheduled upgrade, this storage field contains the validation code to be  applied. 

   As soon as the relay chain gives us the go-ahead signal, we will overwrite the  [`:code`][sp_core::storage::well_known_keys::CODE] which will result the next block process  with the new validation code. This concludes the upgrade process. 
 
### processedDownwardMessages(): `u32`
- **interface**: `api.query.parachainSystem.processedDownwardMessages`
- **summary**:    Number of downward messages processed in a block. 

   This will be cleared in `on_initialize` of each new block. 
 
### relayStateProof(): `Option<SpTrieStorageProof>`
- **interface**: `api.query.parachainSystem.relayStateProof`
- **summary**:    The state proof for the last relay parent block. 

   This field is meant to be updated each block with the validation data inherent. Therefore,  before processing of the inherent, e.g. in `on_initialize` this data may be stale. 

   This data is also absent from the genesis. 
 
### relevantMessagingState(): `Option<CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot>`
- **interface**: `api.query.parachainSystem.relevantMessagingState`
- **summary**:    The snapshot of some state related to messaging relevant to the current parachain as per  the relay parent. 

   This field is meant to be updated each block with the validation data inherent. Therefore,  before processing of the inherent, e.g. in `on_initialize` this data may be stale. 

   This data is also absent from the genesis. 
 
### reservedDmpWeightOverride(): `Option<SpWeightsWeightV2Weight>`
- **interface**: `api.query.parachainSystem.reservedDmpWeightOverride`
- **summary**:    The weight we reserve at the beginning of the block for processing DMP messages. This  overrides the amount set in the Config trait. 
 
### reservedXcmpWeightOverride(): `Option<SpWeightsWeightV2Weight>`
- **interface**: `api.query.parachainSystem.reservedXcmpWeightOverride`
- **summary**:    The weight we reserve at the beginning of the block for processing XCMP messages. This  overrides the amount set in the Config trait. 
 
### unincludedSegment(): `Vec<CumulusPalletParachainSystemUnincludedSegmentAncestor>`
- **interface**: `api.query.parachainSystem.unincludedSegment`
- **summary**:    Latest included block descendants the runtime accepted. In other words, these are  ancestors of the currently executing block which have not been included in the observed  relay-chain state. 

   The segment length is limited by the capacity returned from the [`ConsensusHook`] configured  in the pallet. 
 
### upgradeGoAhead(): `Option<PolkadotPrimitivesV8UpgradeGoAhead>`
- **interface**: `api.query.parachainSystem.upgradeGoAhead`
- **summary**:    Optional upgrade go-ahead signal from the relay-chain. 

   This storage item is a mirror of the corresponding value for the current parachain from the  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is  set after the inherent. 
 
### upgradeRestrictionSignal(): `Option<PolkadotPrimitivesV8UpgradeRestriction>`
- **interface**: `api.query.parachainSystem.upgradeRestrictionSignal`
- **summary**:    An option which indicates if the relay-chain restricts signalling a validation code upgrade.  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced  candidate will be invalid. 

   This storage item is a mirror of the corresponding value for the current parachain from the  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is  set after the inherent. 
 
### upwardDeliveryFeeFactor(): `u128`
- **interface**: `api.query.parachainSystem.upwardDeliveryFeeFactor`
- **summary**:    The factor to multiply the base delivery fee by for UMP. 
 
### upwardMessages(): `Vec<Bytes>`
- **interface**: `api.query.parachainSystem.upwardMessages`
- **summary**:    Upward messages that were sent in a block. 

   This will be cleared in `on_initialize` of each new block. 
 
### validationData(): `Option<PolkadotPrimitivesV8PersistedValidationData>`
- **interface**: `api.query.parachainSystem.validationData`
- **summary**:    The [`PersistedValidationData`] set for this block.  This value is expected to be set only once per block and it's never stored  in the trie. 

___


## parameters
 
### parameters(`AssetHubKusamaRuntimeRuntimeParametersKey`): `Option<AssetHubKusamaRuntimeRuntimeParametersValue>`
- **interface**: `api.query.parameters.parameters`
- **summary**:    Stored parameters. 

___


## polkadotXcm
 
### assetTraps(`H256`): `u32`
- **interface**: `api.query.polkadotXcm.assetTraps`
- **summary**:    The existing asset traps. 

   Key is the blake2 256 hash of (origin, versioned `Assets`) pair. Value is the number of  times this pair has been trapped (usually just 1 if it exists at all). 
 
### authorizedAliases(`XcmVersionedLocation`): `Option<PalletXcmAuthorizedAliasesEntry>`
- **interface**: `api.query.polkadotXcm.authorizedAliases`
- **summary**:    Map of authorized aliasers of local origins. Each local location can authorize a list of  other locations to alias into it. Each aliaser is only valid until its inner `expiry`  block number. 
 
### currentMigration(): `Option<PalletXcmVersionMigrationStage>`
- **interface**: `api.query.polkadotXcm.currentMigration`
- **summary**:    The current migration's stage, if any. 
 
### lockedFungibles(`AccountId32`): `Option<Vec<(u128,XcmVersionedLocation)>>`
- **interface**: `api.query.polkadotXcm.lockedFungibles`
- **summary**:    Fungible assets which we know are locked on this chain. 
 
### queries(`u64`): `Option<PalletXcmQueryStatus>`
- **interface**: `api.query.polkadotXcm.queries`
- **summary**:    The ongoing queries. 
 
### queryCounter(): `u64`
- **interface**: `api.query.polkadotXcm.queryCounter`
- **summary**:    The latest available query index. 
 
### recordedXcm(): `Option<StagingXcmV5Xcm>`
- **interface**: `api.query.polkadotXcm.recordedXcm`
- **summary**:    If [`ShouldRecordXcm`] is set to true, then the last XCM program executed locally  will be stored here.  Runtime APIs can fetch the XCM that was executed by accessing this value. 

   Only relevant if this pallet is being used as the [`xcm_executor::traits::RecordXcm`]  implementation in the XCM executor configuration. 
 
### remoteLockedFungibles(`u32, AccountId32, XcmVersionedAssetId`): `Option<PalletXcmRemoteLockedFungibleRecord>`
- **interface**: `api.query.polkadotXcm.remoteLockedFungibles`
- **summary**:    Fungible assets which we know are locked on a remote chain. 
 
### safeXcmVersion(): `Option<u32>`
- **interface**: `api.query.polkadotXcm.safeXcmVersion`
- **summary**:    Default version to encode XCM when latest version of destination is unknown. If `None`,  then the destinations whose XCM version is unknown are considered unreachable. 
 
### shouldRecordXcm(): `bool`
- **interface**: `api.query.polkadotXcm.shouldRecordXcm`
- **summary**:    Whether or not incoming XCMs (both executed locally and received) should be recorded.  Only one XCM program will be recorded at a time.  This is meant to be used in runtime APIs, and it's advised it stays false  for all other use cases, so as to not degrade regular performance. 

   Only relevant if this pallet is being used as the [`xcm_executor::traits::RecordXcm`]  implementation in the XCM executor configuration. 
 
### supportedVersion(`u32, XcmVersionedLocation`): `Option<u32>`
- **interface**: `api.query.polkadotXcm.supportedVersion`
- **summary**:    The Latest versions that we know various locations support. 
 
### versionDiscoveryQueue(): `Vec<(XcmVersionedLocation,u32)>`
- **interface**: `api.query.polkadotXcm.versionDiscoveryQueue`
- **summary**:    Destinations whose latest XCM version we would like to know. Duplicates not allowed, and  the `u32` counter is the number of times that a send to the destination has been attempted,  which is used as a prioritization. 
 
### versionNotifiers(`u32, XcmVersionedLocation`): `Option<u64>`
- **interface**: `api.query.polkadotXcm.versionNotifiers`
- **summary**:    All locations that we have requested version notifications from. 
 
### versionNotifyTargets(`u32, XcmVersionedLocation`): `Option<(u64,SpWeightsWeightV2Weight,u32)>`
- **interface**: `api.query.polkadotXcm.versionNotifyTargets`
- **summary**:    The target locations that are subscribed to our version changes, as well as the most recent  of our versions we informed them of. 
 
### xcmExecutionSuspended(): `bool`
- **interface**: `api.query.polkadotXcm.xcmExecutionSuspended`
- **summary**:    Global suspension state of the XCM executor. 

___


## poolAssets
 
### account(`u32, AccountId32`): `Option<PalletAssetsAssetAccount>`
- **interface**: `api.query.poolAssets.account`
- **summary**:    The holdings of a specific account for a specific asset. 
 
### approvals(`u32, AccountId32, AccountId32`): `Option<PalletAssetsApproval>`
- **interface**: `api.query.poolAssets.approvals`
- **summary**:    Approved balance transfers. First balance is the amount approved for transfer. Second  is the amount of `T::Currency` reserved for storing this.  First key is the asset ID, second key is the owner and third key is the delegate. 
 
### asset(`u32`): `Option<PalletAssetsAssetDetails>`
- **interface**: `api.query.poolAssets.asset`
- **summary**:    Details of an asset. 
 
### metadata(`u32`): `PalletAssetsAssetMetadata`
- **interface**: `api.query.poolAssets.metadata`
- **summary**:    Metadata of an asset. 
 
### nextAssetId(): `Option<u32>`
- **interface**: `api.query.poolAssets.nextAssetId`
- **summary**:    The asset ID enforced for the next asset creation, if any present. Otherwise, this storage  item has no effect. 

   This can be useful for setting up constraints for IDs of the new assets. For example, by  providing an initial [`NextAssetId`] and using the [`crate::AutoIncAssetId`] callback, an  auto-increment model can be applied to all new asset IDs. 

   The initial next asset ID can be set using the [`GenesisConfig`] or the  [SetNextAssetId](`migration::next_asset_id::SetNextAssetId`) migration. 

___


## preimage
 
### preimageFor(`(H256,u32)`): `Option<Bytes>`
- **interface**: `api.query.preimage.preimageFor`
 
### requestStatusFor(`H256`): `Option<PalletPreimageRequestStatus>`
- **interface**: `api.query.preimage.requestStatusFor`
- **summary**:    The request status of a given hash. 
 
### statusFor(`H256`): `Option<PalletPreimageOldRequestStatus>`
- **interface**: `api.query.preimage.statusFor`
- **summary**:    The request status of a given hash. 

___


## proxy
 
### announcements(`AccountId32`): `(Vec<PalletProxyAnnouncement>,u128)`
- **interface**: `api.query.proxy.announcements`
- **summary**:    The announcements made by the proxy (key). 
 
### proxies(`AccountId32`): `(Vec<PalletProxyProxyDefinitionAssetHubKusamaRuntimeProxyType>,u128)`
- **interface**: `api.query.proxy.proxies`
- **summary**:    The set of account proxies. Maps the account which has delegated to the accounts  which are being delegated to, together with the amount held on deposit. 

___


## recovery
 
### activeRecoveries(`AccountId32, AccountId32`): `Option<PalletRecoveryActiveRecovery>`
- **interface**: `api.query.recovery.activeRecoveries`
- **summary**:    Active recovery attempts. 

   First account is the account to be recovered, and the second account  is the user trying to recover the account. 
 
### proxy(`AccountId32`): `Option<AccountId32>`
- **interface**: `api.query.recovery.proxy`
- **summary**:    The list of allowed proxy accounts. 

   Map from the user who can access it to the recovered account. 
 
### recoverable(`AccountId32`): `Option<PalletRecoveryRecoveryConfig>`
- **interface**: `api.query.recovery.recoverable`
- **summary**:    The set of recoverable accounts and their recovery configuration. 

___


## referenda
 
### decidingCount(`u16`): `u32`
- **interface**: `api.query.referenda.decidingCount`
- **summary**:    The number of referenda being decided currently. 
 
### metadataOf(`u32`): `Option<H256>`
- **interface**: `api.query.referenda.metadataOf`
- **summary**:    The metadata is a general information concerning the referendum.  The `Hash` refers to the preimage of the `Preimages` provider which can be a JSON  dump or IPFS hash of a JSON file. 

   Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)  large preimages. 
 
### referendumCount(): `u32`
- **interface**: `api.query.referenda.referendumCount`
- **summary**:    The next free referendum index, aka the number of referenda started so far. 
 
### referendumInfoFor(`u32`): `Option<PalletReferendaReferendumInfoOriginCaller>`
- **interface**: `api.query.referenda.referendumInfoFor`
- **summary**:    Information concerning any given referendum. 
 
### trackQueue(`u16`): `Vec<(u32,u128)>`
- **interface**: `api.query.referenda.trackQueue`
- **summary**:    The sorted list of referenda ready to be decided but not yet being decided, ordered by  conviction-weighted approvals. 

   This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`. 

___


## remoteProxyRelayChain
 
### blockToRoot(): `Vec<(u32,H256)>`
- **interface**: `api.query.remoteProxyRelayChain.blockToRoot`
- **summary**:    Stores the last [`Config::MaxStorageRootsToKeep`] block to storage root mappings of the  target chain. 

___


## revive
 
### accountInfoOf(`H160`): `Option<PalletReviveStorageAccountInfo>`
- **interface**: `api.query.revive.accountInfoOf`
- **summary**:    The data associated to a contract or externally owned account. 
 
### codeInfoOf(`H256`): `Option<PalletReviveVmCodeInfo>`
- **interface**: `api.query.revive.codeInfoOf`
- **summary**:    A mapping from a contract's code hash to its code info. 
 
### deletionQueue(`u32`): `Option<Bytes>`
- **interface**: `api.query.revive.deletionQueue`
- **summary**:    Evicted contracts that await child trie deletion. 

   Child trie deletion is a heavy operation depending on the amount of storage items  stored in said trie. Therefore this operation is performed lazily in `on_idle`. 
 
### deletionQueueCounter(): `PalletReviveStorageDeletionQueueManager`
- **interface**: `api.query.revive.deletionQueueCounter`
- **summary**:    A pair of monotonic counters used to track the latest contract marked for deletion  and the latest deleted contract in queue. 
 
### immutableDataOf(`H160`): `Option<Bytes>`
- **interface**: `api.query.revive.immutableDataOf`
- **summary**:    The immutable data associated with a given account. 
 
### originalAccount(`H160`): `Option<AccountId32>`
- **interface**: `api.query.revive.originalAccount`
- **summary**:    Map a Ethereum address to its original `AccountId32`. 

   When deriving a `H160` from an `AccountId32` we use a hash function. In order to  reconstruct the original account we need to store the reverse mapping here.  Register your `AccountId32` using [`Pallet::map_account`] in order to  use it with this pallet. 
 
### pristineCode(`H256`): `Option<Bytes>`
- **interface**: `api.query.revive.pristineCode`
- **summary**:    A mapping from a contract's code hash to its code. 

___


## scheduler
 
### agenda(`u32`): `Vec<Option<PalletSchedulerScheduled>>`
- **interface**: `api.query.scheduler.agenda`
- **summary**:    Items to be executed, indexed by the block number that they should be executed on. 
 
### incompleteSince(): `Option<u32>`
- **interface**: `api.query.scheduler.incompleteSince`
- **summary**:    Block number at which the agenda began incomplete execution. 
 
### lookup(`[u8;32]`): `Option<(u32,u32)>`
- **interface**: `api.query.scheduler.lookup`
- **summary**:    Lookup from a name to the block number and index of the task. 

   For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4  identities. 
 
### retries(`(u32,u32)`): `Option<PalletSchedulerRetryConfig>`
- **interface**: `api.query.scheduler.retries`
- **summary**:    Retry configurations for items to be executed, indexed by task address. 

___


## session
 
### currentIndex(): `u32`
- **interface**: `api.query.session.currentIndex`
- **summary**:    Current index of the session. 
 
### disabledValidators(): `Vec<(u32,Perbill)>`
- **interface**: `api.query.session.disabledValidators`
- **summary**:    Indices of disabled validators. 

   The vec is always kept sorted so that we can find whether a given validator is  disabled using binary search. It gets cleared when `on_session_ending` returns  a new set of identities. 
 
### keyOwner(`(SpCoreCryptoKeyTypeId,Bytes)`): `Option<AccountId32>`
- **interface**: `api.query.session.keyOwner`
- **summary**:    The owner of a key. The key is the `KeyTypeId` + the encoded key. 
 
### nextKeys(`AccountId32`): `Option<AssetHubKusamaRuntimeSessionKeys>`
- **interface**: `api.query.session.nextKeys`
- **summary**:    The next session keys for a validator. 
 
### queuedChanged(): `bool`
- **interface**: `api.query.session.queuedChanged`
- **summary**:    True if the underlying economic identities or weighting behind the validators  has changed in the queued validator set. 
 
### queuedKeys(): `Vec<(AccountId32,AssetHubKusamaRuntimeSessionKeys)>`
- **interface**: `api.query.session.queuedKeys`
- **summary**:    The queued keys for the next session. When the next session begins, these keys  will be used to determine the validator's session keys. 
 
### validators(): `Vec<AccountId32>`
- **interface**: `api.query.session.validators`
- **summary**:    The current set of validators. 

___


## society
 
### bids(): `Vec<PalletSocietyBid>`
- **interface**: `api.query.society.bids`
- **summary**:    The current bids, stored ordered by the value of the bid. 
 
### candidates(`AccountId32`): `Option<PalletSocietyCandidacy>`
- **interface**: `api.query.society.candidates`
 
### challengeRoundCount(): `u32`
- **interface**: `api.query.society.challengeRoundCount`
- **summary**:    The number of challenge rounds there have been. Used to identify stale DefenderVotes. 
 
### defenderVotes(`u32, AccountId32`): `Option<PalletSocietyVote>`
- **interface**: `api.query.society.defenderVotes`
- **summary**:    Votes for the defender, keyed by challenge round. 
 
### defending(): `Option<(AccountId32,AccountId32,PalletSocietyTally)>`
- **interface**: `api.query.society.defending`
- **summary**:    The defending member currently being challenged, along with a running tally of votes. 
 
### founder(): `Option<AccountId32>`
- **interface**: `api.query.society.founder`
- **summary**:    The first member. 
 
### head(): `Option<AccountId32>`
- **interface**: `api.query.society.head`
- **summary**:    The most primary from the most recently approved rank 0 members in the society. 
 
### memberByIndex(`u32`): `Option<AccountId32>`
- **interface**: `api.query.society.memberByIndex`
- **summary**:    The current items in `Members` keyed by their unique index. Keys are densely populated  `0..MemberCount` (does not include `MemberCount`). 
 
### memberCount(): `u32`
- **interface**: `api.query.society.memberCount`
- **summary**:    The number of items in `Members` currently. (Doesn't include `SuspendedMembers`.) 
 
### members(`AccountId32`): `Option<PalletSocietyMemberRecord>`
- **interface**: `api.query.society.members`
- **summary**:    The current members and their rank. Doesn't include `SuspendedMembers`. 
 
### nextChallengeAt(): `Option<u32>`
- **interface**: `api.query.society.nextChallengeAt`
- **summary**:    Next challenge rotation scheduled with [Config::BlockNumberProvider]. 
 
### nextHead(): `Option<PalletSocietyIntakeRecord>`
- **interface**: `api.query.society.nextHead`
- **summary**:    At the end of the claim period, this contains the most recently approved members (along with  their bid and round ID) who is from the most recent round with the lowest bid. They will  become the new `Head`. 
 
### nextIntakeAt(): `Option<u32>`
- **interface**: `api.query.society.nextIntakeAt`
- **summary**:    Next intake rotation scheduled with [Config::BlockNumberProvider]. 
 
### parameters(): `Option<PalletSocietyGroupParams>`
- **interface**: `api.query.society.parameters`
- **summary**:    The max number of members for the society at one time. 
 
### payouts(`AccountId32`): `PalletSocietyPayoutRecord`
- **interface**: `api.query.society.payouts`
- **summary**:    Information regarding rank-0 payouts, past and future. 
 
### pot(): `u128`
- **interface**: `api.query.society.pot`
- **summary**:    Amount of our account balance that is specifically for the next round's bid(s). 
 
### roundCount(): `u32`
- **interface**: `api.query.society.roundCount`
- **summary**:    The number of rounds which have passed. 
 
### rules(): `Option<H256>`
- **interface**: `api.query.society.rules`
- **summary**:    A hash of the rules of this society concerning membership. Can only be set once and  only by the founder. 
 
### skeptic(): `Option<AccountId32>`
- **interface**: `api.query.society.skeptic`
- **summary**:    The current skeptic. 
 
### suspendedMembers(`AccountId32`): `Option<PalletSocietyMemberRecord>`
- **interface**: `api.query.society.suspendedMembers`
- **summary**:    The set of suspended members, with their old membership record. 
 
### voteClearCursor(`AccountId32`): `Option<Bytes>`
- **interface**: `api.query.society.voteClearCursor`
- **summary**:    Clear-cursor for Vote, map from Candidate -> (Maybe) Cursor. 
 
### votes(`AccountId32, AccountId32`): `Option<PalletSocietyVote>`
- **interface**: `api.query.society.votes`
- **summary**:    Double map from Candidate -> Voter -> (Maybe) Vote. 

___


## staking
 
### activeEra(): `Option<PalletStakingAsyncActiveEraInfo>`
- **interface**: `api.query.staking.activeEra`
- **summary**:    The active era information, it holds index and start. 

   The active era is the era being currently rewarded. Validator set of this era must be  equal to what is RC's session pallet. 
 
### bonded(`AccountId32`): `Option<AccountId32>`
- **interface**: `api.query.staking.bonded`
- **summary**:    Map from all locked "stash" accounts to the controller account. 

   TWOX-NOTE: SAFE since `AccountId` is a secure hash. 
 
### bondedEras(): `Vec<(u32,u32)>`
- **interface**: `api.query.staking.bondedEras`
- **summary**:    A mapping from still-bonded eras to the first session index of that era. 

   Must contains information for eras for the range:  `[active_era - bounding_duration; active_era]` 
 
### canceledSlashPayout(): `u128`
- **interface**: `api.query.staking.canceledSlashPayout`
- **summary**:    The amount of currency given to reporters of a slash event which was  canceled by extraordinary circumstances (e.g. governance). 
 
### cancelledSlashes(`u32`): `Vec<(AccountId32,Perbill)>`
- **interface**: `api.query.staking.cancelledSlashes`
- **summary**:    Cancelled slashes by era and validator with maximum slash fraction to be cancelled. 

   When slashes are cancelled by governance, this stores the era and the validators  whose slashes should be cancelled, along with the maximum slash fraction that should  be cancelled for each validator. 
 
### chillThreshold(): `Option<Percent>`
- **interface**: `api.query.staking.chillThreshold`
- **summary**:    The threshold for when users can start calling `chill_other` for other validators /  nominators. The threshold is compared to the actual number of validators / nominators  (`CountFor*`) in the system compared to the configured max (`Max*Count`). 
 
### claimedRewards(`u32, AccountId32`): `Vec<u32>`
- **interface**: `api.query.staking.claimedRewards`
- **summary**:    History of claimed paged rewards by era and validator. 

   This is keyed by era and validator stash which maps to the set of page indexes which have  been claimed. 

   It is removed after [`Config::HistoryDepth`] eras. 
 
### counterForNominators(): `u32`
- **interface**: `api.query.staking.counterForNominators`
- **summary**:    Counter for the related counted storage map 
 
### counterForValidators(): `u32`
- **interface**: `api.query.staking.counterForValidators`
- **summary**:    Counter for the related counted storage map 
 
### counterForVirtualStakers(): `u32`
- **interface**: `api.query.staking.counterForVirtualStakers`
- **summary**:    Counter for the related counted storage map 
 
### currentEra(): `Option<u32>`
- **interface**: `api.query.staking.currentEra`
- **summary**:    The current planned era index. 

   This is the latest planned era, depending on how the Session pallet queues the validator  set, it might be active or not. 
 
### electableStashes(): `BTreeSet<AccountId32>`
- **interface**: `api.query.staking.electableStashes`
- **summary**:    A bounded list of the "electable" stashes that resulted from a successful election. 
 
### eraPruningState(`u32`): `Option<PalletStakingAsyncPalletPruningStep>`
- **interface**: `api.query.staking.eraPruningState`
- **summary**:    Tracks the current step of era pruning process for each era being lazily pruned. 
 
### erasRewardPoints(`u32`): `PalletStakingAsyncEraRewardPoints`
- **interface**: `api.query.staking.erasRewardPoints`
- **summary**:    Rewards for the last [`Config::HistoryDepth`] eras.  If reward hasn't been set or has been removed then 0 reward is returned. 
 
### erasStakersOverview(`u32, AccountId32`): `Option<SpStakingPagedExposureMetadata>`
- **interface**: `api.query.staking.erasStakersOverview`
- **summary**:    Summary of validator exposure at a given era. 

   This contains the total stake in support of the validator and their own stake. In addition,  it can also be used to get the number of nominators backing this validator and the number of  exposure pages they are divided into. The page count is useful to determine the number of  pages of rewards that needs to be claimed. 

   This is keyed first by the era index to allow bulk deletion and then the stash account.  Should only be accessed through `Eras`. 

   Is it removed after [`Config::HistoryDepth`] eras.  If stakers hasn't been set or has been removed then empty overview is returned. 
 
### erasStakersPaged(`u32, AccountId32, u32`): `Option<PalletStakingAsyncPalletBoundedExposurePage>`
- **interface**: `api.query.staking.erasStakersPaged`
- **summary**:    Paginated exposure of a validator at given era. 

   This is keyed first by the era index to allow bulk deletion, then stash account and finally  the page. Should only be accessed through `Eras`. 

   This is cleared after [`Config::HistoryDepth`] eras. 
 
### erasTotalStake(`u32`): `u128`
- **interface**: `api.query.staking.erasTotalStake`
- **summary**:    The total amount staked for the last [`Config::HistoryDepth`] eras.  If total hasn't been set or has been removed then 0 stake is returned. 
 
### erasValidatorPrefs(`u32, AccountId32`): `PalletStakingAsyncValidatorPrefs`
- **interface**: `api.query.staking.erasValidatorPrefs`
- **summary**:    Exposure of validator at era with the preferences of validators. 

   This is keyed first by the era index to allow bulk deletion and then the stash account. 

   Is it removed after [`Config::HistoryDepth`] eras. 
 
### erasValidatorReward(`u32`): `Option<u128>`
- **interface**: `api.query.staking.erasValidatorReward`
- **summary**:    The total validator era payout for the last [`Config::HistoryDepth`] eras. 

   Eras that haven't finished yet or has been removed doesn't have reward. 
 
### forceEra(): `PalletStakingAsyncForcing`
- **interface**: `api.query.staking.forceEra`
- **summary**:    Mode of era forcing. 
 
### invulnerables(): `Vec<AccountId32>`
- **interface**: `api.query.staking.invulnerables`
- **summary**:    Any validators that may never be slashed or forcibly kicked. It's a Vec since they're  easy to initialize and the performance hit is minimal (we expect no more than four  invulnerables) and restricted to testnets. 
 
### ledger(`AccountId32`): `Option<PalletStakingAsyncLedgerStakingLedger>`
- **interface**: `api.query.staking.ledger`
- **summary**:    Map from all (unlocked) "controller" accounts to the info regarding the staking. 

   Note: All the reads and mutations to this storage *MUST* be done through the methods exposed  by [`StakingLedger`] to ensure data and lock consistency. 
 
### maxNominatorsCount(): `Option<u32>`
- **interface**: `api.query.staking.maxNominatorsCount`
- **summary**:    The maximum nominator count before we stop allowing new validators to join. 

   When this value is not set, no limits are enforced. 
 
### maxStakedRewards(): `Option<Percent>`
- **interface**: `api.query.staking.maxStakedRewards`
- **summary**:    Maximum staked rewards, i.e. the percentage of the era inflation that  is used for stake rewards.  See [Era payout](./index.html#era-payout). 
 
### maxValidatorsCount(): `Option<u32>`
- **interface**: `api.query.staking.maxValidatorsCount`
- **summary**:    The maximum validator count before we stop allowing new validators to join. 

   When this value is not set, no limits are enforced. 
 
### minCommission(): `Perbill`
- **interface**: `api.query.staking.minCommission`
- **summary**:    The minimum amount of commission that validators can set. 

   If set to `0`, no limit exists. 
 
### minimumActiveStake(): `u128`
- **interface**: `api.query.staking.minimumActiveStake`
- **summary**:    The minimum active nominator stake of the last successful election. 
 
### minNominatorBond(): `u128`
- **interface**: `api.query.staking.minNominatorBond`
- **summary**:    The minimum active bond to become and maintain the role of a nominator. 
 
### minValidatorBond(): `u128`
- **interface**: `api.query.staking.minValidatorBond`
- **summary**:    The minimum active bond to become and maintain the role of a validator. 
 
### nextElectionPage(): `Option<u32>`
- **interface**: `api.query.staking.nextElectionPage`
- **summary**:    Keeps track of an ongoing multi-page election solution request. 

   If `Some(_)``, it is the next page that we intend to elect. If `None`, we are not in the  election process. 

   This is only set in multi-block elections. Should always be `None` otherwise. 
 
### nominators(`AccountId32`): `Option<PalletStakingAsyncNominations>`
- **interface**: `api.query.staking.nominators`
- **summary**:    The map from nominator stash key to their nomination preferences, namely the validators that  they wish to support. 

   Note that the keys of this storage map might become non-decodable in case the  account's [`NominationsQuota::MaxNominations`] configuration is decreased.  In this rare case, these nominators  are still existent in storage, their key is correct and retrievable (i.e. `contains_key`  indicates that they exist), but their value cannot be decoded. Therefore, the non-decodable  nominators will effectively not-exist, until they re-submit their preferences such that it  is within the bounds of the newly set `Config::MaxNominations`. 

   This implies that `::iter_keys().count()` and `::iter().count()` might return different  values for this map. Moreover, the main `::count()` is aligned with the former, namely the  number of keys that exist. 

   Lastly, if any of the nominators become non-decodable, they can be chilled immediately via  [`Call::chill_other`] dispatchable by anyone. 

   TWOX-NOTE: SAFE since `AccountId` is a secure hash. 
 
### offenceQueue(`u32, AccountId32`): `Option<PalletStakingAsyncSlashingOffenceRecord>`
- **interface**: `api.query.staking.offenceQueue`
- **summary**:    Stores reported offences in a queue until they are processed in subsequent blocks. 

   Each offence is recorded under the corresponding era index and the offending validator's  account. If an offence spans multiple pages, only one page is processed at a time. Offences  are handled sequentially, with their associated slashes computed and stored in  `UnappliedSlashes`. These slashes are then applied in a future era as determined by  `SlashDeferDuration`. 

   Any offences tied to an era older than `BondingDuration` are automatically dropped.  Processing always prioritizes the oldest era first. 
 
### offenceQueueEras(): `Option<Vec<u32>>`
- **interface**: `api.query.staking.offenceQueueEras`
- **summary**:    Tracks the eras that contain offences in `OffenceQueue`, sorted from **earliest to latest**. 

   - This ensures efficient retrieval of the oldest offence without iterating through  `OffenceQueue`. 

  - When a new offence is added to `OffenceQueue`, its era is **inserted in sorted order** if not already present. 

  - When all offences for an era are processed, it is **removed** from this list.

  - The maximum length of this vector is bounded by `BondingDuration`.

   This eliminates the need for expensive iteration and sorting when fetching the next offence  to process. 
 
### payee(`AccountId32`): `Option<PalletStakingAsyncRewardDestination>`
- **interface**: `api.query.staking.payee`
- **summary**:    Where the reward payment should be made. Keyed by stash. 

   TWOX-NOTE: SAFE since `AccountId` is a secure hash. 
 
### processingOffence(): `Option<(u32,AccountId32,PalletStakingAsyncSlashingOffenceRecord)>`
- **interface**: `api.query.staking.processingOffence`
- **summary**:    Tracks the currently processed offence record from the `OffenceQueue`. 

   - When processing offences, an offence record is **popped** from the oldest era in  `OffenceQueue` and stored here. 

  - The function `process_offence` reads from this storage, processing one page of exposure at a time. 

  - After processing a page, the `exposure_page` count is **decremented** until it reaches zero. 

  - Once fully processed, the offence record is removed from this storage.

   This ensures that offences are processed incrementally, preventing excessive computation  in a single block while maintaining correct slashing behavior. 
 
### slashRewardFraction(): `Perbill`
- **interface**: `api.query.staking.slashRewardFraction`
- **summary**:    The percentage of the slash that is distributed to reporters. 

   The rest of the slashed value is handled by the `Slash`. 
 
### unappliedSlashes(`u32, (AccountId32,Perbill,u32)`): `Option<PalletStakingAsyncUnappliedSlash>`
- **interface**: `api.query.staking.unappliedSlashes`
- **summary**:    All unapplied slashes that are queued for later. 
 
### validatorCount(): `u32`
- **interface**: `api.query.staking.validatorCount`
- **summary**:    The ideal number of active validators. 
 
### validators(`AccountId32`): `PalletStakingAsyncValidatorPrefs`
- **interface**: `api.query.staking.validators`
- **summary**:    The map from (wannabe) validator stash key to the preferences of that validator. 

   TWOX-NOTE: SAFE since `AccountId` is a secure hash. 
 
### validatorSlashInEra(`u32, AccountId32`): `Option<(Perbill,u128)>`
- **interface**: `api.query.staking.validatorSlashInEra`
- **summary**:    All slashing events on validators, mapped by era to the highest slash proportion  and slash value of the era. 
 
### virtualStakers(`AccountId32`): `Option<Null>`
- **interface**: `api.query.staking.virtualStakers`
- **summary**:    Stakers whose funds are managed by other pallets. 

   This pallet does not apply any locks on them, therefore they are only virtually bonded. They  are expected to be keyless accounts and hence should not be allowed to mutate their ledger  directly via this pallet. Instead, these accounts are managed by other pallets and accessed  via low level apis. We keep track of them to do minimal integrity checks. 
 
### voterSnapshotStatus(): `PalletStakingAsyncSnapshotStatus`
- **interface**: `api.query.staking.voterSnapshotStatus`
- **summary**:    Voter snapshot progress status. 

   If the status is `Ongoing`, it keeps a cursor of the last voter retrieved to proceed when  creating the next snapshot page. 

___


## stakingRcClient
 
### incompleteSessionReport(): `Option<PalletStakingAsyncRcClientSessionReport>`
- **interface**: `api.query.stakingRcClient.incompleteSessionReport`
- **summary**:    An incomplete incoming session report that we have not acted upon yet. 
 
### lastSessionReportEndingIndex(): `Option<u32>`
- **interface**: `api.query.stakingRcClient.lastSessionReportEndingIndex`
- **summary**:    The last session report's `end_index` that we have acted upon. 

   This allows this pallet to ensure a sequentially increasing sequence of session reports  passed to staking. 

   Note that with the XCM being the backbone of communication, we have a guarantee on the  ordering of messages. As long as the RC sends session reports in order, we _eventually_  receive them in the same correct order as well. 
 
### outgoingValidatorSet(): `Option<(PalletStakingAsyncRcClientValidatorSetReport,u32)>`
- **interface**: `api.query.stakingRcClient.outgoingValidatorSet`
- **summary**:    A validator set that is outgoing, and should be sent. 

   This will be attempted to be sent, possibly on every `on_initialize` call, until it is sent,  or the second value reaches zero, at which point we drop it. 

___


## stateTrieMigration
 
### autoLimits(): `Option<PalletStateTrieMigrationMigrationLimits>`
- **interface**: `api.query.stateTrieMigration.autoLimits`
- **summary**:    The limits that are imposed on automatic migrations. 

   If set to None, then no automatic migration happens. 
 
### migrationProcess(): `PalletStateTrieMigrationMigrationTask`
- **interface**: `api.query.stateTrieMigration.migrationProcess`
- **summary**:    Migration progress. 

   This stores the snapshot of the last migrated keys. It can be set into motion and move  forward by any of the means provided by this pallet. 
 
### signedMigrationMaxLimits(): `Option<PalletStateTrieMigrationMigrationLimits>`
- **interface**: `api.query.stateTrieMigration.signedMigrationMaxLimits`
- **summary**:    The maximum limits that the signed migration could use. 

   If not set, no signed submission is allowed. 

___


## substrate

_These are well-known keys that are always available to the runtime implementation of any Substrate-based network._
 
### changesTrieConfig(): `u32`
- **interface**: `api.query.substrate.changesTrieConfig`
- **summary**:    Changes trie configuration is stored under this key. 
 
### childStorageKeyPrefix(): `u32`
- **interface**: `api.query.substrate.childStorageKeyPrefix`
- **summary**:    Prefix of child storage keys. 
 
### code(): `Bytes`
- **interface**: `api.query.substrate.code`
- **summary**:    Wasm code of the runtime. 
 
### defaultChildStorageKeyPrefix(): `u32`
- **interface**: `api.query.substrate.defaultChildStorageKeyPrefix`
- **summary**:    Prefix of the default child storage keys in the top trie. 
 
### extrinsicIndex(): `u32`
- **interface**: `api.query.substrate.extrinsicIndex`
- **summary**:    Current extrinsic index (u32) is stored under this key. 
 
### heapPages(): `u64`
- **interface**: `api.query.substrate.heapPages`
- **summary**:    Number of wasm linear memory pages required for execution of the runtime. 
 
### intrablockEntropy(): `[u8;32]`
- **interface**: `api.query.substrate.intrablockEntropy`
- **summary**:    Current intra-block entropy (a universally unique `[u8; 32]` value) is stored here. 
 
### storageVersionStorageKeyPostfix(): `u16`
- **interface**: `api.query.substrate.storageVersionStorageKeyPostfix`
- **summary**:    The storage key postfix that is used to store the [`StorageVersion`] per pallet. 
 
### transactionLevelKey(): `u32`
- **interface**: `api.query.substrate.transactionLevelKey`
- **summary**:    The key that holds the current number of active layers. 

___


## system
 
### account(`AccountId32`): `FrameSystemAccountInfo`
- **interface**: `api.query.system.account`
- **summary**:    The full account information for a particular account ID. 
 
### allExtrinsicsLen(): `Option<u32>`
- **interface**: `api.query.system.allExtrinsicsLen`
- **summary**:    Total length (in bytes) for all extrinsics put together, for the current block. 
 
### authorizedUpgrade(): `Option<FrameSystemCodeUpgradeAuthorization>`
- **interface**: `api.query.system.authorizedUpgrade`
- **summary**:    `Some` if a code upgrade has been authorized. 
 
### blockHash(`u32`): `H256`
- **interface**: `api.query.system.blockHash`
- **summary**:    Map of block numbers to block hashes. 
 
### blockWeight(): `FrameSupportDispatchPerDispatchClassWeight`
- **interface**: `api.query.system.blockWeight`
- **summary**:    The current weight for the block. 
 
### digest(): `SpRuntimeDigest`
- **interface**: `api.query.system.digest`
- **summary**:    Digest of the current block, also part of the block header. 
 
### eventCount(): `u32`
- **interface**: `api.query.system.eventCount`
- **summary**:    The number of events in the `Events<T>` list. 
 
### events(): `Vec<FrameSystemEventRecord>`
- **interface**: `api.query.system.events`
- **summary**:    Events deposited for the current block. 

   NOTE: The item is unbound and should therefore never be read on chain.  It could otherwise inflate the PoV size of a block. 

   Events have a large in-memory size. Box the events to not go out-of-memory  just in case someone still reads them from within the runtime. 
 
### eventTopics(`H256`): `Vec<(u32,u32)>`
- **interface**: `api.query.system.eventTopics`
- **summary**:    Mapping between a topic (represented by T::Hash) and a vector of indexes  of events in the `<Events<T>>` list. 

   All topic vectors have deterministic storage locations depending on the topic. This  allows light-clients to leverage the changes trie storage tracking mechanism and  in case of changes fetch the list of events of interest. 

   The value has the type `(BlockNumberFor<T>, EventIndex)` because if we used only just  the `EventIndex` then in case if the topic has the same contents on the next block  no notification will be triggered thus the event might be lost. 
 
### executionPhase(): `Option<FrameSystemPhase>`
- **interface**: `api.query.system.executionPhase`
- **summary**:    The execution phase of the block. 
 
### extrinsicCount(): `Option<u32>`
- **interface**: `api.query.system.extrinsicCount`
- **summary**:    Total extrinsics count for the current block. 
 
### extrinsicData(`u32`): `Bytes`
- **interface**: `api.query.system.extrinsicData`
- **summary**:    Extrinsics data for the current block (maps an extrinsic's index to its data). 
 
### extrinsicWeightReclaimed(): `SpWeightsWeightV2Weight`
- **interface**: `api.query.system.extrinsicWeightReclaimed`
- **summary**:    The weight reclaimed for the extrinsic. 

   This information is available until the end of the extrinsic execution.  More precisely this information is removed in `note_applied_extrinsic`. 

   Logic doing some post dispatch weight reduction must update this storage to avoid duplicate  reduction. 
 
### inherentsApplied(): `bool`
- **interface**: `api.query.system.inherentsApplied`
- **summary**:    Whether all inherents have been applied. 
 
### lastRuntimeUpgrade(): `Option<FrameSystemLastRuntimeUpgradeInfo>`
- **interface**: `api.query.system.lastRuntimeUpgrade`
- **summary**:    Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened. 
 
### number(): `u32`
- **interface**: `api.query.system.number`
- **summary**:    The current block number being processed. Set by `execute_block`. 
 
### parentHash(): `H256`
- **interface**: `api.query.system.parentHash`
- **summary**:    Hash of the previous block. 
 
### upgradedToTripleRefCount(): `bool`
- **interface**: `api.query.system.upgradedToTripleRefCount`
- **summary**:    True if we have upgraded so that AccountInfo contains three types of `RefCount`. False  (default) if not. 
 
### upgradedToU32RefCount(): `bool`
- **interface**: `api.query.system.upgradedToU32RefCount`
- **summary**:    True if we have upgraded so that `type RefCount` is `u32`. False (default) if not. 

___


## timestamp
 
### didUpdate(): `bool`
- **interface**: `api.query.timestamp.didUpdate`
- **summary**:    Whether the timestamp has been updated in this block. 

   This value is updated to `true` upon successful submission of a timestamp by a node.  It is then checked at the end of each block execution in the `on_finalize` hook. 
 
### now(): `u64`
- **interface**: `api.query.timestamp.now`
- **summary**:    The current time for the current block. 

___


## toPolkadotXcmRouter
 
### bridge(): `BpXcmBridgeHubRouterBridgeState`
- **interface**: `api.query.toPolkadotXcmRouter.bridge`
- **summary**:    Bridge that we are using. 

   **bridges-v1** assumptions: all outbound messages through this router are using single lane  and to single remote consensus. If there is some other remote consensus that uses the same  bridge hub, the separate pallet instance shall be used, In `v2` we'll have all required  primitives (lane-id aka bridge-id, derived from XCM locations) to support multiple  bridges  by the same pallet instance. 

___


## transactionPayment
 
### nextFeeMultiplier(): `u128`
- **interface**: `api.query.transactionPayment.nextFeeMultiplier`
 
### storageVersion(): `PalletTransactionPaymentReleases`
- **interface**: `api.query.transactionPayment.storageVersion`

___


## treasury
 
### approvals(): `Vec<u32>`
- **interface**: `api.query.treasury.approvals`
- **summary**:    DEPRECATED: associated with `spend_local` call and will be removed in May 2025.  Refer to <https://github.com/paritytech/polkadot-sdk/pull/5961> for migration to `spend`. 

   Proposal indices that have been approved but not yet awarded. 
 
### deactivated(): `u128`
- **interface**: `api.query.treasury.deactivated`
- **summary**:    The amount which has been reported as inactive to Currency. 
 
### lastSpendPeriod(): `Option<u32>`
- **interface**: `api.query.treasury.lastSpendPeriod`
- **summary**:    The blocknumber for the last triggered spend period. 
 
### proposalCount(): `u32`
- **interface**: `api.query.treasury.proposalCount`
- **summary**:    DEPRECATED: associated with `spend_local` call and will be removed in May 2025.  Refer to <https://github.com/paritytech/polkadot-sdk/pull/5961> for migration to `spend`. 

   Number of proposals that have been made. 
 
### proposals(`u32`): `Option<PalletTreasuryProposal>`
- **interface**: `api.query.treasury.proposals`
- **summary**:    DEPRECATED: associated with `spend_local` call and will be removed in May 2025.  Refer to <https://github.com/paritytech/polkadot-sdk/pull/5961> for migration to `spend`. 

   Proposals that have been made. 
 
### spendCount(): `u32`
- **interface**: `api.query.treasury.spendCount`
- **summary**:    The count of spends that have been made. 
 
### spends(`u32`): `Option<PalletTreasurySpendStatus>`
- **interface**: `api.query.treasury.spends`
- **summary**:    Spends that have been approved and being processed. 

___


## uniques
 
### account(`AccountId32, u32, u32`): `Option<Null>`
- **interface**: `api.query.uniques.account`
- **summary**:    The items held by any given account; set out this way so that items owned by a single  account can be enumerated. 
 
### asset(`u32, u32`): `Option<PalletUniquesItemDetails>`
- **interface**: `api.query.uniques.asset`
- **summary**:    The items in existence and their ownership details. 
 
### attribute(`u32, Option<u32>, Bytes`): `Option<(Bytes,u128)>`
- **interface**: `api.query.uniques.attribute`
- **summary**:    Attributes of a collection. 
 
### class(`u32`): `Option<PalletUniquesCollectionDetails>`
- **interface**: `api.query.uniques.class`
- **summary**:    Details of a collection. 
 
### classAccount(`AccountId32, u32`): `Option<Null>`
- **interface**: `api.query.uniques.classAccount`
- **summary**:    The collections owned by any given account; set out this way so that collections owned by  a single account can be enumerated. 
 
### classMetadataOf(`u32`): `Option<PalletUniquesCollectionMetadata>`
- **interface**: `api.query.uniques.classMetadataOf`
- **summary**:    Metadata of a collection. 
 
### collectionMaxSupply(`u32`): `Option<u32>`
- **interface**: `api.query.uniques.collectionMaxSupply`
- **summary**:    Keeps track of the number of items a collection might have. 
 
### instanceMetadataOf(`u32, u32`): `Option<PalletUniquesItemMetadata>`
- **interface**: `api.query.uniques.instanceMetadataOf`
- **summary**:    Metadata of an item. 
 
### itemPriceOf(`u32, u32`): `Option<(u128,Option<AccountId32>)>`
- **interface**: `api.query.uniques.itemPriceOf`
- **summary**:    Price of an asset instance. 
 
### ownershipAcceptance(`AccountId32`): `Option<u32>`
- **interface**: `api.query.uniques.ownershipAcceptance`
- **summary**:    The collection, if any, of which an account is willing to take ownership. 

___


## vesting
 
### storageVersion(): `PalletVestingReleases`
- **interface**: `api.query.vesting.storageVersion`
- **summary**:    Storage version of the pallet. 

   New networks start with latest version, as determined by the genesis build. 
 
### vesting(`AccountId32`): `Option<Vec<PalletVestingVestingInfo>>`
- **interface**: `api.query.vesting.vesting`
- **summary**:    Information regarding the vesting of a given account. 

___


## voterList
 
### counterForListNodes(): `u32`
- **interface**: `api.query.voterList.counterForListNodes`
- **summary**:    Counter for the related counted storage map 
 
### listBags(`u64`): `Option<PalletBagsListListBag>`
- **interface**: `api.query.voterList.listBags`
- **summary**:    A bag stored in storage. 

   Stores a `Bag` struct, which stores head and tail pointers to itself. 
 
### listNodes(`AccountId32`): `Option<PalletBagsListListNode>`
- **interface**: `api.query.voterList.listNodes`
- **summary**:    A single node, within some bag. 

   Nodes store links forward and back within their respective bags. 
 
### lock(): `Option<Null>`
- **interface**: `api.query.voterList.lock`
- **summary**:    Lock all updates to this pallet. 

   If any nodes needs updating, removal or addition due to a temporary lock, the  [`Call::rebag`] can be used. 
 
### nextNodeAutoRebagged(): `Option<AccountId32>`
- **interface**: `api.query.voterList.nextNodeAutoRebagged`
- **summary**:    Pointer that remembers the next node that will be auto-rebagged.  When `None`, the next scan will start from the list head again. 

___


## whitelist
 
### whitelistedCall(`H256`): `Option<Null>`
- **interface**: `api.query.whitelist.whitelistedCall`

___


## xcmpQueue
 
### deliveryFeeFactor(`u32`): `u128`
- **interface**: `api.query.xcmpQueue.deliveryFeeFactor`
- **summary**:    The factor to multiply the base delivery fee by. 
 
### inboundXcmpSuspended(): `BTreeSet<u32>`
- **interface**: `api.query.xcmpQueue.inboundXcmpSuspended`
- **summary**:    The suspended inbound XCMP channels. All others are not suspended. 

   This is a `StorageValue` instead of a `StorageMap` since we expect multiple reads per block  to different keys with a one byte payload. The access to `BoundedBTreeSet` will be cached  within the block and therefore only included once in the proof size. 

   NOTE: The PoV benchmarking cannot know this and will over-estimate, but the actual proof  will be smaller. 
 
### outboundXcmpMessages(`u32, u16`): `Bytes`
- **interface**: `api.query.xcmpQueue.outboundXcmpMessages`
- **summary**:    The messages outbound in a given XCMP channel. 
 
### outboundXcmpStatus(): `Vec<CumulusPalletXcmpQueueOutboundChannelDetails>`
- **interface**: `api.query.xcmpQueue.outboundXcmpStatus`
- **summary**:    The non-empty XCMP channels in order of becoming non-empty, and the index of the first  and last outbound message. If the two indices are equal, then it indicates an empty  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in  case of the need to send a high-priority signal message this block.  The bool is true if there is a signal message waiting to be sent. 
 
### queueConfig(): `CumulusPalletXcmpQueueQueueConfigData`
- **interface**: `api.query.xcmpQueue.queueConfig`
- **summary**:    The configuration which controls the dynamics of the outbound queue. 
 
### queueSuspended(): `bool`
- **interface**: `api.query.xcmpQueue.queueSuspended`
- **summary**:    Whether or not the XCMP queue is suspended from executing incoming XCMs or not. 
 
### signalMessages(`u32`): `Bytes`
- **interface**: `api.query.xcmpQueue.signalMessages`
- **summary**:    Any signal messages waiting to be sent. 
