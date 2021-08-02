---
title: Events
---

Events are emitted for certain operations on the runtime. The following sections describe the events that are part of the default Substrate runtime. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[assets](#assets)**

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

- **[offences](#offences)**

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

- **[utility](#utility)**

- **[vesting](#vesting)**


___


## assets
 
### ApprovalCancelled(`AssetId`, `AccountId`, `AccountId`)
- **interface**: `api.events.assets.ApprovalCancelled.is`
- **summary**:    An approval for account `delegate` was cancelled by `owner`.  \[id, owner, delegate\] 
 
### ApprovedTransfer(`AssetId`, `AccountId`, `AccountId`, `TAssetBalance`)
- **interface**: `api.events.assets.ApprovedTransfer.is`
- **summary**:    (Additional) funds have been approved for transfer to a destination account.  \[asset_id, source, delegate, amount\] 
 
### AssetFrozen(`AssetId`)
- **interface**: `api.events.assets.AssetFrozen.is`
- **summary**:    Some asset `asset_id` was frozen. \[asset_id\] 
 
### AssetStatusChanged(`AssetId`)
- **interface**: `api.events.assets.AssetStatusChanged.is`
- **summary**:    An asset has had its attributes changed by the `Force` origin.  \[id\] 
 
### AssetThawed(`AssetId`)
- **interface**: `api.events.assets.AssetThawed.is`
- **summary**:    Some asset `asset_id` was thawed. \[asset_id\] 
 
### Burned(`AssetId`, `AccountId`, `TAssetBalance`)
- **interface**: `api.events.assets.Burned.is`
- **summary**:    Some assets were destroyed. \[asset_id, owner, balance\] 
 
### Created(`AssetId`, `AccountId`, `AccountId`)
- **interface**: `api.events.assets.Created.is`
- **summary**:    Some asset class was created. \[asset_id, creator, owner\] 
 
### Destroyed(`AssetId`)
- **interface**: `api.events.assets.Destroyed.is`
- **summary**:    An asset class was destroyed. 
 
### ForceCreated(`AssetId`, `AccountId`)
- **interface**: `api.events.assets.ForceCreated.is`
- **summary**:    Some asset class was force-created. \[asset_id, owner\] 
 
### Frozen(`AssetId`, `AccountId`)
- **interface**: `api.events.assets.Frozen.is`
- **summary**:    Some account `who` was frozen. \[asset_id, who\] 
 
### Issued(`AssetId`, `AccountId`, `TAssetBalance`)
- **interface**: `api.events.assets.Issued.is`
- **summary**:    Some assets were issued. \[asset_id, owner, total_supply\] 
 
### MetadataCleared(`AssetId`)
- **interface**: `api.events.assets.MetadataCleared.is`
- **summary**:    Metadata has been cleared for an asset. \[asset_id\] 
 
### MetadataSet(`AssetId`, `Bytes`, `Bytes`, `u8`, `bool`)
- **interface**: `api.events.assets.MetadataSet.is`
- **summary**:    New metadata has been set for an asset. \[asset_id, name, symbol, decimals, is_frozen\] 
 
### OwnerChanged(`AssetId`, `AccountId`)
- **interface**: `api.events.assets.OwnerChanged.is`
- **summary**:    The owner changed \[asset_id, owner\] 
 
### TeamChanged(`AssetId`, `AccountId`, `AccountId`, `AccountId`)
- **interface**: `api.events.assets.TeamChanged.is`
- **summary**:    The management team changed \[asset_id, issuer, admin, freezer\] 
 
### Thawed(`AssetId`, `AccountId`)
- **interface**: `api.events.assets.Thawed.is`
- **summary**:    Some account `who` was thawed. \[asset_id, who\] 
 
### Transferred(`AssetId`, `AccountId`, `AccountId`, `TAssetBalance`)
- **interface**: `api.events.assets.Transferred.is`
- **summary**:    Some assets were transferred. \[asset_id, from, to, amount\] 
 
### TransferredApproved(`AssetId`, `AccountId`, `AccountId`, `AccountId`, `TAssetBalance`)
- **interface**: `api.events.assets.TransferredApproved.is`
- **summary**:    An `amount` was transferred in its entirety from `owner` to `destination` by  the approved `delegate`.  \[id, owner, delegate, destination\] 

___


## balances
 
### BalanceSet(`AccountId`, `Balance`, `Balance`)
- **interface**: `api.events.balances.BalanceSet.is`
- **summary**:    A balance was set by root. \[who, free, reserved\] 
 
### Deposit(`AccountId`, `Balance`)
- **interface**: `api.events.balances.Deposit.is`
- **summary**:    Some amount was deposited (e.g. for transaction fees). \[who, deposit\] 
 
### DustLost(`AccountId`, `Balance`)
- **interface**: `api.events.balances.DustLost.is`
- **summary**:    An account was removed whose balance was non-zero but below ExistentialDeposit,  resulting in an outright loss. \[account, balance\] 
 
### Endowed(`AccountId`, `Balance`)
- **interface**: `api.events.balances.Endowed.is`
- **summary**:    An account was created with some free balance. \[account, free_balance\] 
 
### Reserved(`AccountId`, `Balance`)
- **interface**: `api.events.balances.Reserved.is`
- **summary**:    Some balance was reserved (moved from free to reserved). \[who, value\] 
 
### ReserveRepatriated(`AccountId`, `AccountId`, `Balance`, `BalanceStatus`)
- **interface**: `api.events.balances.ReserveRepatriated.is`
- **summary**:    Some balance was moved from the reserve of the first account to the second account.  Final argument indicates the destination balance type.  \[from, to, balance, destination_status\] 
 
### Transfer(`AccountId`, `AccountId`, `Balance`)
- **interface**: `api.events.balances.Transfer.is`
- **summary**:    Transfer succeeded. \[from, to, value\] 
 
### Unreserved(`AccountId`, `Balance`)
- **interface**: `api.events.balances.Unreserved.is`
- **summary**:    Some balance was unreserved (moved from reserved to free). \[who, value\] 

___


## bounties
 
### BountyAwarded(`BountyIndex`, `AccountId`)
- **interface**: `api.events.bounties.BountyAwarded.is`
- **summary**:    A bounty is awarded to a beneficiary. \[index, beneficiary\] 
 
### BountyBecameActive(`BountyIndex`)
- **interface**: `api.events.bounties.BountyBecameActive.is`
- **summary**:    A bounty proposal is funded and became active. \[index\] 
 
### BountyCanceled(`BountyIndex`)
- **interface**: `api.events.bounties.BountyCanceled.is`
- **summary**:    A bounty is cancelled. \[index\] 
 
### BountyClaimed(`BountyIndex`, `Balance`, `AccountId`)
- **interface**: `api.events.bounties.BountyClaimed.is`
- **summary**:    A bounty is claimed by beneficiary. \[index, payout, beneficiary\] 
 
### BountyExtended(`BountyIndex`)
- **interface**: `api.events.bounties.BountyExtended.is`
- **summary**:    A bounty expiry is extended. \[index\] 
 
### BountyProposed(`BountyIndex`)
- **interface**: `api.events.bounties.BountyProposed.is`
- **summary**:    New bounty proposal. \[index\] 
 
### BountyRejected(`BountyIndex`, `Balance`)
- **interface**: `api.events.bounties.BountyRejected.is`
- **summary**:    A bounty proposal was rejected; funds were slashed. \[index, bond\] 

___


## contracts
 
### CodeRemoved(`Hash`)
- **interface**: `api.events.contracts.CodeRemoved.is`
- **summary**:    A code with the specified hash was removed.  \[code_hash\] 

   This happens when the last contract that uses this code hash was removed or evicted. 
 
### CodeStored(`Hash`)
- **interface**: `api.events.contracts.CodeStored.is`
- **summary**:    Code with the specified hash has been stored. \[code_hash\] 
 
### ContractEmitted(`AccountId`, `Bytes`)
- **interface**: `api.events.contracts.ContractEmitted.is`
- **summary**:    A custom event emitted by the contract.  \[contract, data\] 

   #### Params 

   - `contract`: The contract that emitted the event. 

  - `data`: Data supplied by the contract. Metadata generated during contract           compilation is needed to decode it. 
 
### Evicted(`AccountId`)
- **interface**: `api.events.contracts.Evicted.is`
- **summary**:    Contract has been evicted and is now in tombstone state. \[contract\] 
 
### Instantiated(`AccountId`, `AccountId`)
- **interface**: `api.events.contracts.Instantiated.is`
- **summary**:    Contract deployed by address at the specified address. \[deployer, contract\] 
 
### Restored(`AccountId`, `AccountId`, `Hash`, `Balance`)
- **interface**: `api.events.contracts.Restored.is`
- **summary**:    Restoration of a contract has been successful.  \[restorer, dest, code_hash, rent_allowance\] 

   #### Params 

   - `restorer`: Account ID of the restoring contract. 

  - `dest`: Account ID of the restored contract.

  - `code_hash`: Code hash of the restored contract.

  - `rent_allowance`: Rent allowance of the restored contract.
 
### ScheduleUpdated(`u32`)
- **interface**: `api.events.contracts.ScheduleUpdated.is`
- **summary**:    Triggered when the current schedule is updated.  \[version\] 

   #### Params 

   - `version`: The version of the newly set schedule. 
 
### Terminated(`AccountId`, `AccountId`)
- **interface**: `api.events.contracts.Terminated.is`
- **summary**:    Contract has been terminated without leaving a tombstone.  \[contract, beneficiary\] 

   #### Params 

   - `contract`: The contract that was terminated. 

  - `beneficiary`: The account that received the contracts remaining balance.

   #### Note 

   The only way for a contract to be removed without a tombstone and emitting  this event is by calling `seal_terminate`. 

___


## council
 
### Approved(`Hash`)
- **interface**: `api.events.council.Approved.is`
- **summary**:    A motion was approved by the required threshold.  \[proposal_hash\] 
 
### Closed(`Hash`, `MemberCount`, `MemberCount`)
- **interface**: `api.events.council.Closed.is`
- **summary**:    A proposal was closed because its threshold was reached or after its duration was up.  \[proposal_hash, yes, no\] 
 
### Disapproved(`Hash`)
- **interface**: `api.events.council.Disapproved.is`
- **summary**:    A motion was not approved by the required threshold.  \[proposal_hash\] 
 
### Executed(`Hash`, `DispatchResult`)
- **interface**: `api.events.council.Executed.is`
- **summary**:    A motion was executed; result will be `Ok` if it returned without error.  \[proposal_hash, result\] 
 
### MemberExecuted(`Hash`, `DispatchResult`)
- **interface**: `api.events.council.MemberExecuted.is`
- **summary**:    A single member did some action; result will be `Ok` if it returned without error.  \[proposal_hash, result\] 
 
### Proposed(`AccountId`, `ProposalIndex`, `Hash`, `MemberCount`)
- **interface**: `api.events.council.Proposed.is`
- **summary**:    A motion (given hash) has been proposed (by given account) with a threshold (given  `MemberCount`).  \[account, proposal_index, proposal_hash, threshold\] 
 
### Voted(`AccountId`, `Hash`, `bool`, `MemberCount`, `MemberCount`)
- **interface**: `api.events.council.Voted.is`
- **summary**:    A motion (given hash) has been voted on by given account, leaving  a tally (yes votes and no votes given respectively as `MemberCount`).  \[account, proposal_hash, voted, yes, no\] 

___


## democracy
 
### Blacklisted(`Hash`)
- **interface**: `api.events.democracy.Blacklisted.is`
- **summary**:    A proposal \[hash\] has been blacklisted permanently. 
 
### Cancelled(`ReferendumIndex`)
- **interface**: `api.events.democracy.Cancelled.is`
- **summary**:    A referendum has been cancelled. \[ref_index\] 
 
### Delegated(`AccountId`, `AccountId`)
- **interface**: `api.events.democracy.Delegated.is`
- **summary**:    An account has delegated their vote to another account. \[who, target\] 
 
### Executed(`ReferendumIndex`, `DispatchResult`)
- **interface**: `api.events.democracy.Executed.is`
- **summary**:    A proposal has been enacted. \[ref_index, result\] 
 
### ExternalTabled()
- **interface**: `api.events.democracy.ExternalTabled.is`
- **summary**:    An external proposal has been tabled. 
 
### NotPassed(`ReferendumIndex`)
- **interface**: `api.events.democracy.NotPassed.is`
- **summary**:    A proposal has been rejected by referendum. \[ref_index\] 
 
### Passed(`ReferendumIndex`)
- **interface**: `api.events.democracy.Passed.is`
- **summary**:    A proposal has been approved by referendum. \[ref_index\] 
 
### PreimageInvalid(`Hash`, `ReferendumIndex`)
- **interface**: `api.events.democracy.PreimageInvalid.is`
- **summary**:    A proposal could not be executed because its preimage was invalid.  \[proposal_hash, ref_index\] 
 
### PreimageMissing(`Hash`, `ReferendumIndex`)
- **interface**: `api.events.democracy.PreimageMissing.is`
- **summary**:    A proposal could not be executed because its preimage was missing.  \[proposal_hash, ref_index\] 
 
### PreimageNoted(`Hash`, `AccountId`, `Balance`)
- **interface**: `api.events.democracy.PreimageNoted.is`
- **summary**:    A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\] 
 
### PreimageReaped(`Hash`, `AccountId`, `Balance`, `AccountId`)
- **interface**: `api.events.democracy.PreimageReaped.is`
- **summary**:    A registered preimage was removed and the deposit collected by the reaper.  \[proposal_hash, provider, deposit, reaper\] 
 
### PreimageUsed(`Hash`, `AccountId`, `Balance`)
- **interface**: `api.events.democracy.PreimageUsed.is`
- **summary**:    A proposal preimage was removed and used (the deposit was returned).  \[proposal_hash, provider, deposit\] 
 
### Proposed(`PropIndex`, `Balance`)
- **interface**: `api.events.democracy.Proposed.is`
- **summary**:    A motion has been proposed by a public account. \[proposal_index, deposit\] 
 
### Started(`ReferendumIndex`, `VoteThreshold`)
- **interface**: `api.events.democracy.Started.is`
- **summary**:    A referendum has begun. \[ref_index, threshold\] 
 
### Tabled(`PropIndex`, `Balance`, `Vec<AccountId>`)
- **interface**: `api.events.democracy.Tabled.is`
- **summary**:    A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\] 
 
### Undelegated(`AccountId`)
- **interface**: `api.events.democracy.Undelegated.is`
- **summary**:    An \[account\] has cancelled a previous delegation operation. 
 
### Unlocked(`AccountId`)
- **interface**: `api.events.democracy.Unlocked.is`
- **summary**:    An \[account\] has been unlocked successfully. 
 
### Vetoed(`AccountId`, `Hash`, `BlockNumber`)
- **interface**: `api.events.democracy.Vetoed.is`
- **summary**:    An external proposal has been vetoed. \[who, proposal_hash, until\] 

___


## electionProviderMultiPhase
 
### ElectionFinalized(`Option<ElectionCompute>`)
- **interface**: `api.events.electionProviderMultiPhase.ElectionFinalized.is`
- **summary**:    The election has been finalized, with `Some` of the given computation, or else if the  election failed, `None`. 
 
### Rewarded(`AccountId`, `Balance`)
- **interface**: `api.events.electionProviderMultiPhase.Rewarded.is`
- **summary**:    An account has been rewarded for their signed submission being finalized. 
 
### SignedPhaseStarted(`u32`)
- **interface**: `api.events.electionProviderMultiPhase.SignedPhaseStarted.is`
- **summary**:    The signed phase of the given round has started. 
 
### Slashed(`AccountId`, `Balance`)
- **interface**: `api.events.electionProviderMultiPhase.Slashed.is`
- **summary**:    An account has been slashed for submitting an invalid signed submission. 
 
### SolutionStored(`ElectionCompute`, `bool`)
- **interface**: `api.events.electionProviderMultiPhase.SolutionStored.is`
- **summary**:    A solution was stored with the given compute. 

   If the solution is signed, this means that it hasn't yet been processed. If the  solution is unsigned, this means that it has also been processed. 

   The `bool` is `true` when a previous solution was ejected to make room for this one. 
 
### UnsignedPhaseStarted(`u32`)
- **interface**: `api.events.electionProviderMultiPhase.UnsignedPhaseStarted.is`
- **summary**:    The unsigned phase of the given round has started. 

___


## elections
 
### CandidateSlashed(`AccountId`, `Balance`)
- **interface**: `api.events.elections.CandidateSlashed.is`
- **summary**:    A \[candidate\] was slashed by \[amount\] due to failing to obtain a seat as member or  runner-up. 

   Note that old members and runners-up are also candidates. 
 
### ElectionError()
- **interface**: `api.events.elections.ElectionError.is`
- **summary**:    Internal error happened while trying to perform election. 
 
### EmptyTerm()
- **interface**: `api.events.elections.EmptyTerm.is`
- **summary**:    No (or not enough) candidates existed for this round. This is different from  `NewTerm(\[\])`. See the description of `NewTerm`. 
 
### MemberKicked(`AccountId`)
- **interface**: `api.events.elections.MemberKicked.is`
- **summary**:    A \[member\] has been removed. This should always be followed by either `NewTerm` or  `EmptyTerm`. 
 
### NewTerm(`Vec<(AccountId,Balance)>`)
- **interface**: `api.events.elections.NewTerm.is`
- **summary**:    A new term with \[new_members\]. This indicates that enough candidates existed to run  the election, not that enough have has been elected. The inner value must be examined  for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond  slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to  begin with. 
 
### Renounced(`AccountId`)
- **interface**: `api.events.elections.Renounced.is`
- **summary**:    Someone has renounced their candidacy. 
 
### SeatHolderSlashed(`AccountId`, `Balance`)
- **interface**: `api.events.elections.SeatHolderSlashed.is`
- **summary**:    A \[seat holder\] was slashed by \[amount\] by being forcefully removed from the set. 

___


## gilt
 
### BidPlaced(`AccountId`, `BalanceOf`, `u32`)
- **interface**: `api.events.gilt.BidPlaced.is`
- **summary**:    A bid was successfully placed.  \[ who, amount, duration \] 
 
### BidRetracted(`AccountId`, `BalanceOf`, `u32`)
- **interface**: `api.events.gilt.BidRetracted.is`
- **summary**:    A bid was successfully removed (before being accepted as a gilt).  \[ who, amount, duration \] 
 
### GiltIssued(`ActiveIndex`, `BlockNumber`, `AccountId`, `BalanceOf`)
- **interface**: `api.events.gilt.GiltIssued.is`
- **summary**:    A bid was accepted as a gilt. The balance may not be released until expiry.  \[ index, expiry, who, amount \] 
 
### GiltThawed(`ActiveIndex`, `AccountId`, `BalanceOf`, `BalanceOf`)
- **interface**: `api.events.gilt.GiltThawed.is`
- **summary**:    An expired gilt has been thawed.  \[ index, who, original_amount, additional_amount \] 

___


## grandpa
 
### NewAuthorities(`AuthorityList`)
- **interface**: `api.events.grandpa.NewAuthorities.is`
- **summary**:    New authority set has been applied. \[authority_set\] 
 
### Paused()
- **interface**: `api.events.grandpa.Paused.is`
- **summary**:    Current authority set has been paused. 
 
### Resumed()
- **interface**: `api.events.grandpa.Resumed.is`
- **summary**:    Current authority set has been resumed. 

___


## identity
 
### IdentityCleared(`AccountId`, `Balance`)
- **interface**: `api.events.identity.IdentityCleared.is`
- **summary**:    A name was cleared, and the given balance returned. \[who, deposit\] 
 
### IdentityKilled(`AccountId`, `Balance`)
- **interface**: `api.events.identity.IdentityKilled.is`
- **summary**:    A name was removed and the given balance slashed. \[who, deposit\] 
 
### IdentitySet(`AccountId`)
- **interface**: `api.events.identity.IdentitySet.is`
- **summary**:    A name was set or reset (which will remove all judgements). \[who\] 
 
### JudgementGiven(`AccountId`, `RegistrarIndex`)
- **interface**: `api.events.identity.JudgementGiven.is`
- **summary**:    A judgement was given by a registrar. \[target, registrar_index\] 
 
### JudgementRequested(`AccountId`, `RegistrarIndex`)
- **interface**: `api.events.identity.JudgementRequested.is`
- **summary**:    A judgement was asked from a registrar. \[who, registrar_index\] 
 
### JudgementUnrequested(`AccountId`, `RegistrarIndex`)
- **interface**: `api.events.identity.JudgementUnrequested.is`
- **summary**:    A judgement request was retracted. \[who, registrar_index\] 
 
### RegistrarAdded(`RegistrarIndex`)
- **interface**: `api.events.identity.RegistrarAdded.is`
- **summary**:    A registrar was added. \[registrar_index\] 
 
### SubIdentityAdded(`AccountId`, `AccountId`, `Balance`)
- **interface**: `api.events.identity.SubIdentityAdded.is`
- **summary**:    A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\] 
 
### SubIdentityRemoved(`AccountId`, `AccountId`, `Balance`)
- **interface**: `api.events.identity.SubIdentityRemoved.is`
- **summary**:    A sub-identity was removed from an identity and the deposit freed.  \[sub, main, deposit\] 
 
### SubIdentityRevoked(`AccountId`, `AccountId`, `Balance`)
- **interface**: `api.events.identity.SubIdentityRevoked.is`
- **summary**:    A sub-identity was cleared, and the given deposit repatriated from the  main identity account to the sub-identity account. \[sub, main, deposit\] 

___


## imOnline
 
### AllGood()
- **interface**: `api.events.imOnline.AllGood.is`
- **summary**:    At the end of the session, no offence was committed. 
 
### HeartbeatReceived(`AuthorityId`)
- **interface**: `api.events.imOnline.HeartbeatReceived.is`
- **summary**:    A new heartbeat was received from `AuthorityId` \[authority_id\] 
 
### SomeOffline(`Vec<IdentificationTuple>`)
- **interface**: `api.events.imOnline.SomeOffline.is`
- **summary**:    At the end of the session, at least one validator was found to be \[offline\]. 

___


## indices
 
### IndexAssigned(`AccountId`, `AccountIndex`)
- **interface**: `api.events.indices.IndexAssigned.is`
- **summary**:    A account index was assigned. \[index, who\] 
 
### IndexFreed(`AccountIndex`)
- **interface**: `api.events.indices.IndexFreed.is`
- **summary**:    A account index has been freed up (unassigned). \[index\] 
 
### IndexFrozen(`AccountIndex`, `AccountId`)
- **interface**: `api.events.indices.IndexFrozen.is`
- **summary**:    A account index has been frozen to its current account ID. \[index, who\] 

___


## lottery
 
### CallsUpdated()
- **interface**: `api.events.lottery.CallsUpdated.is`
- **summary**:    A new set of calls have been set! 
 
### LotteryStarted()
- **interface**: `api.events.lottery.LotteryStarted.is`
- **summary**:    A lottery has been started! 
 
### TicketBought(`AccountId`, `CallIndex`)
- **interface**: `api.events.lottery.TicketBought.is`
- **summary**:    A ticket has been bought! 
 
### Winner(`AccountId`, `Balance`)
- **interface**: `api.events.lottery.Winner.is`
- **summary**:    A winner has been chosen! 

___


## multisig
 
### MultisigApproval(`AccountId`, `Timepoint`, `AccountId`, `CallHash`)
- **interface**: `api.events.multisig.MultisigApproval.is`
- **summary**:    A multisig operation has been approved by someone.  \[approving, timepoint, multisig, call_hash\] 
 
### MultisigCancelled(`AccountId`, `Timepoint`, `AccountId`, `CallHash`)
- **interface**: `api.events.multisig.MultisigCancelled.is`
- **summary**:    A multisig operation has been cancelled. \[cancelling, timepoint, multisig, call_hash\] 
 
### MultisigExecuted(`AccountId`, `Timepoint`, `AccountId`, `CallHash`, `DispatchResult`)
- **interface**: `api.events.multisig.MultisigExecuted.is`
- **summary**:    A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\] 
 
