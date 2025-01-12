---
title: Extrinsics
---

The following sections contain Extrinsics methods are part of the default Polkadot runtime. On the api, these are exposed via `api.tx.<module>.<method>`. 

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

- **[crowdloan](#crowdloan)**

- **[electionProviderMultiPhase](#electionprovidermultiphase)**

- **[fastUnstake](#fastunstake)**

- **[grandpa](#grandpa)**

- **[hrmp](#hrmp)**

- **[indices](#indices)**

- **[initializer](#initializer)**

- **[messageQueue](#messagequeue)**

- **[multisig](#multisig)**

- **[nominationPools](#nominationpools)**

- **[onDemand](#ondemand)**

- **[paraInclusion](#parainclusion)**

- **[paraInherent](#parainherent)**

- **[parameters](#parameters)**

- **[paras](#paras)**

- **[parasDisputes](#parasdisputes)**

- **[parasShared](#parasshared)**

- **[parasSlashing](#parasslashing)**

- **[preimage](#preimage)**

- **[proxy](#proxy)**

- **[referenda](#referenda)**

- **[registrar](#registrar)**

- **[scheduler](#scheduler)**

- **[session](#session)**

- **[slots](#slots)**

- **[staking](#staking)**

- **[stateTrieMigration](#statetriemigration)**

- **[system](#system)**

- **[timestamp](#timestamp)**

- **[treasury](#treasury)**

- **[utility](#utility)**

- **[vesting](#vesting)**

- **[voterList](#voterlist)**

- **[whitelist](#whitelist)**

- **[xcmPallet](#xcmpallet)**


___


## assetRate
 
### create(asset_kind: `PolkadotRuntimeCommonImplsVersionedLocatableAsset`, rate: `u128`)
- **interface**: `api.tx.assetRate.create`
- **summary**:    Initialize a conversion rate to native balance for the given asset. 

   #### Complexity 

  - O(1)
 
### remove(asset_kind: `PolkadotRuntimeCommonImplsVersionedLocatableAsset`)
- **interface**: `api.tx.assetRate.remove`
- **summary**:    Remove an existing conversion rate to native balance for the given asset. 

   #### Complexity 

  - O(1)
 
### update(asset_kind: `PolkadotRuntimeCommonImplsVersionedLocatableAsset`, rate: `u128`)
- **interface**: `api.tx.assetRate.update`
- **summary**:    Update the conversion rate to native balance for the given asset. 

   #### Complexity 

  - O(1)

___


## auctions
 
### bid(para: `Compact<u32>`, auction_index: `Compact<u32>`, first_slot: `Compact<u32>`, last_slot: `Compact<u32>`, amount: `Compact<u128>`)
- **interface**: `api.tx.auctions.bid`
- **summary**:    Make a new bid from an account (including a parachain account) for deploying a new  parachain. 

   Multiple simultaneous bids from the same bidder are allowed only as long as all active  bids overlap each other (i.e. are mutually exclusive). Bids cannot be redacted. 

   - `sub` is the sub-bidder ID, allowing for multiple competing bids to be made by (and  funded by) the same account. 

  - `auction_index` is the index of the auction to bid on. Should just be the present value of `AuctionCounter`. 

  - `first_slot` is the first lease period index of the range to bid on. This is the absolute lease period index value, not an auction-specific offset. 

  - `last_slot` is the last lease period index of the range to bid on. This is the absolute lease period index value, not an auction-specific offset. 

  - `amount` is the amount to bid to be held as deposit for the parachain should the bid win. This amount is held throughout the range. 
 
### cancelAuction()
- **interface**: `api.tx.auctions.cancelAuction`
- **summary**:    Cancel an in-progress auction. 

   Can only be called by Root origin. 
 
### newAuction(duration: `Compact<u32>`, lease_period_index: `Compact<u32>`)
- **interface**: `api.tx.auctions.newAuction`
- **summary**:    Create a new auction. 

   This can only happen when there isn't already an auction in progress and may only be  called by the root origin. Accepts the `duration` of this auction and the  `lease_period_index` of the initial lease period of the four that are to be auctioned. 

___


## babe
 
### planConfigChange(config: `SpConsensusBabeDigestsNextConfigDescriptor`)
- **interface**: `api.tx.babe.planConfigChange`
- **summary**:    Plan an epoch config change. The epoch config change is recorded and will be enacted on  the next call to `enact_epoch_change`. The config will be activated one epoch after.  Multiple calls to this method will replace any existing planned config change that had  not been enacted yet. 
 
### reportEquivocation(equivocation_proof: `SpConsensusSlotsEquivocationProof`, key_owner_proof: `SpSessionMembershipProof`)
- **interface**: `api.tx.babe.reportEquivocation`
- **summary**:    Report authority equivocation/misbehavior. This method will verify  the equivocation proof and validate the given key ownership proof  against the extracted offender. If both are valid, the offence will  be reported. 
 
### reportEquivocationUnsigned(equivocation_proof: `SpConsensusSlotsEquivocationProof`, key_owner_proof: `SpSessionMembershipProof`)
- **interface**: `api.tx.babe.reportEquivocationUnsigned`
- **summary**:    Report authority equivocation/misbehavior. This method will verify  the equivocation proof and validate the given key ownership proof  against the extracted offender. If both are valid, the offence will  be reported.  This extrinsic must be called unsigned and it is expected that only  block authors will call it (validated in `ValidateUnsigned`), as such  if the block author is defined it will be defined as the equivocation  reporter. 

___


## balances
 
### burn(value: `Compact<u128>`, keep_alive: `bool`)
- **interface**: `api.tx.balances.burn`
- **summary**:    Burn the specified liquid free balance from the origin account. 

   If the origin's account ends up below the existential deposit as a result  of the burn and `keep_alive` is false, the account will be reaped. 

   Unlike sending funds to a _burn_ address, which merely makes the funds inaccessible,  this `burn` operation will reduce total issuance by the amount _burned_. 
 
### forceAdjustTotalIssuance(direction: `PalletBalancesAdjustmentDirection`, delta: `Compact<u128>`)
- **interface**: `api.tx.balances.forceAdjustTotalIssuance`
- **summary**:    Adjust the total issuance in a saturating way. 

   Can only be called by root and always needs a positive `delta`. 

   #### Example 
 
### forceSetBalance(who: `MultiAddress`, new_free: `Compact<u128>`)
- **interface**: `api.tx.balances.forceSetBalance`
- **summary**:    Set the regular balance of a given account. 

   The dispatch origin for this call is `root`. 
 
### forceTransfer(source: `MultiAddress`, dest: `MultiAddress`, value: `Compact<u128>`)
- **interface**: `api.tx.balances.forceTransfer`
- **summary**:    Exactly as `transfer_allow_death`, except the origin must be root and the source account  may be specified. 
 
### forceUnreserve(who: `MultiAddress`, amount: `u128`)
- **interface**: `api.tx.balances.forceUnreserve`
- **summary**:    Unreserve some balance from a user by force. 

   Can only be called by ROOT. 
 
### transferAll(dest: `MultiAddress`, keep_alive: `bool`)
- **interface**: `api.tx.balances.transferAll`
- **summary**:    Transfer the entire transferable balance from the caller account. 

   NOTE: This function only attempts to transfer _transferable_ balances. This means that  any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be  transferred by this function. To ensure that this function results in a killed account,  you might need to prepare the account by removing any reference counters, storage  deposits, etc... 

   The dispatch origin of this call must be Signed. 

   - `dest`: The recipient of the transfer. 

  - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all of the funds the account has, causing the sender account to be killed (false), or  transfer everything except at least the existential deposit, which will guarantee to  keep the sender account alive (true). 
 
### transferAllowDeath(dest: `MultiAddress`, value: `Compact<u128>`)
- **interface**: `api.tx.balances.transferAllowDeath`
- **summary**:    Transfer some liquid free balance to another account. 

   `transfer_allow_death` will set the `FreeBalance` of the sender and receiver.  If the sender's account is below the existential deposit as a result  of the transfer, the account will be reaped. 

   The dispatch origin for this call must be `Signed` by the transactor. 
 
### transferKeepAlive(dest: `MultiAddress`, value: `Compact<u128>`)
- **interface**: `api.tx.balances.transferKeepAlive`
- **summary**:    Same as the [`transfer_allow_death`] call, but with a check that the transfer will not  kill the origin account. 

   99% of the time you want [`transfer_allow_death`] instead. 

   [`transfer_allow_death`]: struct.Pallet.html#method.transfer 
 
### upgradeAccounts(who: `Vec<AccountId32>`)
- **interface**: `api.tx.balances.upgradeAccounts`
- **summary**:    Upgrade a specified account. 

   - `origin`: Must be `Signed`. 

  - `who`: The account to be upgraded.

   This will waive the transaction fee if at least all but 10% of the accounts needed to  be upgraded. (We let some not have to be upgraded just in order to allow for the  possibility of churn). 

___


## beefy
 
### reportEquivocation(equivocation_proof: `SpConsensusBeefyDoubleVotingProof`, key_owner_proof: `SpSessionMembershipProof`)
- **interface**: `api.tx.beefy.reportEquivocation`
- **summary**:    Report voter equivocation/misbehavior. This method will verify the  equivocation proof and validate the given key ownership proof  against the extracted offender. If both are valid, the offence  will be reported. 
 
### reportEquivocationUnsigned(equivocation_proof: `SpConsensusBeefyDoubleVotingProof`, key_owner_proof: `SpSessionMembershipProof`)
- **interface**: `api.tx.beefy.reportEquivocationUnsigned`
- **summary**:    Report voter equivocation/misbehavior. This method will verify the  equivocation proof and validate the given key ownership proof  against the extracted offender. If both are valid, the offence  will be reported. 

   This extrinsic must be called unsigned and it is expected that only  block authors will call it (validated in `ValidateUnsigned`), as such  if the block author is defined it will be defined as the equivocation  reporter. 
 
### setNewGenesis(delay_in_blocks: `u32`)
- **interface**: `api.tx.beefy.setNewGenesis`
- **summary**:    Reset BEEFY consensus by setting a new BEEFY genesis at `delay_in_blocks` blocks in the  future. 

   Note: `delay_in_blocks` has to be at least 1. 

___


## bounties
 
### acceptCurator(bounty_id: `Compact<u32>`)
- **interface**: `api.tx.bounties.acceptCurator`
- **summary**:    Accept the curator role for a bounty.  A deposit will be reserved from curator and refund upon successful payout. 

   May only be called from the curator. 

   #### Complexity 

  - O(1).
 
### approveBounty(bounty_id: `Compact<u32>`)
- **interface**: `api.tx.bounties.approveBounty`
- **summary**:    Approve a bounty proposal. At a later time, the bounty will be funded and become active  and the original deposit will be returned. 

   May only be called from `T::SpendOrigin`. 

   #### Complexity 

  - O(1).
 
### awardBounty(bounty_id: `Compact<u32>`, beneficiary: `MultiAddress`)
- **interface**: `api.tx.bounties.awardBounty`
- **summary**:    Award bounty to a beneficiary account. The beneficiary will be able to claim the funds  after a delay. 

   The dispatch origin for this call must be the curator of this bounty. 

   - `bounty_id`: Bounty ID to award. 

  - `beneficiary`: The beneficiary account whom will receive the payout.

   #### Complexity 

  - O(1).
 
### claimBounty(bounty_id: `Compact<u32>`)
- **interface**: `api.tx.bounties.claimBounty`
- **summary**:    Claim the payout from an awarded bounty after payout delay. 

   The dispatch origin for this call must be the beneficiary of this bounty. 

   - `bounty_id`: Bounty ID to claim. 

   #### Complexity 

  - O(1).
 
### closeBounty(bounty_id: `Compact<u32>`)
- **interface**: `api.tx.bounties.closeBounty`
- **summary**:    Cancel a proposed or active bounty. All the funds will be sent to treasury and  the curator deposit will be unreserved if possible. 

   Only `T::RejectOrigin` is able to cancel a bounty. 

   - `bounty_id`: Bounty ID to cancel. 

   #### Complexity 

  - O(1).
 
### extendBountyExpiry(bounty_id: `Compact<u32>`, remark: `Bytes`)
- **interface**: `api.tx.bounties.extendBountyExpiry`
- **summary**:    Extend the expiry time of an active bounty. 

   The dispatch origin for this call must be the curator of this bounty. 

   - `bounty_id`: Bounty ID to extend. 

  - `remark`: additional information.

   #### Complexity 

  - O(1).
 
### proposeBounty(value: `Compact<u128>`, description: `Bytes`)
- **interface**: `api.tx.bounties.proposeBounty`
- **summary**:    Propose a new bounty. 

   The dispatch origin for this call must be _Signed_. 

   Payment: `TipReportDepositBase` will be reserved from the origin account, as well as  `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,  or slashed when rejected. 

   - `curator`: The curator account whom will manage this bounty. 

  - `fee`: The curator fee.

  - `value`: The total payment amount of this bounty, curator fee included.

  - `description`: The description of this bounty.
 
### proposeCurator(bounty_id: `Compact<u32>`, curator: `MultiAddress`, fee: `Compact<u128>`)
- **interface**: `api.tx.bounties.proposeCurator`
- **summary**:    Propose a curator to a funded bounty. 

   May only be called from `T::SpendOrigin`. 

   #### Complexity 

  - O(1).
 
### unassignCurator(bounty_id: `Compact<u32>`)
- **interface**: `api.tx.bounties.unassignCurator`
- **summary**:    Unassign curator from a bounty. 

   This function can only be called by the `RejectOrigin` a signed origin. 

   If this function is called by the `RejectOrigin`, we assume that the curator is  malicious or inactive. As a result, we will slash the curator when possible. 

   If the origin is the curator, we take this as a sign they are unable to do their job and  they willingly give up. We could slash them, but for now we allow them to recover their  deposit and exit without issue. (We may want to change this if it is abused.) 

   Finally, the origin can be anyone if and only if the curator is "inactive". This allows  anyone in the community to call out that a curator is not doing their due diligence, and  we should pick a new curator. In this case the curator should also be slashed. 

   #### Complexity 

  - O(1).

___


## childBounties
 
### acceptCurator(parent_bounty_id: `Compact<u32>`, child_bounty_id: `Compact<u32>`)
- **interface**: `api.tx.childBounties.acceptCurator`
- **summary**:    Accept the curator role for the child-bounty. 

   The dispatch origin for this call must be the curator of this  child-bounty. 

   A deposit will be reserved from the curator and refund upon  successful payout or cancellation. 

   Fee for curator is deducted from curator fee of parent bounty. 

   Parent bounty must be in active state, for this child-bounty call to  work. 

   Child-bounty must be in "CuratorProposed" state, for processing the  call. And state of child-bounty is moved to "Active" on successful  call completion. 

   - `parent_bounty_id`: Index of parent bounty. 

  - `child_bounty_id`: Index of child bounty.
 
### addChildBounty(parent_bounty_id: `Compact<u32>`, value: `Compact<u128>`, description: `Bytes`)
- **interface**: `api.tx.childBounties.addChildBounty`
- **summary**:    Add a new child-bounty. 

   The dispatch origin for this call must be the curator of parent  bounty and the parent bounty must be in "active" state. 

   Child-bounty gets added successfully & fund gets transferred from  parent bounty to child-bounty account, if parent bounty has enough  funds, else the call fails. 

   Upper bound to maximum number of active  child bounties that can be  added are managed via runtime trait config  [`Config::MaxActiveChildBountyCount`]. 

   If the call is success, the status of child-bounty is updated to  "Added". 

   - `parent_bounty_id`: Index of parent bounty for which child-bounty is being added. 

  - `value`: Value for executing the proposal.

  - `description`: Text description for the child-bounty.
 
### awardChildBounty(parent_bounty_id: `Compact<u32>`, child_bounty_id: `Compact<u32>`, beneficiary: `MultiAddress`)
- **interface**: `api.tx.childBounties.awardChildBounty`
- **summary**:    Award child-bounty to a beneficiary. 

   The beneficiary will be able to claim the funds after a delay. 

   The dispatch origin for this call must be the parent curator or  curator of this child-bounty. 

   Parent bounty must be in active state, for this child-bounty call to  work. 

   Child-bounty must be in active state, for processing the call. And  state of child-bounty is moved to "PendingPayout" on successful call  completion. 

   - `parent_bounty_id`: Index of parent bounty. 

  - `child_bounty_id`: Index of child bounty.

  - `beneficiary`: Beneficiary account.
 
### claimChildBounty(parent_bounty_id: `Compact<u32>`, child_bounty_id: `Compact<u32>`)
- **interface**: `api.tx.childBounties.claimChildBounty`
- **summary**:    Claim the payout from an awarded child-bounty after payout delay. 

   The dispatch origin for this call may be any signed origin. 

   Call works independent of parent bounty state, No need for parent  bounty to be in active state. 

   The Beneficiary is paid out with agreed bounty value. Curator fee is  paid & curator deposit is unreserved. 

   Child-bounty must be in "PendingPayout" state, for processing the  call. And instance of child-bounty is removed from the state on  successful call completion. 

   - `parent_bounty_id`: Index of parent bounty. 

  - `child_bounty_id`: Index of child bounty.
 
### closeChildBounty(parent_bounty_id: `Compact<u32>`, child_bounty_id: `Compact<u32>`)
- **interface**: `api.tx.childBounties.closeChildBounty`
- **summary**:    Cancel a proposed or active child-bounty. Child-bounty account funds  are transferred to parent bounty account. The child-bounty curator  deposit may be unreserved if possible. 

   The dispatch origin for this call must be either parent curator or  `T::RejectOrigin`. 

   If the state of child-bounty is `Active`, curator deposit is  unreserved. 

   If the state of child-bounty is `PendingPayout`, call fails &  returns `PendingPayout` error. 

   For the origin other than T::RejectOrigin, parent bounty must be in  active state, for this child-bounty call to work. For origin  T::RejectOrigin execution is forced. 

   Instance of child-bounty is removed from the state on successful  call completion. 

   - `parent_bounty_id`: Index of parent bounty. 

  - `child_bounty_id`: Index of child bounty.
 
### proposeCurator(parent_bounty_id: `Compact<u32>`, child_bounty_id: `Compact<u32>`, curator: `MultiAddress`, fee: `Compact<u128>`)
- **interface**: `api.tx.childBounties.proposeCurator`
- **summary**:    Propose curator for funded child-bounty. 

   The dispatch origin for this call must be curator of parent bounty. 

   Parent bounty must be in active state, for this child-bounty call to  work. 

   Child-bounty must be in "Added" state, for processing the call. And  state of child-bounty is moved to "CuratorProposed" on successful  call completion. 

   - `parent_bounty_id`: Index of parent bounty. 

  - `child_bounty_id`: Index of child bounty.

  - `curator`: Address of child-bounty curator.

  - `fee`: payment fee to child-bounty curator for execution.
 
### unassignCurator(parent_bounty_id: `Compact<u32>`, child_bounty_id: `Compact<u32>`)
- **interface**: `api.tx.childBounties.unassignCurator`
- **summary**:    Unassign curator from a child-bounty. 

   The dispatch origin for this call can be either `RejectOrigin`, or  the curator of the parent bounty, or any signed origin. 

   For the origin other than T::RejectOrigin and the child-bounty  curator, parent bounty must be in active state, for this call to  work. We allow child-bounty curator and T::RejectOrigin to execute  this call irrespective of the parent bounty state. 

   If this function is called by the `RejectOrigin` or the  parent bounty curator, we assume that the child-bounty curator is  malicious or inactive. As a result, child-bounty curator deposit is  slashed. 

   If the origin is the child-bounty curator, we take this as a sign  that they are unable to do their job, and are willingly giving up.  We could slash the deposit, but for now we allow them to unreserve  their deposit and exit without issue. (We may want to change this if  it is abused.) 

   Finally, the origin can be anyone iff the child-bounty curator is  "inactive". Expiry update due of parent bounty is used to estimate  inactive state of child-bounty curator. 

   This allows anyone in the community to call out that a child-bounty  curator is not doing their due diligence, and we should pick a new  one. In this case the child-bounty curator deposit is slashed. 

   State of child-bounty is moved to Added state on successful call  completion. 

   - `parent_bounty_id`: Index of parent bounty. 

  - `child_bounty_id`: Index of child bounty.

___


## claims
 
### attest(statement: `Bytes`)
- **interface**: `api.tx.claims.attest`
- **summary**:    Attest to a statement, needed to finalize the claims process. 

   WARNING: Insecure unless your chain includes `PrevalidateAttests` as a  `SignedExtension`. 

   Unsigned Validation:  A call to attest is deemed valid if the sender has a `Preclaim` registered  and provides a `statement` which is expected for the account. 

   Parameters: 

  - `statement`: The identity of the statement which is being attested to in the signature. 

    
 
### claim(dest: `AccountId32`, ethereum_signature: `PolkadotRuntimeCommonClaimsEcdsaSignature`)
- **interface**: `api.tx.claims.claim`
- **summary**:    Make a claim to collect your DOTs. 

   The dispatch origin for this call must be _None_. 

   Unsigned Validation:  A call to claim is deemed valid if the signature provided matches  the expected signed message of: 

   > Ethereum Signed Message:  > (configured prefix string)(address) 

   and `address` matches the `dest` account. 

   Parameters: 

  - `dest`: The destination account to payout the claim.

  - `ethereum_signature`: The signature of an ethereum signed message matching the format described above. 

    
 
### claimAttest(dest: `AccountId32`, ethereum_signature: `PolkadotRuntimeCommonClaimsEcdsaSignature`, statement: `Bytes`)
- **interface**: `api.tx.claims.claimAttest`
- **summary**:    Make a claim to collect your DOTs by signing a statement. 

   The dispatch origin for this call must be _None_. 

   Unsigned Validation:  A call to `claim_attest` is deemed valid if the signature provided matches  the expected signed message of: 

   > Ethereum Signed Message:  > (configured prefix string)(address)(statement) 

   and `address` matches the `dest` account; the `statement` must match that which is  expected according to your purchase arrangement. 

   Parameters: 

  - `dest`: The destination account to payout the claim.

  - `ethereum_signature`: The signature of an ethereum signed message matching the format described above. 

  - `statement`: The identity of the statement which is being attested to in the signature. 

    
 
### mintClaim(who: `EthereumAddress`, value: `u128`, vesting_schedule: `Option<(u128,u128,u32)>`, statement: `Option<PolkadotRuntimeCommonClaimsStatementKind>`)
- **interface**: `api.tx.claims.mintClaim`
- **summary**:    Mint a new claim to collect DOTs. 

   The dispatch origin for this call must be _Root_. 

   Parameters: 

  - `who`: The Ethereum address allowed to collect this claim.

  - `value`: The number of DOTs that will be claimed.

  - `vesting_schedule`: An optional vesting schedule for these DOTs.

    
 
### moveClaim(old: `EthereumAddress`, new: `EthereumAddress`, maybe_preclaim: `Option<AccountId32>`)
- **interface**: `api.tx.claims.moveClaim`

___


## configuration
 
### setApprovalVotingParams(new: `PolkadotPrimitivesV7ApprovalVotingParams`)
- **interface**: `api.tx.configuration.setApprovalVotingParams`
- **summary**:    Set approval-voting-params. 
 
### setAsyncBackingParams(new: `PolkadotPrimitivesV7AsyncBackingAsyncBackingParams`)
- **interface**: `api.tx.configuration.setAsyncBackingParams`
- **summary**:    Set the asynchronous backing parameters. 
 
### setBypassConsistencyCheck(new: `bool`)
- **interface**: `api.tx.configuration.setBypassConsistencyCheck`
- **summary**:    Setting this to true will disable consistency checks for the configuration setters.  Use with caution. 
 
### setCodeRetentionPeriod(new: `u32`)
- **interface**: `api.tx.configuration.setCodeRetentionPeriod`
- **summary**:    Set the acceptance period for an included candidate. 
 
### setCoretimeCores(new: `u32`)
- **interface**: `api.tx.configuration.setCoretimeCores`
- **summary**:    Set the number of coretime execution cores. 

   NOTE: that this configuration is managed by the coretime chain. Only manually change  this, if you really know what you are doing! 
 
### setDisputePeriod(new: `u32`)
- **interface**: `api.tx.configuration.setDisputePeriod`
- **summary**:    Set the dispute period, in number of sessions to keep for disputes. 
 
### setDisputePostConclusionAcceptancePeriod(new: `u32`)
- **interface**: `api.tx.configuration.setDisputePostConclusionAcceptancePeriod`
- **summary**:    Set the dispute post conclusion acceptance period. 
 
### setExecutorParams(new: `PolkadotPrimitivesV7ExecutorParams`)
- **interface**: `api.tx.configuration.setExecutorParams`
- **summary**:    Set PVF executor parameters. 
 
### setGroupRotationFrequency(new: `u32`)
- **interface**: `api.tx.configuration.setGroupRotationFrequency`
- **summary**:    Set the parachain validator-group rotation frequency 
 
### setHrmpChannelMaxCapacity(new: `u32`)
- **interface**: `api.tx.configuration.setHrmpChannelMaxCapacity`
- **summary**:    Sets the maximum number of messages allowed in an HRMP channel at once. 
 
### setHrmpChannelMaxMessageSize(new: `u32`)
- **interface**: `api.tx.configuration.setHrmpChannelMaxMessageSize`
- **summary**:    Sets the maximum size of a message that could ever be put into an HRMP channel. 
 
### setHrmpChannelMaxTotalSize(new: `u32`)
- **interface**: `api.tx.configuration.setHrmpChannelMaxTotalSize`
- **summary**:    Sets the maximum total size of messages in bytes allowed in an HRMP channel at once. 
 
### setHrmpMaxMessageNumPerCandidate(new: `u32`)
- **interface**: `api.tx.configuration.setHrmpMaxMessageNumPerCandidate`
- **summary**:    Sets the maximum number of outbound HRMP messages can be sent by a candidate. 
 
### setHrmpMaxParachainInboundChannels(new: `u32`)
- **interface**: `api.tx.configuration.setHrmpMaxParachainInboundChannels`
- **summary**:    Sets the maximum number of inbound HRMP channels a parachain is allowed to accept. 
 
### setHrmpMaxParachainOutboundChannels(new: `u32`)
- **interface**: `api.tx.configuration.setHrmpMaxParachainOutboundChannels`
- **summary**:    Sets the maximum number of outbound HRMP channels a parachain is allowed to open. 
 
### setHrmpOpenRequestTtl(new: `u32`)
- **interface**: `api.tx.configuration.setHrmpOpenRequestTtl`
- **summary**:    Sets the number of sessions after which an HRMP open channel request expires. 
 
### setHrmpRecipientDeposit(new: `u128`)
- **interface**: `api.tx.configuration.setHrmpRecipientDeposit`
- **summary**:    Sets the amount of funds that the recipient should provide for accepting opening an HRMP  channel. 
 
### setHrmpSenderDeposit(new: `u128`)
- **interface**: `api.tx.configuration.setHrmpSenderDeposit`
- **summary**:    Sets the amount of funds that the sender should provide for opening an HRMP channel. 
 
### setMaxAvailabilityTimeouts(new: `u32`)
- **interface**: `api.tx.configuration.setMaxAvailabilityTimeouts`
- **summary**:    Set the max number of times a claim may timeout on a core before it is abandoned 
 
### setMaxCodeSize(new: `u32`)
- **interface**: `api.tx.configuration.setMaxCodeSize`
- **summary**:    Set the max validation code size for incoming upgrades. 
 
### setMaxDownwardMessageSize(new: `u32`)
- **interface**: `api.tx.configuration.setMaxDownwardMessageSize`
- **summary**:    Set the critical downward message size. 
 
### setMaxHeadDataSize(new: `u32`)
- **interface**: `api.tx.configuration.setMaxHeadDataSize`
- **summary**:    Set the max head data size for paras. 
 
### setMaxPovSize(new: `u32`)
- **interface**: `api.tx.configuration.setMaxPovSize`
- **summary**:    Set the max POV block size for incoming upgrades. 
 
### setMaxUpwardMessageNumPerCandidate(new: `u32`)
- **interface**: `api.tx.configuration.setMaxUpwardMessageNumPerCandidate`
- **summary**:    Sets the maximum number of messages that a candidate can contain. 
 
### setMaxUpwardMessageSize(new: `u32`)
- **interface**: `api.tx.configuration.setMaxUpwardMessageSize`
- **summary**:    Sets the maximum size of an upward message that can be sent by a candidate. 
 
### setMaxUpwardQueueCount(new: `u32`)
- **interface**: `api.tx.configuration.setMaxUpwardQueueCount`
- **summary**:    Sets the maximum items that can present in a upward dispatch queue at once. 
 
### setMaxUpwardQueueSize(new: `u32`)
- **interface**: `api.tx.configuration.setMaxUpwardQueueSize`
- **summary**:    Sets the maximum total size of items that can present in a upward dispatch queue at  once. 
 
### setMaxValidators(new: `Option<u32>`)
- **interface**: `api.tx.configuration.setMaxValidators`
- **summary**:    Set the maximum number of validators to use in parachain consensus. 
 
### setMaxValidatorsPerCore(new: `Option<u32>`)
- **interface**: `api.tx.configuration.setMaxValidatorsPerCore`
- **summary**:    Set the maximum number of validators to assign to any core. 
 
### setMinimumBackingVotes(new: `u32`)
- **interface**: `api.tx.configuration.setMinimumBackingVotes`
- **summary**:    Set the minimum backing votes threshold. 
 
### setMinimumValidationUpgradeDelay(new: `u32`)
- **interface**: `api.tx.configuration.setMinimumValidationUpgradeDelay`
- **summary**:    Sets the minimum delay between announcing the upgrade block for a parachain until the  upgrade taking place. 

   See the field documentation for information and constraints for the new value. 
 
### setNDelayTranches(new: `u32`)
- **interface**: `api.tx.configuration.setNDelayTranches`
- **summary**:    Set the total number of delay tranches. 
 
### setNeededApprovals(new: `u32`)
- **interface**: `api.tx.configuration.setNeededApprovals`
- **summary**:    Set the number of validators needed to approve a block. 
 
### setNoShowSlots(new: `u32`)
- **interface**: `api.tx.configuration.setNoShowSlots`
- **summary**:    Set the no show slots, in number of number of consensus slots.  Must be at least 1. 
 
### setNodeFeature(index: `u8`, value: `bool`)
- **interface**: `api.tx.configuration.setNodeFeature`
- **summary**:    Set/Unset a node feature. 
 
### setOnDemandBaseFee(new: `u128`)
- **interface**: `api.tx.configuration.setOnDemandBaseFee`
- **summary**:    Set the on demand (parathreads) base fee. 
 
### setOnDemandFeeVariability(new: `Perbill`)
- **interface**: `api.tx.configuration.setOnDemandFeeVariability`
- **summary**:    Set the on demand (parathreads) fee variability. 
 
### setOnDemandQueueMaxSize(new: `u32`)
- **interface**: `api.tx.configuration.setOnDemandQueueMaxSize`
- **summary**:    Set the on demand (parathreads) queue max size. 
 
### setOnDemandTargetQueueUtilization(new: `Perbill`)
- **interface**: `api.tx.configuration.setOnDemandTargetQueueUtilization`
- **summary**:    Set the on demand (parathreads) fee variability. 
 
### setOnDemandTtl(new: `u32`)
- **interface**: `api.tx.configuration.setOnDemandTtl`
- **summary**:    Set the on demand (parathreads) ttl in the claimqueue. 
 
### setParasAvailabilityPeriod(new: `u32`)
- **interface**: `api.tx.configuration.setParasAvailabilityPeriod`
- **summary**:    Set the availability period for paras. 
 
### setPvfVotingTtl(new: `u32`)
- **interface**: `api.tx.configuration.setPvfVotingTtl`
- **summary**:    Set the number of session changes after which a PVF pre-checking voting is rejected. 
 
### setRelayVrfModuloSamples(new: `u32`)
- **interface**: `api.tx.configuration.setRelayVrfModuloSamples`
- **summary**:    Set the number of samples to do of the `RelayVRFModulo` approval assignment criterion. 
 
### setSchedulerParams(new: `PolkadotPrimitivesVstagingSchedulerParams`)
- **interface**: `api.tx.configuration.setSchedulerParams`
- **summary**:    Set scheduler-params. 
 
### setSchedulingLookahead(new: `u32`)
- **interface**: `api.tx.configuration.setSchedulingLookahead`
- **summary**:    Set the scheduling lookahead, in expected number of blocks at peak throughput. 
 
### setValidationUpgradeCooldown(new: `u32`)
- **interface**: `api.tx.configuration.setValidationUpgradeCooldown`
- **summary**:    Set the validation upgrade cooldown. 
 
### setValidationUpgradeDelay(new: `u32`)
- **interface**: `api.tx.configuration.setValidationUpgradeDelay`
- **summary**:    Set the validation upgrade delay. 
 
### setZerothDelayTrancheWidth(new: `u32`)
- **interface**: `api.tx.configuration.setZerothDelayTrancheWidth`
- **summary**:    Set the zeroth delay tranche width. 

___


## convictionVoting
 
### delegate(class: `u16`, to: `MultiAddress`, conviction: `PalletConvictionVotingConviction`, balance: `u128`)
- **interface**: `api.tx.convictionVoting.delegate`
- **summary**:    Delegate the voting power (with some given conviction) of the sending account for a  particular class of polls. 

   The balance delegated is locked for as long as it's delegated, and thereafter for the  time appropriate for the conviction's lock period. 

   The dispatch origin of this call must be _Signed_, and the signing account must either: 

  - be delegating already; or

  - have no voting activity (if there is, then it will need to be removed through `remove_vote`). 

   - `to`: The account whose voting the `target` account's voting power will follow. 

  - `class`: The class of polls to delegate. To delegate multiple classes, multiple calls to this function are required. 

  - `conviction`: The conviction that will be attached to the delegated votes. When the account is undelegated, the funds will be locked for the corresponding period. 

  - `balance`: The amount of the account's balance to be used in delegating. This must not be more than the account's current balance. 

   Emits `Delegated`. 

   Weight: `O(R)` where R is the number of polls the voter delegating to has  voted on. Weight is initially charged as if maximum votes, but is refunded later. 
 
### removeOtherVote(target: `MultiAddress`, class: `u16`, index: `u32`)
- **interface**: `api.tx.convictionVoting.removeOtherVote`
- **summary**:    Remove a vote for a poll. 

   If the `target` is equal to the signer, then this function is exactly equivalent to  `remove_vote`. If not equal to the signer, then the vote must have expired,  either because the poll was cancelled, because the voter lost the poll or  because the conviction period is over. 

   The dispatch origin of this call must be _Signed_. 

   - `target`: The account of the vote to be removed; this account must have voted for poll  `index`. 

  - `index`: The index of poll of the vote to be removed.

  - `class`: The class of the poll.

   Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.  Weight is calculated for the maximum number of vote. 
 
### removeVote(class: `Option<u16>`, index: `u32`)
- **interface**: `api.tx.convictionVoting.removeVote`
- **summary**:    Remove a vote for a poll. 

   If: 

  - the poll was cancelled, or

  - the poll is ongoing, or

  - the poll has ended such that

  - the vote of the account was in opposition to the result; or

  - there was no conviction to the account's vote; or

  - the account made a split vote ...then the vote is removed cleanly and a following call to `unlock` may result in more  funds being available. 

   If, however, the poll has ended and: 

  - it finished corresponding to the vote of the account, and

  - the account made a standard vote with conviction, and

  - the lock period of the conviction is not over ...then the lock will be aggregated into the overall account's lock, which may involve 

  *overlocking* (where the two locks are combined into a single lock that is the maximum of both the amount locked and the time is it locked for). 

   The dispatch origin of this call must be _Signed_, and the signer must have a vote  registered for poll `index`. 

   - `index`: The index of poll of the vote to be removed. 

  - `class`: Optional parameter, if given it indicates the class of the poll. For polls which have finished or are cancelled, this must be `Some`. 

   Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.  Weight is calculated for the maximum number of vote. 
 
### undelegate(class: `u16`)
- **interface**: `api.tx.convictionVoting.undelegate`
- **summary**:    Undelegate the voting power of the sending account for a particular class of polls. 

   Tokens may be unlocked following once an amount of time consistent with the lock period  of the conviction with which the delegation was issued has passed. 

   The dispatch origin of this call must be _Signed_ and the signing account must be  currently delegating. 

   - `class`: The class of polls to remove the delegation from. 

   Emits `Undelegated`. 

   Weight: `O(R)` where R is the number of polls the voter delegating to has  voted on. Weight is initially charged as if maximum votes, but is refunded later. 
 
### unlock(class: `u16`, target: `MultiAddress`)
- **interface**: `api.tx.convictionVoting.unlock`
- **summary**:    Remove the lock caused by prior voting/delegating which has expired within a particular  class. 

   The dispatch origin of this call must be _Signed_. 

   - `class`: The class of polls to unlock. 

  - `target`: The account to remove the lock on.

   Weight: `O(R)` with R number of vote of target. 
 
### vote(poll_index: `Compact<u32>`, vote: `PalletConvictionVotingVoteAccountVote`)
- **interface**: `api.tx.convictionVoting.vote`
- **summary**:    Vote in a poll. If `vote.is_aye()`, the vote is to enact the proposal;  otherwise it is a vote to keep the status quo. 

   The dispatch origin of this call must be _Signed_. 

   - `poll_index`: The index of the poll to vote for. 

  - `vote`: The vote configuration.

   Weight: `O(R)` where R is the number of polls the voter has voted on. 

___


## coretime
 
### assignCore(core: `u16`, begin: `u32`, assignment: `Vec<(PalletBrokerCoretimeInterfaceCoreAssignment,u16)>`, end_hint: `Option<u32>`)
- **interface**: `api.tx.coretime.assignCore`
- **summary**:    Receive instructions from the `ExternalBrokerOrigin`, detailing how a specific core is  to be used. 

   Parameters: 

  -`origin`: The `ExternalBrokerOrigin`, assumed to be the coretime chain.

  -`core`: The core that should be scheduled.

  -`begin`: The starting blockheight of the instruction.

  -`assignment`: How the blockspace should be utilised.

  -`end_hint`: An optional hint as to when this particular set of instructions will end.
 
### requestCoreCount(count: `u16`)
- **interface**: `api.tx.coretime.requestCoreCount`
- **summary**:    Request the configuration to be updated with the specified number of cores. Warning:  Since this only schedules a configuration update, it takes two sessions to come into  effect. 

   - `origin`: Root or the Coretime Chain 

  - `count`: total number of cores
 
### requestRevenueAt(when: `u32`)
- **interface**: `api.tx.coretime.requestRevenueAt`
- **summary**:    Request to claim the instantaneous coretime sales revenue starting from the block it was  last claimed until and up to the block specified. The claimed amount value is sent back  to the Coretime chain in a `notify_revenue` message. At the same time, the amount is  teleported to the Coretime chain. 

___


## crowdloan
 
### addMemo(index: `u32`, memo: `Bytes`)
- **interface**: `api.tx.crowdloan.addMemo`
- **summary**:    Add an optional memo to an existing crowdloan contribution. 

   Origin must be Signed, and the user must have contributed to the crowdloan. 
 
### contribute(index: `Compact<u32>`, value: `Compact<u128>`, signature: `Option<SpRuntimeMultiSignature>`)
- **interface**: `api.tx.crowdloan.contribute`
- **summary**:    Contribute to a crowd sale. This will transfer some balance over to fund a parachain  slot. It will be withdrawable when the crowdloan has ended and the funds are unused. 
 
### contributeAll(index: `Compact<u32>`, signature: `Option<SpRuntimeMultiSignature>`)
- **interface**: `api.tx.crowdloan.contributeAll`
- **summary**:    Contribute your entire balance to a crowd sale. This will transfer the entire balance of  a user over to fund a parachain slot. It will be withdrawable when the crowdloan has  ended and the funds are unused. 
 
### create(index: `Compact<u32>`, cap: `Compact<u128>`, first_period: `Compact<u32>`, last_period: `Compact<u32>`, end: `Compact<u32>`, verifier: `Option<SpRuntimeMultiSigner>`)
- **interface**: `api.tx.crowdloan.create`
- **summary**:    Create a new crowdloaning campaign for a parachain slot with the given lease period  range. 

   This applies a lock to your parachain configuration, ensuring that it cannot be changed  by the parachain manager. 
 
### dissolve(index: `Compact<u32>`)
- **interface**: `api.tx.crowdloan.dissolve`
- **summary**:    Remove a fund after the retirement period has ended and all funds have been returned. 
 
### edit(index: `Compact<u32>`, cap: `Compact<u128>`, first_period: `Compact<u32>`, last_period: `Compact<u32>`, end: `Compact<u32>`, verifier: `Option<SpRuntimeMultiSigner>`)
- **interface**: `api.tx.crowdloan.edit`
- **summary**:    Edit the configuration for an in-progress crowdloan. 

   Can only be called by Root origin. 
 
### poke(index: `u32`)
- **interface**: `api.tx.crowdloan.poke`
- **summary**:    Poke the fund into `NewRaise` 

   Origin must be Signed, and the fund has non-zero raise. 
 
### refund(index: `Compact<u32>`)
- **interface**: `api.tx.crowdloan.refund`
- **summary**:    Automatically refund contributors of an ended crowdloan.  Due to weight restrictions, this function may need to be called multiple  times to fully refund all users. We will refund `RemoveKeysLimit` users at a time. 

   Origin must be signed, but can come from anyone. 
 
### withdraw(who: `AccountId32`, index: `Compact<u32>`)
- **interface**: `api.tx.crowdloan.withdraw`
- **summary**:    Withdraw full balance of a specific contributor. 

   Origin must be signed, but can come from anyone. 

   The fund must be either in, or ready for, retirement. For a fund to be *in* retirement,  then the retirement flag must be set. For a fund to be ready for retirement, then: 

  - it must not already be in retirement;

  - the amount of raised funds must be bigger than the _free_ balance of the account;

  - and either:

  - the block number must be at least `end`; or

  - the current lease period must be greater than the fund's `last_period`.

   In this case, the fund's retirement flag is set and its `end` is reset to the current  block number. 

   - `who`: The account whose contribution should be withdrawn. 

  - `index`: The parachain to whose crowdloan the contribution was made.

___


## electionProviderMultiPhase
 
### governanceFallback(maybe_max_voters: `Option<u32>`, maybe_max_targets: `Option<u32>`)
- **interface**: `api.tx.electionProviderMultiPhase.governanceFallback`
- **summary**:    Trigger the governance fallback. 

   This can only be called when [`Phase::Emergency`] is enabled, as an alternative to  calling [`Call::set_emergency_election_result`]. 
 
### setEmergencyElectionResult(supports: `Vec<(AccountId32,SpNposElectionsSupport)>`)
- **interface**: `api.tx.electionProviderMultiPhase.setEmergencyElectionResult`
- **summary**:    Set a solution in the queue, to be handed out to the client of this pallet in the next  call to `ElectionProvider::elect`. 

   This can only be set by `T::ForceOrigin`, and only when the phase is `Emergency`. 

   The solution is not checked for any feasibility and is assumed to be trustworthy, as any  feasibility check itself can in principle cause the election process to fail (due to  memory/weight constrains). 
 
### setMinimumUntrustedScore(maybe_next_score: `Option<SpNposElectionsElectionScore>`)
- **interface**: `api.tx.electionProviderMultiPhase.setMinimumUntrustedScore`
- **summary**:    Set a new value for `MinimumUntrustedScore`. 

   Dispatch origin must be aligned with `T::ForceOrigin`. 

   This check can be turned off by setting the value to `None`. 
 
### submit(raw_solution: `PalletElectionProviderMultiPhaseRawSolution`)
- **interface**: `api.tx.electionProviderMultiPhase.submit`
- **summary**:    Submit a solution for the signed phase. 

   The dispatch origin fo this call must be __signed__. 

   The solution is potentially queued, based on the claimed score and processed at the end  of the signed phase. 

   A deposit is reserved and recorded for the solution. Based on the outcome, the solution  might be rewarded, slashed, or get all or a part of the deposit back. 
 
### submitUnsigned(raw_solution: `PalletElectionProviderMultiPhaseRawSolution`, witness: `PalletElectionProviderMultiPhaseSolutionOrSnapshotSize`)
- **interface**: `api.tx.electionProviderMultiPhase.submitUnsigned`
- **summary**:    Submit a solution for the unsigned phase. 

   The dispatch origin fo this call must be __none__. 

   This submission is checked on the fly. Moreover, this unsigned solution is only  validated when submitted to the pool from the **local** node. Effectively, this means  that only active validators can submit this transaction when authoring a block (similar  to an inherent). 

   To prevent any incorrect solution (and thus wasted time/weight), this transaction will  panic if the solution submitted by the validator is invalid in any way, effectively  putting their authoring reward at risk. 

   No deposit or reward is associated with this submission. 

___


## fastUnstake
 
### control(eras_to_check: `u32`)
- **interface**: `api.tx.fastUnstake.control`
- **summary**:    Control the operation of this pallet. 

   #### Dispatch Origin 

   The dispatch origin of this call must be [`Config::ControlOrigin`]. 

   #### Details 

   Can set the number of eras to check per block, and potentially other admin work. 

   #### Events 

   No events are emitted from this dispatch. 
 
### deregister()
- **interface**: `api.tx.fastUnstake.deregister`
- **summary**:    Deregister oneself from the fast-unstake. 

   #### Dispatch Origin 

   The dispatch origin of this call must be *signed* by whoever is permitted to call  unbond funds by the staking system. See [`Config::Staking`]. 

   #### Details 

   This is useful if one is registered, they are still waiting, and they change their mind. 

   Note that the associated stash is still fully unbonded and chilled as a consequence of  calling [`Pallet::register_fast_unstake`]. Therefore, this should probably be followed  by a call to `rebond` in the staking system. 

   #### Events 

   Some events from the staking and currency system might be emitted. 
 
### registerFastUnstake()
- **interface**: `api.tx.fastUnstake.registerFastUnstake`
- **summary**:    Register oneself for fast-unstake. 

   #### Dispatch Origin 

   The dispatch origin of this call must be *signed* by whoever is permitted to call  unbond funds by the staking system. See [`Config::Staking`]. 

   #### Details 

   The stash associated with the origin must have no ongoing unlocking chunks. If  successful, this will fully unbond and chill the stash. Then, it will enqueue the stash  to be checked in further blocks. 

   If by the time this is called, the stash is actually eligible for fast-unstake, then  they are guaranteed to remain eligible, because the call will chill them as well. 

   If the check works, the entire staking data is removed, i.e. the stash is fully  unstaked. 

   If the check fails, the stash remains chilled and waiting for being unbonded as in with  the normal staking system, but they lose part of their unbonding chunks due to consuming  the chain's resources. 

   #### Events 

   Some events from the staking and currency system might be emitted. 

___


## grandpa
 
### noteStalled(delay: `u32`, best_finalized_block_number: `u32`)
- **interface**: `api.tx.grandpa.noteStalled`
- **summary**:    Note that the current authority set of the GRANDPA finality gadget has stalled. 

   This will trigger a forced authority set change at the beginning of the next session, to  be enacted `delay` blocks after that. The `delay` should be high enough to safely assume  that the block signalling the forced change will not be re-orged e.g. 1000 blocks.  The block production rate (which may be slowed down because of finality lagging) should  be taken into account when choosing the `delay`. The GRANDPA voters based on the new  authority will start voting on top of `best_finalized_block_number` for new finalized  blocks. `best_finalized_block_number` should be the highest of the latest finalized  block of all validators of the new authority set. 

   Only callable by root. 
 
### reportEquivocation(equivocation_proof: `SpConsensusGrandpaEquivocationProof`, key_owner_proof: `SpSessionMembershipProof`)
- **interface**: `api.tx.grandpa.reportEquivocation`
- **summary**:    Report voter equivocation/misbehavior. This method will verify the  equivocation proof and validate the given key ownership proof  against the extracted offender. If both are valid, the offence  will be reported. 
 
### reportEquivocationUnsigned(equivocation_proof: `SpConsensusGrandpaEquivocationProof`, key_owner_proof: `SpSessionMembershipProof`)
- **interface**: `api.tx.grandpa.reportEquivocationUnsigned`
- **summary**:    Report voter equivocation/misbehavior. This method will verify the  equivocation proof and validate the given key ownership proof  against the extracted offender. If both are valid, the offence  will be reported. 

   This extrinsic must be called unsigned and it is expected that only  block authors will call it (validated in `ValidateUnsigned`), as such  if the block author is defined it will be defined as the equivocation  reporter. 

___


## hrmp
 
### establishChannelWithSystem(target_system_chain: `u32`)
- **interface**: `api.tx.hrmp.establishChannelWithSystem`
- **summary**:    Establish a bidirectional HRMP channel between a parachain and a system chain. 

   Arguments: 

   - `target_system_chain`: A system chain, `ParaId`. 

   The origin needs to be the parachain origin. 
 
### establishSystemChannel(sender: `u32`, recipient: `u32`)
- **interface**: `api.tx.hrmp.establishSystemChannel`
- **summary**:    Establish an HRMP channel between two system chains. If the channel does not already  exist, the transaction fees will be refunded to the caller. The system does not take  deposits for channels between system chains, and automatically sets the message number  and size limits to the maximum allowed by the network's configuration. 

   Arguments: 

   - `sender`: A system chain, `ParaId`. 

  - `recipient`: A system chain, `ParaId`.

   Any signed origin can call this function, but _both_ inputs MUST be system chains. If  the channel does not exist yet, there is no fee. 
 
### forceCleanHrmp(para: `u32`, num_inbound: `u32`, num_outbound: `u32`)
- **interface**: `api.tx.hrmp.forceCleanHrmp`
- **summary**:    This extrinsic triggers the cleanup of all the HRMP storage items that a para may have.  Normally this happens once per session, but this allows you to trigger the cleanup  immediately for a specific parachain. 

   Number of inbound and outbound channels for `para` must be provided as witness data. 

   Origin must be the `ChannelManager`. 
 
### forceOpenHrmpChannel(sender: `u32`, recipient: `u32`, max_capacity: `u32`, max_message_size: `u32`)
- **interface**: `api.tx.hrmp.forceOpenHrmpChannel`
- **summary**:    Open a channel from a `sender` to a `recipient` `ParaId`. Although opened by governance,  the `max_capacity` and `max_message_size` are still subject to the Relay Chain's  configured limits. 

   Expected use is when one (and only one) of the `ParaId`s involved in the channel is  governed by the system, e.g. a system parachain. 

   Origin must be the `ChannelManager`. 
 
### forceProcessHrmpClose(channels: `u32`)
- **interface**: `api.tx.hrmp.forceProcessHrmpClose`
- **summary**:    Force process HRMP close channel requests. 

   If there are pending HRMP close channel requests, you can use this function to process  all of those requests immediately. 

   Total number of closing channels must be provided as witness data. 

   Origin must be the `ChannelManager`. 
 
### forceProcessHrmpOpen(channels: `u32`)
- **interface**: `api.tx.hrmp.forceProcessHrmpOpen`
- **summary**:    Force process HRMP open channel requests. 

   If there are pending HRMP open channel requests, you can use this function to process  all of those requests immediately. 

   Total number of opening channels must be provided as witness data. 

   Origin must be the `ChannelManager`. 
 
### hrmpAcceptOpenChannel(sender: `u32`)
- **interface**: `api.tx.hrmp.hrmpAcceptOpenChannel`
- **summary**:    Accept a pending open channel request from the given sender. 

   The channel will be opened only on the next session boundary. 
 
### hrmpCancelOpenRequest(channel_id: `PolkadotParachainPrimitivesPrimitivesHrmpChannelId`, open_requests: `u32`)
- **interface**: `api.tx.hrmp.hrmpCancelOpenRequest`
- **summary**:    This cancels a pending open channel request. It can be canceled by either of the sender  or the recipient for that request. The origin must be either of those. 

   The cancellation happens immediately. It is not possible to cancel the request if it is  already accepted. 

   Total number of open requests (i.e. `HrmpOpenChannelRequestsList`) must be provided as  witness data. 
 
### hrmpCloseChannel(channel_id: `PolkadotParachainPrimitivesPrimitivesHrmpChannelId`)
- **interface**: `api.tx.hrmp.hrmpCloseChannel`
- **summary**:    Initiate unilateral closing of a channel. The origin must be either the sender or the  recipient in the channel being closed. 

   The closure can only happen on a session change. 
 
### hrmpInitOpenChannel(recipient: `u32`, proposed_max_capacity: `u32`, proposed_max_message_size: `u32`)
- **interface**: `api.tx.hrmp.hrmpInitOpenChannel`
- **summary**:    Initiate opening a channel from a parachain to a given recipient with given channel  parameters. 

   - `proposed_max_capacity` - specifies how many messages can be in the channel at once. 

  - `proposed_max_message_size` - specifies the maximum size of the messages.

   These numbers are a subject to the relay-chain configuration limits. 

   The channel can be opened only after the recipient confirms it and only on a session  change. 
 
### pokeChannelDeposits(sender: `u32`, recipient: `u32`)
- **interface**: `api.tx.hrmp.pokeChannelDeposits`
- **summary**:    Update the deposits held for an HRMP channel to the latest `Configuration`. Channels  with system chains do not require a deposit. 

   Arguments: 

   - `sender`: A chain, `ParaId`. 

  - `recipient`: A chain, `ParaId`.

   Any signed origin can call this function. 

___


## indices
 
### claim(index: `u32`)
- **interface**: `api.tx.indices.claim`
- **summary**:    Assign an previously unassigned index. 

   Payment: `Deposit` is reserved from the sender account. 

   The dispatch origin for this call must be _Signed_. 

   - `index`: the index to be claimed. This must not be in use. 

   Emits `IndexAssigned` if successful. 

   #### Complexity 

  - `O(1)`.
 
### forceTransfer(new: `MultiAddress`, index: `u32`, freeze: `bool`)
- **interface**: `api.tx.indices.forceTransfer`
- **summary**:    Force an index to an account. This doesn't require a deposit. If the index is already  held, then any deposit is reimbursed to its current owner. 

   The dispatch origin for this call must be _Root_. 

   - `index`: the index to be (re-)assigned. 

  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.

  - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.

   Emits `IndexAssigned` if successful. 

   #### Complexity 

  - `O(1)`.
 
### free(index: `u32`)
- **interface**: `api.tx.indices.free`
- **summary**:    Free up an index owned by the sender. 

   Payment: Any previous deposit placed for the index is unreserved in the sender account. 

   The dispatch origin for this call must be _Signed_ and the sender must own the index. 

   - `index`: the index to be freed. This must be owned by the sender. 

   Emits `IndexFreed` if successful. 

   #### Complexity 

  - `O(1)`.
 
### freeze(index: `u32`)
- **interface**: `api.tx.indices.freeze`
- **summary**:    Freeze an index so it will always point to the sender account. This consumes the  deposit. 

   The dispatch origin for this call must be _Signed_ and the signing account must have a  non-frozen account `index`. 

   - `index`: the index to be frozen in place. 

   Emits `IndexFrozen` if successful. 

   #### Complexity 

  - `O(1)`.
 
### transfer(new: `MultiAddress`, index: `u32`)
- **interface**: `api.tx.indices.transfer`
- **summary**:    Assign an index already owned by the sender to another account. The balance reservation  is effectively transferred to the new account. 

   The dispatch origin for this call must be _Signed_. 

   - `index`: the index to be re-assigned. This must be owned by the sender. 

  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.

   Emits `IndexAssigned` if successful. 

   #### Complexity 

  - `O(1)`.

___


## initializer
 
### forceApprove(up_to: `u32`)
- **interface**: `api.tx.initializer.forceApprove`
- **summary**:    Issue a signal to the consensus engine to forcibly act as though all parachain  blocks in all relay chain blocks up to and including the given number in the current  chain are valid and should be finalized. 

___


## messageQueue
 
### executeOverweight(message_origin: `PolkadotRuntimeParachainsInclusionAggregateMessageOrigin`, page: `u32`, index: `u32`, weight_limit: `SpWeightsWeightV2Weight`)
- **interface**: `api.tx.messageQueue.executeOverweight`
- **summary**:    Execute an overweight message. 

   Temporary processing errors will be propagated whereas permanent errors are treated  as success condition. 

   - `origin`: Must be `Signed`. 

  - `message_origin`: The origin from which the message to be executed arrived.

  - `page`: The page in the queue in which the message to be executed is sitting.

  - `index`: The index into the queue of the message to be executed.

  - `weight_limit`: The maximum amount of weight allowed to be consumed in the execution of the message. 

   Benchmark complexity considerations: O(index + weight_limit). 
 
### reapPage(message_origin: `PolkadotRuntimeParachainsInclusionAggregateMessageOrigin`, page_index: `u32`)
- **interface**: `api.tx.messageQueue.reapPage`
- **summary**:    Remove a page which has no more messages remaining to be processed or is stale. 

___


## multisig
 
### approveAsMulti(threshold: `u16`, other_signatories: `Vec<AccountId32>`, maybe_timepoint: `Option<PalletMultisigTimepoint>`, call_hash: `[u8;32]`, max_weight: `SpWeightsWeightV2Weight`)
- **interface**: `api.tx.multisig.approveAsMulti`
- **summary**:    Register approval for a dispatch to be made from a deterministic composite account if  approved by a total of `threshold - 1` of `other_signatories`. 

   Payment: `DepositBase` will be reserved if this is the first approval, plus  `threshold` times `DepositFactor`. It is returned once this dispatch happens or  is cancelled. 

   The dispatch origin for this call must be _Signed_. 

   - `threshold`: The total number of approvals for this dispatch before it is executed. 

  - `other_signatories`: The accounts (other than the sender) who can approve this dispatch. May not be empty. 

  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is not the first approval, then it must be `Some`, with the timepoint (block number and  transaction index) of the first approval transaction. 

  - `call_hash`: The hash of the call to be executed.

   NOTE: If this is the final approval, you will want to use `as_multi` instead. 

   #### Complexity 

  - `O(S)`.

  - Up to one balance-reserve or unreserve operation.

  - One passthrough operation, one insert, both `O(S)` where `S` is the number of signatories. `S` is capped by `MaxSignatories`, with weight being proportional. 

  - One encode & hash, both of complexity `O(S)`.

  - Up to one binary search and insert (`O(logS + S)`).

  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.

  - One event.

  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit taken for its lifetime of `DepositBase + threshold * DepositFactor`. 
 
### asMulti(threshold: `u16`, other_signatories: `Vec<AccountId32>`, maybe_timepoint: `Option<PalletMultisigTimepoint>`, call: `Call`, max_weight: `SpWeightsWeightV2Weight`)
- **interface**: `api.tx.multisig.asMulti`
- **summary**:    Register approval for a dispatch to be made from a deterministic composite account if  approved by a total of `threshold - 1` of `other_signatories`. 

   If there are enough, then dispatch the call. 

   Payment: `DepositBase` will be reserved if this is the first approval, plus  `threshold` times `DepositFactor`. It is returned once this dispatch happens or  is cancelled. 

   The dispatch origin for this call must be _Signed_. 

   - `threshold`: The total number of approvals for this dispatch before it is executed. 

  - `other_signatories`: The accounts (other than the sender) who can approve this dispatch. May not be empty. 

  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is not the first approval, then it must be `Some`, with the timepoint (block number and  transaction index) of the first approval transaction. 

  - `call`: The call to be executed.

   NOTE: Unless this is the final approval, you will generally want to use  `approve_as_multi` instead, since it only requires a hash of the call. 

   Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise  on success, result is `Ok` and the result from the interior call, if it was executed,  may be found in the deposited `MultisigExecuted` event. 

   #### Complexity 

  - `O(S + Z + Call)`.

  - Up to one balance-reserve or unreserve operation.

  - One passthrough operation, one insert, both `O(S)` where `S` is the number of signatories. `S` is capped by `MaxSignatories`, with weight being proportional. 

  - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.

  - One encode & hash, both of complexity `O(S)`.

  - Up to one binary search and insert (`O(logS + S)`).

  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.

  - One event.

  - The weight of the `call`.

  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit taken for its lifetime of `DepositBase + threshold * DepositFactor`. 
 
### asMultiThreshold1(other_signatories: `Vec<AccountId32>`, call: `Call`)
- **interface**: `api.tx.multisig.asMultiThreshold1`
- **summary**:    Immediately dispatch a multi-signature call using a single approval from the caller. 

   The dispatch origin for this call must be _Signed_. 

   - `other_signatories`: The accounts (other than the sender) who are part of the  multi-signature, but do not participate in the approval process. 

  - `call`: The call to be executed.

   Result is equivalent to the dispatched result. 

   #### Complexity  O(Z + C) where Z is the length of the call and C its execution weight. 
 
### cancelAsMulti(threshold: `u16`, other_signatories: `Vec<AccountId32>`, timepoint: `PalletMultisigTimepoint`, call_hash: `[u8;32]`)
- **interface**: `api.tx.multisig.cancelAsMulti`
- **summary**:    Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously  for this operation will be unreserved on success. 

   The dispatch origin for this call must be _Signed_. 

   - `threshold`: The total number of approvals for this dispatch before it is executed. 

  - `other_signatories`: The accounts (other than the sender) who can approve this dispatch. May not be empty. 

  - `timepoint`: The timepoint (block number and transaction index) of the first approval transaction for this dispatch. 

  - `call_hash`: The hash of the call to be executed.

   #### Complexity 

  - `O(S)`.

  - Up to one balance-reserve or unreserve operation.

  - One passthrough operation, one insert, both `O(S)` where `S` is the number of signatories. `S` is capped by `MaxSignatories`, with weight being proportional. 

  - One encode & hash, both of complexity `O(S)`.

  - One event.

  - I/O: 1 read `O(S)`, one remove.

  - Storage: removes one item.

___


## nominationPools
 
### adjustPoolDeposit(pool_id: `u32`)
- **interface**: `api.tx.nominationPools.adjustPoolDeposit`
- **summary**:    Top up the deficit or withdraw the excess ED from the pool. 

   When a pool is created, the pool depositor transfers ED to the reward account of the  pool. ED is subject to change and over time, the deposit in the reward account may be  insufficient to cover the ED deficit of the pool or vice-versa where there is excess  deposit to the pool. This call allows anyone to adjust the ED deposit of the  pool by either topping up the deficit or claiming the excess. 
 
### applySlash(member_account: `MultiAddress`)
- **interface**: `api.tx.nominationPools.applySlash`
- **summary**:    Apply a pending slash on a member. 

   Fails unless [`crate::pallet::Config::StakeAdapter`] is of strategy type:  [`adapter::StakeStrategyType::Delegate`]. 

   This call can be dispatched permissionlessly (i.e. by any account). If the member has  slash to be applied, caller may be rewarded with the part of the slash. 
 
### bondExtra(extra: `PalletNominationPoolsBondExtra`)
- **interface**: `api.tx.nominationPools.bondExtra`
- **summary**:    Bond `extra` more funds from `origin` into the pool to which they already belong. 

   Additional funds can come from either the free balance of the account, of from the  accumulated rewards, see [`BondExtra`]. 

   Bonding extra funds implies an automatic payout of all pending rewards as well.  See `bond_extra_other` to bond pending rewards of `other` members. 
 
### bondExtraOther(member: `MultiAddress`, extra: `PalletNominationPoolsBondExtra`)
- **interface**: `api.tx.nominationPools.bondExtraOther`
- **summary**:    `origin` bonds funds from `extra` for some pool member `member` into their respective  pools. 

   `origin` can bond extra funds from free balance or pending rewards when `origin ==  other`. 

   In the case of `origin != other`, `origin` can only bond extra pending rewards of  `other` members assuming set_claim_permission for the given member is  `PermissionlessCompound` or `PermissionlessAll`. 
 
### chill(pool_id: `u32`)
- **interface**: `api.tx.nominationPools.chill`
- **summary**:    Chill on behalf of the pool. 

   The dispatch origin of this call can be signed by the pool nominator or the pool  root role, same as [`Pallet::nominate`]. 

   Under certain conditions, this call can be dispatched permissionlessly (i.e. by any  account). 

   #### Conditions for a permissionless dispatch: 

  * When pool depositor has less than `MinNominatorBond` staked, otherwise  pool members are unable to unbond. 

   #### Conditions for permissioned dispatch: 

  * The caller has a nominator or root role of the pool. This directly forward the call to the staking pallet, on behalf of the pool bonded  account. 
 
### claimCommission(pool_id: `u32`)
- **interface**: `api.tx.nominationPools.claimCommission`
- **summary**:    Claim pending commission. 

   The dispatch origin of this call must be signed by the `root` role of the pool. Pending  commission is paid out and added to total claimed commission`. Total pending commission  is reset to zero. the current. 
 
### claimPayout()
- **interface**: `api.tx.nominationPools.claimPayout`
- **summary**:    A bonded member can use this to claim their payout based on the rewards that the pool  has accumulated since their last claimed payout (OR since joining if this is their first  time claiming rewards). The payout will be transferred to the member's account. 

   The member will earn rewards pro rata based on the members stake vs the sum of the  members in the pools stake. Rewards do not "expire". 

   See `claim_payout_other` to claim rewards on behalf of some `other` pool member. 
 
### claimPayoutOther(other: `AccountId32`)
- **interface**: `api.tx.nominationPools.claimPayoutOther`
- **summary**:    `origin` can claim payouts on some pool member `other`'s behalf. 

   Pool member `other` must have a `PermissionlessWithdraw` or `PermissionlessAll` claim  permission for this call to be successful. 
 
### create(amount: `Compact<u128>`, root: `MultiAddress`, nominator: `MultiAddress`, bouncer: `MultiAddress`)
- **interface**: `api.tx.nominationPools.create`
- **summary**:    Create a new delegation pool. 

   #### Arguments 

   * `amount` - The amount of funds to delegate to the pool. This also acts of a sort of  deposit since the pools creator cannot fully unbond funds until the pool is being  destroyed. 

  * `index` - A disambiguation index for creating the account. Likely only useful when creating multiple pools in the same extrinsic. 

  * `root` - The account to set as [`PoolRoles::root`].

  * `nominator` - The account to set as the [`PoolRoles::nominator`].

  * `bouncer` - The account to set as the [`PoolRoles::bouncer`].

   #### Note 

   In addition to `amount`, the caller will transfer the existential deposit; so the caller  needs at have at least `amount + existential_deposit` transferable. 
 
### createWithPoolId(amount: `Compact<u128>`, root: `MultiAddress`, nominator: `MultiAddress`, bouncer: `MultiAddress`, pool_id: `u32`)
- **interface**: `api.tx.nominationPools.createWithPoolId`
- **summary**:    Create a new delegation pool with a previously used pool id 

   #### Arguments 

   same as `create` with the inclusion of 

  * `pool_id` - `A valid PoolId.
 
### join(amount: `Compact<u128>`, pool_id: `u32`)
- **interface**: `api.tx.nominationPools.join`
- **summary**:    Stake funds with a pool. The amount to bond is transferred from the member to the  pools account and immediately increases the pools bond. 

   #### Note 

   * An account can only be a member of a single pool. 

  * An account cannot join the same pool multiple times.

  * This call will *not* dust the member account, so the member must have at least `existential deposit + amount` in their account. 

  * Only a pool with [`PoolState::Open`] can be joined
 
### migrateDelegation(member_account: `MultiAddress`)
- **interface**: `api.tx.nominationPools.migrateDelegation`
- **summary**:    Migrates delegated funds from the pool account to the `member_account`. 

   Fails unless [`crate::pallet::Config::StakeAdapter`] is of strategy type:  [`adapter::StakeStrategyType::Delegate`]. 

   This is a permission-less call and refunds any fee if claim is successful. 

   If the pool has migrated to delegation based staking, the staked tokens of pool members  can be moved and held in their own account. See [`adapter::DelegateStake`] 
 
### migratePoolToDelegateStake(pool_id: `u32`)
- **interface**: `api.tx.nominationPools.migratePoolToDelegateStake`
- **summary**:    Migrate pool from [`adapter::StakeStrategyType::Transfer`] to  [`adapter::StakeStrategyType::Delegate`]. 

   Fails unless [`crate::pallet::Config::StakeAdapter`] is of strategy type:  [`adapter::StakeStrategyType::Delegate`]. 

   This call can be dispatched permissionlessly, and refunds any fee if successful. 

   If the pool has already migrated to delegation based staking, this call will fail. 
 
### nominate(pool_id: `u32`, validators: `Vec<AccountId32>`)
- **interface**: `api.tx.nominationPools.nominate`
- **summary**:    Nominate on behalf of the pool. 

   The dispatch origin of this call must be signed by the pool nominator or the pool  root role. 

   This directly forward the call to the staking pallet, on behalf of the pool bonded  account. 

   #### Note 

   In addition to a `root` or `nominator` role of `origin`, pool's depositor needs to have  at least `depositor_min_bond` in the pool to start nominating. 
 
### poolWithdrawUnbonded(pool_id: `u32`, num_slashing_spans: `u32`)
- **interface**: `api.tx.nominationPools.poolWithdrawUnbonded`
- **summary**:    Call `withdraw_unbonded` for the pools account. This call can be made by any account. 

   This is useful if there are too many unlocking chunks to call `unbond`, and some  can be cleared by withdrawing. In the case there are too many unlocking chunks, the user  would probably see an error like `NoMoreChunks` emitted from the staking system when  they attempt to unbond. 
 
### setClaimPermission(permission: `PalletNominationPoolsClaimPermission`)
- **interface**: `api.tx.nominationPools.setClaimPermission`
- **summary**:    Allows a pool member to set a claim permission to allow or disallow permissionless  bonding and withdrawing. 

   #### Arguments 

   * `origin` - Member of a pool. 

  * `permission` - The permission to be applied.
 
### setCommission(pool_id: `u32`, new_commission: `Option<(Perbill,AccountId32)>`)
- **interface**: `api.tx.nominationPools.setCommission`
- **summary**:    Set the commission of a pool.  Both a commission percentage and a commission payee must be provided in the `current`  tuple. Where a `current` of `None` is provided, any current commission will be removed. 

   - If a `None` is supplied to `new_commission`, existing commission will be removed. 
 
### setCommissionChangeRate(pool_id: `u32`, change_rate: `PalletNominationPoolsCommissionChangeRate`)
- **interface**: `api.tx.nominationPools.setCommissionChangeRate`
- **summary**:    Set the commission change rate for a pool. 

   Initial change rate is not bounded, whereas subsequent updates can only be more  restrictive than the current. 
 
### setCommissionClaimPermission(pool_id: `u32`, permission: `Option<PalletNominationPoolsCommissionClaimPermission>`)
- **interface**: `api.tx.nominationPools.setCommissionClaimPermission`
- **summary**:    Set or remove a pool's commission claim permission. 

   Determines who can claim the pool's pending commission. Only the `Root` role of the pool  is able to configure commission claim permissions. 
 
### setCommissionMax(pool_id: `u32`, max_commission: `Perbill`)
- **interface**: `api.tx.nominationPools.setCommissionMax`
- **summary**:    Set the maximum commission of a pool. 

   - Initial max can be set to any `Perbill`, and only smaller values thereafter. 

  - Current commission will be lowered in the event it is higher than a new max commission. 
 
### setConfigs(min_join_bond: `PalletNominationPoolsConfigOpU128`, min_create_bond: `PalletNominationPoolsConfigOpU128`, max_pools: `PalletNominationPoolsConfigOpU32`, max_members: `PalletNominationPoolsConfigOpU32`, max_members_per_pool: `PalletNominationPoolsConfigOpU32`, global_max_commission: `PalletNominationPoolsConfigOpPerbill`)
- **interface**: `api.tx.nominationPools.setConfigs`
- **summary**:    Update configurations for the nomination pools. The origin for this call must be  [`Config::AdminOrigin`]. 

   #### Arguments 

   * `min_join_bond` - Set [`MinJoinBond`]. 

  * `min_create_bond` - Set [`MinCreateBond`].

  * `max_pools` - Set [`MaxPools`].

  * `max_members` - Set [`MaxPoolMembers`].

  * `max_members_per_pool` - Set [`MaxPoolMembersPerPool`].

  * `global_max_commission` - Set [`GlobalMaxCommission`].
 
### setMetadata(pool_id: `u32`, metadata: `Bytes`)
- **interface**: `api.tx.nominationPools.setMetadata`
- **summary**:    Set a new metadata for the pool. 

   The dispatch origin of this call must be signed by the bouncer, or the root role of the  pool. 
 
### setState(pool_id: `u32`, state: `PalletNominationPoolsPoolState`)
- **interface**: `api.tx.nominationPools.setState`
- **summary**:    Set a new state for the pool. 

   If a pool is already in the `Destroying` state, then under no condition can its state  change again. 

   The dispatch origin of this call must be either: 

   1. signed by the bouncer, or the root role of the pool,  2. if the pool conditions to be open are NOT met (as described by `ok_to_be_open`), and  then the state of the pool can be permissionlessly changed to `Destroying`. 
 
### unbond(member_account: `MultiAddress`, unbonding_points: `Compact<u128>`)
- **interface**: `api.tx.nominationPools.unbond`
- **summary**:    Unbond up to `unbonding_points` of the `member_account`'s funds from the pool. It  implicitly collects the rewards one last time, since not doing so would mean some  rewards would be forfeited. 

   Under certain conditions, this call can be dispatched permissionlessly (i.e. by any  account). 

   #### Conditions for a permissionless dispatch. 

   * The pool is blocked and the caller is either the root or bouncer. This is refereed to  as a kick. 

  * The pool is destroying and the member is not the depositor.

  * The pool is destroying, the member is the depositor and no other members are in the pool. 

   #### Conditions for permissioned dispatch (i.e. the caller is also the  `member_account`): 

   * The caller is not the depositor. 

  * The caller is the depositor, the pool is destroying and no other members are in the pool. 

   #### Note 

   If there are too many unlocking chunks to unbond with the pool account,  [`Call::pool_withdraw_unbonded`] can be called to try and minimize unlocking chunks.  The [`StakingInterface::unbond`] will implicitly call [`Call::pool_withdraw_unbonded`]  to try to free chunks if necessary (ie. if unbound was called and no unlocking chunks  are available). However, it may not be possible to release the current unlocking chunks,  in which case, the result of this call will likely be the `NoMoreChunks` error from the  staking system. 
 
### updateRoles(pool_id: `u32`, new_root: `PalletNominationPoolsConfigOpAccountId32`, new_nominator: `PalletNominationPoolsConfigOpAccountId32`, new_bouncer: `PalletNominationPoolsConfigOpAccountId32`)
- **interface**: `api.tx.nominationPools.updateRoles`
- **summary**:    Update the roles of the pool. 

   The root is the only entity that can change any of the roles, including itself,  excluding the depositor, who can never change. 

   It emits an event, notifying UIs of the role change. This event is quite relevant to  most pool members and they should be informed of changes to pool roles. 
 
### withdrawUnbonded(member_account: `MultiAddress`, num_slashing_spans: `u32`)
- **interface**: `api.tx.nominationPools.withdrawUnbonded`
- **summary**:    Withdraw unbonded funds from `member_account`. If no bonded funds can be unbonded, an  error is returned. 

   Under certain conditions, this call can be dispatched permissionlessly (i.e. by any  account). 

   #### Conditions for a permissionless dispatch 

   * The pool is in destroy mode and the target is not the depositor. 

  * The target is the depositor and they are the only member in the sub pools.

  * The pool is blocked and the caller is either the root or bouncer.

   #### Conditions for permissioned dispatch 

   * The caller is the target and they are not the depositor. 

   #### Note 

   - If the target is the depositor, the pool will be destroyed. 

  - If the pool has any pending slash, we also try to slash the member before letting them withdraw. This calculation adds some weight overhead and is only defensive. In reality,  pool slashes must have been already applied via permissionless [`Call::apply_slash`]. 

___


## onDemand
 
### placeOrderAllowDeath(max_amount: `u128`, para_id: `u32`)
- **interface**: `api.tx.onDemand.placeOrderAllowDeath`
- **summary**:    Create a single on demand core order.  Will use the spot price for the current block and will reap the account if needed. 

   Parameters: 

  - `origin`: The sender of the call, funds will be withdrawn from this account.

  - `max_amount`: The maximum balance to withdraw from the origin to place an order.

  - `para_id`: A `ParaId` the origin wants to provide blockspace for.

   Errors: 

  - `InsufficientBalance`: from the Currency implementation

  - `QueueFull`

  - `SpotPriceHigherThanMaxAmount`

   Events: 

  - `OnDemandOrderPlaced`
 
### placeOrderKeepAlive(max_amount: `u128`, para_id: `u32`)
- **interface**: `api.tx.onDemand.placeOrderKeepAlive`
- **summary**:    Same as the [`place_order_allow_death`](Self::place_order_allow_death) call , but with a  check that placing the order will not reap the account. 

   Parameters: 

  - `origin`: The sender of the call, funds will be withdrawn from this account.

  - `max_amount`: The maximum balance to withdraw from the origin to place an order.

  - `para_id`: A `ParaId` the origin wants to provide blockspace for.

   Errors: 

  - `InsufficientBalance`: from the Currency implementation

  - `QueueFull`

  - `SpotPriceHigherThanMaxAmount`

   Events: 

  - `OnDemandOrderPlaced`

___


## paraInclusion

___


## paraInherent
 
### enter(data: `PolkadotPrimitivesV7InherentData`)
- **interface**: `api.tx.paraInherent.enter`
- **summary**:    Enter the paras inherent. This will process bitfields and backed candidates. 

___


## parameters
 
### setParameter(key_value: `PolkadotRuntimeRuntimeParameters`)
- **interface**: `api.tx.parameters.setParameter`
- **summary**:    Set the value of a parameter. 

   The dispatch origin of this call must be `AdminOrigin` for the given `key`. Values be  deleted by setting them to `None`. 

___


## paras
 
### addTrustedValidationCode(validation_code: `Bytes`)
- **interface**: `api.tx.paras.addTrustedValidationCode`
- **summary**:    Adds the validation code to the storage. 

   The code will not be added if it is already present. Additionally, if PVF pre-checking  is running for that code, it will be instantly accepted. 

   Otherwise, the code will be added into the storage. Note that the code will be added  into storage with reference count 0. This is to account the fact that there are no users  for this code yet. The caller will have to make sure that this code eventually gets  used by some parachain or removed from the storage to avoid storage leaks. For the  latter prefer to use the `poke_unused_validation_code` dispatchable to raw storage  manipulation. 

   This function is mainly meant to be used for upgrading parachains that do not follow  the go-ahead signal while the PVF pre-checking feature is enabled. 
 
### forceNoteNewHead(para: `u32`, new_head: `Bytes`)
- **interface**: `api.tx.paras.forceNoteNewHead`
- **summary**:    Note a new block head for para within the context of the current block. 
 
### forceQueueAction(para: `u32`)
- **interface**: `api.tx.paras.forceQueueAction`
- **summary**:    Put a parachain directly into the next session's action queue.  We can't queue it any sooner than this without going into the  initializer... 
 
### forceScheduleCodeUpgrade(para: `u32`, new_code: `Bytes`, relay_parent_number: `u32`)
- **interface**: `api.tx.paras.forceScheduleCodeUpgrade`
- **summary**:    Schedule an upgrade as if it was scheduled in the given relay parent block. 
 
### forceSetCurrentCode(para: `u32`, new_code: `Bytes`)
- **interface**: `api.tx.paras.forceSetCurrentCode`
- **summary**:    Set the storage for the parachain validation code immediately. 
 
### forceSetCurrentHead(para: `u32`, new_head: `Bytes`)
- **interface**: `api.tx.paras.forceSetCurrentHead`
- **summary**:    Set the storage for the current parachain head data immediately. 
 
### forceSetMostRecentContext(para: `u32`, context: `u32`)
- **interface**: `api.tx.paras.forceSetMostRecentContext`
- **summary**:    Set the storage for the current parachain head data immediately. 
 
### includePvfCheckStatement(stmt: `PolkadotPrimitivesV7PvfCheckStatement`, signature: `PolkadotPrimitivesV7ValidatorAppSignature`)
- **interface**: `api.tx.paras.includePvfCheckStatement`
- **summary**:    Includes a statement for a PVF pre-checking vote. Potentially, finalizes the vote and  enacts the results if that was the last vote before achieving the supermajority. 
 
### pokeUnusedValidationCode(validation_code_hash: `H256`)
- **interface**: `api.tx.paras.pokeUnusedValidationCode`
- **summary**:    Remove the validation code from the storage iff the reference count is 0. 

   This is better than removing the storage directly, because it will not remove the code  that was suddenly got used by some parachain while this dispatchable was pending  dispatching. 

___


## parasDisputes
 
### forceUnfreeze()
- **interface**: `api.tx.parasDisputes.forceUnfreeze`

___


## parasShared

___


## parasSlashing
 
### reportDisputeLostUnsigned(dispute_proof: `PolkadotPrimitivesV7SlashingDisputeProof`, key_owner_proof: `SpSessionMembershipProof`)
- **interface**: `api.tx.parasSlashing.reportDisputeLostUnsigned`

___


## preimage
 
### ensureUpdated(hashes: `Vec<H256>`)
- **interface**: `api.tx.preimage.ensureUpdated`
- **summary**:    Ensure that the a bulk of pre-images is upgraded. 

   The caller pays no fee if at least 90% of pre-images were successfully updated. 
 
### notePreimage(bytes: `Bytes`)
- **interface**: `api.tx.preimage.notePreimage`
- **summary**:    Register a preimage on-chain. 

   If the preimage was previously requested, no fees or deposits are taken for providing  the preimage. Otherwise, a deposit is taken proportional to the size of the preimage. 
 
### requestPreimage(hash: `H256`)
- **interface**: `api.tx.preimage.requestPreimage`
- **summary**:    Request a preimage be uploaded to the chain without paying any fees or deposits. 

   If the preimage requests has already been provided on-chain, we unreserve any deposit  a user may have paid, and take the control of the preimage out of their hands. 
 
### unnotePreimage(hash: `H256`)
- **interface**: `api.tx.preimage.unnotePreimage`
- **summary**:    Clear an unrequested preimage from the runtime storage. 

   If `len` is provided, then it will be a much cheaper operation. 

   - `hash`: The hash of the preimage to be removed from the store. 

  - `len`: The length of the preimage of `hash`.
 
### unrequestPreimage(hash: `H256`)
- **interface**: `api.tx.preimage.unrequestPreimage`
- **summary**:    Clear a previously made request for a preimage. 

   NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`. 

___


## proxy
 
### addProxy(delegate: `MultiAddress`, proxy_type: `PolkadotRuntimeProxyType`, delay: `u32`)
- **interface**: `api.tx.proxy.addProxy`
- **summary**:    Register a proxy account for the sender that is able to make calls on its behalf. 

   The dispatch origin for this call must be _Signed_. 

   Parameters: 

  - `proxy`: The account that the `caller` would like to make a proxy.

  - `proxy_type`: The permissions allowed for this proxy account.

  - `delay`: The announcement period required of the initial proxy. Will generally be zero. 
 
### announce(real: `MultiAddress`, call_hash: `H256`)
- **interface**: `api.tx.proxy.announce`
- **summary**:    Publish the hash of a proxy-call that will be made in the future. 

   This must be called some number of blocks before the corresponding `proxy` is attempted  if the delay associated with the proxy relationship is greater than zero. 

   No more than `MaxPending` announcements may be made at any one time. 

   This will take a deposit of `AnnouncementDepositFactor` as well as  `AnnouncementDepositBase` if there are no other pending announcements. 

   The dispatch origin for this call must be _Signed_ and a proxy of `real`. 

   Parameters: 

  - `real`: The account that the proxy will make a call on behalf of.

  - `call_hash`: The hash of the call to be made by the `real` account.
 
### createPure(proxy_type: `PolkadotRuntimeProxyType`, delay: `u32`, index: `u16`)
- **interface**: `api.tx.proxy.createPure`
- **summary**:    Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and  initialize it with a proxy of `proxy_type` for `origin` sender. 

   Requires a `Signed` origin. 

   - `proxy_type`: The type of the proxy that the sender will be registered as over the  new account. This will almost always be the most permissive `ProxyType` possible to  allow for maximum flexibility. 

  - `index`: A disambiguation index, in case this is called multiple times in the same transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just  want to use `0`. 

  - `delay`: The announcement period required of the initial proxy. Will generally be zero. 

   Fails with `Duplicate` if this has already been called in this transaction, from the  same sender, with the same parameters. 

   Fails if there are insufficient funds to pay for deposit. 
 
### killPure(spawner: `MultiAddress`, proxy_type: `PolkadotRuntimeProxyType`, index: `u16`, height: `Compact<u32>`, ext_index: `Compact<u32>`)
- **interface**: `api.tx.proxy.killPure`
- **summary**:    Removes a previously spawned pure proxy. 

   WARNING: **All access to this account will be lost.** Any funds held in it will be  inaccessible. 

   Requires a `Signed` origin, and the sender account must have been created by a call to  `pure` with corresponding parameters. 

   - `spawner`: The account that originally called `pure` to create this account. 

  - `index`: The disambiguation index originally passed to `pure`. Probably `0`.

  - `proxy_type`: The proxy type originally passed to `pure`.

  - `height`: The height of the chain when the call to `pure` was processed.

  - `ext_index`: The extrinsic index in which the call to `pure` was processed.

   Fails with `NoPermission` in case the caller is not a previously created pure  account whose `pure` call has corresponding parameters. 
 
### proxy(real: `MultiAddress`, force_proxy_type: `Option<PolkadotRuntimeProxyType>`, call: `Call`)
- **interface**: `api.tx.proxy.proxy`
- **summary**:    Dispatch the given `call` from an account that the sender is authorised for through  `add_proxy`. 

   The dispatch origin for this call must be _Signed_. 

   Parameters: 

  - `real`: The account that the proxy will make a call on behalf of.

  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.

  - `call`: The call to be made by the `real` account.
 
### proxyAnnounced(delegate: `MultiAddress`, real: `MultiAddress`, force_proxy_type: `Option<PolkadotRuntimeProxyType>`, call: `Call`)
- **interface**: `api.tx.proxy.proxyAnnounced`
- **summary**:    Dispatch the given `call` from an account that the sender is authorized for through  `add_proxy`. 

   Removes any corresponding announcement(s). 

   The dispatch origin for this call must be _Signed_. 

   Parameters: 

  - `real`: The account that the proxy will make a call on behalf of.

  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.

  - `call`: The call to be made by the `real` account.
 
### rejectAnnouncement(delegate: `MultiAddress`, call_hash: `H256`)
- **interface**: `api.tx.proxy.rejectAnnouncement`
- **summary**:    Remove the given announcement of a delegate. 

   May be called by a target (proxied) account to remove a call that one of their delegates  (`delegate`) has announced they want to execute. The deposit is returned. 

   The dispatch origin for this call must be _Signed_. 

   Parameters: 

  - `delegate`: The account that previously announced the call.

  - `call_hash`: The hash of the call to be made.
 
### removeAnnouncement(real: `MultiAddress`, call_hash: `H256`)
- **interface**: `api.tx.proxy.removeAnnouncement`
- **summary**:    Remove a given announcement. 

   May be called by a proxy account to remove a call they previously announced and return  the deposit. 

   The dispatch origin for this call must be _Signed_. 

   Parameters: 

  - `real`: The account that the proxy will make a call on behalf of.

  - `call_hash`: The hash of the call to be made by the `real` account.
 
### removeProxies()
- **interface**: `api.tx.proxy.removeProxies`
- **summary**:    Unregister all proxy accounts for the sender. 

   The dispatch origin for this call must be _Signed_. 

   WARNING: This may be called on accounts created by `pure`, however if done, then  the unreserved fees will be inaccessible. **All access to this account will be lost.** 
 
### removeProxy(delegate: `MultiAddress`, proxy_type: `PolkadotRuntimeProxyType`, delay: `u32`)
- **interface**: `api.tx.proxy.removeProxy`
- **summary**:    Unregister a proxy account for the sender. 

   The dispatch origin for this call must be _Signed_. 

   Parameters: 

  - `proxy`: The account that the `caller` would like to remove as a proxy.

  - `proxy_type`: The permissions currently enabled for the removed proxy account.

___


## referenda
 
### cancel(index: `u32`)
- **interface**: `api.tx.referenda.cancel`
- **summary**:    Cancel an ongoing referendum. 

   - `origin`: must be the `CancelOrigin`. 

  - `index`: The index of the referendum to be cancelled.

   Emits `Cancelled`. 
 
### kill(index: `u32`)
- **interface**: `api.tx.referenda.kill`
- **summary**:    Cancel an ongoing referendum and slash the deposits. 

   - `origin`: must be the `KillOrigin`. 

  - `index`: The index of the referendum to be cancelled.

   Emits `Killed` and `DepositSlashed`. 
 
### nudgeReferendum(index: `u32`)
- **interface**: `api.tx.referenda.nudgeReferendum`
- **summary**:    Advance a referendum onto its next logical state. Only used internally. 

   - `origin`: must be `Root`. 

  - `index`: the referendum to be advanced.
 
### oneFewerDeciding(track: `u16`)
- **interface**: `api.tx.referenda.oneFewerDeciding`
- **summary**:    Advance a track onto its next logical state. Only used internally. 

   - `origin`: must be `Root`. 

  - `track`: the track to be advanced.

   Action item for when there is now one fewer referendum in the deciding phase and the  `DecidingCount` is not yet updated. This means that we should either: 

  - begin deciding another referendum (and leave `DecidingCount` alone); or

  - decrement `DecidingCount`.
 
### placeDecisionDeposit(index: `u32`)
- **interface**: `api.tx.referenda.placeDecisionDeposit`
- **summary**:    Post the Decision Deposit for a referendum. 

   - `origin`: must be `Signed` and the account must have funds available for the  referendum's track's Decision Deposit. 

  - `index`: The index of the submitted referendum whose Decision Deposit is yet to be posted. 

   Emits `DecisionDepositPlaced`. 
 
### refundDecisionDeposit(index: `u32`)
- **interface**: `api.tx.referenda.refundDecisionDeposit`
- **summary**:    Refund the Decision Deposit for a closed referendum back to the depositor. 

   - `origin`: must be `Signed` or `Root`. 

  - `index`: The index of a closed referendum whose Decision Deposit has not yet been refunded. 

   Emits `DecisionDepositRefunded`. 
 
### refundSubmissionDeposit(index: `u32`)
- **interface**: `api.tx.referenda.refundSubmissionDeposit`
- **summary**:    Refund the Submission Deposit for a closed referendum back to the depositor. 

   - `origin`: must be `Signed` or `Root`. 

  - `index`: The index of a closed referendum whose Submission Deposit has not yet been refunded. 

   Emits `SubmissionDepositRefunded`. 
 
### setMetadata(index: `u32`, maybe_hash: `Option<H256>`)
- **interface**: `api.tx.referenda.setMetadata`
- **summary**:    Set or clear metadata of a referendum. 

   Parameters: 

  - `origin`: Must be `Signed` by a creator of a referendum or by anyone to clear a metadata of a finished referendum. 

  - `index`:  The index of a referendum to set or clear metadata for.

  - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
 
### submit(proposal_origin: `PolkadotRuntimeOriginCaller`, proposal: `FrameSupportPreimagesBounded`, enactment_moment: `FrameSupportScheduleDispatchTime`)
- **interface**: `api.tx.referenda.submit`
- **summary**:    Propose a referendum on a privileged action. 

   - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds  available. 

  - `proposal_origin`: The origin from which the proposal should be executed.

  - `proposal`: The proposal.

  - `enactment_moment`: The moment that the proposal should be enacted.

   Emits `Submitted`. 

___


## registrar
 
### addLock(para: `u32`)
- **interface**: `api.tx.registrar.addLock`
- **summary**:    Add a manager lock from a para. This will prevent the manager of a  para to deregister or swap a para. 

   Can be called by Root, the parachain, or the parachain manager if the parachain is  unlocked. 
 
### deregister(id: `u32`)
- **interface**: `api.tx.registrar.deregister`
- **summary**:    Deregister a Para Id, freeing all data and returning any deposit. 

   The caller must be Root, the `para` owner, or the `para` itself. The para must be an  on-demand parachain. 
 
### forceRegister(who: `AccountId32`, deposit: `u128`, id: `u32`, genesis_head: `Bytes`, validation_code: `Bytes`)
- **interface**: `api.tx.registrar.forceRegister`
- **summary**:    Force the registration of a Para Id on the relay chain. 

   This function must be called by a Root origin. 

   The deposit taken can be specified for this registration. Any `ParaId`  can be registered, including sub-1000 IDs which are System Parachains. 
 
### register(id: `u32`, genesis_head: `Bytes`, validation_code: `Bytes`)
- **interface**: `api.tx.registrar.register`
- **summary**:    Register head data and validation code for a reserved Para Id. 

   #### Arguments 

  - `origin`: Must be called by a `Signed` origin.

  - `id`: The para ID. Must be owned/managed by the `origin` signing account.

  - `genesis_head`: The genesis head data of the parachain/thread.

  - `validation_code`: The initial validation code of the parachain/thread.

   #### Deposits/Fees  The account with the originating signature must reserve a deposit. 

   The deposit is required to cover the costs associated with storing the genesis head  data and the validation code.  This accounts for the potential to store validation code of a size up to the  `max_code_size`, as defined in the configuration pallet 

   Anything already reserved previously for this para ID is accounted for. 

   #### Events  The `Registered` event is emitted in case of success. 
 
### removeLock(para: `u32`)
- **interface**: `api.tx.registrar.removeLock`
- **summary**:    Remove a manager lock from a para. This will allow the manager of a  previously locked para to deregister or swap a para without using governance. 

   Can only be called by the Root origin or the parachain. 
 
### reserve()
- **interface**: `api.tx.registrar.reserve`
- **summary**:    Reserve a Para Id on the relay chain. 

   This function will reserve a new Para Id to be owned/managed by the origin account.  The origin account is able to register head data and validation code using `register` to  create an on-demand parachain. Using the Slots pallet, an on-demand parachain can then  be upgraded to a lease holding parachain. 

   #### Arguments 

  - `origin`: Must be called by a `Signed` origin. Becomes the manager/owner of the new para ID. 

   #### Deposits/Fees  The origin must reserve a deposit of `ParaDeposit` for the registration. 

   #### Events  The `Reserved` event is emitted in case of success, which provides the ID reserved for  use. 
 
### scheduleCodeUpgrade(para: `u32`, new_code: `Bytes`)
- **interface**: `api.tx.registrar.scheduleCodeUpgrade`
- **summary**:    Schedule a parachain upgrade. 

   This will kick off a check of `new_code` by all validators. After the majority of the  validators have reported on the validity of the code, the code will either be enacted  or the upgrade will be rejected. If the code will be enacted, the current code of the  parachain will be overwritten directly. This means that any PoV will be checked by this  new code. The parachain itself will not be informed explicitly that the validation code  has changed. 

   Can be called by Root, the parachain, or the parachain manager if the parachain is  unlocked. 
 
### setCurrentHead(para: `u32`, new_head: `Bytes`)
- **interface**: `api.tx.registrar.setCurrentHead`
- **summary**:    Set the parachain's current head. 

   Can be called by Root, the parachain, or the parachain manager if the parachain is  unlocked. 
 
### swap(id: `u32`, other: `u32`)
- **interface**: `api.tx.registrar.swap`
- **summary**:    Swap a lease holding parachain with another parachain, either on-demand or lease  holding. 

   The origin must be Root, the `para` owner, or the `para` itself. 

   The swap will happen only if there is already an opposite swap pending. If there is not,  the swap will be stored in the pending swaps map, ready for a later confirmatory swap. 

   The `ParaId`s remain mapped to the same head data and code so external code can rely on  `ParaId` to be a long-term identifier of a notional "parachain". However, their  scheduling info (i.e. whether they're an on-demand parachain or lease holding  parachain), auction information and the auction deposit are switched. 

___


## scheduler
 
### cancel(when: `u32`, index: `u32`)
- **interface**: `api.tx.scheduler.cancel`
- **summary**:    Cancel an anonymously scheduled task. 
 
### cancelNamed(id: `[u8;32]`)
- **interface**: `api.tx.scheduler.cancelNamed`
- **summary**:    Cancel a named scheduled task. 
 
### cancelRetry(task: `(u32,u32)`)
- **interface**: `api.tx.scheduler.cancelRetry`
- **summary**:    Removes the retry configuration of a task. 
 
### cancelRetryNamed(id: `[u8;32]`)
- **interface**: `api.tx.scheduler.cancelRetryNamed`
- **summary**:    Cancel the retry configuration of a named task. 
 
### schedule(when: `u32`, maybe_periodic: `Option<(u32,u32)>`, priority: `u8`, call: `Call`)
- **interface**: `api.tx.scheduler.schedule`
- **summary**:    Anonymously schedule a task. 
 
### scheduleAfter(after: `u32`, maybe_periodic: `Option<(u32,u32)>`, priority: `u8`, call: `Call`)
- **interface**: `api.tx.scheduler.scheduleAfter`
- **summary**:    Anonymously schedule a task after a delay. 
 
### scheduleNamed(id: `[u8;32]`, when: `u32`, maybe_periodic: `Option<(u32,u32)>`, priority: `u8`, call: `Call`)
- **interface**: `api.tx.scheduler.scheduleNamed`
- **summary**:    Schedule a named task. 
 
### scheduleNamedAfter(id: `[u8;32]`, after: `u32`, maybe_periodic: `Option<(u32,u32)>`, priority: `u8`, call: `Call`)
- **interface**: `api.tx.scheduler.scheduleNamedAfter`
- **summary**:    Schedule a named task after a delay. 
 
### setRetry(task: `(u32,u32)`, retries: `u8`, period: `u32`)
- **interface**: `api.tx.scheduler.setRetry`
- **summary**:    Set a retry configuration for a task so that, in case its scheduled run fails, it will  be retried after `period` blocks, for a total amount of `retries` retries or until it  succeeds. 

   Tasks which need to be scheduled for a retry are still subject to weight metering and  agenda space, same as a regular task. If a periodic task fails, it will be scheduled  normally while the task is retrying. 

   Tasks scheduled as a result of a retry for a periodic task are unnamed, non-periodic  clones of the original task. Their retry configuration will be derived from the  original task's configuration, but will have a lower value for `remaining` than the  original `total_retries`. 
 
### setRetryNamed(id: `[u8;32]`, retries: `u8`, period: `u32`)
- **interface**: `api.tx.scheduler.setRetryNamed`
- **summary**:    Set a retry configuration for a named task so that, in case its scheduled run fails, it  will be retried after `period` blocks, for a total amount of `retries` retries or until  it succeeds. 

   Tasks which need to be scheduled for a retry are still subject to weight metering and  agenda space, same as a regular task. If a periodic task fails, it will be scheduled  normally while the task is retrying. 

   Tasks scheduled as a result of a retry for a periodic task are unnamed, non-periodic  clones of the original task. Their retry configuration will be derived from the  original task's configuration, but will have a lower value for `remaining` than the  original `total_retries`. 

___


## session
 
### purgeKeys()
- **interface**: `api.tx.session.purgeKeys`
- **summary**:    Removes any session key(s) of the function caller. 

   This doesn't take effect until the next session. 

   The dispatch origin of this function must be Signed and the account must be either be  convertible to a validator ID using the chain's typical addressing system (this usually  means being a controller account) or directly convertible into a validator ID (which  usually means being a stash account). 

   #### Complexity 

  - `O(1)` in number of key types. Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed. 
 
### setKeys(keys: `PolkadotRuntimeSessionKeys`, proof: `Bytes`)
- **interface**: `api.tx.session.setKeys`
- **summary**:    Sets the session key(s) of the function caller to `keys`.  Allows an account to set its session key prior to becoming a validator.  This doesn't take effect until the next session. 

   The dispatch origin of this function must be signed. 

   #### Complexity 

  - `O(1)`. Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed. 

___


## slots
 
### clearAllLeases(para: `u32`)
- **interface**: `api.tx.slots.clearAllLeases`
- **summary**:    Clear all leases for a Para Id, refunding any deposits back to the original owners. 

   The dispatch origin for this call must match `T::ForceOrigin`. 
 
### forceLease(para: `u32`, leaser: `AccountId32`, amount: `u128`, period_begin: `u32`, period_count: `u32`)
- **interface**: `api.tx.slots.forceLease`
- **summary**:    Just a connect into the `lease_out` call, in case Root wants to force some lease to  happen independently of any other on-chain mechanism to use it. 

   The dispatch origin for this call must match `T::ForceOrigin`. 
 
### triggerOnboard(para: `u32`)
- **interface**: `api.tx.slots.triggerOnboard`
- **summary**:    Try to onboard a parachain that has a lease for the current lease period. 

   This function can be useful if there was some state issue with a para that should  have onboarded, but was unable to. As long as they have a lease period, we can  let them onboard from here. 

   Origin must be signed, but can be called by anyone. 

___


## staking
 
### bond(value: `Compact<u128>`, payee: `PalletStakingRewardDestination`)
- **interface**: `api.tx.staking.bond`
- **summary**:    Take the origin account as a stash and lock up `value` of its balance. `controller` will  be the account that controls it. 

   `value` must be more than the `minimum_balance` specified by `T::Currency`. 

   The dispatch origin for this call must be _Signed_ by the stash account. 

   Emits `Bonded`.  #### Complexity 

  - Independent of the arguments. Moderate complexity.

  - O(1).

  - Three extra DB entries.

   NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned  unless the `origin` falls below _existential deposit_ (or equal to 0) and gets removed  as dust. 
 
### bondExtra(max_additional: `Compact<u128>`)
- **interface**: `api.tx.staking.bondExtra`
- **summary**:    Add some extra amount that have appeared in the stash `free_balance` into the balance up  for staking. 

   The dispatch origin for this call must be _Signed_ by the stash, not the controller. 

   Use this if there are additional funds in your stash account that you wish to bond.  Unlike [`bond`](Self::bond) or [`unbond`](Self::unbond) this function does not impose  any limitation on the amount that can be added. 

   Emits `Bonded`. 

   #### Complexity 

  - Independent of the arguments. Insignificant complexity.

  - O(1).
 
### cancelDeferredSlash(era: `u32`, slash_indices: `Vec<u32>`)
- **interface**: `api.tx.staking.cancelDeferredSlash`
- **summary**:    Cancel enactment of a deferred slash. 

   Can be called by the `T::AdminOrigin`. 

   Parameters: era and indices of the slashes for that era to kill. 
 
### chill()
- **interface**: `api.tx.staking.chill`
- **summary**:    Declare no desire to either validate or nominate. 

   Effects will be felt at the beginning of the next era. 

   The dispatch origin for this call must be _Signed_ by the controller, not the stash. 

   #### Complexity 

  - Independent of the arguments. Insignificant complexity.

  - Contains one read.

  - Writes are limited to the `origin` account key.
 
### chillOther(stash: `AccountId32`)
- **interface**: `api.tx.staking.chillOther`
- **summary**:    Declare a `controller` to stop participating as either a validator or nominator. 

   Effects will be felt at the beginning of the next era. 

   The dispatch origin for this call must be _Signed_, but can be called by anyone. 

   If the caller is the same as the controller being targeted, then no further checks are  enforced, and this function behaves just like `chill`. 

   If the caller is different than the controller being targeted, the following conditions  must be met: 

   * `controller` must belong to a nominator who has become non-decodable, 

   Or: 

   * A `ChillThreshold` must be set and checked which defines how close to the max  nominators or validators we must reach before users can start chilling one-another. 

  * A `MaxNominatorCount` and `MaxValidatorCount` must be set which is used to determine how close we are to the threshold. 

  * A `MinNominatorBond` and `MinValidatorBond` must be set and checked, which determines if this is a person that should be chilled because they have not met the threshold  bond required. 

   This can be helpful if bond requirements are updated, and we need to remove old users  who do not satisfy these requirements. 
 
### deprecateControllerBatch(controllers: `Vec<AccountId32>`)
- **interface**: `api.tx.staking.deprecateControllerBatch`
- **summary**:    Updates a batch of controller accounts to their corresponding stash account if they are  not the same. Ignores any controller accounts that do not exist, and does not operate if  the stash and controller are already the same. 

   Effects will be felt instantly (as soon as this function is completed successfully). 

   The dispatch origin must be `T::AdminOrigin`. 
 
### forceApplyMinCommission(validator_stash: `AccountId32`)
- **interface**: `api.tx.staking.forceApplyMinCommission`
- **summary**:    Force a validator to have at least the minimum commission. This will not affect a  validator who already has a commission greater than or equal to the minimum. Any account  can call this. 
 
### forceNewEra()
- **interface**: `api.tx.staking.forceNewEra`
- **summary**:    Force there to be a new era at the end of the next session. After this, it will be  reset to normal (non-forced) behaviour. 

   The dispatch origin must be Root. 

   #### Warning 

   The election process starts multiple blocks before the end of the era.  If this is called just before a new era is triggered, the election process may not  have enough blocks to get a result. 

   #### Complexity 

  - No arguments.

  - Weight: O(1)
 
### forceNewEraAlways()
- **interface**: `api.tx.staking.forceNewEraAlways`
- **summary**:    Force there to be a new era at the end of sessions indefinitely. 

   The dispatch origin must be Root. 

   #### Warning 

   The election process starts multiple blocks before the end of the era.  If this is called just before a new era is triggered, the election process may not  have enough blocks to get a result. 
 
### forceNoEras()
- **interface**: `api.tx.staking.forceNoEras`
- **summary**:    Force there to be no new eras indefinitely. 

   The dispatch origin must be Root. 

   #### Warning 

   The election process starts multiple blocks before the end of the era.  Thus the election process may be ongoing when this is called. In this case the  election will continue until the next era is triggered. 

   #### Complexity 

  - No arguments.

  - Weight: O(1)
 
### forceUnstake(stash: `AccountId32`, num_slashing_spans: `u32`)
- **interface**: `api.tx.staking.forceUnstake`
- **summary**:    Force a current staker to become completely unstaked, immediately. 

   The dispatch origin must be Root. 

   #### Parameters 

   - `num_slashing_spans`: Refer to comments on [`Call::withdraw_unbonded`] for more  details. 
 
### increaseValidatorCount(additional: `Compact<u32>`)
- **interface**: `api.tx.staking.increaseValidatorCount`
- **summary**:    Increments the ideal number of validators up to maximum of  `ElectionProviderBase::MaxWinners`. 

   The dispatch origin must be Root. 

   #### Complexity  Same as [`Self::set_validator_count`]. 
 
### kick(who: `Vec<MultiAddress>`)
- **interface**: `api.tx.staking.kick`
- **summary**:    Remove the given nominations from the calling validator. 

   Effects will be felt at the beginning of the next era. 

   The dispatch origin for this call must be _Signed_ by the controller, not the stash. 

   - `who`: A list of nominator stash accounts who are nominating this validator which  should no longer be nominating this validator. 

   Note: Making this call only makes sense if you first set the validator preferences to  block any further nominations. 
 
### nominate(targets: `Vec<MultiAddress>`)
- **interface**: `api.tx.staking.nominate`
- **summary**:    Declare the desire to nominate `targets` for the origin controller. 

   Effects will be felt at the beginning of the next era. 

   The dispatch origin for this call must be _Signed_ by the controller, not the stash. 

   #### Complexity 

  - The transaction's complexity is proportional to the size of `targets` (N) which is capped at CompactAssignments::LIMIT (T::MaxNominations). 

  - Both the reads and writes follow a similar pattern.
 
### payoutStakers(validator_stash: `AccountId32`, era: `u32`)
- **interface**: `api.tx.staking.payoutStakers`
- **summary**:    Pay out next page of the stakers behind a validator for the given era. 

   - `validator_stash` is the stash account of the validator. 

  - `era` may be any era between `[current_era - history_depth; current_era]`.

   The origin of this call must be _Signed_. Any account can call this function, even if  it is not one of the stakers. 

   The reward payout could be paged in case there are too many nominators backing the  `validator_stash`. This call will payout unpaid pages in an ascending order. To claim a  specific page, use `payout_stakers_by_page`.` 

   If all pages are claimed, it returns an error `InvalidPage`. 
 
### payoutStakersByPage(validator_stash: `AccountId32`, era: `u32`, page: `u32`)
- **interface**: `api.tx.staking.payoutStakersByPage`
- **summary**:    Pay out a page of the stakers behind a validator for the given era and page. 

   - `validator_stash` is the stash account of the validator. 

  - `era` may be any era between `[current_era - history_depth; current_era]`.

  - `page` is the page index of nominators to pay out with value between 0 and `num_nominators / T::MaxExposurePageSize`. 

   The origin of this call must be _Signed_. Any account can call this function, even if  it is not one of the stakers. 

   If a validator has more than [`Config::MaxExposurePageSize`] nominators backing  them, then the list of nominators is paged, with each page being capped at  [`Config::MaxExposurePageSize`.] If a validator has more than one page of nominators,  the call needs to be made for each page separately in order for all the nominators  backing a validator to receive the reward. The nominators are not sorted across pages  and so it should not be assumed the highest staker would be on the topmost page and vice  versa. If rewards are not claimed in [`Config::HistoryDepth`] eras, they are lost. 
 
### reapStash(stash: `AccountId32`, num_slashing_spans: `u32`)
- **interface**: `api.tx.staking.reapStash`
- **summary**:    Remove all data structures concerning a staker/stash once it is at a state where it can  be considered `dust` in the staking system. The requirements are: 

   1. the `total_balance` of the stash is below existential deposit.  2. or, the `ledger.total` of the stash is below existential deposit.  3. or, existential deposit is zero and either `total_balance` or `ledger.total` is zero. 

   The former can happen in cases like a slash; the latter when a fully unbonded account  is still receiving staking rewards in `RewardDestination::Staked`. 

   It can be called by anyone, as long as `stash` meets the above requirements. 

   Refunds the transaction fees upon successful execution. 

   #### Parameters 

   - `num_slashing_spans`: Refer to comments on [`Call::withdraw_unbonded`] for more  details. 
 
### rebond(value: `Compact<u128>`)
- **interface**: `api.tx.staking.rebond`
- **summary**:    Rebond a portion of the stash scheduled to be unlocked. 

   The dispatch origin must be signed by the controller. 

   #### Complexity 

  - Time complexity: O(L), where L is unlocking chunks

  - Bounded by `MaxUnlockingChunks`.
 
### restoreLedger(stash: `AccountId32`, maybe_controller: `Option<AccountId32>`, maybe_total: `Option<u128>`, maybe_unlocking: `Option<Vec<PalletStakingUnlockChunk>>`)
- **interface**: `api.tx.staking.restoreLedger`
- **summary**:    Restores the state of a ledger which is in an inconsistent state. 

   The requirements to restore a ledger are the following: 

  * The stash is bonded; or

  * The stash is not bonded but it has a staking lock left behind; or

  * If the stash has an associated ledger and its state is inconsistent; or

  * If the ledger is not corrupted *but* its staking lock is out of sync.

   The `maybe_*` input parameters will overwrite the corresponding data and metadata of the  ledger associated with the stash. If the input parameters are not set, the ledger will  be reset values from on-chain state. 
 
### scaleValidatorCount(factor: `Percent`)
- **interface**: `api.tx.staking.scaleValidatorCount`
- **summary**:    Scale up the ideal number of validators by a factor up to maximum of  `ElectionProviderBase::MaxWinners`. 

   The dispatch origin must be Root. 

   #### Complexity  Same as [`Self::set_validator_count`]. 
 
### setController()
- **interface**: `api.tx.staking.setController`
- **summary**:    (Re-)sets the controller of a stash to the stash itself. This function previously  accepted a `controller` argument to set the controller to an account other than the  stash itself. This functionality has now been removed, now only setting the controller  to the stash, if it is not already. 

   Effects will be felt instantly (as soon as this function is completed successfully). 

   The dispatch origin for this call must be _Signed_ by the stash, not the controller. 

   #### Complexity  O(1) 

  - Independent of the arguments. Insignificant complexity.

  - Contains a limited number of reads.

  - Writes are limited to the `origin` account key.
 
### setInvulnerables(invulnerables: `Vec<AccountId32>`)
- **interface**: `api.tx.staking.setInvulnerables`
- **summary**:    Set the validators who cannot be slashed (if any). 

   The dispatch origin must be Root. 
 
### setMinCommission(new: `Perbill`)
- **interface**: `api.tx.staking.setMinCommission`
- **summary**:    Sets the minimum amount of commission that each validators must maintain. 

   This call has lower privilege requirements than `set_staking_config` and can be called  by the `T::AdminOrigin`. Root can always call this. 
 
### setPayee(payee: `PalletStakingRewardDestination`)
- **interface**: `api.tx.staking.setPayee`
- **summary**:    (Re-)set the payment target for a controller. 

   Effects will be felt instantly (as soon as this function is completed successfully). 

   The dispatch origin for this call must be _Signed_ by the controller, not the stash. 

   #### Complexity 

  - O(1)

  - Independent of the arguments. Insignificant complexity.

  - Contains a limited number of reads.

  - Writes are limited to the `origin` account key.

  ---------
 
### setStakingConfigs(min_nominator_bond: `PalletStakingPalletConfigOpU128`, min_validator_bond: `PalletStakingPalletConfigOpU128`, max_nominator_count: `PalletStakingPalletConfigOpU32`, max_validator_count: `PalletStakingPalletConfigOpU32`, chill_threshold: `PalletStakingPalletConfigOpPercent`, min_commission: `PalletStakingPalletConfigOpPerbill`, max_staked_rewards: `PalletStakingPalletConfigOpPercent`)
- **interface**: `api.tx.staking.setStakingConfigs`
- **summary**:    Update the various staking configurations . 

   * `min_nominator_bond`: The minimum active bond needed to be a nominator. 

  * `min_validator_bond`: The minimum active bond needed to be a validator.

  * `max_nominator_count`: The max number of users who can be a nominator at once. When set to `None`, no limit is enforced. 

  * `max_validator_count`: The max number of users who can be a validator at once. When set to `None`, no limit is enforced. 

  * `chill_threshold`: The ratio of `max_nominator_count` or `max_validator_count` which should be filled in order for the `chill_other` transaction to work. 

  * `min_commission`: The minimum amount of commission that each validators must maintain. This is checked only upon calling `validate`. Existing validators are not affected. 

   RuntimeOrigin must be Root to call this function. 

   NOTE: Existing nominators and validators will not be affected by this update.  to kick people under the new limits, `chill_other` should be called. 
 
### setValidatorCount(new: `Compact<u32>`)
- **interface**: `api.tx.staking.setValidatorCount`
- **summary**:    Sets the ideal number of validators. 

   The dispatch origin must be Root. 

   #### Complexity  O(1) 
 
### unbond(value: `Compact<u128>`)
- **interface**: `api.tx.staking.unbond`
- **summary**:    Schedule a portion of the stash to be unlocked ready for transfer out after the bond  period ends. If this leaves an amount actively bonded less than  T::Currency::minimum_balance(), then it is increased to the full amount. 

   The dispatch origin for this call must be _Signed_ by the controller, not the stash. 

   Once the unlock period is done, you can call `withdraw_unbonded` to actually move  the funds out of management ready for transfer. 

   No more than a limited number of unlocking chunks (see `MaxUnlockingChunks`)  can co-exists at the same time. If there are no unlocking chunks slots available  [`Call::withdraw_unbonded`] is called to remove some of the chunks (if possible). 

   If a user encounters the `InsufficientBond` error when calling this extrinsic,  they should call `chill` first in order to free up their bonded funds. 

   Emits `Unbonded`. 

   See also [`Call::withdraw_unbonded`]. 
 
### updatePayee(controller: `AccountId32`)
- **interface**: `api.tx.staking.updatePayee`
- **summary**:    Migrates an account's `RewardDestination::Controller` to  `RewardDestination::Account(controller)`. 

   Effects will be felt instantly (as soon as this function is completed successfully). 

   This will waive the transaction fee if the `payee` is successfully migrated. 
 
### validate(prefs: `PalletStakingValidatorPrefs`)
- **interface**: `api.tx.staking.validate`
- **summary**:    Declare the desire to validate for the origin controller. 

   Effects will be felt at the beginning of the next era. 

   The dispatch origin for this call must be _Signed_ by the controller, not the stash. 
 
### withdrawUnbonded(num_slashing_spans: `u32`)
- **interface**: `api.tx.staking.withdrawUnbonded`
- **summary**:    Remove any unlocked chunks from the `unlocking` queue from our management. 

   This essentially frees up that balance to be used by the stash account to do whatever  it wants. 

   The dispatch origin for this call must be _Signed_ by the controller. 

   Emits `Withdrawn`. 

   See also [`Call::unbond`]. 

   #### Parameters 

   - `num_slashing_spans` indicates the number of metadata slashing spans to clear when  this call results in a complete removal of all the data related to the stash account.  In this case, the `num_slashing_spans` must be larger or equal to the number of  slashing spans associated with the stash account in the [`SlashingSpans`] storage type,  otherwise the call will fail. The call weight is directly proportional to  `num_slashing_spans`. 

   #### Complexity  O(S) where S is the number of slashing spans to remove  NOTE: Weight annotation is the kill scenario, we refund otherwise. 

___


## stateTrieMigration
 
### continueMigrate(limits: `PalletStateTrieMigrationMigrationLimits`, real_size_upper: `u32`, witness_task: `PalletStateTrieMigrationMigrationTask`)
- **interface**: `api.tx.stateTrieMigration.continueMigrate`
- **summary**:    Continue the migration for the given `limits`. 

   The dispatch origin of this call can be any signed account. 

   This transaction has NO MONETARY INCENTIVES. calling it will not reward anyone. Albeit,  Upon successful execution, the transaction fee is returned. 

   The (potentially over-estimated) of the byte length of all the data read must be  provided for up-front fee-payment and weighing. In essence, the caller is guaranteeing  that executing the current `MigrationTask` with the given `limits` will not exceed  `real_size_upper` bytes of read data. 

   The `witness_task` is merely a helper to prevent the caller from being slashed or  generally trigger a migration that they do not intend. This parameter is just a message  from caller, saying that they believed `witness_task` was the last state of the  migration, and they only wish for their transaction to do anything, if this assumption  holds. In case `witness_task` does not match, the transaction fails. 

   Based on the documentation of [`MigrationTask::migrate_until_exhaustion`], the  recommended way of doing this is to pass a `limit` that only bounds `count`, as the  `size` limit can always be overwritten. 
 
### controlAutoMigration(maybe_config: `Option<PalletStateTrieMigrationMigrationLimits>`)
- **interface**: `api.tx.stateTrieMigration.controlAutoMigration`
- **summary**:    Control the automatic migration. 

   The dispatch origin of this call must be [`Config::ControlOrigin`]. 
 
### forceSetProgress(progress_top: `PalletStateTrieMigrationProgress`, progress_child: `PalletStateTrieMigrationProgress`)
- **interface**: `api.tx.stateTrieMigration.forceSetProgress`
- **summary**:    Forcefully set the progress the running migration. 

   This is only useful in one case: the next key to migrate is too big to be migrated with  a signed account, in a parachain context, and we simply want to skip it. A reasonable  example of this would be `:code:`, which is both very expensive to migrate, and commonly  used, so probably it is already migrated. 

   In case you mess things up, you can also, in principle, use this to reset the migration  process. 
 
### migrateCustomChild(root: `Bytes`, child_keys: `Vec<Bytes>`, total_size: `u32`)
- **interface**: `api.tx.stateTrieMigration.migrateCustomChild`
- **summary**:    Migrate the list of child keys by iterating each of them one by one. 

   All of the given child keys must be present under one `child_root`. 

   This does not affect the global migration process tracker ([`MigrationProcess`]), and  should only be used in case any keys are leftover due to a bug. 
 
### migrateCustomTop(keys: `Vec<Bytes>`, witness_size: `u32`)
- **interface**: `api.tx.stateTrieMigration.migrateCustomTop`
- **summary**:    Migrate the list of top keys by iterating each of them one by one. 

   This does not affect the global migration process tracker ([`MigrationProcess`]), and  should only be used in case any keys are leftover due to a bug. 
 
### setSignedMaxLimits(limits: `PalletStateTrieMigrationMigrationLimits`)
- **interface**: `api.tx.stateTrieMigration.setSignedMaxLimits`
- **summary**:    Set the maximum limit of the signed migration. 

___


## system
 
### applyAuthorizedUpgrade(code: `Bytes`)
- **interface**: `api.tx.system.applyAuthorizedUpgrade`
- **summary**:    Provide the preimage (runtime binary) `code` for an upgrade that has been authorized. 

   If the authorization required a version check, this call will ensure the spec name  remains unchanged and that the spec version has increased. 

   Depending on the runtime's `OnSetCode` configuration, this function may directly apply  the new `code` in the same block or attempt to schedule the upgrade. 

   All origins are allowed. 
 
### authorizeUpgrade(code_hash: `H256`)
- **interface**: `api.tx.system.authorizeUpgrade`
- **summary**:    Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied  later. 

   This call requires Root origin. 
 
### authorizeUpgradeWithoutChecks(code_hash: `H256`)
- **interface**: `api.tx.system.authorizeUpgradeWithoutChecks`
- **summary**:    Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied  later. 

   WARNING: This authorizes an upgrade that will take place without any safety checks, for  example that the spec name remains the same and that the version number increases. Not  recommended for normal use. Use `authorize_upgrade` instead. 

   This call requires Root origin. 
 
### killPrefix(prefix: `Bytes`, subkeys: `u32`)
- **interface**: `api.tx.system.killPrefix`
- **summary**:    Kill all storage items with a key that starts with the given prefix. 

   **NOTE:** We rely on the Root origin to provide us the number of subkeys under  the prefix we are removing to accurately calculate the weight of this function. 
 
### killStorage(keys: `Vec<Bytes>`)
- **interface**: `api.tx.system.killStorage`
- **summary**:    Kill some items from storage. 
 
### remark(remark: `Bytes`)
- **interface**: `api.tx.system.remark`
- **summary**:    Make some on-chain remark. 

   Can be executed by every `origin`. 
 
### remarkWithEvent(remark: `Bytes`)
- **interface**: `api.tx.system.remarkWithEvent`
- **summary**:    Make some on-chain remark and emit event. 
 
### setCode(code: `Bytes`)
- **interface**: `api.tx.system.setCode`
- **summary**:    Set the new runtime code. 
 
### setCodeWithoutChecks(code: `Bytes`)
- **interface**: `api.tx.system.setCodeWithoutChecks`
- **summary**:    Set the new runtime code without doing any checks of the given `code`. 

   Note that runtime upgrades will not run if this is called with a not-increasing spec  version! 
 
### setHeapPages(pages: `u64`)
- **interface**: `api.tx.system.setHeapPages`
- **summary**:    Set the number of pages in the WebAssembly environment's heap. 
 
### setStorage(items: `Vec<(Bytes,Bytes)>`)
- **interface**: `api.tx.system.setStorage`
- **summary**:    Set some items of storage. 

___


## timestamp
 
### set(now: `Compact<u64>`)
- **interface**: `api.tx.timestamp.set`
- **summary**:    Set the current time. 

   This call should be invoked exactly once per block. It will panic at the finalization  phase, if this call hasn't been invoked by that time. 

   The timestamp should be greater than the previous one by the amount specified by  [`Config::MinimumPeriod`]. 

   The dispatch origin for this call must be _None_. 

   This dispatch class is _Mandatory_ to ensure it gets executed in the block. Be aware  that changing the complexity of this call could result exhausting the resources in a  block to execute any other calls. 

   #### Complexity 

  - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)

  - 1 storage read and 1 storage mutation (codec `O(1)` because of `DidUpdate::take` in `on_finalize`) 

  - 1 event handler `on_timestamp_set`. Must be `O(1)`.

___


## treasury
 
### checkStatus(index: `u32`)
- **interface**: `api.tx.treasury.checkStatus`
- **summary**:    Check the status of the spend and remove it from the storage if processed. 

   #### Dispatch Origin 

   Must be signed. 

   #### Details 

   The status check is a prerequisite for retrying a failed payout.  If a spend has either succeeded or expired, it is removed from the storage by this  function. In such instances, transaction fees are refunded. 

   #### Parameters 

  - `index`: The spend index.

   #### Events 

   Emits [`Event::PaymentFailed`] if the spend payout has failed.  Emits [`Event::SpendProcessed`] if the spend payout has succeed. 
 
### payout(index: `u32`)
- **interface**: `api.tx.treasury.payout`
- **summary**:    Claim a spend. 

   #### Dispatch Origin 

   Must be signed 

   #### Details 

   Spends must be claimed within some temporal bounds. A spend may be claimed within one  [`Config::PayoutPeriod`] from the `valid_from` block.  In case of a payout failure, the spend status must be updated with the `check_status`  dispatchable before retrying with the current function. 

   #### Parameters 

  - `index`: The spend index.

   #### Events 

   Emits [`Event::Paid`] if successful. 
 
### removeApproval(proposal_id: `Compact<u32>`)
- **interface**: `api.tx.treasury.removeApproval`
- **summary**:    Force a previously approved proposal to be removed from the approval queue. 

   #### Dispatch Origin 

   Must be [`Config::RejectOrigin`]. 

   #### Details 

   The original deposit will no longer be returned. 

   #### Parameters 

  - `proposal_id`: The index of a proposal

   #### Complexity 

  - O(A) where `A` is the number of approvals

   #### Errors 

  - [`Error::ProposalNotApproved`]: The `proposal_id` supplied was not found in the approval queue, i.e., the proposal has not been approved. This could also mean the  proposal does not exist altogether, thus there is no way it would have been approved  in the first place. 
 
### spend(asset_kind: `PolkadotRuntimeCommonImplsVersionedLocatableAsset`, amount: `Compact<u128>`, beneficiary: `XcmVersionedLocation`, valid_from: `Option<u32>`)
- **interface**: `api.tx.treasury.spend`
- **summary**:    Propose and approve a spend of treasury funds. 

   #### Dispatch Origin 

   Must be [`Config::SpendOrigin`] with the `Success` value being at least  `amount` of `asset_kind` in the native asset. The amount of `asset_kind` is converted  for assertion using the [`Config::BalanceConverter`]. 

   #### Details 

   Create an approved spend for transferring a specific `amount` of `asset_kind` to a  designated beneficiary. The spend must be claimed using the `payout` dispatchable within  the [`Config::PayoutPeriod`]. 

   #### Parameters 

  - `asset_kind`: An indicator of the specific asset class to be spent.

  - `amount`: The amount to be transferred from the treasury to the `beneficiary`.

  - `beneficiary`: The beneficiary of the spend.

  - `valid_from`: The block number from which the spend can be claimed. It can refer to the past if the resulting spend has not yet expired according to the  [`Config::PayoutPeriod`]. If `None`, the spend can be claimed immediately after  approval. 

   #### Events 

   Emits [`Event::AssetSpendApproved`] if successful. 
 
### spendLocal(amount: `Compact<u128>`, beneficiary: `MultiAddress`)
- **interface**: `api.tx.treasury.spendLocal`
- **summary**:    Propose and approve a spend of treasury funds. 

   #### Dispatch Origin 

   Must be [`Config::SpendOrigin`] with the `Success` value being at least `amount`. 

   #### Details  NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the  beneficiary. 

   #### Parameters 

  - `amount`: The amount to be transferred from the treasury to the `beneficiary`.

  - `beneficiary`: The destination account for the transfer.

   #### Events 

   Emits [`Event::SpendApproved`] if successful. 
 
### voidSpend(index: `u32`)
- **interface**: `api.tx.treasury.voidSpend`
- **summary**:    Void previously approved spend. 

   #### Dispatch Origin 

   Must be [`Config::RejectOrigin`]. 

   #### Details 

   A spend void is only possible if the payout has not been attempted yet. 

   #### Parameters 

  - `index`: The spend index.

   #### Events 

   Emits [`Event::AssetSpendVoided`] if successful. 

___


## utility
 
### asDerivative(index: `u16`, call: `Call`)
- **interface**: `api.tx.utility.asDerivative`
- **summary**:    Send a call through an indexed pseudonym of the sender. 

   Filter from origin are passed along. The call will be dispatched with an origin which  use the same filter as the origin of this call. 

   NOTE: If you need to ensure that any account-based filtering is not honored (i.e.  because you expect `proxy` to have been used prior in the call stack and you do not want  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`  in the Multisig pallet instead. 

   NOTE: Prior to version *12, this was called `as_limited_sub`. 

   The dispatch origin for this call must be _Signed_. 
 
### batch(calls: `Vec<Call>`)
- **interface**: `api.tx.utility.batch`
- **summary**:    Send a batch of dispatch calls. 

   May be called from any origin except `None`. 

   - `calls`: The calls to be dispatched from the same origin. The number of call must not  exceed the constant: `batched_calls_limit` (available in constant metadata). 

   If origin is root then the calls are dispatched without checking origin filter. (This  includes bypassing `frame_system::Config::BaseCallFilter`). 

   #### Complexity 

  - O(C) where C is the number of calls to be batched.

   This will return `Ok` in all circumstances. To determine the success of the batch, an  event is deposited. If a call failed and the batch was interrupted, then the  `BatchInterrupted` event is deposited, along with the number of successful calls made  and the error of the failed call. If all were successful, then the `BatchCompleted`  event is deposited. 
 
### batchAll(calls: `Vec<Call>`)
- **interface**: `api.tx.utility.batchAll`
- **summary**:    Send a batch of dispatch calls and atomically execute them.  The whole transaction will rollback and fail if any of the calls failed. 

   May be called from any origin except `None`. 

   - `calls`: The calls to be dispatched from the same origin. The number of call must not  exceed the constant: `batched_calls_limit` (available in constant metadata). 

   If origin is root then the calls are dispatched without checking origin filter. (This  includes bypassing `frame_system::Config::BaseCallFilter`). 

   #### Complexity 

  - O(C) where C is the number of calls to be batched.
 
### dispatchAs(as_origin: `PolkadotRuntimeOriginCaller`, call: `Call`)
- **interface**: `api.tx.utility.dispatchAs`
- **summary**:    Dispatches a function call with a provided origin. 

   The dispatch origin for this call must be _Root_. 

   #### Complexity 

  - O(1).
 
### forceBatch(calls: `Vec<Call>`)
- **interface**: `api.tx.utility.forceBatch`
- **summary**:    Send a batch of dispatch calls.  Unlike `batch`, it allows errors and won't interrupt. 

   May be called from any origin except `None`. 

   - `calls`: The calls to be dispatched from the same origin. The number of call must not  exceed the constant: `batched_calls_limit` (available in constant metadata). 

   If origin is root then the calls are dispatch without checking origin filter. (This  includes bypassing `frame_system::Config::BaseCallFilter`). 

   #### Complexity 

  - O(C) where C is the number of calls to be batched.
 
### withWeight(call: `Call`, weight: `SpWeightsWeightV2Weight`)
- **interface**: `api.tx.utility.withWeight`
- **summary**:    Dispatch a function call with a specified weight. 

   This function does not check the weight of the call, and instead allows the  Root origin to specify the weight of the call. 

   The dispatch origin for this call must be _Root_. 

___


## vesting
 
### forceRemoveVestingSchedule(target: `MultiAddress`, schedule_index: `u32`)
- **interface**: `api.tx.vesting.forceRemoveVestingSchedule`
- **summary**:    Force remove a vesting schedule 

   The dispatch origin for this call must be _Root_. 

   - `target`: An account that has a vesting schedule 

  - `schedule_index`: The vesting schedule index that should be removed
 
### forceVestedTransfer(source: `MultiAddress`, target: `MultiAddress`, schedule: `PalletVestingVestingInfo`)
- **interface**: `api.tx.vesting.forceVestedTransfer`
- **summary**:    Force a vested transfer. 

   The dispatch origin for this call must be _Root_. 

   - `source`: The account whose funds should be transferred. 

  - `target`: The account that should be transferred the vested funds.

  - `schedule`: The vesting schedule attached to the transfer.

   Emits `VestingCreated`. 

   NOTE: This will unlock all schedules through the current block. 

   #### Complexity 

  - `O(1)`.
 
### mergeSchedules(schedule1_index: `u32`, schedule2_index: `u32`)
- **interface**: `api.tx.vesting.mergeSchedules`
- **summary**:    Merge two vesting schedules together, creating a new vesting schedule that unlocks over  the highest possible start and end blocks. If both schedules have already started the  current block will be used as the schedule start; with the caveat that if one schedule  is finished by the current block, the other will be treated as the new merged schedule,  unmodified. 

   NOTE: If `schedule1_index == schedule2_index` this is a no-op.  NOTE: This will unlock all schedules through the current block prior to merging.  NOTE: If both schedules have ended by the current block, no new schedule will be created  and both will be removed. 

   Merged schedule attributes: 

  - `starting_block`: `MAX(schedule1.starting_block, scheduled2.starting_block, current_block)`. 

  - `ending_block`: `MAX(schedule1.ending_block, schedule2.ending_block)`.

  - `locked`: `schedule1.locked_at(current_block) + schedule2.locked_at(current_block)`.

   The dispatch origin for this call must be _Signed_. 

   - `schedule1_index`: index of the first schedule to merge. 

  - `schedule2_index`: index of the second schedule to merge.
 
### vest()
- **interface**: `api.tx.vesting.vest`
- **summary**:    Unlock any vested funds of the sender account. 

   The dispatch origin for this call must be _Signed_ and the sender must have funds still  locked under this pallet. 

   Emits either `VestingCompleted` or `VestingUpdated`. 

   #### Complexity 

  - `O(1)`.
 
### vestOther(target: `MultiAddress`)
- **interface**: `api.tx.vesting.vestOther`
- **summary**:    Unlock any vested funds of a `target` account. 

   The dispatch origin for this call must be _Signed_. 

   - `target`: The account whose vested funds should be unlocked. Must have funds still  locked under this pallet. 

   Emits either `VestingCompleted` or `VestingUpdated`. 

   #### Complexity 

  - `O(1)`.
 
### vestedTransfer(target: `MultiAddress`, schedule: `PalletVestingVestingInfo`)
- **interface**: `api.tx.vesting.vestedTransfer`
- **summary**:    Create a vested transfer. 

   The dispatch origin for this call must be _Signed_. 

   - `target`: The account receiving the vested funds. 

  - `schedule`: The vesting schedule attached to the transfer.

   Emits `VestingCreated`. 

   NOTE: This will unlock all schedules through the current block. 

   #### Complexity 

  - `O(1)`.

___


## voterList
 
### putInFrontOf(lighter: `MultiAddress`)
- **interface**: `api.tx.voterList.putInFrontOf`
- **summary**:    Move the caller's Id directly in front of `lighter`. 

   The dispatch origin for this call must be _Signed_ and can only be called by the Id of  the account going in front of `lighter`. Fee is payed by the origin under all  circumstances. 

   Only works if: 

   - both nodes are within the same bag, 

  - and `origin` has a greater `Score` than `lighter`.
 
### putInFrontOfOther(heavier: `MultiAddress`, lighter: `MultiAddress`)
- **interface**: `api.tx.voterList.putInFrontOfOther`
- **summary**:    Same as [`Pallet::put_in_front_of`], but it can be called by anyone. 

   Fee is paid by the origin under all circumstances. 
 
### rebag(dislocated: `MultiAddress`)
- **interface**: `api.tx.voterList.rebag`
- **summary**:    Declare that some `dislocated` account has, through rewards or penalties, sufficiently  changed its score that it should properly fall into a different bag than its current  one. 

   Anyone can call this function about any potentially dislocated account. 

   Will always update the stored score of `dislocated` to the correct score, based on  `ScoreProvider`. 

   If `dislocated` does not exists, it returns an error. 

___


## whitelist
 
### dispatchWhitelistedCall(call_hash: `H256`, call_encoded_len: `u32`, call_weight_witness: `SpWeightsWeightV2Weight`)
- **interface**: `api.tx.whitelist.dispatchWhitelistedCall`
 
### dispatchWhitelistedCallWithPreimage(call: `Call`)
- **interface**: `api.tx.whitelist.dispatchWhitelistedCallWithPreimage`
 
### removeWhitelistedCall(call_hash: `H256`)
- **interface**: `api.tx.whitelist.removeWhitelistedCall`
 
### whitelistCall(call_hash: `H256`)
- **interface**: `api.tx.whitelist.whitelistCall`

___


## xcmPallet
 
### claimAssets(assets: `XcmVersionedAssets`, beneficiary: `XcmVersionedLocation`)
- **interface**: `api.tx.xcmPallet.claimAssets`
- **summary**:    Claims assets trapped on this pallet because of leftover assets during XCM execution. 

   - `origin`: Anyone can call this extrinsic. 

  - `assets`: The exact assets that were trapped. Use the version to specify what version was the latest when they were trapped. 

  - `beneficiary`: The location/account where the claimed assets will be deposited.
 
### execute(message: `XcmVersionedXcm`, max_weight: `SpWeightsWeightV2Weight`)
- **interface**: `api.tx.xcmPallet.execute`
- **summary**:    Execute an XCM message from a local, signed, origin. 

   An event is deposited indicating whether `msg` could be executed completely or only  partially. 

   No more than `max_weight` will be used in its attempted execution. If this is less than  the maximum amount of weight that the message could take to be executed, then no  execution attempt will be made. 
 
### forceDefaultXcmVersion(maybe_xcm_version: `Option<u32>`)
- **interface**: `api.tx.xcmPallet.forceDefaultXcmVersion`
- **summary**:    Set a safe XCM version (the version that XCM should be encoded with if the most recent  version a destination can accept is unknown). 

   - `origin`: Must be an origin specified by AdminOrigin. 

  - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
 
### forceSubscribeVersionNotify(location: `XcmVersionedLocation`)
- **interface**: `api.tx.xcmPallet.forceSubscribeVersionNotify`
- **summary**:    Ask a location to notify us regarding their XCM version and any changes to it. 

   - `origin`: Must be an origin specified by AdminOrigin. 

  - `location`: The location to which we should subscribe for XCM version notifications.
 
### forceSuspension(suspended: `bool`)
- **interface**: `api.tx.xcmPallet.forceSuspension`
- **summary**:    Set or unset the global suspension state of the XCM executor. 

   - `origin`: Must be an origin specified by AdminOrigin. 

  - `suspended`: `true` to suspend, `false` to resume.
 
### forceUnsubscribeVersionNotify(location: `XcmVersionedLocation`)
- **interface**: `api.tx.xcmPallet.forceUnsubscribeVersionNotify`
- **summary**:    Require that a particular destination should no longer notify us regarding any XCM  version changes. 

   - `origin`: Must be an origin specified by AdminOrigin. 

  - `location`: The location to which we are currently subscribed for XCM version notifications which we no longer desire. 
 
### forceXcmVersion(location: `StagingXcmV4Location`, version: `u32`)
- **interface**: `api.tx.xcmPallet.forceXcmVersion`
- **summary**:    Extoll that a particular destination can be communicated with through a particular  version of XCM. 

   - `origin`: Must be an origin specified by AdminOrigin. 

  - `location`: The destination that is being described.

  - `xcm_version`: The latest version of XCM that `location` supports.
 
### limitedReserveTransferAssets(dest: `XcmVersionedLocation`, beneficiary: `XcmVersionedLocation`, assets: `XcmVersionedAssets`, fee_asset_item: `u32`, weight_limit: `XcmV3WeightLimit`)
- **interface**: `api.tx.xcmPallet.limitedReserveTransferAssets`
- **summary**:    Transfer some assets from the local chain to the destination chain through their local,  destination or remote reserve. 

   `assets` must have same reserve location and may not be teleportable to `dest`. 

  - `assets` have local reserve: transfer assets to sovereign account of destination chain and forward a notification XCM to `dest` to mint and deposit reserve-based  assets to `beneficiary`. 

  - `assets` have destination reserve: burn local assets and forward a notification to `dest` chain to withdraw the reserve assets from this chain's sovereign account and  deposit them to `beneficiary`. 

  - `assets` have remote reserve: burn local assets, forward XCM to reserve chain to move reserves from this chain's SA to `dest` chain's SA, and forward another XCM to `dest`  to mint and deposit reserve-based assets to `beneficiary`. 

   Fee payment on the destination side is made from the asset in the `assets` vector of  index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight  is needed than `weight_limit`, then the operation will fail and the sent assets may be  at risk. 

   - `origin`: Must be capable of withdrawing the `assets` and executing XCM. 

  - `dest`: Destination context for the assets. Will typically be `[Parent, Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from  relay to parachain. 

  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be an `AccountId32` value. 

  - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the `dest` (and possibly reserve) chains. 

  - `fee_asset_item`: The index into `assets` of the item which should be used to pay fees. 

  - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 
### limitedTeleportAssets(dest: `XcmVersionedLocation`, beneficiary: `XcmVersionedLocation`, assets: `XcmVersionedAssets`, fee_asset_item: `u32`, weight_limit: `XcmV3WeightLimit`)
- **interface**: `api.tx.xcmPallet.limitedTeleportAssets`
- **summary**:    Teleport some assets from the local chain to some destination chain. 

   Fee payment on the destination side is made from the asset in the `assets` vector of  index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight  is needed than `weight_limit`, then the operation will fail and the sent assets may be  at risk. 

   - `origin`: Must be capable of withdrawing the `assets` and executing XCM. 

  - `dest`: Destination context for the assets. Will typically be `[Parent, Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from  relay to parachain. 

  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be an `AccountId32` value. 

  - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the `dest` chain. 

  - `fee_asset_item`: The index into `assets` of the item which should be used to pay fees. 

  - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 
### reserveTransferAssets(dest: `XcmVersionedLocation`, beneficiary: `XcmVersionedLocation`, assets: `XcmVersionedAssets`, fee_asset_item: `u32`)
- **interface**: `api.tx.xcmPallet.reserveTransferAssets`
- **summary**:    Transfer some assets from the local chain to the destination chain through their local,  destination or remote reserve. 

   `assets` must have same reserve location and may not be teleportable to `dest`. 

  - `assets` have local reserve: transfer assets to sovereign account of destination chain and forward a notification XCM to `dest` to mint and deposit reserve-based  assets to `beneficiary`. 

  - `assets` have destination reserve: burn local assets and forward a notification to `dest` chain to withdraw the reserve assets from this chain's sovereign account and  deposit them to `beneficiary`. 

  - `assets` have remote reserve: burn local assets, forward XCM to reserve chain to move reserves from this chain's SA to `dest` chain's SA, and forward another XCM to `dest`  to mint and deposit reserve-based assets to `beneficiary`. 

   **This function is deprecated: Use `limited_reserve_transfer_assets` instead.** 

   Fee payment on the destination side is made from the asset in the `assets` vector of  index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,  with all fees taken as needed from the asset. 

   - `origin`: Must be capable of withdrawing the `assets` and executing XCM. 

  - `dest`: Destination context for the assets. Will typically be `[Parent, Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from  relay to parachain. 

  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be an `AccountId32` value. 

  - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the `dest` (and possibly reserve) chains. 

  - `fee_asset_item`: The index into `assets` of the item which should be used to pay fees. 
 
### send(dest: `XcmVersionedLocation`, message: `XcmVersionedXcm`)
- **interface**: `api.tx.xcmPallet.send`
 
### teleportAssets(dest: `XcmVersionedLocation`, beneficiary: `XcmVersionedLocation`, assets: `XcmVersionedAssets`, fee_asset_item: `u32`)
- **interface**: `api.tx.xcmPallet.teleportAssets`
- **summary**:    Teleport some assets from the local chain to some destination chain. 

   **This function is deprecated: Use `limited_teleport_assets` instead.** 

   Fee payment on the destination side is made from the asset in the `assets` vector of  index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,  with all fees taken as needed from the asset. 

   - `origin`: Must be capable of withdrawing the `assets` and executing XCM. 

  - `dest`: Destination context for the assets. Will typically be `[Parent, Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from  relay to parachain. 

  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be an `AccountId32` value. 

  - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the `dest` chain. 

  - `fee_asset_item`: The index into `assets` of the item which should be used to pay fees. 
 
### transferAssets(dest: `XcmVersionedLocation`, beneficiary: `XcmVersionedLocation`, assets: `XcmVersionedAssets`, fee_asset_item: `u32`, weight_limit: `XcmV3WeightLimit`)
- **interface**: `api.tx.xcmPallet.transferAssets`
- **summary**:    Transfer some assets from the local chain to the destination chain through their local,  destination or remote reserve, or through teleports. 

   Fee payment on the destination side is made from the asset in the `assets` vector of  index `fee_asset_item` (hence referred to as `fees`), up to enough to pay for  `weight_limit` of weight. If more weight is needed than `weight_limit`, then the  operation will fail and the sent assets may be at risk. 

   `assets` (excluding `fees`) must have same reserve location or otherwise be teleportable  to `dest`, no limitations imposed on `fees`. 

  - for local reserve: transfer assets to sovereign account of destination chain and forward a notification XCM to `dest` to mint and deposit reserve-based assets to  `beneficiary`. 

  - for destination reserve: burn local assets and forward a notification to `dest` chain to withdraw the reserve assets from this chain's sovereign account and deposit them  to `beneficiary`. 

  - for remote reserve: burn local assets, forward XCM to reserve chain to move reserves from this chain's SA to `dest` chain's SA, and forward another XCM to `dest` to mint  and deposit reserve-based assets to `beneficiary`. 

  - for teleports: burn local assets and forward XCM to `dest` chain to mint/teleport assets and deposit them to `beneficiary`. 

   - `origin`: Must be capable of withdrawing the `assets` and executing XCM. 

  - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send from parachain to parachain, or `X1(Parachain(..))` to send  from relay to parachain. 

  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be an `AccountId32` value. 

  - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the `dest` (and possibly reserve) chains. 

  - `fee_asset_item`: The index into `assets` of the item which should be used to pay fees. 

  - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 
### transferAssetsUsingTypeAndThen(dest: `XcmVersionedLocation`, assets: `XcmVersionedAssets`, assets_transfer_type: `StagingXcmExecutorAssetTransferTransferType`, remote_fees_id: `XcmVersionedAssetId`, fees_transfer_type: `StagingXcmExecutorAssetTransferTransferType`, custom_xcm_on_dest: `XcmVersionedXcm`, weight_limit: `XcmV3WeightLimit`)
- **interface**: `api.tx.xcmPallet.transferAssetsUsingTypeAndThen`
- **summary**:    Transfer assets from the local chain to the destination chain using explicit transfer  types for assets and fees. 

   `assets` must have same reserve location or may be teleportable to `dest`. Caller must  provide the `assets_transfer_type` to be used for `assets`: 

  - `TransferType::LocalReserve`: transfer assets to sovereign account of destination chain and forward a notification XCM to `dest` to mint and deposit reserve-based  assets to `beneficiary`. 

  - `TransferType::DestinationReserve`: burn local assets and forward a notification to `dest` chain to withdraw the reserve assets from this chain's sovereign account and  deposit them to `beneficiary`. 

  - `TransferType::RemoteReserve(reserve)`: burn local assets, forward XCM to `reserve` chain to move reserves from this chain's SA to `dest` chain's SA, and forward another  XCM to `dest` to mint and deposit reserve-based assets to `beneficiary`. Typically  the remote `reserve` is Asset Hub. 

  - `TransferType::Teleport`: burn local assets and forward XCM to `dest` chain to mint/teleport assets and deposit them to `beneficiary`. 

   On the destination chain, as well as any intermediary hops, `BuyExecution` is used to  buy execution using transferred `assets` identified by `remote_fees_id`.  Make sure enough of the specified `remote_fees_id` asset is included in the given list  of `assets`. `remote_fees_id` should be enough to pay for `weight_limit`. If more weight  is needed than `weight_limit`, then the operation will fail and the sent assets may be  at risk. 

   `remote_fees_id` may use different transfer type than rest of `assets` and can be  specified through `fees_transfer_type`. 

   The caller needs to specify what should happen to the transferred assets once they reach  the `dest` chain. This is done through the `custom_xcm_on_dest` parameter, which  contains the instructions to execute on `dest` as a final step.  This is usually as simple as:  `Xcm(vec![DepositAsset { assets: Wild(AllCounted(assets.len())), beneficiary }])`,  but could be something more exotic like sending the `assets` even further. 

   - `origin`: Must be capable of withdrawing the `assets` and executing XCM. 

  - `dest`: Destination context for the assets. Will typically be `[Parent, Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from  relay to parachain, or `(parents: 2, (GlobalConsensus(..), ..))` to send from  parachain across a bridge to another ecosystem destination. 

  - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the `dest` (and possibly reserve) chains. 

  - `assets_transfer_type`: The XCM `TransferType` used to transfer the `assets`.

  - `remote_fees_id`: One of the included `assets` to be used to pay fees.

  - `fees_transfer_type`: The XCM `TransferType` used to transfer the `fees` assets.

  - `custom_xcm_on_dest`: The XCM to be executed on `dest` chain as the last step of the transfer, which also determines what happens to the assets on the destination chain. 

  - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
