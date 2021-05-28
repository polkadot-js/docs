---
title: Constants
---

The following sections contain the module constants, also known as parameter types. These can only be changed as part of a runtime upgrade. On the api, these are exposed via `api.consts.<module>.<method>`. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[babe](#babe)**

- **[balances](#balances)**

- **[bounties](#bounties)**

- **[contracts](#contracts)**

- **[democracy](#democracy)**

- **[electionProviderMultiPhase](#electionprovidermultiphase)**

- **[elections](#elections)**

- **[gilt](#gilt)**

- **[identity](#identity)**

- **[indices](#indices)**

- **[lottery](#lottery)**

- **[multisig](#multisig)**

- **[proxy](#proxy)**

- **[recovery](#recovery)**

- **[society](#society)**

- **[staking](#staking)**

- **[system](#system)**

- **[timestamp](#timestamp)**

- **[tips](#tips)**

- **[transactionPayment](#transactionpayment)**

- **[treasury](#treasury)**

- **[vesting](#vesting)**


___


## babe
 
### epochDuration: `u64`
- **interface**: `api.consts.babe.epochDuration`
- **summary**:   The amount of time, in slots, that each epoch should last. NOTE: Currently it is not possible to change the epoch duration after the chain has started. Attempting to do so will brick block production. 
 
### expectedBlockTime: `Moment`
- **interface**: `api.consts.babe.expectedBlockTime`
- **summary**:   The expected average block time at which BABE should be creating blocks. Since BABE is probabilistic it is not trivial to figure out what the expected average block time should be based on the slot duration and the security parameter `c` (where `1 - c` represents the probability of a slot being empty). 

___


## balances
 
### existentialDeposit: `Balance`
- **interface**: `api.consts.balances.existentialDeposit`
- **summary**:   The minimum amount required to keep an account open. 

___


## bounties
 
### bountyCuratorDeposit: `Permill`
- **interface**: `api.consts.bounties.bountyCuratorDeposit`
- **summary**:   Percentage of the curator fee that will be reserved upfront as deposit for bounty curator. 
 
### bountyDepositBase: `BalanceOf`
- **interface**: `api.consts.bounties.bountyDepositBase`
- **summary**:   The amount held on deposit for placing a bounty proposal. 
 
### bountyDepositPayoutDelay: `BlockNumber`
- **interface**: `api.consts.bounties.bountyDepositPayoutDelay`
- **summary**:   The delay period for which a bounty beneficiary need to wait before claim the payout. 
 
### bountyUpdatePeriod: `BlockNumber`
- **interface**: `api.consts.bounties.bountyUpdatePeriod`
- **summary**:   Bounty duration in blocks. 
 
### bountyValueMinimum: `BalanceOf`
- **interface**: `api.consts.bounties.bountyValueMinimum`
- **summary**:   Minimum value for a bounty. 
 
### dataDepositPerByte: `BalanceOf`
- **interface**: `api.consts.bounties.dataDepositPerByte`
- **summary**:   The amount held on deposit per byte within bounty description. 
 
### maximumReasonLength: `u32`
- **interface**: `api.consts.bounties.maximumReasonLength`
- **summary**:   Maximum acceptable reason length. 

___


## contracts
 
### deletionQueueDepth: `u32`
- **interface**: `api.consts.contracts.deletionQueueDepth`
- **summary**:   The maximum number of tries that can be queued for deletion. 
 
### deletionWeightLimit: `Weight`
- **interface**: `api.consts.contracts.deletionWeightLimit`
- **summary**:   The maximum amount of weight that can be consumed per block for lazy trie removal. 
 
### depositPerContract: `BalanceOf`
- **interface**: `api.consts.contracts.depositPerContract`
- **summary**:   The balance every contract needs to deposit to stay alive indefinitely. 

  This is different from the [`Self::TombstoneDeposit`] because this only needs to be deposited while the contract is alive. Costs for additional storage are added to this base cost. 

  This is a simple way to ensure that contracts with empty storage eventually get deleted by making them pay rent. This creates an incentive to remove them early in order to save rent. 
 
### depositPerStorageByte: `BalanceOf`
- **interface**: `api.consts.contracts.depositPerStorageByte`
- **summary**:   The balance a contract needs to deposit per storage byte to stay alive indefinitely. 

  Let's suppose the deposit is 1,000 BU (balance units)/byte and the rent is 1 BU/byte/day, then a contract with 1,000,000 BU that uses 1,000 bytes of storage would pay no rent. But if the balance reduced to 500,000 BU and the storage stayed the same at 1,000, then it would pay 500 BU/day. 
 
### depositPerStorageItem: `BalanceOf`
- **interface**: `api.consts.contracts.depositPerStorageItem`
- **summary**:   The balance a contract needs to deposit per storage item to stay alive indefinitely. 

  It works the same as [`Self::DepositPerStorageByte`] but for storage items. 
 
### rentFraction: `Perbill`
- **interface**: `api.consts.contracts.rentFraction`
- **summary**:   The fraction of the deposit that should be used as rent per block. 

  When a contract hasn't enough balance deposited to stay alive indefinitely it needs to pay per block for the storage it consumes that is not covered by the deposit. This determines how high this rent payment is per block as a fraction of the deposit. 
 
### schedule: `Schedule`
- **interface**: `api.consts.contracts.schedule`
- **summary**:   Cost schedule and limits. 
 
### signedClaimHandicap: `BlockNumber`
- **interface**: `api.consts.contracts.signedClaimHandicap`
- **summary**:   Number of block delay an extrinsic claim surcharge has. 

  When claim surcharge is called by an extrinsic the rent is checked for current_block - delay 
 
### surchargeReward: `BalanceOf`
- **interface**: `api.consts.contracts.surchargeReward`
- **summary**:   Reward that is received by the party whose touch has led to removal of a contract. 
 
### tombstoneDeposit: `BalanceOf`
- **interface**: `api.consts.contracts.tombstoneDeposit`
- **summary**:   The minimum amount required to generate a tombstone. 

___


## democracy
 
### cooloffPeriod: `BlockNumber`
- **interface**: `api.consts.democracy.cooloffPeriod`
- **summary**:   Period in blocks where an external proposal may not be re-submitted after being vetoed. 
 
### enactmentPeriod: `BlockNumber`
- **interface**: `api.consts.democracy.enactmentPeriod`
- **summary**:   The minimum period of locking and the period between a proposal being approved and enacted. 

  It should generally be a little more than the unstake period to ensure that voting stakers have an opportunity to remove themselves from the system in the case where they are on the losing side of a vote. 
 
### fastTrackVotingPeriod: `BlockNumber`
- **interface**: `api.consts.democracy.fastTrackVotingPeriod`
- **summary**:   Minimum voting period allowed for an emergency referendum. 
 
### launchPeriod: `BlockNumber`
- **interface**: `api.consts.democracy.launchPeriod`
- **summary**:   How often (in blocks) new public referenda are launched. 
 
### maxVotes: `u32`
- **interface**: `api.consts.democracy.maxVotes`
- **summary**:   The maximum number of votes for an account. 
 
### minimumDeposit: `BalanceOf`
- **interface**: `api.consts.democracy.minimumDeposit`
- **summary**:   The minimum amount to be used as a deposit for a public referendum proposal. 
 
### preimageByteDeposit: `BalanceOf`
- **interface**: `api.consts.democracy.preimageByteDeposit`
- **summary**:   The amount of balance that must be deposited per byte of preimage stored. 
 
### votingPeriod: `BlockNumber`
- **interface**: `api.consts.democracy.votingPeriod`
- **summary**:   How often (in blocks) to check for new votes. 

___


## electionProviderMultiPhase
 
### offchainRepeat: `BlockNumber`
- **interface**: `api.consts.electionProviderMultiPhase.offchainRepeat`
- **summary**:   The repeat threshold of the offchain worker. 

  For example, if it is 5, that means that at least 5 blocks will elapse between attempts to submit the worker's solution. 
 
### signedPhase: `BlockNumber`
- **interface**: `api.consts.electionProviderMultiPhase.signedPhase`
- **summary**:   Duration of the signed phase. 
 
### solutionImprovementThreshold: `Perbill`
- **interface**: `api.consts.electionProviderMultiPhase.solutionImprovementThreshold`
- **summary**:   The minimum amount of improvement to the solution score that defines a solution as "better" (in any phase). 
 
### unsignedPhase: `BlockNumber`
- **interface**: `api.consts.electionProviderMultiPhase.unsignedPhase`
- **summary**:   Duration of the unsigned phase. 

___


## elections
 
### candidacyBond: `BalanceOf`
- **interface**: `api.consts.elections.candidacyBond`
- **summary**:   How much should be locked up in order to submit one's candidacy. 
 
### desiredMembers: `u32`
- **interface**: `api.consts.elections.desiredMembers`
- **summary**:   Number of members to elect. 
 
### desiredRunnersUp: `u32`
- **interface**: `api.consts.elections.desiredRunnersUp`
- **summary**:   Number of runners_up to keep. 
 
### palletId: `LockIdentifier`
- **interface**: `api.consts.elections.palletId`
- **summary**:   Identifier for the elections-phragmen pallet's lock 
 
### termDuration: `BlockNumber`
- **interface**: `api.consts.elections.termDuration`
- **summary**:   How long each seat is kept. This defines the next block number at which an election round will happen. If set to zero, no elections are ever triggered and the module will be in passive mode. 
 
### votingBondBase: `BalanceOf`
- **interface**: `api.consts.elections.votingBondBase`
- **summary**:   Base deposit associated with voting. 

  This should be sensibly high to economically ensure the pallet cannot be attacked by creating a gigantic number of votes. 
 
### votingBondFactor: `BalanceOf`
- **interface**: `api.consts.elections.votingBondFactor`
- **summary**:   The amount of bond that need to be locked for each vote (32 bytes). 

___


## gilt
 
### fifoQueueLen: `u32`
- **interface**: `api.consts.gilt.fifoQueueLen`
- **summary**:   Portion of the queue which is free from ordering and just a FIFO. 

  Must be no greater than `MaxQueueLen`. 
 
### intakePeriod: `BlockNumber`
- **interface**: `api.consts.gilt.intakePeriod`
- **summary**:   The number of blocks between consecutive attempts to issue more gilts in an effort to get to the target amount to be frozen. 

  A larger value results in fewer storage hits each block, but a slower period to get to the target. 
 
### maxIntakeBids: `u32`
- **interface**: `api.consts.gilt.maxIntakeBids`
- **summary**:   The maximum amount of bids that can be turned into issued gilts each block. A larger value here means less of the block available for transactions should there be a glut of bids to make into gilts to reach the target. 
 
### maxQueueLen: `u32`
- **interface**: `api.consts.gilt.maxQueueLen`
- **summary**:   Maximum number of items that may be in each duration queue. 
 
### minFreeze: `BalanceOf`
- **interface**: `api.consts.gilt.minFreeze`
- **summary**:   The minimum amount of funds that may be offered to freeze for a gilt. Note that this does not actually limit the amount which may be frozen in a gilt since gilts may be split up in order to satisfy the desired amount of funds under gilts. 

  It should be at least big enough to ensure that there is no possible storage spam attack or queue-filling attack. 
 
### period: `BlockNumber`
- **interface**: `api.consts.gilt.period`
- **summary**:   The base period for the duration queues. This is the common multiple across all supported freezing durations that can be bid upon. 
 
### queueCount: `u32`
- **interface**: `api.consts.gilt.queueCount`
- **summary**:   Number of duration queues in total. This sets the maximum duration supported, which is this value multiplied by `Period`. 

___


## identity
 
### basicDeposit: `BalanceOf`
- **interface**: `api.consts.identity.basicDeposit`
- **summary**:   The amount held on deposit for a registered identity 
 
### fieldDeposit: `BalanceOf`
- **interface**: `api.consts.identity.fieldDeposit`
- **summary**:   The amount held on deposit per additional field for a registered identity. 
 
### maxAdditionalFields: `u32`
- **interface**: `api.consts.identity.maxAdditionalFields`
- **summary**:   Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O required to access an identity, but can be pretty high. 
 
### maxRegistrars: `u32`
- **interface**: `api.consts.identity.maxRegistrars`
- **summary**:   Maxmimum number of registrars allowed in the system. Needed to bound the complexity of, e.g., updating judgements. 
 
### maxSubAccounts: `u32`
- **interface**: `api.consts.identity.maxSubAccounts`
- **summary**:   The maximum number of sub-accounts allowed per identified account. 
 
### subAccountDeposit: `BalanceOf`
- **interface**: `api.consts.identity.subAccountDeposit`
- **summary**:   The amount held on deposit for a registered subaccount. This should account for the fact that one storage item's value will increase by the size of an account ID, and there will be another trie item whose value is the size of an account ID plus 32 bytes. 

___


## indices
 
### deposit: `BalanceOf`
- **interface**: `api.consts.indices.deposit`
- **summary**:   The deposit needed for reserving an index. 

___


## lottery
 
### maxCalls: `u32`
- **interface**: `api.consts.lottery.maxCalls`
- **summary**:   The max number of calls available in a single lottery. 
 
### palletId: `PalletId`
- **interface**: `api.consts.lottery.palletId`
- **summary**:   The Lottery's pallet id 

___


## multisig
 
### depositBase: `BalanceOf`
- **interface**: `api.consts.multisig.depositBase`
- **summary**:   The base amount of currency needed to reserve for creating a multisig execution or to store a dispatch call for later. 

  This is held for an additional storage item whose value size is `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is `32 + sizeof(AccountId)` bytes. 
 
### depositFactor: `BalanceOf`
- **interface**: `api.consts.multisig.depositFactor`
- **summary**:   The amount of currency needed per unit threshold when creating a multisig execution. 

  This is held for adding 32 bytes more into a pre-existing storage value. 
 
### maxSignatories: `u16`
- **interface**: `api.consts.multisig.maxSignatories`
- **summary**:   The maximum amount of signatories allowed in the multisig. 

___


## proxy
 
### announcementDepositBase: `BalanceOf`
- **interface**: `api.consts.proxy.announcementDepositBase`
- **summary**:   The base amount of currency needed to reserve for creating an announcement. 

  This is held when a new storage item holding a `Balance` is created (typically 16 bytes). 
 
### announcementDepositFactor: `BalanceOf`
- **interface**: `api.consts.proxy.announcementDepositFactor`
- **summary**:   The amount of currency needed per announcement made. 

  This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes) into a pre-existing storage value. 
 
### maxPending: `u32`
- **interface**: `api.consts.proxy.maxPending`
- **summary**:   The maximum amount of time-delayed announcements that are allowed to be pending. 
 
### maxProxies: `u16`
- **interface**: `api.consts.proxy.maxProxies`
- **summary**:   The maximum amount of proxies allowed for a single account. 
 
### proxyDepositBase: `BalanceOf`
- **interface**: `api.consts.proxy.proxyDepositBase`
- **summary**:   The base amount of currency needed to reserve for creating a proxy. 

  This is held for an additional storage item whose value size is `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes. 
 
### proxyDepositFactor: `BalanceOf`
- **interface**: `api.consts.proxy.proxyDepositFactor`
- **summary**:   The amount of currency needed per proxy added. 

  This is held for adding 32 bytes plus an instance of `ProxyType` more into a pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take into account `32 + proxy_type.encode().len()` bytes of data. 

___


## recovery
 
### configDepositBase: `BalanceOf`
- **interface**: `api.consts.recovery.configDepositBase`
- **summary**:   The base amount of currency needed to reserve for creating a recovery configuration. 

  This is held for an additional storage item whose value size is `2 + sizeof(BlockNumber, Balance)` bytes. 
 
### friendDepositFactor: `BalanceOf`
- **interface**: `api.consts.recovery.friendDepositFactor`
- **summary**:   The amount of currency needed per additional user when creating a recovery configuration. 

  This is held for adding `sizeof(AccountId)` bytes more into a pre-existing storage value. 
 
### maxFriends: `u16`
- **interface**: `api.consts.recovery.maxFriends`
- **summary**:   The maximum amount of friends allowed in a recovery configuration. 
 
### recoveryDeposit: `BalanceOf`
- **interface**: `api.consts.recovery.recoveryDeposit`
- **summary**:   The base amount of currency needed to reserve for starting a recovery. 

  This is primarily held for deterring malicious recovery attempts, and should have a value large enough that a bad actor would choose not to place this deposit. It also acts to fund additional storage item whose value size is `sizeof(BlockNumber, Balance + T * AccountId)` bytes. Where T is a configurable threshold. 

___


## society
 
### candidateDeposit: `BalanceOf`
- **interface**: `api.consts.society.candidateDeposit`
- **summary**:   The minimum amount of a deposit required for a bid to be made. 
 
### challengePeriod: `BlockNumber`
- **interface**: `api.consts.society.challengePeriod`
- **summary**:   The number of blocks between membership challenges. 
 
### maxCandidateIntake: `u32`
- **interface**: `api.consts.society.maxCandidateIntake`
- **summary**:   Maximum candidate intake per round. 
 
### maxStrikes: `u32`
- **interface**: `api.consts.society.maxStrikes`
- **summary**:   The number of times a member may vote the wrong way (or not at all, when they are a skeptic) before they become suspended. 
 
### palletId: `PalletId`
- **interface**: `api.consts.society.palletId`
- **summary**:   The societies's module id 
 
### periodSpend: `BalanceOf`
- **interface**: `api.consts.society.periodSpend`
- **summary**:   The amount of incentive paid within each period. Doesn't include VoterTip. 
 
### rotationPeriod: `BlockNumber`
- **interface**: `api.consts.society.rotationPeriod`
- **summary**:   The number of blocks between candidate/membership rotation periods. 
 
### wrongSideDeduction: `BalanceOf`
- **interface**: `api.consts.society.wrongSideDeduction`
- **summary**:   The amount of the unpaid reward that gets deducted in the case that either a skeptic doesn't vote or someone votes in the wrong way. 

___


## staking
 
### bondingDuration: `EraIndex`
- **interface**: `api.consts.staking.bondingDuration`
- **summary**:   Number of eras that staked funds must remain bonded for. 
 
### maxNominations: `u32`
- **interface**: `api.consts.staking.maxNominations`
- **summary**:   Maximum number of nominations per nominator. 
 
### maxNominatorRewardedPerValidator: `u32`
- **interface**: `api.consts.staking.maxNominatorRewardedPerValidator`
- **summary**:   The maximum number of nominators rewarded for each validator. 

  For each validator only the `$MaxNominatorRewardedPerValidator` biggest stakers can claim their reward. This used to limit the i/o cost for the nominator payout. 
 
### sessionsPerEra: `SessionIndex`
- **interface**: `api.consts.staking.sessionsPerEra`
- **summary**:   Number of sessions per era. 
 
### slashDeferDuration: `EraIndex`
- **interface**: `api.consts.staking.slashDeferDuration`
- **summary**:   Number of eras that slashes are deferred by, after computation. 

  This should be less than the bonding duration. Set to 0 if slashes should be applied immediately, without opportunity for intervention. 

___


## system
 
### blockHashCount: `BlockNumber`
- **interface**: `api.consts.system.blockHashCount`
- **summary**:   Maximum number of block number to block hash mappings to keep (oldest pruned first). 
 
### blockLength: `BlockLength`
- **interface**: `api.consts.system.blockLength`
- **summary**:   The maximum length of a block (in bytes). 
 
### blockWeights: `BlockWeights`
- **interface**: `api.consts.system.blockWeights`
- **summary**:   Block & extrinsics weights: base values and limits. 
 
### dbWeight: `RuntimeDbWeight`
- **interface**: `api.consts.system.dbWeight`
- **summary**:   The weight of runtime database operations the runtime can invoke. 
 
### ss58Prefix: `u8`
- **interface**: `api.consts.system.ss58Prefix`
- **summary**:   The designated SS85 prefix of this chain. 

  This replaces the "ss58Format" property declared in the chain spec. Reason is that the runtime should know about the prefix in order to make use of it as an identifier of the chain. 
 
### version: `RuntimeVersion`
- **interface**: `api.consts.system.version`
- **summary**:   Get the chain's current version. 

___


## timestamp
 
### minimumPeriod: `Moment`
- **interface**: `api.consts.timestamp.minimumPeriod`
- **summary**:   The minimum period between blocks. Beware that this is different to the *expected* period that the block production apparatus provides. Your chosen consensus system will generally work with this to determine a sensible block time. e.g. For Aura, it will be double this period on default settings. 

___


## tips
 
### dataDepositPerByte: `BalanceOf`
- **interface**: `api.consts.tips.dataDepositPerByte`
- **summary**:   The amount held on deposit per byte within the tip report reason. 
 
### maximumReasonLength: `u32`
- **interface**: `api.consts.tips.maximumReasonLength`
- **summary**:   Maximum acceptable reason length. 
 
### tipCountdown: `BlockNumber`
- **interface**: `api.consts.tips.tipCountdown`
- **summary**:   The period for which a tip remains open after is has achieved threshold tippers. 
 
### tipFindersFee: `Percent`
- **interface**: `api.consts.tips.tipFindersFee`
- **summary**:   The amount of the final tip which goes to the original reporter of the tip. 
 
### tipReportDepositBase: `BalanceOf`
- **interface**: `api.consts.tips.tipReportDepositBase`
- **summary**:   The amount held on deposit for placing a tip report. 

___


## transactionPayment
 
### transactionByteFee: `BalanceOf`
- **interface**: `api.consts.transactionPayment.transactionByteFee`
- **summary**:   The fee to be paid for making a transaction; the per-byte portion. 
 
### weightToFee: `Vec<WeightToFeeCoefficient>`
- **interface**: `api.consts.transactionPayment.weightToFee`
- **summary**:   The polynomial that is applied in order to derive fee from weight. 

___


## treasury
 
### burn: `Permill`
- **interface**: `api.consts.treasury.burn`
- **summary**:   Percentage of spare funds (if any) that are burnt per spend period. 
 
### palletId: `PalletId`
- **interface**: `api.consts.treasury.palletId`
- **summary**:   The treasury's module id, used for deriving its sovereign account ID. 
 
### proposalBond: `Permill`
- **interface**: `api.consts.treasury.proposalBond`
- **summary**:   Fraction of a proposal's value that should be bonded in order to place the proposal. An accepted proposal gets these back. A rejected proposal does not. 
 
### proposalBondMinimum: `BalanceOf`
- **interface**: `api.consts.treasury.proposalBondMinimum`
- **summary**:   Minimum amount of funds that should be placed in a deposit for making a proposal. 
 
### spendPeriod: `BlockNumber`
- **interface**: `api.consts.treasury.spendPeriod`
- **summary**:   Period between successive spends. 

___


## vesting
 
### minVestedTransfer: `BalanceOf`
- **interface**: `api.consts.vesting.minVestedTransfer`
- **summary**:   The minimum amount transferred to call `vested_transfer`. 
