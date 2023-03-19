---
title: Runtime
---

The following section contains known runtime calls that may be available on specific runtimes (depending on configuration and available pallets). These call directly into the WASM runtime for queries and operations.

- **[accountNonceApi](#accountnonceapi)**

- **[assetsApi](#assetsapi)**

- **[auraApi](#auraapi)**

- **[authorFilterAPI](#authorfilterapi)**

- **[authorityDiscoveryApi](#authoritydiscoveryapi)**

- **[babeApi](#babeapi)**

- **[beefyApi](#beefyapi)**

- **[beefyMmrApi](#beefymmrapi)**

- **[benchmark](#benchmark)**

- **[blockBuilder](#blockbuilder)**

- **[collectCollationInfo](#collectcollationinfo)**

- **[contractsApi](#contractsapi)**

- **[convertTransactionRuntimeApi](#converttransactionruntimeapi)**

- **[core](#core)**

- **[debugRuntimeApi](#debugruntimeapi)**

- **[difficultyApi](#difficultyapi)**

- **[ethereumRuntimeRPCApi](#ethereumruntimerpcapi)**

- **[grandpaApi](#grandpaapi)**

- **[kusamaFinalityApi](#kusamafinalityapi)**

- **[metadata](#metadata)**

- **[mmrApi](#mmrapi)**

- **[nftsApi](#nftsapi)**

- **[nimbusApi](#nimbusapi)**

- **[nominationPoolsApi](#nominationpoolsapi)**

- **[offchainWorkerApi](#offchainworkerapi)**

- **[oracleApi](#oracleapi)**

- **[parachainHost](#parachainhost)**

- **[polkadotFinalityApi](#polkadotfinalityapi)**

- **[rococoFinalityApi](#rococofinalityapi)**

- **[sessionKeys](#sessionkeys)**

- **[stakingApi](#stakingapi)**

- **[taggedTransactionQueue](#taggedtransactionqueue)**

- **[timestampApi](#timestampapi)**

- **[tokensApi](#tokensapi)**

- **[transactionPaymentApi](#transactionpaymentapi)**

- **[transactionPaymentCallApi](#transactionpaymentcallapi)**

- **[westendFinalityApi](#westendfinalityapi)**


___


## AccountNonceApi
 
### accountNonce(accountId: `AccountId`): `Index`
- **interface**: `api.call.accountNonceApi.accountNonce`
- **runtime**: `AccountNonceApi_account_nonce`
- **summary**: The API to query account nonce (aka transaction index)

___


## AssetsApi
 
### accountBalances(account: `AccountId`): `Vec<(u32, TAssetBalance)>`
- **interface**: `api.call.assetsApi.accountBalances`
- **runtime**: `AssetsApi_account_balances`
- **summary**: Return the current set of authorities.

___


## AuraApi
 
### authorities(): `Vec<AuthorityId>`
- **interface**: `api.call.auraApi.authorities`
- **runtime**: `AuraApi_authorities`
- **summary**: Return the current set of authorities.
 
### slotDuration(): `SlotDuration`
- **interface**: `api.call.auraApi.slotDuration`
- **runtime**: `AuraApi_slot_duration`
- **summary**: Returns the slot duration for Aura.

___


## AuthorFilterAPI
 
### canAuthor(author: `AccountId`, relayParent: `u32`, parentHeader: `Header`): `bool`
- **interface**: `api.call.authorFilterAPI.canAuthor`
- **runtime**: `AuthorFilterAPI_can_author`
- **summary**: The runtime api used to predict whether an author will be eligible in the given slot

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


## BeefyMmrApi
 
### authoritySetProof(): `BeefyAuthoritySet`
- **interface**: `api.call.beefyMmrApi.authoritySetProof`
- **runtime**: `BeefyMmrApi_authority_set_proof`
- **summary**: Return the currently active BEEFY authority set proof.
 
### nextAuthoritySetProof(): `BeefyNextAuthoritySet`
- **interface**: `api.call.beefyMmrApi.nextAuthoritySetProof`
- **runtime**: `BeefyMmrApi_next_authority_set_proof`
- **summary**: Return the next/queued BEEFY authority set proof.

___


## Benchmark
 
### benchmarkMetadata(extra: `bool`): `(Vec<BenchmarkList>, Vec<StorageInfo>)`
- **interface**: `api.call.benchmark.benchmarkMetadata`
- **runtime**: `Benchmark_benchmark_metadata`
- **summary**: Get the benchmark metadata available for this runtime.
 
### dispatchBenchmark(config: `BenchmarkConfig`): `Result<Vec<BenchmarkBatch>, Text>`
- **interface**: `api.call.benchmark.dispatchBenchmark`
- **runtime**: `Benchmark_dispatch_benchmark`
- **summary**: Dispatch the given benchmark.

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


## CollectCollationInfo
 
### collectCollationInfo(header: `Header`): `CollationInfo`
- **interface**: `api.call.collectCollationInfo.collectCollationInfo`
- **runtime**: `CollectCollationInfo_collect_collation_info`
- **summary**: Collect information about a collation.

___


## ContractsApi
 
### call(origin: `AccountId`, dest: `AccountId`, value: `Balance`, gasLimit: `Option<WeightV2>`, storageDepositLimit: `Option<Balance>`, inputData: `Vec<u8>`): `ContractExecResult`
- **interface**: `api.call.contractsApi.call`
- **runtime**: `ContractsApi_call`
- **summary**: Perform a call from a specified account to a given contract.
 
### getStorage(address: `AccountId`, key: `Bytes`): `Option<Bytes>`
- **interface**: `api.call.contractsApi.getStorage`
- **runtime**: `ContractsApi_get_storage`
- **summary**: Query a given storage key in a given contract.
 
### instantiate(origin: `AccountId`, value: `Balance`, gasLimit: `Option<WeightV2>`, storageDepositLimit: `Option<Balance>`, code: `CodeSource`, data: `Bytes`, salt: `Bytes`): `ContractInstantiateResult`
- **interface**: `api.call.contractsApi.instantiate`
- **runtime**: `ContractsApi_instantiate`
- **summary**: Instantiate a new contract.
 
### uploadCode(origin: `AccountId`, code: `Bytes`, storageDepositLimit: `Option<Balance>`): `CodeUploadResult`
- **interface**: `api.call.contractsApi.uploadCode`
- **runtime**: `ContractsApi_upload_code`
- **summary**: Upload new code without instantiating a contract from it.

___


## ConvertTransactionRuntimeApi
 
### convertTransaction(transaction: `TransactionV2`): `Extrinsic`
- **interface**: `api.call.convertTransactionRuntimeApi.convertTransaction`
- **runtime**: `ConvertTransactionRuntimeApi_convert_transaction`
- **summary**: Converts an Ethereum-style transaction to Extrinsic

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


## DebugRuntimeApi
 
### traceBlock(extrinsics: `Vec<Extrinsic>`, knownTransactions: `Vec<H256>`): `Result<(), DispatchError>`
- **interface**: `api.call.debugRuntimeApi.traceBlock`
- **runtime**: `DebugRuntimeApi_trace_block`
- **summary**: Trace all block extrinsics
 
### traceTransaction(extrinsics: `Vec<Extrinsic>`, transaction: `EthTransaction`): `Result<(), DispatchError>`
- **interface**: `api.call.debugRuntimeApi.traceTransaction`
- **runtime**: `DebugRuntimeApi_trace_transaction`
- **summary**: Trace transaction extrinsics

___


## DifficultyApi
 
### difficulty(): `Raw`
- **interface**: `api.call.difficultyApi.difficulty`
- **runtime**: `DifficultyApi_difficulty`
- **summary**: Return the target difficulty of the next block.

___


## EthereumRuntimeRPCApi
 
### accountBasic(address: `H160`): `EvmAccount`
- **interface**: `api.call.ethereumRuntimeRPCApi.accountBasic`
- **runtime**: `EthereumRuntimeRPCApi_account_basic`
- **summary**: Returns pallet_evm::Accounts by address.
 
### accountCodeAt(address: `H160`): `Bytes`
- **interface**: `api.call.ethereumRuntimeRPCApi.accountCodeAt`
- **runtime**: `EthereumRuntimeRPCApi_account_code_at`
- **summary**: For a given account address, returns pallet_evm::AccountCodes.
 
### author(): `H160`
- **interface**: `api.call.ethereumRuntimeRPCApi.author`
- **runtime**: `EthereumRuntimeRPCApi_author`
- **summary**: Returns the converted FindAuthor::find_author authority id.
 
### call(from: `H160`, to: `H160`, data: `Vec<u8>`, value: `U256`, gasLimit: `U256`, maxFeePerGas: `Option<U256>`, maxPriorityFeePerGas: `Option<U256>`, nonce: `Option<U256>`, estimate: `bool`, accessList: `Option<Vec<(H160, Vec<H256>)>>`): `Result<EvmCallInfo, DispatchError>`
- **interface**: `api.call.ethereumRuntimeRPCApi.call`
- **runtime**: `EthereumRuntimeRPCApi_call`
- **summary**: Returns a frame_ethereum::call response. If `estimate` is true,
 
### chainId(): `u64`
- **interface**: `api.call.ethereumRuntimeRPCApi.chainId`
- **runtime**: `EthereumRuntimeRPCApi_chain_id`
- **summary**: Returns runtime defined pallet_evm::ChainId.
 
### create(from: `H160`, data: `Vec<u8>`, value: `U256`, gasLimit: `U256`, maxFeePerGas: `Option<U256>`, maxPriorityFeePerGas: `Option<U256>`, nonce: `Option<U256>`, estimate: `bool`, accessList: `Option<Vec<(H160, Vec<H256>)>>`): `Result<EvmCreateInfo, DispatchError>`
- **interface**: `api.call.ethereumRuntimeRPCApi.create`
- **runtime**: `EthereumRuntimeRPCApi_create`
- **summary**: Returns a frame_ethereum::call response. If `estimate` is true,
 
### currentAll(): `(Option<BlockV2>, Option<Vec<EthReceiptV3>>, Option<Vec<EthTransactionStatus>>)`
- **interface**: `api.call.ethereumRuntimeRPCApi.currentAll`
- **runtime**: `EthereumRuntimeRPCApi_current_all`
- **summary**: Return all the current data for a block in a single runtime call.
 
### currentBlock(): `BlockV2`
- **interface**: `api.call.ethereumRuntimeRPCApi.currentBlock`
- **runtime**: `EthereumRuntimeRPCApi_current_block`
- **summary**: Return the current block.
 
### currentReceipts(): `Option<Vec<EthReceiptV3>>`
- **interface**: `api.call.ethereumRuntimeRPCApi.currentReceipts`
- **runtime**: `EthereumRuntimeRPCApi_current_receipts`
- **summary**: Return the current receipt.
 
### currentTransactionStatuses(): `Option<Vec<EthTransactionStatus>>`
- **interface**: `api.call.ethereumRuntimeRPCApi.currentTransactionStatuses`
- **runtime**: `EthereumRuntimeRPCApi_current_transaction_statuses`
- **summary**: Return the current transaction status.
 
### elasticity(): `Option<Permill>`
- **interface**: `api.call.ethereumRuntimeRPCApi.elasticity`
- **runtime**: `EthereumRuntimeRPCApi_elasticity`
- **summary**: Return the elasticity multiplier.
 
### extrinsicFilter(xts: `Vec<Extrinsic>`): `Vec<TransactionV2>`
- **interface**: `api.call.ethereumRuntimeRPCApi.extrinsicFilter`
- **runtime**: `EthereumRuntimeRPCApi_extrinsic_filter`
- **summary**: Receives a `Vec<OpaqueExtrinsic>` and filters all the ethereum transactions.
 
### gasPrice(): `u256`
- **interface**: `api.call.ethereumRuntimeRPCApi.gasPrice`
- **runtime**: `EthereumRuntimeRPCApi_gas_price`
- **summary**: Returns FixedGasPrice::min_gas_price
 
### storageAt(address: `H160`, index: `u256`): `H256`
- **interface**: `api.call.ethereumRuntimeRPCApi.storageAt`
- **runtime**: `EthereumRuntimeRPCApi_storage_at`
- **summary**: For a given account address and index, returns pallet_evm::AccountStorages.

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


## KusamaFinalityApi
 
### bestFinalized(): `(BlockNumber, Hash)`
- **interface**: `api.call.kusamaFinalityApi.bestFinalized`
- **runtime**: `KusamaFinalityApi_best_finalized`
- **summary**: Returns number and hash of the best finalized header known to the bridge module.

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
 
### generateBatchProof(leafIndices: `Vec<MmrLeafIndex>`): `Result<(Vec<MmrEncodableOpaqueLeaf>, MmrBatchProof), MmrError>`
- **interface**: `api.call.mmrApi.generateBatchProof`
- **runtime**: `MmrApi_generate_batch_proof`
- **summary**: Generate MMR proof for a series of leaves under given indices.
 
### generateProof(leafIndex: `MmrLeafIndex`): `Result<(MmrEncodableOpaqueLeaf, MmrProof), MmrError>`
- **interface**: `api.call.mmrApi.generateProof`
- **runtime**: `MmrApi_generate_proof`
- **summary**: Generate MMR proof for a leaf under given index.
 
### mmrRoot(): `Result<Hash, MmrError>`
- **interface**: `api.call.mmrApi.mmrRoot`
- **runtime**: `MmrApi_mmr_root`
- **summary**: Return the on-chain MMR root hash.
 
### verifyBatchProof(leaves: `Vec<MmrEncodableOpaqueLeaf>`, proof: `MmrBatchProof`): `Result<(), MmrError>`
- **interface**: `api.call.mmrApi.verifyBatchProof`
- **runtime**: `MmrApi_verify_batch_proof`
- **summary**: Verify MMR proof against on-chain MMR for a batch of leaves.
 
### verifyBatchProofStateless(root: `Hash`, leaves: `Vec<MmrEncodableOpaqueLeaf>`, proof: `MmrBatchProof`): `Result<(), MmrError>`
- **interface**: `api.call.mmrApi.verifyBatchProofStateless`
- **runtime**: `MmrApi_verify_batch_proof_stateless`
- **summary**: Verify MMR proof against given root hash or a batch of leaves.
 
### verifyProof(leaf: `MmrEncodableOpaqueLeaf`, proof: `MmrProof`): `Result<(), MmrError>`
- **interface**: `api.call.mmrApi.verifyProof`
- **runtime**: `MmrApi_verify_proof`
- **summary**: Verify MMR proof against on-chain MMR.
 
### verifyProofStateless(root: `Hash`, leaf: `MmrEncodableOpaqueLeaf`, proof: `MmrProof`): `Result<(), MmrError>`
- **interface**: `api.call.mmrApi.verifyProofStateless`
- **runtime**: `MmrApi_verify_proof_stateless`
- **summary**: Verify MMR proof against given root hash.

___


## NftsApi
 
### attribute(collection: `NftCollectionId`, item: `NftItemId`, key: `Bytes`): `Option<Bytes>`
- **interface**: `api.call.nftsApi.attribute`
- **runtime**: `NftsApi_attribute`
- **summary**: An attribute
 
### collectionAttribute(collection: `NftCollectionId`, key: `Bytes`): `Option<Bytes>`
- **interface**: `api.call.nftsApi.collectionAttribute`
- **runtime**: `NftsApi_collection_attribute`
- **summary**: A collection attribute
 
### collectionOwner(collection: `NftCollectionId`): `Option<AccountId>`
- **interface**: `api.call.nftsApi.collectionOwner`
- **runtime**: `NftsApi_collection_owner`
- **summary**: A collection owner
 
### customAttribute(account: `AccountId`, collection: `NftCollectionId`, item: `NftItemId`, key: `Bytes`): `Option<Bytes>`
- **interface**: `api.call.nftsApi.customAttribute`
- **runtime**: `NftsApi_custom_attribute`
- **summary**: A custom attribute
 
### owner(collection: `NftCollectionId`, item: `NftItemId`): `Option<AccountId>`
- **interface**: `api.call.nftsApi.owner`
- **runtime**: `NftsApi_owner`
- **summary**: Collection owner
 
### systemAttribute(collection: `NftCollectionId`, item: `NftItemId`, key: `Bytes`): `Option<Bytes>`
- **interface**: `api.call.nftsApi.systemAttribute`
- **runtime**: `NftsApi_system_attribute`
- **summary**: System attribute

___


## NimbusApi
 
### canAuthor(author: `AccountId`, relayParent: `u32`, parentHeader: `Header`): `bool`
- **interface**: `api.call.nimbusApi.canAuthor`
- **runtime**: `NimbusApi_can_author`
- **summary**: The runtime api used to predict whether a Nimbus author will be eligible in the given slot

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


## OracleApi
 
### getAllValues(providerId: `Raw`): `Raw`
- **interface**: `api.call.oracleApi.getAllValues`
- **runtime**: `OracleApi_get_all_values`
- **summary**: Retrieves all values
 
### getValue(providerId: `Raw`, key: `Raw`): `Option<Raw>`
- **interface**: `api.call.oracleApi.getValue`
- **runtime**: `OracleApi_get_value`
- **summary**: Retrieves a single value

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


## PolkadotFinalityApi
 
### bestFinalized(): `(BlockNumber, Hash)`
- **interface**: `api.call.polkadotFinalityApi.bestFinalized`
- **runtime**: `PolkadotFinalityApi_best_finalized`
- **summary**: Returns number and hash of the best finalized header known to the bridge module.

___


## RococoFinalityApi
 
### bestFinalized(): `(BlockNumber, Hash)`
- **interface**: `api.call.rococoFinalityApi.bestFinalized`
- **runtime**: `RococoFinalityApi_best_finalized`
- **summary**: Returns number and hash of the best finalized header known to the bridge module.

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


## TimestampApi
 
### timestamp(): `Moment`
- **interface**: `api.call.timestampApi.timestamp`
- **runtime**: `TimestampApi_timestamp`
- **summary**: API necessary for timestamp-based difficulty adjustment algorithms.

___


## TokensApi
 
### queryExistentialDeposit(currencyId: `Raw`): `u128`
- **interface**: `api.call.tokensApi.queryExistentialDeposit`
- **runtime**: `TokensApi_query_existential_deposit`
- **summary**: Query the existential amount for a specific currency

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

___


## WestendFinalityApi
 
### bestFinalized(): `(BlockNumber, Hash)`
- **interface**: `api.call.westendFinalityApi.bestFinalized`
- **runtime**: `WestendFinalityApi_best_finalized`
- **summary**: Returns number and hash of the best finalized header known to the bridge module.