### NewMultisig(`AccountId`, `AccountId`, `CallHash`)
- **interface**: `api.events.multisig.NewMultisig.is`
- **summary**:    A new multisig operation has begun. \[approving, multisig, call_hash\] 

___


## offences
 
### Offence(`Kind`, `OpaqueTimeSlot`)
- **interface**: `api.events.offences.Offence.is`
- **summary**:    There is an offence reported of the given `kind` happened at the `session_index` and  (kind-specific) time slot. This event is not deposited for duplicate slashes.  \[kind, timeslot\]. 

___


## proxy
 
### Announced(`AccountId`, `AccountId`, `Hash`)
- **interface**: `api.events.proxy.Announced.is`
- **summary**:    An announcement was placed to make a call in the future. \[real, proxy, call_hash\] 
 
### AnonymousCreated(`AccountId`, `AccountId`, `ProxyType`, `u16`)
- **interface**: `api.events.proxy.AnonymousCreated.is`
- **summary**:    Anonymous account has been created by new proxy with given  disambiguation index and proxy type. \[anonymous, who, proxy_type, disambiguation_index\] 
 
### ProxyExecuted(`DispatchResult`)
- **interface**: `api.events.proxy.ProxyExecuted.is`
- **summary**:    A proxy was executed correctly, with the given \[result\]. 

