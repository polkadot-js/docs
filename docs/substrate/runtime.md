---
title: Runtime
---

The following section contains known runtime calls that may be available on specific runtimes (depending on configuration and available pallets). These call directly into the WASM runtime for queries and operations.

- **[accountNonceApi](#accountnonceapi)**

- **[assetConversionApi](#assetconversionapi)**

- **[assetsApi](#assetsapi)**

- **[authorityDiscoveryApi](#authoritydiscoveryapi)**

- **[babeApi](#babeapi)**

- **[beefyApi](#beefyapi)**

- **[blockBuilder](#blockbuilder)**

- **[contractsApi](#contractsapi)**

- **[core](#core)**

- **[genesisBuilder](#genesisbuilder)**

- **[grandpaApi](#grandpaapi)**

- **[metadata](#metadata)**

- **[mixnetApi](#mixnetapi)**

- **[mmrApi](#mmrapi)**

- **[nftsApi](#nftsapi)**

- **[nominationPoolsApi](#nominationpoolsapi)**

- **[offchainWorkerApi](#offchainworkerapi)**

- **[reviveApi](#reviveapi)**

- **[sessionKeys](#sessionkeys)**

- **[stakingApi](#stakingapi)**

- **[taggedTransactionQueue](#taggedtransactionqueue)**

- **[transactionPaymentApi](#transactionpaymentapi)**

- **[transactionPaymentCallApi](#transactionpaymentcallapi)**

- **[validateStatement](#validatestatement)**


___


## accountNonceApi
 
### accountNonce(account: `SpCoreCryptoAccountId32`): `u32`
- **interface**: `api.call.accountNonceApi.accountNonce`
- **runtime**: `accountNonceApi_account_nonce`
- **summary**:  Get current account nonce of given `AccountId`.

___


## assetConversionApi
 
### getReserves(asset1: `FrameSupportTokensFungibleUnionOfNativeOrWithId`, asset2: `FrameSupportTokensFungibleUnionOfNativeOrWithId`): `Option<(u128,u128)>`
- **interface**: `api.call.assetConversionApi.getReserves`
- **runtime**: `assetConversionApi_get_reserves`
- **summary**:  Returns the size of the liquidity pool for the given asset pair.
 
### quotePriceExactTokensForTokens(asset1: `FrameSupportTokensFungibleUnionOfNativeOrWithId`, asset2: `FrameSupportTokensFungibleUnionOfNativeOrWithId`, amount: `u128`, include_fee: `bool`): `Option<u128>`
- **interface**: `api.call.assetConversionApi.quotePriceExactTokensForTokens`
- **runtime**: `assetConversionApi_quote_price_exact_tokens_for_tokens`
- **summary**:  Provides a quote for [`Pallet::swap_exact_tokens_for_tokens`].,, Note that the price may have changed by the time the transaction is executed., (Use `amount_out_min` to control slippage.)
 
### quotePriceTokensForExactTokens(asset1: `FrameSupportTokensFungibleUnionOfNativeOrWithId`, asset2: `FrameSupportTokensFungibleUnionOfNativeOrWithId`, amount: `u128`, include_fee: `bool`): `Option<u128>`
- **interface**: `api.call.assetConversionApi.quotePriceTokensForExactTokens`
- **runtime**: `assetConversionApi_quote_price_tokens_for_exact_tokens`
- **summary**:  Provides a quote for [`Pallet::swap_tokens_for_exact_tokens`].,, Note that the price may have changed by the time the transaction is executed., (Use `amount_in_max` to control slippage.)

___


## assetsApi
 
### accountBalances(account: `SpCoreCryptoAccountId32`): `Vec<(u32,u128)>`
- **interface**: `api.call.assetsApi.accountBalances`
- **runtime**: `assetsApi_account_balances`
- **summary**:  Returns the list of `AssetId`s and corresponding balance that an `AccountId` has.

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
 
### generateAncestryProof(prev_block_number: `u32`, best_known_block_number: `Option<u32>`): `Option<Bytes>`
- **interface**: `api.call.beefyApi.generateAncestryProof`
- **runtime**: `beefyApi_generate_ancestry_proof`
- **summary**:  Generates a proof that the `prev_block_number` is part of the canonical chain at, `best_known_block_number`.
 
### generateKeyOwnershipProof(set_id: `u64`, authority_id: `SpConsensusBeefyEcdsaCryptoPublic`): `Option<Bytes>`
- **interface**: `api.call.beefyApi.generateKeyOwnershipProof`
- **runtime**: `beefyApi_generate_key_ownership_proof`
- **summary**:  Generates a proof of key ownership for the given authority in the, given set. An example usage of this module is coupled with the, session historical module to prove that a given authority key is, tied to a given staking identity during a specific session. Proofs, of key ownership are necessary for submitting equivocation reports., NOTE: even though the API takes a `set_id` as parameter the current, implementations ignores this parameter and instead relies on this, method being called at the correct block height, i.e. any point at, which the given set id is live on-chain. Future implementations will, instead use indexed data through an offchain worker, not requiring, older states to be available.
 
### submitReportDoubleVotingUnsignedExtrinsic(equivocation_proof: `SpConsensusBeefyDoubleVotingProof`, key_owner_proof: `SpRuntimeOpaqueValue`): `Option<Null>`
- **interface**: `api.call.beefyApi.submitReportDoubleVotingUnsignedExtrinsic`
- **runtime**: `beefyApi_submit_report_double_voting_unsigned_extrinsic`
- **summary**:  Submits an unsigned extrinsic to report a double voting equivocation. The caller, must provide the double voting proof and a key ownership proof, (should be obtained using `generate_key_ownership_proof`). The, extrinsic will be unsigned and should only be accepted for local, authorship (not to be broadcast to the network). This method returns, `None` when creation of the extrinsic fails, e.g. if equivocation, reporting is disabled for the given runtime (i.e. this method is, hardcoded to return `None`). Only useful in an offchain context.
 
### submitReportForkVotingUnsignedExtrinsic(equivocation_proof: `SpConsensusBeefyForkVotingProofOpaqueValue`, key_owner_proof: `SpRuntimeOpaqueValue`): `Option<Null>`
- **interface**: `api.call.beefyApi.submitReportForkVotingUnsignedExtrinsic`
- **runtime**: `beefyApi_submit_report_fork_voting_unsigned_extrinsic`
- **summary**:  Submits an unsigned extrinsic to report a fork voting equivocation. The caller, must provide the fork voting proof (the ancestry proof should be obtained using, `generate_ancestry_proof`) and a key ownership proof (should be obtained using, `generate_key_ownership_proof`). The extrinsic will be unsigned and should only, be accepted for local authorship (not to be broadcast to the network). This method, returns `None` when creation of the extrinsic fails, e.g. if equivocation, reporting is disabled for the given runtime (i.e. this method is, hardcoded to return `None`). Only useful in an offchain context.
 
### submitReportFutureBlockVotingUnsignedExtrinsic(equivocation_proof: `SpConsensusBeefyFutureBlockVotingProof`, key_owner_proof: `SpRuntimeOpaqueValue`): `Option<Null>`
- **interface**: `api.call.beefyApi.submitReportFutureBlockVotingUnsignedExtrinsic`
- **runtime**: `beefyApi_submit_report_future_block_voting_unsigned_extrinsic`
- **summary**:  Submits an unsigned extrinsic to report a future block voting equivocation. The caller, must provide the future block voting proof and a key ownership proof, (should be obtained using `generate_key_ownership_proof`)., The extrinsic will be unsigned and should only be accepted for local, authorship (not to be broadcast to the network). This method returns, `None` when creation of the extrinsic fails, e.g. if equivocation, reporting is disabled for the given runtime (i.e. this method is, hardcoded to return `None`). Only useful in an offchain context.
 
### validatorSet(): `Option<SpConsensusBeefyValidatorSet>`
- **interface**: `api.call.beefyApi.validatorSet`
- **runtime**: `beefyApi_validator_set`
- **summary**:  Return the current active BEEFY validator set

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


## contractsApi
 
### call(origin: `SpCoreCryptoAccountId32`, dest: `SpCoreCryptoAccountId32`, value: `u128`, gas_limit: `Option<SpWeightsWeightV2Weight>`, storage_deposit_limit: `Option<u128>`, input_data: `Bytes`): `{"gasConsumed":"SpWeightsWeightV2Weight","gasRequired":"SpWeightsWeightV2Weight","storageDeposit":"PalletContractsPrimitivesStorageDeposit","debugMessage":"Bytes","result":"Result<PalletContractsPrimitivesExecReturnValue, SpRuntimeDispatchError>","events":"Option<Vec<FrameSystemEventRecord>>"}`
- **interface**: `api.call.contractsApi.call`
- **runtime**: `contractsApi_call`
- **summary**:  Perform a call from a specified account to a given contract.,, See [`crate::Pallet::bare_call`].
 
### getStorage(address: `SpCoreCryptoAccountId32`, key: `Bytes`): `Result<Option<Bytes>, PalletContractsPrimitivesContractAccessError>`
- **interface**: `api.call.contractsApi.getStorage`
- **runtime**: `contractsApi_get_storage`
- **summary**:  Query a given storage key in a given contract.,, Returns `Ok(Some(Vec<u8>))` if the storage value exists under the given key in the, specified account and `Ok(None)` if it doesn't. If the account specified by the address, doesn't exist, or doesn't have a contract then `Err` is returned.
 
### instantiate(origin: `SpCoreCryptoAccountId32`, value: `u128`, gas_limit: `Option<SpWeightsWeightV2Weight>`, storage_deposit_limit: `Option<u128>`, code: `PalletContractsPrimitivesCode`, data: `Bytes`, salt: `Bytes`): `PalletContractsPrimitivesContractResult`
- **interface**: `api.call.contractsApi.instantiate`
- **runtime**: `contractsApi_instantiate`
- **summary**:  Instantiate a new contract.,, See `[crate::Pallet::bare_instantiate]`.
 
### uploadCode(origin: `SpCoreCryptoAccountId32`, code: `Bytes`, storage_deposit_limit: `Option<u128>`, determinism: `PalletContractsWasmDeterminism`): `Result<PalletContractsPrimitivesCodeUploadReturnValue, SpRuntimeDispatchError>`
- **interface**: `api.call.contractsApi.uploadCode`
- **runtime**: `contractsApi_upload_code`
- **summary**:  Upload new code without instantiating a contract from it.,, See [`crate::Pallet::bare_upload_code`].

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


## genesisBuilder
 
### buildState(json: `Bytes`): `Result<Null, Text>`
- **interface**: `api.call.genesisBuilder.buildState`
- **runtime**: `genesisBuilder_build_state`
- **summary**:  Build `RuntimeGenesisConfig` from a JSON blob not using any defaults and store it in the, storage.,, In the case of a FRAME-based runtime, this function deserializes the full, `RuntimeGenesisConfig` from the given JSON blob and puts it into the storage. If the, provided JSON blob is incorrect or incomplete or the deserialization fails, an error, is returned.,, Please note that provided JSON blob must contain all `RuntimeGenesisConfig` fields, no, defaults will be used.
 
### getPreset(id: `Option<Text>`): `Option<Bytes>`
- **interface**: `api.call.genesisBuilder.getPreset`
- **runtime**: `genesisBuilder_get_preset`
- **summary**:  Returns a JSON blob representation of the built-in `RuntimeGenesisConfig` identified by, `id`.,, If `id` is `None` the function should return JSON blob representation of the default, `RuntimeGenesisConfig` struct of the runtime. Implementation must provide default, `RuntimeGenesisConfig`.,, Otherwise function returns a JSON representation of the built-in, named, `RuntimeGenesisConfig` preset identified by `id`, or `None` if such preset does not, exist. Returned `Vec<u8>` contains bytes of JSON blob (patch) which comprises a list of, (potentially nested) key-value pairs that are intended for customizing the default, runtime genesis config. The patch shall be merged (rfc7386) with the JSON representation, of the default `RuntimeGenesisConfig` to create a comprehensive genesis config that can, be used in `build_state` method.
 
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


## mixnetApi
 
### currentMixnodes(): `Result<Vec<SpMixnetMixnode>, SpMixnetMixnodesErr>`
- **interface**: `api.call.mixnetApi.currentMixnodes`
- **runtime**: `mixnetApi_current_mixnodes`
- **summary**:  Get the mixnode set for the current session.
 
### maybeRegister(session_index: `u32`, mixnode: `SpMixnetMixnode`): `bool`
- **interface**: `api.call.mixnetApi.maybeRegister`
- **runtime**: `mixnetApi_maybe_register`
- **summary**:  Try to register a mixnode for the next session.,, If a registration extrinsic is submitted, `true` is returned. The caller should avoid, calling `maybe_register` again for a few blocks, to give the submitted extrinsic a, chance to get included.,, With the above exception, `maybe_register` is designed to be called every block. Most, of the time it will not do anything, for example:,, - If it is not an appropriate time to submit a registration extrinsic., - If the local node has already registered a mixnode for the next session., - If the local node is not permitted to register a mixnode for the next session.,, `session_index` should match `session_status().current_index`; if it does not, `false`, is returned immediately.
 
### prevMixnodes(): `Result<Vec<SpMixnetMixnode>, SpMixnetMixnodesErr>`
- **interface**: `api.call.mixnetApi.prevMixnodes`
- **runtime**: `mixnetApi_prev_mixnodes`
- **summary**:  Get the mixnode set for the previous session.
 
### sessionStatus(): `SpMixnetSessionStatus`
- **interface**: `api.call.mixnetApi.sessionStatus`
- **runtime**: `mixnetApi_session_status`
- **summary**:  Get the index and phase of the current session.

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


## nftsApi
 
### attribute(collection: `u32`, item: `u32`, key: `Bytes`): `Option<Bytes>`
- **interface**: `api.call.nftsApi.attribute`
- **runtime**: `nftsApi_attribute`
- **summary**: 
 
### collectionAttribute(collection: `u32`, key: `Bytes`): `Option<Bytes>`
- **interface**: `api.call.nftsApi.collectionAttribute`
- **runtime**: `nftsApi_collection_attribute`
- **summary**: 
 
### collectionOwner(collection: `u32`): `Option<AccountId32>`
- **interface**: `api.call.nftsApi.collectionOwner`
- **runtime**: `nftsApi_collection_owner`
- **summary**: 
 
### customAttribute(account: `SpCoreCryptoAccountId32`, collection: `u32`, item: `u32`, key: `Bytes`): `Option<Bytes>`
- **interface**: `api.call.nftsApi.customAttribute`
- **runtime**: `nftsApi_custom_attribute`
- **summary**: 
 
### owner(collection: `u32`, item: `u32`): `Option<AccountId32>`
- **interface**: `api.call.nftsApi.owner`
- **runtime**: `nftsApi_owner`
- **summary**: 
 
### systemAttribute(collection: `u32`, item: `Option<u32>`, key: `Bytes`): `Option<Bytes>`
- **interface**: `api.call.nftsApi.systemAttribute`
- **runtime**: `nftsApi_system_attribute`
- **summary**: 

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
 
### memberTotalBalance(who: `SpCoreCryptoAccountId32`): `u128`
- **interface**: `api.call.nominationPoolsApi.memberTotalBalance`
- **runtime**: `nominationPoolsApi_member_total_balance`
- **summary**:  Returns the total contribution of a pool member including any balance that is unbonding.
 
### pendingRewards(who: `SpCoreCryptoAccountId32`): `u128`
- **interface**: `api.call.nominationPoolsApi.pendingRewards`
- **runtime**: `nominationPoolsApi_pending_rewards`
- **summary**:  Returns the pending rewards for the member that the AccountId was given for.
 
### pointsToBalance(pool_id: `u32`, points: `u128`): `u128`
- **interface**: `api.call.nominationPoolsApi.pointsToBalance`
- **runtime**: `nominationPoolsApi_points_to_balance`
- **summary**:  Returns the equivalent balance of `points` for a given pool.
 
### poolAccounts(pool_id: `u32`): `(AccountId32,AccountId32)`
- **interface**: `api.call.nominationPoolsApi.poolAccounts`
- **runtime**: `nominationPoolsApi_pool_accounts`
- **summary**:  Returns the bonded account and reward account associated with the pool_id.
 
### poolBalance(pool_id: `u32`): `u128`
- **interface**: `api.call.nominationPoolsApi.poolBalance`
- **runtime**: `nominationPoolsApi_pool_balance`
- **summary**:  Total balance contributed to the pool.
 
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


## reviveApi
 
### balance(address: `PrimitiveTypesH160`): `u128`
- **interface**: `api.call.reviveApi.balance`
- **runtime**: `reviveApi_balance`
- **summary**:  Returns the free balance of the given `[H160]` address.
 
### call(origin: `SpCoreCryptoAccountId32`, dest: `PrimitiveTypesH160`, value: `u128`, gas_limit: `Option<SpWeightsWeightV2Weight>`, storage_deposit_limit: `Option<u128>`, input_data: `Bytes`): `PalletRevivePrimitivesContractResultExecReturnValue`
- **interface**: `api.call.reviveApi.call`
- **runtime**: `reviveApi_call`
- **summary**:  Perform a call from a specified account to a given contract.,, See [`crate::Pallet::bare_call`].
 
### ethTransact(origin: `PrimitiveTypesH160`, dest: `Option<H160>`, value: `u128`, input: `Bytes`, gas_limit: `Option<SpWeightsWeightV2Weight>`, storage_deposit_limit: `Option<u128>`): `PalletRevivePrimitivesEthContractResult`
- **interface**: `api.call.reviveApi.ethTransact`
- **runtime**: `reviveApi_eth_transact`
- **summary**:  Perform an Ethereum call.,, See [`crate::Pallet::bare_eth_transact`]
 
### getStorage(address: `PrimitiveTypesH160`, key: `[u8;32]`): `Result<Option<Bytes>, PalletRevivePrimitivesContractAccessError>`
- **interface**: `api.call.reviveApi.getStorage`
- **runtime**: `reviveApi_get_storage`
- **summary**:  Query a given storage key in a given contract.,, Returns `Ok(Some(Vec<u8>))` if the storage value exists under the given key in the, specified account and `Ok(None)` if it doesn't. If the account specified by the address, doesn't exist, or doesn't have a contract then `Err` is returned.
 
### instantiate(origin: `SpCoreCryptoAccountId32`, value: `u128`, gas_limit: `Option<SpWeightsWeightV2Weight>`, storage_deposit_limit: `Option<u128>`, code: `PalletRevivePrimitivesCode`, data: `Bytes`, salt: `Option<[u8;32]>`): `PalletRevivePrimitivesContractResultInstantiateReturnValue`
- **interface**: `api.call.reviveApi.instantiate`
- **runtime**: `reviveApi_instantiate`
- **summary**:  Instantiate a new contract.,, See `[crate::Pallet::bare_instantiate]`.
 
### nonce(address: `PrimitiveTypesH160`): `u32`
- **interface**: `api.call.reviveApi.nonce`
- **runtime**: `reviveApi_nonce`
- **summary**:  Returns the nonce of the given `[H160]` address.
 
### uploadCode(origin: `SpCoreCryptoAccountId32`, code: `Bytes`, storage_deposit_limit: `Option<u128>`): `Result<PalletRevivePrimitivesCodeUploadReturnValue, SpRuntimeDispatchError>`
- **interface**: `api.call.reviveApi.uploadCode`
- **runtime**: `reviveApi_upload_code`
- **summary**:  Upload new code without instantiating a contract from it.,, See [`crate::Pallet::bare_upload_code`].

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
 
### queryCallFeeDetails(call: `KitchensinkRuntimeRuntimeCall`, len: `u32`): `PalletTransactionPaymentFeeDetails`
- **interface**: `api.call.transactionPaymentCallApi.queryCallFeeDetails`
- **runtime**: `transactionPaymentCallApi_query_call_fee_details`
- **summary**:  Query fee details of a given encoded `Call`.
 
### queryCallInfo(call: `KitchensinkRuntimeRuntimeCall`, len: `u32`): `PalletTransactionPaymentRuntimeDispatchInfo`
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


## validateStatement
 
### validateStatement(source: `SpStatementStoreRuntimeApiStatementSource`, statement: `SpStatementStoreStatement`): `Result<SpStatementStoreRuntimeApiValidStatement, SpStatementStoreRuntimeApiInvalidStatement>`
- **interface**: `api.call.validateStatement.validateStatement`
- **runtime**: `validateStatement_validate_statement`
- **summary**:  Validate the statement.
