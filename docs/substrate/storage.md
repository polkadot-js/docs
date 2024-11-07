---
title: Storage
---

The following sections contain Storage methods are part of the default Substrate runtime. On the api, these are exposed via `api.query.<module>.<method>`. 

(NOTE: These were generated from a static/snapshot view of a recent default Substrate runtime. Some items may not be available in older nodes, or in any customized implementations.)

- **[alliance](#alliance)**

- **[allianceMotion](#alliancemotion)**

- **[assetConversion](#assetconversion)**

- **[assetRate](#assetrate)**

- **[assets](#assets)**

- **[authorityDiscovery](#authoritydiscovery)**

- **[authorship](#authorship)**

- **[babe](#babe)**

- **[balances](#balances)**

- **[beefy](#beefy)**

- **[bounties](#bounties)**

- **[broker](#broker)**

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

- **[historical](#historical)**

- **[identity](#identity)**

- **[imOnline](#imonline)**

- **[indices](#indices)**

- **[lottery](#lottery)**

- **[messageQueue](#messagequeue)**

- **[mixnet](#mixnet)**

- **[mmr](#mmr)**

- **[mmrLeaf](#mmrleaf)**

- **[multiBlockMigrations](#multiblockmigrations)**

- **[multisig](#multisig)**

- **[nftFractionalization](#nftfractionalization)**

- **[nfts](#nfts)**

- **[nis](#nis)**

- **[nominationPools](#nominationpools)**

- **[offences](#offences)**

- **[palletExampleMbms](#palletexamplembms)**

- **[parameters](#parameters)**

- **[poolAssets](#poolassets)**

- **[pov](#pov)**

- **[preimage](#preimage)**

- **[proxy](#proxy)**

- **[randomnessCollectiveFlip](#randomnesscollectiveflip)**

- **[rankedCollective](#rankedcollective)**

- **[rankedPolls](#rankedpolls)**

- **[recovery](#recovery)**

- **[referenda](#referenda)**

- **[safeMode](#safemode)**

- **[salary](#salary)**

- **[scheduler](#scheduler)**

- **[session](#session)**

- **[society](#society)**

- **[staking](#staking)**

- **[stateTrieMigration](#statetriemigration)**

- **[substrate](#substrate)**

- **[sudo](#sudo)**

- **[system](#system)**

- **[tasksExample](#tasksexample)**

- **[technicalCommittee](#technicalcommittee)**

- **[technicalMembership](#technicalmembership)**

- **[timestamp](#timestamp)**

- **[tips](#tips)**

- **[transactionPayment](#transactionpayment)**

- **[transactionStorage](#transactionstorage)**

- **[treasury](#treasury)**

- **[txPause](#txpause)**

- **[uniques](#uniques)**

- **[vesting](#vesting)**

- **[voterList](#voterlist)**

- **[whitelist](#whitelist)**


___


## alliance
 
### announcements(): `Vec<PalletAllianceCid>`
- **interface**: `api.query.alliance.announcements`
- **summary**:    The current IPFS CIDs of any announcements. 
 
### depositOf(`AccountId32`): `Option<u128>`
- **interface**: `api.query.alliance.depositOf`
- **summary**:    Maps members to their candidacy deposit. 
 
### members(`PalletAllianceMemberRole`): `Vec<AccountId32>`
- **interface**: `api.query.alliance.members`
- **summary**:    Maps member type to members of each type. 
 
### retiringMembers(`AccountId32`): `Option<u32>`
- **interface**: `api.query.alliance.retiringMembers`
- **summary**:    A set of members who gave a retirement notice. They can retire after the end of retirement  period stored as a future block number. 
 
### rule(): `Option<PalletAllianceCid>`
- **interface**: `api.query.alliance.rule`
- **summary**:    The IPFS CID of the alliance rule.  Fellows can propose a new rule with a super-majority. 
 
### unscrupulousAccounts(): `Vec<AccountId32>`
- **interface**: `api.query.alliance.unscrupulousAccounts`
- **summary**:    The current list of accounts deemed unscrupulous. These accounts non grata cannot submit  candidacy. 
 
### unscrupulousWebsites(): `Vec<Bytes>`
- **interface**: `api.query.alliance.unscrupulousWebsites`
- **summary**:    The current list of websites deemed unscrupulous. 

___


## allianceMotion
 
### members(): `Vec<AccountId32>`
- **interface**: `api.query.allianceMotion.members`
- **summary**:    The current members of the collective. This is stored sorted (just by value). 
 
### prime(): `Option<AccountId32>`
- **interface**: `api.query.allianceMotion.prime`
- **summary**:    The prime member that helps determine the default vote behavior in case of abstentions. 
 
### proposalCount(): `u32`
- **interface**: `api.query.allianceMotion.proposalCount`
- **summary**:    Proposals so far. 
 
### proposalOf(`H256`): `Option<Call>`
- **interface**: `api.query.allianceMotion.proposalOf`
- **summary**:    Actual proposal for a given hash, if it's current. 
 
### proposals(): `Vec<H256>`
- **interface**: `api.query.allianceMotion.proposals`
- **summary**:    The hashes of the active proposals. 
 
### voting(`H256`): `Option<PalletCollectiveVotes>`
- **interface**: `api.query.allianceMotion.voting`
- **summary**:    Votes on a given proposal, if it is ongoing. 

___


## assetConversion
 
### nextPoolAssetId(): `Option<u32>`
- **interface**: `api.query.assetConversion.nextPoolAssetId`
- **summary**:    Stores the `PoolAssetId` that is going to be used for the next lp token.  This gets incremented whenever a new lp pool is created. 
 
### pools(`(FrameSupportTokensFungibleUnionOfNativeOrWithId,FrameSupportTokensFungibleUnionOfNativeOrWithId)`): `Option<PalletAssetConversionPoolInfo>`
- **interface**: `api.query.assetConversion.pools`
- **summary**:    Map from `PoolAssetId` to `PoolInfo`. This establishes whether a pool has been officially  created rather than people sending tokens directly to a pool's public account. 

___


## assetRate
 
### conversionRateToNative(`u32`): `Option<u128>`
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
 
### metadata(`u32`): `PalletAssetsAssetMetadata`
- **interface**: `api.query.assets.metadata`
- **summary**:    Metadata of an asset. 
 
### nextAssetId(): `Option<u32>`
- **interface**: `api.query.assets.nextAssetId`
- **summary**:    The asset ID enforced for the next asset creation, if any present. Otherwise, this storage  item has no effect. 

   This can be useful for setting up constraints for IDs of the new assets. For example, by  providing an initial [`NextAssetId`] and using the [`crate::AutoIncAssetId`] callback, an  auto-increment model can be applied to all new asset IDs. 

   The initial next asset ID can be set using the [`GenesisConfig`] or the  [SetNextAssetId](`migration::next_asset_id::SetNextAssetId`) migration. 

___


## authorityDiscovery
 
### keys(): `Vec<SpAuthorityDiscoveryAppPublic>`
- **interface**: `api.query.authorityDiscovery.keys`
- **summary**:    Keys of the current authority set. 
 
### nextKeys(): `Vec<SpAuthorityDiscoveryAppPublic>`
- **interface**: `api.query.authorityDiscovery.nextKeys`
- **summary**:    Keys of the next authority set. 

___


## authorship
 
### author(): `Option<AccountId32>`
- **interface**: `api.query.authorship.author`
- **summary**:    Author of current block. 

___


## babe
 
### authorities(): `Vec<(SpConsensusBabeAppPublic,u64)>`
- **interface**: `api.query.babe.authorities`
- **summary**:    Current epoch authorities. 
 
### authorVrfRandomness(): `Option<[u8;32]>`
- **interface**: `api.query.babe.authorVrfRandomness`
- **summary**:    This field should always be populated during block processing unless  secondary plain slots are enabled (which don't contain a VRF output). 

   It is set in `on_finalize`, before it will contain the value from the last block. 
 
### currentSlot(): `u64`
- **interface**: `api.query.babe.currentSlot`
- **summary**:    Current slot number. 
 
### epochConfig(): `Option<SpConsensusBabeBabeEpochConfiguration>`
- **interface**: `api.query.babe.epochConfig`
- **summary**:    The configuration for the current epoch. Should never be `None` as it is initialized in  genesis. 
 
### epochIndex(): `u64`
- **interface**: `api.query.babe.epochIndex`
- **summary**:    Current epoch index. 
 
### epochStart(): `(u32,u32)`
- **interface**: `api.query.babe.epochStart`
- **summary**:    The block numbers when the last and current epoch have started, respectively `N-1` and  `N`.  NOTE: We track this is in order to annotate the block number when a given pool of  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in  slots, which may be skipped, the block numbers may not line up with the slot numbers. 
 
### genesisSlot(): `u64`
- **interface**: `api.query.babe.genesisSlot`
- **summary**:    The slot at which the first epoch actually started. This is 0  until the first block of the chain. 
 
### initialized(): `Option<Option<SpConsensusBabeDigestsPreDigest>>`
- **interface**: `api.query.babe.initialized`
- **summary**:    Temporary value (cleared at block finalization) which is `Some`  if per-block initialization has already been called for current block. 
 
### lateness(): `u32`
- **interface**: `api.query.babe.lateness`
- **summary**:    How late the current block is compared to its parent. 

   This entry is populated as part of block execution and is cleaned up  on block finalization. Querying this storage entry outside of block  execution context should always yield zero. 
 
### nextAuthorities(): `Vec<(SpConsensusBabeAppPublic,u64)>`
- **interface**: `api.query.babe.nextAuthorities`
- **summary**:    Next epoch authorities. 
 
### nextEpochConfig(): `Option<SpConsensusBabeBabeEpochConfiguration>`
- **interface**: `api.query.babe.nextEpochConfig`
- **summary**:    The configuration for the next epoch, `None` if the config will not change  (you can fallback to `EpochConfig` instead in that case). 
 
### nextRandomness(): `[u8;32]`
- **interface**: `api.query.babe.nextRandomness`
- **summary**:    Next epoch randomness. 
 
### pendingEpochConfigChange(): `Option<SpConsensusBabeDigestsNextConfigDescriptor>`
- **interface**: `api.query.babe.pendingEpochConfigChange`
- **summary**:    Pending epoch configuration change that will be applied when the next epoch is enacted. 
 
### randomness(): `[u8;32]`
- **interface**: `api.query.babe.randomness`
- **summary**:    The epoch randomness for the *current* epoch. 

   #### Security 

   This MUST NOT be used for gambling, as it can be influenced by a  malicious validator in the short term. It MAY be used in many  cryptographic protocols, however, so long as one remembers that this  (like everything else on-chain) it is public. For example, it can be  used where a number is needed that cannot have been chosen by an  adversary, for purposes such as public-coin zero-knowledge proofs. 
 
### segmentIndex(): `u32`
- **interface**: `api.query.babe.segmentIndex`
- **summary**:    Randomness under construction. 

   We make a trade-off between storage accesses and list length.  We store the under-construction randomness in segments of up to  `UNDER_CONSTRUCTION_SEGMENT_LENGTH`. 

   Once a segment reaches this length, we begin the next one.  We reset all segments and return to `0` at the beginning of every  epoch. 
 
### skippedEpochs(): `Vec<(u64,u32)>`
- **interface**: `api.query.babe.skippedEpochs`
- **summary**:    A list of the last 100 skipped epochs and the corresponding session index  when the epoch was skipped. 

   This is only used for validating equivocation proofs. An equivocation proof  must contains a key-ownership proof for a given session, therefore we need a  way to tie together sessions and epoch indices, i.e. we need to validate that  a validator was the owner of a given key on a given session, and what the  active epoch index was during that session. 
 
### underConstruction(`u32`): `Vec<[u8;32]>`
- **interface**: `api.query.babe.underConstruction`
- **summary**:    TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay. 

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


## beefy
 
### authorities(): `Vec<SpConsensusBeefyEcdsaCryptoPublic>`
- **interface**: `api.query.beefy.authorities`
- **summary**:    The current authorities set 
 
### genesisBlock(): `Option<u32>`
- **interface**: `api.query.beefy.genesisBlock`
- **summary**:    Block number where BEEFY consensus is enabled/started.  By changing this (through privileged `set_new_genesis()`), BEEFY consensus is effectively  restarted from the newly set block number. 
 
### nextAuthorities(): `Vec<SpConsensusBeefyEcdsaCryptoPublic>`
- **interface**: `api.query.beefy.nextAuthorities`
- **summary**:    Authorities set scheduled to be used with the next session 
 
### setIdSession(`u64`): `Option<u32>`
- **interface**: `api.query.beefy.setIdSession`
- **summary**:    A mapping from BEEFY set ID to the index of the *most recent* session for which its  members were responsible. 

   This is only used for validating equivocation proofs. An equivocation proof must  contains a key-ownership proof for a given session, therefore we need a way to tie  together sessions and BEEFY set ids, i.e. we need to validate that a validator  was the owner of a given key on a given session, and what the active set ID was  during that session. 

   TWOX-NOTE: `ValidatorSetId` is not under user control. 
 
### validatorSetId(): `u64`
- **interface**: `api.query.beefy.validatorSetId`
- **summary**:    The current validator set id 

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


## broker
 
### configuration(): `Option<PalletBrokerConfigRecord>`
- **interface**: `api.query.broker.configuration`
- **summary**:    The current configuration of this pallet. 
 
### coreCountInbox(): `Option<u16>`
- **interface**: `api.query.broker.coreCountInbox`
- **summary**:    Received core count change from the relay chain. 
 
### instaPoolContribution(`PalletBrokerRegionId`): `Option<PalletBrokerContributionRecord>`
- **interface**: `api.query.broker.instaPoolContribution`
- **summary**:    Record of a single contribution to the Instantaneous Coretime Pool. 
 
### instaPoolHistory(`u32`): `Option<PalletBrokerInstaPoolHistoryRecord>`
- **interface**: `api.query.broker.instaPoolHistory`
- **summary**:    Total InstaPool rewards for each Timeslice and the number of core parts which contributed. 
 
### instaPoolIo(`u32`): `PalletBrokerPoolIoRecord`
- **interface**: `api.query.broker.instaPoolIo`
- **summary**:    Record of Coretime entering or leaving the Instantaneous Coretime Pool. 
 
### leases(): `Vec<PalletBrokerLeaseRecordItem>`
- **interface**: `api.query.broker.leases`
- **summary**:    The Polkadot Core legacy leases. 
 
### potentialRenewals(`PalletBrokerPotentialRenewalId`): `Option<PalletBrokerPotentialRenewalRecord>`
- **interface**: `api.query.broker.potentialRenewals`
- **summary**:    Records of potential renewals. 

   Renewals will only actually be allowed if `CompletionStatus` is actually `Complete`. 
 
### regions(`PalletBrokerRegionId`): `Option<PalletBrokerRegionRecord>`
- **interface**: `api.query.broker.regions`
- **summary**:    The current (unassigned or provisionally assigend) Regions. 
 
### reservations(): `Vec<Vec<PalletBrokerScheduleItem>>`
- **interface**: `api.query.broker.reservations`
- **summary**:    The Polkadot Core reservations (generally tasked with the maintenance of System Chains). 
 
### revenueInbox(): `Option<PalletBrokerOnDemandRevenueRecord>`
- **interface**: `api.query.broker.revenueInbox`
- **summary**:    Received revenue info from the relay chain. 
 
### saleInfo(): `Option<PalletBrokerSaleInfoRecord>`
- **interface**: `api.query.broker.saleInfo`
- **summary**:    The details of the current sale, including its properties and status. 
 
### status(): `Option<PalletBrokerStatusRecord>`
- **interface**: `api.query.broker.status`
- **summary**:    The current status of miscellaneous subsystems of this pallet. 
 
### workload(`u16`): `Vec<PalletBrokerScheduleItem>`
- **interface**: `api.query.broker.workload`
- **summary**:    The current workload of each core. This gets updated with workplan as timeslices pass. 
 
### workplan(`(u32,u16)`): `Option<Vec<PalletBrokerScheduleItem>>`
- **interface**: `api.query.broker.workplan`
- **summary**:    The work we plan on having each core do at a particular time in the future. 

___


## childBounties
 
### childBounties(`u32, u32`): `Option<PalletChildBountiesChildBounty>`
- **interface**: `api.query.childBounties.childBounties`
- **summary**:    Child bounties that have been added. 
 
### childBountyCount(): `u32`
- **interface**: `api.query.childBounties.childBountyCount`
- **summary**:    Number of total child bounties. 
 
### childBountyDescriptions(`u32`): `Option<Bytes>`
- **interface**: `api.query.childBounties.childBountyDescriptions`
- **summary**:    The description of each child-bounty. 
 
### childrenCuratorFees(`u32`): `u128`
- **interface**: `api.query.childBounties.childrenCuratorFees`
- **summary**:    The cumulative child-bounty curator fee for each parent bounty. 
 
### parentChildBounties(`u32`): `u32`
- **interface**: `api.query.childBounties.parentChildBounties`
- **summary**:    Number of child bounties per parent bounty.  Map of parent bounty index to number of child bounties. 

___


## contracts
 
### codeInfoOf(`H256`): `Option<PalletContractsWasmCodeInfo>`
- **interface**: `api.query.contracts.codeInfoOf`
- **summary**:    A mapping from a contract's code hash to its code info. 
 
### contractInfoOf(`AccountId32`): `Option<PalletContractsStorageContractInfo>`
- **interface**: `api.query.contracts.contractInfoOf`
- **summary**:    The code associated with a given account. 

   TWOX-NOTE: SAFE since `AccountId` is a secure hash. 
 
### deletionQueue(`u32`): `Option<Bytes>`
- **interface**: `api.query.contracts.deletionQueue`
- **summary**:    Evicted contracts that await child trie deletion. 

   Child trie deletion is a heavy operation depending on the amount of storage items  stored in said trie. Therefore this operation is performed lazily in `on_idle`. 
 
### deletionQueueCounter(): `PalletContractsStorageDeletionQueueManager`
- **interface**: `api.query.contracts.deletionQueueCounter`
- **summary**:    A pair of monotonic counters used to track the latest contract marked for deletion  and the latest deleted contract in queue. 
 
### migrationInProgress(): `Option<Bytes>`
- **interface**: `api.query.contracts.migrationInProgress`
- **summary**:    A migration can span across multiple blocks. This storage defines a cursor to track the  progress of the migration, enabling us to resume from the last completed position. 
 
### nonce(): `u64`
- **interface**: `api.query.contracts.nonce`
- **summary**:    This is a **monotonic** counter incremented on contract instantiation. 

   This is used in order to generate unique trie ids for contracts.  The trie id of a new contract is calculated from hash(account_id, nonce).  The nonce is required because otherwise the following sequence would lead to  a possible collision of storage: 

   1. Create a new contract.  2. Terminate the contract.  3. Immediately recreate the contract with the same account_id. 

   This is bad because the contents of a trie are deleted lazily and there might be  storage of the old instantiation still in it when the new contract is created. Please  note that we can't replace the counter by the block number because the sequence above  can happen in the same block. We also can't keep the account counter in memory only  because storage is the only way to communicate across different extrinsics in the  same block. 

   #### Note 

   Do not use it to determine the number of contracts. It won't be decremented if  a contract is destroyed. 
 
### pristineCode(`H256`): `Option<Bytes>`
- **interface**: `api.query.contracts.pristineCode`
- **summary**:    A mapping from a contract's code hash to its code. 

___


## convictionVoting
 
### classLocksFor(`AccountId32`): `Vec<(u16,u128)>`
- **interface**: `api.query.convictionVoting.classLocksFor`
- **summary**:    The voting classes which have a non-zero lock requirement and the lock amounts which they  require. The actual amount locked on behalf of this pallet should always be the maximum of  this list. 
 
### votingFor(`AccountId32, u16`): `PalletConvictionVotingVoteVoting`
- **interface**: `api.query.convictionVoting.votingFor`
- **summary**:    All voting for a particular voter in a particular voting class. We store the balance for the  number of votes that we have recorded. 

___


## coreFellowship
 
### member(`AccountId32`): `Option<PalletCoreFellowshipMemberStatus>`
- **interface**: `api.query.coreFellowship.member`
- **summary**:    The status of a claimant. 
 
### memberEvidence(`AccountId32`): `Option<(PalletCoreFellowshipWish,Bytes)>`
- **interface**: `api.query.coreFellowship.memberEvidence`
- **summary**:    Some evidence together with the desired outcome for which it was presented. 
 
### params(): `PalletCoreFellowshipParamsTypeU128`
- **interface**: `api.query.coreFellowship.params`
- **summary**:    The overall status of the system. 

___


## council
 
### members(): `Vec<AccountId32>`
- **interface**: `api.query.council.members`
- **summary**:    The current members of the collective. This is stored sorted (just by value). 
 
### prime(): `Option<AccountId32>`
- **interface**: `api.query.council.prime`
- **summary**:    The prime member that helps determine the default vote behavior in case of abstentions. 
 
### proposalCount(): `u32`
- **interface**: `api.query.council.proposalCount`
- **summary**:    Proposals so far. 
 
### proposalOf(`H256`): `Option<Call>`
- **interface**: `api.query.council.proposalOf`
- **summary**:    Actual proposal for a given hash, if it's current. 
 
### proposals(): `Vec<H256>`
- **interface**: `api.query.council.proposals`
- **summary**:    The hashes of the active proposals. 
 
### voting(`H256`): `Option<PalletCollectiveVotes>`
- **interface**: `api.query.council.voting`
- **summary**:    Votes on a given proposal, if it is ongoing. 

___


## democracy
 
### blacklist(`H256`): `Option<(u32,Vec<AccountId32>)>`
- **interface**: `api.query.democracy.blacklist`
- **summary**:    A record of who vetoed what. Maps proposal hash to a possible existent block number  (until when it may not be resubmitted) and who vetoed it. 
 
### cancellations(`H256`): `bool`
- **interface**: `api.query.democracy.cancellations`
- **summary**:    Record of all proposals that have been subject to emergency cancellation. 
 
### depositOf(`u32`): `Option<(Vec<AccountId32>,u128)>`
- **interface**: `api.query.democracy.depositOf`
- **summary**:    Those who have locked a deposit. 

   TWOX-NOTE: Safe, as increasing integer keys are safe. 
 
### lastTabledWasExternal(): `bool`
- **interface**: `api.query.democracy.lastTabledWasExternal`
- **summary**:    True if the last referendum tabled was submitted externally. False if it was a public  proposal. 
 
### lowestUnbaked(): `u32`
- **interface**: `api.query.democracy.lowestUnbaked`
- **summary**:    The lowest referendum index representing an unbaked referendum. Equal to  `ReferendumCount` if there isn't a unbaked referendum. 
 
### metadataOf(`PalletDemocracyMetadataOwner`): `Option<H256>`
- **interface**: `api.query.democracy.metadataOf`
- **summary**:    General information concerning any proposal or referendum.  The `Hash` refers to the preimage of the `Preimages` provider which can be a JSON  dump or IPFS hash of a JSON file. 

   Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)  large preimages. 
 
### nextExternal(): `Option<(FrameSupportPreimagesBounded,PalletDemocracyVoteThreshold)>`
- **interface**: `api.query.democracy.nextExternal`
- **summary**:    The referendum to be tabled whenever it would be valid to table an external proposal.  This happens when a referendum needs to be tabled and one of two conditions are met: 

  - `LastTabledWasExternal` is `false`; or

  - `PublicProps` is empty.
 
### publicPropCount(): `u32`
- **interface**: `api.query.democracy.publicPropCount`
- **summary**:    The number of (public) proposals that have been made so far. 
 
### publicProps(): `Vec<(u32,FrameSupportPreimagesBounded,AccountId32)>`
- **interface**: `api.query.democracy.publicProps`
- **summary**:    The public proposals. Unsorted. The second item is the proposal. 
 
### referendumCount(): `u32`
- **interface**: `api.query.democracy.referendumCount`
- **summary**:    The next free referendum index, aka the number of referenda started so far. 
 
### referendumInfoOf(`u32`): `Option<PalletDemocracyReferendumInfo>`
- **interface**: `api.query.democracy.referendumInfoOf`
- **summary**:    Information concerning any given referendum. 

   TWOX-NOTE: SAFE as indexes are not under an attacker’s control. 
 
### votingOf(`AccountId32`): `PalletDemocracyVoteVoting`
- **interface**: `api.query.democracy.votingOf`
- **summary**:    All votes for a particular voter. We store the balance for the number of votes that we  have recorded. The second item is the total amount of delegations, that will be added. 

   TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway. 

___


## electionProviderMultiPhase
 
### currentPhase(): `PalletElectionProviderMultiPhasePhase`
- **interface**: `api.query.electionProviderMultiPhase.currentPhase`
- **summary**:    Current phase. 
 
### desiredTargets(): `Option<u32>`
- **interface**: `api.query.electionProviderMultiPhase.desiredTargets`
- **summary**:    Desired number of targets to elect for this round. 

   Only exists when [`Snapshot`] is present.  Note: This storage type must only be mutated through [`SnapshotWrapper`]. 
 
### minimumUntrustedScore(): `Option<SpNposElectionsElectionScore>`
- **interface**: `api.query.electionProviderMultiPhase.minimumUntrustedScore`
- **summary**:    The minimum score that each 'untrusted' solution must attain in order to be considered  feasible. 

   Can be set via `set_minimum_untrusted_score`. 
 
### queuedSolution(): `Option<PalletElectionProviderMultiPhaseReadySolution>`
- **interface**: `api.query.electionProviderMultiPhase.queuedSolution`
- **summary**:    Current best solution, signed or unsigned, queued to be returned upon `elect`. 

   Always sorted by score. 
 
### round(): `u32`
- **interface**: `api.query.electionProviderMultiPhase.round`
- **summary**:    Internal counter for the number of rounds. 

   This is useful for de-duplication of transactions submitted to the pool, and general  diagnostics of the pallet. 

   This is merely incremented once per every time that an upstream `elect` is called. 
 
### signedSubmissionIndices(): `Vec<(SpNposElectionsElectionScore,u32,u32)>`
- **interface**: `api.query.electionProviderMultiPhase.signedSubmissionIndices`
- **summary**:    A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a  value in `SignedSubmissions`. 

   We never need to process more than a single signed submission at a time. Signed submissions  can be quite large, so we're willing to pay the cost of multiple database accesses to access  them one at a time instead of reading and decoding all of them at once. 
 
### signedSubmissionNextIndex(): `u32`
- **interface**: `api.query.electionProviderMultiPhase.signedSubmissionNextIndex`
- **summary**:    The next index to be assigned to an incoming signed submission. 

   Every accepted submission is assigned a unique index; that index is bound to that particular  submission for the duration of the election. On election finalization, the next index is  reset to 0. 

   We can't just use `SignedSubmissionIndices.len()`, because that's a bounded set; past its  capacity, it will simply saturate. We can't just iterate over `SignedSubmissionsMap`,  because iteration is slow. Instead, we store the value here. 
 
### signedSubmissionsMap(`u32`): `Option<PalletElectionProviderMultiPhaseSignedSignedSubmission>`
- **interface**: `api.query.electionProviderMultiPhase.signedSubmissionsMap`
- **summary**:    Unchecked, signed solutions. 

   Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while  allowing us to keep only a single one in memory at a time. 

   Twox note: the key of the map is an auto-incrementing index which users cannot inspect or  affect; we shouldn't need a cryptographically secure hasher. 
 
### snapshot(): `Option<PalletElectionProviderMultiPhaseRoundSnapshot>`
- **interface**: `api.query.electionProviderMultiPhase.snapshot`
- **summary**:    Snapshot data of the round. 

   This is created at the beginning of the signed phase and cleared upon calling `elect`.  Note: This storage type must only be mutated through [`SnapshotWrapper`]. 
 
### snapshotMetadata(): `Option<PalletElectionProviderMultiPhaseSolutionOrSnapshotSize>`
- **interface**: `api.query.electionProviderMultiPhase.snapshotMetadata`
- **summary**:    The metadata of the [`RoundSnapshot`] 

   Only exists when [`Snapshot`] is present.  Note: This storage type must only be mutated through [`SnapshotWrapper`]. 

___


## elections
 
### candidates(): `Vec<(AccountId32,u128)>`
- **interface**: `api.query.elections.candidates`
- **summary**:    The present candidate list. A current member or runner-up can never enter this vector  and is always implicitly assumed to be a candidate. 

   Second element is the deposit. 

   Invariant: Always sorted based on account id. 
 
### electionRounds(): `u32`
- **interface**: `api.query.elections.electionRounds`
- **summary**:    The total number of vote rounds that have happened, excluding the upcoming one. 
 
### members(): `Vec<PalletElectionsPhragmenSeatHolder>`
- **interface**: `api.query.elections.members`
- **summary**:    The current elected members. 

   Invariant: Always sorted based on account id. 
 
### runnersUp(): `Vec<PalletElectionsPhragmenSeatHolder>`
- **interface**: `api.query.elections.runnersUp`
- **summary**:    The current reserved runners-up. 

   Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the  last (i.e. _best_) runner-up will be replaced. 
 
### voting(`AccountId32`): `PalletElectionsPhragmenVoter`
- **interface**: `api.query.elections.voting`
- **summary**:    Votes and locked stake of a particular voter. 

   TWOX-NOTE: SAFE as `AccountId` is a crypto hash. 

___


## fastUnstake
 
### counterForQueue(): `u32`
- **interface**: `api.query.fastUnstake.counterForQueue`
- **summary**:    Counter for the related counted storage map 
 
### erasToCheckPerBlock(): `u32`
- **interface**: `api.query.fastUnstake.erasToCheckPerBlock`
- **summary**:    Number of eras to check per block. 

   If set to 0, this pallet does absolutely nothing. Cannot be set to more than  [`Config::MaxErasToCheckPerBlock`]. 

   Based on the amount of weight available at [`Pallet::on_idle`], up to this many eras are  checked. The checking is represented by updating [`UnstakeRequest::checked`], which is  stored in [`Head`]. 
 
### head(): `Option<PalletFastUnstakeUnstakeRequest>`
- **interface**: `api.query.fastUnstake.head`
- **summary**:    The current "head of the queue" being unstaked. 

   The head in itself can be a batch of up to [`Config::BatchSize`] stakers. 
 
### queue(`AccountId32`): `Option<u128>`
- **interface**: `api.query.fastUnstake.queue`
- **summary**:    The map of all accounts wishing to be unstaked. 

   Keeps track of `AccountId` wishing to unstake and it's corresponding deposit. 

___


## glutton
 
### compute(): `u64`
- **interface**: `api.query.glutton.compute`
- **summary**:    The proportion of the remaining `ref_time` to consume during `on_idle`. 

   `1.0` is mapped to `100%`. Must be at most [`crate::RESOURCE_HARD_LIMIT`]. Setting this to  over `1.0` could stall the chain. 
 
### length(): `u64`
- **interface**: `api.query.glutton.length`
- **summary**:    The proportion of the `block length` to consume on each block. 

   `1.0` is mapped to `100%`. Must be at most [`crate::RESOURCE_HARD_LIMIT`]. Setting this to  over `1.0` could stall the chain. 
 
### storage(): `u64`
- **interface**: `api.query.glutton.storage`
- **summary**:    The proportion of the remaining `proof_size` to consume during `on_idle`. 

   `1.0` is mapped to `100%`. Must be at most [`crate::RESOURCE_HARD_LIMIT`]. Setting this to  over `1.0` could stall the chain. 
 
### trashData(`u32`): `Option<[u8;1024]>`
- **interface**: `api.query.glutton.trashData`
- **summary**:    Storage map used for wasting proof size. 

   It contains no meaningful data - hence the name "Trash". The maximal number of entries is  set to 65k, which is just below the next jump at 16^4. This is important to reduce the proof  size benchmarking overestimate. The assumption here is that we won't have more than 65k *  1KiB = 65MiB of proof size wasting in practice. However, this limit is not enforced, so the  pallet would also work out of the box with more entries, but its benchmarked proof weight  would possibly be underestimated in that case. 
 
### trashDataCount(): `u32`
- **interface**: `api.query.glutton.trashDataCount`
- **summary**:    The current number of entries in `TrashData`. 

___


## grandpa
 
### authorities(): `Vec<(SpConsensusGrandpaAppPublic,u64)>`
- **interface**: `api.query.grandpa.authorities`
- **summary**:    The current list of authorities. 
 
### currentSetId(): `u64`
- **interface**: `api.query.grandpa.currentSetId`
- **summary**:    The number of changes (both in terms of keys and underlying economic responsibilities)  in the "set" of Grandpa validators from genesis. 
 
### nextForced(): `Option<u32>`
- **interface**: `api.query.grandpa.nextForced`
- **summary**:    next block number where we can force a change. 
 
### pendingChange(): `Option<PalletGrandpaStoredPendingChange>`
- **interface**: `api.query.grandpa.pendingChange`
- **summary**:    Pending change: (signaled at, scheduled change). 
 
### setIdSession(`u64`): `Option<u32>`
- **interface**: `api.query.grandpa.setIdSession`
- **summary**:    A mapping from grandpa set ID to the index of the *most recent* session for which its  members were responsible. 

   This is only used for validating equivocation proofs. An equivocation proof must  contains a key-ownership proof for a given session, therefore we need a way to tie  together sessions and GRANDPA set ids, i.e. we need to validate that a validator  was the owner of a given key on a given session, and what the active set ID was  during that session. 

   TWOX-NOTE: `SetId` is not under user control. 
 
### stalled(): `Option<(u32,u32)>`
- **interface**: `api.query.grandpa.stalled`
- **summary**:    `true` if we are currently stalled. 
 
### state(): `PalletGrandpaStoredState`
- **interface**: `api.query.grandpa.state`
- **summary**:    State of the current authority set. 

___


## historical
 
### historicalSessions(`u32`): `Option<(H256,u32)>`
- **interface**: `api.query.historical.historicalSessions`
- **summary**:    Mapping from historical session indices to session-data root hash and validator count. 
 
### storedRange(): `Option<(u32,u32)>`
- **interface**: `api.query.historical.storedRange`
- **summary**:    The range of historical sessions we store. [first, last) 

___


## identity
 
### accountOfUsername(`Bytes`): `Option<AccountId32>`
- **interface**: `api.query.identity.accountOfUsername`
- **summary**:    Reverse lookup from `username` to the `AccountId` that has registered it. The value should  be a key in the `IdentityOf` map, but it may not if the user has cleared their identity. 

   Multiple usernames may map to the same `AccountId`, but `IdentityOf` will only map to one  primary username. 
 
### identityOf(`AccountId32`): `Option<(PalletIdentityRegistration,Option<Bytes>)>`
- **interface**: `api.query.identity.identityOf`
- **summary**:    Information that is pertinent to identify the entity behind an account. First item is the  registration, second is the account's primary username. 

   TWOX-NOTE: OK ― `AccountId` is a secure hash. 
 
### pendingUsernames(`Bytes`): `Option<(AccountId32,u32)>`
- **interface**: `api.query.identity.pendingUsernames`
- **summary**:    Usernames that an authority has granted, but that the account controller has not confirmed  that they want it. Used primarily in cases where the `AccountId` cannot provide a signature  because they are a pure proxy, multisig, etc. In order to confirm it, they should call  [`Call::accept_username`]. 

   First tuple item is the account and second is the acceptance deadline. 
 
### registrars(): `Vec<Option<PalletIdentityRegistrarInfo>>`
- **interface**: `api.query.identity.registrars`
- **summary**:    The set of registrars. Not expected to get very big as can only be added through a  special origin (likely a council motion). 

   The index into this can be cast to `RegistrarIndex` to get a valid value. 
 
### subsOf(`AccountId32`): `(u128,Vec<AccountId32>)`
- **interface**: `api.query.identity.subsOf`
- **summary**:    Alternative "sub" identities of this account. 

   The first item is the deposit, the second is a vector of the accounts. 

   TWOX-NOTE: OK ― `AccountId` is a secure hash. 
 
### superOf(`AccountId32`): `Option<(AccountId32,Data)>`
- **interface**: `api.query.identity.superOf`
- **summary**:    The super-identity of an alternative "sub" identity together with its name, within that  context. If the account is not some other account's sub-identity, then just `None`. 
 
### usernameAuthorities(`AccountId32`): `Option<PalletIdentityAuthorityProperties>`
- **interface**: `api.query.identity.usernameAuthorities`
- **summary**:    A map of the accounts who are authorized to grant usernames. 

___


## imOnline
 
### authoredBlocks(`u32, AccountId32`): `u32`
- **interface**: `api.query.imOnline.authoredBlocks`
- **summary**:    For each session index, we keep a mapping of `ValidatorId<T>` to the  number of blocks authored by the given authority. 
 
### heartbeatAfter(): `u32`
- **interface**: `api.query.imOnline.heartbeatAfter`
- **summary**:    The block number after which it's ok to send heartbeats in the current  session. 

   At the beginning of each session we set this to a value that should fall  roughly in the middle of the session duration. The idea is to first wait for  the validators to produce a block in the current session, so that the  heartbeat later on will not be necessary. 

   This value will only be used as a fallback if we fail to get a proper session  progress estimate from `NextSessionRotation`, as those estimates should be  more accurate then the value we calculate for `HeartbeatAfter`. 
 
### keys(): `Vec<PalletImOnlineSr25519AppSr25519Public>`
- **interface**: `api.query.imOnline.keys`
- **summary**:    The current set of keys that may issue a heartbeat. 
 
### receivedHeartbeats(`u32, u32`): `Option<bool>`
- **interface**: `api.query.imOnline.receivedHeartbeats`
- **summary**:    For each session index, we keep a mapping of `SessionIndex` and `AuthIndex`. 

___


## indices
 
### accounts(`u32`): `Option<(AccountId32,u128,bool)>`
- **interface**: `api.query.indices.accounts`
- **summary**:    The lookup from index to account. 

___


## lottery
 
### callIndices(): `Vec<(u8,u8)>`
- **interface**: `api.query.lottery.callIndices`
- **summary**:    The calls stored in this pallet to be used in an active lottery if configured  by `Config::ValidateCall`. 
 
### lottery(): `Option<PalletLotteryLotteryConfig>`
- **interface**: `api.query.lottery.lottery`
- **summary**:    The configuration for the current lottery. 
 
### lotteryIndex(): `u32`
- **interface**: `api.query.lottery.lotteryIndex`
 
### participants(`AccountId32`): `(u32,Vec<(u8,u8)>)`
- **interface**: `api.query.lottery.participants`
- **summary**:    Users who have purchased a ticket. (Lottery Index, Tickets Purchased) 
 
### tickets(`u32`): `Option<AccountId32>`
- **interface**: `api.query.lottery.tickets`
- **summary**:    Each ticket's owner. 

   May have residual storage from previous lotteries. Use `TicketsCount` to see which ones  are actually valid ticket mappings. 
 
### ticketsCount(): `u32`
- **interface**: `api.query.lottery.ticketsCount`
- **summary**:    Total number of tickets sold. 

___


## messageQueue
 
### bookStateFor(`u32`): `PalletMessageQueueBookState`
- **interface**: `api.query.messageQueue.bookStateFor`
- **summary**:    The index of the first and last (non-empty) pages. 
 
### pages(`u32, u32`): `Option<PalletMessageQueuePage>`
- **interface**: `api.query.messageQueue.pages`
- **summary**:    The map of page indices to pages. 
 
### serviceHead(): `Option<u32>`
- **interface**: `api.query.messageQueue.serviceHead`
- **summary**:    The origin at which we should begin servicing. 

___


## mixnet
 
### currentSessionIndex(): `u32`
- **interface**: `api.query.mixnet.currentSessionIndex`
- **summary**:    Index of the current session. This may be offset relative to the session index tracked by  eg `pallet_session`; mixnet session indices are independent. 
 
### currentSessionStartBlock(): `u32`
- **interface**: `api.query.mixnet.currentSessionStartBlock`
- **summary**:    Block in which the current session started. 
 
### mixnodes(`u32, u32`): `Option<PalletMixnetBoundedMixnode>`
- **interface**: `api.query.mixnet.mixnodes`
- **summary**:    Mixnode sets by session index. Only the mixnode sets for the previous, current, and next  sessions are kept; older sets are discarded. 

   The mixnodes in each set are keyed by authority index so we can easily check if an  authority has registered a mixnode. The authority indices should only be used during  registration; the authority indices for the very first session are made up. 
 
### nextAuthorityIds(`u32`): `Option<SpMixnetAppPublic>`
- **interface**: `api.query.mixnet.nextAuthorityIds`
- **summary**:    Authority list for the next session. 

___


## mmr
 
### nodes(`u64`): `Option<H256>`
- **interface**: `api.query.mmr.nodes`
- **summary**:    Hashes of the nodes in the MMR. 

   Note this collection only contains MMR peaks, the inner nodes (and leaves)  are pruned and only stored in the Offchain DB. 
 
### numberOfLeaves(): `u64`
- **interface**: `api.query.mmr.numberOfLeaves`
- **summary**:    Current size of the MMR (number of leaves). 
 
### rootHash(): `H256`
- **interface**: `api.query.mmr.rootHash`
- **summary**:    Latest MMR Root hash. 

___


## mmrLeaf
 
### beefyAuthorities(): `SpConsensusBeefyMmrBeefyAuthoritySet`
- **interface**: `api.query.mmrLeaf.beefyAuthorities`
- **summary**:    Details of current BEEFY authority set. 
 
### beefyNextAuthorities(): `SpConsensusBeefyMmrBeefyAuthoritySet`
- **interface**: `api.query.mmrLeaf.beefyNextAuthorities`
- **summary**:    Details of next BEEFY authority set. 

   This storage entry is used as cache for calls to `update_beefy_next_authority_set`. 

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


## nis
 
### queues(`u32`): `Vec<PalletNisBid>`
- **interface**: `api.query.nis.queues`
- **summary**:    The queues of bids. Indexed by duration (in `Period`s). 
 
### queueTotals(): `Vec<(u32,u128)>`
- **interface**: `api.query.nis.queueTotals`
- **summary**:    The totals of items and balances within each queue. Saves a lot of storage reads in the  case of sparsely packed queues. 

   The vector is indexed by duration in `Period`s, offset by one, so information on the queue  whose duration is one `Period` would be storage `0`. 
 
### receipts(`u32`): `Option<PalletNisReceiptRecord>`
- **interface**: `api.query.nis.receipts`
- **summary**:    The currently outstanding receipts, indexed according to the order of creation. 
 
### summary(): `PalletNisSummaryRecord`
- **interface**: `api.query.nis.summary`
- **summary**:    Summary information over the general state. 

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


## offences
 
### concurrentReportsIndex(`[u8;16], Bytes`): `Vec<H256>`
- **interface**: `api.query.offences.concurrentReportsIndex`
- **summary**:    A vector of reports of the same kind that happened at the same time slot. 
 
### reports(`H256`): `Option<SpStakingOffenceOffenceDetails>`
- **interface**: `api.query.offences.reports`
- **summary**:    The primary structure that holds all offence records keyed by report identifiers. 

___


## palletExampleMbms
 
### myMap(`u32`): `Option<u64>`
- **interface**: `api.query.palletExampleMbms.myMap`
- **summary**:    Define a storage item to illustrate multi-block migrations. 

___


## parameters
 
### parameters(`KitchensinkRuntimeRuntimeParametersKey`): `Option<KitchensinkRuntimeRuntimeParametersValue>`
- **interface**: `api.query.parameters.parameters`
- **summary**:    Stored parameters. 

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


## pov
 
### boundedValue(): `Option<Bytes>`
- **interface**: `api.query.pov.boundedValue`
- **summary**:    A value with a MEL bound of 32 byte. 
 
### doubleMap1M(`u32, u32`): `Option<u32>`
- **interface**: `api.query.pov.doubleMap1M`
 
### largeValue(): `Option<Bytes>`
- **interface**: `api.query.pov.largeValue`
- **summary**:    4MiB value. 
 
### largeValue2(): `Option<Bytes>`
- **interface**: `api.query.pov.largeValue2`
 
### map16M(`u32`): `Option<u32>`
- **interface**: `api.query.pov.map16M`
- **summary**:    A map with a maximum of 16M entries. 
 
### map1M(`u32`): `Option<u32>`
- **interface**: `api.query.pov.map1M`
- **summary**:    A map with a maximum of 1M entries. 
 
### unboundedMap(`u32`): `Option<Vec<u32>>`
- **interface**: `api.query.pov.unboundedMap`
 
### unboundedMap2(`u32`): `Option<Vec<u32>>`
- **interface**: `api.query.pov.unboundedMap2`
 
### unboundedMapTwox(`u32`): `Option<Vec<u32>>`
- **interface**: `api.query.pov.unboundedMapTwox`
 
### unboundedValue(): `Option<Bytes>`
- **interface**: `api.query.pov.unboundedValue`
- **summary**:    A value without a MEL bound. 
 
### value(): `Option<u32>`
- **interface**: `api.query.pov.value`
 
### value2(): `Option<u32>`
- **interface**: `api.query.pov.value2`

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
 
### proxies(`AccountId32`): `(Vec<PalletProxyProxyDefinition>,u128)`
- **interface**: `api.query.proxy.proxies`
- **summary**:    The set of account proxies. Maps the account which has delegated to the accounts  which are being delegated to, together with the amount held on deposit. 

___


## randomnessCollectiveFlip
 
### randomMaterial(): `Vec<H256>`
- **interface**: `api.query.randomnessCollectiveFlip.randomMaterial`
- **summary**:    Series of block headers from the last 81 blocks that acts as random seed material. This  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of  the oldest hash. 

___


## rankedCollective
 
### idToIndex(`u16, AccountId32`): `Option<u32>`
- **interface**: `api.query.rankedCollective.idToIndex`
- **summary**:    The index of each ranks's member into the group of members who have at least that rank. 
 
### indexToId(`u16, u32`): `Option<AccountId32>`
- **interface**: `api.query.rankedCollective.indexToId`
- **summary**:    The members in the collective by index. All indices in the range `0..MemberCount` will  return `Some`, however a member's index is not guaranteed to remain unchanged over time. 
 
### memberCount(`u16`): `u32`
- **interface**: `api.query.rankedCollective.memberCount`
- **summary**:    The number of members in the collective who have at least the rank according to the index  of the vec. 
 
### members(`AccountId32`): `Option<PalletRankedCollectiveMemberRecord>`
- **interface**: `api.query.rankedCollective.members`
- **summary**:    The current members of the collective. 
 
### voting(`u32, AccountId32`): `Option<PalletRankedCollectiveVoteRecord>`
- **interface**: `api.query.rankedCollective.voting`
- **summary**:    Votes on a given proposal, if it is ongoing. 
 
### votingCleanup(`u32`): `Option<Bytes>`
- **interface**: `api.query.rankedCollective.votingCleanup`

___


## rankedPolls
 
### decidingCount(`u16`): `u32`
- **interface**: `api.query.rankedPolls.decidingCount`
- **summary**:    The number of referenda being decided currently. 
 
### metadataOf(`u32`): `Option<H256>`
- **interface**: `api.query.rankedPolls.metadataOf`
- **summary**:    The metadata is a general information concerning the referendum.  The `Hash` refers to the preimage of the `Preimages` provider which can be a JSON  dump or IPFS hash of a JSON file. 

   Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)  large preimages. 
 
### referendumCount(): `u32`
- **interface**: `api.query.rankedPolls.referendumCount`
- **summary**:    The next free referendum index, aka the number of referenda started so far. 
 
### referendumInfoFor(`u32`): `Option<PalletReferendaReferendumInfoRankedCollectiveTally>`
- **interface**: `api.query.rankedPolls.referendumInfoFor`
- **summary**:    Information concerning any given referendum. 
 
### trackQueue(`u16`): `Vec<(u32,u32)>`
- **interface**: `api.query.rankedPolls.trackQueue`
- **summary**:    The sorted list of referenda ready to be decided but not yet being decided, ordered by  conviction-weighted approvals. 

   This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`. 

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
 
### referendumInfoFor(`u32`): `Option<PalletReferendaReferendumInfoConvictionVotingTally>`
- **interface**: `api.query.referenda.referendumInfoFor`
- **summary**:    Information concerning any given referendum. 
 
### trackQueue(`u16`): `Vec<(u32,u128)>`
- **interface**: `api.query.referenda.trackQueue`
- **summary**:    The sorted list of referenda ready to be decided but not yet being decided, ordered by  conviction-weighted approvals. 

   This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`. 

___


## safeMode
 
### deposits(`AccountId32, u32`): `Option<u128>`
- **interface**: `api.query.safeMode.deposits`
- **summary**:    Holds the reserve that was taken from an account at a specific block number. 

   This helps governance to have an overview of outstanding deposits that should be returned or  slashed. 
 
### enteredUntil(): `Option<u32>`
- **interface**: `api.query.safeMode.enteredUntil`
- **summary**:    Contains the last block number that the safe-mode will remain entered in. 

   Set to `None` when safe-mode is exited. 

   Safe-mode is automatically exited when the current block number exceeds this value. 

___


## salary
 
### claimant(`AccountId32`): `Option<PalletSalaryClaimantStatus>`
- **interface**: `api.query.salary.claimant`
- **summary**:    The status of a claimant. 
 
### status(): `Option<PalletSalaryStatusType>`
- **interface**: `api.query.salary.status`
- **summary**:    The overall status of the system. 

___


## scheduler
 
### agenda(`u32`): `Vec<Option<PalletSchedulerScheduled>>`
- **interface**: `api.query.scheduler.agenda`
- **summary**:    Items to be executed, indexed by the block number that they should be executed on. 
 
### incompleteSince(): `Option<u32>`
- **interface**: `api.query.scheduler.incompleteSince`
 
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
 
### disabledValidators(): `Vec<u32>`
- **interface**: `api.query.session.disabledValidators`
- **summary**:    Indices of disabled validators. 

   The vec is always kept sorted so that we can find whether a given validator is  disabled using binary search. It gets cleared when `on_session_ending` returns  a new set of identities. 
 
### keyOwner(`(SpCoreCryptoKeyTypeId,Bytes)`): `Option<AccountId32>`
- **interface**: `api.query.session.keyOwner`
- **summary**:    The owner of a key. The key is the `KeyTypeId` + the encoded key. 
 
### nextKeys(`AccountId32`): `Option<KitchensinkRuntimeSessionKeys>`
- **interface**: `api.query.session.nextKeys`
- **summary**:    The next session keys for a validator. 
 
### queuedChanged(): `bool`
- **interface**: `api.query.session.queuedChanged`
- **summary**:    True if the underlying economic identities or weighting behind the validators  has changed in the queued validator set. 
 
### queuedKeys(): `Vec<(AccountId32,KitchensinkRuntimeSessionKeys)>`
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
 
### nextHead(): `Option<PalletSocietyIntakeRecord>`
- **interface**: `api.query.society.nextHead`
- **summary**:    At the end of the claim period, this contains the most recently approved members (along with  their bid and round ID) who is from the most recent round with the lowest bid. They will  become the new `Head`. 
 
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
 
### activeEra(): `Option<PalletStakingActiveEraInfo>`
- **interface**: `api.query.staking.activeEra`
- **summary**:    The active era information, it holds index and start. 

   The active era is the era being currently rewarded. Validator set of this era must be  equal to [`SessionInterface::validators`]. 
 
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
- **summary**:    The current era index. 

   This is the latest planned era, depending on how the Session pallet queues the validator  set, it might be active or not. 
 
### currentPlannedSession(): `u32`
- **interface**: `api.query.staking.currentPlannedSession`
- **summary**:    The last planned session scheduled by the session pallet. 

   This is basically in sync with the call to [`pallet_session::SessionManager::new_session`]. 
 
### disabledValidators(): `Vec<u32>`
- **interface**: `api.query.staking.disabledValidators`
- **summary**:    Indices of validators that have offended in the active era. The offenders are disabled for a  whole era. For this reason they are kept here - only staking pallet knows about eras. The  implementor of [`DisablingStrategy`] defines if a validator should be disabled which  implicitly means that the implementor also controls the max number of disabled validators. 

   The vec is always kept sorted so that we can find whether a given validator has previously  offended using binary search. 
 
### erasRewardPoints(`u32`): `PalletStakingEraRewardPoints`
- **interface**: `api.query.staking.erasRewardPoints`
- **summary**:    Rewards for the last [`Config::HistoryDepth`] eras.  If reward hasn't been set or has been removed then 0 reward is returned. 
 
### erasStakers(`u32, AccountId32`): `SpStakingExposure`
- **interface**: `api.query.staking.erasStakers`
- **summary**:    Exposure of validator at era. 

   This is keyed first by the era index to allow bulk deletion and then the stash account. 

   Is it removed after [`Config::HistoryDepth`] eras.  If stakers hasn't been set or has been removed then empty exposure is returned. 

   Note: Deprecated since v14. Use `EraInfo` instead to work with exposures. 
 
### erasStakersClipped(`u32, AccountId32`): `SpStakingExposure`
- **interface**: `api.query.staking.erasStakersClipped`
- **summary**:    Clipped Exposure of validator at era. 

   Note: This is deprecated, should be used as read-only and will be removed in the future.  New `Exposure`s are stored in a paged manner in `ErasStakersPaged` instead. 

   This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the  `T::MaxExposurePageSize` biggest stakers.  (Note: the field `total` and `own` of the exposure remains unchanged).  This is used to limit the i/o cost for the nominator payout. 

   This is keyed fist by the era index to allow bulk deletion and then the stash account. 

   It is removed after [`Config::HistoryDepth`] eras.  If stakers hasn't been set or has been removed then empty exposure is returned. 

   Note: Deprecated since v14. Use `EraInfo` instead to work with exposures. 
 
### erasStakersOverview(`u32, AccountId32`): `Option<SpStakingPagedExposureMetadata>`
- **interface**: `api.query.staking.erasStakersOverview`
- **summary**:    Summary of validator exposure at a given era. 

   This contains the total stake in support of the validator and their own stake. In addition,  it can also be used to get the number of nominators backing this validator and the number of  exposure pages they are divided into. The page count is useful to determine the number of  pages of rewards that needs to be claimed. 

   This is keyed first by the era index to allow bulk deletion and then the stash account.  Should only be accessed through `EraInfo`. 

   Is it removed after [`Config::HistoryDepth`] eras.  If stakers hasn't been set or has been removed then empty overview is returned. 
 
### erasStakersPaged(`u32, AccountId32, u32`): `Option<SpStakingExposurePage>`
- **interface**: `api.query.staking.erasStakersPaged`
- **summary**:    Paginated exposure of a validator at given era. 

   This is keyed first by the era index to allow bulk deletion, then stash account and finally  the page. Should only be accessed through `EraInfo`. 

   This is cleared after [`Config::HistoryDepth`] eras. 
 
### erasStartSessionIndex(`u32`): `Option<u32>`
- **interface**: `api.query.staking.erasStartSessionIndex`
- **summary**:    The session index at which the era start for the last [`Config::HistoryDepth`] eras. 

   Note: This tracks the starting session (i.e. session index when era start being active)  for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`. 
 
### erasTotalStake(`u32`): `u128`
- **interface**: `api.query.staking.erasTotalStake`
- **summary**:    The total amount staked for the last [`Config::HistoryDepth`] eras.  If total hasn't been set or has been removed then 0 stake is returned. 
 
### erasValidatorPrefs(`u32, AccountId32`): `PalletStakingValidatorPrefs`
- **interface**: `api.query.staking.erasValidatorPrefs`
- **summary**:    Similar to `ErasStakers`, this holds the preferences of validators. 

   This is keyed first by the era index to allow bulk deletion and then the stash account. 

   Is it removed after [`Config::HistoryDepth`] eras. 
 
### erasValidatorReward(`u32`): `Option<u128>`
- **interface**: `api.query.staking.erasValidatorReward`
- **summary**:    The total validator era payout for the last [`Config::HistoryDepth`] eras. 

   Eras that haven't finished yet or has been removed doesn't have reward. 
 
### forceEra(): `PalletStakingForcing`
- **interface**: `api.query.staking.forceEra`
- **summary**:    Mode of era forcing. 
 
### invulnerables(): `Vec<AccountId32>`
- **interface**: `api.query.staking.invulnerables`
- **summary**:    Any validators that may never be slashed or forcibly kicked. It's a Vec since they're  easy to initialize and the performance hit is minimal (we expect no more than four  invulnerables) and restricted to testnets. 
 
### ledger(`AccountId32`): `Option<PalletStakingStakingLedger>`
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
 
### minimumValidatorCount(): `u32`
- **interface**: `api.query.staking.minimumValidatorCount`
- **summary**:    Minimum number of staking participants before emergency conditions are imposed. 
 
### minNominatorBond(): `u128`
- **interface**: `api.query.staking.minNominatorBond`
- **summary**:    The minimum active bond to become and maintain the role of a nominator. 
 
### minValidatorBond(): `u128`
- **interface**: `api.query.staking.minValidatorBond`
- **summary**:    The minimum active bond to become and maintain the role of a validator. 
 
### nominators(`AccountId32`): `Option<PalletStakingNominations>`
- **interface**: `api.query.staking.nominators`
- **summary**:    The map from nominator stash key to their nomination preferences, namely the validators that  they wish to support. 

   Note that the keys of this storage map might become non-decodable in case the  account's [`NominationsQuota::MaxNominations`] configuration is decreased.  In this rare case, these nominators  are still existent in storage, their key is correct and retrievable (i.e. `contains_key`  indicates that they exist), but their value cannot be decoded. Therefore, the non-decodable  nominators will effectively not-exist, until they re-submit their preferences such that it  is within the bounds of the newly set `Config::MaxNominations`. 

   This implies that `::iter_keys().count()` and `::iter().count()` might return different  values for this map. Moreover, the main `::count()` is aligned with the former, namely the  number of keys that exist. 

   Lastly, if any of the nominators become non-decodable, they can be chilled immediately via  [`Call::chill_other`] dispatchable by anyone. 

   TWOX-NOTE: SAFE since `AccountId` is a secure hash. 
 
### nominatorSlashInEra(`u32, AccountId32`): `Option<u128>`
- **interface**: `api.query.staking.nominatorSlashInEra`
- **summary**:    All slashing events on nominators, mapped by era to the highest slash value of the era. 
 
### payee(`AccountId32`): `Option<PalletStakingRewardDestination>`
- **interface**: `api.query.staking.payee`
- **summary**:    Where the reward payment should be made. Keyed by stash. 

   TWOX-NOTE: SAFE since `AccountId` is a secure hash. 
 
### slashingSpans(`AccountId32`): `Option<PalletStakingSlashingSlashingSpans>`
- **interface**: `api.query.staking.slashingSpans`
- **summary**:    Slashing spans for stash accounts. 
 
### slashRewardFraction(): `Perbill`
- **interface**: `api.query.staking.slashRewardFraction`
- **summary**:    The percentage of the slash that is distributed to reporters. 

   The rest of the slashed value is handled by the `Slash`. 
 
### spanSlash(`(AccountId32,u32)`): `PalletStakingSlashingSpanRecord`
- **interface**: `api.query.staking.spanSlash`
- **summary**:    Records information about the maximum slash of a stash within a slashing span,  as well as how much reward has been paid out. 
 
### unappliedSlashes(`u32`): `Vec<PalletStakingUnappliedSlash>`
- **interface**: `api.query.staking.unappliedSlashes`
- **summary**:    All unapplied slashes that are queued for later. 
 
### validatorCount(): `u32`
- **interface**: `api.query.staking.validatorCount`
- **summary**:    The ideal number of active validators. 
 
### validators(`AccountId32`): `PalletStakingValidatorPrefs`
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
 
### extrinsicIndex(): `u32`
- **interface**: `api.query.substrate.extrinsicIndex`
- **summary**:    Current extrinsic index (u32) is stored under this key. 
 
### heapPages(): `u64`
- **interface**: `api.query.substrate.heapPages`
- **summary**:    Number of wasm linear memory pages required for execution of the runtime. 
 
### intrablockEntropy(): `[u8;32]`
- **interface**: `api.query.substrate.intrablockEntropy`
- **summary**:    Current intra-block entropy (a universally unique `[u8; 32]` value) is stored here. 

___


## sudo
 
### key(): `Option<AccountId32>`
- **interface**: `api.query.sudo.key`
- **summary**:    The `AccountId` of the sudo key. 

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


## tasksExample
 
### numbers(`u32`): `Option<u32>`
- **interface**: `api.query.tasksExample.numbers`
- **summary**:    Numbers to be added into the total. 
 
### total(): `(u32,u32)`
- **interface**: `api.query.tasksExample.total`
- **summary**:    Some running total. 

___


## technicalCommittee
 
### members(): `Vec<AccountId32>`
- **interface**: `api.query.technicalCommittee.members`
- **summary**:    The current members of the collective. This is stored sorted (just by value). 
 
### prime(): `Option<AccountId32>`
- **interface**: `api.query.technicalCommittee.prime`
- **summary**:    The prime member that helps determine the default vote behavior in case of abstentions. 
 
### proposalCount(): `u32`
- **interface**: `api.query.technicalCommittee.proposalCount`
- **summary**:    Proposals so far. 
 
### proposalOf(`H256`): `Option<Call>`
- **interface**: `api.query.technicalCommittee.proposalOf`
- **summary**:    Actual proposal for a given hash, if it's current. 
 
### proposals(): `Vec<H256>`
- **interface**: `api.query.technicalCommittee.proposals`
- **summary**:    The hashes of the active proposals. 
 
### voting(`H256`): `Option<PalletCollectiveVotes>`
- **interface**: `api.query.technicalCommittee.voting`
- **summary**:    Votes on a given proposal, if it is ongoing. 

___


## technicalMembership
 
### members(): `Vec<AccountId32>`
- **interface**: `api.query.technicalMembership.members`
- **summary**:    The current membership, stored as an ordered Vec. 
 
### prime(): `Option<AccountId32>`
- **interface**: `api.query.technicalMembership.prime`
- **summary**:    The current prime member, if one exists. 

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


## tips
 
### reasons(`H256`): `Option<Bytes>`
- **interface**: `api.query.tips.reasons`
- **summary**:    Simple preimage lookup from the reason's hash to the original data. Again, has an  insecure enumerable hash since the key is guaranteed to be the result of a secure hash. 
 
### tips(`H256`): `Option<PalletTipsOpenTip>`
- **interface**: `api.query.tips.tips`
- **summary**:    TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.  This has the insecure enumerable hash function since the key itself is already  guaranteed to be a secure hash. 

___


## transactionPayment
 
### nextFeeMultiplier(): `u128`
- **interface**: `api.query.transactionPayment.nextFeeMultiplier`
 
### storageVersion(): `PalletTransactionPaymentReleases`
- **interface**: `api.query.transactionPayment.storageVersion`

___


## transactionStorage
 
### blockTransactions(): `Vec<PalletTransactionStorageTransactionInfo>`
- **interface**: `api.query.transactionStorage.blockTransactions`
 
### byteFee(): `Option<u128>`
- **interface**: `api.query.transactionStorage.byteFee`
- **summary**:    Storage fee per byte. 
 
### chunkCount(`u32`): `u32`
- **interface**: `api.query.transactionStorage.chunkCount`
- **summary**:    Count indexed chunks for each block. 
 
### entryFee(): `Option<u128>`
- **interface**: `api.query.transactionStorage.entryFee`
- **summary**:    Storage fee per transaction. 
 
### proofChecked(): `bool`
- **interface**: `api.query.transactionStorage.proofChecked`
- **summary**:    Was the proof checked in this block? 
 
### storagePeriod(): `u32`
- **interface**: `api.query.transactionStorage.storagePeriod`
- **summary**:    Storage period for data in blocks. Should match `sp_storage_proof::DEFAULT_STORAGE_PERIOD`  for block authoring. 
 
### transactions(`u32`): `Option<Vec<PalletTransactionStorageTransactionInfo>>`
- **interface**: `api.query.transactionStorage.transactions`
- **summary**:    Collection of transaction metadata by block number. 

___


## treasury
 
### approvals(): `Vec<u32>`
- **interface**: `api.query.treasury.approvals`
- **summary**:    Proposal indices that have been approved but not yet awarded. 
 
### deactivated(): `u128`
- **interface**: `api.query.treasury.deactivated`
- **summary**:    The amount which has been reported as inactive to Currency. 
 
### proposalCount(): `u32`
- **interface**: `api.query.treasury.proposalCount`
- **summary**:    Number of proposals that have been made. 
 
### proposals(`u32`): `Option<PalletTreasuryProposal>`
- **interface**: `api.query.treasury.proposals`
- **summary**:    Proposals that have been made. 
 
### spendCount(): `u32`
- **interface**: `api.query.treasury.spendCount`
- **summary**:    The count of spends that have been made. 
 
### spends(`u32`): `Option<PalletTreasurySpendStatus>`
- **interface**: `api.query.treasury.spends`
- **summary**:    Spends that have been approved and being processed. 

___


## txPause
 
### pausedCalls(`(Bytes,Bytes)`): `Option<Null>`
- **interface**: `api.query.txPause.pausedCalls`
- **summary**:    The set of calls that are explicitly paused. 

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

___


## whitelist
 
### whitelistedCall(`H256`): `Option<Null>`
- **interface**: `api.query.whitelist.whitelistedCall`