___


## recovery
 
### AccountRecovered(`AccountId`, `AccountId`)
- **interface**: `api.events.recovery.AccountRecovered.is`
- **summary**:    Lost account has been successfully recovered by rescuer account.  \[lost, rescuer\] 
 
### RecoveryClosed(`AccountId`, `AccountId`)
- **interface**: `api.events.recovery.RecoveryClosed.is`
- **summary**:    A recovery process for lost account by rescuer account has been closed.  \[lost, rescuer\] 
 
### RecoveryCreated(`AccountId`)
- **interface**: `api.events.recovery.RecoveryCreated.is`
- **summary**:    A recovery process has been set up for an \[account\]. 
 
### RecoveryInitiated(`AccountId`, `AccountId`)
- **interface**: `api.events.recovery.RecoveryInitiated.is`
- **summary**:    A recovery process has been initiated for lost account by rescuer account.  \[lost, rescuer\] 
 
### RecoveryRemoved(`AccountId`)
- **interface**: `api.events.recovery.RecoveryRemoved.is`
- **summary**:    A recovery process has been removed for an \[account\]. 
 
### RecoveryVouched(`AccountId`, `AccountId`, `AccountId`)
- **interface**: `api.events.recovery.RecoveryVouched.is`
- **summary**:    A recovery process for lost account by rescuer account has been vouched for by sender.  \[lost, rescuer, sender\] 

