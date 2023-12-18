---
title: Extrinsics
---

The following sections contain Extrinsics methods are part of the default Substrate runtime. On the api, these are exposed via `api.tx.<module>.<method>`. 

(NOTE: These were generated from a static/snapshot view of a recent default Substrate runtime. Some items may not be available in older nodes, or in any customized implementations.)

- **[alliance](#alliance)**

- **[allianceMotion](#alliancemotion)**

- **[assetConversion](#assetconversion)**

- **[assetRate](#assetrate)**

- **[assets](#assets)**

- **[babe](#babe)**

- **[balances](#balances)**

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

- **[identity](#identity)**

- **[imOnline](#imonline)**

- **[indices](#indices)**

- **[lottery](#lottery)**

- **[messageQueue](#messagequeue)**

- **[mixnet](#mixnet)**

- **[multisig](#multisig)**

- **[nftFractionalization](#nftfractionalization)**

- **[nfts](#nfts)**

- **[nis](#nis)**

- **[nominationPools](#nominationpools)**

- **[poolAssets](#poolassets)**

- **[pov](#pov)**

- **[preimage](#preimage)**

- **[proxy](#proxy)**

- **[rankedCollective](#rankedcollective)**

- **[rankedPolls](#rankedpolls)**

- **[recovery](#recovery)**

- **[referenda](#referenda)**

- **[remark](#remark)**

- **[rootTesting](#roottesting)**

- **[safeMode](#safemode)**

- **[salary](#salary)**

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

- **[txPause](#txpause)**

- **[uniques](#uniques)**

- **[utility](#utility)**

- **[vesting](#vesting)**

- **[voterList](#voterlist)**

- **[whitelist](#whitelist)**


___


## alliance
 
### abdicateFellowStatus()
- **interface**: `api.tx.alliance.abdicateFellowStatus`
- **summary**:    See [`Pallet::abdicate_fellow_status`]. 
 
### addUnscrupulousItems(items: `Vec<PalletAllianceUnscrupulousItem>`)
- **interface**: `api.tx.alliance.addUnscrupulousItems`
- **summary**:    See [`Pallet::add_unscrupulous_items`]. 
 
### announce(announcement: `PalletAllianceCid`)
- **interface**: `api.tx.alliance.announce`
- **summary**:    See [`Pallet::announce`]. 
 
### close(proposal_hash: `H256`, index: `Compact<u32>`, proposal_weight_bound: `SpWeightsWeightV2Weight`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.alliance.close`
- **summary**:    See [`Pallet::close`]. 
 
### disband(witness: `PalletAllianceDisbandWitness`)
- **interface**: `api.tx.alliance.disband`
- **summary**:    See [`Pallet::disband`]. 
 
### elevateAlly(ally: `MultiAddress`)
- **interface**: `api.tx.alliance.elevateAlly`
- **summary**:    See [`Pallet::elevate_ally`]. 
 
### giveRetirementNotice()
- **interface**: `api.tx.alliance.giveRetirementNotice`
- **summary**:    See [`Pallet::give_retirement_notice`]. 
 
### initMembers(fellows: `Vec<AccountId32>`, allies: `Vec<AccountId32>`)
- **interface**: `api.tx.alliance.initMembers`
- **summary**:    See [`Pallet::init_members`]. 
 
### joinAlliance()
- **interface**: `api.tx.alliance.joinAlliance`
- **summary**:    See [`Pallet::join_alliance`]. 
 
### kickMember(who: `MultiAddress`)
- **interface**: `api.tx.alliance.kickMember`
- **summary**:    See [`Pallet::kick_member`]. 
 
### nominateAlly(who: `MultiAddress`)
- **interface**: `api.tx.alliance.nominateAlly`
- **summary**:    See [`Pallet::nominate_ally`]. 
 
### propose(threshold: `Compact<u32>`, proposal: `Call`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.alliance.propose`
- **summary**:    See [`Pallet::propose`]. 
 
### removeAnnouncement(announcement: `PalletAllianceCid`)
- **interface**: `api.tx.alliance.removeAnnouncement`
- **summary**:    See [`Pallet::remove_announcement`]. 
 
### removeUnscrupulousItems(items: `Vec<PalletAllianceUnscrupulousItem>`)
- **interface**: `api.tx.alliance.removeUnscrupulousItems`
- **summary**:    See [`Pallet::remove_unscrupulous_items`]. 
 
### retire()
- **interface**: `api.tx.alliance.retire`
- **summary**:    See [`Pallet::retire`]. 
 
### setRule(rule: `PalletAllianceCid`)
- **interface**: `api.tx.alliance.setRule`
- **summary**:    See [`Pallet::set_rule`]. 
 
### vote(proposal: `H256`, index: `Compact<u32>`, approve: `bool`)
- **interface**: `api.tx.alliance.vote`
- **summary**:    See [`Pallet::vote`]. 

___


## allianceMotion
 
### close(proposal_hash: `H256`, index: `Compact<u32>`, proposal_weight_bound: `SpWeightsWeightV2Weight`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.allianceMotion.close`
- **summary**:    See [`Pallet::close`]. 
 
### disapproveProposal(proposal_hash: `H256`)
- **interface**: `api.tx.allianceMotion.disapproveProposal`
- **summary**:    See [`Pallet::disapprove_proposal`]. 
 
### execute(proposal: `Call`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.allianceMotion.execute`
- **summary**:    See [`Pallet::execute`]. 
 
### propose(threshold: `Compact<u32>`, proposal: `Call`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.allianceMotion.propose`
- **summary**:    See [`Pallet::propose`]. 
 
### setMembers(new_members: `Vec<AccountId32>`, prime: `Option<AccountId32>`, old_count: `u32`)
- **interface**: `api.tx.allianceMotion.setMembers`
- **summary**:    See [`Pallet::set_members`]. 
 
### vote(proposal: `H256`, index: `Compact<u32>`, approve: `bool`)
- **interface**: `api.tx.allianceMotion.vote`
- **summary**:    See [`Pallet::vote`]. 

___


## assetConversion
 
### addLiquidity(asset1: `PalletAssetConversionNativeOrAssetId`, asset2: `PalletAssetConversionNativeOrAssetId`, amount1_desired: `u128`, amount2_desired: `u128`, amount1_min: `u128`, amount2_min: `u128`, mint_to: `AccountId32`)
- **interface**: `api.tx.assetConversion.addLiquidity`
- **summary**:    See [`Pallet::add_liquidity`]. 
 
### createPool(asset1: `PalletAssetConversionNativeOrAssetId`, asset2: `PalletAssetConversionNativeOrAssetId`)
- **interface**: `api.tx.assetConversion.createPool`
- **summary**:    See [`Pallet::create_pool`]. 
 
### removeLiquidity(asset1: `PalletAssetConversionNativeOrAssetId`, asset2: `PalletAssetConversionNativeOrAssetId`, lp_token_burn: `u128`, amount1_min_receive: `u128`, amount2_min_receive: `u128`, withdraw_to: `AccountId32`)
- **interface**: `api.tx.assetConversion.removeLiquidity`
- **summary**:    See [`Pallet::remove_liquidity`]. 
 
### swapExactTokensForTokens(path: `Vec<PalletAssetConversionNativeOrAssetId>`, amount_in: `u128`, amount_out_min: `u128`, send_to: `AccountId32`, keep_alive: `bool`)
- **interface**: `api.tx.assetConversion.swapExactTokensForTokens`
- **summary**:    See [`Pallet::swap_exact_tokens_for_tokens`]. 
 
### swapTokensForExactTokens(path: `Vec<PalletAssetConversionNativeOrAssetId>`, amount_out: `u128`, amount_in_max: `u128`, send_to: `AccountId32`, keep_alive: `bool`)
- **interface**: `api.tx.assetConversion.swapTokensForExactTokens`
- **summary**:    See [`Pallet::swap_tokens_for_exact_tokens`]. 

___


## assetRate
 
### create(asset_kind: `u32`, rate: `u128`)
- **interface**: `api.tx.assetRate.create`
- **summary**:    See [`Pallet::create`]. 
 
### remove(asset_kind: `u32`)
- **interface**: `api.tx.assetRate.remove`
- **summary**:    See [`Pallet::remove`]. 
 
### update(asset_kind: `u32`, rate: `u128`)
- **interface**: `api.tx.assetRate.update`
- **summary**:    See [`Pallet::update`]. 

___


## assets
 
### approveTransfer(id: `Compact<u32>`, delegate: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.assets.approveTransfer`
- **summary**:    See [`Pallet::approve_transfer`]. 
 
### block(id: `Compact<u32>`, who: `MultiAddress`)
- **interface**: `api.tx.assets.block`
- **summary**:    See [`Pallet::block`]. 
 
### burn(id: `Compact<u32>`, who: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.assets.burn`
- **summary**:    See [`Pallet::burn`]. 
 
### cancelApproval(id: `Compact<u32>`, delegate: `MultiAddress`)
- **interface**: `api.tx.assets.cancelApproval`
- **summary**:    See [`Pallet::cancel_approval`]. 
 
### clearMetadata(id: `Compact<u32>`)
- **interface**: `api.tx.assets.clearMetadata`
- **summary**:    See [`Pallet::clear_metadata`]. 
 
### create(id: `Compact<u32>`, admin: `MultiAddress`, min_balance: `u128`)
- **interface**: `api.tx.assets.create`
- **summary**:    See [`Pallet::create`]. 
 
### destroyAccounts(id: `Compact<u32>`)
- **interface**: `api.tx.assets.destroyAccounts`
- **summary**:    See [`Pallet::destroy_accounts`]. 
 
### destroyApprovals(id: `Compact<u32>`)
- **interface**: `api.tx.assets.destroyApprovals`
- **summary**:    See [`Pallet::destroy_approvals`]. 
 
### finishDestroy(id: `Compact<u32>`)
- **interface**: `api.tx.assets.finishDestroy`
- **summary**:    See [`Pallet::finish_destroy`]. 
 
### forceAssetStatus(id: `Compact<u32>`, owner: `MultiAddress`, issuer: `MultiAddress`, admin: `MultiAddress`, freezer: `MultiAddress`, min_balance: `Compact<u128>`, is_sufficient: `bool`, is_frozen: `bool`)
- **interface**: `api.tx.assets.forceAssetStatus`
- **summary**:    See [`Pallet::force_asset_status`]. 
 
### forceCancelApproval(id: `Compact<u32>`, owner: `MultiAddress`, delegate: `MultiAddress`)
- **interface**: `api.tx.assets.forceCancelApproval`
- **summary**:    See [`Pallet::force_cancel_approval`]. 
 
### forceClearMetadata(id: `Compact<u32>`)
- **interface**: `api.tx.assets.forceClearMetadata`
- **summary**:    See [`Pallet::force_clear_metadata`]. 
 
### forceCreate(id: `Compact<u32>`, owner: `MultiAddress`, is_sufficient: `bool`, min_balance: `Compact<u128>`)
- **interface**: `api.tx.assets.forceCreate`
- **summary**:    See [`Pallet::force_create`]. 
 
### forceSetMetadata(id: `Compact<u32>`, name: `Bytes`, symbol: `Bytes`, decimals: `u8`, is_frozen: `bool`)
- **interface**: `api.tx.assets.forceSetMetadata`
- **summary**:    See [`Pallet::force_set_metadata`]. 
 
### forceTransfer(id: `Compact<u32>`, source: `MultiAddress`, dest: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.assets.forceTransfer`
- **summary**:    See [`Pallet::force_transfer`]. 
 
### freeze(id: `Compact<u32>`, who: `MultiAddress`)
- **interface**: `api.tx.assets.freeze`
- **summary**:    See [`Pallet::freeze`]. 
 
### freezeAsset(id: `Compact<u32>`)
- **interface**: `api.tx.assets.freezeAsset`
- **summary**:    See [`Pallet::freeze_asset`]. 
 
### mint(id: `Compact<u32>`, beneficiary: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.assets.mint`
- **summary**:    See [`Pallet::mint`]. 
 
### refund(id: `Compact<u32>`, allow_burn: `bool`)
- **interface**: `api.tx.assets.refund`
- **summary**:    See [`Pallet::refund`]. 
 
### refundOther(id: `Compact<u32>`, who: `MultiAddress`)
- **interface**: `api.tx.assets.refundOther`
- **summary**:    See [`Pallet::refund_other`]. 
 
### setMetadata(id: `Compact<u32>`, name: `Bytes`, symbol: `Bytes`, decimals: `u8`)
- **interface**: `api.tx.assets.setMetadata`
- **summary**:    See [`Pallet::set_metadata`]. 
 
### setMinBalance(id: `Compact<u32>`, min_balance: `u128`)
- **interface**: `api.tx.assets.setMinBalance`
- **summary**:    See [`Pallet::set_min_balance`]. 
 
### setTeam(id: `Compact<u32>`, issuer: `MultiAddress`, admin: `MultiAddress`, freezer: `MultiAddress`)
- **interface**: `api.tx.assets.setTeam`
- **summary**:    See [`Pallet::set_team`]. 
 
### startDestroy(id: `Compact<u32>`)
- **interface**: `api.tx.assets.startDestroy`
- **summary**:    See [`Pallet::start_destroy`]. 
 
### thaw(id: `Compact<u32>`, who: `MultiAddress`)
- **interface**: `api.tx.assets.thaw`
- **summary**:    See [`Pallet::thaw`]. 
 
### thawAsset(id: `Compact<u32>`)
- **interface**: `api.tx.assets.thawAsset`
- **summary**:    See [`Pallet::thaw_asset`]. 
 
### touch(id: `Compact<u32>`)
- **interface**: `api.tx.assets.touch`
- **summary**:    See [`Pallet::touch`]. 
 
### touchOther(id: `Compact<u32>`, who: `MultiAddress`)
- **interface**: `api.tx.assets.touchOther`
- **summary**:    See [`Pallet::touch_other`]. 
 
### transfer(id: `Compact<u32>`, target: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.assets.transfer`
- **summary**:    See [`Pallet::transfer`]. 
 
### transferApproved(id: `Compact<u32>`, owner: `MultiAddress`, destination: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.assets.transferApproved`
- **summary**:    See [`Pallet::transfer_approved`]. 
 
### transferKeepAlive(id: `Compact<u32>`, target: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.assets.transferKeepAlive`
- **summary**:    See [`Pallet::transfer_keep_alive`]. 
 
### transferOwnership(id: `Compact<u32>`, owner: `MultiAddress`)
- **interface**: `api.tx.assets.transferOwnership`
- **summary**:    See [`Pallet::transfer_ownership`]. 

___


## babe
 
### planConfigChange(config: `SpConsensusBabeDigestsNextConfigDescriptor`)
- **interface**: `api.tx.babe.planConfigChange`
- **summary**:    See [`Pallet::plan_config_change`]. 
 
### reportEquivocation(equivocation_proof: `SpConsensusSlotsEquivocationProof`, key_owner_proof: `SpSessionMembershipProof`)
- **interface**: `api.tx.babe.reportEquivocation`
- **summary**:    See [`Pallet::report_equivocation`]. 
 
### reportEquivocationUnsigned(equivocation_proof: `SpConsensusSlotsEquivocationProof`, key_owner_proof: `SpSessionMembershipProof`)
- **interface**: `api.tx.babe.reportEquivocationUnsigned`
- **summary**:    See [`Pallet::report_equivocation_unsigned`]. 

___


## balances
 
### forceSetBalance(who: `MultiAddress`, new_free: `Compact<u128>`)
- **interface**: `api.tx.balances.forceSetBalance`
- **summary**:    See [`Pallet::force_set_balance`]. 
 
### forceTransfer(source: `MultiAddress`, dest: `MultiAddress`, value: `Compact<u128>`)
- **interface**: `api.tx.balances.forceTransfer`
- **summary**:    See [`Pallet::force_transfer`]. 
 
### forceUnreserve(who: `MultiAddress`, amount: `u128`)
- **interface**: `api.tx.balances.forceUnreserve`
- **summary**:    See [`Pallet::force_unreserve`]. 
 
### transferAll(dest: `MultiAddress`, keep_alive: `bool`)
- **interface**: `api.tx.balances.transferAll`
- **summary**:    See [`Pallet::transfer_all`]. 
 
### transferAllowDeath(dest: `MultiAddress`, value: `Compact<u128>`)
- **interface**: `api.tx.balances.transferAllowDeath`
- **summary**:    See [`Pallet::transfer_allow_death`]. 
 
### transferKeepAlive(dest: `MultiAddress`, value: `Compact<u128>`)
- **interface**: `api.tx.balances.transferKeepAlive`
- **summary**:    See [`Pallet::transfer_keep_alive`]. 
 
### upgradeAccounts(who: `Vec<AccountId32>`)
- **interface**: `api.tx.balances.upgradeAccounts`
- **summary**:    See [`Pallet::upgrade_accounts`]. 

___


## bounties
 
### acceptCurator(bounty_id: `Compact<u32>`)
- **interface**: `api.tx.bounties.acceptCurator`
- **summary**:    See [`Pallet::accept_curator`]. 
 
### approveBounty(bounty_id: `Compact<u32>`)
- **interface**: `api.tx.bounties.approveBounty`
- **summary**:    See [`Pallet::approve_bounty`]. 
 
### awardBounty(bounty_id: `Compact<u32>`, beneficiary: `MultiAddress`)
- **interface**: `api.tx.bounties.awardBounty`
- **summary**:    See [`Pallet::award_bounty`]. 
 
### claimBounty(bounty_id: `Compact<u32>`)
- **interface**: `api.tx.bounties.claimBounty`
- **summary**:    See [`Pallet::claim_bounty`]. 
 
### closeBounty(bounty_id: `Compact<u32>`)
- **interface**: `api.tx.bounties.closeBounty`
- **summary**:    See [`Pallet::close_bounty`]. 
 
### extendBountyExpiry(bounty_id: `Compact<u32>`, remark: `Bytes`)
- **interface**: `api.tx.bounties.extendBountyExpiry`
- **summary**:    See [`Pallet::extend_bounty_expiry`]. 
 
### proposeBounty(value: `Compact<u128>`, description: `Bytes`)
- **interface**: `api.tx.bounties.proposeBounty`
- **summary**:    See [`Pallet::propose_bounty`]. 
 
### proposeCurator(bounty_id: `Compact<u32>`, curator: `MultiAddress`, fee: `Compact<u128>`)
- **interface**: `api.tx.bounties.proposeCurator`
- **summary**:    See [`Pallet::propose_curator`]. 
 
### unassignCurator(bounty_id: `Compact<u32>`)
- **interface**: `api.tx.bounties.unassignCurator`
- **summary**:    See [`Pallet::unassign_curator`]. 

___


## broker
 
### assign(region_id: `PalletBrokerRegionId`, task: `u32`, finality: `PalletBrokerFinality`)
- **interface**: `api.tx.broker.assign`
- **summary**:    See [`Pallet::assign`]. 
 
### claimRevenue(region_id: `PalletBrokerRegionId`, max_timeslices: `u32`)
- **interface**: `api.tx.broker.claimRevenue`
- **summary**:    See [`Pallet::claim_revenue`]. 
 
### configure(config: `PalletBrokerConfigRecord`)
- **interface**: `api.tx.broker.configure`
- **summary**:    See [`Pallet::configure`]. 
 
### dropContribution(region_id: `PalletBrokerRegionId`)
- **interface**: `api.tx.broker.dropContribution`
- **summary**:    See [`Pallet::drop_contribution`]. 
 
### dropHistory(when: `u32`)
- **interface**: `api.tx.broker.dropHistory`
- **summary**:    See [`Pallet::drop_history`]. 
 
### dropRegion(region_id: `PalletBrokerRegionId`)
- **interface**: `api.tx.broker.dropRegion`
- **summary**:    See [`Pallet::drop_region`]. 
 
### dropRenewal(core: `u16`, when: `u32`)
- **interface**: `api.tx.broker.dropRenewal`
- **summary**:    See [`Pallet::drop_renewal`]. 
 
### interlace(region_id: `PalletBrokerRegionId`, pivot: `PalletBrokerCoreMask`)
- **interface**: `api.tx.broker.interlace`
- **summary**:    See [`Pallet::interlace`]. 
 
### partition(region_id: `PalletBrokerRegionId`, pivot: `u32`)
- **interface**: `api.tx.broker.partition`
- **summary**:    See [`Pallet::partition`]. 
 
### pool(region_id: `PalletBrokerRegionId`, payee: `AccountId32`, finality: `PalletBrokerFinality`)
- **interface**: `api.tx.broker.pool`
- **summary**:    See [`Pallet::pool`]. 
 
### purchase(price_limit: `u128`)
- **interface**: `api.tx.broker.purchase`
- **summary**:    See [`Pallet::purchase`]. 
 
### purchaseCredit(amount: `u128`, beneficiary: `AccountId32`)
- **interface**: `api.tx.broker.purchaseCredit`
- **summary**:    See [`Pallet::purchase_credit`]. 
 
### renew(core: `u16`)
- **interface**: `api.tx.broker.renew`
- **summary**:    See [`Pallet::renew`]. 
 
### requestCoreCount(core_count: `u16`)
- **interface**: `api.tx.broker.requestCoreCount`
- **summary**:    See [`Pallet::request_core_count`]. 
 
### reserve(workload: `Vec<PalletBrokerScheduleItem>`)
- **interface**: `api.tx.broker.reserve`
- **summary**:    See [`Pallet::reserve`]. 
 
### setLease(task: `u32`, until: `u32`)
- **interface**: `api.tx.broker.setLease`
- **summary**:    See [`Pallet::set_lease`]. 
 
### startSales(initial_price: `u128`, core_count: `u16`)
- **interface**: `api.tx.broker.startSales`
- **summary**:    See [`Pallet::start_sales`]. 
 
### transfer(region_id: `PalletBrokerRegionId`, new_owner: `AccountId32`)
- **interface**: `api.tx.broker.transfer`
- **summary**:    See [`Pallet::transfer`]. 
 
### unreserve(item_index: `u32`)
- **interface**: `api.tx.broker.unreserve`
- **summary**:    See [`Pallet::unreserve`]. 

___


## childBounties
 
### acceptCurator(parent_bounty_id: `Compact<u32>`, child_bounty_id: `Compact<u32>`)
- **interface**: `api.tx.childBounties.acceptCurator`
- **summary**:    See [`Pallet::accept_curator`]. 
 
### addChildBounty(parent_bounty_id: `Compact<u32>`, value: `Compact<u128>`, description: `Bytes`)
- **interface**: `api.tx.childBounties.addChildBounty`
- **summary**:    See [`Pallet::add_child_bounty`]. 
 
### awardChildBounty(parent_bounty_id: `Compact<u32>`, child_bounty_id: `Compact<u32>`, beneficiary: `MultiAddress`)
- **interface**: `api.tx.childBounties.awardChildBounty`
- **summary**:    See [`Pallet::award_child_bounty`]. 
 
### claimChildBounty(parent_bounty_id: `Compact<u32>`, child_bounty_id: `Compact<u32>`)
- **interface**: `api.tx.childBounties.claimChildBounty`
- **summary**:    See [`Pallet::claim_child_bounty`]. 
 
### closeChildBounty(parent_bounty_id: `Compact<u32>`, child_bounty_id: `Compact<u32>`)
- **interface**: `api.tx.childBounties.closeChildBounty`
- **summary**:    See [`Pallet::close_child_bounty`]. 
 
### proposeCurator(parent_bounty_id: `Compact<u32>`, child_bounty_id: `Compact<u32>`, curator: `MultiAddress`, fee: `Compact<u128>`)
- **interface**: `api.tx.childBounties.proposeCurator`
- **summary**:    See [`Pallet::propose_curator`]. 
 
### unassignCurator(parent_bounty_id: `Compact<u32>`, child_bounty_id: `Compact<u32>`)
- **interface**: `api.tx.childBounties.unassignCurator`
- **summary**:    See [`Pallet::unassign_curator`]. 

___


## contracts
 
### call(dest: `MultiAddress`, value: `Compact<u128>`, gas_limit: `SpWeightsWeightV2Weight`, storage_deposit_limit: `Option<Compact<u128>>`, data: `Bytes`)
- **interface**: `api.tx.contracts.call`
- **summary**:    See [`Pallet::call`]. 
 
### callOldWeight(dest: `MultiAddress`, value: `Compact<u128>`, gas_limit: `Compact<u64>`, storage_deposit_limit: `Option<Compact<u128>>`, data: `Bytes`)
- **interface**: `api.tx.contracts.callOldWeight`
- **summary**:    See [`Pallet::call_old_weight`]. 
 
### instantiate(value: `Compact<u128>`, gas_limit: `SpWeightsWeightV2Weight`, storage_deposit_limit: `Option<Compact<u128>>`, code_hash: `H256`, data: `Bytes`, salt: `Bytes`)
- **interface**: `api.tx.contracts.instantiate`
- **summary**:    See [`Pallet::instantiate`]. 
 
### instantiateOldWeight(value: `Compact<u128>`, gas_limit: `Compact<u64>`, storage_deposit_limit: `Option<Compact<u128>>`, code_hash: `H256`, data: `Bytes`, salt: `Bytes`)
- **interface**: `api.tx.contracts.instantiateOldWeight`
- **summary**:    See [`Pallet::instantiate_old_weight`]. 
 
### instantiateWithCode(value: `Compact<u128>`, gas_limit: `SpWeightsWeightV2Weight`, storage_deposit_limit: `Option<Compact<u128>>`, code: `Bytes`, data: `Bytes`, salt: `Bytes`)
- **interface**: `api.tx.contracts.instantiateWithCode`
- **summary**:    See [`Pallet::instantiate_with_code`]. 
 
### instantiateWithCodeOldWeight(value: `Compact<u128>`, gas_limit: `Compact<u64>`, storage_deposit_limit: `Option<Compact<u128>>`, code: `Bytes`, data: `Bytes`, salt: `Bytes`)
- **interface**: `api.tx.contracts.instantiateWithCodeOldWeight`
- **summary**:    See [`Pallet::instantiate_with_code_old_weight`]. 
 
### migrate(weight_limit: `SpWeightsWeightV2Weight`)
- **interface**: `api.tx.contracts.migrate`
- **summary**:    See [`Pallet::migrate`]. 
 
### removeCode(code_hash: `H256`)
- **interface**: `api.tx.contracts.removeCode`
- **summary**:    See [`Pallet::remove_code`]. 
 
### setCode(dest: `MultiAddress`, code_hash: `H256`)
- **interface**: `api.tx.contracts.setCode`
- **summary**:    See [`Pallet::set_code`]. 
 
### uploadCode(code: `Bytes`, storage_deposit_limit: `Option<Compact<u128>>`, determinism: `PalletContractsWasmDeterminism`)
- **interface**: `api.tx.contracts.uploadCode`
- **summary**:    See [`Pallet::upload_code`]. 

___


## convictionVoting
 
### delegate(class: `u16`, to: `MultiAddress`, conviction: `PalletConvictionVotingConviction`, balance: `u128`)
- **interface**: `api.tx.convictionVoting.delegate`
- **summary**:    See [`Pallet::delegate`]. 
 
### removeOtherVote(target: `MultiAddress`, class: `u16`, index: `u32`)
- **interface**: `api.tx.convictionVoting.removeOtherVote`
- **summary**:    See [`Pallet::remove_other_vote`]. 
 
### removeVote(class: `Option<u16>`, index: `u32`)
- **interface**: `api.tx.convictionVoting.removeVote`
- **summary**:    See [`Pallet::remove_vote`]. 
 
### undelegate(class: `u16`)
- **interface**: `api.tx.convictionVoting.undelegate`
- **summary**:    See [`Pallet::undelegate`]. 
 
### unlock(class: `u16`, target: `MultiAddress`)
- **interface**: `api.tx.convictionVoting.unlock`
- **summary**:    See [`Pallet::unlock`]. 
 
### vote(poll_index: `Compact<u32>`, vote: `PalletConvictionVotingVoteAccountVote`)
- **interface**: `api.tx.convictionVoting.vote`
- **summary**:    See [`Pallet::vote`]. 

___


## coreFellowship
 
### approve(who: `AccountId32`, at_rank: `u16`)
- **interface**: `api.tx.coreFellowship.approve`
- **summary**:    See [`Pallet::approve`]. 
 
### bump(who: `AccountId32`)
- **interface**: `api.tx.coreFellowship.bump`
- **summary**:    See [`Pallet::bump`]. 
 
### import()
- **interface**: `api.tx.coreFellowship.import`
- **summary**:    See [`Pallet::import`]. 
 
### induct(who: `AccountId32`)
- **interface**: `api.tx.coreFellowship.induct`
- **summary**:    See [`Pallet::induct`]. 
 
### offboard(who: `AccountId32`)
- **interface**: `api.tx.coreFellowship.offboard`
- **summary**:    See [`Pallet::offboard`]. 
 
### promote(who: `AccountId32`, to_rank: `u16`)
- **interface**: `api.tx.coreFellowship.promote`
- **summary**:    See [`Pallet::promote`]. 
 
### setActive(is_active: `bool`)
- **interface**: `api.tx.coreFellowship.setActive`
- **summary**:    See [`Pallet::set_active`]. 
 
### setParams(params: `PalletCoreFellowshipParamsType`)
- **interface**: `api.tx.coreFellowship.setParams`
- **summary**:    See [`Pallet::set_params`]. 
 
### submitEvidence(wish: `PalletCoreFellowshipWish`, evidence: `Bytes`)
- **interface**: `api.tx.coreFellowship.submitEvidence`
- **summary**:    See [`Pallet::submit_evidence`]. 

___


## council
 
### close(proposal_hash: `H256`, index: `Compact<u32>`, proposal_weight_bound: `SpWeightsWeightV2Weight`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.council.close`
- **summary**:    See [`Pallet::close`]. 
 
### disapproveProposal(proposal_hash: `H256`)
- **interface**: `api.tx.council.disapproveProposal`
- **summary**:    See [`Pallet::disapprove_proposal`]. 
 
### execute(proposal: `Call`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.council.execute`
- **summary**:    See [`Pallet::execute`]. 
 
### propose(threshold: `Compact<u32>`, proposal: `Call`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.council.propose`
- **summary**:    See [`Pallet::propose`]. 
 
### setMembers(new_members: `Vec<AccountId32>`, prime: `Option<AccountId32>`, old_count: `u32`)
- **interface**: `api.tx.council.setMembers`
- **summary**:    See [`Pallet::set_members`]. 
 
### vote(proposal: `H256`, index: `Compact<u32>`, approve: `bool`)
- **interface**: `api.tx.council.vote`
- **summary**:    See [`Pallet::vote`]. 

___


## democracy
 
### blacklist(proposal_hash: `H256`, maybe_ref_index: `Option<u32>`)
- **interface**: `api.tx.democracy.blacklist`
- **summary**:    See [`Pallet::blacklist`]. 
 
### cancelProposal(prop_index: `Compact<u32>`)
- **interface**: `api.tx.democracy.cancelProposal`
- **summary**:    See [`Pallet::cancel_proposal`]. 
 
### cancelReferendum(ref_index: `Compact<u32>`)
- **interface**: `api.tx.democracy.cancelReferendum`
- **summary**:    See [`Pallet::cancel_referendum`]. 
 
### clearPublicProposals()
- **interface**: `api.tx.democracy.clearPublicProposals`
- **summary**:    See [`Pallet::clear_public_proposals`]. 
 
### delegate(to: `MultiAddress`, conviction: `PalletDemocracyConviction`, balance: `u128`)
- **interface**: `api.tx.democracy.delegate`
- **summary**:    See [`Pallet::delegate`]. 
 
### emergencyCancel(ref_index: `u32`)
- **interface**: `api.tx.democracy.emergencyCancel`
- **summary**:    See [`Pallet::emergency_cancel`]. 
 
### externalPropose(proposal: `FrameSupportPreimagesBounded`)
- **interface**: `api.tx.democracy.externalPropose`
- **summary**:    See [`Pallet::external_propose`]. 
 
### externalProposeDefault(proposal: `FrameSupportPreimagesBounded`)
- **interface**: `api.tx.democracy.externalProposeDefault`
- **summary**:    See [`Pallet::external_propose_default`]. 
 
### externalProposeMajority(proposal: `FrameSupportPreimagesBounded`)
- **interface**: `api.tx.democracy.externalProposeMajority`
- **summary**:    See [`Pallet::external_propose_majority`]. 
 
### fastTrack(proposal_hash: `H256`, voting_period: `u32`, delay: `u32`)
- **interface**: `api.tx.democracy.fastTrack`
- **summary**:    See [`Pallet::fast_track`]. 
 
### propose(proposal: `FrameSupportPreimagesBounded`, value: `Compact<u128>`)
- **interface**: `api.tx.democracy.propose`
- **summary**:    See [`Pallet::propose`]. 
 
### removeOtherVote(target: `MultiAddress`, index: `u32`)
- **interface**: `api.tx.democracy.removeOtherVote`
- **summary**:    See [`Pallet::remove_other_vote`]. 
 
### removeVote(index: `u32`)
- **interface**: `api.tx.democracy.removeVote`
- **summary**:    See [`Pallet::remove_vote`]. 
 
### second(proposal: `Compact<u32>`)
- **interface**: `api.tx.democracy.second`
- **summary**:    See [`Pallet::second`]. 
 
### setMetadata(owner: `PalletDemocracyMetadataOwner`, maybe_hash: `Option<H256>`)
- **interface**: `api.tx.democracy.setMetadata`
- **summary**:    See [`Pallet::set_metadata`]. 
 
### undelegate()
- **interface**: `api.tx.democracy.undelegate`
- **summary**:    See [`Pallet::undelegate`]. 
 
### unlock(target: `MultiAddress`)
- **interface**: `api.tx.democracy.unlock`
- **summary**:    See [`Pallet::unlock`]. 
 
### vetoExternal(proposal_hash: `H256`)
- **interface**: `api.tx.democracy.vetoExternal`
- **summary**:    See [`Pallet::veto_external`]. 
 
### vote(ref_index: `Compact<u32>`, vote: `PalletDemocracyVoteAccountVote`)
- **interface**: `api.tx.democracy.vote`
- **summary**:    See [`Pallet::vote`]. 

___


## electionProviderMultiPhase
 
### governanceFallback(maybe_max_voters: `Option<u32>`, maybe_max_targets: `Option<u32>`)
- **interface**: `api.tx.electionProviderMultiPhase.governanceFallback`
- **summary**:    See [`Pallet::governance_fallback`]. 
 
### setEmergencyElectionResult(supports: `Vec<(AccountId32,SpNposElectionsSupport)>`)
- **interface**: `api.tx.electionProviderMultiPhase.setEmergencyElectionResult`
- **summary**:    See [`Pallet::set_emergency_election_result`]. 
 
### setMinimumUntrustedScore(maybe_next_score: `Option<SpNposElectionsElectionScore>`)
- **interface**: `api.tx.electionProviderMultiPhase.setMinimumUntrustedScore`
- **summary**:    See [`Pallet::set_minimum_untrusted_score`]. 
 
### submit(raw_solution: `PalletElectionProviderMultiPhaseRawSolution`)
- **interface**: `api.tx.electionProviderMultiPhase.submit`
- **summary**:    See [`Pallet::submit`]. 
 
### submitUnsigned(raw_solution: `PalletElectionProviderMultiPhaseRawSolution`, witness: `PalletElectionProviderMultiPhaseSolutionOrSnapshotSize`)
- **interface**: `api.tx.electionProviderMultiPhase.submitUnsigned`
- **summary**:    See [`Pallet::submit_unsigned`]. 

___


## elections
 
### cleanDefunctVoters(num_voters: `u32`, num_defunct: `u32`)
- **interface**: `api.tx.elections.cleanDefunctVoters`
- **summary**:    See [`Pallet::clean_defunct_voters`]. 
 
### removeMember(who: `MultiAddress`, slash_bond: `bool`, rerun_election: `bool`)
- **interface**: `api.tx.elections.removeMember`
- **summary**:    See [`Pallet::remove_member`]. 
 
### removeVoter()
- **interface**: `api.tx.elections.removeVoter`
- **summary**:    See [`Pallet::remove_voter`]. 
 
### renounceCandidacy(renouncing: `PalletElectionsPhragmenRenouncing`)
- **interface**: `api.tx.elections.renounceCandidacy`
- **summary**:    See [`Pallet::renounce_candidacy`]. 
 
### submitCandidacy(candidate_count: `Compact<u32>`)
- **interface**: `api.tx.elections.submitCandidacy`
- **summary**:    See [`Pallet::submit_candidacy`]. 
 
### vote(votes: `Vec<AccountId32>`, value: `Compact<u128>`)
- **interface**: `api.tx.elections.vote`
- **summary**:    See [`Pallet::vote`]. 

___


## fastUnstake
 
### control(eras_to_check: `u32`)
- **interface**: `api.tx.fastUnstake.control`
- **summary**:    See [`Pallet::control`]. 
 
### deregister()
- **interface**: `api.tx.fastUnstake.deregister`
- **summary**:    See [`Pallet::deregister`]. 
 
### registerFastUnstake()
- **interface**: `api.tx.fastUnstake.registerFastUnstake`
- **summary**:    See [`Pallet::register_fast_unstake`]. 

___


## glutton
 
### initializePallet(new_count: `u32`, witness_count: `Option<u32>`)
- **interface**: `api.tx.glutton.initializePallet`
- **summary**:    See [`Pallet::initialize_pallet`]. 
 
### setCompute(compute: `u64`)
- **interface**: `api.tx.glutton.setCompute`
- **summary**:    See [`Pallet::set_compute`]. 
 
### setStorage(storage: `u64`)
- **interface**: `api.tx.glutton.setStorage`
- **summary**:    See [`Pallet::set_storage`]. 

___


## grandpa
 
### noteStalled(delay: `u32`, best_finalized_block_number: `u32`)
- **interface**: `api.tx.grandpa.noteStalled`
- **summary**:    See [`Pallet::note_stalled`]. 
 
### reportEquivocation(equivocation_proof: `SpConsensusGrandpaEquivocationProof`, key_owner_proof: `SpSessionMembershipProof`)
- **interface**: `api.tx.grandpa.reportEquivocation`
- **summary**:    See [`Pallet::report_equivocation`]. 
 
### reportEquivocationUnsigned(equivocation_proof: `SpConsensusGrandpaEquivocationProof`, key_owner_proof: `SpSessionMembershipProof`)
- **interface**: `api.tx.grandpa.reportEquivocationUnsigned`
- **summary**:    See [`Pallet::report_equivocation_unsigned`]. 

___


## identity
 
### addRegistrar(account: `MultiAddress`)
- **interface**: `api.tx.identity.addRegistrar`
- **summary**:    See [`Pallet::add_registrar`]. 
 
### addSub(sub: `MultiAddress`, data: `Data`)
- **interface**: `api.tx.identity.addSub`
- **summary**:    See [`Pallet::add_sub`]. 
 
### cancelRequest(reg_index: `u32`)
- **interface**: `api.tx.identity.cancelRequest`
- **summary**:    See [`Pallet::cancel_request`]. 
 
### clearIdentity()
- **interface**: `api.tx.identity.clearIdentity`
- **summary**:    See [`Pallet::clear_identity`]. 
 
### killIdentity(target: `MultiAddress`)
- **interface**: `api.tx.identity.killIdentity`
- **summary**:    See [`Pallet::kill_identity`]. 
 
### provideJudgement(reg_index: `Compact<u32>`, target: `MultiAddress`, judgement: `PalletIdentityJudgement`, identity: `H256`)
- **interface**: `api.tx.identity.provideJudgement`
- **summary**:    See [`Pallet::provide_judgement`]. 
 
### quitSub()
- **interface**: `api.tx.identity.quitSub`
- **summary**:    See [`Pallet::quit_sub`]. 
 
### removeSub(sub: `MultiAddress`)
- **interface**: `api.tx.identity.removeSub`
- **summary**:    See [`Pallet::remove_sub`]. 
 
### renameSub(sub: `MultiAddress`, data: `Data`)
- **interface**: `api.tx.identity.renameSub`
- **summary**:    See [`Pallet::rename_sub`]. 
 
### requestJudgement(reg_index: `Compact<u32>`, max_fee: `Compact<u128>`)
- **interface**: `api.tx.identity.requestJudgement`
- **summary**:    See [`Pallet::request_judgement`]. 
 
### setAccountId(index: `Compact<u32>`, new: `MultiAddress`)
- **interface**: `api.tx.identity.setAccountId`
- **summary**:    See [`Pallet::set_account_id`]. 
 
### setFee(index: `Compact<u32>`, fee: `Compact<u128>`)
- **interface**: `api.tx.identity.setFee`
- **summary**:    See [`Pallet::set_fee`]. 
 
### setFields(index: `Compact<u32>`, fields: `u64`)
- **interface**: `api.tx.identity.setFields`
- **summary**:    See [`Pallet::set_fields`]. 
 
### setIdentity(info: `PalletIdentityLegacyIdentityInfo`)
- **interface**: `api.tx.identity.setIdentity`
- **summary**:    See [`Pallet::set_identity`]. 
 
### setSubs(subs: `Vec<(AccountId32,Data)>`)
- **interface**: `api.tx.identity.setSubs`
- **summary**:    See [`Pallet::set_subs`]. 

___


## imOnline
 
### heartbeat(heartbeat: `PalletImOnlineHeartbeat`, signature: `PalletImOnlineSr25519AppSr25519Signature`)
- **interface**: `api.tx.imOnline.heartbeat`
- **summary**:    See [`Pallet::heartbeat`]. 

___


## indices
 
### claim(index: `u32`)
- **interface**: `api.tx.indices.claim`
- **summary**:    See [`Pallet::claim`]. 
 
### forceTransfer(new: `MultiAddress`, index: `u32`, freeze: `bool`)
- **interface**: `api.tx.indices.forceTransfer`
- **summary**:    See [`Pallet::force_transfer`]. 
 
### free(index: `u32`)
- **interface**: `api.tx.indices.free`
- **summary**:    See [`Pallet::free`]. 
 
### freeze(index: `u32`)
- **interface**: `api.tx.indices.freeze`
- **summary**:    See [`Pallet::freeze`]. 
 
### transfer(new: `MultiAddress`, index: `u32`)
- **interface**: `api.tx.indices.transfer`
- **summary**:    See [`Pallet::transfer`]. 

___


## lottery
 
### buyTicket(call: `Call`)
- **interface**: `api.tx.lottery.buyTicket`
- **summary**:    See [`Pallet::buy_ticket`]. 
 
### setCalls(calls: `Vec<Call>`)
- **interface**: `api.tx.lottery.setCalls`
- **summary**:    See [`Pallet::set_calls`]. 
 
### startLottery(price: `u128`, length: `u32`, delay: `u32`, repeat: `bool`)
- **interface**: `api.tx.lottery.startLottery`
- **summary**:    See [`Pallet::start_lottery`]. 
 
### stopRepeat()
- **interface**: `api.tx.lottery.stopRepeat`
- **summary**:    See [`Pallet::stop_repeat`]. 

___


## messageQueue
 
### executeOverweight(message_origin: `u32`, page: `u32`, index: `u32`, weight_limit: `SpWeightsWeightV2Weight`)
- **interface**: `api.tx.messageQueue.executeOverweight`
- **summary**:    See [`Pallet::execute_overweight`]. 
 
### reapPage(message_origin: `u32`, page_index: `u32`)
- **interface**: `api.tx.messageQueue.reapPage`
- **summary**:    See [`Pallet::reap_page`]. 

___


## mixnet
 
### register(registration: `PalletMixnetRegistration`, signature: `SpMixnetAppSignature`)
- **interface**: `api.tx.mixnet.register`
- **summary**:    See `Pallet::register`. 

___


## multisig
 
### approveAsMulti(threshold: `u16`, other_signatories: `Vec<AccountId32>`, maybe_timepoint: `Option<PalletMultisigTimepoint>`, call_hash: `[u8;32]`, max_weight: `SpWeightsWeightV2Weight`)
- **interface**: `api.tx.multisig.approveAsMulti`
- **summary**:    See [`Pallet::approve_as_multi`]. 
 
### asMulti(threshold: `u16`, other_signatories: `Vec<AccountId32>`, maybe_timepoint: `Option<PalletMultisigTimepoint>`, call: `Call`, max_weight: `SpWeightsWeightV2Weight`)
- **interface**: `api.tx.multisig.asMulti`
- **summary**:    See [`Pallet::as_multi`]. 
 
### asMultiThreshold1(other_signatories: `Vec<AccountId32>`, call: `Call`)
- **interface**: `api.tx.multisig.asMultiThreshold1`
- **summary**:    See [`Pallet::as_multi_threshold_1`]. 
 
### cancelAsMulti(threshold: `u16`, other_signatories: `Vec<AccountId32>`, timepoint: `PalletMultisigTimepoint`, call_hash: `[u8;32]`)
- **interface**: `api.tx.multisig.cancelAsMulti`
- **summary**:    See [`Pallet::cancel_as_multi`]. 

___


## nftFractionalization
 
### fractionalize(nft_collection_id: `u32`, nft_id: `u32`, asset_id: `u32`, beneficiary: `MultiAddress`, fractions: `u128`)
- **interface**: `api.tx.nftFractionalization.fractionalize`
- **summary**:    See [`Pallet::fractionalize`]. 
 
### unify(nft_collection_id: `u32`, nft_id: `u32`, asset_id: `u32`, beneficiary: `MultiAddress`)
- **interface**: `api.tx.nftFractionalization.unify`
- **summary**:    See [`Pallet::unify`]. 

___


## nfts
 
### approveItemAttributes(collection: `u32`, item: `u32`, delegate: `MultiAddress`)
- **interface**: `api.tx.nfts.approveItemAttributes`
- **summary**:    See [`Pallet::approve_item_attributes`]. 
 
### approveTransfer(collection: `u32`, item: `u32`, delegate: `MultiAddress`, maybe_deadline: `Option<u32>`)
- **interface**: `api.tx.nfts.approveTransfer`
- **summary**:    See [`Pallet::approve_transfer`]. 
 
### burn(collection: `u32`, item: `u32`)
- **interface**: `api.tx.nfts.burn`
- **summary**:    See [`Pallet::burn`]. 
 
### buyItem(collection: `u32`, item: `u32`, bid_price: `u128`)
- **interface**: `api.tx.nfts.buyItem`
- **summary**:    See [`Pallet::buy_item`]. 
 
### cancelApproval(collection: `u32`, item: `u32`, delegate: `MultiAddress`)
- **interface**: `api.tx.nfts.cancelApproval`
- **summary**:    See [`Pallet::cancel_approval`]. 
 
### cancelItemAttributesApproval(collection: `u32`, item: `u32`, delegate: `MultiAddress`, witness: `PalletNftsCancelAttributesApprovalWitness`)
- **interface**: `api.tx.nfts.cancelItemAttributesApproval`
- **summary**:    See [`Pallet::cancel_item_attributes_approval`]. 
 
### cancelSwap(offered_collection: `u32`, offered_item: `u32`)
- **interface**: `api.tx.nfts.cancelSwap`
- **summary**:    See [`Pallet::cancel_swap`]. 
 
### claimSwap(send_collection: `u32`, send_item: `u32`, receive_collection: `u32`, receive_item: `u32`, witness_price: `Option<PalletNftsPriceWithDirection>`)
- **interface**: `api.tx.nfts.claimSwap`
- **summary**:    See [`Pallet::claim_swap`]. 
 
### clearAllTransferApprovals(collection: `u32`, item: `u32`)
- **interface**: `api.tx.nfts.clearAllTransferApprovals`
- **summary**:    See [`Pallet::clear_all_transfer_approvals`]. 
 
### clearAttribute(collection: `u32`, maybe_item: `Option<u32>`, namespace: `PalletNftsAttributeNamespace`, key: `Bytes`)
- **interface**: `api.tx.nfts.clearAttribute`
- **summary**:    See [`Pallet::clear_attribute`]. 
 
### clearCollectionMetadata(collection: `u32`)
- **interface**: `api.tx.nfts.clearCollectionMetadata`
- **summary**:    See [`Pallet::clear_collection_metadata`]. 
 
### clearMetadata(collection: `u32`, item: `u32`)
- **interface**: `api.tx.nfts.clearMetadata`
- **summary**:    See [`Pallet::clear_metadata`]. 
 
### create(admin: `MultiAddress`, config: `PalletNftsCollectionConfig`)
- **interface**: `api.tx.nfts.create`
- **summary**:    See [`Pallet::create`]. 
 
### createSwap(offered_collection: `u32`, offered_item: `u32`, desired_collection: `u32`, maybe_desired_item: `Option<u32>`, maybe_price: `Option<PalletNftsPriceWithDirection>`, duration: `u32`)
- **interface**: `api.tx.nfts.createSwap`
- **summary**:    See [`Pallet::create_swap`]. 
 
### destroy(collection: `u32`, witness: `PalletNftsDestroyWitness`)
- **interface**: `api.tx.nfts.destroy`
- **summary**:    See [`Pallet::destroy`]. 
 
### forceCollectionConfig(collection: `u32`, config: `PalletNftsCollectionConfig`)
- **interface**: `api.tx.nfts.forceCollectionConfig`
- **summary**:    See [`Pallet::force_collection_config`]. 
 
### forceCollectionOwner(collection: `u32`, owner: `MultiAddress`)
- **interface**: `api.tx.nfts.forceCollectionOwner`
- **summary**:    See [`Pallet::force_collection_owner`]. 
 
### forceCreate(owner: `MultiAddress`, config: `PalletNftsCollectionConfig`)
- **interface**: `api.tx.nfts.forceCreate`
- **summary**:    See [`Pallet::force_create`]. 
 
### forceMint(collection: `u32`, item: `u32`, mint_to: `MultiAddress`, item_config: `PalletNftsItemConfig`)
- **interface**: `api.tx.nfts.forceMint`
- **summary**:    See [`Pallet::force_mint`]. 
 
### forceSetAttribute(set_as: `Option<AccountId32>`, collection: `u32`, maybe_item: `Option<u32>`, namespace: `PalletNftsAttributeNamespace`, key: `Bytes`, value: `Bytes`)
- **interface**: `api.tx.nfts.forceSetAttribute`
- **summary**:    See [`Pallet::force_set_attribute`]. 
 
### lockCollection(collection: `u32`, lock_settings: `u64`)
- **interface**: `api.tx.nfts.lockCollection`
- **summary**:    See [`Pallet::lock_collection`]. 
 
### lockItemProperties(collection: `u32`, item: `u32`, lock_metadata: `bool`, lock_attributes: `bool`)
- **interface**: `api.tx.nfts.lockItemProperties`
- **summary**:    See [`Pallet::lock_item_properties`]. 
 
### lockItemTransfer(collection: `u32`, item: `u32`)
- **interface**: `api.tx.nfts.lockItemTransfer`
- **summary**:    See [`Pallet::lock_item_transfer`]. 
 
### mint(collection: `u32`, item: `u32`, mint_to: `MultiAddress`, witness_data: `Option<PalletNftsMintWitness>`)
- **interface**: `api.tx.nfts.mint`
- **summary**:    See [`Pallet::mint`]. 
 
### mintPreSigned(mint_data: `PalletNftsPreSignedMint`, signature: `SpRuntimeMultiSignature`, signer: `AccountId32`)
- **interface**: `api.tx.nfts.mintPreSigned`
- **summary**:    See [`Pallet::mint_pre_signed`]. 
 
### payTips(tips: `Vec<PalletNftsItemTip>`)
- **interface**: `api.tx.nfts.payTips`
- **summary**:    See [`Pallet::pay_tips`]. 
 
### redeposit(collection: `u32`, items: `Vec<u32>`)
- **interface**: `api.tx.nfts.redeposit`
- **summary**:    See [`Pallet::redeposit`]. 
 
### setAcceptOwnership(maybe_collection: `Option<u32>`)
- **interface**: `api.tx.nfts.setAcceptOwnership`
- **summary**:    See [`Pallet::set_accept_ownership`]. 
 
### setAttribute(collection: `u32`, maybe_item: `Option<u32>`, namespace: `PalletNftsAttributeNamespace`, key: `Bytes`, value: `Bytes`)
- **interface**: `api.tx.nfts.setAttribute`
- **summary**:    See [`Pallet::set_attribute`]. 
 
### setAttributesPreSigned(data: `PalletNftsPreSignedAttributes`, signature: `SpRuntimeMultiSignature`, signer: `AccountId32`)
- **interface**: `api.tx.nfts.setAttributesPreSigned`
- **summary**:    See [`Pallet::set_attributes_pre_signed`]. 
 
### setCollectionMaxSupply(collection: `u32`, max_supply: `u32`)
- **interface**: `api.tx.nfts.setCollectionMaxSupply`
- **summary**:    See [`Pallet::set_collection_max_supply`]. 
 
### setCollectionMetadata(collection: `u32`, data: `Bytes`)
- **interface**: `api.tx.nfts.setCollectionMetadata`
- **summary**:    See [`Pallet::set_collection_metadata`]. 
 
### setMetadata(collection: `u32`, item: `u32`, data: `Bytes`)
- **interface**: `api.tx.nfts.setMetadata`
- **summary**:    See [`Pallet::set_metadata`]. 
 
### setPrice(collection: `u32`, item: `u32`, price: `Option<u128>`, whitelisted_buyer: `Option<MultiAddress>`)
- **interface**: `api.tx.nfts.setPrice`
- **summary**:    See [`Pallet::set_price`]. 
 
### setTeam(collection: `u32`, issuer: `Option<MultiAddress>`, admin: `Option<MultiAddress>`, freezer: `Option<MultiAddress>`)
- **interface**: `api.tx.nfts.setTeam`
- **summary**:    See [`Pallet::set_team`]. 
 
### transfer(collection: `u32`, item: `u32`, dest: `MultiAddress`)
- **interface**: `api.tx.nfts.transfer`
- **summary**:    See [`Pallet::transfer`]. 
 
### transferOwnership(collection: `u32`, owner: `MultiAddress`)
- **interface**: `api.tx.nfts.transferOwnership`
- **summary**:    See [`Pallet::transfer_ownership`]. 
 
### unlockItemTransfer(collection: `u32`, item: `u32`)
- **interface**: `api.tx.nfts.unlockItemTransfer`
- **summary**:    See [`Pallet::unlock_item_transfer`]. 
 
### updateMintSettings(collection: `u32`, mint_settings: `PalletNftsMintSettings`)
- **interface**: `api.tx.nfts.updateMintSettings`
- **summary**:    See [`Pallet::update_mint_settings`]. 

___


## nis
 
### communify(index: `Compact<u32>`)
- **interface**: `api.tx.nis.communify`
- **summary**:    See [`Pallet::communify`]. 
 
### fundDeficit()
- **interface**: `api.tx.nis.fundDeficit`
- **summary**:    See [`Pallet::fund_deficit`]. 
 
### placeBid(amount: `Compact<u128>`, duration: `u32`)
- **interface**: `api.tx.nis.placeBid`
- **summary**:    See [`Pallet::place_bid`]. 
 
### privatize(index: `Compact<u32>`)
- **interface**: `api.tx.nis.privatize`
- **summary**:    See [`Pallet::privatize`]. 
 
### retractBid(amount: `Compact<u128>`, duration: `u32`)
- **interface**: `api.tx.nis.retractBid`
- **summary**:    See [`Pallet::retract_bid`]. 
 
### thawCommunal(index: `Compact<u32>`)
- **interface**: `api.tx.nis.thawCommunal`
- **summary**:    See [`Pallet::thaw_communal`]. 
 
### thawPrivate(index: `Compact<u32>`, maybe_proportion: `Option<Perquintill>`)
- **interface**: `api.tx.nis.thawPrivate`
- **summary**:    See [`Pallet::thaw_private`]. 

___


## nominationPools
 
### adjustPoolDeposit(pool_id: `u32`)
- **interface**: `api.tx.nominationPools.adjustPoolDeposit`
- **summary**:    See [`Pallet::adjust_pool_deposit`]. 
 
### bondExtra(extra: `PalletNominationPoolsBondExtra`)
- **interface**: `api.tx.nominationPools.bondExtra`
- **summary**:    See [`Pallet::bond_extra`]. 
 
### bondExtraOther(member: `MultiAddress`, extra: `PalletNominationPoolsBondExtra`)
- **interface**: `api.tx.nominationPools.bondExtraOther`
- **summary**:    See [`Pallet::bond_extra_other`]. 
 
### chill(pool_id: `u32`)
- **interface**: `api.tx.nominationPools.chill`
- **summary**:    See [`Pallet::chill`]. 
 
### claimCommission(pool_id: `u32`)
- **interface**: `api.tx.nominationPools.claimCommission`
- **summary**:    See [`Pallet::claim_commission`]. 
 
### claimPayout()
- **interface**: `api.tx.nominationPools.claimPayout`
- **summary**:    See [`Pallet::claim_payout`]. 
 
### claimPayoutOther(other: `AccountId32`)
- **interface**: `api.tx.nominationPools.claimPayoutOther`
- **summary**:    See [`Pallet::claim_payout_other`]. 
 
### create(amount: `Compact<u128>`, root: `MultiAddress`, nominator: `MultiAddress`, bouncer: `MultiAddress`)
- **interface**: `api.tx.nominationPools.create`
- **summary**:    See [`Pallet::create`]. 
 
### createWithPoolId(amount: `Compact<u128>`, root: `MultiAddress`, nominator: `MultiAddress`, bouncer: `MultiAddress`, pool_id: `u32`)
- **interface**: `api.tx.nominationPools.createWithPoolId`
- **summary**:    See [`Pallet::create_with_pool_id`]. 
 
### join(amount: `Compact<u128>`, pool_id: `u32`)
- **interface**: `api.tx.nominationPools.join`
- **summary**:    See [`Pallet::join`]. 
 
### nominate(pool_id: `u32`, validators: `Vec<AccountId32>`)
- **interface**: `api.tx.nominationPools.nominate`
- **summary**:    See [`Pallet::nominate`]. 
 
### poolWithdrawUnbonded(pool_id: `u32`, num_slashing_spans: `u32`)
- **interface**: `api.tx.nominationPools.poolWithdrawUnbonded`
- **summary**:    See [`Pallet::pool_withdraw_unbonded`]. 
 
### setClaimPermission(permission: `PalletNominationPoolsClaimPermission`)
- **interface**: `api.tx.nominationPools.setClaimPermission`
- **summary**:    See [`Pallet::set_claim_permission`]. 
 
### setCommission(pool_id: `u32`, new_commission: `Option<(Perbill,AccountId32)>`)
- **interface**: `api.tx.nominationPools.setCommission`
- **summary**:    See [`Pallet::set_commission`]. 
 
### setCommissionChangeRate(pool_id: `u32`, change_rate: `PalletNominationPoolsCommissionChangeRate`)
- **interface**: `api.tx.nominationPools.setCommissionChangeRate`
- **summary**:    See [`Pallet::set_commission_change_rate`]. 
 
### setCommissionClaimPermission(pool_id: `u32`, permission: `Option<PalletNominationPoolsCommissionClaimPermission>`)
- **interface**: `api.tx.nominationPools.setCommissionClaimPermission`
- **summary**:    See [`Pallet::set_commission_claim_permission`]. 
 
### setCommissionMax(pool_id: `u32`, max_commission: `Perbill`)
- **interface**: `api.tx.nominationPools.setCommissionMax`
- **summary**:    See [`Pallet::set_commission_max`]. 
 
### setConfigs(min_join_bond: `PalletNominationPoolsConfigOpU128`, min_create_bond: `PalletNominationPoolsConfigOpU128`, max_pools: `PalletNominationPoolsConfigOpU32`, max_members: `PalletNominationPoolsConfigOpU32`, max_members_per_pool: `PalletNominationPoolsConfigOpU32`, global_max_commission: `PalletNominationPoolsConfigOpPerbill`)
- **interface**: `api.tx.nominationPools.setConfigs`
- **summary**:    See [`Pallet::set_configs`]. 
 
### setMetadata(pool_id: `u32`, metadata: `Bytes`)
- **interface**: `api.tx.nominationPools.setMetadata`
- **summary**:    See [`Pallet::set_metadata`]. 
 
### setState(pool_id: `u32`, state: `PalletNominationPoolsPoolState`)
- **interface**: `api.tx.nominationPools.setState`
- **summary**:    See [`Pallet::set_state`]. 
 
### unbond(member_account: `MultiAddress`, unbonding_points: `Compact<u128>`)
- **interface**: `api.tx.nominationPools.unbond`
- **summary**:    See [`Pallet::unbond`]. 
 
### updateRoles(pool_id: `u32`, new_root: `PalletNominationPoolsConfigOpAccountId32`, new_nominator: `PalletNominationPoolsConfigOpAccountId32`, new_bouncer: `PalletNominationPoolsConfigOpAccountId32`)
- **interface**: `api.tx.nominationPools.updateRoles`
- **summary**:    See [`Pallet::update_roles`]. 
 
### withdrawUnbonded(member_account: `MultiAddress`, num_slashing_spans: `u32`)
- **interface**: `api.tx.nominationPools.withdrawUnbonded`
- **summary**:    See [`Pallet::withdraw_unbonded`]. 

___


## poolAssets
 
### approveTransfer(id: `Compact<u32>`, delegate: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.poolAssets.approveTransfer`
- **summary**:    See [`Pallet::approve_transfer`]. 
 
### block(id: `Compact<u32>`, who: `MultiAddress`)
- **interface**: `api.tx.poolAssets.block`
- **summary**:    See [`Pallet::block`]. 
 
### burn(id: `Compact<u32>`, who: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.poolAssets.burn`
- **summary**:    See [`Pallet::burn`]. 
 
### cancelApproval(id: `Compact<u32>`, delegate: `MultiAddress`)
- **interface**: `api.tx.poolAssets.cancelApproval`
- **summary**:    See [`Pallet::cancel_approval`]. 
 
### clearMetadata(id: `Compact<u32>`)
- **interface**: `api.tx.poolAssets.clearMetadata`
- **summary**:    See [`Pallet::clear_metadata`]. 
 
### create(id: `Compact<u32>`, admin: `MultiAddress`, min_balance: `u128`)
- **interface**: `api.tx.poolAssets.create`
- **summary**:    See [`Pallet::create`]. 
 
### destroyAccounts(id: `Compact<u32>`)
- **interface**: `api.tx.poolAssets.destroyAccounts`
- **summary**:    See [`Pallet::destroy_accounts`]. 
 
### destroyApprovals(id: `Compact<u32>`)
- **interface**: `api.tx.poolAssets.destroyApprovals`
- **summary**:    See [`Pallet::destroy_approvals`]. 
 
### finishDestroy(id: `Compact<u32>`)
- **interface**: `api.tx.poolAssets.finishDestroy`
- **summary**:    See [`Pallet::finish_destroy`]. 
 
### forceAssetStatus(id: `Compact<u32>`, owner: `MultiAddress`, issuer: `MultiAddress`, admin: `MultiAddress`, freezer: `MultiAddress`, min_balance: `Compact<u128>`, is_sufficient: `bool`, is_frozen: `bool`)
- **interface**: `api.tx.poolAssets.forceAssetStatus`
- **summary**:    See [`Pallet::force_asset_status`]. 
 
### forceCancelApproval(id: `Compact<u32>`, owner: `MultiAddress`, delegate: `MultiAddress`)
- **interface**: `api.tx.poolAssets.forceCancelApproval`
- **summary**:    See [`Pallet::force_cancel_approval`]. 
 
### forceClearMetadata(id: `Compact<u32>`)
- **interface**: `api.tx.poolAssets.forceClearMetadata`
- **summary**:    See [`Pallet::force_clear_metadata`]. 
 
### forceCreate(id: `Compact<u32>`, owner: `MultiAddress`, is_sufficient: `bool`, min_balance: `Compact<u128>`)
- **interface**: `api.tx.poolAssets.forceCreate`
- **summary**:    See [`Pallet::force_create`]. 
 
### forceSetMetadata(id: `Compact<u32>`, name: `Bytes`, symbol: `Bytes`, decimals: `u8`, is_frozen: `bool`)
- **interface**: `api.tx.poolAssets.forceSetMetadata`
- **summary**:    See [`Pallet::force_set_metadata`]. 
 
### forceTransfer(id: `Compact<u32>`, source: `MultiAddress`, dest: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.poolAssets.forceTransfer`
- **summary**:    See [`Pallet::force_transfer`]. 
 
### freeze(id: `Compact<u32>`, who: `MultiAddress`)
- **interface**: `api.tx.poolAssets.freeze`
- **summary**:    See [`Pallet::freeze`]. 
 
### freezeAsset(id: `Compact<u32>`)
- **interface**: `api.tx.poolAssets.freezeAsset`
- **summary**:    See [`Pallet::freeze_asset`]. 
 
### mint(id: `Compact<u32>`, beneficiary: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.poolAssets.mint`
- **summary**:    See [`Pallet::mint`]. 
 
### refund(id: `Compact<u32>`, allow_burn: `bool`)
- **interface**: `api.tx.poolAssets.refund`
- **summary**:    See [`Pallet::refund`]. 
 
### refundOther(id: `Compact<u32>`, who: `MultiAddress`)
- **interface**: `api.tx.poolAssets.refundOther`
- **summary**:    See [`Pallet::refund_other`]. 
 
### setMetadata(id: `Compact<u32>`, name: `Bytes`, symbol: `Bytes`, decimals: `u8`)
- **interface**: `api.tx.poolAssets.setMetadata`
- **summary**:    See [`Pallet::set_metadata`]. 
 
### setMinBalance(id: `Compact<u32>`, min_balance: `u128`)
- **interface**: `api.tx.poolAssets.setMinBalance`
- **summary**:    See [`Pallet::set_min_balance`]. 
 
### setTeam(id: `Compact<u32>`, issuer: `MultiAddress`, admin: `MultiAddress`, freezer: `MultiAddress`)
- **interface**: `api.tx.poolAssets.setTeam`
- **summary**:    See [`Pallet::set_team`]. 
 
### startDestroy(id: `Compact<u32>`)
- **interface**: `api.tx.poolAssets.startDestroy`
- **summary**:    See [`Pallet::start_destroy`]. 
 
### thaw(id: `Compact<u32>`, who: `MultiAddress`)
- **interface**: `api.tx.poolAssets.thaw`
- **summary**:    See [`Pallet::thaw`]. 
 
### thawAsset(id: `Compact<u32>`)
- **interface**: `api.tx.poolAssets.thawAsset`
- **summary**:    See [`Pallet::thaw_asset`]. 
 
### touch(id: `Compact<u32>`)
- **interface**: `api.tx.poolAssets.touch`
- **summary**:    See [`Pallet::touch`]. 
 
### touchOther(id: `Compact<u32>`, who: `MultiAddress`)
- **interface**: `api.tx.poolAssets.touchOther`
- **summary**:    See [`Pallet::touch_other`]. 
 
### transfer(id: `Compact<u32>`, target: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.poolAssets.transfer`
- **summary**:    See [`Pallet::transfer`]. 
 
### transferApproved(id: `Compact<u32>`, owner: `MultiAddress`, destination: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.poolAssets.transferApproved`
- **summary**:    See [`Pallet::transfer_approved`]. 
 
### transferKeepAlive(id: `Compact<u32>`, target: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.poolAssets.transferKeepAlive`
- **summary**:    See [`Pallet::transfer_keep_alive`]. 
 
### transferOwnership(id: `Compact<u32>`, owner: `MultiAddress`)
- **interface**: `api.tx.poolAssets.transferOwnership`
- **summary**:    See [`Pallet::transfer_ownership`]. 

___


## pov
 
### emitEvent()
- **interface**: `api.tx.pov.emitEvent`
- **summary**:    See [`Pallet::emit_event`]. 
 
### noop()
- **interface**: `api.tx.pov.noop`
- **summary**:    See [`Pallet::noop`]. 

___


## preimage
 
### ensureUpdated(hashes: `Vec<H256>`)
- **interface**: `api.tx.preimage.ensureUpdated`
- **summary**:    See [`Pallet::ensure_updated`]. 
 
### notePreimage(bytes: `Bytes`)
- **interface**: `api.tx.preimage.notePreimage`
- **summary**:    See [`Pallet::note_preimage`]. 
 
### requestPreimage(hash: `H256`)
- **interface**: `api.tx.preimage.requestPreimage`
- **summary**:    See [`Pallet::request_preimage`]. 
 
### unnotePreimage(hash: `H256`)
- **interface**: `api.tx.preimage.unnotePreimage`
- **summary**:    See [`Pallet::unnote_preimage`]. 
 
### unrequestPreimage(hash: `H256`)
- **interface**: `api.tx.preimage.unrequestPreimage`
- **summary**:    See [`Pallet::unrequest_preimage`]. 

___


## proxy
 
### addProxy(delegate: `MultiAddress`, proxy_type: `KitchensinkRuntimeProxyType`, delay: `u32`)
- **interface**: `api.tx.proxy.addProxy`
- **summary**:    See [`Pallet::add_proxy`]. 
 
### announce(real: `MultiAddress`, call_hash: `H256`)
- **interface**: `api.tx.proxy.announce`
- **summary**:    See [`Pallet::announce`]. 
 
### createPure(proxy_type: `KitchensinkRuntimeProxyType`, delay: `u32`, index: `u16`)
- **interface**: `api.tx.proxy.createPure`
- **summary**:    See [`Pallet::create_pure`]. 
 
### killPure(spawner: `MultiAddress`, proxy_type: `KitchensinkRuntimeProxyType`, index: `u16`, height: `Compact<u32>`, ext_index: `Compact<u32>`)
- **interface**: `api.tx.proxy.killPure`
- **summary**:    See [`Pallet::kill_pure`]. 
 
### proxy(real: `MultiAddress`, force_proxy_type: `Option<KitchensinkRuntimeProxyType>`, call: `Call`)
- **interface**: `api.tx.proxy.proxy`
- **summary**:    See [`Pallet::proxy`]. 
 
### proxyAnnounced(delegate: `MultiAddress`, real: `MultiAddress`, force_proxy_type: `Option<KitchensinkRuntimeProxyType>`, call: `Call`)
- **interface**: `api.tx.proxy.proxyAnnounced`
- **summary**:    See [`Pallet::proxy_announced`]. 
 
### rejectAnnouncement(delegate: `MultiAddress`, call_hash: `H256`)
- **interface**: `api.tx.proxy.rejectAnnouncement`
- **summary**:    See [`Pallet::reject_announcement`]. 
 
### removeAnnouncement(real: `MultiAddress`, call_hash: `H256`)
- **interface**: `api.tx.proxy.removeAnnouncement`
- **summary**:    See [`Pallet::remove_announcement`]. 
 
### removeProxies()
- **interface**: `api.tx.proxy.removeProxies`
- **summary**:    See [`Pallet::remove_proxies`]. 
 
### removeProxy(delegate: `MultiAddress`, proxy_type: `KitchensinkRuntimeProxyType`, delay: `u32`)
- **interface**: `api.tx.proxy.removeProxy`
- **summary**:    See [`Pallet::remove_proxy`]. 

___


## rankedCollective
 
### addMember(who: `MultiAddress`)
- **interface**: `api.tx.rankedCollective.addMember`
- **summary**:    See [`Pallet::add_member`]. 
 
### cleanupPoll(poll_index: `u32`, max: `u32`)
- **interface**: `api.tx.rankedCollective.cleanupPoll`
- **summary**:    See [`Pallet::cleanup_poll`]. 
 
### demoteMember(who: `MultiAddress`)
- **interface**: `api.tx.rankedCollective.demoteMember`
- **summary**:    See [`Pallet::demote_member`]. 
 
### promoteMember(who: `MultiAddress`)
- **interface**: `api.tx.rankedCollective.promoteMember`
- **summary**:    See [`Pallet::promote_member`]. 
 
### removeMember(who: `MultiAddress`, min_rank: `u16`)
- **interface**: `api.tx.rankedCollective.removeMember`
- **summary**:    See [`Pallet::remove_member`]. 
 
### vote(poll: `u32`, aye: `bool`)
- **interface**: `api.tx.rankedCollective.vote`
- **summary**:    See [`Pallet::vote`]. 

___


## rankedPolls
 
### cancel(index: `u32`)
- **interface**: `api.tx.rankedPolls.cancel`
- **summary**:    See [`Pallet::cancel`]. 
 
### kill(index: `u32`)
- **interface**: `api.tx.rankedPolls.kill`
- **summary**:    See [`Pallet::kill`]. 
 
### nudgeReferendum(index: `u32`)
- **interface**: `api.tx.rankedPolls.nudgeReferendum`
- **summary**:    See [`Pallet::nudge_referendum`]. 
 
### oneFewerDeciding(track: `u16`)
- **interface**: `api.tx.rankedPolls.oneFewerDeciding`
- **summary**:    See [`Pallet::one_fewer_deciding`]. 
 
### placeDecisionDeposit(index: `u32`)
- **interface**: `api.tx.rankedPolls.placeDecisionDeposit`
- **summary**:    See [`Pallet::place_decision_deposit`]. 
 
### refundDecisionDeposit(index: `u32`)
- **interface**: `api.tx.rankedPolls.refundDecisionDeposit`
- **summary**:    See [`Pallet::refund_decision_deposit`]. 
 
### refundSubmissionDeposit(index: `u32`)
- **interface**: `api.tx.rankedPolls.refundSubmissionDeposit`
- **summary**:    See [`Pallet::refund_submission_deposit`]. 
 
### setMetadata(index: `u32`, maybe_hash: `Option<H256>`)
- **interface**: `api.tx.rankedPolls.setMetadata`
- **summary**:    See [`Pallet::set_metadata`]. 
 
### submit(proposal_origin: `KitchensinkRuntimeOriginCaller`, proposal: `FrameSupportPreimagesBounded`, enactment_moment: `FrameSupportScheduleDispatchTime`)
- **interface**: `api.tx.rankedPolls.submit`
- **summary**:    See [`Pallet::submit`]. 

___


## recovery
 
### asRecovered(account: `MultiAddress`, call: `Call`)
- **interface**: `api.tx.recovery.asRecovered`
- **summary**:    See [`Pallet::as_recovered`]. 
 
### cancelRecovered(account: `MultiAddress`)
- **interface**: `api.tx.recovery.cancelRecovered`
- **summary**:    See [`Pallet::cancel_recovered`]. 
 
### claimRecovery(account: `MultiAddress`)
- **interface**: `api.tx.recovery.claimRecovery`
- **summary**:    See [`Pallet::claim_recovery`]. 
 
### closeRecovery(rescuer: `MultiAddress`)
- **interface**: `api.tx.recovery.closeRecovery`
- **summary**:    See [`Pallet::close_recovery`]. 
 
### createRecovery(friends: `Vec<AccountId32>`, threshold: `u16`, delay_period: `u32`)
- **interface**: `api.tx.recovery.createRecovery`
- **summary**:    See [`Pallet::create_recovery`]. 
 
### initiateRecovery(account: `MultiAddress`)
- **interface**: `api.tx.recovery.initiateRecovery`
- **summary**:    See [`Pallet::initiate_recovery`]. 
 
### removeRecovery()
- **interface**: `api.tx.recovery.removeRecovery`
- **summary**:    See [`Pallet::remove_recovery`]. 
 
### setRecovered(lost: `MultiAddress`, rescuer: `MultiAddress`)
- **interface**: `api.tx.recovery.setRecovered`
- **summary**:    See [`Pallet::set_recovered`]. 
 
### vouchRecovery(lost: `MultiAddress`, rescuer: `MultiAddress`)
- **interface**: `api.tx.recovery.vouchRecovery`
- **summary**:    See [`Pallet::vouch_recovery`]. 

___


## referenda
 
### cancel(index: `u32`)
- **interface**: `api.tx.referenda.cancel`
- **summary**:    See [`Pallet::cancel`]. 
 
### kill(index: `u32`)
- **interface**: `api.tx.referenda.kill`
- **summary**:    See [`Pallet::kill`]. 
 
### nudgeReferendum(index: `u32`)
- **interface**: `api.tx.referenda.nudgeReferendum`
- **summary**:    See [`Pallet::nudge_referendum`]. 
 
### oneFewerDeciding(track: `u16`)
- **interface**: `api.tx.referenda.oneFewerDeciding`
- **summary**:    See [`Pallet::one_fewer_deciding`]. 
 
### placeDecisionDeposit(index: `u32`)
- **interface**: `api.tx.referenda.placeDecisionDeposit`
- **summary**:    See [`Pallet::place_decision_deposit`]. 
 
### refundDecisionDeposit(index: `u32`)
- **interface**: `api.tx.referenda.refundDecisionDeposit`
- **summary**:    See [`Pallet::refund_decision_deposit`]. 
 
### refundSubmissionDeposit(index: `u32`)
- **interface**: `api.tx.referenda.refundSubmissionDeposit`
- **summary**:    See [`Pallet::refund_submission_deposit`]. 
 
### setMetadata(index: `u32`, maybe_hash: `Option<H256>`)
- **interface**: `api.tx.referenda.setMetadata`
- **summary**:    See [`Pallet::set_metadata`]. 
 
### submit(proposal_origin: `KitchensinkRuntimeOriginCaller`, proposal: `FrameSupportPreimagesBounded`, enactment_moment: `FrameSupportScheduleDispatchTime`)
- **interface**: `api.tx.referenda.submit`
- **summary**:    See [`Pallet::submit`]. 

___


## remark
 
### store(remark: `Bytes`)
- **interface**: `api.tx.remark.store`
- **summary**:    See [`Pallet::store`]. 

___


## rootTesting
 
### fillBlock(ratio: `Perbill`)
- **interface**: `api.tx.rootTesting.fillBlock`
- **summary**:    See `Pallet::fill_block`. 
 
### triggerDefensive()
- **interface**: `api.tx.rootTesting.triggerDefensive`
- **summary**:    See `Pallet::trigger_defensive`. 

___


## safeMode
 
### enter()
- **interface**: `api.tx.safeMode.enter`
- **summary**:    See [`Pallet::enter`]. 
 
### extend()
- **interface**: `api.tx.safeMode.extend`
- **summary**:    See [`Pallet::extend`]. 
 
### forceEnter()
- **interface**: `api.tx.safeMode.forceEnter`
- **summary**:    See [`Pallet::force_enter`]. 
 
### forceExit()
- **interface**: `api.tx.safeMode.forceExit`
- **summary**:    See [`Pallet::force_exit`]. 
 
### forceExtend()
- **interface**: `api.tx.safeMode.forceExtend`
- **summary**:    See [`Pallet::force_extend`]. 
 
### forceReleaseDeposit(account: `AccountId32`, block: `u32`)
- **interface**: `api.tx.safeMode.forceReleaseDeposit`
- **summary**:    See [`Pallet::force_release_deposit`]. 
 
### forceSlashDeposit(account: `AccountId32`, block: `u32`)
- **interface**: `api.tx.safeMode.forceSlashDeposit`
- **summary**:    See [`Pallet::force_slash_deposit`]. 
 
### releaseDeposit(account: `AccountId32`, block: `u32`)
- **interface**: `api.tx.safeMode.releaseDeposit`
- **summary**:    See [`Pallet::release_deposit`]. 

___


## salary
 
### bump()
- **interface**: `api.tx.salary.bump`
- **summary**:    See [`Pallet::bump`]. 
 
### checkPayment()
- **interface**: `api.tx.salary.checkPayment`
- **summary**:    See [`Pallet::check_payment`]. 
 
### induct()
- **interface**: `api.tx.salary.induct`
- **summary**:    See [`Pallet::induct`]. 
 
### init()
- **interface**: `api.tx.salary.init`
- **summary**:    See [`Pallet::init`]. 
 
### payout()
- **interface**: `api.tx.salary.payout`
- **summary**:    See [`Pallet::payout`]. 
 
### payoutOther(beneficiary: `AccountId32`)
- **interface**: `api.tx.salary.payoutOther`
- **summary**:    See [`Pallet::payout_other`]. 
 
### register()
- **interface**: `api.tx.salary.register`
- **summary**:    See [`Pallet::register`]. 

___


## scheduler
 
### cancel(when: `u32`, index: `u32`)
- **interface**: `api.tx.scheduler.cancel`
- **summary**:    See [`Pallet::cancel`]. 
 
### cancelNamed(id: `[u8;32]`)
- **interface**: `api.tx.scheduler.cancelNamed`
- **summary**:    See [`Pallet::cancel_named`]. 
 
### schedule(when: `u32`, maybe_periodic: `Option<(u32,u32)>`, priority: `u8`, call: `Call`)
- **interface**: `api.tx.scheduler.schedule`
- **summary**:    See [`Pallet::schedule`]. 
 
### scheduleAfter(after: `u32`, maybe_periodic: `Option<(u32,u32)>`, priority: `u8`, call: `Call`)
- **interface**: `api.tx.scheduler.scheduleAfter`
- **summary**:    See [`Pallet::schedule_after`]. 
 
### scheduleNamed(id: `[u8;32]`, when: `u32`, maybe_periodic: `Option<(u32,u32)>`, priority: `u8`, call: `Call`)
- **interface**: `api.tx.scheduler.scheduleNamed`
- **summary**:    See [`Pallet::schedule_named`]. 
 
### scheduleNamedAfter(id: `[u8;32]`, after: `u32`, maybe_periodic: `Option<(u32,u32)>`, priority: `u8`, call: `Call`)
- **interface**: `api.tx.scheduler.scheduleNamedAfter`
- **summary**:    See [`Pallet::schedule_named_after`]. 

___


## session
 
### purgeKeys()
- **interface**: `api.tx.session.purgeKeys`
- **summary**:    See [`Pallet::purge_keys`]. 
 
### setKeys(keys: `KitchensinkRuntimeSessionKeys`, proof: `Bytes`)
- **interface**: `api.tx.session.setKeys`
- **summary**:    See [`Pallet::set_keys`]. 

___


## society
 
### bestowMembership(candidate: `AccountId32`)
- **interface**: `api.tx.society.bestowMembership`
- **summary**:    See [`Pallet::bestow_membership`]. 
 
### bid(value: `u128`)
- **interface**: `api.tx.society.bid`
- **summary**:    See [`Pallet::bid`]. 
 
### claimMembership()
- **interface**: `api.tx.society.claimMembership`
- **summary**:    See [`Pallet::claim_membership`]. 
 
### cleanupCandidacy(candidate: `AccountId32`, max: `u32`)
- **interface**: `api.tx.society.cleanupCandidacy`
- **summary**:    See [`Pallet::cleanup_candidacy`]. 
 
### cleanupChallenge(challenge_round: `u32`, max: `u32`)
- **interface**: `api.tx.society.cleanupChallenge`
- **summary**:    See [`Pallet::cleanup_challenge`]. 
 
### defenderVote(approve: `bool`)
- **interface**: `api.tx.society.defenderVote`
- **summary**:    See [`Pallet::defender_vote`]. 
 
### dissolve()
- **interface**: `api.tx.society.dissolve`
- **summary**:    See [`Pallet::dissolve`]. 
 
### dropCandidate(candidate: `AccountId32`)
- **interface**: `api.tx.society.dropCandidate`
- **summary**:    See [`Pallet::drop_candidate`]. 
 
### foundSociety(founder: `MultiAddress`, max_members: `u32`, max_intake: `u32`, max_strikes: `u32`, candidate_deposit: `u128`, rules: `Bytes`)
- **interface**: `api.tx.society.foundSociety`
- **summary**:    See [`Pallet::found_society`]. 
 
### judgeSuspendedMember(who: `MultiAddress`, forgive: `bool`)
- **interface**: `api.tx.society.judgeSuspendedMember`
- **summary**:    See [`Pallet::judge_suspended_member`]. 
 
### kickCandidate(candidate: `AccountId32`)
- **interface**: `api.tx.society.kickCandidate`
- **summary**:    See [`Pallet::kick_candidate`]. 
 
### payout()
- **interface**: `api.tx.society.payout`
- **summary**:    See [`Pallet::payout`]. 
 
### punishSkeptic()
- **interface**: `api.tx.society.punishSkeptic`
- **summary**:    See [`Pallet::punish_skeptic`]. 
 
### resignCandidacy()
- **interface**: `api.tx.society.resignCandidacy`
- **summary**:    See [`Pallet::resign_candidacy`]. 
 
### setParameters(max_members: `u32`, max_intake: `u32`, max_strikes: `u32`, candidate_deposit: `u128`)
- **interface**: `api.tx.society.setParameters`
- **summary**:    See [`Pallet::set_parameters`]. 
 
### unbid()
- **interface**: `api.tx.society.unbid`
- **summary**:    See [`Pallet::unbid`]. 
 
### unvouch()
- **interface**: `api.tx.society.unvouch`
- **summary**:    See [`Pallet::unvouch`]. 
 
### vote(candidate: `MultiAddress`, approve: `bool`)
- **interface**: `api.tx.society.vote`
- **summary**:    See [`Pallet::vote`]. 
 
### vouch(who: `MultiAddress`, value: `u128`, tip: `u128`)
- **interface**: `api.tx.society.vouch`
- **summary**:    See [`Pallet::vouch`]. 
 
### waiveRepay(amount: `u128`)
- **interface**: `api.tx.society.waiveRepay`
- **summary**:    See [`Pallet::waive_repay`]. 

___


## staking
 
### bond(value: `Compact<u128>`, payee: `PalletStakingRewardDestination`)
- **interface**: `api.tx.staking.bond`
- **summary**:    See [`Pallet::bond`]. 
 
### bondExtra(max_additional: `Compact<u128>`)
- **interface**: `api.tx.staking.bondExtra`
- **summary**:    See [`Pallet::bond_extra`]. 
 
### cancelDeferredSlash(era: `u32`, slash_indices: `Vec<u32>`)
- **interface**: `api.tx.staking.cancelDeferredSlash`
- **summary**:    See [`Pallet::cancel_deferred_slash`]. 
 
### chill()
- **interface**: `api.tx.staking.chill`
- **summary**:    See [`Pallet::chill`]. 
 
### chillOther(stash: `AccountId32`)
- **interface**: `api.tx.staking.chillOther`
- **summary**:    See [`Pallet::chill_other`]. 
 
### forceApplyMinCommission(validator_stash: `AccountId32`)
- **interface**: `api.tx.staking.forceApplyMinCommission`
- **summary**:    See [`Pallet::force_apply_min_commission`]. 
 
### forceNewEra()
- **interface**: `api.tx.staking.forceNewEra`
- **summary**:    See [`Pallet::force_new_era`]. 
 
### forceNewEraAlways()
- **interface**: `api.tx.staking.forceNewEraAlways`
- **summary**:    See [`Pallet::force_new_era_always`]. 
 
### forceNoEras()
- **interface**: `api.tx.staking.forceNoEras`
- **summary**:    See [`Pallet::force_no_eras`]. 
 
### forceUnstake(stash: `AccountId32`, num_slashing_spans: `u32`)
- **interface**: `api.tx.staking.forceUnstake`
- **summary**:    See [`Pallet::force_unstake`]. 
 
### increaseValidatorCount(additional: `Compact<u32>`)
- **interface**: `api.tx.staking.increaseValidatorCount`
- **summary**:    See [`Pallet::increase_validator_count`]. 
 
### kick(who: `Vec<MultiAddress>`)
- **interface**: `api.tx.staking.kick`
- **summary**:    See [`Pallet::kick`]. 
 
### nominate(targets: `Vec<MultiAddress>`)
- **interface**: `api.tx.staking.nominate`
- **summary**:    See [`Pallet::nominate`]. 
 
### payoutStakers(validator_stash: `AccountId32`, era: `u32`)
- **interface**: `api.tx.staking.payoutStakers`
- **summary**:    See [`Pallet::payout_stakers`]. 
 
### payoutStakersByPage(validator_stash: `AccountId32`, era: `u32`, page: `u32`)
- **interface**: `api.tx.staking.payoutStakersByPage`
- **summary**:    See [`Pallet::payout_stakers_by_page`]. 
 
### reapStash(stash: `AccountId32`, num_slashing_spans: `u32`)
- **interface**: `api.tx.staking.reapStash`
- **summary**:    See [`Pallet::reap_stash`]. 
 
### rebond(value: `Compact<u128>`)
- **interface**: `api.tx.staking.rebond`
- **summary**:    See [`Pallet::rebond`]. 
 
### scaleValidatorCount(factor: `Percent`)
- **interface**: `api.tx.staking.scaleValidatorCount`
- **summary**:    See [`Pallet::scale_validator_count`]. 
 
### setController()
- **interface**: `api.tx.staking.setController`
- **summary**:    See [`Pallet::set_controller`]. 
 
### setInvulnerables(invulnerables: `Vec<AccountId32>`)
- **interface**: `api.tx.staking.setInvulnerables`
- **summary**:    See [`Pallet::set_invulnerables`]. 
 
### setMinCommission(new: `Perbill`)
- **interface**: `api.tx.staking.setMinCommission`
- **summary**:    See [`Pallet::set_min_commission`]. 
 
### setPayee(payee: `PalletStakingRewardDestination`)
- **interface**: `api.tx.staking.setPayee`
- **summary**:    See [`Pallet::set_payee`]. 
 
### setStakingConfigs(min_nominator_bond: `PalletStakingPalletConfigOpU128`, min_validator_bond: `PalletStakingPalletConfigOpU128`, max_nominator_count: `PalletStakingPalletConfigOpU32`, max_validator_count: `PalletStakingPalletConfigOpU32`, chill_threshold: `PalletStakingPalletConfigOpPercent`, min_commission: `PalletStakingPalletConfigOpPerbill`)
- **interface**: `api.tx.staking.setStakingConfigs`
- **summary**:    See [`Pallet::set_staking_configs`]. 
 
### setValidatorCount(new: `Compact<u32>`)
- **interface**: `api.tx.staking.setValidatorCount`
- **summary**:    See [`Pallet::set_validator_count`]. 
 
### unbond(value: `Compact<u128>`)
- **interface**: `api.tx.staking.unbond`
- **summary**:    See [`Pallet::unbond`]. 
 
### updatePayee(controller: `AccountId32`)
- **interface**: `api.tx.staking.updatePayee`
- **summary**:    See [`Pallet::update_payee`]. 
 
### validate(prefs: `PalletStakingValidatorPrefs`)
- **interface**: `api.tx.staking.validate`
- **summary**:    See [`Pallet::validate`]. 
 
### withdrawUnbonded(num_slashing_spans: `u32`)
- **interface**: `api.tx.staking.withdrawUnbonded`
- **summary**:    See [`Pallet::withdraw_unbonded`]. 

___


## stateTrieMigration
 
### continueMigrate(limits: `PalletStateTrieMigrationMigrationLimits`, real_size_upper: `u32`, witness_task: `PalletStateTrieMigrationMigrationTask`)
- **interface**: `api.tx.stateTrieMigration.continueMigrate`
- **summary**:    See [`Pallet::continue_migrate`]. 
 
### controlAutoMigration(maybe_config: `Option<PalletStateTrieMigrationMigrationLimits>`)
- **interface**: `api.tx.stateTrieMigration.controlAutoMigration`
- **summary**:    See [`Pallet::control_auto_migration`]. 
 
### forceSetProgress(progress_top: `PalletStateTrieMigrationProgress`, progress_child: `PalletStateTrieMigrationProgress`)
- **interface**: `api.tx.stateTrieMigration.forceSetProgress`
- **summary**:    See [`Pallet::force_set_progress`]. 
 
### migrateCustomChild(root: `Bytes`, child_keys: `Vec<Bytes>`, total_size: `u32`)
- **interface**: `api.tx.stateTrieMigration.migrateCustomChild`
- **summary**:    See [`Pallet::migrate_custom_child`]. 
 
### migrateCustomTop(keys: `Vec<Bytes>`, witness_size: `u32`)
- **interface**: `api.tx.stateTrieMigration.migrateCustomTop`
- **summary**:    See [`Pallet::migrate_custom_top`]. 
 
### setSignedMaxLimits(limits: `PalletStateTrieMigrationMigrationLimits`)
- **interface**: `api.tx.stateTrieMigration.setSignedMaxLimits`
- **summary**:    See [`Pallet::set_signed_max_limits`]. 

___


## sudo
 
### removeKey()
- **interface**: `api.tx.sudo.removeKey`
- **summary**:    See [`Pallet::remove_key`]. 
 
### setKey(new: `MultiAddress`)
- **interface**: `api.tx.sudo.setKey`
- **summary**:    See [`Pallet::set_key`]. 
 
### sudo(call: `Call`)
- **interface**: `api.tx.sudo.sudo`
- **summary**:    See [`Pallet::sudo`]. 
 
### sudoAs(who: `MultiAddress`, call: `Call`)
- **interface**: `api.tx.sudo.sudoAs`
- **summary**:    See [`Pallet::sudo_as`]. 
 
### sudoUncheckedWeight(call: `Call`, weight: `SpWeightsWeightV2Weight`)
- **interface**: `api.tx.sudo.sudoUncheckedWeight`
- **summary**:    See [`Pallet::sudo_unchecked_weight`]. 

___


## system
 
### doTask(task: `KitchensinkRuntimeRuntimeTask`)
- **interface**: `api.tx.system.doTask`
- **summary**:    See [`Pallet::do_task`]. 
 
### killPrefix(prefix: `Bytes`, subkeys: `u32`)
- **interface**: `api.tx.system.killPrefix`
- **summary**:    See [`Pallet::kill_prefix`]. 
 
### killStorage(keys: `Vec<Bytes>`)
- **interface**: `api.tx.system.killStorage`
- **summary**:    See [`Pallet::kill_storage`]. 
 
### remark(remark: `Bytes`)
- **interface**: `api.tx.system.remark`
- **summary**:    See [`Pallet::remark`]. 
 
### remarkWithEvent(remark: `Bytes`)
- **interface**: `api.tx.system.remarkWithEvent`
- **summary**:    See [`Pallet::remark_with_event`]. 
 
### setCode(code: `Bytes`)
- **interface**: `api.tx.system.setCode`
- **summary**:    See [`Pallet::set_code`]. 
 
### setCodeWithoutChecks(code: `Bytes`)
- **interface**: `api.tx.system.setCodeWithoutChecks`
- **summary**:    See [`Pallet::set_code_without_checks`]. 
 
### setHeapPages(pages: `u64`)
- **interface**: `api.tx.system.setHeapPages`
- **summary**:    See [`Pallet::set_heap_pages`]. 
 
### setStorage(items: `Vec<(Bytes,Bytes)>`)
- **interface**: `api.tx.system.setStorage`
- **summary**:    See [`Pallet::set_storage`]. 

___


## technicalCommittee
 
### close(proposal_hash: `H256`, index: `Compact<u32>`, proposal_weight_bound: `SpWeightsWeightV2Weight`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.technicalCommittee.close`
- **summary**:    See [`Pallet::close`]. 
 
### disapproveProposal(proposal_hash: `H256`)
- **interface**: `api.tx.technicalCommittee.disapproveProposal`
- **summary**:    See [`Pallet::disapprove_proposal`]. 
 
### execute(proposal: `Call`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.technicalCommittee.execute`
- **summary**:    See [`Pallet::execute`]. 
 
### propose(threshold: `Compact<u32>`, proposal: `Call`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.technicalCommittee.propose`
- **summary**:    See [`Pallet::propose`]. 
 
### setMembers(new_members: `Vec<AccountId32>`, prime: `Option<AccountId32>`, old_count: `u32`)
- **interface**: `api.tx.technicalCommittee.setMembers`
- **summary**:    See [`Pallet::set_members`]. 
 
### vote(proposal: `H256`, index: `Compact<u32>`, approve: `bool`)
- **interface**: `api.tx.technicalCommittee.vote`
- **summary**:    See [`Pallet::vote`]. 

___


## technicalMembership
 
### addMember(who: `MultiAddress`)
- **interface**: `api.tx.technicalMembership.addMember`
- **summary**:    See [`Pallet::add_member`]. 
 
### changeKey(new: `MultiAddress`)
- **interface**: `api.tx.technicalMembership.changeKey`
- **summary**:    See [`Pallet::change_key`]. 
 
### clearPrime()
- **interface**: `api.tx.technicalMembership.clearPrime`
- **summary**:    See [`Pallet::clear_prime`]. 
 
### removeMember(who: `MultiAddress`)
- **interface**: `api.tx.technicalMembership.removeMember`
- **summary**:    See [`Pallet::remove_member`]. 
 
### resetMembers(members: `Vec<AccountId32>`)
- **interface**: `api.tx.technicalMembership.resetMembers`
- **summary**:    See [`Pallet::reset_members`]. 
 
### setPrime(who: `MultiAddress`)
- **interface**: `api.tx.technicalMembership.setPrime`
- **summary**:    See [`Pallet::set_prime`]. 
 
### swapMember(remove: `MultiAddress`, add: `MultiAddress`)
- **interface**: `api.tx.technicalMembership.swapMember`
- **summary**:    See [`Pallet::swap_member`]. 

___


## timestamp
 
### set(now: `Compact<u64>`)
- **interface**: `api.tx.timestamp.set`
- **summary**:    See [`Pallet::set`]. 

___


## tips
 
### closeTip(hash: `H256`)
- **interface**: `api.tx.tips.closeTip`
- **summary**:    See [`Pallet::close_tip`]. 
 
### reportAwesome(reason: `Bytes`, who: `MultiAddress`)
- **interface**: `api.tx.tips.reportAwesome`
- **summary**:    See [`Pallet::report_awesome`]. 
 
### retractTip(hash: `H256`)
- **interface**: `api.tx.tips.retractTip`
- **summary**:    See [`Pallet::retract_tip`]. 
 
### slashTip(hash: `H256`)
- **interface**: `api.tx.tips.slashTip`
- **summary**:    See [`Pallet::slash_tip`]. 
 
### tip(hash: `H256`, tip_value: `Compact<u128>`)
- **interface**: `api.tx.tips.tip`
- **summary**:    See [`Pallet::tip`]. 
 
### tipNew(reason: `Bytes`, who: `MultiAddress`, tip_value: `Compact<u128>`)
- **interface**: `api.tx.tips.tipNew`
- **summary**:    See [`Pallet::tip_new`]. 

___


## transactionStorage
 
### checkProof(proof: `SpTransactionStorageProofTransactionStorageProof`)
- **interface**: `api.tx.transactionStorage.checkProof`
- **summary**:    See [`Pallet::check_proof`]. 
 
### renew(block: `u32`, index: `u32`)
- **interface**: `api.tx.transactionStorage.renew`
- **summary**:    See [`Pallet::renew`]. 
 
### store(data: `Bytes`)
- **interface**: `api.tx.transactionStorage.store`
- **summary**:    See [`Pallet::store`]. 

___


## treasury
 
### approveProposal(proposal_id: `Compact<u32>`)
- **interface**: `api.tx.treasury.approveProposal`
- **summary**:    See [`Pallet::approve_proposal`]. 
 
### checkStatus(index: `u32`)
- **interface**: `api.tx.treasury.checkStatus`
- **summary**:    See [`Pallet::check_status`]. 
 
### payout(index: `u32`)
- **interface**: `api.tx.treasury.payout`
- **summary**:    See [`Pallet::payout`]. 
 
### proposeSpend(value: `Compact<u128>`, beneficiary: `MultiAddress`)
- **interface**: `api.tx.treasury.proposeSpend`
- **summary**:    See [`Pallet::propose_spend`]. 
 
### rejectProposal(proposal_id: `Compact<u32>`)
- **interface**: `api.tx.treasury.rejectProposal`
- **summary**:    See [`Pallet::reject_proposal`]. 
 
### removeApproval(proposal_id: `Compact<u32>`)
- **interface**: `api.tx.treasury.removeApproval`
- **summary**:    See [`Pallet::remove_approval`]. 
 
### spend(asset_kind: `u32`, amount: `Compact<u128>`, beneficiary: `MultiAddress`, valid_from: `Option<u32>`)
- **interface**: `api.tx.treasury.spend`
- **summary**:    See [`Pallet::spend`]. 
 
### spendLocal(amount: `Compact<u128>`, beneficiary: `MultiAddress`)
- **interface**: `api.tx.treasury.spendLocal`
- **summary**:    See [`Pallet::spend_local`]. 
 
### voidSpend(index: `u32`)
- **interface**: `api.tx.treasury.voidSpend`
- **summary**:    See [`Pallet::void_spend`]. 

___


## txPause
 
### pause(full_name: `(Bytes,Bytes)`)
- **interface**: `api.tx.txPause.pause`
- **summary**:    See [`Pallet::pause`]. 
 
### unpause(ident: `(Bytes,Bytes)`)
- **interface**: `api.tx.txPause.unpause`
- **summary**:    See [`Pallet::unpause`]. 

___


## uniques
 
### approveTransfer(collection: `u32`, item: `u32`, delegate: `MultiAddress`)
- **interface**: `api.tx.uniques.approveTransfer`
- **summary**:    See [`Pallet::approve_transfer`]. 
 
### burn(collection: `u32`, item: `u32`, check_owner: `Option<MultiAddress>`)
- **interface**: `api.tx.uniques.burn`
- **summary**:    See [`Pallet::burn`]. 
 
### buyItem(collection: `u32`, item: `u32`, bid_price: `u128`)
- **interface**: `api.tx.uniques.buyItem`
- **summary**:    See [`Pallet::buy_item`]. 
 
### cancelApproval(collection: `u32`, item: `u32`, maybe_check_delegate: `Option<MultiAddress>`)
- **interface**: `api.tx.uniques.cancelApproval`
- **summary**:    See [`Pallet::cancel_approval`]. 
 
### clearAttribute(collection: `u32`, maybe_item: `Option<u32>`, key: `Bytes`)
- **interface**: `api.tx.uniques.clearAttribute`
- **summary**:    See [`Pallet::clear_attribute`]. 
 
### clearCollectionMetadata(collection: `u32`)
- **interface**: `api.tx.uniques.clearCollectionMetadata`
- **summary**:    See [`Pallet::clear_collection_metadata`]. 
 
### clearMetadata(collection: `u32`, item: `u32`)
- **interface**: `api.tx.uniques.clearMetadata`
- **summary**:    See [`Pallet::clear_metadata`]. 
 
### create(collection: `u32`, admin: `MultiAddress`)
- **interface**: `api.tx.uniques.create`
- **summary**:    See [`Pallet::create`]. 
 
### destroy(collection: `u32`, witness: `PalletUniquesDestroyWitness`)
- **interface**: `api.tx.uniques.destroy`
- **summary**:    See [`Pallet::destroy`]. 
 
### forceCreate(collection: `u32`, owner: `MultiAddress`, free_holding: `bool`)
- **interface**: `api.tx.uniques.forceCreate`
- **summary**:    See [`Pallet::force_create`]. 
 
### forceItemStatus(collection: `u32`, owner: `MultiAddress`, issuer: `MultiAddress`, admin: `MultiAddress`, freezer: `MultiAddress`, free_holding: `bool`, is_frozen: `bool`)
- **interface**: `api.tx.uniques.forceItemStatus`
- **summary**:    See [`Pallet::force_item_status`]. 
 
### freeze(collection: `u32`, item: `u32`)
- **interface**: `api.tx.uniques.freeze`
- **summary**:    See [`Pallet::freeze`]. 
 
### freezeCollection(collection: `u32`)
- **interface**: `api.tx.uniques.freezeCollection`
- **summary**:    See [`Pallet::freeze_collection`]. 
 
### mint(collection: `u32`, item: `u32`, owner: `MultiAddress`)
- **interface**: `api.tx.uniques.mint`
- **summary**:    See [`Pallet::mint`]. 
 
### redeposit(collection: `u32`, items: `Vec<u32>`)
- **interface**: `api.tx.uniques.redeposit`
- **summary**:    See [`Pallet::redeposit`]. 
 
### setAcceptOwnership(maybe_collection: `Option<u32>`)
- **interface**: `api.tx.uniques.setAcceptOwnership`
- **summary**:    See [`Pallet::set_accept_ownership`]. 
 
### setAttribute(collection: `u32`, maybe_item: `Option<u32>`, key: `Bytes`, value: `Bytes`)
- **interface**: `api.tx.uniques.setAttribute`
- **summary**:    See [`Pallet::set_attribute`]. 
 
### setCollectionMaxSupply(collection: `u32`, max_supply: `u32`)
- **interface**: `api.tx.uniques.setCollectionMaxSupply`
- **summary**:    See [`Pallet::set_collection_max_supply`]. 
 
### setCollectionMetadata(collection: `u32`, data: `Bytes`, is_frozen: `bool`)
- **interface**: `api.tx.uniques.setCollectionMetadata`
- **summary**:    See [`Pallet::set_collection_metadata`]. 
 
### setMetadata(collection: `u32`, item: `u32`, data: `Bytes`, is_frozen: `bool`)
- **interface**: `api.tx.uniques.setMetadata`
- **summary**:    See [`Pallet::set_metadata`]. 
 
### setPrice(collection: `u32`, item: `u32`, price: `Option<u128>`, whitelisted_buyer: `Option<MultiAddress>`)
- **interface**: `api.tx.uniques.setPrice`
- **summary**:    See [`Pallet::set_price`]. 
 
### setTeam(collection: `u32`, issuer: `MultiAddress`, admin: `MultiAddress`, freezer: `MultiAddress`)
- **interface**: `api.tx.uniques.setTeam`
- **summary**:    See [`Pallet::set_team`]. 
 
### thaw(collection: `u32`, item: `u32`)
- **interface**: `api.tx.uniques.thaw`
- **summary**:    See [`Pallet::thaw`]. 
 
### thawCollection(collection: `u32`)
- **interface**: `api.tx.uniques.thawCollection`
- **summary**:    See [`Pallet::thaw_collection`]. 
 
### transfer(collection: `u32`, item: `u32`, dest: `MultiAddress`)
- **interface**: `api.tx.uniques.transfer`
- **summary**:    See [`Pallet::transfer`]. 
 
### transferOwnership(collection: `u32`, owner: `MultiAddress`)
- **interface**: `api.tx.uniques.transferOwnership`
- **summary**:    See [`Pallet::transfer_ownership`]. 

___


## utility
 
### asDerivative(index: `u16`, call: `Call`)
- **interface**: `api.tx.utility.asDerivative`
- **summary**:    See [`Pallet::as_derivative`]. 
 
### batch(calls: `Vec<Call>`)
- **interface**: `api.tx.utility.batch`
- **summary**:    See [`Pallet::batch`]. 
 
### batchAll(calls: `Vec<Call>`)
- **interface**: `api.tx.utility.batchAll`
- **summary**:    See [`Pallet::batch_all`]. 
 
### dispatchAs(as_origin: `KitchensinkRuntimeOriginCaller`, call: `Call`)
- **interface**: `api.tx.utility.dispatchAs`
- **summary**:    See [`Pallet::dispatch_as`]. 
 
### forceBatch(calls: `Vec<Call>`)
- **interface**: `api.tx.utility.forceBatch`
- **summary**:    See [`Pallet::force_batch`]. 
 
### withWeight(call: `Call`, weight: `SpWeightsWeightV2Weight`)
- **interface**: `api.tx.utility.withWeight`
- **summary**:    See [`Pallet::with_weight`]. 

___


## vesting
 
### forceRemoveVestingSchedule(target: `MultiAddress`, schedule_index: `u32`)
- **interface**: `api.tx.vesting.forceRemoveVestingSchedule`
- **summary**:    See [`Pallet::force_remove_vesting_schedule`]. 
 
### forceVestedTransfer(source: `MultiAddress`, target: `MultiAddress`, schedule: `PalletVestingVestingInfo`)
- **interface**: `api.tx.vesting.forceVestedTransfer`
- **summary**:    See [`Pallet::force_vested_transfer`]. 
 
### mergeSchedules(schedule1_index: `u32`, schedule2_index: `u32`)
- **interface**: `api.tx.vesting.mergeSchedules`
- **summary**:    See [`Pallet::merge_schedules`]. 
 
### vest()
- **interface**: `api.tx.vesting.vest`
- **summary**:    See [`Pallet::vest`]. 
 
### vestOther(target: `MultiAddress`)
- **interface**: `api.tx.vesting.vestOther`
- **summary**:    See [`Pallet::vest_other`]. 
 
### vestedTransfer(target: `MultiAddress`, schedule: `PalletVestingVestingInfo`)
- **interface**: `api.tx.vesting.vestedTransfer`
- **summary**:    See [`Pallet::vested_transfer`]. 

___


## voterList
 
### putInFrontOf(lighter: `MultiAddress`)
- **interface**: `api.tx.voterList.putInFrontOf`
- **summary**:    See [`Pallet::put_in_front_of`]. 
 
### putInFrontOfOther(heavier: `MultiAddress`, lighter: `MultiAddress`)
- **interface**: `api.tx.voterList.putInFrontOfOther`
- **summary**:    See [`Pallet::put_in_front_of_other`]. 
 
### rebag(dislocated: `MultiAddress`)
- **interface**: `api.tx.voterList.rebag`
- **summary**:    See [`Pallet::rebag`]. 

___


## whitelist
 
### dispatchWhitelistedCall(call_hash: `H256`, call_encoded_len: `u32`, call_weight_witness: `SpWeightsWeightV2Weight`)
- **interface**: `api.tx.whitelist.dispatchWhitelistedCall`
- **summary**:    See [`Pallet::dispatch_whitelisted_call`]. 
 
### dispatchWhitelistedCallWithPreimage(call: `Call`)
- **interface**: `api.tx.whitelist.dispatchWhitelistedCallWithPreimage`
- **summary**:    See [`Pallet::dispatch_whitelisted_call_with_preimage`]. 
 
### removeWhitelistedCall(call_hash: `H256`)
- **interface**: `api.tx.whitelist.removeWhitelistedCall`
- **summary**:    See [`Pallet::remove_whitelisted_call`]. 
 
### whitelistCall(call_hash: `H256`)
- **interface**: `api.tx.whitelist.whitelistCall`
- **summary**:    See [`Pallet::whitelist_call`]. 
