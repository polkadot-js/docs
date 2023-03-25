---
title: Runtime
---

The following section contains known runtime calls that may be available on specific runtimes (depending on configuration and available pallets). These call directly into the WASM runtime for queries and operations.

- **[accountNonceApi](#accountnonceapi)**

- **[authorityDiscoveryApi](#authoritydiscoveryapi)**

- **[babeApi](#babeapi)**

- **[beefyApi](#beefyapi)**

- **[blockBuilder](#blockbuilder)**

- **[core](#core)**

- **[grandpaApi](#grandpaapi)**

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


___


## AccountNonceApi
 
### accountNonce(accountId: `AccountId`): `Index`
- **interface**: `api.call.accountNonceApi.accountNonce`
- **runtime**: `AccountNonceApi_account_nonce`
- **summary**: The API to query account nonce (aka transaction index)

___


## AuthorityDiscoveryApi
 
### authorities(): `Vec<AuthorityId>`
- **interface**: `api.call.authorityDiscoveryApi.authorities`
- **runtime**: `AuthorityDiscoveryApi_authorities`
- **summary**: Retrieve authority identifiers of the current and next authority set.

___


## BabeApi
 
### configuration(): `BabeGenesisConfiguration`
- **interface**: `api.call.babeApi.configuration`
- **runtime**: `BabeApi_configuration`
- **summary**: Return the genesis configuration for BABE. The configuration is only read on genesis.
 
### currentEpoch(): `Epoch`
- **interface**: `api.call.babeApi.currentEpoch`
- **runtime**: `BabeApi_current_epoch`
- **summary**: Returns information regarding the current epoch.
 
### currentEpochStart(): `Slot`
- **interface**: `api.call.babeApi.currentEpochStart`
- **runtime**: `BabeApi_current_epoch_start`
- **summary**: Returns the slot that started the current epoch.
 
### generateKeyOwnershipProof(slot: `Slot`, authorityId: `AuthorityId`): `Option<OpaqueKeyOwnershipProof>`
- **interface**: `api.call.babeApi.generateKeyOwnershipProof`
- **runtime**: `BabeApi_generate_key_ownership_proof`
- **summary**: Generates a proof of key ownership for the given authority in the current epoch.
 
### nextEpoch(): `Epoch`
- **interface**: `api.call.babeApi.nextEpoch`
- **runtime**: `BabeApi_next_epoch`
- **summary**: Returns information regarding the next epoch (which was already previously announced).
 
### submitReportEquivocationUnsignedExtrinsic(equivocationProof: `BabeEquivocationProof`, keyOwnerProof: `OpaqueKeyOwnershipProof`): `Option<Null>`
- **interface**: `api.call.babeApi.submitReportEquivocationUnsignedExtrinsic`
- **runtime**: `BabeApi_submit_report_equivocation_unsigned_extrinsic`
- **summary**: Submits an unsigned extrinsic to report an equivocation.

___


## BeefyApi
 
### beefyGenesis(): `Option<BlockNumber>`
- **interface**: `api.call.beefyApi.beefyGenesis`
- **runtime**: `BeefyApi_beefy_genesis`
- **summary**: Return the block number where BEEFY consensus is enabled/started
 
### generateKeyOwnershipProof(setId: `ValidatorSetId`, authorityId: `AuthorityId`): `Option<OpaqueKeyOwnershipProof>`
- **interface**: `api.call.beefyApi.generateKeyOwnershipProof`
- **runtime**: `BeefyApi_generate_key_ownership_proof`
- **summary**: Generates a proof of key ownership for the given authority in the given set.
 
### submitReportEquivocationUnsignedExtrinsic(equivocationProof: `BeefyEquivocationProof`, keyOwnerProof: `OpaqueKeyOwnershipProof`): `Option<Null>`
- **interface**: `api.call.beefyApi.submitReportEquivocationUnsignedExtrinsic`
- **runtime**: `BeefyApi_submit_report_equivocation_unsigned_extrinsic`
- **summary**: Submits an unsigned extrinsic to report an equivocation.
 
### validatorSet(): `Option<ValidatorSet>`
- **interface**: `api.call.beefyApi.validatorSet`
- **runtime**: `BeefyApi_validator_set`
- **summary**: Return the current active BEEFY validator set

___


## BlockBuilder
 
### applyExtrinsic(extrinsic: `Extrinsic`): `ApplyExtrinsicResult`
- **interface**: `api.call.blockBuilder.applyExtrinsic`
- **runtime**: `BlockBuilder_apply_extrinsic`
- **summary**: Apply the given extrinsic.
 
### checkInherents(block: `Block`, data: `InherentData`): `CheckInherentsResult`
- **interface**: `api.call.blockBuilder.checkInherents`
- **runtime**: `BlockBuilder_check_inherents`
- **summary**: Check that the inherents are valid.
 
### finalizeBlock(): `Header`
- **interface**: `api.call.blockBuilder.finalizeBlock`
- **runtime**: `BlockBuilder_finalize_block`
- **summary**: Finish the current block.
 
### inherentExtrinsics(inherent: `InherentData`): `Vec<Extrinsic>`
- **interface**: `api.call.blockBuilder.inherentExtrinsics`
- **runtime**: `BlockBuilder_inherent_extrinsics`
- **summary**: Generate inherent extrinsics.

___


## Core
 
### executeBlock(block: `Block`): `Null`
- **interface**: `api.call.core.executeBlock`
- **runtime**: `Core_execute_block`
- **summary**: Execute the given block.
 
### initializeBlock(header: `Header`): `Null`
- **interface**: `api.call.core.initializeBlock`
- **runtime**: `Core_initialize_block`
- **summary**: Initialize a block with the given header.
 
### version(): `RuntimeVersion`
- **interface**: `api.call.core.version`
- **runtime**: `Core_version`
- **summary**: Returns the version of the runtime.

___


## GrandpaApi
 
### currentSetId(): `SetId`
- **interface**: `api.call.grandpaApi.currentSetId`
- **runtime**: `GrandpaApi_current_set_id`
- **summary**: Get current GRANDPA authority set id.
 
### generateKeyOwnershipProof(setId: `SetId`, authorityId: `AuthorityId`): `Option<OpaqueKeyOwnershipProof>`
- **interface**: `api.call.grandpaApi.generateKeyOwnershipProof`
- **runtime**: `GrandpaApi_generate_key_ownership_proof`
- **summary**: Generates a proof of key ownership for the given authority in the given set.
 
### grandpaAuthorities(): `AuthorityList`
- **interface**: `api.call.grandpaApi.grandpaAuthorities`
- **runtime**: `GrandpaApi_grandpa_authorities`
- **summary**: Get the current GRANDPA authorities and weights. This should not change except for when changes are scheduled and the corresponding delay has passed.
 
### submitReportEquivocationUnsignedExtrinsic(equivocationProof: `GrandpaEquivocationProof`, keyOwnerProof: `OpaqueKeyOwnershipProof`): `Option<Null>`
- **interface**: `api.call.grandpaApi.submitReportEquivocationUnsignedExtrinsic`
- **runtime**: `GrandpaApi_submit_report_equivocation_unsigned_extrinsic`
- **summary**: Submits an unsigned extrinsic to report an equivocation.

___


## Metadata
 
### metadata(): `OpaqueMetadata`
- **interface**: `api.call.metadata.metadata`
- **runtime**: `Metadata_metadata`
- **summary**: Returns the metadata of a runtime
 
### metadataAtVersion(version: `u32`): `Option<OpaqueMetadata>`
- **interface**: `api.call.metadata.metadataAtVersion`
- **runtime**: `Metadata_metadata_at_version`
- **summary**: Returns the metadata at a given version.
 
### metadataVersions(): `Vec<u32>`
- **interface**: `api.call.metadata.metadataVersions`
- **runtime**: `Metadata_metadata_versions`
- **summary**: Returns the supported metadata versions.

___


## MmrApi
 
### generateProof(blockNumbers: `Vec<BlockNumber>`, bestKnownBlockNumber: `Option<BlockNumber>`): `Result<(Vec<MmrEncodableOpaqueLeaf>, MmrBatchProof), MmrError>`
- **interface**: `api.call.mmrApi.generateProof`
- **runtime**: `MmrApi_generate_proof`
- **summary**: Generate MMR proof for the given block numbers.
 
### root(): `Result<Hash, MmrError>`
- **interface**: `api.call.mmrApi.root`
- **runtime**: `MmrApi_root`
- **summary**: Return the on-chain MMR root hash.
 
### verifyProof(leaves: `Vec<MmrEncodableOpaqueLeaf>`, proof: `MmrBatchProof`): `Result<(), MmrError>`
- **interface**: `api.call.mmrApi.verifyProof`
- **runtime**: `MmrApi_verify_proof`
- **summary**: Verify MMR proof against on-chain MMR.
 
### verifyProofStateless(root: `Hash`, leaves: `Vec<MmrEncodableOpaqueLeaf>`, proof: `MmrBatchProof`): `Result<(), MmrError>`
- **interface**: `api.call.mmrApi.verifyProofStateless`
- **runtime**: `MmrApi_verify_proof_stateless`
- **summary**: Verify MMR proof against given root hash.

___


## NominationPoolsApi
 
### balanceToPoints(poolId: `NpPoolId`, newFunds: `Balance`): `Balance`
- **interface**: `api.call.nominationPoolsApi.balanceToPoints`
- **runtime**: `NominationPoolsApi_balance_to_points`
- **summary**: Returns the equivalent points of `new_funds` for a given pool.
 
### pendingRewards(member: `AccountId`): `Balance`
- **interface**: `api.call.nominationPoolsApi.pendingRewards`
- **runtime**: `NominationPoolsApi_pending_rewards`
- **summary**: Returns the pending rewards for the given member.
 
### pointsToBalance(poolId: `NpPoolId`, points: `Balance`): `Balance`
- **interface**: `api.call.nominationPoolsApi.pointsToBalance`
- **runtime**: `NominationPoolsApi_points_to_balance`
- **summary**: Returns the equivalent balance of `points` for a given pool.

___


## OffchainWorkerApi
 
### offchainWorker(header: `Header`): `Null`
- **interface**: `api.call.offchainWorkerApi.offchainWorker`
- **runtime**: `OffchainWorkerApi_offchain_worker`
- **summary**: Starts the off-chain task for given block header.

___


## ParachainHost
 
### assumedValidationData(paraId: `ParaId`, hash: `Hash`): `Option<(PersistedValidationData, ValidationCodeHash)>`
- **interface**: `api.call.parachainHost.assumedValidationData`
- **runtime**: `ParachainHost_assumed_validation_data`
- **summary**: Returns the persisted validation data for the given `ParaId` along with the corresponding validation code hash.
 
### availabilityCores(): `Vec<CoreState>`
- **interface**: `api.call.parachainHost.availabilityCores`
- **runtime**: `ParachainHost_availability_cores`
- **summary**: Yields information on all availability cores as relevant to the child block.
 
### candidateEvents(): `Vec<CandidateEvent>`
- **interface**: `api.call.parachainHost.candidateEvents`
- **runtime**: `ParachainHost_candidate_events`
- **summary**: Get a vector of events concerning candidates that occurred within a block.
 
### candidatePendingAvailability(paraId: `ParaId`): `Option<CommittedCandidateReceipt>`
- **interface**: `api.call.parachainHost.candidatePendingAvailability`
- **runtime**: `ParachainHost_candidate_pending_availability`
- **summary**: Get the receipt of a candidate pending availability.
 
### checkValidationOutputs(paraId: `ParaId`, outputs: `CandidateCommitments`): `bool`
- **interface**: `api.call.parachainHost.checkValidationOutputs`
- **runtime**: `ParachainHost_check_validation_outputs`
- **summary**: Checks if the given validation outputs pass the acceptance criteria.
 
### disputes(): `Vec<(SessionIndex, CandidateHash, DisputeState)>`
- **interface**: `api.call.parachainHost.disputes`
- **runtime**: `ParachainHost_disputes`
- **summary**: Returns all onchain disputes.
 
### dmqContents(paraId: `ParaId`): `Vec<InboundDownwardMessage>`
- **interface**: `api.call.parachainHost.dmqContents`
- **runtime**: `ParachainHost_dmq_contents`
- **summary**: Get all the pending inbound messages in the downward message queue for a para.
 
### inboundHrmpChannelsContents(paraId: `ParaId`): `Vec<InboundHrmpMessage>`
- **interface**: `api.call.parachainHost.inboundHrmpChannelsContents`
- **runtime**: `ParachainHost_inbound_hrmp_channels_contents`
- **summary**: Get the contents of all channels addressed to the given recipient.
 
### onChainVotes(): `Option<ScrapedOnChainVotes>`
- **interface**: `api.call.parachainHost.onChainVotes`
- **runtime**: `ParachainHost_on_chain_votes`
- **summary**: Scrape dispute relevant from on-chain, backing votes and resolved disputes.
 
### persistedValidationData(paraId: `ParaId`, assumption: `OccupiedCoreAssumption`): `Option<PersistedValidationData>`
- **interface**: `api.call.parachainHost.persistedValidationData`
- **runtime**: `ParachainHost_persisted_validation_data`
- **summary**: Yields the persisted validation data for the given `ParaId` along with an assumption that should be used if the para currently occupies a core.
 
### pvfsRequirePrecheck(): `Vec<ValidationCodeHash>`
- **interface**: `api.call.parachainHost.pvfsRequirePrecheck`
- **runtime**: `ParachainHost_pvfs_require_precheck`
- **summary**: Returns code hashes of PVFs that require pre-checking by validators in the active set.
 
### sessionExecutorParams(sessionIndex: `SessionIndex`): `Option<ExecutorParams>`
- **interface**: `api.call.parachainHost.sessionExecutorParams`
- **runtime**: `ParachainHost_session_executor_params`
- **summary**: Returns execution parameters for the session.
 
### sessionIndexForChild(): `SessionIndex`
- **interface**: `api.call.parachainHost.sessionIndexForChild`
- **runtime**: `ParachainHost_session_index_for_child`
- **summary**: Returns the session index expected at a child of the block.
 
### sessionInfo(index: `SessionIndex`): `Option<SessionInfo>`
- **interface**: `api.call.parachainHost.sessionInfo`
- **runtime**: `ParachainHost_session_info`
- **summary**: Get the session info for the given session, if stored.
 
### submitPvfCheckStatement(stmt: `PvfCheckStatement`, signature: `ValidatorSignature`): `Null`
- **interface**: `api.call.parachainHost.submitPvfCheckStatement`
- **runtime**: `ParachainHost_submit_pvf_check_statement`
- **summary**: Submits a PVF pre-checking statement into the transaction pool.
 
### validationCode(paraId: `ParaId`, assumption: `OccupiedCoreAssumption`): `ValidationCode`
- **interface**: `api.call.parachainHost.validationCode`
- **runtime**: `ParachainHost_validation_code`
- **summary**: Fetch the validation code used by a para, making the given `OccupiedCoreAssumption`.
 
### validationCodeByHash(hash: `ValidationCodeHash`): `Option<ValidationCode>`
- **interface**: `api.call.parachainHost.validationCodeByHash`
- **runtime**: `ParachainHost_validation_code_by_hash`
- **summary**: Get the validation code from its hash.
 
### validationCodeHash(paraId: `ParaId`, assumption: `OccupiedCoreAssumption`): `Option<ValidationCodeHash>`
- **interface**: `api.call.parachainHost.validationCodeHash`
- **runtime**: `ParachainHost_validation_code_hash`
- **summary**: Fetch the hash of the validation code used by a para, making the given `OccupiedCoreAssumption`.
 
### validatorGroups(): `(Vec<Vec<ParaValidatorIndex>>, GroupRotationInfo)`
- **interface**: `api.call.parachainHost.validatorGroups`
- **runtime**: `ParachainHost_validator_groups`
- **summary**: Returns the validator groups and rotation info localized based on the hypothetical child of a block whose state  this is invoked on
 
### validators(): `Vec<ValidatorId>`
- **interface**: `api.call.parachainHost.validators`
- **runtime**: `ParachainHost_validators`
- **summary**: Get the current validators.

___


## SessionKeys
 
### decodeSessionKeys(encoded: `Bytes`): `Option<Vec<(Bytes, KeyTypeId)>>`
- **interface**: `api.call.sessionKeys.decodeSessionKeys`
- **runtime**: `SessionKeys_decode_session_keys`
- **summary**: Decode the given public session keys.
 
### generateSessionKeys(seed: `Option<Bytes>`): `Bytes`
- **interface**: `api.call.sessionKeys.generateSessionKeys`
- **runtime**: `SessionKeys_generate_session_keys`
- **summary**: Generate a set of session keys with optionally using the given seed.

___


## StakingApi
 
### nominationsQuota(balance: `Balance`): `u32`
- **interface**: `api.call.stakingApi.nominationsQuota`
- **runtime**: `StakingApi_nominations_quota`
- **summary**: Returns the nominations quota for a nominator with a given balance.

___


## TaggedTransactionQueue
 
### validateTransaction(source: `TransactionSource`, tx: `Extrinsic`, blockHash: `BlockHash`): `TransactionValidity`
- **interface**: `api.call.taggedTransactionQueue.validateTransaction`
- **runtime**: `TaggedTransactionQueue_validate_transaction`
- **summary**: Validate the transaction.

___


## TransactionPaymentApi
 
### queryFeeDetails(uxt: `Extrinsic`, len: `u32`): `FeeDetails`
- **interface**: `api.call.transactionPaymentApi.queryFeeDetails`
- **runtime**: `TransactionPaymentApi_query_fee_details`
- **summary**: The transaction fee details
 
### queryInfo(uxt: `Extrinsic`, len: `u32`): `RuntimeDispatchInfo`
- **interface**: `api.call.transactionPaymentApi.queryInfo`
- **runtime**: `TransactionPaymentApi_query_info`
- **summary**: The transaction info
 
### queryLengthToFee(length: `u32`): `Balance`
- **interface**: `api.call.transactionPaymentApi.queryLengthToFee`
- **runtime**: `TransactionPaymentApi_query_length_to_fee`
- **summary**: Query the output of the current LengthToFee given some input
 
### queryWeightToFee(weight: `Weight`): `Balance`
- **interface**: `api.call.transactionPaymentApi.queryWeightToFee`
- **runtime**: `TransactionPaymentApi_query_weight_to_fee`
- **summary**: Query the output of the current WeightToFee given some input

___


## TransactionPaymentCallApi
 
### queryCallFeeDetails(call: `Call`, len: `u32`): `FeeDetails`
- **interface**: `api.call.transactionPaymentCallApi.queryCallFeeDetails`
- **runtime**: `TransactionPaymentCallApi_query_call_fee_details`
- **summary**: The call fee details
 
### queryCallInfo(call: `Call`, len: `u32`): `RuntimeDispatchInfo`
- **interface**: `api.call.transactionPaymentCallApi.queryCallInfo`
- **runtime**: `TransactionPaymentCallApi_query_call_info`
- **summary**: The call info
 
### queryLengthToFee(length: `u32`): `Balance`
- **interface**: `api.call.transactionPaymentCallApi.queryLengthToFee`
- **runtime**: `TransactionPaymentCallApi_query_length_to_fee`
- **summary**: Query the output of the current LengthToFee given some input
 
### queryWeightToFee(weight: `Weight`): `Balance`
- **interface**: `api.call.transactionPaymentCallApi.queryWeightToFee`
- **runtime**: `TransactionPaymentCallApi_query_weight_to_fee`
- **summary**: Query the output of the current WeightToFee given some input