___


## scheduler
 
### Canceled(`BlockNumber`, `u32`)
- **interface**: `api.events.scheduler.Canceled.is`
- **summary**:    Canceled some task. \[when, index\] 
 
### Dispatched(`TaskAddress`, `Option<Bytes>`, `DispatchResult`)
- **interface**: `api.events.scheduler.Dispatched.is`
- **summary**:    Dispatched some task. \[task, id, result\] 
 
### Scheduled(`BlockNumber`, `u32`)
- **interface**: `api.events.scheduler.Scheduled.is`
- **summary**:    Scheduled some task. \[when, index\] 

___


## session
 
### NewSession(`SessionIndex`)
- **interface**: `api.events.session.NewSession.is`
- **summary**:    New session has happened. Note that the argument is the \[session_index\], not the block  number as the type might suggest. 

___


## society
 
### AutoUnbid(`AccountId`)
- **interface**: `api.events.society.AutoUnbid.is`
- **summary**:    A \[candidate\] was dropped (due to an excess of bids in the system). 
 
### Bid(`AccountId`, `Balance`)
- **interface**: `api.events.society.Bid.is`
- **summary**:    A membership bid just happened. The given account is the candidate's ID and their offer  is the second. \[candidate_id, offer\] 
 
### CandidateSuspended(`AccountId`)
- **interface**: `api.events.society.CandidateSuspended.is`
- **summary**:    A \[candidate\] has been suspended 
 
