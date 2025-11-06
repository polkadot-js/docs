---
title: Runtime
---

The following section contains known runtime calls that may be available on specific runtimes (depending on configuration and available pallets). These call directly into the WASM runtime for queries and operations.

- **[accountNonceApi](#accountnonceapi)**

- **[assetConversionApi](#assetconversionapi)**

- **[auraApi](#auraapi)**

- **[auraUnincludedSegmentApi](#auraunincludedsegmentapi)**

- **[blockBuilder](#blockbuilder)**

- **[collectCollationInfo](#collectcollationinfo)**

- **[core](#core)**

- **[dryRunApi](#dryrunapi)**

- **[fungiblesApi](#fungiblesapi)**

- **[genesisBuilder](#genesisbuilder)**

- **[locationToAccountApi](#locationtoaccountapi)**

- **[metadata](#metadata)**

- **[offchainWorkerApi](#offchainworkerapi)**

- **[reviveApi](#reviveapi)**

- **[sessionKeys](#sessionkeys)**

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


## assetConversionApi
 
### getReserves(asset1: `StagingXcmV4Location`, asset2: `StagingXcmV4Location`): `Option<(u128,u128)>`
- **interface**: `api.call.assetConversionApi.getReserves`
- **runtime**: `assetConversionApi_get_reserves`
- **summary**:  Returns the size of the liquidity pool for the given asset pair.
 
### quotePriceExactTokensForTokens(asset1: `StagingXcmV4Location`, asset2: `StagingXcmV4Location`, amount: `u128`, include_fee: `bool`): `Option<u128>`
- **interface**: `api.call.assetConversionApi.quotePriceExactTokensForTokens`
- **runtime**: `assetConversionApi_quote_price_exact_tokens_for_tokens`
- **summary**:  Provides a quote for [`Pallet::swap_exact_tokens_for_tokens`].,, Note that the price may have changed by the time the transaction is executed., (Use `amount_out_min` to control slippage.)
 
### quotePriceTokensForExactTokens(asset1: `StagingXcmV4Location`, asset2: `StagingXcmV4Location`, amount: `u128`, include_fee: `bool`): `Option<u128>`
- **interface**: `api.call.assetConversionApi.quotePriceTokensForExactTokens`
- **runtime**: `assetConversionApi_quote_price_tokens_for_exact_tokens`
- **summary**:  Provides a quote for [`Pallet::swap_tokens_for_exact_tokens`].,, Note that the price may have changed by the time the transaction is executed., (Use `amount_in_max` to control slippage.)

___


## auraApi
 
### authorities(): `Vec<SpConsensusAuraSr25519AppSr25519Public>`
- **interface**: `api.call.auraApi.authorities`
- **runtime**: `auraApi_authorities`
- **summary**:  Return the current set of authorities.
 
### slotDuration(): `SpConsensusSlotsSlotDuration`
- **interface**: `api.call.auraApi.slotDuration`
- **runtime**: `auraApi_slot_duration`
- **summary**:  Returns the slot duration for Aura.,, Currently, only the value provided by this type at genesis will be used.

___


## auraUnincludedSegmentApi
 
### canBuildUpon(included_hash: `PrimitiveTypesH256`, slot: `SpConsensusSlotsSlot`): `bool`
- **interface**: `api.call.auraUnincludedSegmentApi.canBuildUpon`
- **runtime**: `auraUnincludedSegmentApi_can_build_upon`
- **summary**:  Whether it is legal to extend the chain, assuming the given block is the most, recently included one as-of the relay parent that will be built against, and, the given relay chain slot.,, This should be consistent with the logic the runtime uses when validating blocks to, avoid issues.,, When the unincluded segment is empty, i.e. `included_hash == at`, where at is the block, whose state we are querying against, this must always return `true` as long as the slot, is more recent than the included block itself.

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


## collectCollationInfo
 
### collectCollationInfo(header: `SpRuntimeHeader`): `CumulusPrimitivesCoreCollationInfo`
- **interface**: `api.call.collectCollationInfo.collectCollationInfo`
- **runtime**: `collectCollationInfo_collect_collation_info`
- **summary**:  Collect information about a collation.,, The given `header` is the header of the built block for that, we are collecting the collation info for.

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
 
### dryRunCall(origin: `AssetHubKusamaRuntimeOriginCaller`, call: `AssetHubKusamaRuntimeRuntimeCall`, result_xcms_version: `u32`): `Result<XcmRuntimeApisDryRunCallDryRunEffects, XcmRuntimeApisDryRunError>`
- **interface**: `api.call.dryRunApi.dryRunCall`
- **runtime**: `dryRunApi_dry_run_call`
- **summary**:  Dry run call V2.
 
### dryRunXcm(origin_location: `XcmVersionedLocation`, xcm: `XcmVersionedXcm`): `Result<XcmRuntimeApisDryRunXcmDryRunEffects, XcmRuntimeApisDryRunError>`
- **interface**: `api.call.dryRunApi.dryRunXcm`
- **runtime**: `dryRunApi_dry_run_xcm`
- **summary**:  Dry run XCM program

___


## fungiblesApi
 
### queryAccountBalances(account: `SpCoreCryptoAccountId32`): `Result<XcmVersionedAssets, AssetsCommonRuntimeApiFungiblesAccessError>`
- **interface**: `api.call.fungiblesApi.queryAccountBalances`
- **runtime**: `fungiblesApi_query_account_balances`
- **summary**:  Returns the list of all [`Asset`] that an `AccountId` has.

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


## offchainWorkerApi
 
### offchainWorker(header: `SpRuntimeHeader`): `Null`
- **interface**: `api.call.offchainWorkerApi.offchainWorker`
- **runtime**: `offchainWorkerApi_offchain_worker`
- **summary**:  Starts the off-chain task for given block header.

___


## reviveApi
 
### balance(address: `PrimitiveTypesH160`): `PrimitiveTypesU256`
- **interface**: `api.call.reviveApi.balance`
- **runtime**: `reviveApi_balance`
- **summary**:  Returns the free balance of the given `[H160]` address, using EVM decimals.
 
### blockGasLimit(): `PrimitiveTypesU256`
- **interface**: `api.call.reviveApi.blockGasLimit`
- **runtime**: `reviveApi_block_gas_limit`
- **summary**:  Returns the block gas limit.
 
### call(origin: `SpCoreCryptoAccountId32`, dest: `PrimitiveTypesH160`, value: `u128`, gas_limit: `Option<SpWeightsWeightV2Weight>`, storage_deposit_limit: `Option<u128>`, input_data: `Bytes`): `PalletRevivePrimitivesContractResultExecReturnValue`
- **interface**: `api.call.reviveApi.call`
- **runtime**: `reviveApi_call`
- **summary**:  Perform a call from a specified account to a given contract.,, See [`crate::Pallet::bare_call`].
 
### ethTransact(tx: `PalletReviveEvmApiRpcTypesGenGenericTransaction`): `Result<PalletRevivePrimitivesEthTransactInfo, PalletRevivePrimitivesEthTransactError>`
- **interface**: `api.call.reviveApi.ethTransact`
- **runtime**: `reviveApi_eth_transact`
- **summary**:  Perform an Ethereum call.,, See [`crate::Pallet::bare_eth_transact`]
 
### gasPrice(): `PrimitiveTypesU256`
- **interface**: `api.call.reviveApi.gasPrice`
- **runtime**: `reviveApi_gas_price`
- **summary**:  Returns the gas price.
 
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
 
### traceBlock(block: `SpRuntimeBlock`, config: `PalletReviveEvmApiDebugRpcTypesTracerType`): `Vec<(u32,PalletReviveEvmApiDebugRpcTypesTrace)>`
- **interface**: `api.call.reviveApi.traceBlock`
- **runtime**: `reviveApi_trace_block`
- **summary**:  Traces the execution of an entire block and returns call traces.,, This is intended to be called through `state_call` to replay the block from the, parent block.,, See eth-rpc `debug_traceBlockByNumber` for usage.
 
### traceCall(tx: `PalletReviveEvmApiRpcTypesGenGenericTransaction`, config: `PalletReviveEvmApiDebugRpcTypesTracerType`): `Result<PalletReviveEvmApiDebugRpcTypesTrace, PalletRevivePrimitivesEthTransactError>`
- **interface**: `api.call.reviveApi.traceCall`
- **runtime**: `reviveApi_trace_call`
- **summary**:  Dry run and return the trace of the given call.,, See eth-rpc `debug_traceCall` for usage.
 
### traceTx(block: `SpRuntimeBlock`, tx_index: `u32`, config: `PalletReviveEvmApiDebugRpcTypesTracerType`): `Option<PalletReviveEvmApiDebugRpcTypesTrace>`
- **interface**: `api.call.reviveApi.traceTx`
- **runtime**: `reviveApi_trace_tx`
- **summary**:  Traces the execution of a specific transaction within a block.,, This is intended to be called through `state_call` to replay the block from the, parent hash up to the transaction.,, See eth-rpc `debug_traceTransaction` for usage.
 
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
 
### queryCallFeeDetails(call: `AssetHubKusamaRuntimeRuntimeCall`, len: `u32`): `PalletTransactionPaymentFeeDetails`
- **interface**: `api.call.transactionPaymentCallApi.queryCallFeeDetails`
- **runtime**: `transactionPaymentCallApi_query_call_fee_details`
- **summary**:  Query fee details of a given encoded `Call`.
 
### queryCallInfo(call: `AssetHubKusamaRuntimeRuntimeCall`, len: `u32`): `PalletTransactionPaymentRuntimeDispatchInfo`
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
