---
title: Extrinsics
---

The following sections contain Extrinsics methods are part of the default Substrate runtime. On the api, these are exposed via `api.tx.<module>.<method>`. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[alliance](#alliance)**

- **[allianceMotion](#alliancemotion)**

- **[assets](#assets)**

- **[authorship](#authorship)**

- **[babe](#babe)**

- **[bagsList](#bagslist)**

- **[balances](#balances)**

- **[bounties](#bounties)**

- **[childBounties](#childbounties)**

- **[contracts](#contracts)**

- **[convictionVoting](#convictionvoting)**

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

- **[nominationPools](#nominationpools)**

- **[preimage](#preimage)**

- **[proxy](#proxy)**

- **[rankedCollective](#rankedcollective)**

- **[rankedPolls](#rankedpolls)**

- **[recovery](#recovery)**

- **[referenda](#referenda)**

- **[remark](#remark)**

- **[scheduler](#scheduler)**

- **[session](#session)**

- **[society](#society)**

- **[staking](#staking)**

- **[stateTrieMigration](#statetriemigration)**

- **[sudo](#sudo)**

- **[system](#system)**

- **[technicalCommittee](#technicalcommittee)**

- **[technicalMembership](#technicalmembership)**

- **[timestamp](#timestamp)**

- **[tips](#tips)**

- **[transactionStorage](#transactionstorage)**

- **[treasury](#treasury)**

- **[uniques](#uniques)**

- **[utility](#utility)**

- **[vesting](#vesting)**

- **[whitelist](#whitelist)**


___


## alliance
 
### addUnscrupulousItems(items: `Vec<PalletAllianceUnscrupulousItem>`)
- **interface**: `api.tx.alliance.addUnscrupulousItems`
- **summary**:    Add accounts or websites to the list of unscrupulous items. 
 
### announce(announcement: `PalletAllianceCid`)
- **interface**: `api.tx.alliance.announce`
- **summary**:    Make an announcement of a new IPFS CID about alliance issues. 
 
### close(proposal_hash: `H256`, index: `Compact<u32>`, proposal_weight_bound: `Compact<u64>`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.alliance.close`
- **summary**:    Close a vote that is either approved, disapproved, or whose voting period has ended. 

   Requires the sender to be a founder or fellow. 
 
### elevateAlly(ally: `MultiAddress`)
- **interface**: `api.tx.alliance.elevateAlly`
- **summary**:    Elevate an ally to fellow. 
 
### initMembers(founders: `Vec<AccountId32>`, fellows: `Vec<AccountId32>`, allies: `Vec<AccountId32>`)
- **interface**: `api.tx.alliance.initMembers`
- **summary**:    Initialize the founders, fellows, and allies. 

   This should only be called once, and must be called by the Root origin. 
 
### joinAlliance()
- **interface**: `api.tx.alliance.joinAlliance`
- **summary**:    Submit oneself for candidacy. A fixed deposit is reserved. 
 
### kickMember(who: `MultiAddress`)
- **interface**: `api.tx.alliance.kickMember`
- **summary**:    Kick a member from the alliance and slash its deposit. 
 
### nominateAlly(who: `MultiAddress`)
- **interface**: `api.tx.alliance.nominateAlly`
- **summary**:    A founder or fellow can nominate someone to join the alliance as an Ally.  There is no deposit required to the nominator or nominee. 
 
### propose(threshold: `Compact<u32>`, proposal: `Call`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.alliance.propose`
- **summary**:    Add a new proposal to be voted on. 

   Requires the sender to be a founder or fellow. 
 
### removeAnnouncement(announcement: `PalletAllianceCid`)
- **interface**: `api.tx.alliance.removeAnnouncement`
- **summary**:    Remove an announcement. 
 
### removeUnscrupulousItems(items: `Vec<PalletAllianceUnscrupulousItem>`)
- **interface**: `api.tx.alliance.removeUnscrupulousItems`
- **summary**:    Deem an item no longer unscrupulous. 
 
### retire()
- **interface**: `api.tx.alliance.retire`
- **summary**:    As a member, retire from the alliance and unreserve the deposit. 
 
### setRule(rule: `PalletAllianceCid`)
- **interface**: `api.tx.alliance.setRule`
- **summary**:    Set a new IPFS CID to the alliance rule. 
 
### veto(proposal_hash: `H256`)
- **interface**: `api.tx.alliance.veto`
- **summary**:    Veto a proposal about `set_rule` and `elevate_ally`, close, and remove it from the  system, regardless of its current state. 

   Must be called by a founder. 
 
### vote(proposal: `H256`, index: `Compact<u32>`, approve: `bool`)
- **interface**: `api.tx.alliance.vote`
- **summary**:    Add an aye or nay vote for the sender to the given proposal. 

   Requires the sender to be a founder or fellow. 

___


## allianceMotion
 
### close(proposal_hash: `H256`, index: `Compact<u32>`, proposal_weight_bound: `Compact<u64>`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.allianceMotion.close`
- **summary**:    Close a vote that is either approved, disapproved or whose voting period has ended. 

   May be called by any signed account in order to finish voting and close the proposal. 

   If called before the end of the voting period it will only close the vote if it is  has enough votes to be approved or disapproved. 

   If called after the end of the voting period abstentions are counted as rejections  unless there is a prime member set and the prime member cast an approval. 

   If the close operation completes successfully with disapproval, the transaction fee will  be waived. Otherwise execution of the approved operation will be charged to the caller. 

   + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed  proposal.  + `length_bound`: The upper bound for the length of the proposal in storage. Checked via  `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length. 

    
 
### disapproveProposal(proposal_hash: `H256`)
- **interface**: `api.tx.allianceMotion.disapproveProposal`
- **summary**:    Disapprove a proposal, close, and remove it from the system, regardless of its current  state. 

   Must be called by the Root origin. 

   Parameters: 

  * `proposal_hash`: The hash of the proposal that should be disapproved.

    
 
### execute(proposal: `Call`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.allianceMotion.execute`
- **summary**:    Dispatch a proposal from a member using the `Member` origin. 

   Origin must be a member of the collective. 

    
 
### propose(threshold: `Compact<u32>`, proposal: `Call`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.allianceMotion.propose`
- **summary**:    Add a new proposal to either be voted on or executed directly. 

   Requires the sender to be member. 

   `threshold` determines whether `proposal` is executed directly (`threshold < 2`)  or put up for voting. 

    
 
### setMembers(new_members: `Vec<AccountId32>`, prime: `Option<AccountId32>`, old_count: `u32`)
- **interface**: `api.tx.allianceMotion.setMembers`
- **summary**:    Set the collective's membership. 

   - `new_members`: The new member list. Be nice to the chain and provide it sorted. 

  - `prime`: The prime member whose vote sets the default.

  - `old_count`: The upper bound for the previous number of members in storage. Used for weight estimation. 

   Requires root origin. 

   NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but  the weight estimations rely on it to estimate dispatchable weight. 

   #### WARNING: 

   The `pallet-collective` can also be managed by logic outside of the pallet through the  implementation of the trait [`ChangeMembers`].  Any call to `set_members` must be careful that the member set doesn't get out of sync  with other logic managing the member set. 

    
 
### vote(proposal: `H256`, index: `Compact<u32>`, approve: `bool`)
- **interface**: `api.tx.allianceMotion.vote`
- **summary**:    Add an aye or nay vote for the sender to the given proposal. 

   Requires the sender to be a member. 

   Transaction fees will be waived if the member is voting on any particular proposal  for the first time and the call is successful. Subsequent vote changes will charge a  fee.   

___


## assets
 
### approveTransfer(id: `Compact<u32>`, delegate: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.assets.approveTransfer`
- **summary**:    Approve an amount of asset for transfer by a delegated third-party account. 

   Origin must be Signed. 

   Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account  for the purpose of holding the approval. If some non-zero amount of assets is already  approved from signing account to `delegate`, then it is topped up or unreserved to  meet the right value. 

   NOTE: The signing account does not need to own `amount` of assets at the point of  making this call. 

   - `id`: The identifier of the asset. 

  - `delegate`: The account to delegate permission to transfer asset.

  - `amount`: The amount of asset that may be transferred by `delegate`. If there is already an approval in place, then this acts additively. 

   Emits `ApprovedTransfer` on success. 

   Weight: `O(1)` 
 
### burn(id: `Compact<u32>`, who: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.assets.burn`
- **summary**:    Reduce the balance of `who` by as much as possible up to `amount` assets of `id`. 

   Origin must be Signed and the sender should be the Manager of the asset `id`. 

   Bails with `NoAccount` if the `who` is already dead. 

   - `id`: The identifier of the asset to have some amount burned. 

  - `who`: The account to be debited from.

  - `amount`: The maximum amount by which `who`'s balance should be reduced.

   Emits `Burned` with the actual amount burned. If this takes the balance to below the  minimum for the asset, then the amount burned is increased to take it to zero. 

   Weight: `O(1)`  Modes: Post-existence of `who`; Pre & post Zombie-status of `who`. 
 
### cancelApproval(id: `Compact<u32>`, delegate: `MultiAddress`)
- **interface**: `api.tx.assets.cancelApproval`
- **summary**:    Cancel all of some asset approved for delegated transfer by a third-party account. 

   Origin must be Signed and there must be an approval in place between signer and  `delegate`. 

   Unreserves any deposit previously reserved by `approve_transfer` for the approval. 

   - `id`: The identifier of the asset. 

  - `delegate`: The account delegated permission to transfer asset.

   Emits `ApprovalCancelled` on success. 

   Weight: `O(1)` 
 
### clearMetadata(id: `Compact<u32>`)
- **interface**: `api.tx.assets.clearMetadata`
- **summary**:    Clear the metadata for an asset. 

   Origin must be Signed and the sender should be the Owner of the asset `id`. 

   Any deposit is freed for the asset owner. 

   - `id`: The identifier of the asset to clear. 

   Emits `MetadataCleared`. 

   Weight: `O(1)` 
 
### create(id: `Compact<u32>`, admin: `MultiAddress`, min_balance: `u128`)
- **interface**: `api.tx.assets.create`
- **summary**:    Issue a new class of fungible assets from a public origin. 

   This new asset class has no assets initially and its owner is the origin. 

   The origin must be Signed and the sender must have sufficient funds free. 

   Funds of sender are reserved by `AssetDeposit`. 

   Parameters: 

  - `id`: The identifier of the new asset. This must not be currently in use to identify an existing asset. 

  - `admin`: The admin of this class of assets. The admin is the initial address of each member of the asset class's admin team. 

  - `min_balance`: The minimum balance of this new asset that any single account must have. If an account's balance is reduced below this, then it collapses to zero. 

   Emits `Created` event when successful. 

   Weight: `O(1)` 
 
### destroy(id: `Compact<u32>`, witness: `PalletAssetsDestroyWitness`)
- **interface**: `api.tx.assets.destroy`
- **summary**:    Destroy a class of fungible assets. 

   The origin must conform to `ForceOrigin` or must be Signed and the sender must be the  owner of the asset `id`. 

   - `id`: The identifier of the asset to be destroyed. This must identify an existing  asset. 

   Emits `Destroyed` event when successful. 

   NOTE: It can be helpful to first freeze an asset before destroying it so that you  can provide accurate witness information and prevent users from manipulating state  in a way that can make it harder to destroy. 

   Weight: `O(c + p + a)` where: 

  - `c = (witness.accounts - witness.sufficients)`

  - `s = witness.sufficients`

  - `a = witness.approvals`
 
### forceAssetStatus(id: `Compact<u32>`, owner: `MultiAddress`, issuer: `MultiAddress`, admin: `MultiAddress`, freezer: `MultiAddress`, min_balance: `Compact<u128>`, is_sufficient: `bool`, is_frozen: `bool`)
- **interface**: `api.tx.assets.forceAssetStatus`
- **summary**:    Alter the attributes of a given asset. 

   Origin must be `ForceOrigin`. 

   - `id`: The identifier of the asset. 

  - `owner`: The new Owner of this asset.

  - `issuer`: The new Issuer of this asset.

  - `admin`: The new Admin of this asset.

  - `freezer`: The new Freezer of this asset.

  - `min_balance`: The minimum balance of this new asset that any single account must have. If an account's balance is reduced below this, then it collapses to zero. 

  - `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient value to account for the state bloat associated with its balance storage. If set to  `true`, then non-zero balances may be stored without a `consumer` reference (and thus  an ED in the Balances pallet or whatever else is used to control user-account state  growth). 

  - `is_frozen`: Whether this asset class is frozen except for permissioned/admin instructions. 

   Emits `AssetStatusChanged` with the identity of the asset. 

   Weight: `O(1)` 
 
### forceCancelApproval(id: `Compact<u32>`, owner: `MultiAddress`, delegate: `MultiAddress`)
- **interface**: `api.tx.assets.forceCancelApproval`
- **summary**:    Cancel all of some asset approved for delegated transfer by a third-party account. 

   Origin must be either ForceOrigin or Signed origin with the signer being the Admin  account of the asset `id`. 

   Unreserves any deposit previously reserved by `approve_transfer` for the approval. 

   - `id`: The identifier of the asset. 

  - `delegate`: The account delegated permission to transfer asset.

   Emits `ApprovalCancelled` on success. 

   Weight: `O(1)` 
 
### forceClearMetadata(id: `Compact<u32>`)
- **interface**: `api.tx.assets.forceClearMetadata`
- **summary**:    Clear the metadata for an asset. 

   Origin must be ForceOrigin. 

   Any deposit is returned. 

   - `id`: The identifier of the asset to clear. 

   Emits `MetadataCleared`. 

   Weight: `O(1)` 
 
### forceCreate(id: `Compact<u32>`, owner: `MultiAddress`, is_sufficient: `bool`, min_balance: `Compact<u128>`)
- **interface**: `api.tx.assets.forceCreate`
- **summary**:    Issue a new class of fungible assets from a privileged origin. 

   This new asset class has no assets initially. 

   The origin must conform to `ForceOrigin`. 

   Unlike `create`, no funds are reserved. 

   - `id`: The identifier of the new asset. This must not be currently in use to identify  an existing asset. 

  - `owner`: The owner of this class of assets. The owner has full superuser permissions over this asset, but may later change and configure the permissions using  `transfer_ownership` and `set_team`. 

  - `min_balance`: The minimum balance of this new asset that any single account must have. If an account's balance is reduced below this, then it collapses to zero. 

   Emits `ForceCreated` event when successful. 

   Weight: `O(1)` 
 
### forceSetMetadata(id: `Compact<u32>`, name: `Bytes`, symbol: `Bytes`, decimals: `u8`, is_frozen: `bool`)
- **interface**: `api.tx.assets.forceSetMetadata`
- **summary**:    Force the metadata for an asset to some value. 

   Origin must be ForceOrigin. 

   Any deposit is left alone. 

   - `id`: The identifier of the asset to update. 

  - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.

  - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.

  - `decimals`: The number of decimals this asset uses to represent one unit.

   Emits `MetadataSet`. 

   Weight: `O(N + S)` where N and S are the length of the name and symbol respectively. 
 
### forceTransfer(id: `Compact<u32>`, source: `MultiAddress`, dest: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.assets.forceTransfer`
- **summary**:    Move some assets from one account to another. 

   Origin must be Signed and the sender should be the Admin of the asset `id`. 

   - `id`: The identifier of the asset to have some amount transferred. 

  - `source`: The account to be debited.

  - `dest`: The account to be credited.

  - `amount`: The amount by which the `source`'s balance of assets should be reduced and `dest`'s balance increased. The amount actually transferred may be slightly greater in  the case that the transfer would otherwise take the `source` balance above zero but  below the minimum balance. Must be greater than zero. 

   Emits `Transferred` with the actual amount transferred. If this takes the source balance  to below the minimum for the asset, then the amount transferred is increased to take it  to zero. 

   Weight: `O(1)`  Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of  `dest`. 
 
### freeze(id: `Compact<u32>`, who: `MultiAddress`)
- **interface**: `api.tx.assets.freeze`
- **summary**:    Disallow further unprivileged transfers from an account. 

   Origin must be Signed and the sender should be the Freezer of the asset `id`. 

   - `id`: The identifier of the asset to be frozen. 

  - `who`: The account to be frozen.

   Emits `Frozen`. 

   Weight: `O(1)` 
 
### freezeAsset(id: `Compact<u32>`)
- **interface**: `api.tx.assets.freezeAsset`
- **summary**:    Disallow further unprivileged transfers for the asset class. 

   Origin must be Signed and the sender should be the Freezer of the asset `id`. 

   - `id`: The identifier of the asset to be frozen. 

   Emits `Frozen`. 

   Weight: `O(1)` 
 
### mint(id: `Compact<u32>`, beneficiary: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.assets.mint`
- **summary**:    Mint assets of a particular class. 

   The origin must be Signed and the sender must be the Issuer of the asset `id`. 

   - `id`: The identifier of the asset to have some amount minted. 

  - `beneficiary`: The account to be credited with the minted assets.

  - `amount`: The amount of the asset to be minted.

   Emits `Issued` event when successful. 

   Weight: `O(1)`  Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`. 
 
### refund(id: `Compact<u32>`, allow_burn: `bool`)
- **interface**: `api.tx.assets.refund`
- **summary**:    Return the deposit (if any) of an asset account. 

   The origin must be Signed. 

   - `id`: The identifier of the asset for the account to be created. 

  - `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.

   Emits `Refunded` event when successful. 
 
### setMetadata(id: `Compact<u32>`, name: `Bytes`, symbol: `Bytes`, decimals: `u8`)
- **interface**: `api.tx.assets.setMetadata`
- **summary**:    Set the metadata for an asset. 

   Origin must be Signed and the sender should be the Owner of the asset `id`. 

   Funds of sender are reserved according to the formula:  `MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into  account any already reserved funds. 

   - `id`: The identifier of the asset to update. 

  - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.

  - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.

  - `decimals`: The number of decimals this asset uses to represent one unit.

   Emits `MetadataSet`. 

   Weight: `O(1)` 
 
### setTeam(id: `Compact<u32>`, issuer: `MultiAddress`, admin: `MultiAddress`, freezer: `MultiAddress`)
- **interface**: `api.tx.assets.setTeam`
- **summary**:    Change the Issuer, Admin and Freezer of an asset. 

   Origin must be Signed and the sender should be the Owner of the asset `id`. 

   - `id`: The identifier of the asset to be frozen. 

  - `issuer`: The new Issuer of this asset.

  - `admin`: The new Admin of this asset.

  - `freezer`: The new Freezer of this asset.

   Emits `TeamChanged`. 

   Weight: `O(1)` 
 
### thaw(id: `Compact<u32>`, who: `MultiAddress`)
- **interface**: `api.tx.assets.thaw`
- **summary**:    Allow unprivileged transfers from an account again. 

   Origin must be Signed and the sender should be the Admin of the asset `id`. 

   - `id`: The identifier of the asset to be frozen. 

  - `who`: The account to be unfrozen.

   Emits `Thawed`. 

   Weight: `O(1)` 
 
### thawAsset(id: `Compact<u32>`)
- **interface**: `api.tx.assets.thawAsset`
- **summary**:    Allow unprivileged transfers for the asset again. 

   Origin must be Signed and the sender should be the Admin of the asset `id`. 

   - `id`: The identifier of the asset to be thawed. 

   Emits `Thawed`. 

   Weight: `O(1)` 
 
### touch(id: `Compact<u32>`)
- **interface**: `api.tx.assets.touch`
- **summary**:    Create an asset account for non-provider assets. 

   A deposit will be taken from the signer account. 

   - `origin`: Must be Signed; the signer account must have sufficient funds for a deposit  to be taken. 

  - `id`: The identifier of the asset for the account to be created.

   Emits `Touched` event when successful. 
 
### transfer(id: `Compact<u32>`, target: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.assets.transfer`
- **summary**:    Move some assets from the sender account to another. 

   Origin must be Signed. 

   - `id`: The identifier of the asset to have some amount transferred. 

  - `target`: The account to be credited.

  - `amount`: The amount by which the sender's balance of assets should be reduced and `target`'s balance increased. The amount actually transferred may be slightly greater in  the case that the transfer would otherwise take the sender balance above zero but below  the minimum balance. Must be greater than zero. 

   Emits `Transferred` with the actual amount transferred. If this takes the source balance  to below the minimum for the asset, then the amount transferred is increased to take it  to zero. 

   Weight: `O(1)`  Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of  `target`. 
 
### transferApproved(id: `Compact<u32>`, owner: `MultiAddress`, destination: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.assets.transferApproved`
- **summary**:    Transfer some asset balance from a previously delegated account to some third-party  account. 

   Origin must be Signed and there must be an approval in place by the `owner` to the  signer. 

   If the entire amount approved for transfer is transferred, then any deposit previously  reserved by `approve_transfer` is unreserved. 

   - `id`: The identifier of the asset. 

  - `owner`: The account which previously approved for a transfer of at least `amount` and from which the asset balance will be withdrawn. 

  - `destination`: The account to which the asset balance of `amount` will be transferred.

  - `amount`: The amount of assets to transfer.

   Emits `TransferredApproved` on success. 

   Weight: `O(1)` 
 
### transferKeepAlive(id: `Compact<u32>`, target: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.assets.transferKeepAlive`
- **summary**:    Move some assets from the sender account to another, keeping the sender account alive. 

   Origin must be Signed. 

   - `id`: The identifier of the asset to have some amount transferred. 

  - `target`: The account to be credited.

  - `amount`: The amount by which the sender's balance of assets should be reduced and `target`'s balance increased. The amount actually transferred may be slightly greater in  the case that the transfer would otherwise take the sender balance above zero but below  the minimum balance. Must be greater than zero. 

   Emits `Transferred` with the actual amount transferred. If this takes the source balance  to below the minimum for the asset, then the amount transferred is increased to take it  to zero. 

   Weight: `O(1)`  Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of  `target`. 
 
### transferOwnership(id: `Compact<u32>`, owner: `MultiAddress`)
- **interface**: `api.tx.assets.transferOwnership`
- **summary**:    Change the Owner of an asset. 

   Origin must be Signed and the sender should be the Owner of the asset `id`. 

   - `id`: The identifier of the asset. 

  - `owner`: The new Owner of this asset.

   Emits `OwnerChanged`. 

   Weight: `O(1)` 

___


## authorship
 
### setUncles(new_uncles: `Vec<SpRuntimeHeader>`)
- **interface**: `api.tx.authorship.setUncles`
- **summary**:    Provide a set of uncles. 

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


## bagsList
 
### putInFrontOf(lighter: `AccountId32`)
- **interface**: `api.tx.bagsList.putInFrontOf`
- **summary**:    Move the caller's Id directly in front of `lighter`. 

   The dispatch origin for this call must be _Signed_ and can only be called by the Id of  the account going in front of `lighter`. 

   Only works if 

  - both nodes are within the same bag,

  - and `origin` has a greater `Score` than `lighter`.
 
### rebag(dislocated: `AccountId32`)
- **interface**: `api.tx.bagsList.rebag`
- **summary**:    Declare that some `dislocated` account has, through rewards or penalties, sufficiently  changed its score that it should properly fall into a different bag than its current  one. 

   Anyone can call this function about any potentially dislocated account. 

   Will always update the stored score of `dislocated` to the correct score, based on  `ScoreProvider`. 

   If `dislocated` does not exists, it returns an error. 

___


## balances
 
### forceTransfer(source: `MultiAddress`, dest: `MultiAddress`, value: `Compact<u128>`)
- **interface**: `api.tx.balances.forceTransfer`
- **summary**:    Exactly as `transfer`, except the origin must be root and the source account may be  specified.   
 
### forceUnreserve(who: `MultiAddress`, amount: `u128`)
- **interface**: `api.tx.balances.forceUnreserve`
- **summary**:    Unreserve some balance from a user by force. 

   Can only be called by ROOT. 
 
### setBalance(who: `MultiAddress`, new_free: `Compact<u128>`, new_reserved: `Compact<u128>`)
- **interface**: `api.tx.balances.setBalance`
- **summary**:    Set the balances of a given account. 

   This will alter `FreeBalance` and `ReservedBalance` in storage. it will  also alter the total issuance of the system (`TotalIssuance`) appropriately.  If the new free or reserved balance is below the existential deposit,  it will reset the account nonce (`frame_system::AccountNonce`). 

   The dispatch origin for this call is `root`. 
 
### transfer(dest: `MultiAddress`, value: `Compact<u128>`)
- **interface**: `api.tx.balances.transfer`
- **summary**:    Transfer some liquid free balance to another account. 

   `transfer` will set the `FreeBalance` of the sender and receiver.  If the sender's account is below the existential deposit as a result  of the transfer, the account will be reaped. 

   The dispatch origin for this call must be `Signed` by the transactor. 

    
 
### transferAll(dest: `MultiAddress`, keep_alive: `bool`)
- **interface**: `api.tx.balances.transferAll`
- **summary**:    Transfer the entire transferable balance from the caller account. 

   NOTE: This function only attempts to transfer _transferable_ balances. This means that  any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be  transferred by this function. To ensure that this function results in a killed account,  you might need to prepare the account by removing any reference counters, storage  deposits, etc... 

   The dispatch origin of this call must be Signed. 

   - `dest`: The recipient of the transfer. 

  - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all of the funds the account has, causing the sender account to be killed (false), or  transfer everything except at least the existential deposit, which will guarantee to  keep the sender account alive (true). #  
 
### transferKeepAlive(dest: `MultiAddress`, value: `Compact<u128>`)
- **interface**: `api.tx.balances.transferKeepAlive`
- **summary**:    Same as the [`transfer`] call, but with a check that the transfer will not kill the  origin account. 

   99% of the time you want [`transfer`] instead. 

   [`transfer`]: struct.Pallet.html#method.transfer 

___


## bounties
 
### acceptCurator(bounty_id: `Compact<u32>`)
- **interface**: `api.tx.bounties.acceptCurator`
- **summary**:    Accept the curator role for a bounty.  A deposit will be reserved from curator and refund upon successful payout. 

   May only be called from the curator. 

    
 
### approveBounty(bounty_id: `Compact<u32>`)
- **interface**: `api.tx.bounties.approveBounty`
- **summary**:    Approve a bounty proposal. At a later time, the bounty will be funded and become active  and the original deposit will be returned. 

   May only be called from `T::ApproveOrigin`. 

    
 
### awardBounty(bounty_id: `Compact<u32>`, beneficiary: `MultiAddress`)
- **interface**: `api.tx.bounties.awardBounty`
- **summary**:    Award bounty to a beneficiary account. The beneficiary will be able to claim the funds  after a delay. 

   The dispatch origin for this call must be the curator of this bounty. 

   - `bounty_id`: Bounty ID to award. 

  - `beneficiary`: The beneficiary account whom will receive the payout.

    
 
### claimBounty(bounty_id: `Compact<u32>`)
- **interface**: `api.tx.bounties.claimBounty`
- **summary**:    Claim the payout from an awarded bounty after payout delay. 

   The dispatch origin for this call must be the beneficiary of this bounty. 

   - `bounty_id`: Bounty ID to claim. 

    
 
### closeBounty(bounty_id: `Compact<u32>`)
- **interface**: `api.tx.bounties.closeBounty`
- **summary**:    Cancel a proposed or active bounty. All the funds will be sent to treasury and  the curator deposit will be unreserved if possible. 

   Only `T::RejectOrigin` is able to cancel a bounty. 

   - `bounty_id`: Bounty ID to cancel. 

    
 
### extendBountyExpiry(bounty_id: `Compact<u32>`, remark: `Bytes`)
- **interface**: `api.tx.bounties.extendBountyExpiry`
- **summary**:    Extend the expiry time of an active bounty. 

   The dispatch origin for this call must be the curator of this bounty. 

   - `bounty_id`: Bounty ID to extend. 

  - `remark`: additional information.

    
 
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
- **summary**:    Assign a curator to a funded bounty. 

   May only be called from `T::ApproveOrigin`. 

    
 
### unassignCurator(bounty_id: `Compact<u32>`)
- **interface**: `api.tx.bounties.unassignCurator`
- **summary**:    Unassign curator from a bounty. 

   This function can only be called by the `RejectOrigin` a signed origin. 

   If this function is called by the `RejectOrigin`, we assume that the curator is  malicious or inactive. As a result, we will slash the curator when possible. 

   If the origin is the curator, we take this as a sign they are unable to do their job and  they willingly give up. We could slash them, but for now we allow them to recover their  deposit and exit without issue. (We may want to change this if it is abused.) 

   Finally, the origin can be anyone if and only if the curator is "inactive". This allows  anyone in the community to call out that a curator is not doing their due diligence, and  we should pick a new curator. In this case the curator should also be slashed. 

    

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


## contracts
 
### call(dest: `MultiAddress`, value: `Compact<u128>`, gas_limit: `Compact<u64>`, storage_deposit_limit: `Option<Compact<u128>>`, data: `Bytes`)
- **interface**: `api.tx.contracts.call`
- **summary**:    Makes a call to an account, optionally transferring some balance. 

   #### Parameters 

   * `dest`: Address of the contract to call. 

  * `value`: The balance to transfer from the `origin` to `dest`.

  * `gas_limit`: The gas limit enforced when executing the constructor.

  * `storage_deposit_limit`: The maximum amount of balance that can be charged from the caller to pay for the storage consumed. 

  * `data`: The input data to pass to the contract.

   * If the account is a smart-contract account, the associated code will be  executed and any value will be transferred. 

  * If the account is a regular account, any value will be transferred.

  * If no account exists and the call value is not less than `existential_deposit`, a regular account will be created and any value will be transferred. 
 
### instantiate(value: `Compact<u128>`, gas_limit: `Compact<u64>`, storage_deposit_limit: `Option<Compact<u128>>`, code_hash: `H256`, data: `Bytes`, salt: `Bytes`)
- **interface**: `api.tx.contracts.instantiate`
- **summary**:    Instantiates a contract from a previously deployed wasm binary. 

   This function is identical to [`Self::instantiate_with_code`] but without the  code deployment step. Instead, the `code_hash` of an on-chain deployed wasm binary  must be supplied. 
 
### instantiateWithCode(value: `Compact<u128>`, gas_limit: `Compact<u64>`, storage_deposit_limit: `Option<Compact<u128>>`, code: `Bytes`, data: `Bytes`, salt: `Bytes`)
- **interface**: `api.tx.contracts.instantiateWithCode`
- **summary**:    Instantiates a new contract from the supplied `code` optionally transferring  some balance. 

   This dispatchable has the same effect as calling [`Self::upload_code`] +  [`Self::instantiate`]. Bundling them together provides efficiency gains. Please  also check the documentation of [`Self::upload_code`]. 

   #### Parameters 

   * `value`: The balance to transfer from the `origin` to the newly created contract. 

  * `gas_limit`: The gas limit enforced when executing the constructor.

  * `storage_deposit_limit`: The maximum amount of balance that can be charged/reserved from the caller to pay for the storage consumed. 

  * `code`: The contract code to deploy in raw bytes.

  * `data`: The input data to pass to the contract constructor.

  * `salt`: Used for the address derivation. See [`Pallet::contract_address`].

   Instantiation is executed as follows: 

   - The supplied `code` is instrumented, deployed, and a `code_hash` is created for that  code. 

  - If the `code_hash` already exists on the chain the underlying `code` will be shared.

  - The destination address is computed based on the sender, code_hash and the salt.

  - The smart-contract account is created at the computed address.

  - The `value` is transferred to the new account.

  - The `deploy` function is executed in the context of the newly-created account.
 
### removeCode(code_hash: `H256`)
- **interface**: `api.tx.contracts.removeCode`
- **summary**:    Remove the code stored under `code_hash` and refund the deposit to its owner. 

   A code can only be removed by its original uploader (its owner) and only if it is  not used by any contract. 
 
### setCode(dest: `MultiAddress`, code_hash: `H256`)
- **interface**: `api.tx.contracts.setCode`
- **summary**:    Privileged function that changes the code of an existing contract. 

   This takes care of updating refcounts and all other necessary operations. Returns  an error if either the `code_hash` or `dest` do not exist. 

   #### Note 

   This does **not** change the address of the contract in question. This means  that the contract address is no longer derived from its code hash after calling  this dispatchable. 
 
### uploadCode(code: `Bytes`, storage_deposit_limit: `Option<Compact<u128>>`)
- **interface**: `api.tx.contracts.uploadCode`
- **summary**:    Upload new `code` without instantiating a contract from it. 

   If the code does not already exist a deposit is reserved from the caller  and unreserved only when [`Self::remove_code`] is called. The size of the reserve  depends on the instrumented size of the the supplied `code`. 

   If the code already exists in storage it will still return `Ok` and upgrades  the in storage version to the current  [`InstructionWeights::version`](InstructionWeights). 

   #### Note 

   Anyone can instantiate a contract from any uploaded code and thus prevent its removal.  To avoid this situation a constructor could employ access control so that it can  only be instantiated by permissioned entities. The same is true when uploading  through [`Self::instantiate_with_code`]. 

___


## convictionVoting
 
### delegate(class: `u16`, to: `AccountId32`, conviction: `PalletConvictionVotingConviction`, balance: `u128`)
- **interface**: `api.tx.convictionVoting.delegate`
- **summary**:    Delegate the voting power (with some given conviction) of the sending account for a  particular class of polls. 

   The balance delegated is locked for as long as it's delegated, and thereafter for the  time appropriate for the conviction's lock period. 

   The dispatch origin of this call must be _Signed_, and the signing account must either: 

  - be delegating already; or

  - have no voting activity (if there is, then it will need to be removed/consolidated through `reap_vote` or `unvote`). 

   - `to`: The account whose voting the `target` account's voting power will follow. 

  - `class`: The class of polls to delegate. To delegate multiple classes, multiple calls to this function are required. 

  - `conviction`: The conviction that will be attached to the delegated votes. When the account is undelegated, the funds will be locked for the corresponding period. 

  - `balance`: The amount of the account's balance to be used in delegating. This must not be more than the account's current balance. 

   Emits `Delegated`. 

   Weight: `O(R)` where R is the number of polls the voter delegating to has  voted on. Weight is initially charged as if maximum votes, but is refunded later. 
 
### removeOtherVote(target: `AccountId32`, class: `u16`, index: `u32`)
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

   Tokens may be unlocked following once an amount of time consistent with the lock period  of the conviction with which the delegation was issued. 

   The dispatch origin of this call must be _Signed_ and the signing account must be  currently delegating. 

   - `class`: The class of polls to remove the delegation from. 

   Emits `Undelegated`. 

   Weight: `O(R)` where R is the number of polls the voter delegating to has  voted on. Weight is initially charged as if maximum votes, but is refunded later. 
 
### unlock(class: `u16`, target: `AccountId32`)
- **interface**: `api.tx.convictionVoting.unlock`
- **summary**:    Remove the lock caused prior voting/delegating which has expired within a particluar  class. 

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


## council
 
### close(proposal_hash: `H256`, index: `Compact<u32>`, proposal_weight_bound: `Compact<u64>`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.council.close`
- **summary**:    Close a vote that is either approved, disapproved or whose voting period has ended. 

   May be called by any signed account in order to finish voting and close the proposal. 

   If called before the end of the voting period it will only close the vote if it is  has enough votes to be approved or disapproved. 

   If called after the end of the voting period abstentions are counted as rejections  unless there is a prime member set and the prime member cast an approval. 

   If the close operation completes successfully with disapproval, the transaction fee will  be waived. Otherwise execution of the approved operation will be charged to the caller. 

   + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed  proposal.  + `length_bound`: The upper bound for the length of the proposal in storage. Checked via  `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length. 

    
 
### disapproveProposal(proposal_hash: `H256`)
- **interface**: `api.tx.council.disapproveProposal`
- **summary**:    Disapprove a proposal, close, and remove it from the system, regardless of its current  state. 

   Must be called by the Root origin. 

   Parameters: 

  * `proposal_hash`: The hash of the proposal that should be disapproved.

    
 
### execute(proposal: `Call`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.council.execute`
- **summary**:    Dispatch a proposal from a member using the `Member` origin. 

   Origin must be a member of the collective. 

    
 
### propose(threshold: `Compact<u32>`, proposal: `Call`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.council.propose`
- **summary**:    Add a new proposal to either be voted on or executed directly. 

   Requires the sender to be member. 

   `threshold` determines whether `proposal` is executed directly (`threshold < 2`)  or put up for voting. 

    
 
### setMembers(new_members: `Vec<AccountId32>`, prime: `Option<AccountId32>`, old_count: `u32`)
- **interface**: `api.tx.council.setMembers`
- **summary**:    Set the collective's membership. 

   - `new_members`: The new member list. Be nice to the chain and provide it sorted. 

  - `prime`: The prime member whose vote sets the default.

  - `old_count`: The upper bound for the previous number of members in storage. Used for weight estimation. 

   Requires root origin. 

   NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but  the weight estimations rely on it to estimate dispatchable weight. 

   #### WARNING: 

   The `pallet-collective` can also be managed by logic outside of the pallet through the  implementation of the trait [`ChangeMembers`].  Any call to `set_members` must be careful that the member set doesn't get out of sync  with other logic managing the member set. 

    
 
### vote(proposal: `H256`, index: `Compact<u32>`, approve: `bool`)
- **interface**: `api.tx.council.vote`
- **summary**:    Add an aye or nay vote for the sender to the given proposal. 

   Requires the sender to be a member. 

   Transaction fees will be waived if the member is voting on any particular proposal  for the first time and the call is successful. Subsequent vote changes will charge a  fee.   

___


## democracy
 
### blacklist(proposal_hash: `H256`, maybe_ref_index: `Option<u32>`)
- **interface**: `api.tx.democracy.blacklist`
- **summary**:    Permanently place a proposal into the blacklist. This prevents it from ever being  proposed again. 

   If called on a queued public or external proposal, then this will result in it being  removed. If the `ref_index` supplied is an active referendum with the proposal hash,  then it will be cancelled. 

   The dispatch origin of this call must be `BlacklistOrigin`. 

   - `proposal_hash`: The proposal hash to blacklist permanently. 

  - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be cancelled. 

   Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a  reasonable value). 
 
### cancelProposal(prop_index: `Compact<u32>`)
- **interface**: `api.tx.democracy.cancelProposal`
- **summary**:    Remove a proposal. 

   The dispatch origin of this call must be `CancelProposalOrigin`. 

   - `prop_index`: The index of the proposal to cancel. 

   Weight: `O(p)` where `p = PublicProps::<T>::decode_len()` 
 
### cancelQueued(which: `u32`)
- **interface**: `api.tx.democracy.cancelQueued`
- **summary**:    Cancel a proposal queued for enactment. 

   The dispatch origin of this call must be _Root_. 

   - `which`: The index of the referendum to cancel. 

   Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`. 
 
### cancelReferendum(ref_index: `Compact<u32>`)
- **interface**: `api.tx.democracy.cancelReferendum`
- **summary**:    Remove a referendum. 

   The dispatch origin of this call must be _Root_. 

   - `ref_index`: The index of the referendum to cancel. 

   Weight: `O(1)`. 
 
### clearPublicProposals()
- **interface**: `api.tx.democracy.clearPublicProposals`
- **summary**:    Clears all public proposals. 

   The dispatch origin of this call must be _Root_. 

   Weight: `O(1)`. 
 
### delegate(to: `AccountId32`, conviction: `PalletDemocracyConviction`, balance: `u128`)
- **interface**: `api.tx.democracy.delegate`
- **summary**:    Delegate the voting power (with some given conviction) of the sending account. 

   The balance delegated is locked for as long as it's delegated, and thereafter for the  time appropriate for the conviction's lock period. 

   The dispatch origin of this call must be _Signed_, and the signing account must either: 

  - be delegating already; or

  - have no voting activity (if there is, then it will need to be removed/consolidated through `reap_vote` or `unvote`). 

   - `to`: The account whose voting the `target` account's voting power will follow. 

  - `conviction`: The conviction that will be attached to the delegated votes. When the account is undelegated, the funds will be locked for the corresponding period. 

  - `balance`: The amount of the account's balance to be used in delegating. This must not be more than the account's current balance. 

   Emits `Delegated`. 

   Weight: `O(R)` where R is the number of referendums the voter delegating to has  voted on. Weight is charged as if maximum votes. 
 
### emergencyCancel(ref_index: `u32`)
- **interface**: `api.tx.democracy.emergencyCancel`
- **summary**:    Schedule an emergency cancellation of a referendum. Cannot happen twice to the same  referendum. 

   The dispatch origin of this call must be `CancellationOrigin`. 

   -`ref_index`: The index of the referendum to cancel. 

   Weight: `O(1)`. 
 
### enactProposal(proposal_hash: `H256`, index: `u32`)
- **interface**: `api.tx.democracy.enactProposal`
- **summary**:    Enact a proposal from a referendum. For now we just make the weight be the maximum. 
 
### externalPropose(proposal_hash: `H256`)
- **interface**: `api.tx.democracy.externalPropose`
- **summary**:    Schedule a referendum to be tabled once it is legal to schedule an external  referendum. 

   The dispatch origin of this call must be `ExternalOrigin`. 

   - `proposal_hash`: The preimage hash of the proposal. 

   Weight: `O(V)` with V number of vetoers in the blacklist of proposal.  Decoding vec of length V. Charged as maximum 
 
### externalProposeDefault(proposal_hash: `H256`)
- **interface**: `api.tx.democracy.externalProposeDefault`
- **summary**:    Schedule a negative-turnout-bias referendum to be tabled next once it is legal to  schedule an external referendum. 

   The dispatch of this call must be `ExternalDefaultOrigin`. 

   - `proposal_hash`: The preimage hash of the proposal. 

   Unlike `external_propose`, blacklisting has no effect on this and it may replace a  pre-scheduled `external_propose` call. 

   Weight: `O(1)` 
 
### externalProposeMajority(proposal_hash: `H256`)
- **interface**: `api.tx.democracy.externalProposeMajority`
- **summary**:    Schedule a majority-carries referendum to be tabled next once it is legal to schedule  an external referendum. 

   The dispatch of this call must be `ExternalMajorityOrigin`. 

   - `proposal_hash`: The preimage hash of the proposal. 

   Unlike `external_propose`, blacklisting has no effect on this and it may replace a  pre-scheduled `external_propose` call. 

   Weight: `O(1)` 
 
### fastTrack(proposal_hash: `H256`, voting_period: `u32`, delay: `u32`)
- **interface**: `api.tx.democracy.fastTrack`
- **summary**:    Schedule the currently externally-proposed majority-carries referendum to be tabled  immediately. If there is no externally-proposed referendum currently, or if there is one  but it is not a majority-carries referendum then it fails. 

   The dispatch of this call must be `FastTrackOrigin`. 

   - `proposal_hash`: The hash of the current external proposal. 

  - `voting_period`: The period that is allowed for voting on this proposal. Increased to `FastTrackVotingPeriod` if too low. 

  - `delay`: The number of block after voting has ended in approval and this should be enacted. This doesn't have a minimum amount. 

   Emits `Started`. 

   Weight: `O(1)` 
 
### noteImminentPreimage(encoded_proposal: `Bytes`)
- **interface**: `api.tx.democracy.noteImminentPreimage`
- **summary**:    Register the preimage for an upcoming proposal. This requires the proposal to be  in the dispatch queue. No deposit is needed. When this call is successful, i.e.  the preimage has not been uploaded before and matches some imminent proposal,  no fee is paid. 

   The dispatch origin of this call must be _Signed_. 

   - `encoded_proposal`: The preimage of a proposal. 

   Emits `PreimageNoted`. 

   Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit). 
 
### noteImminentPreimageOperational(encoded_proposal: `Bytes`)
- **interface**: `api.tx.democracy.noteImminentPreimageOperational`
- **summary**:    Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`. 
 
### notePreimage(encoded_proposal: `Bytes`)
- **interface**: `api.tx.democracy.notePreimage`
- **summary**:    Register the preimage for an upcoming proposal. This doesn't require the proposal to be  in the dispatch queue but does require a deposit, returned once enacted. 

   The dispatch origin of this call must be _Signed_. 

   - `encoded_proposal`: The preimage of a proposal. 

   Emits `PreimageNoted`. 

   Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit). 
 
### notePreimageOperational(encoded_proposal: `Bytes`)
- **interface**: `api.tx.democracy.notePreimageOperational`
- **summary**:    Same as `note_preimage` but origin is `OperationalPreimageOrigin`. 
 
### propose(proposal_hash: `H256`, value: `Compact<u128>`)
- **interface**: `api.tx.democracy.propose`
- **summary**:    Propose a sensitive action to be taken. 

   The dispatch origin of this call must be _Signed_ and the sender must  have funds to cover the deposit. 

   - `proposal_hash`: The hash of the proposal preimage. 

  - `value`: The amount of deposit (must be at least `MinimumDeposit`).

   Emits `Proposed`. 

   Weight: `O(p)` 
 
### reapPreimage(proposal_hash: `H256`, proposal_len_upper_bound: `Compact<u32>`)
- **interface**: `api.tx.democracy.reapPreimage`
- **summary**:    Remove an expired proposal preimage and collect the deposit. 

   The dispatch origin of this call must be _Signed_. 

   - `proposal_hash`: The preimage hash of a proposal. 

  - `proposal_length_upper_bound`: an upper bound on length of the proposal. Extrinsic is weighted according to this value with no refund. 

   This will only work after `VotingPeriod` blocks from the time that the preimage was  noted, if it's the same account doing it. If it's a different account, then it'll only  work an additional `EnactmentPeriod` later. 

   Emits `PreimageReaped`. 

   Weight: `O(D)` where D is length of proposal. 
 
### removeOtherVote(target: `AccountId32`, index: `u32`)
- **interface**: `api.tx.democracy.removeOtherVote`
- **summary**:    Remove a vote for a referendum. 

   If the `target` is equal to the signer, then this function is exactly equivalent to  `remove_vote`. If not equal to the signer, then the vote must have expired,  either because the referendum was cancelled, because the voter lost the referendum or  because the conviction period is over. 

   The dispatch origin of this call must be _Signed_. 

   - `target`: The account of the vote to be removed; this account must have voted for  referendum `index`. 

  - `index`: The index of referendum of the vote to be removed.

   Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.  Weight is calculated for the maximum number of vote. 
 
### removeVote(index: `u32`)
- **interface**: `api.tx.democracy.removeVote`
- **summary**:    Remove a vote for a referendum. 

   If: 

  - the referendum was cancelled, or

  - the referendum is ongoing, or

  - the referendum has ended such that

  - the vote of the account was in opposition to the result; or

  - there was no conviction to the account's vote; or

  - the account made a split vote ...then the vote is removed cleanly and a following call to `unlock` may result in more  funds being available. 

   If, however, the referendum has ended and: 

  - it finished corresponding to the vote of the account, and

  - the account made a standard vote with conviction, and

  - the lock period of the conviction is not over ...then the lock will be aggregated into the overall account's lock, which may involve 

  *overlocking* (where the two locks are combined into a single lock that is the maximum of both the amount locked and the time is it locked for). 

   The dispatch origin of this call must be _Signed_, and the signer must have a vote  registered for referendum `index`. 

   - `index`: The index of referendum of the vote to be removed. 

   Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.  Weight is calculated for the maximum number of vote. 
 
### second(proposal: `Compact<u32>`, seconds_upper_bound: `Compact<u32>`)
- **interface**: `api.tx.democracy.second`
- **summary**:    Signals agreement with a particular proposal. 

   The dispatch origin of this call must be _Signed_ and the sender  must have funds to cover the deposit, equal to the original deposit. 

   - `proposal`: The index of the proposal to second. 

  - `seconds_upper_bound`: an upper bound on the current number of seconds on this proposal. Extrinsic is weighted according to this value with no refund. 

   Weight: `O(S)` where S is the number of seconds a proposal already has. 
 
### undelegate()
- **interface**: `api.tx.democracy.undelegate`
- **summary**:    Undelegate the voting power of the sending account. 

   Tokens may be unlocked following once an amount of time consistent with the lock period  of the conviction with which the delegation was issued. 

   The dispatch origin of this call must be _Signed_ and the signing account must be  currently delegating. 

   Emits `Undelegated`. 

   Weight: `O(R)` where R is the number of referendums the voter delegating to has  voted on. Weight is charged as if maximum votes. 
 
### unlock(target: `AccountId32`)
- **interface**: `api.tx.democracy.unlock`
- **summary**:    Unlock tokens that have an expired lock. 

   The dispatch origin of this call must be _Signed_. 

   - `target`: The account to remove the lock on. 

   Weight: `O(R)` with R number of vote of target. 
 
### vetoExternal(proposal_hash: `H256`)
- **interface**: `api.tx.democracy.vetoExternal`
- **summary**:    Veto and blacklist the external proposal hash. 

   The dispatch origin of this call must be `VetoOrigin`. 

   - `proposal_hash`: The preimage hash of the proposal to veto and blacklist. 

   Emits `Vetoed`. 

   Weight: `O(V + log(V))` where V is number of `existing vetoers` 
 
### vote(ref_index: `Compact<u32>`, vote: `PalletDemocracyVoteAccountVote`)
- **interface**: `api.tx.democracy.vote`
- **summary**:    Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;  otherwise it is a vote to keep the status quo. 

   The dispatch origin of this call must be _Signed_. 

   - `ref_index`: The index of the referendum to vote for. 

  - `vote`: The vote configuration.

   Weight: `O(R)` where R is the number of referendums the voter has voted on. 

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


## elections
 
### cleanDefunctVoters(num_voters: `u32`, num_defunct: `u32`)
- **interface**: `api.tx.elections.cleanDefunctVoters`
- **summary**:    Clean all voters who are defunct (i.e. they do not serve any purpose at all). The  deposit of the removed voters are returned. 

   This is an root function to be used only for cleaning the state. 

   The dispatch origin of this call must be root. 

    
 
### removeMember(who: `MultiAddress`, has_replacement: `bool`)
- **interface**: `api.tx.elections.removeMember`
- **summary**:    Remove a particular member from the set. This is effective immediately and the bond of  the outgoing member is slashed. 

   If a runner-up is available, then the best runner-up will be removed and replaces the  outgoing member. Otherwise, a new phragmen election is started. 

   The dispatch origin of this call must be root. 

   Note that this does not affect the designated block number of the next election. 

    
 
### removeVoter()
- **interface**: `api.tx.elections.removeVoter`
- **summary**:    Remove `origin` as a voter. 

   This removes the lock and returns the deposit. 

   The dispatch origin of this call must be signed and be a voter. 
 
### renounceCandidacy(renouncing: `PalletElectionsPhragmenRenouncing`)
- **interface**: `api.tx.elections.renounceCandidacy`
- **summary**:    Renounce one's intention to be a candidate for the next election round. 3 potential  outcomes exist: 

   - `origin` is a candidate and not elected in any set. In this case, the deposit is  unreserved, returned and origin is removed as a candidate. 

  - `origin` is a current runner-up. In this case, the deposit is unreserved, returned and origin is removed as a runner-up. 

  - `origin` is a current member. In this case, the deposit is unreserved and origin is removed as a member, consequently not being a candidate for the next round anymore.  Similar to [`remove_member`](Self::remove_member), if replacement runners exists, they  are immediately used. If the prime is renouncing, then no prime will exist until the  next round. 

   The dispatch origin of this call must be signed, and have one of the above roles. 

    
 
### submitCandidacy(candidate_count: `Compact<u32>`)
- **interface**: `api.tx.elections.submitCandidacy`
- **summary**:    Submit oneself for candidacy. A fixed amount of deposit is recorded. 

   All candidates are wiped at the end of the term. They either become a member/runner-up,  or leave the system while their deposit is slashed. 

   The dispatch origin of this call must be signed. 

   #### Warning 

   Even if a candidate ends up being a member, they must call [`Call::renounce_candidacy`]  to get their deposit back. Losing the spot in an election will always lead to a slash. 

    
 
### vote(votes: `Vec<AccountId32>`, value: `Compact<u128>`)
- **interface**: `api.tx.elections.vote`
- **summary**:    Vote for a set of candidates for the upcoming round of election. This can be called to  set the initial votes, or update already existing votes. 

   Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is  reserved. The deposit is based on the number of votes and can be updated over time. 

   The `votes` should: 

  - not be empty.

  - be less than the number of possible candidates. Note that all current members and runners-up are also automatically candidates for the next round. 

   If `value` is more than `who`'s free balance, then the maximum of the two is used. 

   The dispatch origin of this call must be signed. 

   #### Warning 

   It is the responsibility of the caller to **NOT** place all of their balance into the  lock and keep some for further operations. 

    

___


## gilt
 
### placeBid(amount: `Compact<u128>`, duration: `u32`)
- **interface**: `api.tx.gilt.placeBid`
- **summary**:    Place a bid for a gilt to be issued. 

   Origin must be Signed, and account must have at least `amount` in free balance. 

   - `amount`: The amount of the bid; these funds will be reserved. If the bid is  successfully elevated into an issued gilt, then these funds will continue to be  reserved until the gilt expires. Must be at least `MinFreeze`. 

  - `duration`: The number of periods for which the funds will be locked if the gilt is issued. It will expire only after this period has elapsed after the point of issuance.  Must be greater than 1 and no more than `QueueCount`. 

   Complexities: 

  - `Queues[duration].len()` (just take max).
 
### retractBid(amount: `Compact<u128>`, duration: `u32`)
- **interface**: `api.tx.gilt.retractBid`
- **summary**:    Retract a previously placed bid. 

   Origin must be Signed, and the account should have previously issued a still-active bid  of `amount` for `duration`. 

   - `amount`: The amount of the previous bid. 

  - `duration`: The duration of the previous bid.
 
### setTarget(target: `Compact<Perquintill>`)
- **interface**: `api.tx.gilt.setTarget`
- **summary**:    Set target proportion of gilt-funds. 

   Origin must be `AdminOrigin`. 

   - `target`: The target proportion of effective issued funds that should be under gilts  at any one time. 
 
### thaw(index: `Compact<u32>`)
- **interface**: `api.tx.gilt.thaw`
- **summary**:    Remove an active but expired gilt. Reserved funds under gilt are freed and balance is  adjusted to ensure that the funds grow or shrink to maintain the equivalent proportion  of effective total issued funds. 

   Origin must be Signed and the account must be the owner of the gilt of the given index. 

   - `index`: The index of the gilt to be thawed. 

___


## grandpa
 
### noteStalled(delay: `u32`, best_finalized_block_number: `u32`)
- **interface**: `api.tx.grandpa.noteStalled`
- **summary**:    Note that the current authority set of the GRANDPA finality gadget has stalled. 

   This will trigger a forced authority set change at the beginning of the next session, to  be enacted `delay` blocks after that. The `delay` should be high enough to safely assume  that the block signalling the forced change will not be re-orged e.g. 1000 blocks.  The block production rate (which may be slowed down because of finality lagging) should  be taken into account when choosing the `delay`. The GRANDPA voters based on the new  authority will start voting on top of `best_finalized_block_number` for new finalized  blocks. `best_finalized_block_number` should be the highest of the latest finalized  block of all validators of the new authority set. 

   Only callable by root. 
 
### reportEquivocation(equivocation_proof: `SpFinalityGrandpaEquivocationProof`, key_owner_proof: `SpSessionMembershipProof`)
- **interface**: `api.tx.grandpa.reportEquivocation`
- **summary**:    Report voter equivocation/misbehavior. This method will verify the  equivocation proof and validate the given key ownership proof  against the extracted offender. If both are valid, the offence  will be reported. 
 
### reportEquivocationUnsigned(equivocation_proof: `SpFinalityGrandpaEquivocationProof`, key_owner_proof: `SpSessionMembershipProof`)
- **interface**: `api.tx.grandpa.reportEquivocationUnsigned`
- **summary**:    Report voter equivocation/misbehavior. This method will verify the  equivocation proof and validate the given key ownership proof  against the extracted offender. If both are valid, the offence  will be reported. 

   This extrinsic must be called unsigned and it is expected that only  block authors will call it (validated in `ValidateUnsigned`), as such  if the block author is defined it will be defined as the equivocation  reporter. 

___


## identity
 
### addRegistrar(account: `AccountId32`)
- **interface**: `api.tx.identity.addRegistrar`
- **summary**:    Add a registrar to the system. 

   The dispatch origin for this call must be `T::RegistrarOrigin`. 

   - `account`: the account of the registrar. 

   Emits `RegistrarAdded` if successful. 

    
 
### addSub(sub: `MultiAddress`, data: `Data`)
- **interface**: `api.tx.identity.addSub`
- **summary**:    Add the given account to the sender's subs. 

   Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated  to the sender. 

   The dispatch origin for this call must be _Signed_ and the sender must have a registered  sub identity of `sub`. 
 
### cancelRequest(reg_index: `u32`)
- **interface**: `api.tx.identity.cancelRequest`
- **summary**:    Cancel a previous request. 

   Payment: A previously reserved deposit is returned on success. 

   The dispatch origin for this call must be _Signed_ and the sender must have a  registered identity. 

   - `reg_index`: The index of the registrar whose judgement is no longer requested. 

   Emits `JudgementUnrequested` if successful. 

    
 
### clearIdentity()
- **interface**: `api.tx.identity.clearIdentity`
- **summary**:    Clear an account's identity info and all sub-accounts and return all deposits. 

   Payment: All reserved balances on the account are returned. 

   The dispatch origin for this call must be _Signed_ and the sender must have a registered  identity. 

   Emits `IdentityCleared` if successful. 

    
 
### killIdentity(target: `MultiAddress`)
- **interface**: `api.tx.identity.killIdentity`
- **summary**:    Remove an account's identity and sub-account information and slash the deposits. 

   Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by  `Slash`. Verification request deposits are not returned; they should be cancelled  manually using `cancel_request`. 

   The dispatch origin for this call must match `T::ForceOrigin`. 

   - `target`: the account whose identity the judgement is upon. This must be an account  with a registered identity. 

   Emits `IdentityKilled` if successful. 

    
 
### provideJudgement(reg_index: `Compact<u32>`, target: `MultiAddress`, judgement: `PalletIdentityJudgement`)
- **interface**: `api.tx.identity.provideJudgement`
- **summary**:    Provide a judgement for an account's identity. 

   The dispatch origin for this call must be _Signed_ and the sender must be the account  of the registrar whose index is `reg_index`. 

   - `reg_index`: the index of the registrar whose judgement is being made. 

  - `target`: the account whose identity the judgement is upon. This must be an account with a registered identity. 

  - `judgement`: the judgement of the registrar of index `reg_index` about `target`.

   Emits `JudgementGiven` if successful. 

    
 
### quitSub()
- **interface**: `api.tx.identity.quitSub`
- **summary**:    Remove the sender as a sub-account. 

   Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated  to the sender (*not* the original depositor). 

   The dispatch origin for this call must be _Signed_ and the sender must have a registered  super-identity. 

   NOTE: This should not normally be used, but is provided in the case that the non-  controller of an account is maliciously registered as a sub-account. 
 
### removeSub(sub: `MultiAddress`)
- **interface**: `api.tx.identity.removeSub`
- **summary**:    Remove the given account from the sender's subs. 

   Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated  to the sender. 

   The dispatch origin for this call must be _Signed_ and the sender must have a registered  sub identity of `sub`. 
 
### renameSub(sub: `MultiAddress`, data: `Data`)
- **interface**: `api.tx.identity.renameSub`
- **summary**:    Alter the associated name of the given sub-account. 

   The dispatch origin for this call must be _Signed_ and the sender must have a registered  sub identity of `sub`. 
 
### requestJudgement(reg_index: `Compact<u32>`, max_fee: `Compact<u128>`)
- **interface**: `api.tx.identity.requestJudgement`
- **summary**:    Request a judgement from a registrar. 

   Payment: At most `max_fee` will be reserved for payment to the registrar if judgement  given. 

   The dispatch origin for this call must be _Signed_ and the sender must have a  registered identity. 

   - `reg_index`: The index of the registrar whose judgement is requested. 

  - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:

   ```nocompile  Self::registrars().get(reg_index).unwrap().fee  ``` 

   Emits `JudgementRequested` if successful. 

    
 
### setAccountId(index: `Compact<u32>`, new: `AccountId32`)
- **interface**: `api.tx.identity.setAccountId`
- **summary**:    Change the account associated with a registrar. 

   The dispatch origin for this call must be _Signed_ and the sender must be the account  of the registrar whose index is `index`. 

   - `index`: the index of the registrar whose fee is to be set. 

  - `new`: the new account ID.

    
 
### setFee(index: `Compact<u32>`, fee: `Compact<u128>`)
- **interface**: `api.tx.identity.setFee`
- **summary**:    Set the fee required for a judgement to be requested from a registrar. 

   The dispatch origin for this call must be _Signed_ and the sender must be the account  of the registrar whose index is `index`. 

   - `index`: the index of the registrar whose fee is to be set. 

  - `fee`: the new fee.

    
 
### setFields(index: `Compact<u32>`, fields: `PalletIdentityBitFlags`)
- **interface**: `api.tx.identity.setFields`
- **summary**:    Set the field information for a registrar. 

   The dispatch origin for this call must be _Signed_ and the sender must be the account  of the registrar whose index is `index`. 

   - `index`: the index of the registrar whose fee is to be set. 

  - `fields`: the fields that the registrar concerns themselves with.

    
 
### setIdentity(info: `PalletIdentityIdentityInfo`)
- **interface**: `api.tx.identity.setIdentity`
- **summary**:    Set an account's identity information and reserve the appropriate deposit. 

   If the account already has identity information, the deposit is taken as part payment  for the new deposit. 

   The dispatch origin for this call must be _Signed_. 

   - `info`: The identity information. 

   Emits `IdentitySet` if successful. 

    
 
### setSubs(subs: `Vec<(AccountId32,Data)>`)
- **interface**: `api.tx.identity.setSubs`
- **summary**:    Set the sub-accounts of the sender. 

   Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned  and an amount `SubAccountDeposit` will be reserved for each item in `subs`. 

   The dispatch origin for this call must be _Signed_ and the sender must have a registered  identity. 

   - `subs`: The identity's (new) sub-accounts. 

    

___


## imOnline
 
### heartbeat(heartbeat: `PalletImOnlineHeartbeat`, signature: `PalletImOnlineSr25519AppSr25519Signature`)
- **interface**: `api.tx.imOnline.heartbeat`
- **summary**:     

___


## indices
 
### claim(index: `u32`)
- **interface**: `api.tx.indices.claim`
- **summary**:    Assign an previously unassigned index. 

   Payment: `Deposit` is reserved from the sender account. 

   The dispatch origin for this call must be _Signed_. 

   - `index`: the index to be claimed. This must not be in use. 

   Emits `IndexAssigned` if successful. 

    
 
### forceTransfer(new: `AccountId32`, index: `u32`, freeze: `bool`)
- **interface**: `api.tx.indices.forceTransfer`
- **summary**:    Force an index to an account. This doesn't require a deposit. If the index is already  held, then any deposit is reimbursed to its current owner. 

   The dispatch origin for this call must be _Root_. 

   - `index`: the index to be (re-)assigned. 

  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.

  - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.

   Emits `IndexAssigned` if successful. 

    
 
### free(index: `u32`)
- **interface**: `api.tx.indices.free`
- **summary**:    Free up an index owned by the sender. 

   Payment: Any previous deposit placed for the index is unreserved in the sender account. 

   The dispatch origin for this call must be _Signed_ and the sender must own the index. 

   - `index`: the index to be freed. This must be owned by the sender. 

   Emits `IndexFreed` if successful. 

    
 
### freeze(index: `u32`)
- **interface**: `api.tx.indices.freeze`
- **summary**:    Freeze an index so it will always point to the sender account. This consumes the  deposit. 

   The dispatch origin for this call must be _Signed_ and the signing account must have a  non-frozen account `index`. 

   - `index`: the index to be frozen in place. 

   Emits `IndexFrozen` if successful. 

    
 
### transfer(new: `AccountId32`, index: `u32`)
- **interface**: `api.tx.indices.transfer`
- **summary**:    Assign an index already owned by the sender to another account. The balance reservation  is effectively transferred to the new account. 

   The dispatch origin for this call must be _Signed_. 

   - `index`: the index to be re-assigned. This must be owned by the sender. 

  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.

   Emits `IndexAssigned` if successful. 

    

___


## lottery
 
### buyTicket(call: `Call`)
- **interface**: `api.tx.lottery.buyTicket`
- **summary**:    Buy a ticket to enter the lottery. 

   This extrinsic acts as a passthrough function for `call`. In all  situations where `call` alone would succeed, this extrinsic should  succeed. 

   If `call` is successful, then we will attempt to purchase a ticket,  which may fail silently. To detect success of a ticket purchase, you  should listen for the `TicketBought` event. 

   This extrinsic must be called by a signed origin. 
 
### setCalls(calls: `Vec<Call>`)
- **interface**: `api.tx.lottery.setCalls`
- **summary**:    Set calls in storage which can be used to purchase a lottery ticket. 

   This function only matters if you use the `ValidateCall` implementation  provided by this pallet, which uses storage to determine the valid calls. 

   This extrinsic must be called by the Manager origin. 
 
### startLottery(price: `u128`, length: `u32`, delay: `u32`, repeat: `bool`)
- **interface**: `api.tx.lottery.startLottery`
- **summary**:    Start a lottery using the provided configuration. 

   This extrinsic must be called by the `ManagerOrigin`. 

   Parameters: 

   * `price`: The cost of a single ticket. 

  * `length`: How long the lottery should run for starting at the current block.

  * `delay`: How long after the lottery end we should wait before picking a winner.

  * `repeat`: If the lottery should repeat when completed.
 
### stopRepeat()
- **interface**: `api.tx.lottery.stopRepeat`
- **summary**:    If a lottery is repeating, you can use this to stop the repeat.  The lottery will continue to run to completion. 

   This extrinsic must be called by the `ManagerOrigin`. 

___


## multisig
 
### approveAsMulti(threshold: `u16`, other_signatories: `Vec<AccountId32>`, maybe_timepoint: `Option<PalletMultisigTimepoint>`, call_hash: `[u8;32]`, max_weight: `u64`)
- **interface**: `api.tx.multisig.approveAsMulti`
- **summary**:    Register approval for a dispatch to be made from a deterministic composite account if  approved by a total of `threshold - 1` of `other_signatories`. 

   Payment: `DepositBase` will be reserved if this is the first approval, plus  `threshold` times `DepositFactor`. It is returned once this dispatch happens or  is cancelled. 

   The dispatch origin for this call must be _Signed_. 

   - `threshold`: The total number of approvals for this dispatch before it is executed. 

  - `other_signatories`: The accounts (other than the sender) who can approve this dispatch. May not be empty. 

  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is not the first approval, then it must be `Some`, with the timepoint (block number and  transaction index) of the first approval transaction. 

  - `call_hash`: The hash of the call to be executed.

   NOTE: If this is the final approval, you will want to use `as_multi` instead. 

    
 
### asMulti(threshold: `u16`, other_signatories: `Vec<AccountId32>`, maybe_timepoint: `Option<PalletMultisigTimepoint>`, call: `WrapperKeepOpaque<Call>`, store_call: `bool`, max_weight: `u64`)
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

    
 
### asMultiThreshold1(other_signatories: `Vec<AccountId32>`, call: `Call`)
- **interface**: `api.tx.multisig.asMultiThreshold1`
- **summary**:    Immediately dispatch a multi-signature call using a single approval from the caller. 

   The dispatch origin for this call must be _Signed_. 

   - `other_signatories`: The accounts (other than the sender) who are part of the  multi-signature, but do not participate in the approval process. 

  - `call`: The call to be executed.

   Result is equivalent to the dispatched result. 

    
 
### cancelAsMulti(threshold: `u16`, other_signatories: `Vec<AccountId32>`, timepoint: `PalletMultisigTimepoint`, call_hash: `[u8;32]`)
- **interface**: `api.tx.multisig.cancelAsMulti`
- **summary**:    Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously  for this operation will be unreserved on success. 

   The dispatch origin for this call must be _Signed_. 

   - `threshold`: The total number of approvals for this dispatch before it is executed. 

  - `other_signatories`: The accounts (other than the sender) who can approve this dispatch. May not be empty. 

  - `timepoint`: The timepoint (block number and transaction index) of the first approval transaction for this dispatch. 

  - `call_hash`: The hash of the call to be executed.

    

___


## nominationPools
 
### bondExtra(extra: `PalletNominationPoolsBondExtra`)
- **interface**: `api.tx.nominationPools.bondExtra`
- **summary**:    Bond `extra` more funds from `origin` into the pool to which they already belong. 

   Additional funds can come from either the free balance of the account, of from the  accumulated rewards, see [`BondExtra`]. 
 
### chill(pool_id: `u32`)
- **interface**: `api.tx.nominationPools.chill`
- **summary**:    Chill on behalf of the pool. 

   The dispatch origin of this call must be signed by the pool nominator or the pool  root role, same as [`Pallet::nominate`]. 

   This directly forward the call to the staking pallet, on behalf of the pool bonded  account. 
 
### claimPayout()
- **interface**: `api.tx.nominationPools.claimPayout`
- **summary**:    A bonded member can use this to claim their payout based on the rewards that the pool  has accumulated since their last claimed payout (OR since joining if this is there first  time claiming rewards). The payout will be transferred to the member's account. 

   The member will earn rewards pro rata based on the members stake vs the sum of the  members in the pools stake. Rewards do not "expire". 
 
### create(amount: `Compact<u128>`, root: `AccountId32`, nominator: `AccountId32`, state_toggler: `AccountId32`)
- **interface**: `api.tx.nominationPools.create`
- **summary**:    Create a new delegation pool. 

   #### Arguments 

   * `amount` - The amount of funds to delegate to the pool. This also acts of a sort of  deposit since the pools creator cannot fully unbond funds until the pool is being  destroyed. 

  * `index` - A disambiguation index for creating the account. Likely only useful when creating multiple pools in the same extrinsic. 

  * `root` - The account to set as [`PoolRoles::root`].

  * `nominator` - The account to set as the [`PoolRoles::nominator`].

  * `state_toggler` - The account to set as the [`PoolRoles::state_toggler`].

   #### Note 

   In addition to `amount`, the caller will transfer the existential deposit; so the caller  needs at have at least `amount + existential_deposit` transferrable. 
 
### join(amount: `Compact<u128>`, pool_id: `u32`)
- **interface**: `api.tx.nominationPools.join`
- **summary**:    Stake funds with a pool. The amount to bond is transferred from the member to the  pools account and immediately increases the pools bond. 

   #### Note 

   * An account can only be a member of a single pool. 

  * An account cannot join the same pool multiple times.

  * This call will *not* dust the member account, so the member must have at least `existential deposit + amount` in their account. 

  * Only a pool with [`PoolState::Open`] can be joined
 
### nominate(pool_id: `u32`, validators: `Vec<AccountId32>`)
- **interface**: `api.tx.nominationPools.nominate`
- **summary**:    Nominate on behalf of the pool. 

   The dispatch origin of this call must be signed by the pool nominator or the pool  root role. 

   This directly forward the call to the staking pallet, on behalf of the pool bonded  account. 
 
### poolWithdrawUnbonded(pool_id: `u32`, num_slashing_spans: `u32`)
- **interface**: `api.tx.nominationPools.poolWithdrawUnbonded`
- **summary**:    Call `withdraw_unbonded` for the pools account. This call can be made by any account. 

   This is useful if their are too many unlocking chunks to call `unbond`, and some  can be cleared by withdrawing. In the case there are too many unlocking chunks, the user  would probably see an error like `NoMoreChunks` emitted from the staking system when  they attempt to unbond. 
 
### setConfigs(min_join_bond: `PalletNominationPoolsConfigOpU128`, min_create_bond: `PalletNominationPoolsConfigOpU128`, max_pools: `PalletNominationPoolsConfigOpU32`, max_members: `PalletNominationPoolsConfigOpU32`, max_members_per_pool: `PalletNominationPoolsConfigOpU32`)
- **interface**: `api.tx.nominationPools.setConfigs`
- **summary**:    Update configurations for the nomination pools. The origin for this call must be  Root. 

   #### Arguments 

   * `min_join_bond` - Set [`MinJoinBond`]. 

  * `min_create_bond` - Set [`MinCreateBond`].

  * `max_pools` - Set [`MaxPools`].

  * `max_members` - Set [`MaxPoolMembers`].

  * `max_members_per_pool` - Set [`MaxPoolMembersPerPool`].
 
### setMetadata(pool_id: `u32`, metadata: `Bytes`)
- **interface**: `api.tx.nominationPools.setMetadata`
- **summary**:    Set a new metadata for the pool. 

   The dispatch origin of this call must be signed by the state toggler, or the root role  of the pool. 
 
### setState(pool_id: `u32`, state: `PalletNominationPoolsPoolState`)
- **interface**: `api.tx.nominationPools.setState`
- **summary**:    Set a new state for the pool. 

   The dispatch origin of this call must be signed by the state toggler, or the root role  of the pool. 
 
### unbond(member_account: `AccountId32`, unbonding_points: `Compact<u128>`)
- **interface**: `api.tx.nominationPools.unbond`
- **summary**:    Unbond up to `unbonding_points` of the `member_account`'s funds from the pool. It  implicitly collects the rewards one last time, since not doing so would mean some  rewards would be forfeited. 

   Under certain conditions, this call can be dispatched permissionlessly (i.e. by any  account). 

   #### Conditions for a permissionless dispatch. 

   * The pool is blocked and the caller is either the root or state-toggler. This is  refereed to as a kick. 

  * The pool is destroying and the member is not the depositor.

  * The pool is destroying, the member is the depositor and no other members are in the pool. 

   #### Conditions for permissioned dispatch (i.e. the caller is also the  `member_account`): 

   * The caller is not the depositor. 

  * The caller is the depositor, the pool is destroying and no other members are in the pool. 

   #### Note 

   If there are too many unlocking chunks to unbond with the pool account,  [`Call::pool_withdraw_unbonded`] can be called to try and minimize unlocking chunks. If  there are too many unlocking chunks, the result of this call will likely be the  `NoMoreChunks` error from the staking system. 
 
### updateRoles(pool_id: `u32`, new_root: `PalletNominationPoolsConfigOpAccountId32`, new_nominator: `PalletNominationPoolsConfigOpAccountId32`, new_state_toggler: `PalletNominationPoolsConfigOpAccountId32`)
- **interface**: `api.tx.nominationPools.updateRoles`
- **summary**:    Update the roles of the pool. 

   The root is the only entity that can change any of the roles, including itself,  excluding the depositor, who can never change. 

   It emits an event, notifying UIs of the role change. This event is quite relevant to  most pool members and they should be informed of changes to pool roles. 
 
### withdrawUnbonded(member_account: `AccountId32`, num_slashing_spans: `u32`)
- **interface**: `api.tx.nominationPools.withdrawUnbonded`
- **summary**:    Withdraw unbonded funds from `member_account`. If no bonded funds can be unbonded, an  error is returned. 

   Under certain conditions, this call can be dispatched permissionlessly (i.e. by any  account). 

   #### Conditions for a permissionless dispatch 

   * The pool is in destroy mode and the target is not the depositor. 

  * The target is the depositor and they are the only member in the sub pools.

  * The pool is blocked and the caller is either the root or state-toggler.

   #### Conditions for permissioned dispatch 

   * The caller is the target and they are not the depositor. 

   #### Note 

   If the target is the depositor, the pool will be destroyed. 

___


## preimage
 
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
 
### unrequestPreimage(hash: `H256`)
- **interface**: `api.tx.preimage.unrequestPreimage`
- **summary**:    Clear a previously made request for a preimage. 

   NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`. 

___


## proxy
 
### addProxy(delegate: `AccountId32`, proxy_type: `NodeRuntimeProxyType`, delay: `u32`)
- **interface**: `api.tx.proxy.addProxy`
- **summary**:    Register a proxy account for the sender that is able to make calls on its behalf. 

   The dispatch origin for this call must be _Signed_. 

   Parameters: 

  - `proxy`: The account that the `caller` would like to make a proxy.

  - `proxy_type`: The permissions allowed for this proxy account.

  - `delay`: The announcement period required of the initial proxy. Will generally be zero. 

    
 
### announce(real: `AccountId32`, call_hash: `H256`)
- **interface**: `api.tx.proxy.announce`
- **summary**:    Publish the hash of a proxy-call that will be made in the future. 

   This must be called some number of blocks before the corresponding `proxy` is attempted  if the delay associated with the proxy relationship is greater than zero. 

   No more than `MaxPending` announcements may be made at any one time. 

   This will take a deposit of `AnnouncementDepositFactor` as well as  `AnnouncementDepositBase` if there are no other pending announcements. 

   The dispatch origin for this call must be _Signed_ and a proxy of `real`. 

   Parameters: 

  - `real`: The account that the proxy will make a call on behalf of.

  - `call_hash`: The hash of the call to be made by the `real` account.

    
 
### anonymous(proxy_type: `NodeRuntimeProxyType`, delay: `u32`, index: `u16`)
- **interface**: `api.tx.proxy.anonymous`
- **summary**:    Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and  initialize it with a proxy of `proxy_type` for `origin` sender. 

   Requires a `Signed` origin. 

   - `proxy_type`: The type of the proxy that the sender will be registered as over the  new account. This will almost always be the most permissive `ProxyType` possible to  allow for maximum flexibility. 

  - `index`: A disambiguation index, in case this is called multiple times in the same transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just  want to use `0`. 

  - `delay`: The announcement period required of the initial proxy. Will generally be zero. 

   Fails with `Duplicate` if this has already been called in this transaction, from the  same sender, with the same parameters. 

   Fails if there are insufficient funds to pay for deposit. 

     TODO: Might be over counting 1 read 
 
### killAnonymous(spawner: `AccountId32`, proxy_type: `NodeRuntimeProxyType`, index: `u16`, height: `Compact<u32>`, ext_index: `Compact<u32>`)
- **interface**: `api.tx.proxy.killAnonymous`
- **summary**:    Removes a previously spawned anonymous proxy. 

   WARNING: **All access to this account will be lost.** Any funds held in it will be  inaccessible. 

   Requires a `Signed` origin, and the sender account must have been created by a call to  `anonymous` with corresponding parameters. 

   - `spawner`: The account that originally called `anonymous` to create this account. 

  - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.

  - `proxy_type`: The proxy type originally passed to `anonymous`.

  - `height`: The height of the chain when the call to `anonymous` was processed.

  - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.

   Fails with `NoPermission` in case the caller is not a previously created anonymous  account whose `anonymous` call has corresponding parameters. 

    
 
### proxy(real: `AccountId32`, force_proxy_type: `Option<NodeRuntimeProxyType>`, call: `Call`)
- **interface**: `api.tx.proxy.proxy`
- **summary**:    Dispatch the given `call` from an account that the sender is authorised for through  `add_proxy`. 

   Removes any corresponding announcement(s). 

   The dispatch origin for this call must be _Signed_. 

   Parameters: 

  - `real`: The account that the proxy will make a call on behalf of.

  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.

  - `call`: The call to be made by the `real` account.

    
 
### proxyAnnounced(delegate: `AccountId32`, real: `AccountId32`, force_proxy_type: `Option<NodeRuntimeProxyType>`, call: `Call`)
- **interface**: `api.tx.proxy.proxyAnnounced`
- **summary**:    Dispatch the given `call` from an account that the sender is authorized for through  `add_proxy`. 

   Removes any corresponding announcement(s). 

   The dispatch origin for this call must be _Signed_. 

   Parameters: 

  - `real`: The account that the proxy will make a call on behalf of.

  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.

  - `call`: The call to be made by the `real` account.

    
 
### rejectAnnouncement(delegate: `AccountId32`, call_hash: `H256`)
- **interface**: `api.tx.proxy.rejectAnnouncement`
- **summary**:    Remove the given announcement of a delegate. 

   May be called by a target (proxied) account to remove a call that one of their delegates  (`delegate`) has announced they want to execute. The deposit is returned. 

   The dispatch origin for this call must be _Signed_. 

   Parameters: 

  - `delegate`: The account that previously announced the call.

  - `call_hash`: The hash of the call to be made.

    
 
### removeAnnouncement(real: `AccountId32`, call_hash: `H256`)
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

   WARNING: This may be called on accounts created by `anonymous`, however if done, then  the unreserved fees will be inaccessible. **All access to this account will be lost.** 

    
 
### removeProxy(delegate: `AccountId32`, proxy_type: `NodeRuntimeProxyType`, delay: `u32`)
- **interface**: `api.tx.proxy.removeProxy`
- **summary**:    Unregister a proxy account for the sender. 

   The dispatch origin for this call must be _Signed_. 

   Parameters: 

  - `proxy`: The account that the `caller` would like to remove as a proxy.

  - `proxy_type`: The permissions currently enabled for the removed proxy account.

    

___


## rankedCollective
 
### addMember(who: `AccountId32`)
- **interface**: `api.tx.rankedCollective.addMember`
- **summary**:    Introduce a new member. 

   - `origin`: Must be the `AdminOrigin`. 

  - `who`: Account of non-member which will become a member.

  - `rank`: The rank to give the new member.

   Weight: `O(1)` 
 
### cleanupPoll(poll_index: `u32`, max: `u32`)
- **interface**: `api.tx.rankedCollective.cleanupPoll`
- **summary**:    Remove votes from the given poll. It must have ended. 

   - `origin`: Must be `Signed` by any account. 

  - `poll_index`: Index of a poll which is completed and for which votes continue to exist. 

  - `max`: Maximum number of vote items from remove in this call.

   Transaction fees are waived if the operation is successful. 

   Weight `O(max)` (less if there are fewer items to remove than `max`). 
 
### demoteMember(who: `AccountId32`)
- **interface**: `api.tx.rankedCollective.demoteMember`
- **summary**:    Decrement the rank of an existing member by one. If the member is already at rank zero,  then they are removed entirely. 

   - `origin`: Must be the `AdminOrigin`. 

  - `who`: Account of existing member of rank greater than zero.

   Weight: `O(1)`, less if the member's index is highest in its rank. 
 
### promoteMember(who: `AccountId32`)
- **interface**: `api.tx.rankedCollective.promoteMember`
- **summary**:    Increment the rank of an existing member by one. 

   - `origin`: Must be the `AdminOrigin`. 

  - `who`: Account of existing member.

   Weight: `O(1)` 
 
### removeMember(who: `AccountId32`, min_rank: `u16`)
- **interface**: `api.tx.rankedCollective.removeMember`
- **summary**:    Remove the member entirely. 

   - `origin`: Must be the `AdminOrigin`. 

  - `who`: Account of existing member of rank greater than zero.

  - `min_rank`: The rank of the member or greater.

   Weight: `O(min_rank)`. 
 
### vote(poll: `u32`, aye: `bool`)
- **interface**: `api.tx.rankedCollective.vote`
- **summary**:    Add an aye or nay vote for the sender to the given proposal. 

   - `origin`: Must be `Signed` by a member account. 

  - `poll`: Index of a poll which is ongoing.

  - `aye`: `true` if the vote is to approve the proposal, `false` otherwise.

   Transaction fees are be waived if the member is voting on any particular proposal  for the first time and the call is successful. Subsequent vote changes will charge a  fee. 

   Weight: `O(1)`, less if there was no previous vote on the poll by the member. 

___


## rankedPolls
 
### cancel(index: `u32`)
- **interface**: `api.tx.rankedPolls.cancel`
- **summary**:    Cancel an ongoing referendum. 

   - `origin`: must be the `CancelOrigin`. 

  - `index`: The index of the referendum to be cancelled.

   Emits `Cancelled`. 
 
### kill(index: `u32`)
- **interface**: `api.tx.rankedPolls.kill`
- **summary**:    Cancel an ongoing referendum and slash the deposits. 

   - `origin`: must be the `KillOrigin`. 

  - `index`: The index of the referendum to be cancelled.

   Emits `Killed` and `DepositSlashed`. 
 
### nudgeReferendum(index: `u32`)
- **interface**: `api.tx.rankedPolls.nudgeReferendum`
- **summary**:    Advance a referendum onto its next logical state. Only used internally. 

   - `origin`: must be `Root`. 

  - `index`: the referendum to be advanced.
 
### oneFewerDeciding(track: `u16`)
- **interface**: `api.tx.rankedPolls.oneFewerDeciding`
- **summary**:    Advance a track onto its next logical state. Only used internally. 

   - `origin`: must be `Root`. 

  - `track`: the track to be advanced.

   Action item for when there is now one fewer referendum in the deciding phase and the  `DecidingCount` is not yet updated. This means that we should either: 

  - begin deciding another referendum (and leave `DecidingCount` alone); or

  - decrement `DecidingCount`.
 
### placeDecisionDeposit(index: `u32`)
- **interface**: `api.tx.rankedPolls.placeDecisionDeposit`
- **summary**:    Post the Decision Deposit for a referendum. 

   - `origin`: must be `Signed` and the account must have funds available for the  referendum's track's Decision Deposit. 

  - `index`: The index of the submitted referendum whose Decision Deposit is yet to be posted. 

   Emits `DecisionDepositPlaced`. 
 
### refundDecisionDeposit(index: `u32`)
- **interface**: `api.tx.rankedPolls.refundDecisionDeposit`
- **summary**:    Refund the Decision Deposit for a closed referendum back to the depositor. 

   - `origin`: must be `Signed` or `Root`. 

  - `index`: The index of a closed referendum whose Decision Deposit has not yet been refunded. 

   Emits `DecisionDepositRefunded`. 
 
### submit(proposal_origin: `NodeRuntimeOriginCaller`, proposal_hash: `H256`, enactment_moment: `FrameSupportScheduleDispatchTime`)
- **interface**: `api.tx.rankedPolls.submit`
- **summary**:    Propose a referendum on a privileged action. 

   - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds  available. 

  - `proposal_origin`: The origin from which the proposal should be executed.

  - `proposal_hash`: The hash of the proposal preimage.

  - `enactment_moment`: The moment that the proposal should be enacted.

   Emits `Submitted`. 

___


## recovery
 
### asRecovered(account: `AccountId32`, call: `Call`)
- **interface**: `api.tx.recovery.asRecovered`
- **summary**:    Send a call through a recovered account. 

   The dispatch origin for this call must be _Signed_ and registered to  be able to make calls on behalf of the recovered account. 

   Parameters: 

  - `account`: The recovered account you want to make a call on-behalf-of.

  - `call`: The call you want to make with the recovered account.
 
### cancelRecovered(account: `AccountId32`)
- **interface**: `api.tx.recovery.cancelRecovered`
- **summary**:    Cancel the ability to use `as_recovered` for `account`. 

   The dispatch origin for this call must be _Signed_ and registered to  be able to make calls on behalf of the recovered account. 

   Parameters: 

  - `account`: The recovered account you are able to call on-behalf-of.
 
### claimRecovery(account: `AccountId32`)
- **interface**: `api.tx.recovery.claimRecovery`
- **summary**:    Allow a successful rescuer to claim their recovered account. 

   The dispatch origin for this call must be _Signed_ and must be a "rescuer"  who has successfully completed the account recovery process: collected  `threshold` or more vouches, waited `delay_period` blocks since initiation. 

   Parameters: 

  - `account`: The lost account that you want to claim has been successfully recovered by you. 
 
### closeRecovery(rescuer: `AccountId32`)
- **interface**: `api.tx.recovery.closeRecovery`
- **summary**:    As the controller of a recoverable account, close an active recovery  process for your account. 

   Payment: By calling this function, the recoverable account will receive  the recovery deposit `RecoveryDeposit` placed by the rescuer. 

   The dispatch origin for this call must be _Signed_ and must be a  recoverable account with an active recovery process for it. 

   Parameters: 

  - `rescuer`: The account trying to rescue this recoverable account.
 
### createRecovery(friends: `Vec<AccountId32>`, threshold: `u16`, delay_period: `u32`)
- **interface**: `api.tx.recovery.createRecovery`
- **summary**:    Create a recovery configuration for your account. This makes your account recoverable. 

   Payment: `ConfigDepositBase` + `FriendDepositFactor` * #_of_friends balance  will be reserved for storing the recovery configuration. This deposit is returned  in full when the user calls `remove_recovery`. 

   The dispatch origin for this call must be _Signed_. 

   Parameters: 

  - `friends`: A list of friends you trust to vouch for recovery attempts. Should be ordered and contain no duplicate values. 

  - `threshold`: The number of friends that must vouch for a recovery attempt before the account can be recovered. Should be less than or equal to the length of the list of  friends. 

  - `delay_period`: The number of blocks after a recovery attempt is initialized that needs to pass before the account can be recovered. 
 
### initiateRecovery(account: `AccountId32`)
- **interface**: `api.tx.recovery.initiateRecovery`
- **summary**:    Initiate the process for recovering a recoverable account. 

   Payment: `RecoveryDeposit` balance will be reserved for initiating the  recovery process. This deposit will always be repatriated to the account  trying to be recovered. See `close_recovery`. 

   The dispatch origin for this call must be _Signed_. 

   Parameters: 

  - `account`: The lost account that you want to recover. This account needs to be recoverable (i.e. have a recovery configuration). 
 
### removeRecovery()
- **interface**: `api.tx.recovery.removeRecovery`
- **summary**:    Remove the recovery process for your account. Recovered accounts are still accessible. 

   NOTE: The user must make sure to call `close_recovery` on all active  recovery attempts before calling this function else it will fail. 

   Payment: By calling this function the recoverable account will unreserve  their recovery configuration deposit.  (`ConfigDepositBase` + `FriendDepositFactor` * #_of_friends) 

   The dispatch origin for this call must be _Signed_ and must be a  recoverable account (i.e. has a recovery configuration). 
 
### setRecovered(lost: `AccountId32`, rescuer: `AccountId32`)
- **interface**: `api.tx.recovery.setRecovered`
- **summary**:    Allow ROOT to bypass the recovery process and set an a rescuer account  for a lost account directly. 

   The dispatch origin for this call must be _ROOT_. 

   Parameters: 

  - `lost`: The "lost account" to be recovered.

  - `rescuer`: The "rescuer account" which can call as the lost account.
 
### vouchRecovery(lost: `AccountId32`, rescuer: `AccountId32`)
- **interface**: `api.tx.recovery.vouchRecovery`
- **summary**:    Allow a "friend" of a recoverable account to vouch for an active recovery  process for that account. 

   The dispatch origin for this call must be _Signed_ and must be a "friend"  for the recoverable account. 

   Parameters: 

  - `lost`: The lost account that you want to recover.

  - `rescuer`: The account trying to rescue the lost account that you want to vouch for.

   The combination of these two parameters must point to an active recovery  process. 

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
 
### submit(proposal_origin: `NodeRuntimeOriginCaller`, proposal_hash: `H256`, enactment_moment: `FrameSupportScheduleDispatchTime`)
- **interface**: `api.tx.referenda.submit`
- **summary**:    Propose a referendum on a privileged action. 

   - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds  available. 

  - `proposal_origin`: The origin from which the proposal should be executed.

  - `proposal_hash`: The hash of the proposal preimage.

  - `enactment_moment`: The moment that the proposal should be enacted.

   Emits `Submitted`. 

___


## remark
 
### store(remark: `Bytes`)
- **interface**: `api.tx.remark.store`
- **summary**:    Index and store data off chain. 

___


## scheduler
 
### cancel(when: `u32`, index: `u32`)
- **interface**: `api.tx.scheduler.cancel`
- **summary**:    Cancel an anonymously scheduled task. 
 
### cancelNamed(id: `Bytes`)
- **interface**: `api.tx.scheduler.cancelNamed`
- **summary**:    Cancel a named scheduled task. 
 
### schedule(when: `u32`, maybe_periodic: `Option<(u32,u32)>`, priority: `u8`, call: `FrameSupportScheduleMaybeHashed`)
- **interface**: `api.tx.scheduler.schedule`
- **summary**:    Anonymously schedule a task. 
 
### scheduleAfter(after: `u32`, maybe_periodic: `Option<(u32,u32)>`, priority: `u8`, call: `FrameSupportScheduleMaybeHashed`)
- **interface**: `api.tx.scheduler.scheduleAfter`
- **summary**:    Anonymously schedule a task after a delay. 

    
 
### scheduleNamed(id: `Bytes`, when: `u32`, maybe_periodic: `Option<(u32,u32)>`, priority: `u8`, call: `FrameSupportScheduleMaybeHashed`)
- **interface**: `api.tx.scheduler.scheduleNamed`
- **summary**:    Schedule a named task. 
 
### scheduleNamedAfter(id: `Bytes`, after: `u32`, maybe_periodic: `Option<(u32,u32)>`, priority: `u8`, call: `FrameSupportScheduleMaybeHashed`)
- **interface**: `api.tx.scheduler.scheduleNamedAfter`
- **summary**:    Schedule a named task after a delay. 

    

___


## session
 
### purgeKeys()
- **interface**: `api.tx.session.purgeKeys`
- **summary**:    Removes any session key(s) of the function caller. 

   This doesn't take effect until the next session. 

   The dispatch origin of this function must be Signed and the account must be either be  convertible to a validator ID using the chain's typical addressing system (this usually  means being a controller account) or directly convertible into a validator ID (which  usually means being a stash account). 

    
 
### setKeys(keys: `NodeRuntimeSessionKeys`, proof: `Bytes`)
- **interface**: `api.tx.session.setKeys`
- **summary**:    Sets the session key(s) of the function caller to `keys`.  Allows an account to set its session key prior to becoming a validator.  This doesn't take effect until the next session. 

   The dispatch origin of this function must be signed. 

    

___


## society
 
### bid(value: `u128`)
- **interface**: `api.tx.society.bid`
- **summary**:    A user outside of the society can make a bid for entry. 

   Payment: `CandidateDeposit` will be reserved for making a bid. It is returned  when the bid becomes a member, or if the bid calls `unbid`. 

   The dispatch origin for this call must be _Signed_. 

   Parameters: 

  - `value`: A one time payment the bid would like to receive when joining the society.

    
 
### defenderVote(approve: `bool`)
- **interface**: `api.tx.society.defenderVote`
- **summary**:    As a member, vote on the defender. 

   The dispatch origin for this call must be _Signed_ and a member. 

   Parameters: 

  - `approve`: A boolean which says if the candidate should be approved (`true`) or rejected (`false`). 

    
 
### found(founder: `AccountId32`, max_members: `u32`, rules: `Bytes`)
- **interface**: `api.tx.society.found`
- **summary**:    Found the society. 

   This is done as a discrete action in order to allow for the  pallet to be included into a running chain and can only be done once. 

   The dispatch origin for this call must be from the _FounderSetOrigin_. 

   Parameters: 

  - `founder` - The first member and head of the newly founded society.

  - `max_members` - The initial max number of members for the society.

  - `rules` - The rules of this society concerning membership.

    
 
### judgeSuspendedCandidate(who: `AccountId32`, judgement: `PalletSocietyJudgement`)
- **interface**: `api.tx.society.judgeSuspendedCandidate`
- **summary**:    Allow suspended judgement origin to make judgement on a suspended candidate. 

   If the judgement is `Approve`, we add them to society as a member with the appropriate  payment for joining society. 

   If the judgement is `Reject`, we either slash the deposit of the bid, giving it back  to the society treasury, or we ban the voucher from vouching again. 

   If the judgement is `Rebid`, we put the candidate back in the bid pool and let them go  through the induction process again. 

   The dispatch origin for this call must be from the _SuspensionJudgementOrigin_. 

   Parameters: 

  - `who` - The suspended candidate to be judged.

  - `judgement` - `Approve`, `Reject`, or `Rebid`.

    
 
### judgeSuspendedMember(who: `AccountId32`, forgive: `bool`)
- **interface**: `api.tx.society.judgeSuspendedMember`
- **summary**:    Allow suspension judgement origin to make judgement on a suspended member. 

   If a suspended member is forgiven, we simply add them back as a member, not affecting  any of the existing storage items for that member. 

   If a suspended member is rejected, remove all associated storage items, including  their payouts, and remove any vouched bids they currently have. 

   The dispatch origin for this call must be from the _SuspensionJudgementOrigin_. 

   Parameters: 

  - `who` - The suspended member to be judged.

  - `forgive` - A boolean representing whether the suspension judgement origin forgives (`true`) or rejects (`false`) a suspended member. 

    
 
### payout()
- **interface**: `api.tx.society.payout`
- **summary**:    Transfer the first matured payout for the sender and remove it from the records. 

   NOTE: This extrinsic needs to be called multiple times to claim multiple matured  payouts. 

   Payment: The member will receive a payment equal to their first matured  payout to their free balance. 

   The dispatch origin for this call must be _Signed_ and a member with  payouts remaining. 

    
 
### setMaxMembers(max: `u32`)
- **interface**: `api.tx.society.setMaxMembers`
- **summary**:    Allows root origin to change the maximum number of members in society.  Max membership count must be greater than 1. 

   The dispatch origin for this call must be from _ROOT_. 

   Parameters: 

  - `max` - The maximum number of members for the society.

    
 
### unbid(pos: `u32`)
- **interface**: `api.tx.society.unbid`
- **summary**:    A bidder can remove their bid for entry into society.  By doing so, they will have their candidate deposit returned or  they will unvouch their voucher. 

   Payment: The bid deposit is unreserved if the user made a bid. 

   The dispatch origin for this call must be _Signed_ and a bidder. 

   Parameters: 

  - `pos`: Position in the `Bids` vector of the bid who wants to unbid.

    
 
### unfound()
- **interface**: `api.tx.society.unfound`
- **summary**:    Annul the founding of the society. 

   The dispatch origin for this call must be Signed, and the signing account must be both  the `Founder` and the `Head`. This implies that it may only be done when there is one  member. 

    
 
### unvouch(pos: `u32`)
- **interface**: `api.tx.society.unvouch`
- **summary**:    As a vouching member, unvouch a bid. This only works while vouched user is  only a bidder (and not a candidate). 

   The dispatch origin for this call must be _Signed_ and a vouching member. 

   Parameters: 

  - `pos`: Position in the `Bids` vector of the bid who should be unvouched.

    
 
### vote(candidate: `MultiAddress`, approve: `bool`)
- **interface**: `api.tx.society.vote`
- **summary**:    As a member, vote on a candidate. 

   The dispatch origin for this call must be _Signed_ and a member. 

   Parameters: 

  - `candidate`: The candidate that the member would like to bid on.

  - `approve`: A boolean which says if the candidate should be approved (`true`) or rejected (`false`). 

    
 
### vouch(who: `AccountId32`, value: `u128`, tip: `u128`)
- **interface**: `api.tx.society.vouch`
- **summary**:    As a member, vouch for someone to join society by placing a bid on their behalf. 

   There is no deposit required to vouch for a new bid, but a member can only vouch for  one bid at a time. If the bid becomes a suspended candidate and ultimately rejected by  the suspension judgement origin, the member will be banned from vouching again. 

   As a vouching member, you can claim a tip if the candidate is accepted. This tip will  be paid as a portion of the reward the member will receive for joining the society. 

   The dispatch origin for this call must be _Signed_ and a member. 

   Parameters: 

  - `who`: The user who you would like to vouch for.

  - `value`: The total reward to be paid between you and the candidate if they become a member in the society. 

  - `tip`: Your cut of the total `value` payout when the candidate is inducted into the society. Tips larger than `value` will be saturated upon payout. 

    

___


## staking
 
### bond(controller: `MultiAddress`, value: `Compact<u128>`, payee: `PalletStakingRewardDestination`)
- **interface**: `api.tx.staking.bond`
- **summary**:    Take the origin account as a stash and lock up `value` of its balance. `controller` will  be the account that controls it. 

   `value` must be more than the `minimum_balance` specified by `T::Currency`. 

   The dispatch origin for this call must be _Signed_ by the stash account. 

   Emits `Bonded`.   
 
### bondExtra(max_additional: `Compact<u128>`)
- **interface**: `api.tx.staking.bondExtra`
- **summary**:    Add some extra amount that have appeared in the stash `free_balance` into the balance up  for staking. 

   The dispatch origin for this call must be _Signed_ by the stash, not the controller. 

   Use this if there are additional funds in your stash account that you wish to bond.  Unlike [`bond`](Self::bond) or [`unbond`](Self::unbond) this function does not impose  any limitation on the amount that can be added. 

   Emits `Bonded`. 

    
 
### cancelDeferredSlash(era: `u32`, slash_indices: `Vec<u32>`)
- **interface**: `api.tx.staking.cancelDeferredSlash`
- **summary**:    Cancel enactment of a deferred slash. 

   Can be called by the `T::SlashCancelOrigin`. 

   Parameters: era and indices of the slashes for that era to kill. 
 
### chill()
- **interface**: `api.tx.staking.chill`
- **summary**:    Declare no desire to either validate or nominate. 

   Effects will be felt at the beginning of the next era. 

   The dispatch origin for this call must be _Signed_ by the controller, not the stash. 

    
 
### chillOther(controller: `AccountId32`)
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
 
### forceApplyMinCommission(validator_stash: `AccountId32`)
- **interface**: `api.tx.staking.forceApplyMinCommission`
- **summary**:    Force a validator to have at least the minimum commission. This will not affect a  validator who already has a commission greater than or equal to the minimum. Any account  can call this. 
 
### forceNewEra()
- **interface**: `api.tx.staking.forceNewEra`
- **summary**:    Force there to be a new era at the end of the next session. After this, it will be  reset to normal (non-forced) behaviour. 

   The dispatch origin must be Root. 

   #### Warning 

   The election process starts multiple blocks before the end of the era.  If this is called just before a new era is triggered, the election process may not  have enough blocks to get a result. 

    
 
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

    
 
### forceUnstake(stash: `AccountId32`, num_slashing_spans: `u32`)
- **interface**: `api.tx.staking.forceUnstake`
- **summary**:    Force a current staker to become completely unstaked, immediately. 

   The dispatch origin must be Root. 
 
### increaseValidatorCount(additional: `Compact<u32>`)
- **interface**: `api.tx.staking.increaseValidatorCount`
- **summary**:    Increments the ideal number of validators. 

   The dispatch origin must be Root. 

    
 
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

    
 
### payoutStakers(validator_stash: `AccountId32`, era: `u32`)
- **interface**: `api.tx.staking.payoutStakers`
- **summary**:    Pay out all the stakers behind a single validator for a single era. 

   - `validator_stash` is the stash account of the validator. Their nominators, up to  `T::MaxNominatorRewardedPerValidator`, will also receive their rewards. 

  - `era` may be any era between `[current_era - history_depth; current_era]`.

   The origin of this call must be _Signed_. Any account can call this function, even if  it is not one of the stakers. 

    
 
### reapStash(stash: `AccountId32`, num_slashing_spans: `u32`)
- **interface**: `api.tx.staking.reapStash`
- **summary**:    Remove all data structures concerning a staker/stash once it is at a state where it can  be considered `dust` in the staking system. The requirements are: 

   1. the `total_balance` of the stash is below existential deposit.  2. or, the `ledger.total` of the stash is below existential deposit. 

   The former can happen in cases like a slash; the latter when a fully unbonded account  is still receiving staking rewards in `RewardDestination::Staked`. 

   It can be called by anyone, as long as `stash` meets the above requirements. 

   Refunds the transaction fees upon successful execution. 
 
### rebond(value: `Compact<u128>`)
- **interface**: `api.tx.staking.rebond`
- **summary**:    Rebond a portion of the stash scheduled to be unlocked. 

   The dispatch origin must be signed by the controller. 

    
 
### scaleValidatorCount(factor: `Percent`)
- **interface**: `api.tx.staking.scaleValidatorCount`
- **summary**:    Scale up the ideal number of validators by a factor. 

   The dispatch origin must be Root. 

    
 
### setController(controller: `MultiAddress`)
- **interface**: `api.tx.staking.setController`
- **summary**:    (Re-)set the controller of a stash. 

   Effects will be felt instantly (as soon as this function is completed successfully). 

   The dispatch origin for this call must be _Signed_ by the stash, not the controller. 

    
 
### setHistoryDepth(new_history_depth: `Compact<u32>`, era_items_deleted: `Compact<u32>`)
- **interface**: `api.tx.staking.setHistoryDepth`
- **summary**:    Set `HistoryDepth` value. This function will delete any history information  when `HistoryDepth` is reduced. 

   Parameters: 

  - `new_history_depth`: The new history depth you would like to set.

  - `era_items_deleted`: The number of items that will be deleted by this dispatch. This should report all the storage items that will be deleted by clearing old era history.  Needed to report an accurate weight for the dispatch. Trusted by `Root` to report an  accurate number. 

   Origin must be root. 

    
 
### setInvulnerables(invulnerables: `Vec<AccountId32>`)
- **interface**: `api.tx.staking.setInvulnerables`
- **summary**:    Set the validators who cannot be slashed (if any). 

   The dispatch origin must be Root. 
 
### setPayee(payee: `PalletStakingRewardDestination`)
- **interface**: `api.tx.staking.setPayee`
- **summary**:    (Re-)set the payment target for a controller. 

   Effects will be felt instantly (as soon as this function is completed successfully). 

   The dispatch origin for this call must be _Signed_ by the controller, not the stash. 

    
 
### setStakingConfigs(min_nominator_bond: `PalletStakingPalletConfigOpU128`, min_validator_bond: `PalletStakingPalletConfigOpU128`, max_nominator_count: `PalletStakingPalletConfigOpU32`, max_validator_count: `PalletStakingPalletConfigOpU32`, chill_threshold: `PalletStakingPalletConfigOpPercent`, min_commission: `PalletStakingPalletConfigOpPerbill`)
- **interface**: `api.tx.staking.setStakingConfigs`
- **summary**:    Update the various staking configurations . 

   * `min_nominator_bond`: The minimum active bond needed to be a nominator. 

  * `min_validator_bond`: The minimum active bond needed to be a validator.

  * `max_nominator_count`: The max number of users who can be a nominator at once. When set to `None`, no limit is enforced. 

  * `max_validator_count`: The max number of users who can be a validator at once. When set to `None`, no limit is enforced. 

  * `chill_threshold`: The ratio of `max_nominator_count` or `max_validator_count` which should be filled in order for the `chill_other` transaction to work. 

  * `min_commission`: The minimum amount of commission that each validators must maintain. This is checked only upon calling `validate`. Existing validators are not affected. 

   Origin must be Root to call this function. 

   NOTE: Existing nominators and validators will not be affected by this update.  to kick people under the new limits, `chill_other` should be called. 
 
### setValidatorCount(new: `Compact<u32>`)
- **interface**: `api.tx.staking.setValidatorCount`
- **summary**:    Sets the ideal number of validators. 

   The dispatch origin must be Root. 

    
 
### unbond(value: `Compact<u128>`)
- **interface**: `api.tx.staking.unbond`
- **summary**:    Schedule a portion of the stash to be unlocked ready for transfer out after the bond  period ends. If this leaves an amount actively bonded less than  T::Currency::minimum_balance(), then it is increased to the full amount. 

   The dispatch origin for this call must be _Signed_ by the controller, not the stash. 

   Once the unlock period is done, you can call `withdraw_unbonded` to actually move  the funds out of management ready for transfer. 

   No more than a limited number of unlocking chunks (see `MaxUnlockingChunks`)  can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need  to be called first to remove some of the chunks (if possible). 

   If a user encounters the `InsufficientBond` error when calling this extrinsic,  they should call `chill` first in order to free up their bonded funds. 

   Emits `Unbonded`. 

   See also [`Call::withdraw_unbonded`]. 
 
### validate(prefs: `PalletStakingValidatorPrefs`)
- **interface**: `api.tx.staking.validate`
- **summary**:    Declare the desire to validate for the origin controller. 

   Effects will be felt at the beginning of the next era. 

   The dispatch origin for this call must be _Signed_ by the controller, not the stash. 
 
### withdrawUnbonded(num_slashing_spans: `u32`)
- **interface**: `api.tx.staking.withdrawUnbonded`
- **summary**:    Remove any unlocked chunks from the `unlocking` queue from our management. 

   This essentially frees up that balance to be used by the stash account to do  whatever it wants. 

   The dispatch origin for this call must be _Signed_ by the controller. 

   Emits `Withdrawn`. 

   See also [`Call::unbond`]. 

    

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


## sudo
 
### setKey(new: `MultiAddress`)
- **interface**: `api.tx.sudo.setKey`
- **summary**:    Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo  key. 

   The dispatch origin for this call must be _Signed_. 

    
 
### sudo(call: `Call`)
- **interface**: `api.tx.sudo.sudo`
- **summary**:    Authenticates the sudo key and dispatches a function call with `Root` origin. 

   The dispatch origin for this call must be _Signed_. 

    
 
### sudoAs(who: `MultiAddress`, call: `Call`)
- **interface**: `api.tx.sudo.sudoAs`
- **summary**:    Authenticates the sudo key and dispatches a function call with `Signed` origin from  a given account. 

   The dispatch origin for this call must be _Signed_. 

    
 
### sudoUncheckedWeight(call: `Call`, weight: `u64`)
- **interface**: `api.tx.sudo.sudoUncheckedWeight`
- **summary**:    Authenticates the sudo key and dispatches a function call with `Root` origin.  This function does not check the weight of the call, and instead allows the  Sudo user to specify the weight of the call. 

   The dispatch origin for this call must be _Signed_. 

    

___


## system
 
### fillBlock(ratio: `Perbill`)
- **interface**: `api.tx.system.fillBlock`
- **summary**:    A dispatch that will fill the block weight up to the given ratio. 
 
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

    
 
### remarkWithEvent(remark: `Bytes`)
- **interface**: `api.tx.system.remarkWithEvent`
- **summary**:    Make some on-chain remark and emit event. 
 
### setCode(code: `Bytes`)
- **interface**: `api.tx.system.setCode`
- **summary**:    Set the new runtime code. 

    
 
### setCodeWithoutChecks(code: `Bytes`)
- **interface**: `api.tx.system.setCodeWithoutChecks`
- **summary**:    Set the new runtime code without doing any checks of the given `code`. 

    
 
### setHeapPages(pages: `u64`)
- **interface**: `api.tx.system.setHeapPages`
- **summary**:    Set the number of pages in the WebAssembly environment's heap. 
 
### setStorage(items: `Vec<(Bytes,Bytes)>`)
- **interface**: `api.tx.system.setStorage`
- **summary**:    Set some items of storage. 

___


## technicalCommittee
 
### close(proposal_hash: `H256`, index: `Compact<u32>`, proposal_weight_bound: `Compact<u64>`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.technicalCommittee.close`
- **summary**:    Close a vote that is either approved, disapproved or whose voting period has ended. 

   May be called by any signed account in order to finish voting and close the proposal. 

   If called before the end of the voting period it will only close the vote if it is  has enough votes to be approved or disapproved. 

   If called after the end of the voting period abstentions are counted as rejections  unless there is a prime member set and the prime member cast an approval. 

   If the close operation completes successfully with disapproval, the transaction fee will  be waived. Otherwise execution of the approved operation will be charged to the caller. 

   + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed  proposal.  + `length_bound`: The upper bound for the length of the proposal in storage. Checked via  `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length. 

    
 
### disapproveProposal(proposal_hash: `H256`)
- **interface**: `api.tx.technicalCommittee.disapproveProposal`
- **summary**:    Disapprove a proposal, close, and remove it from the system, regardless of its current  state. 

   Must be called by the Root origin. 

   Parameters: 

  * `proposal_hash`: The hash of the proposal that should be disapproved.

    
 
### execute(proposal: `Call`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.technicalCommittee.execute`
- **summary**:    Dispatch a proposal from a member using the `Member` origin. 

   Origin must be a member of the collective. 

    
 
### propose(threshold: `Compact<u32>`, proposal: `Call`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.technicalCommittee.propose`
- **summary**:    Add a new proposal to either be voted on or executed directly. 

   Requires the sender to be member. 

   `threshold` determines whether `proposal` is executed directly (`threshold < 2`)  or put up for voting. 

    
 
### setMembers(new_members: `Vec<AccountId32>`, prime: `Option<AccountId32>`, old_count: `u32`)
- **interface**: `api.tx.technicalCommittee.setMembers`
- **summary**:    Set the collective's membership. 

   - `new_members`: The new member list. Be nice to the chain and provide it sorted. 

  - `prime`: The prime member whose vote sets the default.

  - `old_count`: The upper bound for the previous number of members in storage. Used for weight estimation. 

   Requires root origin. 

   NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but  the weight estimations rely on it to estimate dispatchable weight. 

   #### WARNING: 

   The `pallet-collective` can also be managed by logic outside of the pallet through the  implementation of the trait [`ChangeMembers`].  Any call to `set_members` must be careful that the member set doesn't get out of sync  with other logic managing the member set. 

    
 
### vote(proposal: `H256`, index: `Compact<u32>`, approve: `bool`)
- **interface**: `api.tx.technicalCommittee.vote`
- **summary**:    Add an aye or nay vote for the sender to the given proposal. 

   Requires the sender to be a member. 

   Transaction fees will be waived if the member is voting on any particular proposal  for the first time and the call is successful. Subsequent vote changes will charge a  fee.   

___


## technicalMembership
 
### addMember(who: `AccountId32`)
- **interface**: `api.tx.technicalMembership.addMember`
- **summary**:    Add a member `who` to the set. 

   May only be called from `T::AddOrigin`. 
 
### changeKey(new: `AccountId32`)
- **interface**: `api.tx.technicalMembership.changeKey`
- **summary**:    Swap out the sending member for some other key `new`. 

   May only be called from `Signed` origin of a current member. 

   Prime membership is passed from the origin account to `new`, if extant. 
 
### clearPrime()
- **interface**: `api.tx.technicalMembership.clearPrime`
- **summary**:    Remove the prime member if it exists. 

   May only be called from `T::PrimeOrigin`. 
 
### removeMember(who: `AccountId32`)
- **interface**: `api.tx.technicalMembership.removeMember`
- **summary**:    Remove a member `who` from the set. 

   May only be called from `T::RemoveOrigin`. 
 
### resetMembers(members: `Vec<AccountId32>`)
- **interface**: `api.tx.technicalMembership.resetMembers`
- **summary**:    Change the membership to a new set, disregarding the existing membership. Be nice and  pass `members` pre-sorted. 

   May only be called from `T::ResetOrigin`. 
 
### setPrime(who: `AccountId32`)
- **interface**: `api.tx.technicalMembership.setPrime`
- **summary**:    Set the prime member. Must be a current member. 

   May only be called from `T::PrimeOrigin`. 
 
### swapMember(remove: `AccountId32`, add: `AccountId32`)
- **interface**: `api.tx.technicalMembership.swapMember`
- **summary**:    Swap out one member `remove` for another `add`. 

   May only be called from `T::SwapOrigin`. 

   Prime membership is *not* passed from `remove` to `add`, if extant. 

___


## timestamp
 
### set(now: `Compact<u64>`)
- **interface**: `api.tx.timestamp.set`
- **summary**:    Set the current time. 

   This call should be invoked exactly once per block. It will panic at the finalization  phase, if this call hasn't been invoked by that time. 

   The timestamp should be greater than the previous one by the amount specified by  `MinimumPeriod`. 

   The dispatch origin for this call must be `Inherent`. 

    

___


## tips
 
### closeTip(hash: `H256`)
- **interface**: `api.tx.tips.closeTip`
- **summary**:    Close and payout a tip. 

   The dispatch origin for this call must be _Signed_. 

   The tip identified by `hash` must have finished its countdown period. 

   - `hash`: The identity of the open tip for which a tip value is declared. This is formed  as the hash of the tuple of the original tip `reason` and the beneficiary account ID. 

    
 
### reportAwesome(reason: `Bytes`, who: `AccountId32`)
- **interface**: `api.tx.tips.reportAwesome`
- **summary**:    Report something `reason` that deserves a tip and claim any eventual the finder's fee. 

   The dispatch origin for this call must be _Signed_. 

   Payment: `TipReportDepositBase` will be reserved from the origin account, as well as  `DataDepositPerByte` for each byte in `reason`. 

   - `reason`: The reason for, or the thing that deserves, the tip; generally this will be  a UTF-8-encoded URL. 

  - `who`: The account which should be credited for the tip.

   Emits `NewTip` if successful. 

    
 
### retractTip(hash: `H256`)
- **interface**: `api.tx.tips.retractTip`
- **summary**:    Retract a prior tip-report from `report_awesome`, and cancel the process of tipping. 

   If successful, the original deposit will be unreserved. 

   The dispatch origin for this call must be _Signed_ and the tip identified by `hash`  must have been reported by the signing account through `report_awesome` (and not  through `tip_new`). 

   - `hash`: The identity of the open tip for which a tip value is declared. This is formed  as the hash of the tuple of the original tip `reason` and the beneficiary account ID. 

   Emits `TipRetracted` if successful. 

    
 
### slashTip(hash: `H256`)
- **interface**: `api.tx.tips.slashTip`
- **summary**:    Remove and slash an already-open tip. 

   May only be called from `T::RejectOrigin`. 

   As a result, the finder is slashed and the deposits are lost. 

   Emits `TipSlashed` if successful. 

    
 
### tip(hash: `H256`, tip_value: `Compact<u128>`)
- **interface**: `api.tx.tips.tip`
- **summary**:    Declare a tip value for an already-open tip. 

   The dispatch origin for this call must be _Signed_ and the signing account must be a  member of the `Tippers` set. 

   - `hash`: The identity of the open tip for which a tip value is declared. This is formed  as the hash of the tuple of the hash of the original tip `reason` and the beneficiary  account ID. 

  - `tip_value`: The amount of tip that the sender would like to give. The median tip value of active tippers will be given to the `who`. 

   Emits `TipClosing` if the threshold of tippers has been reached and the countdown period  has started. 

    
 
### tipNew(reason: `Bytes`, who: `AccountId32`, tip_value: `Compact<u128>`)
- **interface**: `api.tx.tips.tipNew`
- **summary**:    Give a tip for something new; no finder's fee will be taken. 

   The dispatch origin for this call must be _Signed_ and the signing account must be a  member of the `Tippers` set. 

   - `reason`: The reason for, or the thing that deserves, the tip; generally this will be  a UTF-8-encoded URL. 

  - `who`: The account which should be credited for the tip.

  - `tip_value`: The amount of tip that the sender would like to give. The median tip value of active tippers will be given to the `who`. 

   Emits `NewTip` if successful. 

    

___


## transactionStorage
 
### checkProof(proof: `SpTransactionStorageProofTransactionStorageProof`)
- **interface**: `api.tx.transactionStorage.checkProof`
- **summary**:    Check storage proof for block number `block_number() - StoragePeriod`.  If such block does not exist the proof is expected to be `None`.   
 
### renew(block: `u32`, index: `u32`)
- **interface**: `api.tx.transactionStorage.renew`
- **summary**:    Renew previously stored data. Parameters are the block number that contains  previous `store` or `renew` call and transaction index within that block.  Transaction index is emitted in the `Stored` or `Renewed` event.  Applies same fees as `store`.   
 
### store(data: `Bytes`)
- **interface**: `api.tx.transactionStorage.store`
- **summary**:    Index and store data off chain. Minimum data size is 1 bytes, maximum is  `MaxTransactionSize`. Data will be removed after `STORAGE_PERIOD` blocks, unless `renew`  is called. #  

___


## treasury
 
### approveProposal(proposal_id: `Compact<u32>`)
- **interface**: `api.tx.treasury.approveProposal`
- **summary**:    Approve a proposal. At a later time, the proposal will be allocated to the beneficiary  and the original deposit will be returned. 

   May only be called from `T::ApproveOrigin`. 

    
 
### proposeSpend(value: `Compact<u128>`, beneficiary: `MultiAddress`)
- **interface**: `api.tx.treasury.proposeSpend`
- **summary**:    Put forward a suggestion for spending. A deposit proportional to the value  is reserved and slashed if the proposal is rejected. It is returned once the  proposal is awarded. 

    
 
### rejectProposal(proposal_id: `Compact<u32>`)
- **interface**: `api.tx.treasury.rejectProposal`
- **summary**:    Reject a proposed spend. The original deposit will be slashed. 

   May only be called from `T::RejectOrigin`. 

    
 
### removeApproval(proposal_id: `Compact<u32>`)
- **interface**: `api.tx.treasury.removeApproval`
- **summary**:    Force a previously approved proposal to be removed from the approval queue.  The original deposit will no longer be returned. 

   May only be called from `T::RejectOrigin`. 

  - `proposal_id`: The index of a proposal

    

   Errors: 

  - `ProposalNotApproved`: The `proposal_id` supplied was not found in the approval queue, i.e., the proposal has not been approved. This could also mean the proposal does not  exist altogether, thus there is no way it would have been approved in the first place. 
 
### spend(amount: `Compact<u128>`, beneficiary: `MultiAddress`)
- **interface**: `api.tx.treasury.spend`
- **summary**:    Propose and approve a spend of treasury funds. 

   - `origin`: Must be `SpendOrigin` with the `Success` value being at least `amount`. 

  - `amount`: The amount to be transferred from the treasury to the `beneficiary`.

  - `beneficiary`: The destination account for the transfer.

   NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the  beneficiary. 

___


## uniques
 
### approveTransfer(collection: `u32`, item: `u32`, delegate: `MultiAddress`)
- **interface**: `api.tx.uniques.approveTransfer`
- **summary**:    Approve an item to be transferred by a delegated third-party account. 

   Origin must be Signed and must be the owner of the `item`. 

   - `collection`: The collection of the item to be approved for delegated transfer. 

  - `item`: The item of the item to be approved for delegated transfer.

  - `delegate`: The account to delegate permission to transfer the item.

   Emits `ApprovedTransfer` on success. 

   Weight: `O(1)` 
 
### burn(collection: `u32`, item: `u32`, check_owner: `Option<MultiAddress>`)
- **interface**: `api.tx.uniques.burn`
- **summary**:    Destroy a single item. 

   Origin must be Signed and the sender should be the Admin of the `collection`. 

   - `collection`: The collection of the item to be burned. 

  - `item`: The item of the item to be burned.

  - `check_owner`: If `Some` then the operation will fail with `WrongOwner` unless the item is owned by this value. 

   Emits `Burned` with the actual amount burned. 

   Weight: `O(1)`  Modes: `check_owner.is_some()`. 
 
### cancelApproval(collection: `u32`, item: `u32`, maybe_check_delegate: `Option<MultiAddress>`)
- **interface**: `api.tx.uniques.cancelApproval`
- **summary**:    Cancel the prior approval for the transfer of an item by a delegate. 

   Origin must be either: 

  - the `Force` origin;

  - `Signed` with the signer being the Admin of the `collection`;

  - `Signed` with the signer being the Owner of the `item`;

   Arguments: 

  - `collection`: The collection of the item of whose approval will be cancelled.

  - `item`: The item of the item of whose approval will be cancelled.

  - `maybe_check_delegate`: If `Some` will ensure that the given account is the one to which permission of transfer is delegated. 

   Emits `ApprovalCancelled` on success. 

   Weight: `O(1)` 
 
### clearAttribute(collection: `u32`, maybe_item: `Option<u32>`, key: `Bytes`)
- **interface**: `api.tx.uniques.clearAttribute`
- **summary**:    Clear an attribute for a collection or item. 

   Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the  `collection`. 

   Any deposit is freed for the collection's owner. 

   - `collection`: The identifier of the collection whose item's metadata to clear. 

  - `maybe_item`: The identifier of the item whose metadata to clear.

  - `key`: The key of the attribute.

   Emits `AttributeCleared`. 

   Weight: `O(1)` 
 
### clearCollectionMetadata(collection: `u32`)
- **interface**: `api.tx.uniques.clearCollectionMetadata`
- **summary**:    Clear the metadata for a collection. 

   Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of  the `collection`. 

   Any deposit is freed for the collection's owner. 

   - `collection`: The identifier of the collection whose metadata to clear. 

   Emits `CollectionMetadataCleared`. 

   Weight: `O(1)` 
 
### clearMetadata(collection: `u32`, item: `u32`)
- **interface**: `api.tx.uniques.clearMetadata`
- **summary**:    Clear the metadata for an item. 

   Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the  `item`. 

   Any deposit is freed for the collection's owner. 

   - `collection`: The identifier of the collection whose item's metadata to clear. 

  - `item`: The identifier of the item whose metadata to clear.

   Emits `MetadataCleared`. 

   Weight: `O(1)` 
 
### create(collection: `u32`, admin: `MultiAddress`)
- **interface**: `api.tx.uniques.create`
- **summary**:    Issue a new collection of non-fungible items from a public origin. 

   This new collection has no items initially and its owner is the origin. 

   The origin must be Signed and the sender must have sufficient funds free. 

   `ItemDeposit` funds of sender are reserved. 

   Parameters: 

  - `collection`: The identifier of the new collection. This must not be currently in use.

  - `admin`: The admin of this collection. The admin is the initial address of each member of the collection's admin team. 

   Emits `Created` event when successful. 

   Weight: `O(1)` 
 
### destroy(collection: `u32`, witness: `PalletUniquesDestroyWitness`)
- **interface**: `api.tx.uniques.destroy`
- **summary**:    Destroy a collection of fungible items. 

   The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the  owner of the `collection`. 

   - `collection`: The identifier of the collection to be destroyed. 

  - `witness`: Information on the items minted in the collection. This must be correct. 

   Emits `Destroyed` event when successful. 

   Weight: `O(n + m)` where: 

  - `n = witness.items`

  - `m = witness.item_metadatas`

  - `a = witness.attributes`
 
### forceCreate(collection: `u32`, owner: `MultiAddress`, free_holding: `bool`)
- **interface**: `api.tx.uniques.forceCreate`
- **summary**:    Issue a new collection of non-fungible items from a privileged origin. 

   This new collection has no items initially. 

   The origin must conform to `ForceOrigin`. 

   Unlike `create`, no funds are reserved. 

   - `collection`: The identifier of the new item. This must not be currently in use. 

  - `owner`: The owner of this collection of items. The owner has full superuser permissions  over this item, but may later change and configure the permissions using  `transfer_ownership` and `set_team`. 

   Emits `ForceCreated` event when successful. 

   Weight: `O(1)` 
 
### forceItemStatus(collection: `u32`, owner: `MultiAddress`, issuer: `MultiAddress`, admin: `MultiAddress`, freezer: `MultiAddress`, free_holding: `bool`, is_frozen: `bool`)
- **interface**: `api.tx.uniques.forceItemStatus`
- **summary**:    Alter the attributes of a given item. 

   Origin must be `ForceOrigin`. 

   - `collection`: The identifier of the item. 

  - `owner`: The new Owner of this item.

  - `issuer`: The new Issuer of this item.

  - `admin`: The new Admin of this item.

  - `freezer`: The new Freezer of this item.

  - `free_holding`: Whether a deposit is taken for holding an item of this collection.

  - `is_frozen`: Whether this collection is frozen except for permissioned/admin instructions. 

   Emits `ItemStatusChanged` with the identity of the item. 

   Weight: `O(1)` 
 
### freeze(collection: `u32`, item: `u32`)
- **interface**: `api.tx.uniques.freeze`
- **summary**:    Disallow further unprivileged transfer of an item. 

   Origin must be Signed and the sender should be the Freezer of the `collection`. 

   - `collection`: The collection of the item to be frozen. 

  - `item`: The item of the item to be frozen.

   Emits `Frozen`. 

   Weight: `O(1)` 
 
### freezeCollection(collection: `u32`)
- **interface**: `api.tx.uniques.freezeCollection`
- **summary**:    Disallow further unprivileged transfers for a whole collection. 

   Origin must be Signed and the sender should be the Freezer of the `collection`. 

   - `collection`: The collection to be frozen. 

   Emits `CollectionFrozen`. 

   Weight: `O(1)` 
 
### mint(collection: `u32`, item: `u32`, owner: `MultiAddress`)
- **interface**: `api.tx.uniques.mint`
- **summary**:    Mint an item of a particular collection. 

   The origin must be Signed and the sender must be the Issuer of the `collection`. 

   - `collection`: The collection of the item to be minted. 

  - `item`: The item value of the item to be minted.

  - `beneficiary`: The initial owner of the minted item.

   Emits `Issued` event when successful. 

   Weight: `O(1)` 
 
### redeposit(collection: `u32`, items: `Vec<u32>`)
- **interface**: `api.tx.uniques.redeposit`
- **summary**:    Reevaluate the deposits on some items. 

   Origin must be Signed and the sender should be the Owner of the `collection`. 

   - `collection`: The collection to be frozen. 

  - `items`: The items of the collection whose deposits will be reevaluated.

   NOTE: This exists as a best-effort function. Any items which are unknown or  in the case that the owner account does not have reservable funds to pay for a  deposit increase are ignored. Generally the owner isn't going to call this on items  whose existing deposit is less than the refreshed deposit as it would only cost them,  so it's of little consequence. 

   It will still return an error in the case that the collection is unknown of the signer  is not permitted to call it. 

   Weight: `O(items.len())` 
 
### setAcceptOwnership(maybe_collection: `Option<u32>`)
- **interface**: `api.tx.uniques.setAcceptOwnership`
- **summary**:    Set (or reset) the acceptance of ownership for a particular account. 

   Origin must be `Signed` and if `maybe_collection` is `Some`, then the signer must have a  provider reference. 

   - `maybe_collection`: The identifier of the collection whose ownership the signer is  willing to accept, or if `None`, an indication that the signer is willing to accept no  ownership transferal. 

   Emits `OwnershipAcceptanceChanged`. 
 
### setAttribute(collection: `u32`, maybe_item: `Option<u32>`, key: `Bytes`, value: `Bytes`)
- **interface**: `api.tx.uniques.setAttribute`
- **summary**:    Set an attribute for a collection or item. 

   Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the  `collection`. 

   If the origin is Signed, then funds of signer are reserved according to the formula:  `MetadataDepositBase + DepositPerByte * (key.len + value.len)` taking into  account any already reserved funds. 

   - `collection`: The identifier of the collection whose item's metadata to set. 

  - `maybe_item`: The identifier of the item whose metadata to set.

  - `key`: The key of the attribute.

  - `value`: The value to which to set the attribute.

   Emits `AttributeSet`. 

   Weight: `O(1)` 
 
### setCollectionMaxSupply(collection: `u32`, max_supply: `u32`)
- **interface**: `api.tx.uniques.setCollectionMaxSupply`
- **summary**:    Set the maximum amount of items a collection could have. 

   Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of  the `collection`. 

   Note: This function can only succeed once per collection. 

   - `collection`: The identifier of the collection to change. 

  - `max_supply`: The maximum amount of items a collection could have.

   Emits `CollectionMaxSupplySet` event when successful. 
 
### setCollectionMetadata(collection: `u32`, data: `Bytes`, is_frozen: `bool`)
- **interface**: `api.tx.uniques.setCollectionMetadata`
- **summary**:    Set the metadata for a collection. 

   Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of  the `collection`. 

   If the origin is `Signed`, then funds of signer are reserved according to the formula:  `MetadataDepositBase + DepositPerByte * data.len` taking into  account any already reserved funds. 

   - `collection`: The identifier of the item whose metadata to update. 

  - `data`: The general information of this item. Limited in length by `StringLimit`.

  - `is_frozen`: Whether the metadata should be frozen against further changes.

   Emits `CollectionMetadataSet`. 

   Weight: `O(1)` 
 
### setMetadata(collection: `u32`, item: `u32`, data: `Bytes`, is_frozen: `bool`)
- **interface**: `api.tx.uniques.setMetadata`
- **summary**:    Set the metadata for an item. 

   Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the  `collection`. 

   If the origin is Signed, then funds of signer are reserved according to the formula:  `MetadataDepositBase + DepositPerByte * data.len` taking into  account any already reserved funds. 

   - `collection`: The identifier of the collection whose item's metadata to set. 

  - `item`: The identifier of the item whose metadata to set.

  - `data`: The general information of this item. Limited in length by `StringLimit`.

  - `is_frozen`: Whether the metadata should be frozen against further changes.

   Emits `MetadataSet`. 

   Weight: `O(1)` 
 
### setTeam(collection: `u32`, issuer: `MultiAddress`, admin: `MultiAddress`, freezer: `MultiAddress`)
- **interface**: `api.tx.uniques.setTeam`
- **summary**:    Change the Issuer, Admin and Freezer of a collection. 

   Origin must be Signed and the sender should be the Owner of the `collection`. 

   - `collection`: The collection whose team should be changed. 

  - `issuer`: The new Issuer of this collection.

  - `admin`: The new Admin of this collection.

  - `freezer`: The new Freezer of this collection.

   Emits `TeamChanged`. 

   Weight: `O(1)` 
 
### thaw(collection: `u32`, item: `u32`)
- **interface**: `api.tx.uniques.thaw`
- **summary**:    Re-allow unprivileged transfer of an item. 

   Origin must be Signed and the sender should be the Freezer of the `collection`. 

   - `collection`: The collection of the item to be thawed. 

  - `item`: The item of the item to be thawed.

   Emits `Thawed`. 

   Weight: `O(1)` 
 
### thawCollection(collection: `u32`)
- **interface**: `api.tx.uniques.thawCollection`
- **summary**:    Re-allow unprivileged transfers for a whole collection. 

   Origin must be Signed and the sender should be the Admin of the `collection`. 

   - `collection`: The collection to be thawed. 

   Emits `CollectionThawed`. 

   Weight: `O(1)` 
 
### transfer(collection: `u32`, item: `u32`, dest: `MultiAddress`)
- **interface**: `api.tx.uniques.transfer`
- **summary**:    Move an item from the sender account to another. 

   Origin must be Signed and the signing account must be either: 

  - the Admin of the `collection`;

  - the Owner of the `item`;

  - the approved delegate for the `item` (in this case, the approval is reset).

   Arguments: 

  - `collection`: The collection of the item to be transferred.

  - `item`: The item of the item to be transferred.

  - `dest`: The account to receive ownership of the item.

   Emits `Transferred`. 

   Weight: `O(1)` 
 
### transferOwnership(collection: `u32`, owner: `MultiAddress`)
- **interface**: `api.tx.uniques.transferOwnership`
- **summary**:    Change the Owner of a collection. 

   Origin must be Signed and the sender should be the Owner of the `collection`. 

   - `collection`: The collection whose owner should be changed. 

  - `owner`: The new Owner of this collection. They must have called `set_accept_ownership` with `collection` in order for this operation to succeed. 

   Emits `OwnerChanged`. 

   Weight: `O(1)` 

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

   May be called from any origin. 

   - `calls`: The calls to be dispatched from the same origin. The number of call must not  exceed the constant: `batched_calls_limit` (available in constant metadata). 

   If origin is root then call are dispatch without checking origin filter. (This includes  bypassing `frame_system::Config::BaseCallFilter`). 

    

   This will return `Ok` in all circumstances. To determine the success of the batch, an  event is deposited. If a call failed and the batch was interrupted, then the  `BatchInterrupted` event is deposited, along with the number of successful calls made  and the error of the failed call. If all were successful, then the `BatchCompleted`  event is deposited. 
 
### batchAll(calls: `Vec<Call>`)
- **interface**: `api.tx.utility.batchAll`
- **summary**:    Send a batch of dispatch calls and atomically execute them.  The whole transaction will rollback and fail if any of the calls failed. 

   May be called from any origin. 

   - `calls`: The calls to be dispatched from the same origin. The number of call must not  exceed the constant: `batched_calls_limit` (available in constant metadata). 

   If origin is root then call are dispatch without checking origin filter. (This includes  bypassing `frame_system::Config::BaseCallFilter`). 

    
 
### dispatchAs(as_origin: `NodeRuntimeOriginCaller`, call: `Call`)
- **interface**: `api.tx.utility.dispatchAs`
- **summary**:    Dispatches a function call with a provided origin. 

   The dispatch origin for this call must be _Root_. 

    
 
### forceBatch(calls: `Vec<Call>`)
- **interface**: `api.tx.utility.forceBatch`
- **summary**:    Send a batch of dispatch calls.  Unlike `batch`, it allows errors and won't interrupt. 

   May be called from any origin. 

   - `calls`: The calls to be dispatched from the same origin. The number of call must not  exceed the constant: `batched_calls_limit` (available in constant metadata). 

   If origin is root then call are dispatch without checking origin filter. (This includes  bypassing `frame_system::Config::BaseCallFilter`). 

    

___


## vesting
 
### forceVestedTransfer(source: `MultiAddress`, target: `MultiAddress`, schedule: `PalletVestingVestingInfo`)
- **interface**: `api.tx.vesting.forceVestedTransfer`
- **summary**:    Force a vested transfer. 

   The dispatch origin for this call must be _Root_. 

   - `source`: The account whose funds should be transferred. 

  - `target`: The account that should be transferred the vested funds.

  - `schedule`: The vesting schedule attached to the transfer.

   Emits `VestingCreated`. 

   NOTE: This will unlock all schedules through the current block. 

    
 
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

    
 
### vestOther(target: `MultiAddress`)
- **interface**: `api.tx.vesting.vestOther`
- **summary**:    Unlock any vested funds of a `target` account. 

   The dispatch origin for this call must be _Signed_. 

   - `target`: The account whose vested funds should be unlocked. Must have funds still  locked under this pallet. 

   Emits either `VestingCompleted` or `VestingUpdated`. 

    
 
### vestedTransfer(target: `MultiAddress`, schedule: `PalletVestingVestingInfo`)
- **interface**: `api.tx.vesting.vestedTransfer`
- **summary**:    Create a vested transfer. 

   The dispatch origin for this call must be _Signed_. 

   - `target`: The account receiving the vested funds. 

  - `schedule`: The vesting schedule attached to the transfer.

   Emits `VestingCreated`. 

   NOTE: This will unlock all schedules through the current block. 

    

___


## whitelist
 
### dispatchWhitelistedCall(call_hash: `H256`, call_weight_witness: `u64`)
- **interface**: `api.tx.whitelist.dispatchWhitelistedCall`
 
### dispatchWhitelistedCallWithPreimage(call: `Call`)
- **interface**: `api.tx.whitelist.dispatchWhitelistedCallWithPreimage`
 
### removeWhitelistedCall(call_hash: `H256`)
- **interface**: `api.tx.whitelist.removeWhitelistedCall`
 
### whitelistCall(call_hash: `H256`)
- **interface**: `api.tx.whitelist.whitelistCall`