### Challenged(`AccountId`)
- **interface**: `api.events.society.Challenged.is`
- **summary**:    A \[member\] has been challenged 
 
### DefenderVote(`AccountId`, `bool`)
- **interface**: `api.events.society.DefenderVote.is`
- **summary**:    A vote has been placed for a defending member \[voter, vote\] 
 
### Deposit(`Balance`)
- **interface**: `api.events.society.Deposit.is`
- **summary**:    Some funds were deposited into the society account. \[value\] 
 
### Founded(`AccountId`)
- **interface**: `api.events.society.Founded.is`
- **summary**:    The society is founded by the given identity. \[founder\] 
 
### Inducted(`AccountId`, `Vec<AccountId>`)
- **interface**: `api.events.society.Inducted.is`
- **summary**:    A group of candidates have been inducted. The batch's primary is the first value, the  batch in full is the second. \[primary, candidates\] 
 
### MemberSuspended(`AccountId`)
- **interface**: `api.events.society.MemberSuspended.is`
- **summary**:    A \[member\] has been suspended 
 
### NewMaxMembers(`u32`)
- **interface**: `api.events.society.NewMaxMembers.is`
- **summary**:    A new \[max\] member count has been set 
 
### SuspendedMemberJudgement(`AccountId`, `bool`)
- **interface**: `api.events.society.SuspendedMemberJudgement.is`
- **summary**:    A suspended member has been judged. \[who, judged\] 
 
