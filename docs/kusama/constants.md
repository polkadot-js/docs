---
title: Constants
---

The following sections contain the module constants, also known as parameter types. These can only be changed as part of a runtime upgrade. On the api, these are exposed via `api.consts.<module>.<method>`. 

(NOTE: These were generated from a static/snapshot view of a recent default Kusama runtime. Some items may not be available in older nodes, or in any customized implementations.)

- **[auctions](#auctions)**

- **[babe](#babe)**

- **[balances](#balances)**

- **[bounties](#bounties)**

- **[childBounties](#childbounties)**

- **[claims](#claims)**

- **[convictionVoting](#convictionvoting)**

- **[crowdloan](#crowdloan)**

- **[electionProviderMultiPhase](#electionprovidermultiphase)**

- **[fastUnstake](#fastunstake)**

- **[fellowshipReferenda](#fellowshipreferenda)**

- **[grandpa](#grandpa)**

- **[identity](#identity)**

- **[imOnline](#imonline)**

- **[indices](#indices)**

- **[multisig](#multisig)**

- **[nis](#nis)**

- **[nisCounterpartBalances](#niscounterpartbalances)**

- **[nominationPools](#nominationpools)**

- **[paras](#paras)**

- **[proxy](#proxy)**

- **[recovery](#recovery)**

- **[referenda](#referenda)**

- **[registrar](#registrar)**

- **[scheduler](#scheduler)**

- **[slots](#slots)**

- **[society](#society)**

- **[staking](#staking)**

- **[system](#system)**

- **[timestamp](#timestamp)**

- **[transactionPayment](#transactionpayment)**

- **[treasury](#treasury)**

- **[utility](#utility)**

- **[vesting](#vesting)**

- **[voterList](#voterlist)**


___


## auctions
 
### endingPeriod: `u32`
- **interface**: `api.consts.auctions.endingPeriod`
- **summary**:    The number of blocks over which an auction may be retroactively ended. 
 
### leasePeriodsPerSlot: `u32`
- **interface**: `api.consts.auctions.leasePeriodsPerSlot`
 
### sampleLength: `u32`
- **interface**: `api.consts.auctions.sampleLength`
- **summary**:    The length of each sample to take during the ending period. 

   `EndingPeriod` / `SampleLength` = Total # of Samples 
 
### slotRangeCount: `u32`
- **interface**: `api.consts.auctions.slotRangeCount`

___


## babe
 
### epochDuration: `u64`
- **interface**: `api.consts.babe.epochDuration`
- **summary**:    The amount of time, in slots, that each epoch should last.  NOTE: Currently it is not possible to change the epoch duration after  the chain has started. Attempting to do so will brick block production. 
 
### expectedBlockTime: `u64`
- **interface**: `api.consts.babe.expectedBlockTime`
- **summary**:    The expected average block time at which BABE should be creating  blocks. Since BABE is probabilistic it is not trivial to figure out  what the expected average block time should be based on the slot  duration and the security parameter `c` (where `1 - c` represents  the probability of a slot being empty). 
 
### maxAuthorities: `u32`
- **interface**: `api.consts.babe.maxAuthorities`
- **summary**:    Max number of authorities allowed 

___


## balances
 
### existentialDeposit: `u128`
- **interface**: `api.consts.balances.existentialDeposit`
- **summary**:    The minimum amount required to keep an account open. MUST BE GREATER THAN ZERO! 

   If you *really* need it to be zero, you can enable the feature `insecure_zero_ed` for  this pallet. However, you do so at your own risk: this will open up a major DoS vector.  In case you have multiple sources of provider references, you may also get unexpected  behaviour if you set this to zero. 

   Bottom line: Do yourself a favour and make it at least one! 
 
### maxFreezes: `u32`
- **interface**: `api.consts.balances.maxFreezes`
- **summary**:    The maximum number of individual freeze locks that can exist on an account at any time. 
 
### maxHolds: `u32`
- **interface**: `api.consts.balances.maxHolds`
- **summary**:    The maximum number of holds that can exist on an account at any time. 
 
### maxLocks: `u32`
- **interface**: `api.consts.balances.maxLocks`
- **summary**:    The maximum number of locks that should exist on an account.  Not strictly enforced, but used for weight estimation. 
 
### maxReserves: `u32`
- **interface**: `api.consts.balances.maxReserves`
- **summary**:    The maximum number of named reserves that can exist on an account. 

___


## bounties
 
### bountyDepositBase: `u128`
- **interface**: `api.consts.bounties.bountyDepositBase`
- **summary**:    The amount held on deposit for placing a bounty proposal. 
 
### bountyDepositPayoutDelay: `u32`
- **interface**: `api.consts.bounties.bountyDepositPayoutDelay`
- **summary**:    The delay period for which a bounty beneficiary need to wait before claim the payout. 
 
### bountyUpdatePeriod: `u32`
- **interface**: `api.consts.bounties.bountyUpdatePeriod`
- **summary**:    Bounty duration in blocks. 
 
### bountyValueMinimum: `u128`
- **interface**: `api.consts.bounties.bountyValueMinimum`
- **summary**:    Minimum value for a bounty. 
 
### curatorDepositMax: `Option<u128>`
- **interface**: `api.consts.bounties.curatorDepositMax`
- **summary**:    Maximum amount of funds that should be placed in a deposit for making a proposal. 
 
### curatorDepositMin: `Option<u128>`
- **interface**: `api.consts.bounties.curatorDepositMin`
- **summary**:    Minimum amount of funds that should be placed in a deposit for making a proposal. 
 
### curatorDepositMultiplier: `Permill`
- **interface**: `api.consts.bounties.curatorDepositMultiplier`
- **summary**:    The curator deposit is calculated as a percentage of the curator fee. 

   This deposit has optional upper and lower bounds with `CuratorDepositMax` and  `CuratorDepositMin`. 
 
### dataDepositPerByte: `u128`
- **interface**: `api.consts.bounties.dataDepositPerByte`
- **summary**:    The amount held on deposit per byte within the tip report reason or bounty description. 
 
### maximumReasonLength: `u32`
- **interface**: `api.consts.bounties.maximumReasonLength`
- **summary**:    Maximum acceptable reason length. 

   Benchmarks depend on this value, be sure to update weights file when changing this value 

___


## childBounties
 
### childBountyValueMinimum: `u128`
- **interface**: `api.consts.childBounties.childBountyValueMinimum`
- **summary**:    Minimum value for a child-bounty. 
 
### maxActiveChildBountyCount: `u32`
- **interface**: `api.consts.childBounties.maxActiveChildBountyCount`
- **summary**:    Maximum number of child bounties that can be added to a parent bounty. 

___


## claims
 
### prefix: `Bytes`
- **interface**: `api.consts.claims.prefix`

___


## convictionVoting
 
### maxVotes: `u32`
- **interface**: `api.consts.convictionVoting.maxVotes`
- **summary**:    The maximum number of concurrent votes an account may have. 

   Also used to compute weight, an overly large value can lead to extrinsics with large  weight estimation: see `delegate` for instance. 
 
### voteLockingPeriod: `u32`
- **interface**: `api.consts.convictionVoting.voteLockingPeriod`
- **summary**:    The minimum period of vote locking. 

   It should be no shorter than enactment period to ensure that in the case of an approval,  those successful voters are locked into the consequences that their votes entail. 

___


## crowdloan
 
### minContribution: `u128`
- **interface**: `api.consts.crowdloan.minContribution`
- **summary**:    The minimum amount that may be contributed into a crowdloan. Should almost certainly be at  least `ExistentialDeposit`. 
 
### palletId: `FrameSupportPalletId`
- **interface**: `api.consts.crowdloan.palletId`
- **summary**:    `PalletId` for the crowdloan pallet. An appropriate value could be `PalletId(*b"py/cfund")` 
 
### removeKeysLimit: `u32`
- **interface**: `api.consts.crowdloan.removeKeysLimit`
- **summary**:    Max number of storage keys to remove per extrinsic call. 

___


## electionProviderMultiPhase
 
### betterSignedThreshold: `Perbill`
- **interface**: `api.consts.electionProviderMultiPhase.betterSignedThreshold`
- **summary**:    The minimum amount of improvement to the solution score that defines a solution as  "better" in the Signed phase. 
 
### betterUnsignedThreshold: `Perbill`
- **interface**: `api.consts.electionProviderMultiPhase.betterUnsignedThreshold`
- **summary**:    The minimum amount of improvement to the solution score that defines a solution as  "better" in the Unsigned phase. 
 
### maxElectableTargets: `u16`
- **interface**: `api.consts.electionProviderMultiPhase.maxElectableTargets`
- **summary**:    The maximum number of electable targets to put in the snapshot. 
 
### maxElectingVoters: `u32`
- **interface**: `api.consts.electionProviderMultiPhase.maxElectingVoters`
- **summary**:    The maximum number of electing voters to put in the snapshot. At the moment, snapshots  are only over a single block, but once multi-block elections are introduced they will  take place over multiple blocks. 
 
### maxWinners: `u32`
- **interface**: `api.consts.electionProviderMultiPhase.maxWinners`
- **summary**:    The maximum number of winners that can be elected by this `ElectionProvider`  implementation. 

   Note: This must always be greater or equal to `T::DataProvider::desired_targets()`. 
 
### minerMaxLength: `u32`
- **interface**: `api.consts.electionProviderMultiPhase.minerMaxLength`
 
### minerMaxVotesPerVoter: `u32`
- **interface**: `api.consts.electionProviderMultiPhase.minerMaxVotesPerVoter`
 
### minerMaxWeight: `SpWeightsWeightV2Weight`
- **interface**: `api.consts.electionProviderMultiPhase.minerMaxWeight`
 
### minerMaxWinners: `u32`
- **interface**: `api.consts.electionProviderMultiPhase.minerMaxWinners`
 
### minerTxPriority: `u64`
- **interface**: `api.consts.electionProviderMultiPhase.minerTxPriority`
- **summary**:    The priority of the unsigned transaction submitted in the unsigned-phase 
 
### offchainRepeat: `u32`
- **interface**: `api.consts.electionProviderMultiPhase.offchainRepeat`
- **summary**:    The repeat threshold of the offchain worker. 

   For example, if it is 5, that means that at least 5 blocks will elapse between attempts  to submit the worker's solution. 
 
### signedDepositBase: `u128`
- **interface**: `api.consts.electionProviderMultiPhase.signedDepositBase`
- **summary**:    Base deposit for a signed solution. 
 
### signedDepositByte: `u128`
- **interface**: `api.consts.electionProviderMultiPhase.signedDepositByte`
- **summary**:    Per-byte deposit for a signed solution. 
 
### signedDepositWeight: `u128`
- **interface**: `api.consts.electionProviderMultiPhase.signedDepositWeight`
- **summary**:    Per-weight deposit for a signed solution. 
 
### signedMaxRefunds: `u32`
- **interface**: `api.consts.electionProviderMultiPhase.signedMaxRefunds`
- **summary**:    The maximum amount of unchecked solutions to refund the call fee for. 
 
### signedMaxSubmissions: `u32`
- **interface**: `api.consts.electionProviderMultiPhase.signedMaxSubmissions`
- **summary**:    Maximum number of signed submissions that can be queued. 

   It is best to avoid adjusting this during an election, as it impacts downstream data  structures. In particular, `SignedSubmissionIndices<T>` is bounded on this value. If you  update this value during an election, you _must_ ensure that  `SignedSubmissionIndices.len()` is less than or equal to the new value. Otherwise,  attempts to submit new solutions may cause a runtime panic. 
 
### signedMaxWeight: `SpWeightsWeightV2Weight`
- **interface**: `api.consts.electionProviderMultiPhase.signedMaxWeight`
- **summary**:    Maximum weight of a signed solution. 

   If [`Config::MinerConfig`] is being implemented to submit signed solutions (outside of  this pallet), then [`MinerConfig::solution_weight`] is used to compare against  this value. 
 
### signedPhase: `u32`
- **interface**: `api.consts.electionProviderMultiPhase.signedPhase`
- **summary**:    Duration of the signed phase. 
 
### signedRewardBase: `u128`
- **interface**: `api.consts.electionProviderMultiPhase.signedRewardBase`
- **summary**:    Base reward for a signed solution 
 
### unsignedPhase: `u32`
- **interface**: `api.consts.electionProviderMultiPhase.unsignedPhase`
- **summary**:    Duration of the unsigned phase. 

___


## fastUnstake
 
### deposit: `u128`
- **interface**: `api.consts.fastUnstake.deposit`
- **summary**:    Deposit to take for unstaking, to make sure we're able to slash the it in order to cover  the costs of resources on unsuccessful unstake. 

___


## fellowshipReferenda
 
### alarmInterval: `u32`
- **interface**: `api.consts.fellowshipReferenda.alarmInterval`
- **summary**:    Quantization level for the referendum wakeup scheduler. A higher number will result in  fewer storage reads/writes needed for smaller voters, but also result in delays to the  automatic referendum status changes. Explicit servicing instructions are unaffected. 
 
### maxQueued: `u32`
- **interface**: `api.consts.fellowshipReferenda.maxQueued`
- **summary**:    Maximum size of the referendum queue for a single track. 
 
### submissionDeposit: `u128`
- **interface**: `api.consts.fellowshipReferenda.submissionDeposit`
- **summary**:    The minimum amount to be used as a deposit for a public referendum proposal. 
 
### tracks: `Vec<(u16,PalletReferendaTrackInfo)>`
- **interface**: `api.consts.fellowshipReferenda.tracks`
- **summary**:    Information concerning the different referendum tracks. 
 
### undecidingTimeout: `u32`
- **interface**: `api.consts.fellowshipReferenda.undecidingTimeout`
- **summary**:    The number of blocks after submission that a referendum must begin being decided by.  Once this passes, then anyone may cancel the referendum. 

___


## grandpa
 
### maxAuthorities: `u32`
- **interface**: `api.consts.grandpa.maxAuthorities`
- **summary**:    Max Authorities in use 
 
### maxSetIdSessionEntries: `u64`
- **interface**: `api.consts.grandpa.maxSetIdSessionEntries`
- **summary**:    The maximum number of entries to keep in the set id to session index mapping. 

   Since the `SetIdSession` map is only used for validating equivocations this  value should relate to the bonding duration of whatever staking system is  being used (if any). If equivocation handling is not enabled then this value  can be zero. 

___


## identity
 
### basicDeposit: `u128`
- **interface**: `api.consts.identity.basicDeposit`
- **summary**:    The amount held on deposit for a registered identity 
 
### fieldDeposit: `u128`
- **interface**: `api.consts.identity.fieldDeposit`
- **summary**:    The amount held on deposit per additional field for a registered identity. 
 
### maxAdditionalFields: `u32`
- **interface**: `api.consts.identity.maxAdditionalFields`
- **summary**:    Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O  required to access an identity, but can be pretty high. 
 
### maxRegistrars: `u32`
- **interface**: `api.consts.identity.maxRegistrars`
- **summary**:    Maxmimum number of registrars allowed in the system. Needed to bound the complexity  of, e.g., updating judgements. 
 
### maxSubAccounts: `u32`
- **interface**: `api.consts.identity.maxSubAccounts`
- **summary**:    The maximum number of sub-accounts allowed per identified account. 
 
### subAccountDeposit: `u128`
- **interface**: `api.consts.identity.subAccountDeposit`
- **summary**:    The amount held on deposit for a registered subaccount. This should account for the fact  that one storage item's value will increase by the size of an account ID, and there will  be another trie item whose value is the size of an account ID plus 32 bytes. 

___


## imOnline
 
### unsignedPriority: `u64`
- **interface**: `api.consts.imOnline.unsignedPriority`
- **summary**:    A configuration for base priority of unsigned transactions. 

   This is exposed so that it can be tuned for particular runtime, when  multiple pallets send unsigned transactions. 

___


## indices
 
### deposit: `u128`
- **interface**: `api.consts.indices.deposit`
- **summary**:    The deposit needed for reserving an index. 

___


## multisig
 
### depositBase: `u128`
- **interface**: `api.consts.multisig.depositBase`
- **summary**:    The base amount of currency needed to reserve for creating a multisig execution or to  store a dispatch call for later. 

   This is held for an additional storage item whose value size is  `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is  `32 + sizeof(AccountId)` bytes. 
 
### depositFactor: `u128`
- **interface**: `api.consts.multisig.depositFactor`
- **summary**:    The amount of currency needed per unit threshold when creating a multisig execution. 

   This is held for adding 32 bytes more into a pre-existing storage value. 
 
### maxSignatories: `u32`
- **interface**: `api.consts.multisig.maxSignatories`
- **summary**:    The maximum amount of signatories allowed in the multisig. 

___


## nis
 
### basePeriod: `u32`
- **interface**: `api.consts.nis.basePeriod`
- **summary**:    The base period for the duration queues. This is the common multiple across all  supported freezing durations that can be bid upon. 
 
### fifoQueueLen: `u32`
- **interface**: `api.consts.nis.fifoQueueLen`
- **summary**:    Portion of the queue which is free from ordering and just a FIFO. 

   Must be no greater than `MaxQueueLen`. 
 
### holdReason: `KusamaRuntimeRuntimeHoldReason`
- **interface**: `api.consts.nis.holdReason`
- **summary**:    The identifier of the hold reason. 
 
### intakePeriod: `u32`
- **interface**: `api.consts.nis.intakePeriod`
- **summary**:    The number of blocks between consecutive attempts to dequeue bids and create receipts. 

   A larger value results in fewer storage hits each block, but a slower period to get to  the target. 
 
### maxIntakeWeight: `SpWeightsWeightV2Weight`
- **interface**: `api.consts.nis.maxIntakeWeight`
- **summary**:    The maximum amount of bids that can consolidated into receipts in a single intake. A  larger value here means less of the block available for transactions should there be a  glut of bids. 
 
### maxQueueLen: `u32`
- **interface**: `api.consts.nis.maxQueueLen`
- **summary**:    Maximum number of items that may be in each duration queue. 

   Must be larger than zero. 
 
### minBid: `u128`
- **interface**: `api.consts.nis.minBid`
- **summary**:    The minimum amount of funds that may be placed in a bid. Note that this  does not actually limit the amount which may be represented in a receipt since bids may  be split up by the system. 

   It should be at least big enough to ensure that there is no possible storage spam attack  or queue-filling attack. 
 
### minReceipt: `Perquintill`
- **interface**: `api.consts.nis.minReceipt`
- **summary**:    The minimum amount of funds which may intentionally be left remaining under a single  receipt. 
 
### palletId: `FrameSupportPalletId`
- **interface**: `api.consts.nis.palletId`
- **summary**:    The treasury's pallet id, used for deriving its sovereign account ID. 
 
### queueCount: `u32`
- **interface**: `api.consts.nis.queueCount`
- **summary**:    Number of duration queues in total. This sets the maximum duration supported, which is  this value multiplied by `Period`. 
 
### thawThrottle: `(Perquintill,u32)`
- **interface**: `api.consts.nis.thawThrottle`
- **summary**:    The maximum proportion which may be thawed and the period over which it is reset. 

___


## nisCounterpartBalances
 
### existentialDeposit: `u128`
- **interface**: `api.consts.nisCounterpartBalances.existentialDeposit`
- **summary**:    The minimum amount required to keep an account open. MUST BE GREATER THAN ZERO! 

   If you *really* need it to be zero, you can enable the feature `insecure_zero_ed` for  this pallet. However, you do so at your own risk: this will open up a major DoS vector.  In case you have multiple sources of provider references, you may also get unexpected  behaviour if you set this to zero. 

   Bottom line: Do yourself a favour and make it at least one! 
 
### maxFreezes: `u32`
- **interface**: `api.consts.nisCounterpartBalances.maxFreezes`
- **summary**:    The maximum number of individual freeze locks that can exist on an account at any time. 
 
### maxHolds: `u32`
- **interface**: `api.consts.nisCounterpartBalances.maxHolds`
- **summary**:    The maximum number of holds that can exist on an account at any time. 
 
### maxLocks: `u32`
- **interface**: `api.consts.nisCounterpartBalances.maxLocks`
- **summary**:    The maximum number of locks that should exist on an account.  Not strictly enforced, but used for weight estimation. 
 
### maxReserves: `u32`
- **interface**: `api.consts.nisCounterpartBalances.maxReserves`
- **summary**:    The maximum number of named reserves that can exist on an account. 

___


## nominationPools
 
### maxPointsToBalance: `u8`
- **interface**: `api.consts.nominationPools.maxPointsToBalance`
- **summary**:    The maximum pool points-to-balance ratio that an `open` pool can have. 

   This is important in the event slashing takes place and the pool's points-to-balance  ratio becomes disproportional. 

   Moreover, this relates to the `RewardCounter` type as well, as the arithmetic operations  are a function of number of points, and by setting this value to e.g. 10, you ensure  that the total number of points in the system are at most 10 times the total_issuance of  the chain, in the absolute worse case. 

   For a value of 10, the threshold would be a pool points-to-balance ratio of 10:1.  Such a scenario would also be the equivalent of the pool being 90% slashed. 
 
### palletId: `FrameSupportPalletId`
- **interface**: `api.consts.nominationPools.palletId`
- **summary**:    The nomination pool's pallet id. 

___


## paras
 
### unsignedPriority: `u64`
- **interface**: `api.consts.paras.unsignedPriority`

___


## proxy
 
### announcementDepositBase: `u128`
- **interface**: `api.consts.proxy.announcementDepositBase`
- **summary**:    The base amount of currency needed to reserve for creating an announcement. 

   This is held when a new storage item holding a `Balance` is created (typically 16  bytes). 
 
### announcementDepositFactor: `u128`
- **interface**: `api.consts.proxy.announcementDepositFactor`
- **summary**:    The amount of currency needed per announcement made. 

   This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)  into a pre-existing storage value. 
 
### maxPending: `u32`
- **interface**: `api.consts.proxy.maxPending`
- **summary**:    The maximum amount of time-delayed announcements that are allowed to be pending. 
 
### maxProxies: `u32`
- **interface**: `api.consts.proxy.maxProxies`
- **summary**:    The maximum amount of proxies allowed for a single account. 
 
### proxyDepositBase: `u128`
- **interface**: `api.consts.proxy.proxyDepositBase`
- **summary**:    The base amount of currency needed to reserve for creating a proxy. 

   This is held for an additional storage item whose value size is  `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes. 
 
### proxyDepositFactor: `u128`
- **interface**: `api.consts.proxy.proxyDepositFactor`
- **summary**:    The amount of currency needed per proxy added. 

   This is held for adding 32 bytes plus an instance of `ProxyType` more into a  pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take  into account `32 + proxy_type.encode().len()` bytes of data. 

___


## recovery
 
### configDepositBase: `u128`
- **interface**: `api.consts.recovery.configDepositBase`
- **summary**:    The base amount of currency needed to reserve for creating a recovery configuration. 

   This is held for an additional storage item whose value size is  `2 + sizeof(BlockNumber, Balance)` bytes. 
 
### friendDepositFactor: `u128`
- **interface**: `api.consts.recovery.friendDepositFactor`
- **summary**:    The amount of currency needed per additional user when creating a recovery  configuration. 

   This is held for adding `sizeof(AccountId)` bytes more into a pre-existing storage  value. 
 
### maxFriends: `u32`
- **interface**: `api.consts.recovery.maxFriends`
- **summary**:    The maximum amount of friends allowed in a recovery configuration. 

   NOTE: The threshold programmed in this Pallet uses u16, so it does  not really make sense to have a limit here greater than u16::MAX.  But also, that is a lot more than you should probably set this value  to anyway... 
 
### recoveryDeposit: `u128`
- **interface**: `api.consts.recovery.recoveryDeposit`
- **summary**:    The base amount of currency needed to reserve for starting a recovery. 

   This is primarily held for deterring malicious recovery attempts, and should  have a value large enough that a bad actor would choose not to place this  deposit. It also acts to fund additional storage item whose value size is  `sizeof(BlockNumber, Balance + T * AccountId)` bytes. Where T is a configurable  threshold. 

___


## referenda
 
### alarmInterval: `u32`
- **interface**: `api.consts.referenda.alarmInterval`
- **summary**:    Quantization level for the referendum wakeup scheduler. A higher number will result in  fewer storage reads/writes needed for smaller voters, but also result in delays to the  automatic referendum status changes. Explicit servicing instructions are unaffected. 
 
### maxQueued: `u32`
- **interface**: `api.consts.referenda.maxQueued`
- **summary**:    Maximum size of the referendum queue for a single track. 
 
### submissionDeposit: `u128`
- **interface**: `api.consts.referenda.submissionDeposit`
- **summary**:    The minimum amount to be used as a deposit for a public referendum proposal. 
 
### tracks: `Vec<(u16,PalletReferendaTrackInfo)>`
- **interface**: `api.consts.referenda.tracks`
- **summary**:    Information concerning the different referendum tracks. 
 
### undecidingTimeout: `u32`
- **interface**: `api.consts.referenda.undecidingTimeout`
- **summary**:    The number of blocks after submission that a referendum must begin being decided by.  Once this passes, then anyone may cancel the referendum. 

___


## registrar
 
### dataDepositPerByte: `u128`
- **interface**: `api.consts.registrar.dataDepositPerByte`
- **summary**:    The deposit to be paid per byte stored on chain. 
 
### paraDeposit: `u128`
- **interface**: `api.consts.registrar.paraDeposit`
- **summary**:    The deposit to be paid to run a parathread.  This should include the cost for storing the genesis head and validation code. 

___


## scheduler
 
### maximumWeight: `SpWeightsWeightV2Weight`
- **interface**: `api.consts.scheduler.maximumWeight`
- **summary**:    The maximum weight that may be scheduled per block for any dispatchables. 
 
### maxScheduledPerBlock: `u32`
- **interface**: `api.consts.scheduler.maxScheduledPerBlock`
- **summary**:    The maximum number of scheduled calls in the queue for a single block. 

   NOTE:  + Dependent pallets' benchmarks might require a higher limit for the setting. Set a  higher limit under `runtime-benchmarks` feature. 

___


## slots
 
### leaseOffset: `u32`
- **interface**: `api.consts.slots.leaseOffset`
- **summary**:    The number of blocks to offset each lease period by. 
 
### leasePeriod: `u32`
- **interface**: `api.consts.slots.leasePeriod`
- **summary**:    The number of blocks over which a single period lasts. 

___


## society
 
### candidateDeposit: `u128`
- **interface**: `api.consts.society.candidateDeposit`
- **summary**:    The minimum amount of a deposit required for a bid to be made. 
 
### challengePeriod: `u32`
- **interface**: `api.consts.society.challengePeriod`
- **summary**:    The number of blocks between membership challenges. 
 
### maxCandidateIntake: `u32`
- **interface**: `api.consts.society.maxCandidateIntake`
- **summary**:    The maximum number of candidates that we accept per round. 
 
### maxLockDuration: `u32`
- **interface**: `api.consts.society.maxLockDuration`
- **summary**:    The maximum duration of the payout lock. 
 
### maxStrikes: `u32`
- **interface**: `api.consts.society.maxStrikes`
- **summary**:    The number of times a member may vote the wrong way (or not at all, when they are a  skeptic) before they become suspended. 
 
### palletId: `FrameSupportPalletId`
- **interface**: `api.consts.society.palletId`
- **summary**:    The societies's pallet id 
 
### periodSpend: `u128`
- **interface**: `api.consts.society.periodSpend`
- **summary**:    The amount of incentive paid within each period. Doesn't include VoterTip. 
 
### rotationPeriod: `u32`
- **interface**: `api.consts.society.rotationPeriod`
- **summary**:    The number of blocks between candidate/membership rotation periods. 
 
### wrongSideDeduction: `u128`
- **interface**: `api.consts.society.wrongSideDeduction`
- **summary**:    The amount of the unpaid reward that gets deducted in the case that either a skeptic  doesn't vote or someone votes in the wrong way. 

___


## staking
 
### bondingDuration: `u32`
- **interface**: `api.consts.staking.bondingDuration`
- **summary**:    Number of eras that staked funds must remain bonded for. 
 
### historyDepth: `u32`
- **interface**: `api.consts.staking.historyDepth`
- **summary**:    Number of eras to keep in history. 

   Following information is kept for eras in `[current_era -  HistoryDepth, current_era]`: `ErasStakers`, `ErasStakersClipped`,  `ErasValidatorPrefs`, `ErasValidatorReward`, `ErasRewardPoints`,  `ErasTotalStake`, `ErasStartSessionIndex`,  `StakingLedger.claimed_rewards`. 

   Must be more than the number of eras delayed by session.  I.e. active era must always be in history. I.e. `active_era >  current_era - history_depth` must be guaranteed. 

   If migrating an existing pallet from storage value to config value,  this should be set to same value or greater as in storage. 

   Note: `HistoryDepth` is used as the upper bound for the `BoundedVec`  item `StakingLedger.claimed_rewards`. Setting this value lower than  the existing value can lead to inconsistencies in the  `StakingLedger` and will need to be handled properly in a migration.  The test `reducing_history_depth_abrupt` shows this effect. 
 
### maxNominations: `u32`
- **interface**: `api.consts.staking.maxNominations`
- **summary**:    Maximum number of nominations per nominator. 
 
### maxNominatorRewardedPerValidator: `u32`
- **interface**: `api.consts.staking.maxNominatorRewardedPerValidator`
- **summary**:    The maximum number of nominators rewarded for each validator. 

   For each validator only the `$MaxNominatorRewardedPerValidator` biggest stakers can  claim their reward. This used to limit the i/o cost for the nominator payout. 
 
### maxUnlockingChunks: `u32`
- **interface**: `api.consts.staking.maxUnlockingChunks`
- **summary**:    The maximum number of `unlocking` chunks a [`StakingLedger`] can  have. Effectively determines how many unique eras a staker may be  unbonding in. 

   Note: `MaxUnlockingChunks` is used as the upper bound for the  `BoundedVec` item `StakingLedger.unlocking`. Setting this value  lower than the existing value can lead to inconsistencies in the  `StakingLedger` and will need to be handled properly in a runtime  migration. The test `reducing_max_unlocking_chunks_abrupt` shows  this effect. 
 
### sessionsPerEra: `u32`
- **interface**: `api.consts.staking.sessionsPerEra`
- **summary**:    Number of sessions per era. 
 
### slashDeferDuration: `u32`
- **interface**: `api.consts.staking.slashDeferDuration`
- **summary**:    Number of eras that slashes are deferred by, after computation. 

   This should be less than the bonding duration. Set to 0 if slashes  should be applied immediately, without opportunity for intervention. 

___


## system
 
### blockHashCount: `u32`
- **interface**: `api.consts.system.blockHashCount`
- **summary**:    Maximum number of block number to block hash mappings to keep (oldest pruned first). 
 
### blockLength: `FrameSystemLimitsBlockLength`
- **interface**: `api.consts.system.blockLength`
- **summary**:    The maximum length of a block (in bytes). 
 
### blockWeights: `FrameSystemLimitsBlockWeights`
- **interface**: `api.consts.system.blockWeights`
- **summary**:    Block & extrinsics weights: base values and limits. 
 
### dbWeight: `SpWeightsRuntimeDbWeight`
- **interface**: `api.consts.system.dbWeight`
- **summary**:    The weight of runtime database operations the runtime can invoke. 
 
### ss58Prefix: `u16`
- **interface**: `api.consts.system.ss58Prefix`
- **summary**:    The designated SS58 prefix of this chain. 

   This replaces the "ss58Format" property declared in the chain spec. Reason is  that the runtime should know about the prefix in order to make use of it as  an identifier of the chain. 
 
### version: `SpVersionRuntimeVersion`
- **interface**: `api.consts.system.version`
- **summary**:    Get the chain's current version. 

___


## timestamp
 
### minimumPeriod: `u64`
- **interface**: `api.consts.timestamp.minimumPeriod`
- **summary**:    The minimum period between blocks. Beware that this is different to the *expected*  period that the block production apparatus provides. Your chosen consensus system will  generally work with this to determine a sensible block time. e.g. For Aura, it will be  double this period on default settings. 

___


## transactionPayment
 
### operationalFeeMultiplier: `u8`
- **interface**: `api.consts.transactionPayment.operationalFeeMultiplier`
- **summary**:    A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their  `priority` 

   This value is multipled by the `final_fee` to obtain a "virtual tip" that is later  added to a tip component in regular `priority` calculations.  It means that a `Normal` transaction can front-run a similarly-sized `Operational`  extrinsic (with no tip), by including a tip value greater than the virtual tip. 

   ```rust,ignore  // For `Normal`  let priority = priority_calc(tip); 

   // For `Operational`  let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;  let priority = priority_calc(tip + virtual_tip);  ``` 

   Note that since we use `final_fee` the multiplier applies also to the regular `tip`  sent with the transaction. So, not only does the transaction get a priority bump based  on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`  transactions. 

___


## treasury
 
### burn: `Permill`
- **interface**: `api.consts.treasury.burn`
- **summary**:    Percentage of spare funds (if any) that are burnt per spend period. 
 
### maxApprovals: `u32`
- **interface**: `api.consts.treasury.maxApprovals`
- **summary**:    The maximum number of approvals that can wait in the spending queue. 

   NOTE: This parameter is also used within the Bounties Pallet extension if enabled. 
 
### palletId: `FrameSupportPalletId`
- **interface**: `api.consts.treasury.palletId`
- **summary**:    The treasury's pallet id, used for deriving its sovereign account ID. 
 
### proposalBond: `Permill`
- **interface**: `api.consts.treasury.proposalBond`
- **summary**:    Fraction of a proposal's value that should be bonded in order to place the proposal.  An accepted proposal gets these back. A rejected proposal does not. 
 
### proposalBondMaximum: `Option<u128>`
- **interface**: `api.consts.treasury.proposalBondMaximum`
- **summary**:    Maximum amount of funds that should be placed in a deposit for making a proposal. 
 
### proposalBondMinimum: `u128`
- **interface**: `api.consts.treasury.proposalBondMinimum`
- **summary**:    Minimum amount of funds that should be placed in a deposit for making a proposal. 
 
### spendPeriod: `u32`
- **interface**: `api.consts.treasury.spendPeriod`
- **summary**:    Period between successive spends. 

___


## utility
 
### batchedCallsLimit: `u32`
- **interface**: `api.consts.utility.batchedCallsLimit`
- **summary**:    The limit on the number of batched calls. 

___


## vesting
 
### maxVestingSchedules: `u32`
- **interface**: `api.consts.vesting.maxVestingSchedules`
 
### minVestedTransfer: `u128`
- **interface**: `api.consts.vesting.minVestedTransfer`
- **summary**:    The minimum amount transferred to call `vested_transfer`. 

___


## voterList
 
### bagThresholds: `Vec<u64>`
- **interface**: `api.consts.voterList.bagThresholds`
- **summary**:    The list of thresholds separating the various bags. 

   Ids are separated into unsorted bags according to their score. This specifies the  thresholds separating the bags. An id's bag is the largest bag for which the id's score  is less than or equal to its upper threshold. 

   When ids are iterated, higher bags are iterated completely before lower bags. This means  that iteration is _semi-sorted_: ids of higher score tend to come before ids of lower  score, but peer ids within a particular bag are sorted in insertion order. 

   #### Expressing the constant 

   This constant must be sorted in strictly increasing order. Duplicate items are not  permitted. 

   There is an implied upper limit of `Score::MAX`; that value does not need to be  specified within the bag. For any two threshold lists, if one ends with  `Score::MAX`, the other one does not, and they are otherwise equal, the two  lists will behave identically. 

   #### Calculation 

   It is recommended to generate the set of thresholds in a geometric series, such that  there exists some constant ratio such that `threshold[k + 1] == (threshold[k] *  constant_ratio).max(threshold[k] + 1)` for all `k`. 

   The helpers in the `/utils/frame/generate-bags` module can simplify this calculation. 

   #### Examples 

   - If `BagThresholds::get().is_empty()`, then all ids are put into the same bag, and  iteration is strictly in insertion order. 

  - If `BagThresholds::get().len() == 64`, and the thresholds are determined according to the procedure given above, then the constant ratio is equal to 2. 

  - If `BagThresholds::get().len() == 200`, and the thresholds are determined according to the procedure given above, then the constant ratio is approximately equal to 1.248. 

  - If the threshold list begins `[1, 2, 3, ...]`, then an id with score 0 or 1 will fall into bag 0, an id with score 2 will fall into bag 1, etc. 

   #### Migration 

   In the event that this list ever changes, a copy of the old bags list must be retained.  With that `List::migrate` can be called, which will perform the appropriate migration. 
