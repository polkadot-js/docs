---
title: Storage
---

The following sections contain Storage methods are part of the default Kusama runtime. On the api, these are exposed via `api.query.<module>.<method>`. 

(NOTE: These were generated from a static/snapshot view of a recent default Kusama runtime. Some items may not be available in older nodes, or in any customized implementations.)

- **[auctions](#auctions)**

- **[authorship](#authorship)**

- **[babe](#babe)**

- **[balances](#balances)**

- **[bounties](#bounties)**

- **[childBounties](#childbounties)**

- **[claims](#claims)**

- **[configuration](#configuration)**

- **[convictionVoting](#convictionvoting)**

- **[crowdloan](#crowdloan)**

- **[dmp](#dmp)**

- **[electionProviderMultiPhase](#electionprovidermultiphase)**

- **[fastUnstake](#fastunstake)**

- **[fellowshipCollective](#fellowshipcollective)**

- **[fellowshipReferenda](#fellowshipreferenda)**

- **[grandpa](#grandpa)**

- **[hrmp](#hrmp)**

- **[identity](#identity)**

- **[imOnline](#imonline)**

- **[indices](#indices)**

- **[initializer](#initializer)**

- **[multisig](#multisig)**

- **[nis](#nis)**

- **[nisCounterpartBalances](#niscounterpartbalances)**

- **[nominationPools](#nominationpools)**

- **[offences](#offences)**

- **[paraInclusion](#parainclusion)**

- **[paraInherent](#parainherent)**

- **[paras](#paras)**

- **[paraScheduler](#parascheduler)**

- **[parasDisputes](#parasdisputes)**

- **[paraSessionInfo](#parasessioninfo)**

- **[parasShared](#parasshared)**

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

- **[substrate](#substrate)**

- **[system](#system)**

- **[timestamp](#timestamp)**

- **[transactionPayment](#transactionpayment)**

- **[treasury](#treasury)**

- **[ump](#ump)**

- **[vesting](#vesting)**

- **[voterList](#voterlist)**

- **[whitelist](#whitelist)**

- **[xcmPallet](#xcmpallet)**


___


## auctions
 
### auctionCounter(): `u32`
- **interface**: `api.query.auctions.auctionCounter`
- **summary**:    Number of auctions started so far. 
 
### auctionInfo(): `Option<(u32,u32)>`
- **interface**: `api.query.auctions.auctionInfo`
- **summary**:    Information relating to the current auction, if there is one. 

   The first item in the tuple is the lease period index that the first of the four  contiguous lease periods on auction is for. The second is the block number when the  auction will "begin to end", i.e. the first block of the Ending Period of the auction. 
 
### reservedAmounts(`(AccountId32,u32)`): `Option<u128>`
- **interface**: `api.query.auctions.reservedAmounts`
- **summary**:    Amounts currently reserved in the accounts of the bidders currently winning  (sub-)ranges. 
 
### winning(`u32`): `Option<[Option<(AccountId32,u32,u128)>;36]>`
- **interface**: `api.query.auctions.winning`
- **summary**:    The winning bids for each of the 10 ranges at each sample in the final Ending Period of  the current auction. The map's key is the 0-based index into the Sample Size. The  first sample of the ending period is 0; the last is `Sample Size - 1`. 

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
 
### freezes(`AccountId32`): `Vec<PalletBalancesIdAmount>`
- **interface**: `api.query.balances.freezes`
- **summary**:    Freeze locks on account balances. 
 
### holds(`AccountId32`): `Vec<{"id":"KusamaRuntimeRuntimeHoldReason","amount":"u128"}>`
- **interface**: `api.query.balances.holds`
- **summary**:    Holds on account balances. 
 
### inactiveIssuance(): `u128`
- **interface**: `api.query.balances.inactiveIssuance`
- **summary**:    The total units of outstanding deactivated balance in the system. 
 
### locks(`AccountId32`): `Vec<PalletBalancesBalanceLock>`
- **interface**: `api.query.balances.locks`
- **summary**:    Any liquidity locks on some account balances.  NOTE: Should only be accessed when setting, changing and freeing a lock. 
 
### reserves(`AccountId32`): `Vec<PalletBalancesReserveData>`
- **interface**: `api.query.balances.reserves`
- **summary**:    Named reserves on some account balances. 
 
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


## configuration
 
### activeConfig(): `PolkadotRuntimeParachainsConfigurationHostConfiguration`
- **interface**: `api.query.configuration.activeConfig`
- **summary**:    The active configuration for the current session. 
 
### bypassConsistencyCheck(): `bool`
- **interface**: `api.query.configuration.bypassConsistencyCheck`
- **summary**:    If this is set, then the configuration setters will bypass the consistency checks. This  is meant to be used only as the last resort. 
 
### pendingConfigs(): `Vec<(u32,PolkadotRuntimeParachainsConfigurationHostConfiguration)>`
- **interface**: `api.query.configuration.pendingConfigs`
- **summary**:    Pending configuration changes. 

   This is a list of configuration changes, each with a session index at which it should  be applied. 

   The list is sorted ascending by session index. Also, this list can only contain at most  2 items: for the next session and for the `scheduled_session`. 

___


## convictionVoting
 
### classLocksFor(`AccountId32`): `Vec<(u16,u128)>`
- **interface**: `api.query.convictionVoting.classLocksFor`
- **summary**:    The voting classes which have a non-zero lock requirement and the lock amounts which they  require. The actual amount locked on behalf of this pallet should always be the maximum of  this list. 
 
### votingFor(`AccountId32, u16`): `PalletConvictionVotingVoteVoting`
- **interface**: `api.query.convictionVoting.votingFor`
- **summary**:    All voting for a particular voter in a particular voting class. We store the balance for the  number of votes that we have recorded. 

___


## crowdloan
 
### endingsCount(): `u32`
- **interface**: `api.query.crowdloan.endingsCount`
- **summary**:    The number of auctions that have entered into their ending period so far. 
 
### funds(`u32`): `Option<PolkadotRuntimeCommonCrowdloanFundInfo>`
- **interface**: `api.query.crowdloan.funds`
- **summary**:    Info on all of the funds. 
 
### newRaise(): `Vec<u32>`
- **interface**: `api.query.crowdloan.newRaise`
- **summary**:    The funds that have had additional contributions during the last block. This is used  in order to determine which funds should submit new or updated bids. 
 
### nextFundIndex(): `u32`
- **interface**: `api.query.crowdloan.nextFundIndex`
- **summary**:    Tracker for the next available fund index 

___


## dmp
 
### downwardMessageQueueHeads(`u32`): `H256`
- **interface**: `api.query.dmp.downwardMessageQueueHeads`
- **summary**:    A mapping that stores the downward message queue MQC head for each para. 

   Each link in this chain has a form:  `(prev_head, B, H(M))`, where 

  - `prev_head`: is the previous head hash or zero if none.

  - `B`: is the relay-chain block number in which a message was appended.

  - `H(M)`: is the hash of the message being appended.
 
### downwardMessageQueues(`u32`): `Vec<PolkadotCorePrimitivesInboundDownwardMessage>`
- **interface**: `api.query.dmp.downwardMessageQueues`
- **summary**:    The downward messages addressed for a certain para. 

___


## electionProviderMultiPhase
 
### currentPhase(): `PalletElectionProviderMultiPhasePhase`
- **interface**: `api.query.electionProviderMultiPhase.currentPhase`
- **summary**:    Current phase. 
 
### desiredTargets(): `Option<u32>`
- **interface**: `api.query.electionProviderMultiPhase.desiredTargets`
- **summary**:    Desired number of targets to elect for this round. 

   Only exists when [`Snapshot`] is present. 
 
### minimumUntrustedScore(): `Option<SpNposElectionsElectionScore>`
- **interface**: `api.query.electionProviderMultiPhase.minimumUntrustedScore`
- **summary**:    The minimum score that each 'untrusted' solution must attain in order to be considered  feasible. 

   Can be set via `set_minimum_untrusted_score`. 
 
### queuedSolution(): `Option<PalletElectionProviderMultiPhaseReadySolution>`
- **interface**: `api.query.electionProviderMultiPhase.queuedSolution`
- **summary**:    Current best solution, signed or unsigned, queued to be returned upon `elect`. 
 
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

   This is created at the beginning of the signed phase and cleared upon calling `elect`. 
 
### snapshotMetadata(): `Option<PalletElectionProviderMultiPhaseSolutionOrSnapshotSize>`
- **interface**: `api.query.electionProviderMultiPhase.snapshotMetadata`
- **summary**:    The metadata of the [`RoundSnapshot`] 

   Only exists when [`Snapshot`] is present. 

___


## fastUnstake
 
### counterForQueue(): `u32`
- **interface**: `api.query.fastUnstake.counterForQueue`
- **summary**:    Counter for the related counted storage map 
 
### erasToCheckPerBlock(): `u32`
- **interface**: `api.query.fastUnstake.erasToCheckPerBlock`
- **summary**:    Number of eras to check per block. 

   If set to 0, this pallet does absolutely nothing. 

   Based on the amount of weight available at `on_idle`, up to this many eras of a single  nominator might be checked. 
 
### head(): `Option<PalletFastUnstakeUnstakeRequest>`
- **interface**: `api.query.fastUnstake.head`
- **summary**:    The current "head of the queue" being unstaked. 
 
### queue(`AccountId32`): `Option<u128>`
- **interface**: `api.query.fastUnstake.queue`
- **summary**:    The map of all accounts wishing to be unstaked. 

   Keeps track of `AccountId` wishing to unstake and it's corresponding deposit. 

   TWOX-NOTE: SAFE since `AccountId` is a secure hash. 

___


## fellowshipCollective
 
### idToIndex(`u16, AccountId32`): `Option<u32>`
- **interface**: `api.query.fellowshipCollective.idToIndex`
- **summary**:    The index of each ranks's member into the group of members who have at least that rank. 
 
### indexToId(`u16, u32`): `Option<AccountId32>`
- **interface**: `api.query.fellowshipCollective.indexToId`
- **summary**:    The members in the collective by index. All indices in the range `0..MemberCount` will  return `Some`, however a member's index is not guaranteed to remain unchanged over time. 
 
### memberCount(`u16`): `u32`
- **interface**: `api.query.fellowshipCollective.memberCount`
- **summary**:    The number of members in the collective who have at least the rank according to the index  of the vec. 
 
### members(`AccountId32`): `Option<PalletRankedCollectiveMemberRecord>`
- **interface**: `api.query.fellowshipCollective.members`
- **summary**:    The current members of the collective. 
 
### voting(`u32, AccountId32`): `Option<PalletRankedCollectiveVoteRecord>`
- **interface**: `api.query.fellowshipCollective.voting`
- **summary**:    Votes on a given proposal, if it is ongoing. 
 
### votingCleanup(`u32`): `Option<Bytes>`
- **interface**: `api.query.fellowshipCollective.votingCleanup`

___


## fellowshipReferenda
 
### decidingCount(`u16`): `u32`
- **interface**: `api.query.fellowshipReferenda.decidingCount`
- **summary**:    The number of referenda being decided currently. 
 
### metadataOf(`u32`): `Option<H256>`
- **interface**: `api.query.fellowshipReferenda.metadataOf`
- **summary**:    The metadata is a general information concerning the referendum.  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON  dump or IPFS hash of a JSON file. 

   Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)  large preimages. 
 
### referendumCount(): `u32`
- **interface**: `api.query.fellowshipReferenda.referendumCount`
- **summary**:    The next free referendum index, aka the number of referenda started so far. 
 
### referendumInfoFor(`u32`): `Option<PalletReferendaReferendumInfoRankedCollectiveTally>`
- **interface**: `api.query.fellowshipReferenda.referendumInfoFor`
- **summary**:    Information concerning any given referendum. 
 
### trackQueue(`u16`): `Vec<(u32,u32)>`
- **interface**: `api.query.fellowshipReferenda.trackQueue`
- **summary**:    The sorted list of referenda ready to be decided but not yet being decided, ordered by  conviction-weighted approvals. 

   This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`. 

___


## grandpa
 
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


## hrmp
 
### hrmpAcceptedChannelRequestCount(`u32`): `u32`
- **interface**: `api.query.hrmp.hrmpAcceptedChannelRequestCount`
- **summary**:    This mapping tracks how many open channel requests were accepted by a given recipient para.  Invariant: `HrmpOpenChannelRequests` should contain the same number of items `(_, X)` with  `confirmed` set to true, as the number of `HrmpAcceptedChannelRequestCount` for `X`. 
 
### hrmpChannelContents(`PolkadotParachainPrimitivesHrmpChannelId`): `Vec<PolkadotCorePrimitivesInboundHrmpMessage>`
- **interface**: `api.query.hrmp.hrmpChannelContents`
- **summary**:    Storage for the messages for each channel.  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`. 
 
### hrmpChannelDigests(`u32`): `Vec<(u32,Vec<u32>)>`
- **interface**: `api.query.hrmp.hrmpChannelDigests`
- **summary**:    Maintains a mapping that can be used to answer the question: What paras sent a message at  the given block number for a given receiver. Invariants: 

  - The inner `Vec<ParaId>` is never empty.

  - The inner `Vec<ParaId>` cannot store two same `ParaId`.

  - The outer vector is sorted ascending by block number and cannot store two items with the same block number. 
 
### hrmpChannels(`PolkadotParachainPrimitivesHrmpChannelId`): `Option<PolkadotRuntimeParachainsHrmpHrmpChannel>`
- **interface**: `api.query.hrmp.hrmpChannels`
- **summary**:    HRMP channel data associated with each para.  Invariant: 

  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
 
### hrmpCloseChannelRequests(`PolkadotParachainPrimitivesHrmpChannelId`): `Option<Null>`
- **interface**: `api.query.hrmp.hrmpCloseChannelRequests`
- **summary**:    A set of pending HRMP close channel requests that are going to be closed during the session  change. Used for checking if a given channel is registered for closure. 

   The set is accompanied by a list for iteration. 

   Invariant: 

  - There are no channels that exists in list but not in the set and vice versa.
 
### hrmpCloseChannelRequestsList(): `Vec<PolkadotParachainPrimitivesHrmpChannelId>`
- **interface**: `api.query.hrmp.hrmpCloseChannelRequestsList`
 
### hrmpEgressChannelsIndex(`u32`): `Vec<u32>`
- **interface**: `api.query.hrmp.hrmpEgressChannelsIndex`
 
### hrmpIngressChannelsIndex(`u32`): `Vec<u32>`
- **interface**: `api.query.hrmp.hrmpIngressChannelsIndex`
- **summary**:    Ingress/egress indexes allow to find all the senders and receivers given the opposite side.  I.e. 

   (a) ingress index allows to find all the senders for a given recipient.  (b) egress index allows to find all the recipients for a given sender. 

   Invariants: 

  - for each ingress index entry for `P` each item `I` in the index should present in `HrmpChannels` as `(I, P)`. 

  - for each egress index entry for `P` each item `E` in the index should present in `HrmpChannels` as `(P, E)`. 

  - there should be no other dangling channels in `HrmpChannels`.

  - the vectors are sorted.
 
### hrmpOpenChannelRequestCount(`u32`): `u32`
- **interface**: `api.query.hrmp.hrmpOpenChannelRequestCount`
- **summary**:    This mapping tracks how many open channel requests are initiated by a given sender para.  Invariant: `HrmpOpenChannelRequests` should contain the same number of items that has  `(X, _)` as the number of `HrmpOpenChannelRequestCount` for `X`. 
 
### hrmpOpenChannelRequests(`PolkadotParachainPrimitivesHrmpChannelId`): `Option<PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest>`
- **interface**: `api.query.hrmp.hrmpOpenChannelRequests`
- **summary**:    The set of pending HRMP open channel requests. 

   The set is accompanied by a list for iteration. 

   Invariant: 

  - There are no channels that exists in list but not in the set and vice versa.
 
### hrmpOpenChannelRequestsList(): `Vec<PolkadotParachainPrimitivesHrmpChannelId>`
- **interface**: `api.query.hrmp.hrmpOpenChannelRequestsList`
 
### hrmpWatermarks(`u32`): `Option<u32>`
- **interface**: `api.query.hrmp.hrmpWatermarks`
- **summary**:    The HRMP watermark associated with each para.  Invariant: 

  - each para `P` used here as a key should satisfy `Paras::is_valid_para(P)` within a session.

___


## identity
 
### identityOf(`AccountId32`): `Option<PalletIdentityRegistration>`
- **interface**: `api.query.identity.identityOf`
- **summary**:    Information that is pertinent to identify the entity behind an account. 

   TWOX-NOTE: OK ― `AccountId` is a secure hash. 
 
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
 
### receivedHeartbeats(`u32, u32`): `Option<WrapperOpaque<PalletImOnlineBoundedOpaqueNetworkState>>`
- **interface**: `api.query.imOnline.receivedHeartbeats`
- **summary**:    For each session index, we keep a mapping of `SessionIndex` and `AuthIndex` to  `WrapperOpaque<BoundedOpaqueNetworkState>`. 

___


## indices
 
### accounts(`u32`): `Option<(AccountId32,u128,bool)>`
- **interface**: `api.query.indices.accounts`
- **summary**:    The lookup from index to account. 

___


## initializer
 
### bufferedSessionChanges(): `Vec<PolkadotRuntimeParachainsInitializerBufferedSessionChange>`
- **interface**: `api.query.initializer.bufferedSessionChanges`
- **summary**:    Buffered session changes along with the block number at which they should be applied. 

   Typically this will be empty or one element long. Apart from that this item never hits  the storage. 

   However this is a `Vec` regardless to handle various edge cases that may occur at runtime  upgrade boundaries or if governance intervenes. 
 
### hasInitialized(): `Option<Null>`
- **interface**: `api.query.initializer.hasInitialized`
- **summary**:    Whether the parachains modules have been initialized within this block. 

   Semantically a `bool`, but this guarantees it should never hit the trie,  as this is cleared in `on_finalize` and Frame optimizes `None` values to be empty values. 

   As a `bool`, `set(false)` and `remove()` both lead to the next `get()` being false, but one of  them writes to the trie and one does not. This confusion makes `Option<()>` more suitable for  the semantics of this variable. 

___


## multisig
 
### multisigs(`AccountId32, [u8;32]`): `Option<PalletMultisigMultisig>`
- **interface**: `api.query.multisig.multisigs`
- **summary**:    The set of open multisig operations. 

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


## nisCounterpartBalances
 
### account(`AccountId32`): `PalletBalancesAccountData`
- **interface**: `api.query.nisCounterpartBalances.account`
- **summary**:    The Balances pallet example of storing the balance of an account. 

   #### Example 

   ```nocompile  impl pallet_balances::Config for Runtime {  type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>  }  ``` 

   You can also store the balance of an account in the `System` pallet. 

   #### Example 

   ```nocompile  impl pallet_balances::Config for Runtime {  type AccountStore = System  }  ``` 

   But this comes with tradeoffs, storing account balances in the system pallet stores  `frame_system` data alongside the account data contrary to storing account balances in the  `Balances` pallet, which uses a `StorageMap` to store balances data only.  NOTE: This is only used in the case that this pallet is used to store balances. 
 
### freezes(`AccountId32`): `Vec<PalletBalancesIdAmount>`
- **interface**: `api.query.nisCounterpartBalances.freezes`
- **summary**:    Freeze locks on account balances. 
 
### holds(`AccountId32`): `Vec<PalletBalancesIdAmount>`
- **interface**: `api.query.nisCounterpartBalances.holds`
- **summary**:    Holds on account balances. 
 
### inactiveIssuance(): `u128`
- **interface**: `api.query.nisCounterpartBalances.inactiveIssuance`
- **summary**:    The total units of outstanding deactivated balance in the system. 
 
### locks(`AccountId32`): `Vec<PalletBalancesBalanceLock>`
- **interface**: `api.query.nisCounterpartBalances.locks`
- **summary**:    Any liquidity locks on some account balances.  NOTE: Should only be accessed when setting, changing and freeing a lock. 
 
### reserves(`AccountId32`): `Vec<PalletBalancesReserveData>`
- **interface**: `api.query.nisCounterpartBalances.reserves`
- **summary**:    Named reserves on some account balances. 
 
### totalIssuance(): `u128`
- **interface**: `api.query.nisCounterpartBalances.totalIssuance`
- **summary**:    The total units issued in the system. 

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

   This is only used for slashing. In all other instances, the pool id is used, and the  accounts are deterministically derived from it. 
 
### rewardPools(`u32`): `Option<PalletNominationPoolsRewardPool>`
- **interface**: `api.query.nominationPools.rewardPools`
- **summary**:    Reward pools. This is where there rewards for each pool accumulate. When a members payout is  claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account. 
 
### subPoolsStorage(`u32`): `Option<PalletNominationPoolsSubPools>`
- **interface**: `api.query.nominationPools.subPoolsStorage`
- **summary**:    Groups of unbonding pools. Each group of unbonding pools belongs to a  bonded pool, hence the name sub-pools. Keyed by the bonded pools account. 

___


## offences
 
### concurrentReportsIndex(`[u8;16], Bytes`): `Vec<H256>`
- **interface**: `api.query.offences.concurrentReportsIndex`
- **summary**:    A vector of reports of the same kind that happened at the same time slot. 
 
### reports(`H256`): `Option<SpStakingOffenceOffenceDetails>`
- **interface**: `api.query.offences.reports`
- **summary**:    The primary structure that holds all offence records keyed by report identifiers. 
 
### reportsByKindIndex(`[u8;16]`): `Bytes`
- **interface**: `api.query.offences.reportsByKindIndex`
- **summary**:    Enumerates all reports of a kind along with the time they happened. 

   All reports are sorted by the time of offence. 

   Note that the actual type of this mapping is `Vec<u8>`, this is because values of  different types are not supported at the moment so we are doing the manual serialization. 

___


## paraInclusion
 
### availabilityBitfields(`u32`): `Option<PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord>`
- **interface**: `api.query.paraInclusion.availabilityBitfields`
- **summary**:    The latest bitfield for each validator, referred to by their index in the validator set. 
 
### pendingAvailability(`u32`): `Option<PolkadotRuntimeParachainsInclusionCandidatePendingAvailability>`
- **interface**: `api.query.paraInclusion.pendingAvailability`
- **summary**:    Candidates pending availability by `ParaId`. 
 
### pendingAvailabilityCommitments(`u32`): `Option<PolkadotPrimitivesV4CandidateCommitments>`
- **interface**: `api.query.paraInclusion.pendingAvailabilityCommitments`
- **summary**:    The commitments of candidates pending availability, by `ParaId`. 

___


## paraInherent
 
### included(): `Option<Null>`
- **interface**: `api.query.paraInherent.included`
- **summary**:    Whether the paras inherent was included within this block. 

   The `Option<()>` is effectively a `bool`, but it never hits storage in the `None` variant  due to the guarantees of FRAME's storage APIs. 

   If this is `None` at the end of the block, we panic and render the block invalid. 
 
### onChainVotes(): `Option<PolkadotPrimitivesV4ScrapedOnChainVotes>`
- **interface**: `api.query.paraInherent.onChainVotes`
- **summary**:    Scraped on chain data for extracting resolved disputes as well as backing votes. 

___


## paras
 
### actionsQueue(`u32`): `Vec<u32>`
- **interface**: `api.query.paras.actionsQueue`
- **summary**:    The actions to perform during the start of a specific session index. 
 
### codeByHash(`H256`): `Option<Bytes>`
- **interface**: `api.query.paras.codeByHash`
- **summary**:    Validation code stored by its hash. 

   This storage is consistent with [`FutureCodeHash`], [`CurrentCodeHash`] and  [`PastCodeHash`]. 
 
### codeByHashRefs(`H256`): `u32`
- **interface**: `api.query.paras.codeByHashRefs`
- **summary**:    The number of reference on the validation code in [`CodeByHash`] storage. 
 
### currentCodeHash(`u32`): `Option<H256>`
- **interface**: `api.query.paras.currentCodeHash`
- **summary**:    The validation code hash of every live para. 

   Corresponding code can be retrieved with [`CodeByHash`]. 
 
### futureCodeHash(`u32`): `Option<H256>`
- **interface**: `api.query.paras.futureCodeHash`
- **summary**:    The actual future code hash of a para. 

   Corresponding code can be retrieved with [`CodeByHash`]. 
 
### futureCodeUpgrades(`u32`): `Option<u32>`
- **interface**: `api.query.paras.futureCodeUpgrades`
- **summary**:    The block number at which the planned code change is expected for a para.  The change will be applied after the first parablock for this ID included which executes  in the context of a relay chain block with a number >= `expected_at`. 
 
### heads(`u32`): `Option<Bytes>`
- **interface**: `api.query.paras.heads`
- **summary**:    The head-data of every registered para. 
 
### parachains(): `Vec<u32>`
- **interface**: `api.query.paras.parachains`
- **summary**:    All parachains. Ordered ascending by `ParaId`. Parathreads are not included. 

   Consider using the [`ParachainsCache`] type of modifying. 
 
### paraLifecycles(`u32`): `Option<PolkadotRuntimeParachainsParasParaLifecycle>`
- **interface**: `api.query.paras.paraLifecycles`
- **summary**:    The current lifecycle of a all known Para IDs. 
 
### pastCodeHash(`(u32,u32)`): `Option<H256>`
- **interface**: `api.query.paras.pastCodeHash`
- **summary**:    Actual past code hash, indicated by the para id as well as the block number at which it  became outdated. 

   Corresponding code can be retrieved with [`CodeByHash`]. 
 
### pastCodeMeta(`u32`): `PolkadotRuntimeParachainsParasParaPastCodeMeta`
- **interface**: `api.query.paras.pastCodeMeta`
- **summary**:    Past code of parachains. The parachains themselves may not be registered anymore,  but we also keep their code on-chain for the same amount of time as outdated code  to keep it available for approval checkers. 
 
### pastCodePruning(): `Vec<(u32,u32)>`
- **interface**: `api.query.paras.pastCodePruning`
- **summary**:    Which paras have past code that needs pruning and the relay-chain block at which the code was replaced.  Note that this is the actual height of the included block, not the expected height at which the  code upgrade would be applied, although they may be equal.  This is to ensure the entire acceptance period is covered, not an offset acceptance period starting  from the time at which the parachain perceives a code upgrade as having occurred.  Multiple entries for a single para are permitted. Ordered ascending by block number. 
 
### pvfActiveVoteList(): `Vec<H256>`
- **interface**: `api.query.paras.pvfActiveVoteList`
- **summary**:    The list of all currently active PVF votes. Auxiliary to `PvfActiveVoteMap`. 
 
### pvfActiveVoteMap(`H256`): `Option<PolkadotRuntimeParachainsParasPvfCheckActiveVoteState>`
- **interface**: `api.query.paras.pvfActiveVoteMap`
- **summary**:    All currently active PVF pre-checking votes. 

   Invariant: 

  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
 
### upcomingParasGenesis(`u32`): `Option<PolkadotRuntimeParachainsParasParaGenesisArgs>`
- **interface**: `api.query.paras.upcomingParasGenesis`
- **summary**:    Upcoming paras instantiation arguments. 

   NOTE that after PVF pre-checking is enabled the para genesis arg will have it's code set  to empty. Instead, the code will be saved into the storage right away via `CodeByHash`. 
 
### upcomingUpgrades(): `Vec<(u32,u32)>`
- **interface**: `api.query.paras.upcomingUpgrades`
- **summary**:    The list of upcoming code upgrades. Each item is a pair of which para performs a code  upgrade and at which relay-chain block it is expected at. 

   Ordered ascending by block number. 
 
### upgradeCooldowns(): `Vec<(u32,u32)>`
- **interface**: `api.query.paras.upgradeCooldowns`
- **summary**:    The list of parachains that are awaiting for their upgrade restriction to cooldown. 

   Ordered ascending by block number. 
 
### upgradeGoAheadSignal(`u32`): `Option<PolkadotPrimitivesV4UpgradeGoAhead>`
- **interface**: `api.query.paras.upgradeGoAheadSignal`
- **summary**:    This is used by the relay-chain to communicate to a parachain a go-ahead with in the upgrade procedure. 

   This value is absent when there are no upgrades scheduled or during the time the relay chain  performs the checks. It is set at the first relay-chain block when the corresponding parachain  can switch its upgrade function. As soon as the parachain's block is included, the value  gets reset to `None`. 

   NOTE that this field is used by parachains via merkle storage proofs, therefore changing  the format will require migration of parachains. 
 
### upgradeRestrictionSignal(`u32`): `Option<PolkadotPrimitivesV4UpgradeRestriction>`
- **interface**: `api.query.paras.upgradeRestrictionSignal`
- **summary**:    This is used by the relay-chain to communicate that there are restrictions for performing  an upgrade for this parachain. 

   This may be a because the parachain waits for the upgrade cooldown to expire. Another  potential use case is when we want to perform some maintenance (such as storage migration)  we could restrict upgrades to make the process simpler. 

   NOTE that this field is used by parachains via merkle storage proofs, therefore changing  the format will require migration of parachains. 

___


## paraScheduler
 
### availabilityCores(): `Vec<Option<PolkadotPrimitivesV4CoreOccupied>>`
- **interface**: `api.query.paraScheduler.availabilityCores`
- **summary**:    One entry for each availability core. Entries are `None` if the core is not currently occupied. Can be  temporarily `Some` if scheduled but not occupied.  The i'th parachain belongs to the i'th core, with the remaining cores all being  parathread-multiplexers. 

   Bounded by the maximum of either of these two values: 

  * The number of parachains and parathread multiplexers

  * The number of validators divided by `configuration.max_validators_per_core`.
 
### parathreadClaimIndex(): `Vec<u32>`
- **interface**: `api.query.paraScheduler.parathreadClaimIndex`
- **summary**:    An index used to ensure that only one claim on a parathread exists in the queue or is  currently being handled by an occupied core. 

   Bounded by the number of parathread cores and scheduling lookahead. Reasonably, 10 * 50 = 500. 
 
### parathreadQueue(): `PolkadotRuntimeParachainsSchedulerParathreadClaimQueue`
- **interface**: `api.query.paraScheduler.parathreadQueue`
- **summary**:    A queue of upcoming claims and which core they should be mapped onto. 

   The number of queued claims is bounded at the `scheduling_lookahead`  multiplied by the number of parathread multiplexer cores. Reasonably, 10 * 50 = 500. 
 
### scheduled(): `Vec<PolkadotRuntimeParachainsSchedulerCoreAssignment>`
- **interface**: `api.query.paraScheduler.scheduled`
- **summary**:    Currently scheduled cores - free but up to be occupied. 

   Bounded by the number of cores: one for each parachain and parathread multiplexer. 

   The value contained here will not be valid after the end of a block. Runtime APIs should be used to determine scheduled cores/  for the upcoming block. 
 
### sessionStartBlock(): `u32`
- **interface**: `api.query.paraScheduler.sessionStartBlock`
- **summary**:    The block number where the session start occurred. Used to track how many group rotations have occurred. 

   Note that in the context of parachains modules the session change is signaled during  the block and enacted at the end of the block (at the finalization stage, to be exact).  Thus for all intents and purposes the effect of the session change is observed at the  block following the session change, block number of which we save in this storage value. 
 
### validatorGroups(): `Vec<Vec<u32>>`
- **interface**: `api.query.paraScheduler.validatorGroups`
- **summary**:    All the validator groups. One for each core. Indices are into `ActiveValidators` - not the  broader set of Polkadot validators, but instead just the subset used for parachains during  this session. 

   Bound: The number of cores is the sum of the numbers of parachains and parathread multiplexers.  Reasonably, 100-1000. The dominant factor is the number of validators: safe upper bound at 10k. 

___


## parasDisputes
 
### backersOnDisputes(`u32, H256`): `Option<BTreeSet<u32>>`
- **interface**: `api.query.parasDisputes.backersOnDisputes`
- **summary**:    Backing votes stored for each dispute.  This storage is used for slashing. 
 
### disputes(`u32, H256`): `Option<PolkadotPrimitivesV4DisputeState>`
- **interface**: `api.query.parasDisputes.disputes`
- **summary**:    All ongoing or concluded disputes for the last several sessions. 
 
### frozen(): `Option<u32>`
- **interface**: `api.query.parasDisputes.frozen`
- **summary**:    Whether the chain is frozen. Starts as `None`. When this is `Some`,  the chain will not accept any new parachain blocks for backing or inclusion,  and its value indicates the last valid block number in the chain.  It can only be set back to `None` by governance intervention. 
 
### included(`u32, H256`): `Option<u32>`
- **interface**: `api.query.parasDisputes.included`
- **summary**:    All included blocks on the chain, as well as the block number in this chain that  should be reverted back to if the candidate is disputed and determined to be invalid. 
 
### lastPrunedSession(): `Option<u32>`
- **interface**: `api.query.parasDisputes.lastPrunedSession`
- **summary**:    The last pruned session, if any. All data stored by this module  references sessions. 

___


## paraSessionInfo
 
### accountKeys(`u32`): `Option<Vec<AccountId32>>`
- **interface**: `api.query.paraSessionInfo.accountKeys`
- **summary**:    The validator account keys of the validators actively participating in parachain consensus. 
 
### assignmentKeysUnsafe(): `Vec<PolkadotPrimitivesV4AssignmentAppPublic>`
- **interface**: `api.query.paraSessionInfo.assignmentKeysUnsafe`
- **summary**:    Assignment keys for the current session.  Note that this API is private due to it being prone to 'off-by-one' at session boundaries.  When in doubt, use `Sessions` API instead. 
 
### earliestStoredSession(): `u32`
- **interface**: `api.query.paraSessionInfo.earliestStoredSession`
- **summary**:    The earliest session for which previous session info is stored. 
 
### sessionExecutorParams(`u32`): `Option<PolkadotPrimitivesV4ExecutorParams>`
- **interface**: `api.query.paraSessionInfo.sessionExecutorParams`
- **summary**:    Executor parameter set for a given session index 
 
### sessions(`u32`): `Option<PolkadotPrimitivesV4SessionInfo>`
- **interface**: `api.query.paraSessionInfo.sessions`
- **summary**:    Session information in a rolling window.  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.  Does not have any entries before the session index in the first session change notification. 

___


## parasShared
 
### activeValidatorIndices(): `Vec<u32>`
- **interface**: `api.query.parasShared.activeValidatorIndices`
- **summary**:    All the validators actively participating in parachain consensus.  Indices are into the broader validator set. 
 
### activeValidatorKeys(): `Vec<PolkadotPrimitivesV4ValidatorAppPublic>`
- **interface**: `api.query.parasShared.activeValidatorKeys`
- **summary**:    The parachain attestation keys of the validators actively participating in parachain consensus.  This should be the same length as `ActiveValidatorIndices`. 
 
### currentSessionIndex(): `u32`
- **interface**: `api.query.parasShared.currentSessionIndex`
- **summary**:    The current session index. 

___


## parasSlashing
 
### unappliedSlashes(`u32, H256`): `Option<PolkadotRuntimeParachainsDisputesSlashingPendingSlashes>`
- **interface**: `api.query.parasSlashing.unappliedSlashes`
- **summary**:    Validators pending dispute slashes. 
 
### validatorSetCounts(`u32`): `Option<u32>`
- **interface**: `api.query.parasSlashing.validatorSetCounts`
- **summary**:    `ValidatorSetCount` per session. 

___


## preimage
 
### preimageFor(`(H256,u32)`): `Option<Bytes>`
- **interface**: `api.query.preimage.preimageFor`
 
### statusFor(`H256`): `Option<PalletPreimageRequestStatus>`
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
- **summary**:    The metadata is a general information concerning the referendum.  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON  dump or IPFS hash of a JSON file. 

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


## registrar
 
### nextFreeParaId(): `u32`
- **interface**: `api.query.registrar.nextFreeParaId`
- **summary**:    The next free `ParaId`. 
 
### paras(`u32`): `Option<PolkadotRuntimeCommonParasRegistrarParaInfo>`
- **interface**: `api.query.registrar.paras`
- **summary**:    Amount held on deposit for each para and the original depositor. 

   The given account ID is responsible for registering the code and initial head data, but may only do  so if it isn't yet registered. (After that, it's up to governance to do so.) 
 
### pendingSwap(`u32`): `Option<u32>`
- **interface**: `api.query.registrar.pendingSwap`
- **summary**:    Pending swap operations. 

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
 
### nextKeys(`AccountId32`): `Option<KusamaRuntimeSessionKeys>`
- **interface**: `api.query.session.nextKeys`
- **summary**:    The next session keys for a validator. 
 
### queuedChanged(): `bool`
- **interface**: `api.query.session.queuedChanged`
- **summary**:    True if the underlying economic identities or weighting behind the validators  has changed in the queued validator set. 
 
### queuedKeys(): `Vec<(AccountId32,KusamaRuntimeSessionKeys)>`
- **interface**: `api.query.session.queuedKeys`
- **summary**:    The queued keys for the next session. When the next session begins, these keys  will be used to determine the validator's session keys. 
 
### validators(): `Vec<AccountId32>`
- **interface**: `api.query.session.validators`
- **summary**:    The current set of validators. 

___


## slots
 
### leases(`u32`): `Vec<Option<(AccountId32,u128)>>`
- **interface**: `api.query.slots.leases`
- **summary**:    Amounts held on deposit for each (possibly future) leased parachain. 

   The actual amount locked on its behalf by any account at any time is the maximum of the second values  of the items in this list whose first value is the account. 

   The first item in the list is the amount locked for the current Lease Period. Following  items are for the subsequent lease periods. 

   The default value (an empty list) implies that the parachain no longer exists (or never  existed) as far as this pallet is concerned. 

   If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it  will be left-padded with one or more `None`s to denote the fact that nothing is held on  deposit for the non-existent chain currently, but is held at some point in the future. 

   It is illegal for a `None` value to trail in the list. 

___


## society
 
### bids(): `Vec<PalletSocietyBid>`
- **interface**: `api.query.society.bids`
- **summary**:    The current bids, stored ordered by the value of the bid. 
 
### candidates(): `Vec<PalletSocietyBid>`
- **interface**: `api.query.society.candidates`
- **summary**:    The current set of candidates; bidders that are attempting to become members. 
 
### defender(): `Option<AccountId32>`
- **interface**: `api.query.society.defender`
- **summary**:    The defending member currently being challenged. 
 
### defenderVotes(`AccountId32`): `Option<PalletSocietyVote>`
- **interface**: `api.query.society.defenderVotes`
- **summary**:    Votes for the defender. 
 
### founder(): `Option<AccountId32>`
- **interface**: `api.query.society.founder`
- **summary**:    The first member. 
 
### head(): `Option<AccountId32>`
- **interface**: `api.query.society.head`
- **summary**:    The most primary from the most recently approved members. 
 
### maxMembers(): `u32`
- **interface**: `api.query.society.maxMembers`
- **summary**:    The max number of members for the society at one time. 
 
### members(): `Vec<AccountId32>`
- **interface**: `api.query.society.members`
- **summary**:    The current set of members, ordered. 
 
### payouts(`AccountId32`): `Vec<(u32,u128)>`
- **interface**: `api.query.society.payouts`
- **summary**:    Pending payouts; ordered by block number, with the amount that should be paid out. 
 
### pot(): `u128`
- **interface**: `api.query.society.pot`
- **summary**:    Amount of our account balance that is specifically for the next round's bid(s). 
 
### rules(): `Option<H256>`
- **interface**: `api.query.society.rules`
- **summary**:    A hash of the rules of this society concerning membership. Can only be set once and  only by the founder. 
 
### strikes(`AccountId32`): `u32`
- **interface**: `api.query.society.strikes`
- **summary**:    The ongoing number of losing votes cast by the member. 
 
### suspendedCandidates(`AccountId32`): `Option<(u128,PalletSocietyBidKind)>`
- **interface**: `api.query.society.suspendedCandidates`
- **summary**:    The set of suspended candidates. 
 
### suspendedMembers(`AccountId32`): `bool`
- **interface**: `api.query.society.suspendedMembers`
- **summary**:    The set of suspended members. 
 
### votes(`AccountId32, AccountId32`): `Option<PalletSocietyVote>`
- **interface**: `api.query.society.votes`
- **summary**:    Double map from Candidate -> Voter -> (Maybe) Vote. 
 
### vouching(`AccountId32`): `Option<PalletSocietyVouchingStatus>`
- **interface**: `api.query.society.vouching`
- **summary**:    Members currently vouching or banned from vouching again 

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
 
### counterForNominators(): `u32`
- **interface**: `api.query.staking.counterForNominators`
- **summary**:    Counter for the related counted storage map 
 
### counterForValidators(): `u32`
- **interface**: `api.query.staking.counterForValidators`
- **summary**:    Counter for the related counted storage map 
 
### currentEra(): `Option<u32>`
- **interface**: `api.query.staking.currentEra`
- **summary**:    The current era index. 

   This is the latest planned era, depending on how the Session pallet queues the validator  set, it might be active or not. 
 
### currentPlannedSession(): `u32`
- **interface**: `api.query.staking.currentPlannedSession`
- **summary**:    The last planned session scheduled by the session pallet. 

   This is basically in sync with the call to [`pallet_session::SessionManager::new_session`]. 
 
### erasRewardPoints(`u32`): `PalletStakingEraRewardPoints`
- **interface**: `api.query.staking.erasRewardPoints`
- **summary**:    Rewards for the last `HISTORY_DEPTH` eras.  If reward hasn't been set or has been removed then 0 reward is returned. 
 
### erasStakers(`u32, AccountId32`): `PalletStakingExposure`
- **interface**: `api.query.staking.erasStakers`
- **summary**:    Exposure of validator at era. 

   This is keyed first by the era index to allow bulk deletion and then the stash account. 

   Is it removed after `HISTORY_DEPTH` eras.  If stakers hasn't been set or has been removed then empty exposure is returned. 
 
### erasStakersClipped(`u32, AccountId32`): `PalletStakingExposure`
- **interface**: `api.query.staking.erasStakersClipped`
- **summary**:    Clipped Exposure of validator at era. 

   This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the  `T::MaxNominatorRewardedPerValidator` biggest stakers.  (Note: the field `total` and `own` of the exposure remains unchanged).  This is used to limit the i/o cost for the nominator payout. 

   This is keyed fist by the era index to allow bulk deletion and then the stash account. 

   Is it removed after `HISTORY_DEPTH` eras.  If stakers hasn't been set or has been removed then empty exposure is returned. 
 
### erasStartSessionIndex(`u32`): `Option<u32>`
- **interface**: `api.query.staking.erasStartSessionIndex`
- **summary**:    The session index at which the era start for the last `HISTORY_DEPTH` eras. 

   Note: This tracks the starting session (i.e. session index when era start being active)  for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`. 
 
### erasTotalStake(`u32`): `u128`
- **interface**: `api.query.staking.erasTotalStake`
- **summary**:    The total amount staked for the last `HISTORY_DEPTH` eras.  If total hasn't been set or has been removed then 0 stake is returned. 
 
### erasValidatorPrefs(`u32, AccountId32`): `PalletStakingValidatorPrefs`
- **interface**: `api.query.staking.erasValidatorPrefs`
- **summary**:    Similar to `ErasStakers`, this holds the preferences of validators. 

   This is keyed first by the era index to allow bulk deletion and then the stash account. 

   Is it removed after `HISTORY_DEPTH` eras. 
 
### erasValidatorReward(`u32`): `Option<u128>`
- **interface**: `api.query.staking.erasValidatorReward`
- **summary**:    The total validator era payout for the last `HISTORY_DEPTH` eras. 

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
 
### maxNominatorsCount(): `Option<u32>`
- **interface**: `api.query.staking.maxNominatorsCount`
- **summary**:    The maximum nominator count before we stop allowing new validators to join. 

   When this value is not set, no limits are enforced. 
 
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

   Note that the keys of this storage map might become non-decodable in case the  [`Config::MaxNominations`] configuration is decreased. In this rare case, these nominators  are still existent in storage, their key is correct and retrievable (i.e. `contains_key`  indicates that they exist), but their value cannot be decoded. Therefore, the non-decodable  nominators will effectively not-exist, until they re-submit their preferences such that it  is within the bounds of the newly set `Config::MaxNominations`. 

   This implies that `::iter_keys().count()` and `::iter().count()` might return different  values for this map. Moreover, the main `::count()` is aligned with the former, namely the  number of keys that exist. 

   Lastly, if any of the nominators become non-decodable, they can be chilled immediately via  [`Call::chill_other`] dispatchable by anyone. 

   TWOX-NOTE: SAFE since `AccountId` is a secure hash. 
 
### nominatorSlashInEra(`u32, AccountId32`): `Option<u128>`
- **interface**: `api.query.staking.nominatorSlashInEra`
- **summary**:    All slashing events on nominators, mapped by era to the highest slash value of the era. 
 
### offendingValidators(): `Vec<(u32,bool)>`
- **interface**: `api.query.staking.offendingValidators`
- **summary**:    Indices of validators that have offended in the active era and whether they are currently  disabled. 

   This value should be a superset of disabled validators since not all offences lead to the  validator being disabled (if there was no slash). This is needed to track the percentage of  validators that have offended in the current era, ensuring a new era is forced if  `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find  whether a given validator has previously offended using binary search. It gets cleared when  the era ends. 
 
### payee(`AccountId32`): `PalletStakingRewardDestination`
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

___


## system
 
### account(`AccountId32`): `FrameSystemAccountInfo`
- **interface**: `api.query.system.account`
- **summary**:    The full account information for a particular account ID. 
 
### allExtrinsicsLen(): `Option<u32>`
- **interface**: `api.query.system.allExtrinsicsLen`
- **summary**:    Total length (in bytes) for all extrinsics put together, for the current block. 
 
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

   The value has the type `(T::BlockNumber, EventIndex)` because if we used only just  the `EventIndex` then in case if the topic has the same contents on the next block  no notification will be triggered thus the event might be lost. 
 
### executionPhase(): `Option<FrameSystemPhase>`
- **interface**: `api.query.system.executionPhase`
- **summary**:    The execution phase of the block. 
 
### extrinsicCount(): `Option<u32>`
- **interface**: `api.query.system.extrinsicCount`
- **summary**:    Total extrinsics count for the current block. 
 
### extrinsicData(`u32`): `Bytes`
- **interface**: `api.query.system.extrinsicData`
- **summary**:    Extrinsics data for the current block (maps an extrinsic's index to its data). 
 
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
- **summary**:    Did the timestamp get updated in this block? 
 
### now(): `u64`
- **interface**: `api.query.timestamp.now`
- **summary**:    Current time for the current block. 

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

___


## ump
 
### counterForOverweight(): `u32`
- **interface**: `api.query.ump.counterForOverweight`
- **summary**:    Counter for the related counted storage map 
 
### needsDispatch(): `Vec<u32>`
- **interface**: `api.query.ump.needsDispatch`
- **summary**:    The ordered list of `ParaId`s that have a `RelayDispatchQueue` entry. 

   Invariant: 

  - The set of items from this vector should be exactly the set of the keys in `RelayDispatchQueues` and `RelayDispatchQueueSize`. 
 
### nextDispatchRoundStartWith(): `Option<u32>`
- **interface**: `api.query.ump.nextDispatchRoundStartWith`
- **summary**:    This is the para that gets will get dispatched first during the next upward dispatchable queue  execution round. 

   Invariant: 

  - If `Some(para)`, then `para` must be present in `NeedsDispatch`.
 
### overweight(`u64`): `Option<(u32,Bytes)>`
- **interface**: `api.query.ump.overweight`
- **summary**:    The messages that exceeded max individual message weight budget. 

   These messages stay there until manually dispatched. 
 
### overweightCount(): `u64`
- **interface**: `api.query.ump.overweightCount`
- **summary**:    The number of overweight messages ever recorded in `Overweight` (and thus the lowest free  index). 
 
### relayDispatchQueues(`u32`): `Vec<Bytes>`
- **interface**: `api.query.ump.relayDispatchQueues`
- **summary**:    The messages waiting to be handled by the relay-chain originating from a certain parachain. 

   Note that some upward messages might have been already processed by the inclusion logic. E.g.  channel management messages. 

   The messages are processed in FIFO order. 
 
### relayDispatchQueueSize(`u32`): `(u32,u32)`
- **interface**: `api.query.ump.relayDispatchQueueSize`
- **summary**:    Size of the dispatch queues. Caches sizes of the queues in `RelayDispatchQueue`. 

   First item in the tuple is the count of messages and second  is the total length (in bytes) of the message payloads. 

   Note that this is an auxiliary mapping: it's possible to tell the byte size and the number of  messages only looking at `RelayDispatchQueues`. This mapping is separate to avoid the cost of  loading the whole message queue if only the total size and count are required. 

   Invariant: 

  - The set of keys should exactly match the set of keys of `RelayDispatchQueues`.

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

___


## xcmPallet
 
### assetTraps(`H256`): `u32`
- **interface**: `api.query.xcmPallet.assetTraps`
- **summary**:    The existing asset traps. 

   Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of  times this pair has been trapped (usually just 1 if it exists at all). 
 
### currentMigration(): `Option<PalletXcmVersionMigrationStage>`
- **interface**: `api.query.xcmPallet.currentMigration`
- **summary**:    The current migration's stage, if any. 
 
### lockedFungibles(`AccountId32`): `Option<Vec<(u128,XcmVersionedMultiLocation)>>`
- **interface**: `api.query.xcmPallet.lockedFungibles`
- **summary**:    Fungible assets which we know are locked on this chain. 
 
### queries(`u64`): `Option<PalletXcmQueryStatus>`
- **interface**: `api.query.xcmPallet.queries`
- **summary**:    The ongoing queries. 
 
### queryCounter(): `u64`
- **interface**: `api.query.xcmPallet.queryCounter`
- **summary**:    The latest available query index. 
 
### remoteLockedFungibles(`u32, AccountId32, XcmVersionedAssetId`): `Option<PalletXcmRemoteLockedFungibleRecord>`
- **interface**: `api.query.xcmPallet.remoteLockedFungibles`
- **summary**:    Fungible assets which we know are locked on a remote chain. 
 
### safeXcmVersion(): `Option<u32>`
- **interface**: `api.query.xcmPallet.safeXcmVersion`
- **summary**:    Default version to encode XCM when latest version of destination is unknown. If `None`,  then the destinations whose XCM version is unknown are considered unreachable. 
 
### supportedVersion(`u32, XcmVersionedMultiLocation`): `Option<u32>`
- **interface**: `api.query.xcmPallet.supportedVersion`
- **summary**:    The Latest versions that we know various locations support. 
 
### versionDiscoveryQueue(): `Vec<(XcmVersionedMultiLocation,u32)>`
- **interface**: `api.query.xcmPallet.versionDiscoveryQueue`
- **summary**:    Destinations whose latest XCM version we would like to know. Duplicates not allowed, and  the `u32` counter is the number of times that a send to the destination has been attempted,  which is used as a prioritization. 
 
### versionNotifiers(`u32, XcmVersionedMultiLocation`): `Option<u64>`
- **interface**: `api.query.xcmPallet.versionNotifiers`
- **summary**:    All locations that we have requested version notifications from. 
 
### versionNotifyTargets(`u32, XcmVersionedMultiLocation`): `Option<(u64,SpWeightsWeightV2Weight,u32)>`
- **interface**: `api.query.xcmPallet.versionNotifyTargets`
- **summary**:    The target locations that are subscribed to our version changes, as well as the most recent  of our versions we informed them of. 