### Unbid(`AccountId`)
- **interface**: `api.events.society.Unbid.is`
- **summary**:    A \[candidate\] was dropped (by their request). 
 
### Unfounded(`AccountId`)
- **interface**: `api.events.society.Unfounded.is`
- **summary**:    Society is unfounded. \[founder\] 
 
### Unvouch(`AccountId`)
- **interface**: `api.events.society.Unvouch.is`
- **summary**:    A \[candidate\] was dropped (by request of who vouched for them). 
 
### Vote(`AccountId`, `AccountId`, `bool`)
- **interface**: `api.events.society.Vote.is`
- **summary**:    A vote has been placed \[candidate, voter, vote\] 
 
### Vouch(`AccountId`, `Balance`, `AccountId`)
- **interface**: `api.events.society.Vouch.is`
- **summary**:    A membership bid just happened by vouching. The given account is the candidate's ID and  their offer is the second. The vouching party is the third. \[candidate_id, offer, vouching\] 

___


## staking
 
### Bonded(`AccountId`, `Balance`)
- **interface**: `api.events.staking.Bonded.is`
- **summary**:    An account has bonded this amount. \[stash, amount\] 

   NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,  it will not be emitted for staking rewards when they are added to stake. 
 
### Chilled(`AccountId`)
- **interface**: `api.events.staking.Chilled.is`
- **summary**:    An account has stopped participating as either a validator or nominator.  \[stash\] 
 
### EraPaid(`EraIndex`, `Balance`, `Balance`)
- **interface**: `api.events.staking.EraPaid.is`
- **summary**:    The era payout has been set; the first balance is the validator-payout; the second is  the remainder from the maximum amount of reward.  \[era_index, validator_payout, remainder\] 
 
### Kicked(`AccountId`, `AccountId`)
- **interface**: `api.events.staking.Kicked.is`
- **summary**:    A nominator has been kicked from a validator. \[nominator, stash\] 
 
### OldSlashingReportDiscarded(`SessionIndex`)
- **interface**: `api.events.staking.OldSlashingReportDiscarded.is`
- **summary**:    An old slashing report from a prior era was discarded because it could  not be processed. \[session_index\] 
 
### PayoutStarted(`EraIndex`, `AccountId`)
- **interface**: `api.events.staking.PayoutStarted.is`
- **summary**:    The stakers' rewards are getting paid. \[era_index, validator_stash\] 
 
### Rewarded(`AccountId`, `Balance`)
- **interface**: `api.events.staking.Rewarded.is`
- **summary**:    The nominator has been rewarded by this amount. \[stash, amount\] 
 
### Slashed(`AccountId`, `Balance`)
- **interface**: `api.events.staking.Slashed.is`
- **summary**:    One validator (and its nominators) has been slashed by the given amount.  \[validator, amount\] 
 
### StakersElected()
- **interface**: `api.events.staking.StakersElected.is`
- **summary**:    A new set of stakers was elected. 
 
### StakingElectionFailed()
- **interface**: `api.events.staking.StakingElectionFailed.is`
- **summary**:    The election failed. No new era is planned. 
 
### Unbonded(`AccountId`, `Balance`)
- **interface**: `api.events.staking.Unbonded.is`
- **summary**:    An account has unbonded this amount. \[stash, amount\] 
 
