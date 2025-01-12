---
title: Runtime
---

The following section contains known runtime calls that may be available on specific runtimes (depending on configuration and available pallets). These call directly into the WASM runtime for queries and operations.

- **[accountNonceApi](#accountnonceapi)**

- **[authorityDiscoveryApi](#authoritydiscoveryapi)**

- **[babeApi](#babeapi)**

- **[beefyApi](#beefyapi)**

- **[beefyMmrApi](#beefymmrapi)**

- **[blockBuilder](#blockbuilder)**

- **[core](#core)**

- **[dryRunApi](#dryrunapi)**

- **[genesisBuilder](#genesisbuilder)**

- **[grandpaApi](#grandpaapi)**

- **[inflation](#inflation)**

- **[locationToAccountApi](#locationtoaccountapi)**

- **[metadata](#metadata)**

- **[mmrApi](#mmrapi)**

- **[nominationPoolsApi](#nominationpoolsapi)**

- **[offchainWorkerApi](#offchainworkerapi)**

- **[parachainHost](#parachainhost)**

- **[sessionKeys](#sessionkeys)**

- **[stakingApi](#stakingapi)**

- **[taggedTransactionQueue](#taggedtransactionqueue)**

- **[transactionPaymentApi](#transactionpaymentapi)**

- **[transactionPaymentCallApi](#transactionpaymentcallapi)**

- **[xcmPaymentApi](#xcmpaymentapi)**


___


## accountNonceApi
 
### accountNonce(account: `SpCoreCryptoAccountId32`): `u32`
- **interface**: `api.call.accountNonceApi.accountNonce`
- **runtime**: `accountNonceApi_account_nonce`
- **summary**:  Get current account nonce of given `AccountId`.

___


## authorityDiscoveryApi
 
### authorities(): `Vec<SpAuthorityDiscoveryAppPublic>`
- **interface**: `api.call.authorityDiscoveryApi.authorities`
- **runtime**: `authorityDiscoveryApi_authorities`
- **summary**:  Retrieve authority identifiers of the current and next authority set.

___


## babeApi
 
### configuration(): `SpConsensusBabeBabeConfiguration`
- **interface**: `api.call.babeApi.configuration`
- **runtime**: `babeApi_configuration`
- **summary**:  Return the configuration for BABE.
 
### currentEpoch(): `SpConsensusBabeEpoch`
- **interface**: `api.call.babeApi.currentEpoch`
- **runtime**: `babeApi_current_epoch`
- **summary**:  Returns information regarding the current epoch.
 
### currentEpochStart(): `SpConsensusSlotsSlot`
- **interface**: `api.call.babeApi.currentEpochStart`
- **runtime**: `babeApi_current_epoch_start`
- **summary**:  Returns the slot that started the current epoch.
 
### generateKeyOwnershipProof(slot: `SpConsensusSlotsSlot`, authority_id: `SpConsensusBabeAppPublic`): `Option<Bytes>`
- **interface**: `api.call.babeApi.generateKeyOwnershipProof`
- **runtime**: `babeApi_generate_key_ownership_proof`
- **summary**:  Generates a proof of key ownership for the given authority in the, current epoch. An example usage of this module is coupled with the, session historical module to prove that a given authority key is, tied to a given staking identity during a specific session. Proofs, of key ownership are necessary for submitting equivocation reports., NOTE: even though the API takes a `slot` as parameter the current, implementations ignores this parameter and instead relies on this, method being called at the correct block height, i.e. any point at, which the epoch for the given slot is live on-chain. Future, implementations will instead use indexed data through an offchain, worker, not requiring older states to be available.
 
### nextEpoch(): `SpConsensusBabeEpoch`
- **interface**: `api.call.babeApi.nextEpoch`
- **runtime**: `babeApi_next_epoch`
- **summary**:  Returns information regarding the next epoch (which was already, previously announced).
 
### submitReportEquivocationUnsignedExtrinsic(equivocation_proof: `SpConsensusSlotsEquivocationProof`, key_owner_proof: `SpConsensusBabeOpaqueKeyOwnershipProof`): `Option<Null>`
- **interface**: `api.call.babeApi.submitReportEquivocationUnsignedExtrinsic`
- **runtime**: `babeApi_submit_report_equivocation_unsigned_extrinsic`
- **summary**:  Submits an unsigned extrinsic to report an equivocation. The caller, must provide the equivocation proof and a key ownership proof, (should be obtained using `generate_key_ownership_proof`). The, extrinsic will be unsigned and should only be accepted for local, authorship (not to be broadcast to the network). This method returns, `None` when creation of the extrinsic fails, e.g. if equivocation, reporting is disabled for the given runtime (i.e. this method is, hardcoded to return `None`). Only useful in an offchain context.

___


## beefyApi
 
### beefyGenesis(): `Option<u32>`
- **interface**: `api.call.beefyApi.beefyGenesis`
- **runtime**: `beefyApi_beefy_genesis`
- **summary**:  Return the block number where BEEFY consensus is enabled/started
 
### generateKeyOwnershipProof(set_id: `u64`, authority_id: `SpConsensusBeefyEcdsaCryptoPublic`): `Option<Bytes>`
- **interface**: `api.call.beefyApi.generateKeyOwnershipProof`
- **runtime**: `beefyApi_generate_key_ownership_proof`
- **summary**:  Generates a proof of key ownership for the given authority in the, given set. An example usage of this module is coupled with the, session historical module to prove that a given authority key is, tied to a given staking identity during a specific session. Proofs, of key ownership are necessary for submitting equivocation reports., NOTE: even though the API takes a `set_id` as parameter the current, implementations ignores this parameter and instead relies on this, method being called at the correct block height, i.e. any point at, which the given set id is live on-chain. Future implementations will, instead use indexed data through an offchain worker, not requiring, older states to be available.
 
### submitReportEquivocationUnsignedExtrinsic(equivocation_proof: `SpConsensusBeefyDoubleVotingProof`, key_owner_proof: `SpRuntimeOpaqueValue`): `Option<Null>`
- **interface**: `api.call.beefyApi.submitReportEquivocationUnsignedExtrinsic`
- **runtime**: `beefyApi_submit_report_equivocation_unsigned_extrinsic`
- **summary**:  Submits an unsigned extrinsic to report an equivocation. The caller, must provide the equivocation proof and a key ownership proof, (should be obtained using `generate_key_ownership_proof`). The, extrinsic will be unsigned and should only be accepted for local, authorship (not to be broadcast to the network). This method returns, `None` when creation of the extrinsic fails, e.g. if equivocation, reporting is disabled for the given runtime (i.e. this method is, hardcoded to return `None`). Only useful in an offchain context.
 
### validatorSet(): `Option<SpConsensusBeefyValidatorSet>`
- **interface**: `api.call.beefyApi.validatorSet`
- **runtime**: `beefyApi_validator_set`
- **summary**:  Return the current active BEEFY validator set

___


## beefyMmrApi
 
### authoritySetProof(): `SpConsensusBeefyMmrBeefyAuthoritySet`
- **interface**: `api.call.beefyMmrApi.authoritySetProof`
- **runtime**: `beefyMmrApi_authority_set_proof`
- **summary**:  Return the currently active BEEFY authority set proof.
 
### nextAuthoritySetProof(): `SpConsensusBeefyMmrBeefyAuthoritySet`
- **interface**: `api.call.beefyMmrApi.nextAuthoritySetProof`
- **runtime**: `beefyMmrApi_next_authority_set_proof`
- **summary**:  Return the next/queued BEEFY authority set proof.

___


## blockBuilder
 
### applyExtrinsic(extrinsic: `SpRuntimeUncheckedExtrinsic`): `Result<Result<Null, SpRuntimeDispatchError>, SpRuntimeTransactionValidityTransactionValidityError>`
- **interface**: `api.call.blockBuilder.applyExtrinsic`
- **runtime**: `blockBuilder_apply_extrinsic`
- **summary**:  Apply the given extrinsic.,, Returns an inclusion outcome which specifies if this extrinsic is included in, this block or not.
 
### checkInherents(block: `SpRuntimeBlock`, data: `SpInherentsInherentData`): `SpInherentsCheckInherentsResult`
- **interface**: `api.call.blockBuilder.checkInherents`
- **runtime**: `blockBuilder_check_inherents`
- **summary**:  Check that the inherents are valid. The inherent data will vary from chain to chain.
 
### finalizeBlock(): `SpRuntimeHeader`
- **interface**: `api.call.blockBuilder.finalizeBlock`
- **runtime**: `blockBuilder_finalize_block`
- **summary**:  Finish the current block.
 
### inherentExtrinsics(inherent: `SpInherentsInherentData`): `Vec<Bytes>`
- **interface**: `api.call.blockBuilder.inherentExtrinsics`
- **runtime**: `blockBuilder_inherent_extrinsics`
- **summary**:  Generate inherent extrinsics. The inherent data will vary from chain to chain.

___


## core
 
### executeBlock(block: `SpRuntimeBlock`): `Null`
- **interface**: `api.call.core.executeBlock`
- **runtime**: `core_execute_block`
- **summary**:  Execute the given block.
 
### initializeBlock(header: `SpRuntimeHeader`): `SpRuntimeExtrinsicInclusionMode`
- **interface**: `api.call.core.initializeBlock`
- **runtime**: `core_initialize_block`
- **summary**:  Initialize a block with the given header and return the runtime executive mode.
 
### version(): `SpVersionRuntimeVersion`
- **interface**: `api.call.core.version`
- **runtime**: `core_version`
- **summary**:  Returns the version of the runtime.

___


## dryRunApi
 
### dryRunCall(origin: `StagingKusamaRuntimeOriginCaller`, call: `StagingKusamaRuntimeRuntimeCall`): `Result<XcmRuntimeApisDryRunCallDryRunEffects, XcmRuntimeApisDryRunError>`
- **interface**: `api.call.dryRunApi.dryRunCall`
- **runtime**: `dryRunApi_dry_run_call`
- **summary**:  Dry run call.
 
### dryRunXcm(origin_location: `XcmVersionedLocation`, xcm: `XcmVersionedXcm`): `Result<XcmRuntimeApisDryRunXcmDryRunEffects, XcmRuntimeApisDryRunError>`
- **interface**: `api.call.dryRunApi.dryRunXcm`
- **runtime**: `dryRunApi_dry_run_xcm`
- **summary**:  Dry run XCM program

___


## genesisBuilder
 
### buildState(json: `Bytes`): `Result<Null, Text>`
- **interface**: `api.call.genesisBuilder.buildState`
- **runtime**: `genesisBuilder_build_state`
- **summary**:  Build `RuntimeGenesisConfig` from a JSON blob not using any defaults and store it in the, storage.,, In the case of a FRAME-based runtime, this function deserializes the full `RuntimeGenesisConfig` from the given JSON blob and, puts it into the storage. If the provided JSON blob is incorrect or incomplete or the, deserialization fails, an error is returned.,, Please note that provided JSON blob must contain all `RuntimeGenesisConfig` fields, no, defaults will be used.
 
### getPreset(id: `Option<Text>`): `Option<Bytes>`
- **interface**: `api.call.genesisBuilder.getPreset`
- **runtime**: `genesisBuilder_get_preset`
- **summary**:  Returns a JSON blob representation of the built-in `RuntimeGenesisConfig` identified by, `id`.,, If `id` is `None` the function returns JSON blob representation of the default, `RuntimeGenesisConfig` struct of the runtime. Implementation must provide default, `RuntimeGenesisConfig`.,, Otherwise function returns a JSON representation of the built-in, named, `RuntimeGenesisConfig` preset identified by `id`, or `None` if such preset does not, exists. Returned `Vec<u8>` contains bytes of JSON blob (patch) which comprises a list of, (potentially nested) key-value pairs that are intended for customizing the default, runtime genesis config. The patch shall be merged (rfc7386) with the JSON representation, of the default `RuntimeGenesisConfig` to create a comprehensive genesis config that can, be used in `build_state` method.
 
### presetNames(): `Vec<Text>`
- **interface**: `api.call.genesisBuilder.presetNames`
- **runtime**: `genesisBuilder_preset_names`
- **summary**:  Returns a list of identifiers for available builtin `RuntimeGenesisConfig` presets.,, The presets from the list can be queried with [`GenesisBuilder::get_preset`] method. If, no named presets are provided by the runtime the list is empty.

___


## grandpaApi
 
### currentSetId(): `u64`
- **interface**: `api.call.grandpaApi.currentSetId`
- **runtime**: `grandpaApi_current_set_id`
- **summary**:  Get current GRANDPA authority set id.
 
### generateKeyOwnershipProof(set_id: `u64`, authority_id: `SpConsensusGrandpaAppPublic`): `Option<Bytes>`
- **interface**: `api.call.grandpaApi.generateKeyOwnershipProof`
- **runtime**: `grandpaApi_generate_key_ownership_proof`
- **summary**:  Generates a proof of key ownership for the given authority in the, given set. An example usage of this module is coupled with the, session historical module to prove that a given authority key is, tied to a given staking identity during a specific session. Proofs, of key ownership are necessary for submitting equivocation reports., NOTE: even though the API takes a `set_id` as parameter the current, implementations ignore this parameter and instead rely on this, method being called at the correct block height, i.e. any point at, which the given set id is live on-chain. Future implementations will, instead use indexed data through an offchain worker, not requiring, older states to be available.
 
### grandpaAuthorities(): `Vec<(SpConsensusGrandpaAppPublic,u64)>`
- **interface**: `api.call.grandpaApi.grandpaAuthorities`
- **runtime**: `grandpaApi_grandpa_authorities`
- **summary**:  Get the current GRANDPA authorities and weights. This should not change except, for when changes are scheduled and the corresponding delay has passed.,, When called at block B, it will return the set of authorities that should be, used to finalize descendants of this block (B+1, B+2, ...). The block B itself, is finalized by the authorities from block B-1.
 
### submitReportEquivocationUnsignedExtrinsic(equivocation_proof: `SpConsensusGrandpaEquivocationProof`, key_owner_proof: `SpRuntimeOpaqueValue`): `Option<Null>`
- **interface**: `api.call.grandpaApi.submitReportEquivocationUnsignedExtrinsic`
- **runtime**: `grandpaApi_submit_report_equivocation_unsigned_extrinsic`
- **summary**:  Submits an unsigned extrinsic to report an equivocation. The caller, must provide the equivocation proof and a key ownership proof, (should be obtained using `generate_key_ownership_proof`). The, extrinsic will be unsigned and should only be accepted for local, authorship (not to be broadcast to the network). This method returns, `None` when creation of the extrinsic fails, e.g. if equivocation, reporting is disabled for the given runtime (i.e. this method is, hardcoded to return `None`). Only useful in an offchain context.

___


## inflation
 
### experimentalInflationPredictionInfo(): `RelayCommonApisInflationInfo`
- **interface**: `api.call.inflation.experimentalInflationPredictionInfo`
- **runtime**: `inflation_experimental_inflation_prediction_info`
- **summary**:  Return the current estimates of the inflation amount.,, This is marked as experimental in light of RFC#89. Nonetheless, its usage is highly, recommended over trying to read-storage, or re-create the onchain logic.

___


## locationToAccountApi
 
### convertLocation(location: `XcmVersionedLocation`): `Result<AccountId32, XcmRuntimeApisConversionsError>`
- **interface**: `api.call.locationToAccountApi.convertLocation`
- **runtime**: `locationToAccountApi_convert_location`
- **summary**:  Converts `Location` to `AccountId`.

___


## metadata
 
### metadata(): `SpCoreOpaqueMetadata`
- **interface**: `api.call.metadata.metadata`
- **runtime**: `metadata_metadata`
- **summary**:  Returns the metadata of a runtime.
 
### metadataAtVersion(version: `u32`): `Option<OpaqueMetadata>`
- **interface**: `api.call.metadata.metadataAtVersion`
- **runtime**: `metadata_metadata_at_version`
- **summary**:  Returns the metadata at a given version.,, If the given `version` isn't supported, this will return `None`., Use [`Self::metadata_versions`] to find out about supported metadata version of the runtime.
 
### metadataVersions(): `Vec<u32>`
- **interface**: `api.call.metadata.metadataVersions`
- **runtime**: `metadata_metadata_versions`
- **summary**:  Returns the supported metadata versions.,, This can be used to call `metadata_at_version`.

___


## mmrApi
 
### generateProof(block_numbers: `Vec<u32>`, best_known_block_number: `Option<u32>`): `Result<(Vec<Bytes>,SpMmrPrimitivesLeafProof), SpMmrPrimitivesError>`
- **interface**: `api.call.mmrApi.generateProof`
- **runtime**: `mmrApi_generate_proof`
- **summary**:  Generate MMR proof for a series of block numbers. If `best_known_block_number = Some(n)`,, use historical MMR state at given block height `n`. Else, use current MMR state.
 
### mmrLeafCount(): `Result<u64, SpMmrPrimitivesError>`
- **interface**: `api.call.mmrApi.mmrLeafCount`
- **runtime**: `mmrApi_mmr_leaf_count`
- **summary**:  Return the number of MMR blocks in the chain.
 
### mmrRoot(): `Result<H256, SpMmrPrimitivesError>`
- **interface**: `api.call.mmrApi.mmrRoot`
- **runtime**: `mmrApi_mmr_root`
- **summary**:  Return the on-chain MMR root hash.
 
### verifyProof(leaves: `Vec<Bytes>`, proof: `SpMmrPrimitivesLeafProof`): `Result<Null, SpMmrPrimitivesError>`
- **interface**: `api.call.mmrApi.verifyProof`
- **runtime**: `mmrApi_verify_proof`
- **summary**:  Verify MMR proof against on-chain MMR for a batch of leaves.,, Note this function will use on-chain MMR root hash and check if the proof matches the hash., Note, the leaves should be sorted such that corresponding leaves and leaf indices have the, same position in both the `leaves` vector and the `leaf_indices` vector contained in the [LeafProof]
 
### verifyProofStateless(root: `PrimitiveTypesH256`, leaves: `Vec<Bytes>`, proof: `SpMmrPrimitivesLeafProof`): `Result<Null, SpMmrPrimitivesError>`
- **interface**: `api.call.mmrApi.verifyProofStateless`
- **runtime**: `mmrApi_verify_proof_stateless`
- **summary**:  Verify MMR proof against given root hash for a batch of leaves.,, Note this function does not require any on-chain storage - the, proof is verified against given MMR root hash.,, Note, the leaves should be sorted such that corresponding leaves and leaf indices have the, same position in both the `leaves` vector and the `leaf_indices` vector contained in the [LeafProof]

___


## nominationPoolsApi
 
### balanceToPoints(pool_id: `u32`, new_funds: `u128`): `u128`
- **interface**: `api.call.nominationPoolsApi.balanceToPoints`
- **runtime**: `nominationPoolsApi_balance_to_points`
- **summary**:  Returns the equivalent points of `new_funds` for a given pool.
 
### memberNeedsDelegateMigration(member: `SpCoreCryptoAccountId32`): `bool`
- **interface**: `api.call.nominationPoolsApi.memberNeedsDelegateMigration`
- **runtime**: `nominationPoolsApi_member_needs_delegate_migration`
- **summary**:  Returns true if the delegated funds of the pool `member` needs migration.,, Once a pool has successfully migrated to the strategy, [`DelegateStake`](pallet_nomination_pools::adapter::DelegateStake), the funds of the, member can be migrated from pool account to the member's account. Use, [`migrate_delegation`](pallet_nomination_pools::Call::migrate_delegation), to migrate the funds of the pool member.
 
### memberPendingSlash(member: `SpCoreCryptoAccountId32`): `u128`
- **interface**: `api.call.nominationPoolsApi.memberPendingSlash`
- **runtime**: `nominationPoolsApi_member_pending_slash`
- **summary**:  Returns the pending slash for a given pool member.
 
### pendingRewards(who: `SpCoreCryptoAccountId32`): `u128`
- **interface**: `api.call.nominationPoolsApi.pendingRewards`
- **runtime**: `nominationPoolsApi_pending_rewards`
- **summary**:  Returns the pending rewards for the member that the AccountId was given for.
 
### pointsToBalance(pool_id: `u32`, points: `u128`): `u128`
- **interface**: `api.call.nominationPoolsApi.pointsToBalance`
- **runtime**: `nominationPoolsApi_points_to_balance`
- **summary**:  Returns the equivalent balance of `points` for a given pool.
 
### poolNeedsDelegateMigration(pool_id: `u32`): `bool`
- **interface**: `api.call.nominationPoolsApi.poolNeedsDelegateMigration`
- **runtime**: `nominationPoolsApi_pool_needs_delegate_migration`
- **summary**:  Returns true if the pool with `pool_id` needs migration.,, This can happen when the `pallet-nomination-pools` has switched to using strategy, [`DelegateStake`](pallet_nomination_pools::adapter::DelegateStake) but the pool, still has funds that were staked using the older strategy, [TransferStake](pallet_nomination_pools::adapter::TransferStake). Use, [`migrate_pool_to_delegate_stake`](pallet_nomination_pools::Call::migrate_pool_to_delegate_stake), to migrate the pool.
 
### poolPendingSlash(pool_id: `u32`): `u128`
- **interface**: `api.call.nominationPoolsApi.poolPendingSlash`
- **runtime**: `nominationPoolsApi_pool_pending_slash`
- **summary**:  Returns the pending slash for a given pool.

___


## offchainWorkerApi
 
### offchainWorker(header: `SpRuntimeHeader`): `Null`
- **interface**: `api.call.offchainWorkerApi.offchainWorker`
- **runtime**: `offchainWorkerApi_offchain_worker`
- **summary**:  Starts the off-chain task for given block header.

___


## parachainHost
 
### approvalVotingParams(): `PolkadotPrimitivesV7ApprovalVotingParams`
- **interface**: `api.call.parachainHost.approvalVotingParams`
- **runtime**: `parachainHost_approval_voting_params`
- **summary**:  Approval voting configuration parameters
 
### assumedValidationData(para_id: `PolkadotParachainPrimitivesPrimitivesId`, expected_persisted_validation_data_hash: `PrimitiveTypesH256`): `Option<(PolkadotPrimitivesV7PersistedValidationData,H256)>`
- **interface**: `api.call.parachainHost.assumedValidationData`
- **runtime**: `parachainHost_assumed_validation_data`
- **summary**:  Returns the persisted validation data for the given `ParaId` along with the corresponding, validation code hash. Instead of accepting assumption about the para, matches the validation, data hash against an expected one and yields `None` if they're not equal.
 
### asyncBackingParams(): `PolkadotPrimitivesV7AsyncBackingAsyncBackingParams`
- **interface**: `api.call.parachainHost.asyncBackingParams`
- **runtime**: `parachainHost_async_backing_params`
- **summary**:  Returns candidate's acceptance limitations for asynchronous backing for a relay parent.
 
### availabilityCores(): `Vec<PolkadotPrimitivesV7CoreState>`
- **interface**: `api.call.parachainHost.availabilityCores`
- **runtime**: `parachainHost_availability_cores`
- **summary**:  Yields information on all availability cores as relevant to the child block., Cores are either free or occupied. Free cores can have paras assigned to them.
 
### candidateEvents(): `Vec<PolkadotPrimitivesV7CandidateEvent>`
- **interface**: `api.call.parachainHost.candidateEvents`
- **runtime**: `parachainHost_candidate_events`
- **summary**:  Get a vector of events concerning candidates that occurred within a block.
 
### candidatePendingAvailability(para_id: `PolkadotParachainPrimitivesPrimitivesId`): `Option<PolkadotPrimitivesV7CommittedCandidateReceipt>`
- **interface**: `api.call.parachainHost.candidatePendingAvailability`
- **runtime**: `parachainHost_candidate_pending_availability`
- **summary**:  Get the receipt of a candidate pending availability. This returns `Some` for any paras, assigned to occupied cores in `availability_cores` and `None` otherwise.
 
### candidatesPendingAvailability(para_id: `PolkadotParachainPrimitivesPrimitivesId`): `Vec<PolkadotPrimitivesV7CommittedCandidateReceipt>`
- **interface**: `api.call.parachainHost.candidatesPendingAvailability`
- **runtime**: `parachainHost_candidates_pending_availability`
- **summary**:  Elastic scaling support
 
### checkValidationOutputs(para_id: `PolkadotParachainPrimitivesPrimitivesId`, outputs: `PolkadotPrimitivesV7CandidateCommitments`): `bool`
- **interface**: `api.call.parachainHost.checkValidationOutputs`
- **runtime**: `parachainHost_check_validation_outputs`
- **summary**:  Checks if the given validation outputs pass the acceptance criteria.
 
### claimQueue(): `BTreeMap<u32, Vec<u32>>`
- **interface**: `api.call.parachainHost.claimQueue`
- **runtime**: `parachainHost_claim_queue`
- **summary**:  Claim queue
 
### disabledValidators(): `Vec<u32>`
- **interface**: `api.call.parachainHost.disabledValidators`
- **runtime**: `parachainHost_disabled_validators`
- **summary**:  Returns a list of all disabled validators at the given block.
 
### disputes(): `Vec<(u32,H256,PolkadotPrimitivesV7DisputeState)>`
- **interface**: `api.call.parachainHost.disputes`
- **runtime**: `parachainHost_disputes`
- **summary**:  Returns all onchain disputes.
 
### dmqContents(recipient: `PolkadotParachainPrimitivesPrimitivesId`): `Vec<PolkadotCorePrimitivesInboundDownwardMessage>`
- **interface**: `api.call.parachainHost.dmqContents`
- **runtime**: `parachainHost_dmq_contents`
- **summary**:  Get all the pending inbound messages in the downward message queue for a para.
 
### inboundHrmpChannelsContents(recipient: `PolkadotParachainPrimitivesPrimitivesId`): `BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>`
- **interface**: `api.call.parachainHost.inboundHrmpChannelsContents`
- **runtime**: `parachainHost_inbound_hrmp_channels_contents`
- **summary**:  Get the contents of all channels addressed to the given recipient. Channels that have no, messages in them are also included.
 
### keyOwnershipProof(validator_id: `PolkadotPrimitivesV7ValidatorAppPublic`): `Option<Bytes>`
- **interface**: `api.call.parachainHost.keyOwnershipProof`
- **runtime**: `parachainHost_key_ownership_proof`
- **summary**:  Returns a merkle proof of a validator session key., NOTE: This function is only available since parachain host version 5.
 
### minimumBackingVotes(): `u32`
- **interface**: `api.call.parachainHost.minimumBackingVotes`
- **runtime**: `parachainHost_minimum_backing_votes`
- **summary**:  Get the minimum number of backing votes for a parachain candidate., This is a staging method! Do not use on production runtimes!
 
### nodeFeatures(): `BitVec`
- **interface**: `api.call.parachainHost.nodeFeatures`
- **runtime**: `parachainHost_node_features`
- **summary**:  Get node features., This is a staging method! Do not use on production runtimes!
 
### onChainVotes(): `Option<PolkadotPrimitivesV7ScrapedOnChainVotes>`
- **interface**: `api.call.parachainHost.onChainVotes`
- **runtime**: `parachainHost_on_chain_votes`
- **summary**:  Scrape dispute relevant from on-chain, backing votes and resolved disputes.
 
### paraBackingState(_: `PolkadotParachainPrimitivesPrimitivesId`): `Option<PolkadotPrimitivesV7AsyncBackingBackingState>`
- **interface**: `api.call.parachainHost.paraBackingState`
- **runtime**: `parachainHost_para_backing_state`
- **summary**:  Returns the state of parachain backing for a given para.
 
### persistedValidationData(para_id: `PolkadotParachainPrimitivesPrimitivesId`, assumption: `PolkadotPrimitivesV7OccupiedCoreAssumption`): `Option<PolkadotPrimitivesV7PersistedValidationData>`
- **interface**: `api.call.parachainHost.persistedValidationData`
- **runtime**: `parachainHost_persisted_validation_data`
- **summary**:  Yields the persisted validation data for the given `ParaId` along with an assumption that, should be used if the para currently occupies a core.,, Returns `None` if either the para is not registered or the assumption is `Freed`, and the para already occupies a core.
 
### pvfsRequirePrecheck(): `Vec<H256>`
- **interface**: `api.call.parachainHost.pvfsRequirePrecheck`
- **runtime**: `parachainHost_pvfs_require_precheck`
- **summary**:  Returns code hashes of PVFs that require pre-checking by validators in the active set.,, NOTE: This function is only available since parachain host version 2.
 
### sessionExecutorParams(session_index: `u32`): `Option<PolkadotPrimitivesV7ExecutorParams>`
- **interface**: `api.call.parachainHost.sessionExecutorParams`
- **runtime**: `parachainHost_session_executor_params`
- **summary**:  Returns execution parameters for the session.
 
### sessionIndexForChild(): `u32`
- **interface**: `api.call.parachainHost.sessionIndexForChild`
- **runtime**: `parachainHost_session_index_for_child`
- **summary**:  Returns the session index expected at a child of the block.,, This can be used to instantiate a `SigningContext`.
 
### sessionInfo(index: `u32`): `Option<PolkadotPrimitivesV7SessionInfo>`
- **interface**: `api.call.parachainHost.sessionInfo`
- **runtime**: `parachainHost_session_info`
- **summary**:  Get the session info for the given session, if stored.,, NOTE: This function is only available since parachain host version 2.
 
### submitPvfCheckStatement(stmt: `PolkadotPrimitivesV7PvfCheckStatement`, signature: `PolkadotPrimitivesV7ValidatorAppSignature`): `Null`
- **interface**: `api.call.parachainHost.submitPvfCheckStatement`
- **runtime**: `parachainHost_submit_pvf_check_statement`
- **summary**:  Submits a PVF pre-checking statement into the transaction pool.,, NOTE: This function is only available since parachain host version 2.
 
### submitReportDisputeLost(dispute_proof: `PolkadotPrimitivesV7SlashingDisputeProof`, key_ownership_proof: `PolkadotPrimitivesV7SlashingOpaqueKeyOwnershipProof`): `Option<Null>`
- **interface**: `api.call.parachainHost.submitReportDisputeLost`
- **runtime**: `parachainHost_submit_report_dispute_lost`
- **summary**:  Submit an unsigned extrinsic to slash validators who lost a dispute about, a candidate of a past session., NOTE: This function is only available since parachain host version 5.
 
### unappliedSlashes(): `Vec<(u32,H256,PolkadotPrimitivesV7SlashingPendingSlashes)>`
- **interface**: `api.call.parachainHost.unappliedSlashes`
- **runtime**: `parachainHost_unapplied_slashes`
- **summary**:  Returns a list of validators that lost a past session dispute and need to be slashed., NOTE: This function is only available since parachain host version 5.
 
### validationCode(para_id: `PolkadotParachainPrimitivesPrimitivesId`, assumption: `PolkadotPrimitivesV7OccupiedCoreAssumption`): `Option<Bytes>`
- **interface**: `api.call.parachainHost.validationCode`
- **runtime**: `parachainHost_validation_code`
- **summary**:  Fetch the validation code used by a para, making the given `OccupiedCoreAssumption`.,, Returns `None` if either the para is not registered or the assumption is `Freed`, and the para already occupies a core.
 
### validationCodeByHash(hash: `PolkadotParachainPrimitivesPrimitivesValidationCodeHash`): `Option<Bytes>`
- **interface**: `api.call.parachainHost.validationCodeByHash`
- **runtime**: `parachainHost_validation_code_by_hash`
- **summary**:  Get the validation code from its hash.
 
### validationCodeHash(para_id: `PolkadotParachainPrimitivesPrimitivesId`, assumption: `PolkadotPrimitivesV7OccupiedCoreAssumption`): `Option<H256>`
- **interface**: `api.call.parachainHost.validationCodeHash`
- **runtime**: `parachainHost_validation_code_hash`
- **summary**:  Fetch the hash of the validation code used by a para, making the given `OccupiedCoreAssumption`.,, NOTE: This function is only available since parachain host version 2.
 
### validatorGroups(): `(Vec<Vec<u32>>,PolkadotPrimitivesV7GroupRotationInfo)`
- **interface**: `api.call.parachainHost.validatorGroups`
- **runtime**: `parachainHost_validator_groups`
- **summary**:  Returns the validator groups and rotation info localized based on the hypothetical child,  of a block whose state  this is invoked on. Note that `now` in the `GroupRotationInfo`, should be the successor of the number of the block.
 
### validators(): `Vec<PolkadotPrimitivesV7ValidatorAppPublic>`
- **interface**: `api.call.parachainHost.validators`
- **runtime**: `parachainHost_validators`
- **summary**:  Get the current validators.

___


## sessionKeys
 
### decodeSessionKeys(encoded: `Bytes`): `Option<Vec<(Bytes,SpCoreCryptoKeyTypeId)>>`
- **interface**: `api.call.sessionKeys.decodeSessionKeys`
- **runtime**: `sessionKeys_decode_session_keys`
- **summary**:  Decode the given public session keys.,, Returns the list of public raw public keys + key type.
 
### generateSessionKeys(seed: `Option<Bytes>`): `Bytes`
- **interface**: `api.call.sessionKeys.generateSessionKeys`
- **runtime**: `sessionKeys_generate_session_keys`
- **summary**:  Generate a set of session keys with optionally using the given seed., The keys should be stored within the keystore exposed via runtime, externalities.,, The seed needs to be a valid `utf8` string.,, Returns the concatenated SCALE encoded public keys.

___


## stakingApi
 
### erasStakersPageCount(era: `u32`, account: `SpCoreCryptoAccountId32`): `u32`
- **interface**: `api.call.stakingApi.erasStakersPageCount`
- **runtime**: `stakingApi_eras_stakers_page_count`
- **summary**:  Returns the page count of exposures for a validator `account` in a given era.
 
### nominationsQuota(balance: `u128`): `u32`
- **interface**: `api.call.stakingApi.nominationsQuota`
- **runtime**: `stakingApi_nominations_quota`
- **summary**:  Returns the nominations quota for a nominator with a given balance.
 
### pendingRewards(era: `u32`, account: `SpCoreCryptoAccountId32`): `bool`
- **interface**: `api.call.stakingApi.pendingRewards`
- **runtime**: `stakingApi_pending_rewards`
- **summary**:  Returns true if validator `account` has pages to be claimed for the given era.

___


## taggedTransactionQueue
 
### validateTransaction(source: `SpRuntimeTransactionValidityTransactionSource`, tx: `SpRuntimeUncheckedExtrinsic`, block_hash: `PrimitiveTypesH256`): `Result<SpRuntimeTransactionValidityValidTransaction, SpRuntimeTransactionValidityTransactionValidityError>`
- **interface**: `api.call.taggedTransactionQueue.validateTransaction`
- **runtime**: `taggedTransactionQueue_validate_transaction`
- **summary**:  Validate the transaction.,, This method is invoked by the transaction pool to learn details about given transaction., The implementation should make sure to verify the correctness of the transaction, against current state. The given `block_hash` corresponds to the hash of the block, that is used as current state.,, Note that this call may be performed by the pool multiple times and transactions, might be verified in any possible order.

___


## transactionPaymentApi
 
### queryFeeDetails(uxt: `SpRuntimeUncheckedExtrinsic`, len: `u32`): `PalletTransactionPaymentFeeDetails`
- **interface**: `api.call.transactionPaymentApi.queryFeeDetails`
- **runtime**: `transactionPaymentApi_query_fee_details`
- **summary**: 
 
### queryInfo(uxt: `SpRuntimeUncheckedExtrinsic`, len: `u32`): `PalletTransactionPaymentRuntimeDispatchInfo`
- **interface**: `api.call.transactionPaymentApi.queryInfo`
- **runtime**: `transactionPaymentApi_query_info`
- **summary**: 
 
### queryLengthToFee(length: `u32`): `u128`
- **interface**: `api.call.transactionPaymentApi.queryLengthToFee`
- **runtime**: `transactionPaymentApi_query_length_to_fee`
- **summary**: 
 
### queryWeightToFee(weight: `SpWeightsWeightV2Weight`): `u128`
- **interface**: `api.call.transactionPaymentApi.queryWeightToFee`
- **runtime**: `transactionPaymentApi_query_weight_to_fee`
- **summary**: 

___


## transactionPaymentCallApi
 
### queryCallFeeDetails(call: `StagingKusamaRuntimeRuntimeCall`, len: `u32`): `PalletTransactionPaymentFeeDetails`
- **interface**: `api.call.transactionPaymentCallApi.queryCallFeeDetails`
- **runtime**: `transactionPaymentCallApi_query_call_fee_details`
- **summary**:  Query fee details of a given encoded `Call`.
 
### queryCallInfo(call: `StagingKusamaRuntimeRuntimeCall`, len: `u32`): `PalletTransactionPaymentRuntimeDispatchInfo`
- **interface**: `api.call.transactionPaymentCallApi.queryCallInfo`
- **runtime**: `transactionPaymentCallApi_query_call_info`
- **summary**:  Query information of a dispatch class, weight, and fee of a given encoded `Call`.
 
### queryLengthToFee(length: `u32`): `u128`
- **interface**: `api.call.transactionPaymentCallApi.queryLengthToFee`
- **runtime**: `transactionPaymentCallApi_query_length_to_fee`
- **summary**:  Query the output of the current `LengthToFee` given some input.
 
### queryWeightToFee(weight: `SpWeightsWeightV2Weight`): `u128`
- **interface**: `api.call.transactionPaymentCallApi.queryWeightToFee`
- **runtime**: `transactionPaymentCallApi_query_weight_to_fee`
- **summary**:  Query the output of the current `WeightToFee` given some input.

___


## xcmPaymentApi
 
### queryAcceptablePaymentAssets(xcm_version: `u32`): `Result<Vec<XcmVersionedAssetId>, XcmRuntimeApisFeesError>`
- **interface**: `api.call.xcmPaymentApi.queryAcceptablePaymentAssets`
- **runtime**: `xcmPaymentApi_query_acceptable_payment_assets`
- **summary**:  Returns a list of acceptable payment assets.,, # Arguments,, * `xcm_version`: Version.
 
### queryDeliveryFees(destination: `XcmVersionedLocation`, message: `XcmVersionedXcm`): `Result<XcmVersionedAssets, XcmRuntimeApisFeesError>`
- **interface**: `api.call.xcmPaymentApi.queryDeliveryFees`
- **runtime**: `xcmPaymentApi_query_delivery_fees`
- **summary**:  Get delivery fees for sending a specific `message` to a `destination`., These always come in a specific asset, defined by the chain.,, # Arguments, * `message`: The message that'll be sent, necessary because most delivery fees are based on the,   size of the message., * `destination`: The destination to send the message to. Different destinations may use,   different senders that charge different fees.
 
### queryWeightToAssetFee(weight: `SpWeightsWeightV2Weight`, asset: `XcmVersionedAssetId`): `Result<u128, XcmRuntimeApisFeesError>`
- **interface**: `api.call.xcmPaymentApi.queryWeightToAssetFee`
- **runtime**: `xcmPaymentApi_query_weight_to_asset_fee`
- **summary**:  Converts a weight into a fee for the specified `AssetId`.,, # Arguments,, * `weight`: convertible `Weight`., * `asset`: `VersionedAssetId`.
 
### queryXcmWeight(message: `XcmVersionedXcm`): `Result<SpWeightsWeightV2Weight, XcmRuntimeApisFeesError>`
- **interface**: `api.call.xcmPaymentApi.queryXcmWeight`
- **runtime**: `xcmPaymentApi_query_xcm_weight`
- **summary**:  Returns a weight needed to execute a XCM.,, # Arguments,, * `message`: `VersionedXcm`.
