---
title: Extrinsics
---

The following sections contain Extrinsics methods are part of the default Polkadot runtime. On the api, these are exposed via `api.tx.<module>.<method>`. 

(NOTE: These were generated from a static/snapshot view of a recent default Polkadot runtime. Some items may not be available in older nodes, or in any customized implementations.)

- **[auctions](#auctions)**

- **[babe](#babe)**

- **[balances](#balances)**

- **[bounties](#bounties)**

- **[childBounties](#childbounties)**

- **[claims](#claims)**

- **[configuration](#configuration)**

- **[convictionVoting](#convictionvoting)**

- **[crowdloan](#crowdloan)**

- **[electionProviderMultiPhase](#electionprovidermultiphase)**

- **[fastUnstake](#fastunstake)**

- **[grandpa](#grandpa)**

- **[hrmp](#hrmp)**

- **[identity](#identity)**

- **[imOnline](#imonline)**

- **[indices](#indices)**

- **[initializer](#initializer)**

- **[messageQueue](#messagequeue)**

- **[multisig](#multisig)**

- **[nominationPools](#nominationpools)**

- **[paraInclusion](#parainclusion)**

- **[paraInherent](#parainherent)**

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

- **[system](#system)**

- **[timestamp](#timestamp)**

- **[treasury](#treasury)**

- **[utility](#utility)**

- **[vesting](#vesting)**

- **[voterList](#voterlist)**

- **[whitelist](#whitelist)**

- **[xcmPallet](#xcmpallet)**


___


## auctions
 
### bid(para: `Compact<u32>`, auction_index: `Compact<u32>`, first_slot: `Compact<u32>`, last_slot: `Compact<u32>`, amount: `Compact<u128>`)
- **interface**: `api.tx.auctions.bid`
- **summary**:    See [`Pallet::bid`]. 
 
### cancelAuction()
- **interface**: `api.tx.auctions.cancelAuction`
- **summary**:    See [`Pallet::cancel_auction`]. 
 
### newAuction(duration: `Compact<u32>`, lease_period_index: `Compact<u32>`)
- **interface**: `api.tx.auctions.newAuction`
- **summary**:    See [`Pallet::new_auction`]. 

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
 
### setBalanceDeprecated(who: `MultiAddress`, new_free: `Compact<u128>`, old_reserved: `Compact<u128>`)
- **interface**: `api.tx.balances.setBalanceDeprecated`
- **summary**:    See [`Pallet::set_balance_deprecated`]. 
 
### transfer(dest: `MultiAddress`, value: `Compact<u128>`)
- **interface**: `api.tx.balances.transfer`
- **summary**:    See [`Pallet::transfer`]. 
 
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


## claims
 
### attest(statement: `Bytes`)
- **interface**: `api.tx.claims.attest`
- **summary**:    See [`Pallet::attest`]. 
 
### claim(dest: `AccountId32`, ethereum_signature: `PolkadotRuntimeCommonClaimsEcdsaSignature`)
- **interface**: `api.tx.claims.claim`
- **summary**:    See [`Pallet::claim`]. 
 
### claimAttest(dest: `AccountId32`, ethereum_signature: `PolkadotRuntimeCommonClaimsEcdsaSignature`, statement: `Bytes`)
- **interface**: `api.tx.claims.claimAttest`
- **summary**:    See [`Pallet::claim_attest`]. 
 
### mintClaim(who: `EthereumAddress`, value: `u128`, vesting_schedule: `Option<(u128,u128,u32)>`, statement: `Option<PolkadotRuntimeCommonClaimsStatementKind>`)
- **interface**: `api.tx.claims.mintClaim`
- **summary**:    See [`Pallet::mint_claim`]. 
 
### moveClaim(old: `EthereumAddress`, new: `EthereumAddress`, maybe_preclaim: `Option<AccountId32>`)
- **interface**: `api.tx.claims.moveClaim`
- **summary**:    See [`Pallet::move_claim`]. 

___


## configuration
 
### setAsyncBackingParams(new: `PolkadotPrimitivesVstagingAsyncBackingParams`)
- **interface**: `api.tx.configuration.setAsyncBackingParams`
- **summary**:    See [`Pallet::set_async_backing_params`]. 
 
### setBypassConsistencyCheck(new: `bool`)
- **interface**: `api.tx.configuration.setBypassConsistencyCheck`
- **summary**:    See [`Pallet::set_bypass_consistency_check`]. 
 
### setCodeRetentionPeriod(new: `u32`)
- **interface**: `api.tx.configuration.setCodeRetentionPeriod`
- **summary**:    See [`Pallet::set_code_retention_period`]. 
 
### setDisputePeriod(new: `u32`)
- **interface**: `api.tx.configuration.setDisputePeriod`
- **summary**:    See [`Pallet::set_dispute_period`]. 
 
### setDisputePostConclusionAcceptancePeriod(new: `u32`)
- **interface**: `api.tx.configuration.setDisputePostConclusionAcceptancePeriod`
- **summary**:    See [`Pallet::set_dispute_post_conclusion_acceptance_period`]. 
 
### setExecutorParams(new: `PolkadotPrimitivesV5ExecutorParams`)
- **interface**: `api.tx.configuration.setExecutorParams`
- **summary**:    See [`Pallet::set_executor_params`]. 
 
### setGroupRotationFrequency(new: `u32`)
- **interface**: `api.tx.configuration.setGroupRotationFrequency`
- **summary**:    See [`Pallet::set_group_rotation_frequency`]. 
 
### setHrmpChannelMaxCapacity(new: `u32`)
- **interface**: `api.tx.configuration.setHrmpChannelMaxCapacity`
- **summary**:    See [`Pallet::set_hrmp_channel_max_capacity`]. 
 
### setHrmpChannelMaxMessageSize(new: `u32`)
- **interface**: `api.tx.configuration.setHrmpChannelMaxMessageSize`
- **summary**:    See [`Pallet::set_hrmp_channel_max_message_size`]. 
 
### setHrmpChannelMaxTotalSize(new: `u32`)
- **interface**: `api.tx.configuration.setHrmpChannelMaxTotalSize`
- **summary**:    See [`Pallet::set_hrmp_channel_max_total_size`]. 
 
### setHrmpMaxMessageNumPerCandidate(new: `u32`)
- **interface**: `api.tx.configuration.setHrmpMaxMessageNumPerCandidate`
- **summary**:    See [`Pallet::set_hrmp_max_message_num_per_candidate`]. 
 
### setHrmpMaxParachainInboundChannels(new: `u32`)
- **interface**: `api.tx.configuration.setHrmpMaxParachainInboundChannels`
- **summary**:    See [`Pallet::set_hrmp_max_parachain_inbound_channels`]. 
 
### setHrmpMaxParachainOutboundChannels(new: `u32`)
- **interface**: `api.tx.configuration.setHrmpMaxParachainOutboundChannels`
- **summary**:    See [`Pallet::set_hrmp_max_parachain_outbound_channels`]. 
 
### setHrmpOpenRequestTtl(new: `u32`)
- **interface**: `api.tx.configuration.setHrmpOpenRequestTtl`
- **summary**:    See [`Pallet::set_hrmp_open_request_ttl`]. 
 
### setHrmpRecipientDeposit(new: `u128`)
- **interface**: `api.tx.configuration.setHrmpRecipientDeposit`
- **summary**:    See [`Pallet::set_hrmp_recipient_deposit`]. 
 
### setHrmpSenderDeposit(new: `u128`)
- **interface**: `api.tx.configuration.setHrmpSenderDeposit`
- **summary**:    See [`Pallet::set_hrmp_sender_deposit`]. 
 
### setMaxCodeSize(new: `u32`)
- **interface**: `api.tx.configuration.setMaxCodeSize`
- **summary**:    See [`Pallet::set_max_code_size`]. 
 
### setMaxDownwardMessageSize(new: `u32`)
- **interface**: `api.tx.configuration.setMaxDownwardMessageSize`
- **summary**:    See [`Pallet::set_max_downward_message_size`]. 
 
### setMaxHeadDataSize(new: `u32`)
- **interface**: `api.tx.configuration.setMaxHeadDataSize`
- **summary**:    See [`Pallet::set_max_head_data_size`]. 
 
### setMaxPovSize(new: `u32`)
- **interface**: `api.tx.configuration.setMaxPovSize`
- **summary**:    See [`Pallet::set_max_pov_size`]. 
 
### setMaxUpwardMessageNumPerCandidate(new: `u32`)
- **interface**: `api.tx.configuration.setMaxUpwardMessageNumPerCandidate`
- **summary**:    See [`Pallet::set_max_upward_message_num_per_candidate`]. 
 
### setMaxUpwardMessageSize(new: `u32`)
- **interface**: `api.tx.configuration.setMaxUpwardMessageSize`
- **summary**:    See [`Pallet::set_max_upward_message_size`]. 
 
### setMaxUpwardQueueCount(new: `u32`)
- **interface**: `api.tx.configuration.setMaxUpwardQueueCount`
- **summary**:    See [`Pallet::set_max_upward_queue_count`]. 
 
### setMaxUpwardQueueSize(new: `u32`)
- **interface**: `api.tx.configuration.setMaxUpwardQueueSize`
- **summary**:    See [`Pallet::set_max_upward_queue_size`]. 
 
### setMaxValidators(new: `Option<u32>`)
- **interface**: `api.tx.configuration.setMaxValidators`
- **summary**:    See [`Pallet::set_max_validators`]. 
 
### setMaxValidatorsPerCore(new: `Option<u32>`)
- **interface**: `api.tx.configuration.setMaxValidatorsPerCore`
- **summary**:    See [`Pallet::set_max_validators_per_core`]. 
 
### setMinimumValidationUpgradeDelay(new: `u32`)
- **interface**: `api.tx.configuration.setMinimumValidationUpgradeDelay`
- **summary**:    See [`Pallet::set_minimum_validation_upgrade_delay`]. 
 
### setNDelayTranches(new: `u32`)
- **interface**: `api.tx.configuration.setNDelayTranches`
- **summary**:    See [`Pallet::set_n_delay_tranches`]. 
 
### setNeededApprovals(new: `u32`)
- **interface**: `api.tx.configuration.setNeededApprovals`
- **summary**:    See [`Pallet::set_needed_approvals`]. 
 
### setNoShowSlots(new: `u32`)
- **interface**: `api.tx.configuration.setNoShowSlots`
- **summary**:    See [`Pallet::set_no_show_slots`]. 
 
### setOnDemandBaseFee(new: `u128`)
- **interface**: `api.tx.configuration.setOnDemandBaseFee`
- **summary**:    See [`Pallet::set_on_demand_base_fee`]. 
 
### setOnDemandCores(new: `u32`)
- **interface**: `api.tx.configuration.setOnDemandCores`
- **summary**:    See [`Pallet::set_on_demand_cores`]. 
 
### setOnDemandFeeVariability(new: `Perbill`)
- **interface**: `api.tx.configuration.setOnDemandFeeVariability`
- **summary**:    See [`Pallet::set_on_demand_fee_variability`]. 
 
### setOnDemandQueueMaxSize(new: `u32`)
- **interface**: `api.tx.configuration.setOnDemandQueueMaxSize`
- **summary**:    See [`Pallet::set_on_demand_queue_max_size`]. 
 
### setOnDemandRetries(new: `u32`)
- **interface**: `api.tx.configuration.setOnDemandRetries`
- **summary**:    See [`Pallet::set_on_demand_retries`]. 
 
### setOnDemandTargetQueueUtilization(new: `Perbill`)
- **interface**: `api.tx.configuration.setOnDemandTargetQueueUtilization`
- **summary**:    See [`Pallet::set_on_demand_target_queue_utilization`]. 
 
### setOnDemandTtl(new: `u32`)
- **interface**: `api.tx.configuration.setOnDemandTtl`
- **summary**:    See [`Pallet::set_on_demand_ttl`]. 
 
### setParasAvailabilityPeriod(new: `u32`)
- **interface**: `api.tx.configuration.setParasAvailabilityPeriod`
- **summary**:    See [`Pallet::set_paras_availability_period`]. 
 
### setPvfVotingTtl(new: `u32`)
- **interface**: `api.tx.configuration.setPvfVotingTtl`
- **summary**:    See [`Pallet::set_pvf_voting_ttl`]. 
 
### setRelayVrfModuloSamples(new: `u32`)
- **interface**: `api.tx.configuration.setRelayVrfModuloSamples`
- **summary**:    See [`Pallet::set_relay_vrf_modulo_samples`]. 
 
### setSchedulingLookahead(new: `u32`)
- **interface**: `api.tx.configuration.setSchedulingLookahead`
- **summary**:    See [`Pallet::set_scheduling_lookahead`]. 
 
### setValidationUpgradeCooldown(new: `u32`)
- **interface**: `api.tx.configuration.setValidationUpgradeCooldown`
- **summary**:    See [`Pallet::set_validation_upgrade_cooldown`]. 
 
### setValidationUpgradeDelay(new: `u32`)
- **interface**: `api.tx.configuration.setValidationUpgradeDelay`
- **summary**:    See [`Pallet::set_validation_upgrade_delay`]. 
 
### setZerothDelayTrancheWidth(new: `u32`)
- **interface**: `api.tx.configuration.setZerothDelayTrancheWidth`
- **summary**:    See [`Pallet::set_zeroth_delay_tranche_width`]. 

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


## crowdloan
 
### addMemo(index: `u32`, memo: `Bytes`)
- **interface**: `api.tx.crowdloan.addMemo`
- **summary**:    See [`Pallet::add_memo`]. 
 
### contribute(index: `Compact<u32>`, value: `Compact<u128>`, signature: `Option<SpRuntimeMultiSignature>`)
- **interface**: `api.tx.crowdloan.contribute`
- **summary**:    See [`Pallet::contribute`]. 
 
### contributeAll(index: `Compact<u32>`, signature: `Option<SpRuntimeMultiSignature>`)
- **interface**: `api.tx.crowdloan.contributeAll`
- **summary**:    See [`Pallet::contribute_all`]. 
 
### create(index: `Compact<u32>`, cap: `Compact<u128>`, first_period: `Compact<u32>`, last_period: `Compact<u32>`, end: `Compact<u32>`, verifier: `Option<SpRuntimeMultiSigner>`)
- **interface**: `api.tx.crowdloan.create`
- **summary**:    See [`Pallet::create`]. 
 
### dissolve(index: `Compact<u32>`)
- **interface**: `api.tx.crowdloan.dissolve`
- **summary**:    See [`Pallet::dissolve`]. 
 
### edit(index: `Compact<u32>`, cap: `Compact<u128>`, first_period: `Compact<u32>`, last_period: `Compact<u32>`, end: `Compact<u32>`, verifier: `Option<SpRuntimeMultiSigner>`)
- **interface**: `api.tx.crowdloan.edit`
- **summary**:    See [`Pallet::edit`]. 
 
### poke(index: `u32`)
- **interface**: `api.tx.crowdloan.poke`
- **summary**:    See [`Pallet::poke`]. 
 
### refund(index: `Compact<u32>`)
- **interface**: `api.tx.crowdloan.refund`
- **summary**:    See [`Pallet::refund`]. 
 
### withdraw(who: `AccountId32`, index: `Compact<u32>`)
- **interface**: `api.tx.crowdloan.withdraw`
- **summary**:    See [`Pallet::withdraw`]. 

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


## hrmp
 
### forceCleanHrmp(para: `u32`, inbound: `u32`, outbound: `u32`)
- **interface**: `api.tx.hrmp.forceCleanHrmp`
- **summary**:    See [`Pallet::force_clean_hrmp`]. 
 
### forceOpenHrmpChannel(sender: `u32`, recipient: `u32`, max_capacity: `u32`, max_message_size: `u32`)
- **interface**: `api.tx.hrmp.forceOpenHrmpChannel`
- **summary**:    See [`Pallet::force_open_hrmp_channel`]. 
 
### forceProcessHrmpClose(channels: `u32`)
- **interface**: `api.tx.hrmp.forceProcessHrmpClose`
- **summary**:    See [`Pallet::force_process_hrmp_close`]. 
 
### forceProcessHrmpOpen(channels: `u32`)
- **interface**: `api.tx.hrmp.forceProcessHrmpOpen`
- **summary**:    See [`Pallet::force_process_hrmp_open`]. 
 
### hrmpAcceptOpenChannel(sender: `u32`)
- **interface**: `api.tx.hrmp.hrmpAcceptOpenChannel`
- **summary**:    See [`Pallet::hrmp_accept_open_channel`]. 
 
### hrmpCancelOpenRequest(channel_id: `PolkadotParachainPrimitivesHrmpChannelId`, open_requests: `u32`)
- **interface**: `api.tx.hrmp.hrmpCancelOpenRequest`
- **summary**:    See [`Pallet::hrmp_cancel_open_request`]. 
 
### hrmpCloseChannel(channel_id: `PolkadotParachainPrimitivesHrmpChannelId`)
- **interface**: `api.tx.hrmp.hrmpCloseChannel`
- **summary**:    See [`Pallet::hrmp_close_channel`]. 
 
### hrmpInitOpenChannel(recipient: `u32`, proposed_max_capacity: `u32`, proposed_max_message_size: `u32`)
- **interface**: `api.tx.hrmp.hrmpInitOpenChannel`
- **summary**:    See [`Pallet::hrmp_init_open_channel`]. 

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
 
### setFields(index: `Compact<u32>`, fields: `PalletIdentityBitFlags`)
- **interface**: `api.tx.identity.setFields`
- **summary**:    See [`Pallet::set_fields`]. 
 
### setIdentity(info: `PalletIdentityIdentityInfo`)
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


## initializer
 
### forceApprove(up_to: `u32`)
- **interface**: `api.tx.initializer.forceApprove`
- **summary**:    See [`Pallet::force_approve`]. 

___


## messageQueue
 
### executeOverweight(message_origin: `PolkadotRuntimeParachainsInclusionAggregateMessageOrigin`, page: `u32`, index: `u32`, weight_limit: `SpWeightsWeightV2Weight`)
- **interface**: `api.tx.messageQueue.executeOverweight`
- **summary**:    See [`Pallet::execute_overweight`]. 
 
### reapPage(message_origin: `PolkadotRuntimeParachainsInclusionAggregateMessageOrigin`, page_index: `u32`)
- **interface**: `api.tx.messageQueue.reapPage`
- **summary**:    See [`Pallet::reap_page`]. 

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


## nominationPools
 
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


## paraInclusion

___


## paraInherent
 
### enter(data: `PolkadotPrimitivesV5InherentData`)
- **interface**: `api.tx.paraInherent.enter`
- **summary**:    See [`Pallet::enter`]. 

___


## paras
 
### addTrustedValidationCode(validation_code: `Bytes`)
- **interface**: `api.tx.paras.addTrustedValidationCode`
- **summary**:    See [`Pallet::add_trusted_validation_code`]. 
 
### forceNoteNewHead(para: `u32`, new_head: `Bytes`)
- **interface**: `api.tx.paras.forceNoteNewHead`
- **summary**:    See [`Pallet::force_note_new_head`]. 
 
### forceQueueAction(para: `u32`)
- **interface**: `api.tx.paras.forceQueueAction`
- **summary**:    See [`Pallet::force_queue_action`]. 
 
### forceScheduleCodeUpgrade(para: `u32`, new_code: `Bytes`, relay_parent_number: `u32`)
- **interface**: `api.tx.paras.forceScheduleCodeUpgrade`
- **summary**:    See [`Pallet::force_schedule_code_upgrade`]. 
 
### forceSetCurrentCode(para: `u32`, new_code: `Bytes`)
- **interface**: `api.tx.paras.forceSetCurrentCode`
- **summary**:    See [`Pallet::force_set_current_code`]. 
 
### forceSetCurrentHead(para: `u32`, new_head: `Bytes`)
- **interface**: `api.tx.paras.forceSetCurrentHead`
- **summary**:    See [`Pallet::force_set_current_head`]. 
 
### forceSetMostRecentContext(para: `u32`, context: `u32`)
- **interface**: `api.tx.paras.forceSetMostRecentContext`
- **summary**:    See [`Pallet::force_set_most_recent_context`]. 
 
### includePvfCheckStatement(stmt: `PolkadotPrimitivesV5PvfCheckStatement`, signature: `PolkadotPrimitivesV5ValidatorAppSignature`)
- **interface**: `api.tx.paras.includePvfCheckStatement`
- **summary**:    See [`Pallet::include_pvf_check_statement`]. 
 
### pokeUnusedValidationCode(validation_code_hash: `H256`)
- **interface**: `api.tx.paras.pokeUnusedValidationCode`
- **summary**:    See [`Pallet::poke_unused_validation_code`]. 

___


## parasDisputes
 
### forceUnfreeze()
- **interface**: `api.tx.parasDisputes.forceUnfreeze`
- **summary**:    See [`Pallet::force_unfreeze`]. 

___


## parasShared

___


## parasSlashing
 
### reportDisputeLostUnsigned(dispute_proof: `PolkadotPrimitivesV5SlashingDisputeProof`, key_owner_proof: `SpSessionMembershipProof`)
- **interface**: `api.tx.parasSlashing.reportDisputeLostUnsigned`
- **summary**:    See [`Pallet::report_dispute_lost_unsigned`]. 

___


## preimage
 
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
 
### addProxy(delegate: `MultiAddress`, proxy_type: `PolkadotRuntimeProxyType`, delay: `u32`)
- **interface**: `api.tx.proxy.addProxy`
- **summary**:    See [`Pallet::add_proxy`]. 
 
### announce(real: `MultiAddress`, call_hash: `H256`)
- **interface**: `api.tx.proxy.announce`
- **summary**:    See [`Pallet::announce`]. 
 
### createPure(proxy_type: `PolkadotRuntimeProxyType`, delay: `u32`, index: `u16`)
- **interface**: `api.tx.proxy.createPure`
- **summary**:    See [`Pallet::create_pure`]. 
 
### killPure(spawner: `MultiAddress`, proxy_type: `PolkadotRuntimeProxyType`, index: `u16`, height: `Compact<u32>`, ext_index: `Compact<u32>`)
- **interface**: `api.tx.proxy.killPure`
- **summary**:    See [`Pallet::kill_pure`]. 
 
### proxy(real: `MultiAddress`, force_proxy_type: `Option<PolkadotRuntimeProxyType>`, call: `Call`)
- **interface**: `api.tx.proxy.proxy`
- **summary**:    See [`Pallet::proxy`]. 
 
### proxyAnnounced(delegate: `MultiAddress`, real: `MultiAddress`, force_proxy_type: `Option<PolkadotRuntimeProxyType>`, call: `Call`)
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
 
### removeProxy(delegate: `MultiAddress`, proxy_type: `PolkadotRuntimeProxyType`, delay: `u32`)
- **interface**: `api.tx.proxy.removeProxy`
- **summary**:    See [`Pallet::remove_proxy`]. 

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
 
### submit(proposal_origin: `PolkadotRuntimeOriginCaller`, proposal: `FrameSupportPreimagesBounded`, enactment_moment: `FrameSupportScheduleDispatchTime`)
- **interface**: `api.tx.referenda.submit`
- **summary**:    See [`Pallet::submit`]. 

___


## registrar
 
### addLock(para: `u32`)
- **interface**: `api.tx.registrar.addLock`
- **summary**:    See [`Pallet::add_lock`]. 
 
### deregister(id: `u32`)
- **interface**: `api.tx.registrar.deregister`
- **summary**:    See [`Pallet::deregister`]. 
 
### forceRegister(who: `AccountId32`, deposit: `u128`, id: `u32`, genesis_head: `Bytes`, validation_code: `Bytes`)
- **interface**: `api.tx.registrar.forceRegister`
- **summary**:    See [`Pallet::force_register`]. 
 
### register(id: `u32`, genesis_head: `Bytes`, validation_code: `Bytes`)
- **interface**: `api.tx.registrar.register`
- **summary**:    See [`Pallet::register`]. 
 
### removeLock(para: `u32`)
- **interface**: `api.tx.registrar.removeLock`
- **summary**:    See [`Pallet::remove_lock`]. 
 
### reserve()
- **interface**: `api.tx.registrar.reserve`
- **summary**:    See [`Pallet::reserve`]. 
 
### scheduleCodeUpgrade(para: `u32`, new_code: `Bytes`)
- **interface**: `api.tx.registrar.scheduleCodeUpgrade`
- **summary**:    See [`Pallet::schedule_code_upgrade`]. 
 
### setCurrentHead(para: `u32`, new_head: `Bytes`)
- **interface**: `api.tx.registrar.setCurrentHead`
- **summary**:    See [`Pallet::set_current_head`]. 
 
### swap(id: `u32`, other: `u32`)
- **interface**: `api.tx.registrar.swap`
- **summary**:    See [`Pallet::swap`]. 

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
 
### setKeys(keys: `PolkadotRuntimeSessionKeys`, proof: `Bytes`)
- **interface**: `api.tx.session.setKeys`
- **summary**:    See [`Pallet::set_keys`]. 

___


## slots
 
### clearAllLeases(para: `u32`)
- **interface**: `api.tx.slots.clearAllLeases`
- **summary**:    See [`Pallet::clear_all_leases`]. 
 
### forceLease(para: `u32`, leaser: `AccountId32`, amount: `u128`, period_begin: `u32`, period_count: `u32`)
- **interface**: `api.tx.slots.forceLease`
- **summary**:    See [`Pallet::force_lease`]. 
 
### triggerOnboard(para: `u32`)
- **interface**: `api.tx.slots.triggerOnboard`
- **summary**:    See [`Pallet::trigger_onboard`]. 

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
 
### chillOther(controller: `AccountId32`)
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
 
### validate(prefs: `PalletStakingValidatorPrefs`)
- **interface**: `api.tx.staking.validate`
- **summary**:    See [`Pallet::validate`]. 
 
### withdrawUnbonded(num_slashing_spans: `u32`)
- **interface**: `api.tx.staking.withdrawUnbonded`
- **summary**:    See [`Pallet::withdraw_unbonded`]. 

___


## system
 
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


## timestamp
 
### set(now: `Compact<u64>`)
- **interface**: `api.tx.timestamp.set`
- **summary**:    See [`Pallet::set`]. 

___


## treasury
 
### approveProposal(proposal_id: `Compact<u32>`)
- **interface**: `api.tx.treasury.approveProposal`
- **summary**:    See [`Pallet::approve_proposal`]. 
 
### proposeSpend(value: `Compact<u128>`, beneficiary: `MultiAddress`)
- **interface**: `api.tx.treasury.proposeSpend`
- **summary**:    See [`Pallet::propose_spend`]. 
 
### rejectProposal(proposal_id: `Compact<u32>`)
- **interface**: `api.tx.treasury.rejectProposal`
- **summary**:    See [`Pallet::reject_proposal`]. 
 
### removeApproval(proposal_id: `Compact<u32>`)
- **interface**: `api.tx.treasury.removeApproval`
- **summary**:    See [`Pallet::remove_approval`]. 
 
### spend(amount: `Compact<u128>`, beneficiary: `MultiAddress`)
- **interface**: `api.tx.treasury.spend`
- **summary**:    See [`Pallet::spend`]. 

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
 
### dispatchAs(as_origin: `PolkadotRuntimeOriginCaller`, call: `Call`)
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

___


## xcmPallet
 
### execute(message: `XcmVersionedXcm`, max_weight: `SpWeightsWeightV2Weight`)
- **interface**: `api.tx.xcmPallet.execute`
- **summary**:    See [`Pallet::execute`]. 
 
### forceDefaultXcmVersion(maybe_xcm_version: `Option<u32>`)
- **interface**: `api.tx.xcmPallet.forceDefaultXcmVersion`
- **summary**:    See [`Pallet::force_default_xcm_version`]. 
 
### forceSubscribeVersionNotify(location: `XcmVersionedMultiLocation`)
- **interface**: `api.tx.xcmPallet.forceSubscribeVersionNotify`
- **summary**:    See [`Pallet::force_subscribe_version_notify`]. 
 
### forceSuspension(suspended: `bool`)
- **interface**: `api.tx.xcmPallet.forceSuspension`
- **summary**:    See [`Pallet::force_suspension`]. 
 
### forceUnsubscribeVersionNotify(location: `XcmVersionedMultiLocation`)
- **interface**: `api.tx.xcmPallet.forceUnsubscribeVersionNotify`
- **summary**:    See [`Pallet::force_unsubscribe_version_notify`]. 
 
### forceXcmVersion(location: `XcmV3MultiLocation`, version: `u32`)
- **interface**: `api.tx.xcmPallet.forceXcmVersion`
- **summary**:    See [`Pallet::force_xcm_version`]. 
 
### limitedReserveTransferAssets(dest: `XcmVersionedMultiLocation`, beneficiary: `XcmVersionedMultiLocation`, assets: `XcmVersionedMultiAssets`, fee_asset_item: `u32`, weight_limit: `XcmV3WeightLimit`)
- **interface**: `api.tx.xcmPallet.limitedReserveTransferAssets`
- **summary**:    See [`Pallet::limited_reserve_transfer_assets`]. 
 
### limitedTeleportAssets(dest: `XcmVersionedMultiLocation`, beneficiary: `XcmVersionedMultiLocation`, assets: `XcmVersionedMultiAssets`, fee_asset_item: `u32`, weight_limit: `XcmV3WeightLimit`)
- **interface**: `api.tx.xcmPallet.limitedTeleportAssets`
- **summary**:    See [`Pallet::limited_teleport_assets`]. 
 
### reserveTransferAssets(dest: `XcmVersionedMultiLocation`, beneficiary: `XcmVersionedMultiLocation`, assets: `XcmVersionedMultiAssets`, fee_asset_item: `u32`)
- **interface**: `api.tx.xcmPallet.reserveTransferAssets`
- **summary**:    See [`Pallet::reserve_transfer_assets`]. 
 
### send(dest: `XcmVersionedMultiLocation`, message: `XcmVersionedXcm`)
- **interface**: `api.tx.xcmPallet.send`
- **summary**:    See [`Pallet::send`]. 
 
### teleportAssets(dest: `XcmVersionedMultiLocation`, beneficiary: `XcmVersionedMultiLocation`, assets: `XcmVersionedMultiAssets`, fee_asset_item: `u32`)
- **interface**: `api.tx.xcmPallet.teleportAssets`
- **summary**:    See [`Pallet::teleport_assets`]. 