### Withdrawn(`AccountId`, `Balance`)
- **interface**: `api.events.staking.Withdrawn.is`
- **summary**:    An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`  from the unlocking queue. \[stash, amount\] 

___


## sudo
 
### KeyChanged(`AccountId`)
- **interface**: `api.events.sudo.KeyChanged.is`
- **summary**:    The \[sudoer\] just switched identity; the old key is supplied. 
 
### Sudid(`DispatchResult`)
- **interface**: `api.events.sudo.Sudid.is`
- **summary**:    A sudo just took place. \[result\] 
 
### SudoAsDone(`DispatchResult`)
- **interface**: `api.events.sudo.SudoAsDone.is`
- **summary**:    A sudo just took place. \[result\] 

___


## system
 
### CodeUpdated()
- **interface**: `api.events.system.CodeUpdated.is`
- **summary**:    `:code` was updated. 
 
### ExtrinsicFailed(`DispatchError`, `DispatchInfo`)
- **interface**: `api.events.system.ExtrinsicFailed.is`
- **summary**:    An extrinsic failed. \[error, info\] 
 
### ExtrinsicSuccess(`DispatchInfo`)
- **interface**: `api.events.system.ExtrinsicSuccess.is`
- **summary**:    An extrinsic completed successfully. \[info\] 
 
### KilledAccount(`AccountId`)
- **interface**: `api.events.system.KilledAccount.is`
- **summary**:    An \[account\] was reaped. 
 
### NewAccount(`AccountId`)
- **interface**: `api.events.system.NewAccount.is`
- **summary**:    A new \[account\] was created. 
 
### Remarked(`AccountId`, `Hash`)
- **interface**: `api.events.system.Remarked.is`
- **summary**:    On on-chain remark happened. \[origin, remark_hash\] 

___


## technicalCommittee
 
### Approved(`Hash`)
- **interface**: `api.events.technicalCommittee.Approved.is`
- **summary**:    A motion was approved by the required threshold.  \[proposal_hash\] 
 
### Closed(`Hash`, `MemberCount`, `MemberCount`)
- **interface**: `api.events.technicalCommittee.Closed.is`
- **summary**:    A proposal was closed because its threshold was reached or after its duration was up.  \[proposal_hash, yes, no\] 
 
### Disapproved(`Hash`)
- **interface**: `api.events.technicalCommittee.Disapproved.is`
- **summary**:    A motion was not approved by the required threshold.  \[proposal_hash\] 
 
### Executed(`Hash`, `DispatchResult`)
- **interface**: `api.events.technicalCommittee.Executed.is`
- **summary**:    A motion was executed; result will be `Ok` if it returned without error.  \[proposal_hash, result\] 
 
### MemberExecuted(`Hash`, `DispatchResult`)
- **interface**: `api.events.technicalCommittee.MemberExecuted.is`
- **summary**:    A single member did some action; result will be `Ok` if it returned without error.  \[proposal_hash, result\] 
 
### Proposed(`AccountId`, `ProposalIndex`, `Hash`, `MemberCount`)
- **interface**: `api.events.technicalCommittee.Proposed.is`
- **summary**:    A motion (given hash) has been proposed (by given account) with a threshold (given  `MemberCount`).  \[account, proposal_index, proposal_hash, threshold\] 
 
### Voted(`AccountId`, `Hash`, `bool`, `MemberCount`, `MemberCount`)
- **interface**: `api.events.technicalCommittee.Voted.is`
- **summary**:    A motion (given hash) has been voted on by given account, leaving  a tally (yes votes and no votes given respectively as `MemberCount`).  \[account, proposal_hash, voted, yes, no\] 

___


## technicalMembership
 
### Dummy(`PhantomData`)
- **interface**: `api.events.technicalMembership.Dummy.is`
- **summary**:    Phantom member, never used. 
 
### KeyChanged()
- **interface**: `api.events.technicalMembership.KeyChanged.is`
- **summary**:    One of the members' keys changed. 
 
### MemberAdded()
- **interface**: `api.events.technicalMembership.MemberAdded.is`
- **summary**:    The given member was added; see the transaction for who. 
 
### MemberRemoved()
- **interface**: `api.events.technicalMembership.MemberRemoved.is`
- **summary**:    The given member was removed; see the transaction for who. 
 
### MembersReset()
- **interface**: `api.events.technicalMembership.MembersReset.is`
- **summary**:    The membership was reset; see the transaction for who the new set is. 
 
### MembersSwapped()
- **interface**: `api.events.technicalMembership.MembersSwapped.is`
- **summary**:    Two members were swapped; see the transaction for who. 

___


## tips
 
### NewTip(`Hash`)
- **interface**: `api.events.tips.NewTip.is`
- **summary**:    A new tip suggestion has been opened. \[tip_hash\] 
 
### TipClosed(`Hash`, `AccountId`, `Balance`)
- **interface**: `api.events.tips.TipClosed.is`
- **summary**:    A tip suggestion has been closed. \[tip_hash, who, payout\] 
 
### TipClosing(`Hash`)
- **interface**: `api.events.tips.TipClosing.is`
- **summary**:    A tip suggestion has reached threshold and is closing. \[tip_hash\] 
 
### TipRetracted(`Hash`)
- **interface**: `api.events.tips.TipRetracted.is`
- **summary**:    A tip suggestion has been retracted. \[tip_hash\] 
 
### TipSlashed(`Hash`, `AccountId`, `Balance`)
- **interface**: `api.events.tips.TipSlashed.is`
- **summary**:    A tip suggestion has been slashed. \[tip_hash, finder, deposit\] 

___


## transactionStorage
 
### ProofChecked()
- **interface**: `api.events.transactionStorage.ProofChecked.is`
- **summary**:    Storage proof was successfully checked. 
 
### Renewed(`u32`)
- **interface**: `api.events.transactionStorage.Renewed.is`
- **summary**:    Renewed data under specified index. 
 
### Stored(`u32`)
- **interface**: `api.events.transactionStorage.Stored.is`
- **summary**:    Stored data under specified index. 

___


## treasury
 
### Awarded(`ProposalIndex`, `Balance`, `AccountId`)
- **interface**: `api.events.treasury.Awarded.is`
- **summary**:    Some funds have been allocated. \[proposal_index, award, beneficiary\] 
 
### Burnt(`Balance`)
- **interface**: `api.events.treasury.Burnt.is`
- **summary**:    Some of our funds have been burnt. \[burn\] 
 
### Deposit(`Balance`)
- **interface**: `api.events.treasury.Deposit.is`
- **summary**:    Some funds have been deposited. \[deposit\] 
 
### Proposed(`ProposalIndex`)
- **interface**: `api.events.treasury.Proposed.is`
- **summary**:    New proposal. \[proposal_index\] 
 
### Rejected(`ProposalIndex`, `Balance`)
- **interface**: `api.events.treasury.Rejected.is`
- **summary**:    A proposal was rejected; funds were slashed. \[proposal_index, slashed\] 
 
### Rollover(`Balance`)
- **interface**: `api.events.treasury.Rollover.is`
- **summary**:    Spending has finished; this is the amount that rolls over until next spend.  \[budget_remaining\] 
 
### Spending(`Balance`)
- **interface**: `api.events.treasury.Spending.is`
- **summary**:    We have ended a spend period and will now allocate funds. \[budget_remaining\] 

___


## uniques
 
### ApprovalCancelled(`ClassId`, `InstanceId`, `AccountId`, `AccountId`)
- **interface**: `api.events.uniques.ApprovalCancelled.is`
- **summary**:    An approval for a `delegate` account to transfer the `instance` of an asset `class` was  cancelled by its `owner`.  \[ class, instance, owner, delegate \] 
 
### ApprovedTransfer(`ClassId`, `InstanceId`, `AccountId`, `AccountId`)
- **interface**: `api.events.uniques.ApprovedTransfer.is`
- **summary**:    An `instance` of an asset `class` has been approved by the `owner` for transfer by a  `delegate`.  \[ class, instance, owner, delegate \] 
 
### AssetStatusChanged(`ClassId`)
- **interface**: `api.events.uniques.AssetStatusChanged.is`
- **summary**:    An asset `class` has had its attributes changed by the `Force` origin.  \[ class \] 
 
### AttributeCleared(`ClassId`, `Option<InstanceId>`, `Bytes`)
- **interface**: `api.events.uniques.AttributeCleared.is`
- **summary**:    Attribute metadata has been cleared for an asset class or instance.  \[ class, maybe_instance, key, maybe_value \] 
 
### AttributeSet(`ClassId`, `Option<InstanceId>`, `Bytes`, `Bytes`)
- **interface**: `api.events.uniques.AttributeSet.is`
- **summary**:    New attribute metadata has been set for an asset class or instance.  \[ class, maybe_instance, key, value \] 
 
### Burned(`ClassId`, `InstanceId`, `AccountId`)
- **interface**: `api.events.uniques.Burned.is`
- **summary**:    An asset `instance` was destroyed. \[ class, instance, owner \] 
 
### ClassFrozen(`ClassId`)
- **interface**: `api.events.uniques.ClassFrozen.is`
- **summary**:    Some asset `class` was frozen. \[ class \] 
 
### ClassMetadataCleared(`ClassId`)
- **interface**: `api.events.uniques.ClassMetadataCleared.is`
- **summary**:    Metadata has been cleared for an asset class. \[ class \] 
 
### ClassMetadataSet(`ClassId`, `Bytes`, `bool`)
- **interface**: `api.events.uniques.ClassMetadataSet.is`
- **summary**:    New metadata has been set for an asset class. \[ class, data, is_frozen \] 
 
### ClassThawed(`ClassId`)
- **interface**: `api.events.uniques.ClassThawed.is`
- **summary**:    Some asset `class` was thawed. \[ class \] 
 
### Created(`ClassId`, `AccountId`, `AccountId`)
- **interface**: `api.events.uniques.Created.is`
- **summary**:    An asset class was created. \[ class, creator, owner \] 
 
### Destroyed(`ClassId`)
- **interface**: `api.events.uniques.Destroyed.is`
- **summary**:    An asset `class` was destroyed. \[ class \] 
 
### ForceCreated(`ClassId`, `AccountId`)
- **interface**: `api.events.uniques.ForceCreated.is`
- **summary**:    An asset class was force-created. \[ class, owner \] 
 
### Frozen(`ClassId`, `InstanceId`)
- **interface**: `api.events.uniques.Frozen.is`
- **summary**:    Some asset `instance` was frozen. \[ class, instance \] 
 
### Issued(`ClassId`, `InstanceId`, `AccountId`)
- **interface**: `api.events.uniques.Issued.is`
- **summary**:    An asset `instace` was issued. \[ class, instance, owner \] 
 
### MetadataCleared(`ClassId`, `InstanceId`)
- **interface**: `api.events.uniques.MetadataCleared.is`
- **summary**:    Metadata has been cleared for an asset instance. \[ class, instance \] 
 
### MetadataSet(`ClassId`, `InstanceId`, `Bytes`, `bool`)
- **interface**: `api.events.uniques.MetadataSet.is`
- **summary**:    New metadata has been set for an asset instance.  \[ class, instance, data, is_frozen \] 
 
### OwnerChanged(`ClassId`, `AccountId`)
- **interface**: `api.events.uniques.OwnerChanged.is`
- **summary**:    The owner changed \[ class, new_owner \] 
 
### Redeposited(`ClassId`, `Vec<InstanceId>`)
- **interface**: `api.events.uniques.Redeposited.is`
- **summary**:    Metadata has been cleared for an asset instance. \[ class, successful_instances \] 
 
### TeamChanged(`ClassId`, `AccountId`, `AccountId`, `AccountId`)
- **interface**: `api.events.uniques.TeamChanged.is`
- **summary**:    The management team changed \[ class, issuer, admin, freezer \] 
 
### Thawed(`ClassId`, `InstanceId`)
- **interface**: `api.events.uniques.Thawed.is`
- **summary**:    Some asset `instance` was thawed. \[ class, instance \] 
 
### Transferred(`ClassId`, `InstanceId`, `AccountId`, `AccountId`)
- **interface**: `api.events.uniques.Transferred.is`
- **summary**:    An asset `instace` was transferred. \[ class, instance, from, to \] 

___


## utility
 
### BatchCompleted()
- **interface**: `api.events.utility.BatchCompleted.is`
- **summary**:    Batch of dispatches completed fully with no error. 
 
### BatchInterrupted(`u32`, `DispatchError`)
- **interface**: `api.events.utility.BatchInterrupted.is`
- **summary**:    Batch of dispatches did not complete fully. Index of first failing dispatch given, as  well as the error. \[index, error\] 
 
### ItemCompleted()
- **interface**: `api.events.utility.ItemCompleted.is`
- **summary**:    A single item within a Batch of dispatches has completed with no error. 

___


## vesting
 
### VestingCompleted(`AccountId`)
- **interface**: `api.events.vesting.VestingCompleted.is`
- **summary**:    An \[account\] has become fully vested. No further vesting can happen. 
 
### VestingUpdated(`AccountId`, `Balance`)
- **interface**: `api.events.vesting.VestingUpdated.is`
- **summary**:    The amount vested has been updated. This could indicate more funds are available. The  balance given is the amount which is left unvested (and thus locked).  \[account, unvested\] 
