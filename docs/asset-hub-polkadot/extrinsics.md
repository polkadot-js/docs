---
title: Extrinsics
---

The following sections contain Extrinsics methods are part of the default asset-hub-polkadot runtime. On the api, these are exposed via `api.tx.<module>.<method>`. 

(NOTE: These were generated from a static/snapshot view of a recent default asset-hub-polkadot runtime. Some items may not be available in older nodes, or in any customized implementations.)

- **[assetConversion](#assetconversion)**

- **[assets](#assets)**

- **[balances](#balances)**

- **[collatorSelection](#collatorselection)**

- **[cumulusXcm](#cumulusxcm)**

- **[foreignAssets](#foreignassets)**

- **[messageQueue](#messagequeue)**

- **[multisig](#multisig)**

- **[nfts](#nfts)**

- **[parachainInfo](#parachaininfo)**

- **[parachainSystem](#parachainsystem)**

- **[polkadotXcm](#polkadotxcm)**

- **[poolAssets](#poolassets)**

- **[proxy](#proxy)**

- **[session](#session)**

- **[system](#system)**

- **[timestamp](#timestamp)**

- **[toKusamaXcmRouter](#tokusamaxcmrouter)**

- **[uniques](#uniques)**

- **[utility](#utility)**

- **[vesting](#vesting)**

- **[xcmpQueue](#xcmpqueue)**


___


## assetConversion
 
### addLiquidity(asset1: `StagingXcmV4Location`, asset2: `StagingXcmV4Location`, amount1_desired: `u128`, amount2_desired: `u128`, amount1_min: `u128`, amount2_min: `u128`, mint_to: `AccountId32`)
- **interface**: `api.tx.assetConversion.addLiquidity`
- **summary**:    Provide liquidity into the pool of `asset1` and `asset2`.  NOTE: an optimal amount of asset1 and asset2 will be calculated and  might be different than the provided `amount1_desired`/`amount2_desired`  thus you should provide the min amount you're happy to provide.  Params `amount1_min`/`amount2_min` represent that.  `mint_to` will be sent the liquidity tokens that represent this share of the pool. 

   NOTE: when encountering an incorrect exchange rate and non-withdrawable pool liquidity,  batch an atomic call with [`Pallet::add_liquidity`] and  [`Pallet::swap_exact_tokens_for_tokens`] or [`Pallet::swap_tokens_for_exact_tokens`]  calls to render the liquidity withdrawable and rectify the exchange rate. 

   Once liquidity is added, someone may successfully call  [`Pallet::swap_exact_tokens_for_tokens`]. 
 
### createPool(asset1: `StagingXcmV4Location`, asset2: `StagingXcmV4Location`)
- **interface**: `api.tx.assetConversion.createPool`
- **summary**:    Creates an empty liquidity pool and an associated new `lp_token` asset  (the id of which is returned in the `Event::PoolCreated` event). 

   Once a pool is created, someone may [`Pallet::add_liquidity`] to it. 
 
### removeLiquidity(asset1: `StagingXcmV4Location`, asset2: `StagingXcmV4Location`, lp_token_burn: `u128`, amount1_min_receive: `u128`, amount2_min_receive: `u128`, withdraw_to: `AccountId32`)
- **interface**: `api.tx.assetConversion.removeLiquidity`
- **summary**:    Allows you to remove liquidity by providing the `lp_token_burn` tokens that will be  burned in the process. With the usage of `amount1_min_receive`/`amount2_min_receive`  it's possible to control the min amount of returned tokens you're happy with. 
 
### swapExactTokensForTokens(path: `Vec<StagingXcmV4Location>`, amount_in: `u128`, amount_out_min: `u128`, send_to: `AccountId32`, keep_alive: `bool`)
- **interface**: `api.tx.assetConversion.swapExactTokensForTokens`
- **summary**:    Swap the exact amount of `asset1` into `asset2`.  `amount_out_min` param allows you to specify the min amount of the `asset2`  you're happy to receive. 

   [`AssetConversionApi::quote_price_exact_tokens_for_tokens`] runtime call can be called  for a quote. 
 
### swapTokensForExactTokens(path: `Vec<StagingXcmV4Location>`, amount_out: `u128`, amount_in_max: `u128`, send_to: `AccountId32`, keep_alive: `bool`)
- **interface**: `api.tx.assetConversion.swapTokensForExactTokens`
- **summary**:    Swap any amount of `asset1` to get the exact amount of `asset2`.  `amount_in_max` param allows to specify the max amount of the `asset1`  you're happy to provide. 

   [`AssetConversionApi::quote_price_tokens_for_exact_tokens`] runtime call can be called  for a quote. 
 
### touch(asset1: `StagingXcmV4Location`, asset2: `StagingXcmV4Location`)
- **interface**: `api.tx.assetConversion.touch`
- **summary**:    Touch an existing pool to fulfill prerequisites before providing liquidity, such as  ensuring that the pool's accounts are in place. It is typically useful when a pool  creator removes the pool's accounts and does not provide a liquidity. This action may  involve holding assets from the caller as a deposit for creating the pool's accounts. 

   The origin must be Signed. 

   - `asset1`: The asset ID of an existing pool with a pair (asset1, asset2). 

  - `asset2`: The asset ID of an existing pool with a pair (asset1, asset2).

   Emits `Touched` event when successful. 

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
 
### block(id: `Compact<u32>`, who: `MultiAddress`)
- **interface**: `api.tx.assets.block`
- **summary**:    Disallow further unprivileged transfers of an asset `id` to and from an account `who`. 

   Origin must be Signed and the sender should be the Freezer of the asset `id`. 

   - `id`: The identifier of the account's asset. 

  - `who`: The account to be unblocked.

   Emits `Blocked`. 

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

   The origin must conform to the configured `CreateOrigin` and have sufficient funds free. 

   Funds of sender are reserved by `AssetDeposit`. 

   Parameters: 

  - `id`: The identifier of the new asset. This must not be currently in use to identify an existing asset. If [`NextAssetId`] is set, then this must be equal to it. 

  - `admin`: The admin of this class of assets. The admin is the initial address of each member of the asset class's admin team. 

  - `min_balance`: The minimum balance of this new asset that any single account must have. If an account's balance is reduced below this, then it collapses to zero. 

   Emits `Created` event when successful. 

   Weight: `O(1)` 
 
### destroyAccounts(id: `Compact<u32>`)
- **interface**: `api.tx.assets.destroyAccounts`
- **summary**:    Destroy all accounts associated with a given asset. 

   `destroy_accounts` should only be called after `start_destroy` has been called, and the  asset is in a `Destroying` state. 

   Due to weight restrictions, this function may need to be called multiple times to fully  destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time. 

   - `id`: The identifier of the asset to be destroyed. This must identify an existing  asset. 

   Each call emits the `Event::DestroyedAccounts` event. 
 
### destroyApprovals(id: `Compact<u32>`)
- **interface**: `api.tx.assets.destroyApprovals`
- **summary**:    Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit). 

   `destroy_approvals` should only be called after `start_destroy` has been called, and the  asset is in a `Destroying` state. 

   Due to weight restrictions, this function may need to be called multiple times to fully  destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time. 

   - `id`: The identifier of the asset to be destroyed. This must identify an existing  asset. 

   Each call emits the `Event::DestroyedApprovals` event. 
 
### finishDestroy(id: `Compact<u32>`)
- **interface**: `api.tx.assets.finishDestroy`
- **summary**:    Complete destroying asset and unreserve currency. 

   `finish_destroy` should only be called after `start_destroy` has been called, and the  asset is in a `Destroying` state. All accounts or approvals should be destroyed before  hand. 

   - `id`: The identifier of the asset to be destroyed. This must identify an existing  asset. 

   Each successful call emits the `Event::Destroyed` event. 
 
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

   - `id`: The identifier of the new asset. This must not be currently in use to identify  an existing asset. If [`NextAssetId`] is set, then this must be equal to it. 

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
- **summary**:    Disallow further unprivileged transfers of an asset `id` from an account `who`. `who`  must already exist as an entry in `Account`s of the asset. If you want to freeze an  account that does not have an entry, use `touch_other` first. 

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
- **summary**:    Return the deposit (if any) of an asset account or a consumer reference (if any) of an  account. 

   The origin must be Signed. 

   - `id`: The identifier of the asset for which the caller would like the deposit  refunded. 

  - `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.

   Emits `Refunded` event when successful. 
 
### refundOther(id: `Compact<u32>`, who: `MultiAddress`)
- **interface**: `api.tx.assets.refundOther`
- **summary**:    Return the deposit (if any) of a target asset account. Useful if you are the depositor. 

   The origin must be Signed and either the account owner, depositor, or asset `Admin`. In  order to burn a non-zero balance of the asset, the caller must be the account and should  use `refund`. 

   - `id`: The identifier of the asset for the account holding a deposit. 

  - `who`: The account to refund.

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
 
### setMinBalance(id: `Compact<u32>`, min_balance: `u128`)
- **interface**: `api.tx.assets.setMinBalance`
- **summary**:    Sets the minimum balance of an asset. 

   Only works if there aren't any accounts that are holding the asset or if  the new value of `min_balance` is less than the old one. 

   Origin must be Signed and the sender has to be the Owner of the  asset `id`. 

   - `id`: The identifier of the asset. 

  - `min_balance`: The new value of `min_balance`.

   Emits `AssetMinBalanceChanged` event when successful. 
 
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
 
### startDestroy(id: `Compact<u32>`)
- **interface**: `api.tx.assets.startDestroy`
- **summary**:    Start the process of destroying a fungible asset class. 

   `start_destroy` is the first in a series of extrinsics that should be called, to allow  destruction of an asset class. 

   The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`. 

   - `id`: The identifier of the asset to be destroyed. This must identify an existing  asset. 
 
### thaw(id: `Compact<u32>`, who: `MultiAddress`)
- **interface**: `api.tx.assets.thaw`
- **summary**:    Allow unprivileged transfers to and from an account again. 

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
 
### touchOther(id: `Compact<u32>`, who: `MultiAddress`)
- **interface**: `api.tx.assets.touchOther`
- **summary**:    Create an asset account for `who`. 

   A deposit will be taken from the signer account. 

   - `origin`: Must be Signed by `Freezer` or `Admin` of the asset `id`; the signer account  must have sufficient funds for a deposit to be taken. 

  - `id`: The identifier of the asset for the account to be created.

  - `who`: The account to be created.

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
 
### transferAll(id: `Compact<u32>`, dest: `MultiAddress`, keep_alive: `bool`)
- **interface**: `api.tx.assets.transferAll`
- **summary**:    Transfer the entire transferable balance from the caller asset account. 

   NOTE: This function only attempts to transfer _transferable_ balances. This means that  any held, frozen, or minimum balance (when `keep_alive` is `true`), will not be  transferred by this function. To ensure that this function results in a killed account,  you might need to prepare the account by removing any reference counters, storage  deposits, etc... 

   The dispatch origin of this call must be Signed. 

   - `id`: The identifier of the asset for the account holding a deposit. 

  - `dest`: The recipient of the transfer.

  - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all of the funds the asset account has, causing the sender asset account to be killed  (false), or transfer everything except at least the minimum balance, which will  guarantee to keep the sender asset account alive (true). 
 
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


## collatorSelection
 
### addInvulnerable(who: `AccountId32`)
- **interface**: `api.tx.collatorSelection.addInvulnerable`
- **summary**:    Add a new account `who` to the list of `Invulnerables` collators. `who` must have  registered session keys. If `who` is a candidate, they will be removed. 

   The origin for this call must be the `UpdateOrigin`. 
 
### leaveIntent()
- **interface**: `api.tx.collatorSelection.leaveIntent`
- **summary**:    Deregister `origin` as a collator candidate. Note that the collator can only leave on  session change. The `CandidacyBond` will be unreserved immediately. 

   This call will fail if the total number of candidates would drop below  `MinEligibleCollators`. 
 
### registerAsCandidate()
- **interface**: `api.tx.collatorSelection.registerAsCandidate`
- **summary**:    Register this account as a collator candidate. The account must (a) already have  registered session keys and (b) be able to reserve the `CandidacyBond`. 

   This call is not available to `Invulnerable` collators. 
 
### removeInvulnerable(who: `AccountId32`)
- **interface**: `api.tx.collatorSelection.removeInvulnerable`
- **summary**:    Remove an account `who` from the list of `Invulnerables` collators. `Invulnerables` must  be sorted. 

   The origin for this call must be the `UpdateOrigin`. 
 
### setCandidacyBond(bond: `u128`)
- **interface**: `api.tx.collatorSelection.setCandidacyBond`
- **summary**:    Set the candidacy bond amount. 

   If the candidacy bond is increased by this call, all current candidates which have a  deposit lower than the new bond will be kicked from the list and get their deposits  back. 

   The origin for this call must be the `UpdateOrigin`. 
 
### setDesiredCandidates(max: `u32`)
- **interface**: `api.tx.collatorSelection.setDesiredCandidates`
- **summary**:    Set the ideal number of non-invulnerable collators. If lowering this number, then the  number of running collators could be higher than this figure. Aside from that edge case,  there should be no other way to have more candidates than the desired number. 

   The origin for this call must be the `UpdateOrigin`. 
 
### setInvulnerables(new: `Vec<AccountId32>`)
- **interface**: `api.tx.collatorSelection.setInvulnerables`
- **summary**:    Set the list of invulnerable (fixed) collators. These collators must do some  preparation, namely to have registered session keys. 

   The call will remove any accounts that have not registered keys from the set. That is,  it is non-atomic; the caller accepts all `AccountId`s passed in `new` _individually_ as  acceptable Invulnerables, and is not proposing a _set_ of new Invulnerables. 

   This call does not maintain mutual exclusivity of `Invulnerables` and `Candidates`. It  is recommended to use a batch of `add_invulnerable` and `remove_invulnerable` instead. A  `batch_all` can also be used to enforce atomicity. If any candidates are included in  `new`, they should be removed with `remove_invulnerable_candidate` after execution. 

   Must be called by the `UpdateOrigin`. 
 
### takeCandidateSlot(deposit: `u128`, target: `AccountId32`)
- **interface**: `api.tx.collatorSelection.takeCandidateSlot`
- **summary**:    The caller `origin` replaces a candidate `target` in the collator candidate list by  reserving `deposit`. The amount `deposit` reserved by the caller must be greater than  the existing bond of the target it is trying to replace. 

   This call will fail if the caller is already a collator candidate or invulnerable, the  caller does not have registered session keys, the target is not a collator candidate,  and/or the `deposit` amount cannot be reserved. 
 
### updateBond(new_deposit: `u128`)
- **interface**: `api.tx.collatorSelection.updateBond`
- **summary**:    Update the candidacy bond of collator candidate `origin` to a new amount `new_deposit`. 

   Setting a `new_deposit` that is lower than the current deposit while `origin` is  occupying a top-`DesiredCandidates` slot is not allowed. 

   This call will fail if `origin` is not a collator candidate, the updated bond is lower  than the minimum candidacy bond, and/or the amount cannot be reserved. 

___


## cumulusXcm

___


## foreignAssets
 
### approveTransfer(id: `StagingXcmV4Location`, delegate: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.foreignAssets.approveTransfer`
- **summary**:    Approve an amount of asset for transfer by a delegated third-party account. 

   Origin must be Signed. 

   Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account  for the purpose of holding the approval. If some non-zero amount of assets is already  approved from signing account to `delegate`, then it is topped up or unreserved to  meet the right value. 

   NOTE: The signing account does not need to own `amount` of assets at the point of  making this call. 

   - `id`: The identifier of the asset. 

  - `delegate`: The account to delegate permission to transfer asset.

  - `amount`: The amount of asset that may be transferred by `delegate`. If there is already an approval in place, then this acts additively. 

   Emits `ApprovedTransfer` on success. 

   Weight: `O(1)` 
 
### block(id: `StagingXcmV4Location`, who: `MultiAddress`)
- **interface**: `api.tx.foreignAssets.block`
- **summary**:    Disallow further unprivileged transfers of an asset `id` to and from an account `who`. 

   Origin must be Signed and the sender should be the Freezer of the asset `id`. 

   - `id`: The identifier of the account's asset. 

  - `who`: The account to be unblocked.

   Emits `Blocked`. 

   Weight: `O(1)` 
 
### burn(id: `StagingXcmV4Location`, who: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.foreignAssets.burn`
- **summary**:    Reduce the balance of `who` by as much as possible up to `amount` assets of `id`. 

   Origin must be Signed and the sender should be the Manager of the asset `id`. 

   Bails with `NoAccount` if the `who` is already dead. 

   - `id`: The identifier of the asset to have some amount burned. 

  - `who`: The account to be debited from.

  - `amount`: The maximum amount by which `who`'s balance should be reduced.

   Emits `Burned` with the actual amount burned. If this takes the balance to below the  minimum for the asset, then the amount burned is increased to take it to zero. 

   Weight: `O(1)`  Modes: Post-existence of `who`; Pre & post Zombie-status of `who`. 
 
### cancelApproval(id: `StagingXcmV4Location`, delegate: `MultiAddress`)
- **interface**: `api.tx.foreignAssets.cancelApproval`
- **summary**:    Cancel all of some asset approved for delegated transfer by a third-party account. 

   Origin must be Signed and there must be an approval in place between signer and  `delegate`. 

   Unreserves any deposit previously reserved by `approve_transfer` for the approval. 

   - `id`: The identifier of the asset. 

  - `delegate`: The account delegated permission to transfer asset.

   Emits `ApprovalCancelled` on success. 

   Weight: `O(1)` 
 
### clearMetadata(id: `StagingXcmV4Location`)
- **interface**: `api.tx.foreignAssets.clearMetadata`
- **summary**:    Clear the metadata for an asset. 

   Origin must be Signed and the sender should be the Owner of the asset `id`. 

   Any deposit is freed for the asset owner. 

   - `id`: The identifier of the asset to clear. 

   Emits `MetadataCleared`. 

   Weight: `O(1)` 
 
### create(id: `StagingXcmV4Location`, admin: `MultiAddress`, min_balance: `u128`)
- **interface**: `api.tx.foreignAssets.create`
- **summary**:    Issue a new class of fungible assets from a public origin. 

   This new asset class has no assets initially and its owner is the origin. 

   The origin must conform to the configured `CreateOrigin` and have sufficient funds free. 

   Funds of sender are reserved by `AssetDeposit`. 

   Parameters: 

  - `id`: The identifier of the new asset. This must not be currently in use to identify an existing asset. If [`NextAssetId`] is set, then this must be equal to it. 

  - `admin`: The admin of this class of assets. The admin is the initial address of each member of the asset class's admin team. 

  - `min_balance`: The minimum balance of this new asset that any single account must have. If an account's balance is reduced below this, then it collapses to zero. 

   Emits `Created` event when successful. 

   Weight: `O(1)` 
 
### destroyAccounts(id: `StagingXcmV4Location`)
- **interface**: `api.tx.foreignAssets.destroyAccounts`
- **summary**:    Destroy all accounts associated with a given asset. 

   `destroy_accounts` should only be called after `start_destroy` has been called, and the  asset is in a `Destroying` state. 

   Due to weight restrictions, this function may need to be called multiple times to fully  destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time. 

   - `id`: The identifier of the asset to be destroyed. This must identify an existing  asset. 

   Each call emits the `Event::DestroyedAccounts` event. 
 
### destroyApprovals(id: `StagingXcmV4Location`)
- **interface**: `api.tx.foreignAssets.destroyApprovals`
- **summary**:    Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit). 

   `destroy_approvals` should only be called after `start_destroy` has been called, and the  asset is in a `Destroying` state. 

   Due to weight restrictions, this function may need to be called multiple times to fully  destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time. 

   - `id`: The identifier of the asset to be destroyed. This must identify an existing  asset. 

   Each call emits the `Event::DestroyedApprovals` event. 
 
### finishDestroy(id: `StagingXcmV4Location`)
- **interface**: `api.tx.foreignAssets.finishDestroy`
- **summary**:    Complete destroying asset and unreserve currency. 

   `finish_destroy` should only be called after `start_destroy` has been called, and the  asset is in a `Destroying` state. All accounts or approvals should be destroyed before  hand. 

   - `id`: The identifier of the asset to be destroyed. This must identify an existing  asset. 

   Each successful call emits the `Event::Destroyed` event. 
 
### forceAssetStatus(id: `StagingXcmV4Location`, owner: `MultiAddress`, issuer: `MultiAddress`, admin: `MultiAddress`, freezer: `MultiAddress`, min_balance: `Compact<u128>`, is_sufficient: `bool`, is_frozen: `bool`)
- **interface**: `api.tx.foreignAssets.forceAssetStatus`
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
 
### forceCancelApproval(id: `StagingXcmV4Location`, owner: `MultiAddress`, delegate: `MultiAddress`)
- **interface**: `api.tx.foreignAssets.forceCancelApproval`
- **summary**:    Cancel all of some asset approved for delegated transfer by a third-party account. 

   Origin must be either ForceOrigin or Signed origin with the signer being the Admin  account of the asset `id`. 

   Unreserves any deposit previously reserved by `approve_transfer` for the approval. 

   - `id`: The identifier of the asset. 

  - `delegate`: The account delegated permission to transfer asset.

   Emits `ApprovalCancelled` on success. 

   Weight: `O(1)` 
 
### forceClearMetadata(id: `StagingXcmV4Location`)
- **interface**: `api.tx.foreignAssets.forceClearMetadata`
- **summary**:    Clear the metadata for an asset. 

   Origin must be ForceOrigin. 

   Any deposit is returned. 

   - `id`: The identifier of the asset to clear. 

   Emits `MetadataCleared`. 

   Weight: `O(1)` 
 
### forceCreate(id: `StagingXcmV4Location`, owner: `MultiAddress`, is_sufficient: `bool`, min_balance: `Compact<u128>`)
- **interface**: `api.tx.foreignAssets.forceCreate`
- **summary**:    Issue a new class of fungible assets from a privileged origin. 

   This new asset class has no assets initially. 

   The origin must conform to `ForceOrigin`. 

   Unlike `create`, no funds are reserved. 

   - `id`: The identifier of the new asset. This must not be currently in use to identify  an existing asset. If [`NextAssetId`] is set, then this must be equal to it. 

  - `owner`: The owner of this class of assets. The owner has full superuser permissions over this asset, but may later change and configure the permissions using  `transfer_ownership` and `set_team`. 

  - `min_balance`: The minimum balance of this new asset that any single account must have. If an account's balance is reduced below this, then it collapses to zero. 

   Emits `ForceCreated` event when successful. 

   Weight: `O(1)` 
 
### forceSetMetadata(id: `StagingXcmV4Location`, name: `Bytes`, symbol: `Bytes`, decimals: `u8`, is_frozen: `bool`)
- **interface**: `api.tx.foreignAssets.forceSetMetadata`
- **summary**:    Force the metadata for an asset to some value. 

   Origin must be ForceOrigin. 

   Any deposit is left alone. 

   - `id`: The identifier of the asset to update. 

  - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.

  - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.

  - `decimals`: The number of decimals this asset uses to represent one unit.

   Emits `MetadataSet`. 

   Weight: `O(N + S)` where N and S are the length of the name and symbol respectively. 
 
### forceTransfer(id: `StagingXcmV4Location`, source: `MultiAddress`, dest: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.foreignAssets.forceTransfer`
- **summary**:    Move some assets from one account to another. 

   Origin must be Signed and the sender should be the Admin of the asset `id`. 

   - `id`: The identifier of the asset to have some amount transferred. 

  - `source`: The account to be debited.

  - `dest`: The account to be credited.

  - `amount`: The amount by which the `source`'s balance of assets should be reduced and `dest`'s balance increased. The amount actually transferred may be slightly greater in  the case that the transfer would otherwise take the `source` balance above zero but  below the minimum balance. Must be greater than zero. 

   Emits `Transferred` with the actual amount transferred. If this takes the source balance  to below the minimum for the asset, then the amount transferred is increased to take it  to zero. 

   Weight: `O(1)`  Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of  `dest`. 
 
### freeze(id: `StagingXcmV4Location`, who: `MultiAddress`)
- **interface**: `api.tx.foreignAssets.freeze`
- **summary**:    Disallow further unprivileged transfers of an asset `id` from an account `who`. `who`  must already exist as an entry in `Account`s of the asset. If you want to freeze an  account that does not have an entry, use `touch_other` first. 

   Origin must be Signed and the sender should be the Freezer of the asset `id`. 

   - `id`: The identifier of the asset to be frozen. 

  - `who`: The account to be frozen.

   Emits `Frozen`. 

   Weight: `O(1)` 
 
### freezeAsset(id: `StagingXcmV4Location`)
- **interface**: `api.tx.foreignAssets.freezeAsset`
- **summary**:    Disallow further unprivileged transfers for the asset class. 

   Origin must be Signed and the sender should be the Freezer of the asset `id`. 

   - `id`: The identifier of the asset to be frozen. 

   Emits `Frozen`. 

   Weight: `O(1)` 
 
### mint(id: `StagingXcmV4Location`, beneficiary: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.foreignAssets.mint`
- **summary**:    Mint assets of a particular class. 

   The origin must be Signed and the sender must be the Issuer of the asset `id`. 

   - `id`: The identifier of the asset to have some amount minted. 

  - `beneficiary`: The account to be credited with the minted assets.

  - `amount`: The amount of the asset to be minted.

   Emits `Issued` event when successful. 

   Weight: `O(1)`  Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`. 
 
### refund(id: `StagingXcmV4Location`, allow_burn: `bool`)
- **interface**: `api.tx.foreignAssets.refund`
- **summary**:    Return the deposit (if any) of an asset account or a consumer reference (if any) of an  account. 

   The origin must be Signed. 

   - `id`: The identifier of the asset for which the caller would like the deposit  refunded. 

  - `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.

   Emits `Refunded` event when successful. 
 
### refundOther(id: `StagingXcmV4Location`, who: `MultiAddress`)
- **interface**: `api.tx.foreignAssets.refundOther`
- **summary**:    Return the deposit (if any) of a target asset account. Useful if you are the depositor. 

   The origin must be Signed and either the account owner, depositor, or asset `Admin`. In  order to burn a non-zero balance of the asset, the caller must be the account and should  use `refund`. 

   - `id`: The identifier of the asset for the account holding a deposit. 

  - `who`: The account to refund.

   Emits `Refunded` event when successful. 
 
### setMetadata(id: `StagingXcmV4Location`, name: `Bytes`, symbol: `Bytes`, decimals: `u8`)
- **interface**: `api.tx.foreignAssets.setMetadata`
- **summary**:    Set the metadata for an asset. 

   Origin must be Signed and the sender should be the Owner of the asset `id`. 

   Funds of sender are reserved according to the formula:  `MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into  account any already reserved funds. 

   - `id`: The identifier of the asset to update. 

  - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.

  - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.

  - `decimals`: The number of decimals this asset uses to represent one unit.

   Emits `MetadataSet`. 

   Weight: `O(1)` 
 
### setMinBalance(id: `StagingXcmV4Location`, min_balance: `u128`)
- **interface**: `api.tx.foreignAssets.setMinBalance`
- **summary**:    Sets the minimum balance of an asset. 

   Only works if there aren't any accounts that are holding the asset or if  the new value of `min_balance` is less than the old one. 

   Origin must be Signed and the sender has to be the Owner of the  asset `id`. 

   - `id`: The identifier of the asset. 

  - `min_balance`: The new value of `min_balance`.

   Emits `AssetMinBalanceChanged` event when successful. 
 
### setTeam(id: `StagingXcmV4Location`, issuer: `MultiAddress`, admin: `MultiAddress`, freezer: `MultiAddress`)
- **interface**: `api.tx.foreignAssets.setTeam`
- **summary**:    Change the Issuer, Admin and Freezer of an asset. 

   Origin must be Signed and the sender should be the Owner of the asset `id`. 

   - `id`: The identifier of the asset to be frozen. 

  - `issuer`: The new Issuer of this asset.

  - `admin`: The new Admin of this asset.

  - `freezer`: The new Freezer of this asset.

   Emits `TeamChanged`. 

   Weight: `O(1)` 
 
### startDestroy(id: `StagingXcmV4Location`)
- **interface**: `api.tx.foreignAssets.startDestroy`
- **summary**:    Start the process of destroying a fungible asset class. 

   `start_destroy` is the first in a series of extrinsics that should be called, to allow  destruction of an asset class. 

   The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`. 

   - `id`: The identifier of the asset to be destroyed. This must identify an existing  asset. 
 
### thaw(id: `StagingXcmV4Location`, who: `MultiAddress`)
- **interface**: `api.tx.foreignAssets.thaw`
- **summary**:    Allow unprivileged transfers to and from an account again. 

   Origin must be Signed and the sender should be the Admin of the asset `id`. 

   - `id`: The identifier of the asset to be frozen. 

  - `who`: The account to be unfrozen.

   Emits `Thawed`. 

   Weight: `O(1)` 
 
### thawAsset(id: `StagingXcmV4Location`)
- **interface**: `api.tx.foreignAssets.thawAsset`
- **summary**:    Allow unprivileged transfers for the asset again. 

   Origin must be Signed and the sender should be the Admin of the asset `id`. 

   - `id`: The identifier of the asset to be thawed. 

   Emits `Thawed`. 

   Weight: `O(1)` 
 
### touch(id: `StagingXcmV4Location`)
- **interface**: `api.tx.foreignAssets.touch`
- **summary**:    Create an asset account for non-provider assets. 

   A deposit will be taken from the signer account. 

   - `origin`: Must be Signed; the signer account must have sufficient funds for a deposit  to be taken. 

  - `id`: The identifier of the asset for the account to be created.

   Emits `Touched` event when successful. 
 
### touchOther(id: `StagingXcmV4Location`, who: `MultiAddress`)
- **interface**: `api.tx.foreignAssets.touchOther`
- **summary**:    Create an asset account for `who`. 

   A deposit will be taken from the signer account. 

   - `origin`: Must be Signed by `Freezer` or `Admin` of the asset `id`; the signer account  must have sufficient funds for a deposit to be taken. 

  - `id`: The identifier of the asset for the account to be created.

  - `who`: The account to be created.

   Emits `Touched` event when successful. 
 
### transfer(id: `StagingXcmV4Location`, target: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.foreignAssets.transfer`
- **summary**:    Move some assets from the sender account to another. 

   Origin must be Signed. 

   - `id`: The identifier of the asset to have some amount transferred. 

  - `target`: The account to be credited.

  - `amount`: The amount by which the sender's balance of assets should be reduced and `target`'s balance increased. The amount actually transferred may be slightly greater in  the case that the transfer would otherwise take the sender balance above zero but below  the minimum balance. Must be greater than zero. 

   Emits `Transferred` with the actual amount transferred. If this takes the source balance  to below the minimum for the asset, then the amount transferred is increased to take it  to zero. 

   Weight: `O(1)`  Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of  `target`. 
 
### transferAll(id: `StagingXcmV4Location`, dest: `MultiAddress`, keep_alive: `bool`)
- **interface**: `api.tx.foreignAssets.transferAll`
- **summary**:    Transfer the entire transferable balance from the caller asset account. 

   NOTE: This function only attempts to transfer _transferable_ balances. This means that  any held, frozen, or minimum balance (when `keep_alive` is `true`), will not be  transferred by this function. To ensure that this function results in a killed account,  you might need to prepare the account by removing any reference counters, storage  deposits, etc... 

   The dispatch origin of this call must be Signed. 

   - `id`: The identifier of the asset for the account holding a deposit. 

  - `dest`: The recipient of the transfer.

  - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all of the funds the asset account has, causing the sender asset account to be killed  (false), or transfer everything except at least the minimum balance, which will  guarantee to keep the sender asset account alive (true). 
 
### transferApproved(id: `StagingXcmV4Location`, owner: `MultiAddress`, destination: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.foreignAssets.transferApproved`
- **summary**:    Transfer some asset balance from a previously delegated account to some third-party  account. 

   Origin must be Signed and there must be an approval in place by the `owner` to the  signer. 

   If the entire amount approved for transfer is transferred, then any deposit previously  reserved by `approve_transfer` is unreserved. 

   - `id`: The identifier of the asset. 

  - `owner`: The account which previously approved for a transfer of at least `amount` and from which the asset balance will be withdrawn. 

  - `destination`: The account to which the asset balance of `amount` will be transferred.

  - `amount`: The amount of assets to transfer.

   Emits `TransferredApproved` on success. 

   Weight: `O(1)` 
 
### transferKeepAlive(id: `StagingXcmV4Location`, target: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.foreignAssets.transferKeepAlive`
- **summary**:    Move some assets from the sender account to another, keeping the sender account alive. 

   Origin must be Signed. 

   - `id`: The identifier of the asset to have some amount transferred. 

  - `target`: The account to be credited.

  - `amount`: The amount by which the sender's balance of assets should be reduced and `target`'s balance increased. The amount actually transferred may be slightly greater in  the case that the transfer would otherwise take the sender balance above zero but below  the minimum balance. Must be greater than zero. 

   Emits `Transferred` with the actual amount transferred. If this takes the source balance  to below the minimum for the asset, then the amount transferred is increased to take it  to zero. 

   Weight: `O(1)`  Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of  `target`. 
 
### transferOwnership(id: `StagingXcmV4Location`, owner: `MultiAddress`)
- **interface**: `api.tx.foreignAssets.transferOwnership`
- **summary**:    Change the Owner of an asset. 

   Origin must be Signed and the sender should be the Owner of the asset `id`. 

   - `id`: The identifier of the asset. 

  - `owner`: The new Owner of this asset.

   Emits `OwnerChanged`. 

   Weight: `O(1)` 

___


## messageQueue
 
### executeOverweight(message_origin: `CumulusPrimitivesCoreAggregateMessageOrigin`, page: `u32`, index: `u32`, weight_limit: `SpWeightsWeightV2Weight`)
- **interface**: `api.tx.messageQueue.executeOverweight`
- **summary**:    Execute an overweight message. 

   Temporary processing errors will be propagated whereas permanent errors are treated  as success condition. 

   - `origin`: Must be `Signed`. 

  - `message_origin`: The origin from which the message to be executed arrived.

  - `page`: The page in the queue in which the message to be executed is sitting.

  - `index`: The index into the queue of the message to be executed.

  - `weight_limit`: The maximum amount of weight allowed to be consumed in the execution of the message. 

   Benchmark complexity considerations: O(index + weight_limit). 
 
### reapPage(message_origin: `CumulusPrimitivesCoreAggregateMessageOrigin`, page_index: `u32`)
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


## nfts
 
### approveItemAttributes(collection: `u32`, item: `u32`, delegate: `MultiAddress`)
- **interface**: `api.tx.nfts.approveItemAttributes`
- **summary**:    Approve item's attributes to be changed by a delegated third-party account. 

   Origin must be Signed and must be an owner of the `item`. 

   - `collection`: A collection of the item. 

  - `item`: The item that holds attributes.

  - `delegate`: The account to delegate permission to change attributes of the item.

   Emits `ItemAttributesApprovalAdded` on success. 
 
### approveTransfer(collection: `u32`, item: `u32`, delegate: `MultiAddress`, maybe_deadline: `Option<u32>`)
- **interface**: `api.tx.nfts.approveTransfer`
- **summary**:    Approve an item to be transferred by a delegated third-party account. 

   Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the  `item`. 

   - `collection`: The collection of the item to be approved for delegated transfer. 

  - `item`: The item to be approved for delegated transfer.

  - `delegate`: The account to delegate permission to transfer the item.

  - `maybe_deadline`: Optional deadline for the approval. Specified by providing the number of blocks after which the approval will expire 

   Emits `TransferApproved` on success. 

   Weight: `O(1)` 
 
### burn(collection: `u32`, item: `u32`)
- **interface**: `api.tx.nfts.burn`
- **summary**:    Destroy a single item. 

   The origin must conform to `ForceOrigin` or must be Signed and the signing account must  be the owner of the `item`. 

   - `collection`: The collection of the item to be burned. 

  - `item`: The item to be burned.

   Emits `Burned`. 

   Weight: `O(1)` 
 
### buyItem(collection: `u32`, item: `u32`, bid_price: `u128`)
- **interface**: `api.tx.nfts.buyItem`
- **summary**:    Allows to buy an item if it's up for sale. 

   Origin must be Signed and must not be the owner of the `item`. 

   - `collection`: The collection of the item. 

  - `item`: The item the sender wants to buy.

  - `bid_price`: The price the sender is willing to pay.

   Emits `ItemBought` on success. 
 
### cancelApproval(collection: `u32`, item: `u32`, delegate: `MultiAddress`)
- **interface**: `api.tx.nfts.cancelApproval`
- **summary**:    Cancel one of the transfer approvals for a specific item. 

   Origin must be either: 

  - the `Force` origin;

  - `Signed` with the signer being the Owner of the `item`;

   Arguments: 

  - `collection`: The collection of the item of whose approval will be cancelled.

  - `item`: The item of the collection of whose approval will be cancelled.

  - `delegate`: The account that is going to loose their approval.

   Emits `ApprovalCancelled` on success. 

   Weight: `O(1)` 
 
### cancelItemAttributesApproval(collection: `u32`, item: `u32`, delegate: `MultiAddress`, witness: `PalletNftsCancelAttributesApprovalWitness`)
- **interface**: `api.tx.nfts.cancelItemAttributesApproval`
- **summary**:    Cancel the previously provided approval to change item's attributes.  All the previously set attributes by the `delegate` will be removed. 

   Origin must be Signed and must be an owner of the `item`. 

   - `collection`: Collection that the item is contained within. 

  - `item`: The item that holds attributes.

  - `delegate`: The previously approved account to remove.

   Emits `ItemAttributesApprovalRemoved` on success. 
 
### cancelSwap(offered_collection: `u32`, offered_item: `u32`)
- **interface**: `api.tx.nfts.cancelSwap`
- **summary**:    Cancel an atomic swap. 

   Origin must be Signed.  Origin must be an owner of the `item` if the deadline hasn't expired. 

   - `collection`: The collection of the item. 

  - `item`: The item an owner wants to give.

   Emits `SwapCancelled` on success. 
 
### claimSwap(send_collection: `u32`, send_item: `u32`, receive_collection: `u32`, receive_item: `u32`, witness_price: `Option<PalletNftsPriceWithDirection>`)
- **interface**: `api.tx.nfts.claimSwap`
- **summary**:    Claim an atomic swap.  This method executes a pending swap, that was created by a counterpart before. 

   Origin must be Signed and must be an owner of the `item`. 

   - `send_collection`: The collection of the item to be sent. 

  - `send_item`: The item to be sent.

  - `receive_collection`: The collection of the item to be received.

  - `receive_item`: The item to be received.

  - `witness_price`: A price that was previously agreed on.

   Emits `SwapClaimed` on success. 
 
### clearAllTransferApprovals(collection: `u32`, item: `u32`)
- **interface**: `api.tx.nfts.clearAllTransferApprovals`
- **summary**:    Cancel all the approvals of a specific item. 

   Origin must be either: 

  - the `Force` origin;

  - `Signed` with the signer being the Owner of the `item`;

   Arguments: 

  - `collection`: The collection of the item of whose approvals will be cleared.

  - `item`: The item of the collection of whose approvals will be cleared.

   Emits `AllApprovalsCancelled` on success. 

   Weight: `O(1)` 
 
### clearAttribute(collection: `u32`, maybe_item: `Option<u32>`, namespace: `PalletNftsAttributeNamespace`, key: `Bytes`)
- **interface**: `api.tx.nfts.clearAttribute`
- **summary**:    Clear an attribute for a collection or item. 

   Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the  attribute. 

   Any deposit is freed for the collection's owner. 

   - `collection`: The identifier of the collection whose item's metadata to clear. 

  - `maybe_item`: The identifier of the item whose metadata to clear.

  - `namespace`: Attribute's namespace.

  - `key`: The key of the attribute.

   Emits `AttributeCleared`. 

   Weight: `O(1)` 
 
### clearCollectionMetadata(collection: `u32`)
- **interface**: `api.tx.nfts.clearCollectionMetadata`
- **summary**:    Clear the metadata for a collection. 

   Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of  the `collection`. 

   Any deposit is freed for the collection's owner. 

   - `collection`: The identifier of the collection whose metadata to clear. 

   Emits `CollectionMetadataCleared`. 

   Weight: `O(1)` 
 
### clearMetadata(collection: `u32`, item: `u32`)
- **interface**: `api.tx.nfts.clearMetadata`
- **summary**:    Clear the metadata for an item. 

   Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the  `collection`. 

   Any deposit is freed for the collection's owner. 

   - `collection`: The identifier of the collection whose item's metadata to clear. 

  - `item`: The identifier of the item whose metadata to clear.

   Emits `ItemMetadataCleared`. 

   Weight: `O(1)` 
 
### create(admin: `MultiAddress`, config: `PalletNftsCollectionConfig`)
- **interface**: `api.tx.nfts.create`
- **summary**:    Issue a new collection of non-fungible items from a public origin. 

   This new collection has no items initially and its owner is the origin. 

   The origin must be Signed and the sender must have sufficient funds free. 

   `CollectionDeposit` funds of sender are reserved. 

   Parameters: 

  - `admin`: The admin of this collection. The admin is the initial address of each member of the collection's admin team. 

   Emits `Created` event when successful. 

   Weight: `O(1)` 
 
### createSwap(offered_collection: `u32`, offered_item: `u32`, desired_collection: `u32`, maybe_desired_item: `Option<u32>`, maybe_price: `Option<PalletNftsPriceWithDirection>`, duration: `u32`)
- **interface**: `api.tx.nfts.createSwap`
- **summary**:    Register a new atomic swap, declaring an intention to send an `item` in exchange for  `desired_item` from origin to target on the current blockchain.  The target can execute the swap during the specified `duration` of blocks (if set).  Additionally, the price could be set for the desired `item`. 

   Origin must be Signed and must be an owner of the `item`. 

   - `collection`: The collection of the item. 

  - `item`: The item an owner wants to give.

  - `desired_collection`: The collection of the desired item.

  - `desired_item`: The desired item an owner wants to receive.

  - `maybe_price`: The price an owner is willing to pay or receive for the desired `item`.

  - `duration`: A deadline for the swap. Specified by providing the number of blocks after which the swap will expire. 

   Emits `SwapCreated` on success. 
 
### destroy(collection: `u32`, witness: `PalletNftsDestroyWitness`)
- **interface**: `api.tx.nfts.destroy`
- **summary**:    Destroy a collection of fungible items. 

   The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the  owner of the `collection`. 

   NOTE: The collection must have 0 items to be destroyed. 

   - `collection`: The identifier of the collection to be destroyed. 

  - `witness`: Information on the items minted in the collection. This must be correct. 

   Emits `Destroyed` event when successful. 

   Weight: `O(m + c + a)` where: 

  - `m = witness.item_metadatas`

  - `c = witness.item_configs`

  - `a = witness.attributes`
 
### forceCollectionConfig(collection: `u32`, config: `PalletNftsCollectionConfig`)
- **interface**: `api.tx.nfts.forceCollectionConfig`
- **summary**:    Change the config of a collection. 

   Origin must be `ForceOrigin`. 

   - `collection`: The identifier of the collection. 

  - `config`: The new config of this collection.

   Emits `CollectionConfigChanged`. 

   Weight: `O(1)` 
 
### forceCollectionOwner(collection: `u32`, owner: `MultiAddress`)
- **interface**: `api.tx.nfts.forceCollectionOwner`
- **summary**:    Change the Owner of a collection. 

   Origin must be `ForceOrigin`. 

   - `collection`: The identifier of the collection. 

  - `owner`: The new Owner of this collection.

   Emits `OwnerChanged`. 

   Weight: `O(1)` 
 
### forceCreate(owner: `MultiAddress`, config: `PalletNftsCollectionConfig`)
- **interface**: `api.tx.nfts.forceCreate`
- **summary**:    Issue a new collection of non-fungible items from a privileged origin. 

   This new collection has no items initially. 

   The origin must conform to `ForceOrigin`. 

   Unlike `create`, no funds are reserved. 

   - `owner`: The owner of this collection of items. The owner has full superuser  permissions over this item, but may later change and configure the permissions using  `transfer_ownership` and `set_team`. 

   Emits `ForceCreated` event when successful. 

   Weight: `O(1)` 
 
### forceMint(collection: `u32`, item: `u32`, mint_to: `MultiAddress`, item_config: `PalletNftsItemConfig`)
- **interface**: `api.tx.nfts.forceMint`
- **summary**:    Mint an item of a particular collection from a privileged origin. 

   The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the  Issuer of the `collection`. 

   - `collection`: The collection of the item to be minted. 

  - `item`: An identifier of the new item.

  - `mint_to`: Account into which the item will be minted.

  - `item_config`: A config of the new item.

   Emits `Issued` event when successful. 

   Weight: `O(1)` 
 
### forceSetAttribute(set_as: `Option<AccountId32>`, collection: `u32`, maybe_item: `Option<u32>`, namespace: `PalletNftsAttributeNamespace`, key: `Bytes`, value: `Bytes`)
- **interface**: `api.tx.nfts.forceSetAttribute`
- **summary**:    Force-set an attribute for a collection or item. 

   Origin must be `ForceOrigin`. 

   If the attribute already exists and it was set by another account, the deposit  will be returned to the previous owner. 

   - `set_as`: An optional owner of the attribute. 

  - `collection`: The identifier of the collection whose item's metadata to set.

  - `maybe_item`: The identifier of the item whose metadata to set.

  - `namespace`: Attribute's namespace.

  - `key`: The key of the attribute.

  - `value`: The value to which to set the attribute.

   Emits `AttributeSet`. 

   Weight: `O(1)` 
 
### lockCollection(collection: `u32`, lock_settings: `u64`)
- **interface**: `api.tx.nfts.lockCollection`
- **summary**:    Disallows specified settings for the whole collection. 

   Origin must be Signed and the sender should be the Owner of the `collection`. 

   - `collection`: The collection to be locked. 

  - `lock_settings`: The settings to be locked.

   Note: it's possible to only lock(set) the setting, but not to unset it. 

   Emits `CollectionLocked`. 

   Weight: `O(1)` 
 
### lockItemProperties(collection: `u32`, item: `u32`, lock_metadata: `bool`, lock_attributes: `bool`)
- **interface**: `api.tx.nfts.lockItemProperties`
- **summary**:    Disallows changing the metadata or attributes of the item. 

   Origin must be either `ForceOrigin` or Signed and the sender should be the Admin  of the `collection`. 

   - `collection`: The collection if the `item`. 

  - `item`: An item to be locked.

  - `lock_metadata`: Specifies whether the metadata should be locked.

  - `lock_attributes`: Specifies whether the attributes in the `CollectionOwner` namespace should be locked. 

   Note: `lock_attributes` affects the attributes in the `CollectionOwner` namespace only.  When the metadata or attributes are locked, it won't be possible the unlock them. 

   Emits `ItemPropertiesLocked`. 

   Weight: `O(1)` 
 
### lockItemTransfer(collection: `u32`, item: `u32`)
- **interface**: `api.tx.nfts.lockItemTransfer`
- **summary**:    Disallow further unprivileged transfer of an item. 

   Origin must be Signed and the sender should be the Freezer of the `collection`. 

   - `collection`: The collection of the item to be changed. 

  - `item`: The item to become non-transferable.

   Emits `ItemTransferLocked`. 

   Weight: `O(1)` 
 
### mint(collection: `u32`, item: `u32`, mint_to: `MultiAddress`, witness_data: `Option<PalletNftsMintWitness>`)
- **interface**: `api.tx.nfts.mint`
- **summary**:    Mint an item of a particular collection. 

   The origin must be Signed and the sender must comply with the `mint_settings` rules. 

   - `collection`: The collection of the item to be minted. 

  - `item`: An identifier of the new item.

  - `mint_to`: Account into which the item will be minted.

  - `witness_data`: When the mint type is `HolderOf(collection_id)`, then the owned item_id from that collection needs to be provided within the witness data object. If  the mint price is set, then it should be additionally confirmed in the `witness_data`. 

   Note: the deposit will be taken from the `origin` and not the `owner` of the `item`. 

   Emits `Issued` event when successful. 

   Weight: `O(1)` 
 
### mintPreSigned(mint_data: `PalletNftsPreSignedMint`, signature: `SpRuntimeMultiSignature`, signer: `AccountId32`)
- **interface**: `api.tx.nfts.mintPreSigned`
- **summary**:    Mint an item by providing the pre-signed approval. 

   Origin must be Signed. 

   - `mint_data`: The pre-signed approval that consists of the information about the item,  its metadata, attributes, who can mint it (`None` for anyone) and until what block  number. 

  - `signature`: The signature of the `data` object.

  - `signer`: The `data` object's signer. Should be an Issuer of the collection.

   Emits `Issued` on success.  Emits `AttributeSet` if the attributes were provided.  Emits `ItemMetadataSet` if the metadata was not empty. 
 
### payTips(tips: `Vec<PalletNftsItemTip>`)
- **interface**: `api.tx.nfts.payTips`
- **summary**:    Allows to pay the tips. 

   Origin must be Signed. 

   - `tips`: Tips array. 

   Emits `TipSent` on every tip transfer. 
 
### redeposit(collection: `u32`, items: `Vec<u32>`)
- **interface**: `api.tx.nfts.redeposit`
- **summary**:    Re-evaluate the deposits on some items. 

   Origin must be Signed and the sender should be the Owner of the `collection`. 

   - `collection`: The collection of the items to be reevaluated. 

  - `items`: The items of the collection whose deposits will be reevaluated.

   NOTE: This exists as a best-effort function. Any items which are unknown or  in the case that the owner account does not have reservable funds to pay for a  deposit increase are ignored. Generally the owner isn't going to call this on items  whose existing deposit is less than the refreshed deposit as it would only cost them,  so it's of little consequence. 

   It will still return an error in the case that the collection is unknown or the signer  is not permitted to call it. 

   Weight: `O(items.len())` 
 
### setAcceptOwnership(maybe_collection: `Option<u32>`)
- **interface**: `api.tx.nfts.setAcceptOwnership`
- **summary**:    Set (or reset) the acceptance of ownership for a particular account. 

   Origin must be `Signed` and if `maybe_collection` is `Some`, then the signer must have a  provider reference. 

   - `maybe_collection`: The identifier of the collection whose ownership the signer is  willing to accept, or if `None`, an indication that the signer is willing to accept no  ownership transferal. 

   Emits `OwnershipAcceptanceChanged`. 
 
### setAttribute(collection: `u32`, maybe_item: `Option<u32>`, namespace: `PalletNftsAttributeNamespace`, key: `Bytes`, value: `Bytes`)
- **interface**: `api.tx.nfts.setAttribute`
- **summary**:    Set an attribute for a collection or item. 

   Origin must be Signed and must conform to the namespace ruleset: 

  - `CollectionOwner` namespace could be modified by the `collection` Admin only;

  - `ItemOwner` namespace could be modified by the `maybe_item` owner only. `maybe_item` should be set in that case; 

  - `Account(AccountId)` namespace could be modified only when the `origin` was given a permission to do so; 

   The funds of `origin` are reserved according to the formula:  `AttributeDepositBase + DepositPerByte * (key.len + value.len)` taking into  account any already reserved funds. 

   - `collection`: The identifier of the collection whose item's metadata to set. 

  - `maybe_item`: The identifier of the item whose metadata to set.

  - `namespace`: Attribute's namespace.

  - `key`: The key of the attribute.

  - `value`: The value to which to set the attribute.

   Emits `AttributeSet`. 

   Weight: `O(1)` 
 
### setAttributesPreSigned(data: `PalletNftsPreSignedAttributes`, signature: `SpRuntimeMultiSignature`, signer: `AccountId32`)
- **interface**: `api.tx.nfts.setAttributesPreSigned`
- **summary**:    Set attributes for an item by providing the pre-signed approval. 

   Origin must be Signed and must be an owner of the `data.item`. 

   - `data`: The pre-signed approval that consists of the information about the item,  attributes to update and until what block number. 

  - `signature`: The signature of the `data` object.

  - `signer`: The `data` object's signer. Should be an Admin of the collection for the `CollectionOwner` namespace. 

   Emits `AttributeSet` for each provided attribute.  Emits `ItemAttributesApprovalAdded` if the approval wasn't set before.  Emits `PreSignedAttributesSet` on success. 
 
### setCollectionMaxSupply(collection: `u32`, max_supply: `u32`)
- **interface**: `api.tx.nfts.setCollectionMaxSupply`
- **summary**:    Set the maximum number of items a collection could have. 

   Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of  the `collection`. 

   - `collection`: The identifier of the collection to change. 

  - `max_supply`: The maximum number of items a collection could have.

   Emits `CollectionMaxSupplySet` event when successful. 
 
### setCollectionMetadata(collection: `u32`, data: `Bytes`)
- **interface**: `api.tx.nfts.setCollectionMetadata`
- **summary**:    Set the metadata for a collection. 

   Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of  the `collection`. 

   If the origin is `Signed`, then funds of signer are reserved according to the formula:  `MetadataDepositBase + DepositPerByte * data.len` taking into  account any already reserved funds. 

   - `collection`: The identifier of the item whose metadata to update. 

  - `data`: The general information of this item. Limited in length by `StringLimit`.

   Emits `CollectionMetadataSet`. 

   Weight: `O(1)` 
 
### setMetadata(collection: `u32`, item: `u32`, data: `Bytes`)
- **interface**: `api.tx.nfts.setMetadata`
- **summary**:    Set the metadata for an item. 

   Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the  `collection`. 

   If the origin is Signed, then funds of signer are reserved according to the formula:  `MetadataDepositBase + DepositPerByte * data.len` taking into  account any already reserved funds. 

   - `collection`: The identifier of the collection whose item's metadata to set. 

  - `item`: The identifier of the item whose metadata to set.

  - `data`: The general information of this item. Limited in length by `StringLimit`.

   Emits `ItemMetadataSet`. 

   Weight: `O(1)` 
 
### setPrice(collection: `u32`, item: `u32`, price: `Option<u128>`, whitelisted_buyer: `Option<MultiAddress>`)
- **interface**: `api.tx.nfts.setPrice`
- **summary**:    Set (or reset) the price for an item. 

   Origin must be Signed and must be the owner of the `item`. 

   - `collection`: The collection of the item. 

  - `item`: The item to set the price for.

  - `price`: The price for the item. Pass `None`, to reset the price.

  - `buyer`: Restricts the buy operation to a specific account.

   Emits `ItemPriceSet` on success if the price is not `None`.  Emits `ItemPriceRemoved` on success if the price is `None`. 
 
### setTeam(collection: `u32`, issuer: `Option<MultiAddress>`, admin: `Option<MultiAddress>`, freezer: `Option<MultiAddress>`)
- **interface**: `api.tx.nfts.setTeam`
- **summary**:    Change the Issuer, Admin and Freezer of a collection. 

   Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the  `collection`. 

   Note: by setting the role to `None` only the `ForceOrigin` will be able to change it  after to `Some(account)`. 

   - `collection`: The collection whose team should be changed. 

  - `issuer`: The new Issuer of this collection.

  - `admin`: The new Admin of this collection.

  - `freezer`: The new Freezer of this collection.

   Emits `TeamChanged`. 

   Weight: `O(1)` 
 
### transfer(collection: `u32`, item: `u32`, dest: `MultiAddress`)
- **interface**: `api.tx.nfts.transfer`
- **summary**:    Move an item from the sender account to another. 

   Origin must be Signed and the signing account must be either: 

  - the Owner of the `item`;

  - the approved delegate for the `item` (in this case, the approval is reset).

   Arguments: 

  - `collection`: The collection of the item to be transferred.

  - `item`: The item to be transferred.

  - `dest`: The account to receive ownership of the item.

   Emits `Transferred`. 

   Weight: `O(1)` 
 
### transferOwnership(collection: `u32`, new_owner: `MultiAddress`)
- **interface**: `api.tx.nfts.transferOwnership`
- **summary**:    Change the Owner of a collection. 

   Origin must be Signed and the sender should be the Owner of the `collection`. 

   - `collection`: The collection whose owner should be changed. 

  - `owner`: The new Owner of this collection. They must have called `set_accept_ownership` with `collection` in order for this operation to succeed. 

   Emits `OwnerChanged`. 

   Weight: `O(1)` 
 
### unlockItemTransfer(collection: `u32`, item: `u32`)
- **interface**: `api.tx.nfts.unlockItemTransfer`
- **summary**:    Re-allow unprivileged transfer of an item. 

   Origin must be Signed and the sender should be the Freezer of the `collection`. 

   - `collection`: The collection of the item to be changed. 

  - `item`: The item to become transferable.

   Emits `ItemTransferUnlocked`. 

   Weight: `O(1)` 
 
### updateMintSettings(collection: `u32`, mint_settings: `PalletNftsMintSettings`)
- **interface**: `api.tx.nfts.updateMintSettings`
- **summary**:    Update mint settings. 

   Origin must be either `ForceOrigin` or `Signed` and the sender should be the Issuer  of the `collection`. 

   - `collection`: The identifier of the collection to change. 

  - `mint_settings`: The new mint settings.

   Emits `CollectionMintSettingsUpdated` event when successful. 

___


## parachainInfo

___


## parachainSystem
 
### setValidationData(data: `CumulusPrimitivesParachainInherentParachainInherentData`)
- **interface**: `api.tx.parachainSystem.setValidationData`
- **summary**:    Set the current validation data. 

   This should be invoked exactly once per block. It will panic at the finalization  phase if the call was not invoked. 

   The dispatch origin for this call must be `Inherent` 

   As a side effect, this function upgrades the current validation function  if the appropriate time has come. 
 
### sudoSendUpwardMessage(message: `Bytes`)
- **interface**: `api.tx.parachainSystem.sudoSendUpwardMessage`

___


## polkadotXcm
 
### claimAssets(assets: `XcmVersionedAssets`, beneficiary: `XcmVersionedLocation`)
- **interface**: `api.tx.polkadotXcm.claimAssets`
- **summary**:    Claims assets trapped on this pallet because of leftover assets during XCM execution. 

   - `origin`: Anyone can call this extrinsic. 

  - `assets`: The exact assets that were trapped. Use the version to specify what version was the latest when they were trapped. 

  - `beneficiary`: The location/account where the claimed assets will be deposited.
 
### execute(message: `XcmVersionedXcm`, max_weight: `SpWeightsWeightV2Weight`)
- **interface**: `api.tx.polkadotXcm.execute`
- **summary**:    Execute an XCM message from a local, signed, origin. 

   An event is deposited indicating whether `msg` could be executed completely or only  partially. 

   No more than `max_weight` will be used in its attempted execution. If this is less than  the maximum amount of weight that the message could take to be executed, then no  execution attempt will be made. 
 
### forceDefaultXcmVersion(maybe_xcm_version: `Option<u32>`)
- **interface**: `api.tx.polkadotXcm.forceDefaultXcmVersion`
- **summary**:    Set a safe XCM version (the version that XCM should be encoded with if the most recent  version a destination can accept is unknown). 

   - `origin`: Must be an origin specified by AdminOrigin. 

  - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
 
### forceSubscribeVersionNotify(location: `XcmVersionedLocation`)
- **interface**: `api.tx.polkadotXcm.forceSubscribeVersionNotify`
- **summary**:    Ask a location to notify us regarding their XCM version and any changes to it. 

   - `origin`: Must be an origin specified by AdminOrigin. 

  - `location`: The location to which we should subscribe for XCM version notifications.
 
### forceSuspension(suspended: `bool`)
- **interface**: `api.tx.polkadotXcm.forceSuspension`
- **summary**:    Set or unset the global suspension state of the XCM executor. 

   - `origin`: Must be an origin specified by AdminOrigin. 

  - `suspended`: `true` to suspend, `false` to resume.
 
### forceUnsubscribeVersionNotify(location: `XcmVersionedLocation`)
- **interface**: `api.tx.polkadotXcm.forceUnsubscribeVersionNotify`
- **summary**:    Require that a particular destination should no longer notify us regarding any XCM  version changes. 

   - `origin`: Must be an origin specified by AdminOrigin. 

  - `location`: The location to which we are currently subscribed for XCM version notifications which we no longer desire. 
 
### forceXcmVersion(location: `StagingXcmV4Location`, version: `u32`)
- **interface**: `api.tx.polkadotXcm.forceXcmVersion`
- **summary**:    Extoll that a particular destination can be communicated with through a particular  version of XCM. 

   - `origin`: Must be an origin specified by AdminOrigin. 

  - `location`: The destination that is being described.

  - `xcm_version`: The latest version of XCM that `location` supports.
 
### limitedReserveTransferAssets(dest: `XcmVersionedLocation`, beneficiary: `XcmVersionedLocation`, assets: `XcmVersionedAssets`, fee_asset_item: `u32`, weight_limit: `XcmV3WeightLimit`)
- **interface**: `api.tx.polkadotXcm.limitedReserveTransferAssets`
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
- **interface**: `api.tx.polkadotXcm.limitedTeleportAssets`
- **summary**:    Teleport some assets from the local chain to some destination chain. 

   Fee payment on the destination side is made from the asset in the `assets` vector of  index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight  is needed than `weight_limit`, then the operation will fail and the sent assets may be  at risk. 

   - `origin`: Must be capable of withdrawing the `assets` and executing XCM. 

  - `dest`: Destination context for the assets. Will typically be `[Parent, Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from  relay to parachain. 

  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be an `AccountId32` value. 

  - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the `dest` chain. 

  - `fee_asset_item`: The index into `assets` of the item which should be used to pay fees. 

  - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 
### reserveTransferAssets(dest: `XcmVersionedLocation`, beneficiary: `XcmVersionedLocation`, assets: `XcmVersionedAssets`, fee_asset_item: `u32`)
- **interface**: `api.tx.polkadotXcm.reserveTransferAssets`
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
- **interface**: `api.tx.polkadotXcm.send`
 
### teleportAssets(dest: `XcmVersionedLocation`, beneficiary: `XcmVersionedLocation`, assets: `XcmVersionedAssets`, fee_asset_item: `u32`)
- **interface**: `api.tx.polkadotXcm.teleportAssets`
- **summary**:    Teleport some assets from the local chain to some destination chain. 

   **This function is deprecated: Use `limited_teleport_assets` instead.** 

   Fee payment on the destination side is made from the asset in the `assets` vector of  index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,  with all fees taken as needed from the asset. 

   - `origin`: Must be capable of withdrawing the `assets` and executing XCM. 

  - `dest`: Destination context for the assets. Will typically be `[Parent, Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from  relay to parachain. 

  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be an `AccountId32` value. 

  - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the `dest` chain. 

  - `fee_asset_item`: The index into `assets` of the item which should be used to pay fees. 
 
### transferAssets(dest: `XcmVersionedLocation`, beneficiary: `XcmVersionedLocation`, assets: `XcmVersionedAssets`, fee_asset_item: `u32`, weight_limit: `XcmV3WeightLimit`)
- **interface**: `api.tx.polkadotXcm.transferAssets`
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
- **interface**: `api.tx.polkadotXcm.transferAssetsUsingTypeAndThen`
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

___


## poolAssets
 
### approveTransfer(id: `u32`, delegate: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.poolAssets.approveTransfer`
- **summary**:    Approve an amount of asset for transfer by a delegated third-party account. 

   Origin must be Signed. 

   Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account  for the purpose of holding the approval. If some non-zero amount of assets is already  approved from signing account to `delegate`, then it is topped up or unreserved to  meet the right value. 

   NOTE: The signing account does not need to own `amount` of assets at the point of  making this call. 

   - `id`: The identifier of the asset. 

  - `delegate`: The account to delegate permission to transfer asset.

  - `amount`: The amount of asset that may be transferred by `delegate`. If there is already an approval in place, then this acts additively. 

   Emits `ApprovedTransfer` on success. 

   Weight: `O(1)` 
 
### block(id: `u32`, who: `MultiAddress`)
- **interface**: `api.tx.poolAssets.block`
- **summary**:    Disallow further unprivileged transfers of an asset `id` to and from an account `who`. 

   Origin must be Signed and the sender should be the Freezer of the asset `id`. 

   - `id`: The identifier of the account's asset. 

  - `who`: The account to be unblocked.

   Emits `Blocked`. 

   Weight: `O(1)` 
 
### burn(id: `u32`, who: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.poolAssets.burn`
- **summary**:    Reduce the balance of `who` by as much as possible up to `amount` assets of `id`. 

   Origin must be Signed and the sender should be the Manager of the asset `id`. 

   Bails with `NoAccount` if the `who` is already dead. 

   - `id`: The identifier of the asset to have some amount burned. 

  - `who`: The account to be debited from.

  - `amount`: The maximum amount by which `who`'s balance should be reduced.

   Emits `Burned` with the actual amount burned. If this takes the balance to below the  minimum for the asset, then the amount burned is increased to take it to zero. 

   Weight: `O(1)`  Modes: Post-existence of `who`; Pre & post Zombie-status of `who`. 
 
### cancelApproval(id: `u32`, delegate: `MultiAddress`)
- **interface**: `api.tx.poolAssets.cancelApproval`
- **summary**:    Cancel all of some asset approved for delegated transfer by a third-party account. 

   Origin must be Signed and there must be an approval in place between signer and  `delegate`. 

   Unreserves any deposit previously reserved by `approve_transfer` for the approval. 

   - `id`: The identifier of the asset. 

  - `delegate`: The account delegated permission to transfer asset.

   Emits `ApprovalCancelled` on success. 

   Weight: `O(1)` 
 
### clearMetadata(id: `u32`)
- **interface**: `api.tx.poolAssets.clearMetadata`
- **summary**:    Clear the metadata for an asset. 

   Origin must be Signed and the sender should be the Owner of the asset `id`. 

   Any deposit is freed for the asset owner. 

   - `id`: The identifier of the asset to clear. 

   Emits `MetadataCleared`. 

   Weight: `O(1)` 
 
### create(id: `u32`, admin: `MultiAddress`, min_balance: `u128`)
- **interface**: `api.tx.poolAssets.create`
- **summary**:    Issue a new class of fungible assets from a public origin. 

   This new asset class has no assets initially and its owner is the origin. 

   The origin must conform to the configured `CreateOrigin` and have sufficient funds free. 

   Funds of sender are reserved by `AssetDeposit`. 

   Parameters: 

  - `id`: The identifier of the new asset. This must not be currently in use to identify an existing asset. If [`NextAssetId`] is set, then this must be equal to it. 

  - `admin`: The admin of this class of assets. The admin is the initial address of each member of the asset class's admin team. 

  - `min_balance`: The minimum balance of this new asset that any single account must have. If an account's balance is reduced below this, then it collapses to zero. 

   Emits `Created` event when successful. 

   Weight: `O(1)` 
 
### destroyAccounts(id: `u32`)
- **interface**: `api.tx.poolAssets.destroyAccounts`
- **summary**:    Destroy all accounts associated with a given asset. 

   `destroy_accounts` should only be called after `start_destroy` has been called, and the  asset is in a `Destroying` state. 

   Due to weight restrictions, this function may need to be called multiple times to fully  destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time. 

   - `id`: The identifier of the asset to be destroyed. This must identify an existing  asset. 

   Each call emits the `Event::DestroyedAccounts` event. 
 
### destroyApprovals(id: `u32`)
- **interface**: `api.tx.poolAssets.destroyApprovals`
- **summary**:    Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit). 

   `destroy_approvals` should only be called after `start_destroy` has been called, and the  asset is in a `Destroying` state. 

   Due to weight restrictions, this function may need to be called multiple times to fully  destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time. 

   - `id`: The identifier of the asset to be destroyed. This must identify an existing  asset. 

   Each call emits the `Event::DestroyedApprovals` event. 
 
### finishDestroy(id: `u32`)
- **interface**: `api.tx.poolAssets.finishDestroy`
- **summary**:    Complete destroying asset and unreserve currency. 

   `finish_destroy` should only be called after `start_destroy` has been called, and the  asset is in a `Destroying` state. All accounts or approvals should be destroyed before  hand. 

   - `id`: The identifier of the asset to be destroyed. This must identify an existing  asset. 

   Each successful call emits the `Event::Destroyed` event. 
 
### forceAssetStatus(id: `u32`, owner: `MultiAddress`, issuer: `MultiAddress`, admin: `MultiAddress`, freezer: `MultiAddress`, min_balance: `Compact<u128>`, is_sufficient: `bool`, is_frozen: `bool`)
- **interface**: `api.tx.poolAssets.forceAssetStatus`
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
 
### forceCancelApproval(id: `u32`, owner: `MultiAddress`, delegate: `MultiAddress`)
- **interface**: `api.tx.poolAssets.forceCancelApproval`
- **summary**:    Cancel all of some asset approved for delegated transfer by a third-party account. 

   Origin must be either ForceOrigin or Signed origin with the signer being the Admin  account of the asset `id`. 

   Unreserves any deposit previously reserved by `approve_transfer` for the approval. 

   - `id`: The identifier of the asset. 

  - `delegate`: The account delegated permission to transfer asset.

   Emits `ApprovalCancelled` on success. 

   Weight: `O(1)` 
 
### forceClearMetadata(id: `u32`)
- **interface**: `api.tx.poolAssets.forceClearMetadata`
- **summary**:    Clear the metadata for an asset. 

   Origin must be ForceOrigin. 

   Any deposit is returned. 

   - `id`: The identifier of the asset to clear. 

   Emits `MetadataCleared`. 

   Weight: `O(1)` 
 
### forceCreate(id: `u32`, owner: `MultiAddress`, is_sufficient: `bool`, min_balance: `Compact<u128>`)
- **interface**: `api.tx.poolAssets.forceCreate`
- **summary**:    Issue a new class of fungible assets from a privileged origin. 

   This new asset class has no assets initially. 

   The origin must conform to `ForceOrigin`. 

   Unlike `create`, no funds are reserved. 

   - `id`: The identifier of the new asset. This must not be currently in use to identify  an existing asset. If [`NextAssetId`] is set, then this must be equal to it. 

  - `owner`: The owner of this class of assets. The owner has full superuser permissions over this asset, but may later change and configure the permissions using  `transfer_ownership` and `set_team`. 

  - `min_balance`: The minimum balance of this new asset that any single account must have. If an account's balance is reduced below this, then it collapses to zero. 

   Emits `ForceCreated` event when successful. 

   Weight: `O(1)` 
 
### forceSetMetadata(id: `u32`, name: `Bytes`, symbol: `Bytes`, decimals: `u8`, is_frozen: `bool`)
- **interface**: `api.tx.poolAssets.forceSetMetadata`
- **summary**:    Force the metadata for an asset to some value. 

   Origin must be ForceOrigin. 

   Any deposit is left alone. 

   - `id`: The identifier of the asset to update. 

  - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.

  - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.

  - `decimals`: The number of decimals this asset uses to represent one unit.

   Emits `MetadataSet`. 

   Weight: `O(N + S)` where N and S are the length of the name and symbol respectively. 
 
### forceTransfer(id: `u32`, source: `MultiAddress`, dest: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.poolAssets.forceTransfer`
- **summary**:    Move some assets from one account to another. 

   Origin must be Signed and the sender should be the Admin of the asset `id`. 

   - `id`: The identifier of the asset to have some amount transferred. 

  - `source`: The account to be debited.

  - `dest`: The account to be credited.

  - `amount`: The amount by which the `source`'s balance of assets should be reduced and `dest`'s balance increased. The amount actually transferred may be slightly greater in  the case that the transfer would otherwise take the `source` balance above zero but  below the minimum balance. Must be greater than zero. 

   Emits `Transferred` with the actual amount transferred. If this takes the source balance  to below the minimum for the asset, then the amount transferred is increased to take it  to zero. 

   Weight: `O(1)`  Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of  `dest`. 
 
### freeze(id: `u32`, who: `MultiAddress`)
- **interface**: `api.tx.poolAssets.freeze`
- **summary**:    Disallow further unprivileged transfers of an asset `id` from an account `who`. `who`  must already exist as an entry in `Account`s of the asset. If you want to freeze an  account that does not have an entry, use `touch_other` first. 

   Origin must be Signed and the sender should be the Freezer of the asset `id`. 

   - `id`: The identifier of the asset to be frozen. 

  - `who`: The account to be frozen.

   Emits `Frozen`. 

   Weight: `O(1)` 
 
### freezeAsset(id: `u32`)
- **interface**: `api.tx.poolAssets.freezeAsset`
- **summary**:    Disallow further unprivileged transfers for the asset class. 

   Origin must be Signed and the sender should be the Freezer of the asset `id`. 

   - `id`: The identifier of the asset to be frozen. 

   Emits `Frozen`. 

   Weight: `O(1)` 
 
### mint(id: `u32`, beneficiary: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.poolAssets.mint`
- **summary**:    Mint assets of a particular class. 

   The origin must be Signed and the sender must be the Issuer of the asset `id`. 

   - `id`: The identifier of the asset to have some amount minted. 

  - `beneficiary`: The account to be credited with the minted assets.

  - `amount`: The amount of the asset to be minted.

   Emits `Issued` event when successful. 

   Weight: `O(1)`  Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`. 
 
### refund(id: `u32`, allow_burn: `bool`)
- **interface**: `api.tx.poolAssets.refund`
- **summary**:    Return the deposit (if any) of an asset account or a consumer reference (if any) of an  account. 

   The origin must be Signed. 

   - `id`: The identifier of the asset for which the caller would like the deposit  refunded. 

  - `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.

   Emits `Refunded` event when successful. 
 
### refundOther(id: `u32`, who: `MultiAddress`)
- **interface**: `api.tx.poolAssets.refundOther`
- **summary**:    Return the deposit (if any) of a target asset account. Useful if you are the depositor. 

   The origin must be Signed and either the account owner, depositor, or asset `Admin`. In  order to burn a non-zero balance of the asset, the caller must be the account and should  use `refund`. 

   - `id`: The identifier of the asset for the account holding a deposit. 

  - `who`: The account to refund.

   Emits `Refunded` event when successful. 
 
### setMetadata(id: `u32`, name: `Bytes`, symbol: `Bytes`, decimals: `u8`)
- **interface**: `api.tx.poolAssets.setMetadata`
- **summary**:    Set the metadata for an asset. 

   Origin must be Signed and the sender should be the Owner of the asset `id`. 

   Funds of sender are reserved according to the formula:  `MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into  account any already reserved funds. 

   - `id`: The identifier of the asset to update. 

  - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.

  - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.

  - `decimals`: The number of decimals this asset uses to represent one unit.

   Emits `MetadataSet`. 

   Weight: `O(1)` 
 
### setMinBalance(id: `u32`, min_balance: `u128`)
- **interface**: `api.tx.poolAssets.setMinBalance`
- **summary**:    Sets the minimum balance of an asset. 

   Only works if there aren't any accounts that are holding the asset or if  the new value of `min_balance` is less than the old one. 

   Origin must be Signed and the sender has to be the Owner of the  asset `id`. 

   - `id`: The identifier of the asset. 

  - `min_balance`: The new value of `min_balance`.

   Emits `AssetMinBalanceChanged` event when successful. 
 
### setTeam(id: `u32`, issuer: `MultiAddress`, admin: `MultiAddress`, freezer: `MultiAddress`)
- **interface**: `api.tx.poolAssets.setTeam`
- **summary**:    Change the Issuer, Admin and Freezer of an asset. 

   Origin must be Signed and the sender should be the Owner of the asset `id`. 

   - `id`: The identifier of the asset to be frozen. 

  - `issuer`: The new Issuer of this asset.

  - `admin`: The new Admin of this asset.

  - `freezer`: The new Freezer of this asset.

   Emits `TeamChanged`. 

   Weight: `O(1)` 
 
### startDestroy(id: `u32`)
- **interface**: `api.tx.poolAssets.startDestroy`
- **summary**:    Start the process of destroying a fungible asset class. 

   `start_destroy` is the first in a series of extrinsics that should be called, to allow  destruction of an asset class. 

   The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`. 

   - `id`: The identifier of the asset to be destroyed. This must identify an existing  asset. 
 
### thaw(id: `u32`, who: `MultiAddress`)
- **interface**: `api.tx.poolAssets.thaw`
- **summary**:    Allow unprivileged transfers to and from an account again. 

   Origin must be Signed and the sender should be the Admin of the asset `id`. 

   - `id`: The identifier of the asset to be frozen. 

  - `who`: The account to be unfrozen.

   Emits `Thawed`. 

   Weight: `O(1)` 
 
### thawAsset(id: `u32`)
- **interface**: `api.tx.poolAssets.thawAsset`
- **summary**:    Allow unprivileged transfers for the asset again. 

   Origin must be Signed and the sender should be the Admin of the asset `id`. 

   - `id`: The identifier of the asset to be thawed. 

   Emits `Thawed`. 

   Weight: `O(1)` 
 
### touch(id: `u32`)
- **interface**: `api.tx.poolAssets.touch`
- **summary**:    Create an asset account for non-provider assets. 

   A deposit will be taken from the signer account. 

   - `origin`: Must be Signed; the signer account must have sufficient funds for a deposit  to be taken. 

  - `id`: The identifier of the asset for the account to be created.

   Emits `Touched` event when successful. 
 
### touchOther(id: `u32`, who: `MultiAddress`)
- **interface**: `api.tx.poolAssets.touchOther`
- **summary**:    Create an asset account for `who`. 

   A deposit will be taken from the signer account. 

   - `origin`: Must be Signed by `Freezer` or `Admin` of the asset `id`; the signer account  must have sufficient funds for a deposit to be taken. 

  - `id`: The identifier of the asset for the account to be created.

  - `who`: The account to be created.

   Emits `Touched` event when successful. 
 
### transfer(id: `u32`, target: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.poolAssets.transfer`
- **summary**:    Move some assets from the sender account to another. 

   Origin must be Signed. 

   - `id`: The identifier of the asset to have some amount transferred. 

  - `target`: The account to be credited.

  - `amount`: The amount by which the sender's balance of assets should be reduced and `target`'s balance increased. The amount actually transferred may be slightly greater in  the case that the transfer would otherwise take the sender balance above zero but below  the minimum balance. Must be greater than zero. 

   Emits `Transferred` with the actual amount transferred. If this takes the source balance  to below the minimum for the asset, then the amount transferred is increased to take it  to zero. 

   Weight: `O(1)`  Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of  `target`. 
 
### transferAll(id: `u32`, dest: `MultiAddress`, keep_alive: `bool`)
- **interface**: `api.tx.poolAssets.transferAll`
- **summary**:    Transfer the entire transferable balance from the caller asset account. 

   NOTE: This function only attempts to transfer _transferable_ balances. This means that  any held, frozen, or minimum balance (when `keep_alive` is `true`), will not be  transferred by this function. To ensure that this function results in a killed account,  you might need to prepare the account by removing any reference counters, storage  deposits, etc... 

   The dispatch origin of this call must be Signed. 

   - `id`: The identifier of the asset for the account holding a deposit. 

  - `dest`: The recipient of the transfer.

  - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all of the funds the asset account has, causing the sender asset account to be killed  (false), or transfer everything except at least the minimum balance, which will  guarantee to keep the sender asset account alive (true). 
 
### transferApproved(id: `u32`, owner: `MultiAddress`, destination: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.poolAssets.transferApproved`
- **summary**:    Transfer some asset balance from a previously delegated account to some third-party  account. 

   Origin must be Signed and there must be an approval in place by the `owner` to the  signer. 

   If the entire amount approved for transfer is transferred, then any deposit previously  reserved by `approve_transfer` is unreserved. 

   - `id`: The identifier of the asset. 

  - `owner`: The account which previously approved for a transfer of at least `amount` and from which the asset balance will be withdrawn. 

  - `destination`: The account to which the asset balance of `amount` will be transferred.

  - `amount`: The amount of assets to transfer.

   Emits `TransferredApproved` on success. 

   Weight: `O(1)` 
 
### transferKeepAlive(id: `u32`, target: `MultiAddress`, amount: `Compact<u128>`)
- **interface**: `api.tx.poolAssets.transferKeepAlive`
- **summary**:    Move some assets from the sender account to another, keeping the sender account alive. 

   Origin must be Signed. 

   - `id`: The identifier of the asset to have some amount transferred. 

  - `target`: The account to be credited.

  - `amount`: The amount by which the sender's balance of assets should be reduced and `target`'s balance increased. The amount actually transferred may be slightly greater in  the case that the transfer would otherwise take the sender balance above zero but below  the minimum balance. Must be greater than zero. 

   Emits `Transferred` with the actual amount transferred. If this takes the source balance  to below the minimum for the asset, then the amount transferred is increased to take it  to zero. 

   Weight: `O(1)`  Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of  `target`. 
 
### transferOwnership(id: `u32`, owner: `MultiAddress`)
- **interface**: `api.tx.poolAssets.transferOwnership`
- **summary**:    Change the Owner of an asset. 

   Origin must be Signed and the sender should be the Owner of the asset `id`. 

   - `id`: The identifier of the asset. 

  - `owner`: The new Owner of this asset.

   Emits `OwnerChanged`. 

   Weight: `O(1)` 

___


## proxy
 
### addProxy(delegate: `MultiAddress`, proxy_type: `AssetHubPolkadotRuntimeProxyType`, delay: `u32`)
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
 
### createPure(proxy_type: `AssetHubPolkadotRuntimeProxyType`, delay: `u32`, index: `u16`)
- **interface**: `api.tx.proxy.createPure`
- **summary**:    Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and  initialize it with a proxy of `proxy_type` for `origin` sender. 

   Requires a `Signed` origin. 

   - `proxy_type`: The type of the proxy that the sender will be registered as over the  new account. This will almost always be the most permissive `ProxyType` possible to  allow for maximum flexibility. 

  - `index`: A disambiguation index, in case this is called multiple times in the same transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just  want to use `0`. 

  - `delay`: The announcement period required of the initial proxy. Will generally be zero. 

   Fails with `Duplicate` if this has already been called in this transaction, from the  same sender, with the same parameters. 

   Fails if there are insufficient funds to pay for deposit. 
 
### killPure(spawner: `MultiAddress`, proxy_type: `AssetHubPolkadotRuntimeProxyType`, index: `u16`, height: `Compact<u32>`, ext_index: `Compact<u32>`)
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
 
### proxy(real: `MultiAddress`, force_proxy_type: `Option<AssetHubPolkadotRuntimeProxyType>`, call: `Call`)
- **interface**: `api.tx.proxy.proxy`
- **summary**:    Dispatch the given `call` from an account that the sender is authorised for through  `add_proxy`. 

   The dispatch origin for this call must be _Signed_. 

   Parameters: 

  - `real`: The account that the proxy will make a call on behalf of.

  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.

  - `call`: The call to be made by the `real` account.
 
### proxyAnnounced(delegate: `MultiAddress`, real: `MultiAddress`, force_proxy_type: `Option<AssetHubPolkadotRuntimeProxyType>`, call: `Call`)
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
 
### removeProxy(delegate: `MultiAddress`, proxy_type: `AssetHubPolkadotRuntimeProxyType`, delay: `u32`)
- **interface**: `api.tx.proxy.removeProxy`
- **summary**:    Unregister a proxy account for the sender. 

   The dispatch origin for this call must be _Signed_. 

   Parameters: 

  - `proxy`: The account that the `caller` would like to remove as a proxy.

  - `proxy_type`: The permissions currently enabled for the removed proxy account.

___


## session
 
### purgeKeys()
- **interface**: `api.tx.session.purgeKeys`
- **summary**:    Removes any session key(s) of the function caller. 

   This doesn't take effect until the next session. 

   The dispatch origin of this function must be Signed and the account must be either be  convertible to a validator ID using the chain's typical addressing system (this usually  means being a controller account) or directly convertible into a validator ID (which  usually means being a stash account). 

   #### Complexity 

  - `O(1)` in number of key types. Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed. 
 
### setKeys(keys: `AssetHubPolkadotRuntimeSessionKeys`, proof: `Bytes`)
- **interface**: `api.tx.session.setKeys`
- **summary**:    Sets the session key(s) of the function caller to `keys`.  Allows an account to set its session key prior to becoming a validator.  This doesn't take effect until the next session. 

   The dispatch origin of this function must be signed. 

   #### Complexity 

  - `O(1)`. Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed. 

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


## toKusamaXcmRouter
 
### reportBridgeStatus(bridge_id: `H256`, is_congested: `bool`)
- **interface**: `api.tx.toKusamaXcmRouter.reportBridgeStatus`
- **summary**:    Notification about congested bridge queue. 

___


## uniques
 
### approveTransfer(collection: `u32`, item: `u32`, delegate: `MultiAddress`)
- **interface**: `api.tx.uniques.approveTransfer`
- **summary**:    Approve an item to be transferred by a delegated third-party account. 

   The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be  either the owner of the `item` or the admin of the collection. 

   - `collection`: The collection of the item to be approved for delegated transfer. 

  - `item`: The item of the item to be approved for delegated transfer.

  - `delegate`: The account to delegate permission to transfer the item.

   Important NOTE: The `approved` account gets reset after each transfer. 

   Emits `ApprovedTransfer` on success. 

   Weight: `O(1)` 
 
### burn(collection: `u32`, item: `u32`, check_owner: `Option<MultiAddress>`)
- **interface**: `api.tx.uniques.burn`
- **summary**:    Destroy a single item. 

   Origin must be Signed and the signing account must be either: 

  - the Admin of the `collection`;

  - the Owner of the `item`;

   - `collection`: The collection of the item to be burned. 

  - `item`: The item of the item to be burned.

  - `check_owner`: If `Some` then the operation will fail with `WrongOwner` unless the item is owned by this value. 

   Emits `Burned` with the actual amount burned. 

   Weight: `O(1)`  Modes: `check_owner.is_some()`. 
 
### buyItem(collection: `u32`, item: `u32`, bid_price: `u128`)
- **interface**: `api.tx.uniques.buyItem`
- **summary**:    Allows to buy an item if it's up for sale. 

   Origin must be Signed and must not be the owner of the `item`. 

   - `collection`: The collection of the item. 

  - `item`: The item the sender wants to buy.

  - `bid_price`: The price the sender is willing to pay.

   Emits `ItemBought` on success. 
 
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

   The origin must conform to the configured `CreateOrigin` and have sufficient funds free. 

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
 
### setPrice(collection: `u32`, item: `u32`, price: `Option<u128>`, whitelisted_buyer: `Option<MultiAddress>`)
- **interface**: `api.tx.uniques.setPrice`
- **summary**:    Set (or reset) the price for an item. 

   Origin must be Signed and must be the owner of the asset `item`. 

   - `collection`: The collection of the item. 

  - `item`: The item to set the price for.

  - `price`: The price for the item. Pass `None`, to reset the price.

  - `buyer`: Restricts the buy operation to a specific account.

   Emits `ItemPriceSet` on success if the price is not `None`.  Emits `ItemPriceRemoved` on success if the price is `None`. 
 
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

   This resets the approved account of the item. 

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
 
### transferOwnership(collection: `u32`, new_owner: `MultiAddress`)
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
 
### dispatchAs(as_origin: `AssetHubPolkadotRuntimeOriginCaller`, call: `Call`)
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


## xcmpQueue
 
### resumeXcmExecution()
- **interface**: `api.tx.xcmpQueue.resumeXcmExecution`
- **summary**:    Resumes all XCM executions for the XCMP queue. 

   Note that this function doesn't change the status of the in/out bound channels. 

   - `origin`: Must pass `ControllerOrigin`. 
 
### suspendXcmExecution()
- **interface**: `api.tx.xcmpQueue.suspendXcmExecution`
- **summary**:    Suspends all XCM executions for the XCMP queue, regardless of the sender's origin. 

   - `origin`: Must pass `ControllerOrigin`. 
 
### updateDropThreshold(new: `u32`)
- **interface**: `api.tx.xcmpQueue.updateDropThreshold`
- **summary**:    Overwrites the number of pages which must be in the queue after which we drop any  further messages from the channel. 

   - `origin`: Must pass `Root`. 

  - `new`: Desired value for `QueueConfigData.drop_threshold`
 
### updateResumeThreshold(new: `u32`)
- **interface**: `api.tx.xcmpQueue.updateResumeThreshold`
- **summary**:    Overwrites the number of pages which the queue must be reduced to before it signals  that message sending may recommence after it has been suspended. 

   - `origin`: Must pass `Root`. 

  - `new`: Desired value for `QueueConfigData.resume_threshold`
 
### updateSuspendThreshold(new: `u32`)
- **interface**: `api.tx.xcmpQueue.updateSuspendThreshold`
- **summary**:    Overwrites the number of pages which must be in the queue for the other side to be  told to suspend their sending. 

   - `origin`: Must pass `Root`. 

  - `new`: Desired value for `QueueConfigData.suspend_value`
