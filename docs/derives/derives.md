---
title: Derives
---

This page lists the derives that can be encountered in the different modules. Designed to simplify the process of querying complex on-chain data by combining multiple RPC calls, storage queries, and runtime logic into a single, callable function. 

Instead of manually fetching and processing blockchain data, developers can use `api.derive.<module>.<method>()` to retrieve information.

- **[accounts](#accounts)**

- **[alliance](#alliance)**

- **[bagsList](#bagsList)**

- **[balances](#balances)**

- **[bounties](#bounties)**

- **[chain](#chain)**

- **[contracts](#contracts)**

- **[council](#council)**

- **[crowdloan](#crowdloan)**

- **[democracy](#democracy)**

- **[elections](#elections)**

- **[imOnline](#imOnline)**

- **[membership](#membership)**

- **[parachains](#parachains)**

- **[session](#session)**

- **[society](#society)**

- **[staking](#staking)**

- **[technicalCommittee](#technicalCommittee)**

- **[treasury](#treasury)**

- **[tx](#tx)**


___
## accounts
 
### [accountId](#accountId)
Resolves an address (in different formats) to its corresponding `AccountId`.
- **interface**: `api.derive.accounts.accountId`
- **params**:
  - address `(Address | AccountId | AccountIndex | string | null)`: An accounts address in various formats.

- **example**: 
 ```javascript
 const ALICE = "F7Hs";

 api.derive.accounts.accountId(ALICE, (accountId) => {
   console.log(`Resolved AccountId: ${accountId}`);
 });
 ``` 
### [flags](#flags)
Retrieves the membership flags for a given account.
- **interface**: `api.derive.accounts.flags`
- **params**:
  - address `(AccountId | Address | string | null)`: The account identifier.
 
### [idAndIndex](#idAndIndex)
An array containing the [[AccountId]] and [[AccountIndex]] as optional values.
- **interface**: `api.derive.accounts.idAndIndex`
- **params**:
  - address `(Address | AccountId | AccountIndex | Uint8Array | string | null)`: An accounts address in various formats.

- **example**: 
 ```javascript
 api.derive.accounts.idAndIndex('F7Hs', ([id, ix]) => {
   console.log(`AccountId #${id} with corresponding AccountIndex ${ix}`);
 });
 ``` 
### [idToIndex](#idToIndex)
Retrieves the corresponding AccountIndex.
- **interface**: `api.derive.accounts.idToIndex`
- **params**:
  - accountId `( AccountId | string )`: An accounts Id in different formats.

- **example**: 
 ```javascript
 const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
 api.derive.accounts.idToIndex(ALICE, (accountIndex) => {
   console.log(`The AccountIndex of ${ALICE} is ${accountIndex}`);
 });
 ``` 
### [identity](#identity)
Retrieves the on chain identity information for a given account.
- **interface**: `api.derive.accounts.identity`
- **params**:
  - accoutId `(AccountId | Uint8Array | string)`: The account identifier to query the identity for.

- **example**: 
 ```javascript
 const ALICE = "13xAUH";

 api.derive.accounts.identity(ALICE, (identity) => {
   console.log(
     "Account Identity:",
     Object.keys(identity).map((key) => `${key}: ${identity[key]}`)
   );
 });
 ``` 
### [hasIdentity](#hasIdentity)
Checks if a specific account has an identity registered on chain.
- **interface**: `api.derive.accounts.hasIdentity`
- **params**:
  - accoutId `(AccountId | Uint8Array | string)`: The account identifier to query.

- **example**: 
 ```javascript
 const ALICE = "13AU";
 console.log(await api.derive.accounts.hasIdentity(ALICE));
 ``` 
### [hasIdentityMulti](#hasIdentityMulti)
Checks whether multiple accounts have on chain identities registered.
- **interface**: `api.derive.accounts.hasIdentityMulti`
- **params**:
  - accountIds `(AccountId | Uint8Array | string)[]`: Array of account identifiers to query.

- **example**: 
 ```javascript
 const ALICE = "13AU";
 const BOB = "16WW";
 console.log(await api.derive.accounts.hasIdentityMulti([ALICE, BOB]));
 ``` 
### [indexToId](#indexToId)
Resolves an AccountIndex (short address) to the full AccountId.
- **interface**: `api.derive.accounts.indexToId`
- **params**:
  - accountIndex `( AccountIndex | string )`: An accounts index in different formats.

- **example**: 
 ```javascript
 const ALICE = "13AU";
 const id = await api.derive.accounts.indexToId(ALICE);
 console.log(id);
 ``` 
### [indexes](#indexes)
This is an unwieldly query since it loops through all of the enumsets and returns all of the values found. This could be up to 32k depending on the number of active accounts in the system.
- **interface**: `api.derive.accounts.indexes`
- **returns**: Returns all the indexes on the system.
- **example**: 
 ```javascript
 api.derive.accounts.indexes((indexes) => {
   console.log('All existing AccountIndexes', indexes);
 });
 ``` 
### [info](#info)
Returns aux. info with regards to an account, current that includes the accountId, accountIndex, identity and nickname
- **interface**: `api.derive.accounts.info`
- **params**:
  - address `(AccountIndex | AccountId | Address | Uint8Array | string | null)`: An accounts in different formats.

- **example**: 
 ```javascript
 const ALICE = "13AU";
 const info = await api.derive.accounts.info(ALICE);
 console.log(
   "Account Info: ",
   Object.keys(info).map((key) => `${key}: ${info[key]}`)
 );
 ```
___
## alliance
 
### [members](#members)
Retrieves the list of members in the "allianceMotion" collective.
- **interface**: `api.derive.alliance.members`
- **example**: 
 ```javascript
 const members = await api.derive.alliance.members();
 console.log(`Members: ${JSON.stringify(members)});
 ``` 
### [hasProposals](#hasProposals)
Checks if there are any active proposals in the "allianceMotion" collective.
- **interface**: `api.derive.alliance.hasProposals`
- **example**: 
 ```javascript
 const exists = await api.derive.alliance.hasProposals();
 console.log(exists);
 ``` 
### [proposal](#proposal)
Retrieves details of a specific proposal in the "allianceMotion" collective by its hash.
- **interface**: `api.derive.alliance.proposal`
- **example**: 
 ```javascript
 const proposalDetails = await api.derive.alliance.proposal(PROPOSAL_HASH);
 console.log(proposalDetails);
 ``` 
### [proposalCount](#proposalCount)
Retrieves the total number of proposals in the "allianceMotion" collective.
- **interface**: `api.derive.alliance.proposalCount`
- **example**: 
 ```javascript
 const count = await api.derive.alliance.proposalCount();
 console.log(`Amount of proposals: ${count}`);
 ``` 
### [proposalHashes](#proposalHashes)
Retrieves an array of hashes for all active proposals in the "allianceMotion" collective.
- **interface**: `api.derive.alliance.proposalHashes`
- **example**: 
 ```javascript
 const hashes = await api.derive.alliance.proposalHashes();
 console.log(`Proposals ${JSON.stringify(hashes)}`);
 ``` 
### [proposals](#proposals)
Retrieves a list of all active proposals in the "allianceMotion" collective.
- **interface**: `api.derive.alliance.proposals`
- **example**: 
 ```javascript
 const proposals = await api.derive.alliance.proposals();
 console.log(proposals);
 ``` 
### [prime](#prime)
Retrieves the prime member of the "allianceMotion" collective, if one exists.
- **interface**: `api.derive.alliance.prime`
- **example**: 
 ```javascript
 const primeMember = await api.derive.alliance.prime();
 console.log(primeMember);
 ```
___
## bagsList
 
### [get](#get)
Retrieves a specific bag from the BagsList pallet by its id.
- **interface**: `api.derive.bagsList.get`
- **params**:
  - id `(BN | number)`: The id of the bag to retrieve.
 
### [expand](#expand)
Expands a given bag by retrieving all its nodes (accounts contained within the bag).
- **interface**: `api.derive.bagsList.expand`
- **params**:
  - bag `Bag`: The bag to be expanded.
 
### [getExpanded](#getExpanded)
Retrieves and expands a specific bag from the BagsList pallet.
- **interface**: `api.derive.bagsList.getExpanded`
- **params**:
  - id `BN | number`: The id of the bag to expand.
 
### [listNodes](#listNodes)
Retrieves the list of nodes (accounts) contained in a specific bag within the BagsList pallet.
- **interface**: `api.derive.bagsList.listNodes`
- **params**:
  - bag `(PalletBagsListListBag | null)`: A reference to a specific bag in the BagsList pallet.

___
## balances
 
### [account](#account)
Retrieves the essential balance details for an account, such as free balance and account nonce.
- **interface**: `api.derive.balances.account`
- **params**:
  - address `( AccountIndex | AccountId | Address | string )`: An accountsId in different formats.

- **example**: 
 ```javascript
 const ALICE = 'F7Hs';

 api.derive.balances.account(ALICE, ({ accountId, lockedBalance }) => {
   console.log(`The account ${accountId} has a locked balance ${lockedBalance} units.`);
 });
 ``` 
### [all](#all)
Retrieves the complete balance information for an account, including free balance, locked balance, reserved balance, and more.
- **interface**: `api.derive.balances.all`
- **params**:
  - address `( AccountId | string )`: An accountsId in different formats.

- **example**: 
 ```javascript
 const ALICE = 'F7Hs';

 api.derive.balances.all(ALICE, (accountInfo) => {
   console.log(
     `${accountInfo.accountId} info:`,
     Object.keys(accountInfo).map((key) => `${key}: ${accountInfo[key]}`)
   );
 });
 ``` 
### [votingBalance](#votingBalance)
- **interface**: `api.derive.balances.votingBalance`
- **params**:
  - address `( AccountId | string )`: An accounts Id in different formats.

- **returns**: An object containing the results of various balance queries
- **example**: 
 ```javascript
 const ALICE = 'F7Hs';

 api.derive.balances.votingBalance(ALICE, ({ accountId, lockedBalance }) => {
   console.log(`The account ${accountId} has a locked balance ${lockedBalance} units.`);
 });
 ``` 
### [votingBalances](#votingBalances)
Retrieves the balance information for multiple accounts, typically used in governance-related contexts to check voting power.
- **interface**: `api.derive.balances.votingBalances`
- **params**:
  - addresses `(AccountId | AccountIndex | Address | string)[]`: An array of account identifiers.

- **example**: 
 ```javascript
 const addresses = ["5D4b...Zf1", "5HGj...yrV"];
 const balances = await api.derive.balances.votingBalances(addresses);
 console.log("Voting Balances:", balances);
 ```
___
## bounties
 
### [bounties](#bounties)
- **interface**: `api.derive.bounties.bounties`
- **example**: 
 ```javascript
 const bounties = await api.derive.bounties();
 console.log("Active bounties:", bounties);
 ```
___
## chain
 
### [bestNumber](#bestNumber)
- **interface**: `api.derive.chain.bestNumber`
- **example**: 
 ```javascript
 api.derive.chain.bestNumber((blockNumber) => {
   console.log(`the current best block is #${blockNumber}`);
 });
 ``` 
### [bestNumberFinalized](#bestNumberFinalized)
Get the latest finalized block number.
- **interface**: `api.derive.chain.bestNumberFinalized`
- **returns**: A BlockNumber
- **example**: 
 ```javascript
 api.derive.chain.bestNumberFinalized((blockNumber) => {
   console.log(`the current finalized block is #${blockNumber}`);
 });
 ``` 
### [bestNumberLag](#bestNumberLag)
Calculates the lag between finalized head and best head
- **interface**: `api.derive.chain.bestNumberLag`
- **returns**: A number of blocks 
### [getBlock](#getBlock)
Get a specific block (e.g. rpc.chain.getBlock) and extend it with the author
- **interface**: `api.derive.chain.getBlock`
- **params**:
  - hash `( Uint8Array | string )`: A block hash as U8 array or string.

- **example**: 
 ```javascript
 const { author, block } = await api.derive.chain.getBlock('0x123...456');

 console.log(`block #${block.header.number} was authored by ${author}`);
 ``` 
### [getBlockByNumber](#getBlockByNumber)
Get a specific block (e.g. rpc.chain.getBlock) and extend it with the author by block number
- **interface**: `api.derive.chain.getBlockByNumber`
- **params**:
  - blockNumber `( BN | bigint | Uint8Array | number | string )`: 

- **example**: 
 ```javascript
 const { author, block } = await api.derive.chain.getBlockByNumber(123);

 console.log(`block #${block.header.number} was authored by ${author}`);
 ``` 
### [getHeader](#getHeader)
Get a specific block header and extend it with the author
- **interface**: `api.derive.chain.getHeader`
- **params**:
  - hash `( Uint8Array | string )`: - A block hash as U8 array or string.

- **returns**: An array containing the block header and the block author
- **example**: 
 ```javascript
 const { author, number } = await api.derive.chain.getHeader('0x123...456');

 console.log(`block #${number} was authored by ${author}`);
 ``` 
### [subscribeFinalizedBlocks](#subscribeFinalizedBlocks)
Retrieves the finalized block & events for that block
- **interface**: `api.derive.chain.subscribeFinalizedBlocks`
- **example**: 
 ```javascript
 const unsub = await api.derive.chain.subscribeFinalizedBlocks((finalizedBlock) => {
  console.log(`# Finalized block ${finalizedBlock.block.hash}`);
 });
 ``` 
### [subscribeFinalizedHeads](#subscribeFinalizedHeads)
An observable of the finalized block headers. Unlike the base chain.subscribeFinalizedHeads this does not skip any headers. Since finalization may skip specific blocks (finalization happens in terms of chains), this version of the derive tracks missing headers (since last retrieved) and provides them to the caller.
- **interface**: `api.derive.chain.subscribeFinalizedHeads`
- **example**: 
 ```javascript
 const unsub = await api.derive.chain.subscribeFinalizedHeads((finalizedHead) => {
   console.log(`${finalizedHead.hash}`);
 });
 ``` 
### [subscribeNewBlocks](#subscribeNewBlocks)
- **interface**: `api.derive.chain.subscribeNewBlocks`
- **returns**: The latest block & events for that block
- **example**: 
 ```javascript
 const unsub = await api.derive.chain.subscribeNewBlocks((newBlock) => {
   console.log(`Block Hash: ${newBlock.hash}`);
 });
 ``` 
### [subscribeNewHeads](#subscribeNewHeads)
An observable of the current block header and it's author.
- **interface**: `api.derive.chain.subscribeNewHeads`
- **returns**: A header with the current header (including extracted author).
- **example**: 
 ```javascript
 api.derive.chain.subscribeNewHeads((header) => {
   console.log(`block #${header.number} was authored by ${header.author}`);
 });
 ```
___
## contracts
 
### [fees](#fees)
- **interface**: `api.derive.contracts.fees`
- **returns**: An object containing the combined results of the queries for all relevant contract fees as declared in the substrate chain spec.
- **example**: 
 ```javascript
 api.derive.contracts.fees(([creationFee, transferFee]) => {
   console.log(`The fee for creating a new contract on this chain is ${creationFee} units. The fee required to call this contract is ${transferFee} units.`);
 });
 ```
___
## council
 
### [members](#members)
Retrieves the list of members in the "council" collective.
- **interface**: `api.derive.council.members`
- **example**: 
 ```javascript
 const members = await api.derive.council.members();
 console.log(`Members: ${JSON.stringify(members)});
 ``` 
### [hasProposals](#hasProposals)
Checks if there are any active proposals in the "council" collective.
- **interface**: `api.derive.council.hasProposals`
- **example**: 
 ```javascript
 const exists = await api.derive.council.hasProposals();
 console.log(exists);
 ``` 
### [proposal](#proposal)
Retrieves details of a specific proposal in the "councilMotion" collective by its hash.
- **interface**: `api.derive.council.proposal`
- **example**: 
 ```javascript
 const proposalDetails = await api.derive.council.proposal(PROPOSAL_HASH);
 console.log(proposalDetails);
 ``` 
### [proposalCount](#proposalCount)
Retrieves the total number of proposals in the "council" collective.
- **interface**: `api.derive.council.proposalCount`
- **example**: 
 ```javascript
 const count = await api.derive.council.proposalCount();
 console.log(`Amount of proposals: ${count}`);
 ``` 
### [proposalHashes](#proposalHashes)
Retrieves an array of hashes for all active proposals in the "council" collective.
- **interface**: `api.derive.council.proposalHashes`
- **example**: 
 ```javascript
 const hashes = await api.derive.council.proposalHashes();
 console.log(`Proposals ${JSON.stringify(hashes)}`);
 ``` 
### [proposals](#proposals)
Retrieves a list of all active proposals in the "council" collective.
- **interface**: `api.derive.council.proposals`
- **example**: 
 ```javascript
 const proposals = await api.derive.council.proposals();
 console.log(proposals);
 ``` 
### [prime](#prime)
Retrieves the prime member of the "council" collective, if one exists.
- **interface**: `api.derive.council.prime`
- **example**: 
 ```javascript
 const primeMember = await api.derive.council.prime();
 console.log(primeMember);
 ``` 
### [votes](#votes)
Retrieves the council election votes for all participants.
- **interface**: `api.derive.council.votes`
- **example**: 
 ```javascript
 const votes = await api.derive.council.votes();
 ``` 
### [votesOf](#votesOf)
Retrieves the council votes associated with a given account.
- **interface**: `api.derive.council.votesOf`
- **params**:
  - accountId `string | Uint8Array | AccountId`: The accountId to retrieve votes for.

- **returns**: The stake and the list of candidates the account has voted for.
- **example**: 
 ```javascript
 const accountId = "5Gw3s7qQ9Z..."; // Replace with a valid account ID
 const votes = await api.derive.council.votesOf(accountId);
 console.log("Account votes:", votes);
 ```
___
## crowdloan
 
### [childKey](#childKey)
Retrieves the child storage key for a given parachain’s crowdloan contributions. This key is used to access contribution data stored in a separate child trie of the blockchain’s state.
- **interface**: `api.derive.crowdloan.childKey`
- **params**:
  - paraId `string | number | BN`: The parachain ID for which contributions are being queried.

- **example**: 
 ```javascript
 const childKey = await api.derive.crowdloan.childKey(3369);
 console.log("Child Key:", childKey);
 ``` 
### [contributions](#contributions)
Retrieves all contributions for a given parachain crowdloan.
- **interface**: `api.derive.crowdloan.contributions`
- **params**:
  - paraId `string | number | BN`: The parachain ID for which contributions are being queried.

- **example**: 
 ```javascript
 const contributions = await api.derive.crowdloan.contributions(3369);
 console.log("Contributions:", contributions);
 ``` 
### [ownContributions](#ownContributions)
Retrieves the contribution amounts made by specific accounts (`keys`) to a given parachain crowdloan (`paraId`).
- **interface**: `api.derive.crowdloan.ownContributions`
- **params**:
  - paraId `string | number | BN`: The parachain ID for which contributions are being queried.
  - keys `string[]`: An array of account addresses whose contributions are to be fetched.

- **example**: 
 ```javascript
 const contributions = await api.derive.crowdloan.ownContributions(2000, ['5Ff...PqV', '5Gg...XyZ']);
 console.log("Own Contributions:", contributions);
 ```
___
## democracy
 
### [dispatchQueue](#dispatchQueue)
Retrieves the list of scheduled or pending dispatches in the governance system.
- **interface**: `api.derive.democracy.dispatchQueue`
- **example**: 
 ```javascript
 const queue = await api.derive.democracy.dispatchQueue();
 console.log("Dispatch Queue:", queue);
 ``` 
### [locks](#locks)
Retrieves the democracy voting locks for a given account.
- **interface**: `api.derive.democracy.locks`
- **params**:
  - accountId `string | AccountId`: The accountId for which to retrieve democracy voting locks.

- **example**: 
 ```javascript
 const locks = await api.derive.democracy.locks('5FfFjX...'); // Replace with an actual accountId
 console.log("Democracy Locks:", locks);
 ``` 
### [nextExternal](#nextExternal)
Retrieves the next external proposal that is scheduled for a referendum.
- **interface**: `api.derive.democracy.nextExternal`
- **example**: 
 ```javascript
 const nextExternal = await api.derive.democracy.nextExternal();
 console.log("Next external proposal:", nextExternal);
 ``` 
### [preimages](#preimages)
Retrieves the full details (preimages) of governance proposals using their on-chain hashes.
- **interface**: `api.derive.democracy.preimages`
- **params**:
  - hashes `(Hash | Uint8Array | string | FrameSupportPreimagesBounded)[]`: An array of hashes representing governance proposals.

- **example**: 
 ```javascript
 const preimages = await api.derive.democracy.preimages([HASH1, HASH2]);
 ``` 
### [preimage](#preimage)
Retrieves the full details (preimage) of a governance proposal using its on-chain hash.
- **interface**: `api.derive.democracy.preimage`
- **params**:
  - hash `Hash | Uint8Array | string | FrameSupportPreimagesBounded`: Hash that represents governance proposals. * @example ```javascript const preimage = await api.derive.democracy.preimage(HASH); ```
 
### [proposals](#proposals)
Retrieves the list of active public proposals in the democracy module, along with their associated preimage data and deposit information.
- **interface**: `api.derive.democracy.proposals`
- **example**: 
 ```javascript
 const proposals = await api.derive.democracy.proposals();
 console.log("proposals:", proposals);
 ``` 
### [referendumIds](#referendumIds)
Retrieves an array of active referendum IDs.
- **interface**: `api.derive.democracy.referendumIds`
- **example**: 
 ```javascript
 const referendums = await api.derive.democracy.referendumIds();
 ``` 
### [referendums](#referendums)
Retrieves information about all active referendums, including their details and associated votes.
- **interface**: `api.derive.democracy.referendums`
- **example**: 
 ```javascript
 const referendums = await api.derive.democracy.referendums();
 ``` 
### [referendumsActive](#referendumsActive)
Retrieves information about active referendums.
- **interface**: `api.derive.democracy.referendumsActive`
- **example**: 
 ```javascript
 const referendums = await api.derive.democracy.referendumsActive();
 console.log("Active Referendums:", referendums);
 ``` 
### [referendumsFinished](#referendumsFinished)
Retrieves information about finished referendums.
- **interface**: `api.derive.democracy.referendumsFinished`
- **example**: 
 ```javascript
 const referendums = await api.derive.democracy.referendumsFinished();
 console.log("Finished Referendums:", referendums);
 ``` 
### [referendumsInfo](#referendumsInfo)
Retrieves information about multiple referendums by their IDs.
- **interface**: `api.derive.democracy.referendumsInfo`
- **params**:
  - ids `BN[]`: An array of referendum IDs to query.

- **example**: 
 ```javascript
 import { BN } from "@polkadot/util";

 const referendumIds = [new BN(1)];
 const referendums = await api.derive.democracy.referendumsInfo(referendumIds);
 console.log("Referendums Info:", referendums);
 ``` 
### [sqrtElectorate](#sqrtElectorate)
Computes the square root of the total token issuance in the network.
- **interface**: `api.derive.democracy.sqrtElectorate`
- **example**: 
 ```javascript
 let sqrtElectorate = await api.derive.democracy.sqrtElectorate();
 console.log("Square root of token issuance:", sqrtElectorate);
 ```
___
## elections
 
### [info](#info)
An object containing the combined results of the storage queries for all relevant election module properties.
- **interface**: `api.derive.elections.info`
- **example**: 
 ```javascript
 api.derive.elections.info(({ members, candidates }) => {
   console.log(`There are currently ${members.length} council members and ${candidates.length} prospective council candidates.`);
 });
 ```
___
## imOnline
 
### [receivedHeartbeats](#receivedHeartbeats)
Return a boolean array indicating whether the passed accounts had received heartbeats in the current session.
- **interface**: `api.derive.imOnline.receivedHeartbeats`
- **example**: 
 ```javascript
 let unsub = await api.derive.imOnline.receivedHeartbeats((heartbeat) => {
   console.log(heartbeat);
 });
 ```
___
## membership
 
### [members](#members)
Retrieves the list of members in the "membership" collective.
- **interface**: `api.derive.membership.members`
- **example**: 
 ```javascript
 const members = await api.derive.membership.members();
 console.log(`Members: ${JSON.stringify(members)});
 ``` 
### [hasProposals](#hasProposals)
Checks if there are any active proposals in the "membership" collective.
- **interface**: `api.derive.membership.hasProposals`
- **example**: 
 ```javascript
 const exists = await api.derive.membership.hasProposals();
 console.log(exists);
 ``` 
### [proposal](#proposal)
Retrieves details of a specific proposal in the "membership" collective by its hash.
- **interface**: `api.derive.membership.proposal`
- **example**: 
 ```javascript
 const proposalDetails = await api.derive.membership.proposal(PROPOSAL_HASH);
 console.log(proposalDetails);
 ``` 
### [proposalCount](#proposalCount)
Retrieves the total number of proposals in the "membership" collective.
- **interface**: `api.derive.membership.proposalCount`
- **example**: 
 ```javascript
 const count = await api.derive.membership.proposalCount();
 console.log(`Amount of proposals: ${count}`);
 ``` 
### [proposalHashes](#proposalHashes)
Retrieves an array of hashes for all active proposals in the "membership" collective.
- **interface**: `api.derive.membership.proposalHashes`
- **example**: 
 ```javascript
 const hashes = await api.derive.membership.proposalHashes();
 console.log(`Proposals ${JSON.stringify(hashes)}`);
 ``` 
### [proposals](#proposals)
Retrieves a list of all active proposals in the "membership" collective.
- **interface**: `api.derive.membership.proposals`
- **example**: 
 ```javascript
 const proposals = await api.derive.membership.proposals();
 console.log(proposals);
 ``` 
### [prime](#prime)
Retrieves the prime member of the "membership" collective, if one exists.
- **interface**: `api.derive.membership.prime`
- **example**: 
 ```javascript
 const primeMember = await api.derive.membership.prime();
 console.log(primeMember);
 ```
___
## parachains
 
### [info](#info)
Retrieves detailed information about a specific parachain.
- **interface**: `api.derive.parachains.info`
- **params**:
  - id `ParaId | number`: A unique numeric (non-negative integer) identifier for a parachain.

- **example**: 
 ```javascript
 await api.derive.parachains.info(1000, (info) => {
   if (info) {
     console.log(`Parachain ${info.id.toString()} is active: ${info.active}`);
   } else {
     console.log("Parachain information not available.");
   }
 });
 ``` 
### [overview](#overview)
Retrieves an overview of all registered parachains.
- **interface**: `api.derive.parachains.overview`
- **example**: 
 ```javascript
 await api.derive.parachains.overview((overview) => {
   parachains.forEach(parachain => {
     console.log(`Parachain ${parachain.id.toString()} is registered.`);
   });
 });
 ```
___
## session
 
### [indexes](#indexes)
Retrieves session-related index data, adapting to whether the chain has staking enabled.
- **interface**: `api.derive.session.indexes`
- **example**: 
 ```javascript
 api.derive.session.indexes((indexes) => {
   console.log(`Current session index: ${indexes.currentIndex}`);
   console.log(`Validator count: ${indexes.validatorCount}`);
 });
 ``` 
### [info](#info)
Retrieves all the session and era query and calculates specific values on it as the length of the session and eras.
- **interface**: `api.derive.session.info`
- **example**: 
 ```javascript
 api.derive.session.info((info) => {
   console.log(`Session info ${JSON.stringify(info)}`);
 });
 ``` 
### [progress](#progress)
Retrieves session information and progress.
- **interface**: `api.derive.session.progress`
- **example**: 
 ```javascript
 api.derive.session.progress((progress) => {
   console.log(`Session progress ${JSON.stringify(progress)}`);
 });
 ``` 
### [eraLenght](#eraLenght)
Retrieves the total length of the current era.
- **interface**: `api.derive.session.eraLenght`
- **example**: 
 ```javascript
 api.derive.session.eraLength((length) => {
   console.log(`Current era length: ${length} sessions`);
 });
 ``` 
### [eraProgress](#eraProgress)
Retrieves the progress of the current era.
- **interface**: `api.derive.session.eraProgress`
- **example**: 
 ```javascript
 api.derive.session.eraProgress((progress) => {
   console.log(`Current era progress: ${progress} sessions`);
 });
 ``` 
### [sessionProgress](#sessionProgress)
Retrieves the progress of the current session.
- **interface**: `api.derive.session.sessionProgress`
- **example**: 
 ```javascript
   api.derive.session.sessionProgress((progress) => {
   console.log(`Current session progress: ${progress} slots`);
 });
 ```
___
## society
 
### [candidate](#candidate)
Retrieves the list of candidates for the society module.
- **interface**: `api.derive.society.candidate`
- **example**: 
 ```javascript
 const societyCandidates = await api.derive.society.candidates();
 console.log(societyCandidates);
 ``` 
### [info](#info)
Get the overall info for a society.
- **interface**: `api.derive.society.info`
- **example**: 
 ```javascript
 const societyInfo = await api.derive.society.candidates();
 console.log(societyInfo);
 ``` 
### [member](#member)
Get the member info for a society.
- **interface**: `api.derive.society.member`
- **params**:
  - accountId `AccountId`: 

- **example**: 
 ```javascript
 const member = await api.derive.society.member(ALICE);
 console.log(member);
 ``` 
### [members](#members)
Get the society members.
- **interface**: `api.derive.society.members`
- **example**: 
 ```javascript
 const members = await api.derive.society.members();
 console.log(members);
 ```
___
## staking
 
### [accounts](#accounts)
From a list of stashes, fill in all the relevant staking details
- **interface**: `api.derive.staking.accounts`
- **params**:
  - accountIds `(Uint8Array | string)[]`: List of account stashes
  - opts `StakingQueryFlags`: optional filtering flag

- **example**: 
 ```javascript
 const accounts = await api.derive.staking.accounts([
  "149B17nn7zVL4SkLSNmANupEkGexUBAxVrdk4bbWFZYibkFc",
 ]);
 console.log("First account staking info:", accounts[0]);
 ``` 
### [account](#account)
From a stash, retrieve the controllerId and fill in all the relevant staking details.
- **interface**: `api.derive.staking.account`
- **params**:
  - accountId `(Uint8Array | string)`: AccountId of the stash.
  - opts `StakingQueryFlags`: (Optional) filtering flag.

- **example**: 
 ```javascript
 const accountStakingData = await api.derive.staking.account(
   "149B17nn7zVL4SkLSNmANupEkGexUBAxVrdk4bbWFZYibkFc"
 );
 console.log(accountStakingData);
 ``` 
### [currentPoints](#currentPoints)
Retrieve the staking overview, including elected and points earned.
- **interface**: `api.derive.staking.currentPoints`
- **example**: 
 ```javascript
 const currentPoints = await api.derive.staking.currentPoints();
 console.log(currentPoints.toHuman());
 ``` 
### [electedInfo](#electedInfo)
Retrieves detailed staking information about the next elected validators and their associated staking data.
- **interface**: `api.derive.staking.electedInfo`
- **params**:
  - flags? `StakingQueryFlags`: (Optional) Query flags to filter the staking data.
  - page? `number`: (Optional) The page index for paginated results.

- **example**: 
 ```javascript
 const { nextElected, validators, info } =
   await api.derive.staking.electedInfo();
 console.log(
   "Next Elected Validators:",
   nextElected.map((acc) => acc.toString())
 );
 console.log(
   "Current Validators:",
   validators.map((acc) => acc.toString())
 );
 console.log("Validator Staking Info:", info);
 ``` 
### [eraExposure](#eraExposure)
Retrieves the staking exposure (nominators and total stake) for a specific era.
- **interface**: `api.derive.staking.eraExposure`
- **params**:
  - eras `EraIndex`: The staking era to query.

- **example**: 
 ```javascript
 const era = api.createType("EraIndex", 1000);
 const exposure = await api.derive.staking.eraExposure(era);
 ``` 
### [erasExposure](#erasExposure)
Retrieves staking exposure details for multiple past eras.
- **interface**: `api.derive.staking.erasExposure`
- **params**:
  - withActive? `boolean`: (Optional) Whether to include the active era in the result.

- **example**: 
 ```javascript
 const exposure = await api.derive.staking.erasExposure(true);
 ``` 
### [erasHistoric](#erasHistoric)
- **interface**: `api.derive.staking.erasHistoric`
- **params**:
  - withActive? `boolean`: (Optional) Whether to include the active era in the result.
 
### [erasPoints](#erasPoints)
Retrieves historical era points with its validators.
- **interface**: `api.derive.staking.erasPoints`
- **params**:
  - withActive? `boolean`: (Optional) Whether to include the active era in the result.

- **example**: 
 ```javascript
 const points = await api.derive.staking.erasPoints(true);
 console.log(
   "Validator points:",
   points.map(({ era, eraPoints }) => `Era: ${era}, points ${eraPoints}`)
 );
 ``` 
### [eraPrefs](#eraPrefs)
Retrieves the validators commission preferences for a given staking era.
- **interface**: `api.derive.staking.eraPrefs`
- **params**:
  - era `EraIndex`: The staking era to query.

- **example**: 
 ```javascript
 const era = api.createType("EraIndex", 1000);
 const prefs = await api.derive.staking.eraPrefs(era);
 console.log(JSON.stringify(prefs));
 ``` 
### [erasPrefs](#erasPrefs)
Retrieves validators commission preferences for multiple past staking eras
- **interface**: `api.derive.staking.erasPrefs`
- **params**:
  - withActive? `boolean`: (Optional) Whether to include the active era in the result.

- **example**: 
 ```javascript
 const prefs = await api.derive.staking.erasPrefs(true);
 ``` 
### [erasRewards](#erasRewards)
Retrieves rewards for historical eras.
- **interface**: `api.derive.staking.erasRewards`
- **params**:
  - withActive? `boolean`: (Optional) Whether to include the active era in the result.

- **example**: 
 ```javascript
 const rewards = await api.derive.staking.erasRewards(true);
 ``` 
### [eraSlashes](#eraSlashes)
Retrieves the slashes for a specific staking era.
- **interface**: `api.derive.staking.eraSlashes`
- **params**:
  - eras `EraIndex`: The staking era to query.

- **example**: 
 ```javascript
 const era = api.createType("EraIndex", 1000);
 const slashes = await api.derive.staking.eraSlashes(era);
 ``` 
### [erasSlashes](#erasSlashes)
Retrieves slashes for historical eras.
- **interface**: `api.derive.staking.erasSlashes`
- **params**:
  - withActive? `boolean`: (Optional) Whether to include the active era in the result.

- **example**: 
 ```javascript
 const slashes = await api.derive.staking.erasSlashes(true);
 ``` 
### [keys](#keys)
Retrieves the session keys associated with a given stash account.
- **interface**: `api.derive.staking.keys`
- **params**:
  - stashId `Uint8Array | string`: The stash account ID whose session keys are to be retrieved.

- **example**: 
 ```javascript
 const keys = await api.derive.staking.keys(
   ALICE
 );
 console.log(
   "Session keys:",
   keys.sessionIds.map((key) => `Key: ${key}`)
 );
 ``` 
### [keysMulti](#keysMulti)
Retrieves session keys for multiple stash accounts.
- **interface**: `api.derive.staking.keysMulti`
- **params**:
  - stashIds `(Uint8Array | string)[]`: Array of stash account IDs.

- **example**: 
 ```javascript
 const keysMulti = await api.derive.staking.keysMulti([ ALICE, BOB ]);
 keysMulti.forEach((keys) => {
   console.log(
     "Session keys:",
     keys.sessionIds.map((key) => `Key: ${key}`)
   );
 });
 ``` 
### [overview](#overview)
Retrieve the staking overview, including elected validators and points earned.
- **interface**: `api.derive.staking.overview`
- **example**: 
 ```javascript
 const {
   activeEra,
   activeEraStart,
   currentEra,
   currentIndex,
   nextElected,
   validatorCount,
   validators,
 } = await api.derive.staking.overview();
 ``` 
### [ownExposure](#ownExposure)
Retrieves the staking exposure of a validator for a specific era, including their own stake.
- **interface**: `api.derive.staking.ownExposure`
- **params**:
  - accountId `Uint8Array | string`: The validator stash account.
  - era `EraIndex`: The staking era to query.
  - page? `u32 | AnyNumber`: (Optional) The pagination index.

- **example**: 
 ```javascript
 const era = api.createType("EraIndex", 1000);
 const exposure = await api.derive.staking.ownExposure(
   "11VR4pF6c7kfBhfmuwwjWY3FodeYBKWx7ix2rsRCU2q6hqJ",
   era
 );
 console.log(JSON.stringify(exposure));
 ``` 
### [ownExposures](#ownExposures)
Retrieves staking exposures for a validator across multiple historical eras.
- **interface**: `api.derive.staking.ownExposures`
- **params**:
  - accountId `Uint8Array | string`: The validator stash account.
  - withActive `boolean`: Whether to include the active era.

- **example**: 
 ```javascript
 const exposures = await api.derive.staking.ownExposures(
   ALICE,
   true
 );
 ``` 
### [ownSlash](#ownSlash)
Retrieves the slashes applied to a specific account in a given era.
- **interface**: `api.derive.staking.ownSlash`
- **params**:
  - accountId `Uint8Array | string`: The validator stash account.
  - era `EraIndex`: The staking era to query.

- **example**: 
 ```javascript
 const era = api.createType("EraIndex", 1000);
 const slashedAmount = await api.derive.staking.ownSlash(
   ALICE,
   era
 );
 console.log(`Era: ${slashedAmount.era}, total ${slashedAmount.total}`);
 ``` 
### [ownSlashes](#ownSlashes)
Retrieves the slashes for a specific account across all historic eras.
- **interface**: `api.derive.staking.ownSlashes`
- **params**:
  - accountId `Uint8Array | string`: The validator stash account.
  - withActive `boolean`: Whether to include the active era.

- **example**: 
 ```javascript
 const slashes = await api.derive.staking.ownSlashes(
   ALICE,
   true
 );
 console.log(slashes);
 ``` 
### [query](#query)
Retrieves staking details for a given stash account.
- **interface**: `api.derive.staking.query`
- **params**:
  - accountId `Uint8Array | string`: The stash account to query.
  - flags `StakingQueryFlags`: Flags to customize the query.
  - page `u32`: (Optional) pagination parameter.

- **example**: 
 ```javascript
 const stakingInfo = await api.derive.staking.query(
   ALICE,
   {}
 );
 ``` 
### [queryMulti](#queryMulti)
Retrieves staking details for multiple stash accounts.
- **interface**: `api.derive.staking.queryMulti`
- **params**:
  - accountIds `(Uint8Array | string)[]`: List of stash accounts to query.
  - flags `StakingQueryFlags`: Flags to customize the query.
  - page `u32`: (Optional) pagination parameter.

- **example**: 
 ```javascript
 const stakingInfos = await api.derive.staking.queryMulti([stashId1, stashId2], {});
 ``` 
### [stakerExposures](#stakerExposures)
Retrieves staking exposure for multiple accounts across historical eras.
- **interface**: `api.derive.staking.stakerExposures`
- **params**:
  - accountIds `(Uint8Array | string)[]`: List of validator stash accounts.
  - withActive `boolean`: Whether to include the active era.

- **example**: 
 ```javascript
 const exposure = await api.derive.staking.stakerExposures(
   [ALICE, BOB],
   true
 );
 ``` 
### [stakerExposure](#stakerExposure)
Retrieves staking exposure for a single account across historical eras. Exposure refers to the total stake associated with a validator.
- **interface**: `api.derive.staking.stakerExposure`
- **params**:
  - accountId `Uint8Array | string`: The validator stash account.
  - withActive `boolean`: Whether to include the active era.

- **example**: 
 ```javascript
 const exposure = await api.derive.staking.stakerExposure(
   ALICE,
   true
 );
 ``` 
### [stakerPoints](#stakerPoints)
Retrieves the era reward points earned by a given staker across all eras.
- **interface**: `api.derive.staking.stakerPoints`
- **params**:
  - accountId `Uint8Array | string`: The stakers AccountId.
  - withActive `boolean`: Whether to include the active era.

- **example**: 
 ```javascript
 const points = await api.derive.staking.stakerPoints(
   ALICE, //Alice accountId
   false
 );
 console.log(
   'Validator Era Points:',
   points.map(({ era, points }) => `Era ${era}: ${points.toString()} points`)
 );
 ``` 
### [stakerPrefs](#stakerPrefs)
Retrieves the validator preferences for a given staker across historical eras.
- **interface**: `api.derive.staking.stakerPrefs`
- **params**:
  - accountId `Uint8Array | string`: The stakers AccountId.
  - withActive `boolean`: Whether to include the active era.

- **example**: 
 ```javascript
 const prefs = await api.derive.staking.stakerPrefs(
   ALICE, //Alice accountId
   false
 );
 console.log(
   'Validator Preferences:',
   prefs.map(
     ({ era, validatorPrefs }) => `Era ${era}: Commission ${validatorPrefs.commission.toString()}`
   )
 );
 ``` 
### [stakerRewards](#stakerRewards)
Staking rewards history for a given staker.
- **interface**: `api.derive.staking.stakerRewards`
- **params**:
  - accountId `Uint8Array | string`: The stakers AccountId.
  - withActive `boolean`: Whether to include the active era.

- **example**: 
 ```javascript
 const rewards = await api.derive.staking.stakerRewards(
   ALICE, //Alice accountId
   false
 );
 ``` 
### [stakerRewardsMultiEras](#stakerRewardsMultiEras)
Staking rewards for multiple stakers over specific eras.
- **interface**: `api.derive.staking.stakerRewardsMultiEras`
- **params**:
  - accountIds `Uint8Array | string`: List of stakers identified by their AccountId.
  - eras `EraIndex[]`: Eras for which to retrieve the data.

- **example**: 
 ```javascript
 const rewards = await api.derive.staking.stakerRewardsMultiEras(
   [ALICE, BOB, CHARLIER], //accountIds
   [100,101]  //eras
 );
 ``` 
### [stakerRewardsMulti](#stakerRewardsMulti)
Staking rewards for multiple stakers.
- **interface**: `api.derive.staking.stakerRewardsMulti`
- **params**:
  - accountIds `Uint8Array | string`: List of stakers identified by their AccountId.
  - withActive `boolean`: Whether to include the active era.

- **example**: 
 ```javascript
 const rewards = await api.derive.staking.stakerRewardsMulti(
   [ALICE, BOB, CHARLIER], //accountIds
   true
 );
 ``` 
### [stakerSlashes](#stakerSlashes)
Retrieve the historical slashes (penalties) for a given staker.
- **interface**: `api.derive.staking.stakerSlashes`
- **params**:
  - accountId `Uint8Array | string`: The stakers AccountId.
  - withActive `boolean`: Whether to include the active era.

- **example**: 
 ```javascript
  const stakerSlashes = await api.derive.staking.stakerSlashes(
   ALICE, //Alice accountId
   true
 );
 console.log(
   'Staker Slashes:',
   stakerSlashes.map(({ era, total }) => `Era ${era}: Slashed ${total.toString()}`)
 );
 ``` 
### [stashes](#stashes)
Retrieve the list of all validator stashes.
- **interface**: `api.derive.staking.stashes`
- **example**: 
 ```javascript
 const stashes = await api.derive.staking.stashes();
 console.log(
   "Validator Stashes:",
   stashes.map((s) => s.toString())
 );
 ``` 
### [nextElected](#nextElected)
Retrieves the list of accounts that are set to be the next elected validators in the staking system. It provides a preview of who will be validators in the next staking era.
- **interface**: `api.derive.staking.nextElected`
- **example**: 
 ```javascript
 const nextElected = await api.derive.staking.nextElected();
 console.log(
   "Next Elected Validators:",
   nextElected.map((acc) => acc.toString())
 );
 ``` 
### [validators](#validators)
Retrieve latest list of validators.
- **interface**: `api.derive.staking.validators`
- **example**: 
 ```javascript
 const { validators, nextElected } = await api.derive.staking.validators();
 console.log(
   "Current Validators:",
   validators.map((v) => v.toString())
 );
 console.log(
   "Next Elected Validators:",
   nextElected.map((v) => v.toString())
 );
 ``` 
### [waitingInfo](#waitingInfo)
Staking candidates who are waiting to become validators.
- **interface**: `api.derive.staking.waitingInfo`
- **params**:
  - flags? `StakingQueryFlags`: (Optional) Query flags to filter the staking data.

- **example**: 
 ```javascript
 const { waiting, info } = await api.derive.staking.waitingInfo();
 console.log(
   "Waiting Candidates:",
   waiting.map((acc) => acc.toString())
 );
 ```
___
## technicalCommittee
 
### [members](#members)
Retrieves the list of members in the "technicalCommittee" collective.
- **interface**: `api.derive.technicalCommittee.members`
- **example**: 
 ```javascript
 const members = await api.derive.technicalCommittee.members();
 console.log(`Members: ${JSON.stringify(members)});
 ``` 
### [hasProposals](#hasProposals)
Checks if there are any active proposals in the "technicalCommittee" collective.
- **interface**: `api.derive.technicalCommittee.hasProposals`
- **example**: 
 ```javascript
 const exists = await api.derive.technicalCommittee.hasProposals();
 console.log(exists);
 ``` 
### [proposal](#proposal)
Retrieves details of a specific proposal in the "technicalCommitteeMotion" collective by its hash.
- **interface**: `api.derive.technicalCommittee.proposal`
- **example**: 
 ```javascript
 const proposalDetails = await api.derive.technicalCommittee.proposal(PROPOSAL_HASH);
 console.log(proposalDetails);
 ``` 
### [proposalCount](#proposalCount)
Retrieves the total number of proposals in the "technicalCommittee" collective.
- **interface**: `api.derive.technicalCommittee.proposalCount`
- **example**: 
 ```javascript
 const count = await api.derive.technicalCommittee.proposalCount();
 console.log(`Amount of proposals: ${count}`);
 ``` 
### [proposalHashes](#proposalHashes)
Retrieves an array of hashes for all active proposals in the "technicalCommittee" collective.
- **interface**: `api.derive.technicalCommittee.proposalHashes`
- **example**: 
 ```javascript
 const hashes = await api.derive.technicalCommittee.proposalHashes();
 console.log(`Proposals ${JSON.stringify(hashes)}`);
 ``` 
### [proposals](#proposals)
Retrieves a list of all active proposals in the "technicalCommittee" collective.
- **interface**: `api.derive.technicalCommittee.proposals`
- **example**: 
 ```javascript
 const proposals = await api.derive.technicalCommittee.proposals();
 console.log(proposals);
 ``` 
### [prime](#prime)
Retrieves the prime member of the "technicalCommittee" collective, if one exists.
- **interface**: `api.derive.technicalCommittee.prime`
- **example**: 
 ```javascript
 const primeMember = await api.derive.technicalCommittee.prime();
 console.log(primeMember);
 ```
___
## treasury
 
### [proposals](#proposals)
Retrieve all active and approved treasury proposals, along with their info.
- **interface**: `api.derive.treasury.proposals`
- **example**: 
 ```javascript
 const treasuryProposals = await api.derive.treasury.proposals();
 console.log(treasuryProposals);
 ```
___
## tx
 
### [events](#events)
Retrieves the block information alongside its events at a given block hash
- **interface**: `api.derive.tx.events`
- **params**:
  - at `Hash`: Block hash to query at.

- **example**: 
 ```javascript
 const blockHash = api.registry.createType(
   "Hash",
   "0xf1dc2efe8265be67deea5e91b05a98a7f9f81f66854e92825cf36f541beb7af6"
 );
 const { events, block } = await api.derive.tx.events(blockHash);
 ``` 
### [extrinsicInfo](#extrinsicInfo)
Retrieves the extrinsic information and its events.
- **interface**: `api.derive.tx.extrinsicInfo`
- **params**:
  - at `Hash`: The block hash to query at.
  - transactionHash `Uint8Array | string`: A transaction hash as U8 array or string.

- **example**: 
 ```javascript
 const blockHash = api.registry.createType(
   'Hash',
   '0xb772e4949d2f3eb5ba356aa43f885cc4f9097ee9812c5436543f3846a0491729'
 );
 const extrinsicInfo = await api.derive.tx.extrinsicInfo(
   blockHash,
   '0xcd96520b05e0c4648ea365f3f063f27c5cdd8be10d41a1c44566428c91f37dcb'
 );

 console.log(extrinsicInfo.extrinsic.toHuman());
 ``` 
### [accountExtrinsics](#accountExtrinsics)
Retrieves information about every extrinsic submitted by an account at a given block.
- **interface**: `api.derive.tx.accountExtrinsics`
- **params**:
  - at `Hash`: The block hash to query at.
  - accountId `Uint8Array | strings`: The account identifier to query.

- **example**: 
 ```javascript
 const blockHash = api.registry.createType(
  'Hash',
  '0xb772e4949d2f3eb5ba356aa43f885cc4f9097ee9812c5436543f3846a0491729'
);
const extrinsicsInfo = await api.derive.tx.accountExtrinsics(
  blockHash,
  '0x21895DdfD4640b4e0aDCa2865b907f2CE6e6B777'
);

console.log(extrinsicsInfo.extrinsics[0]).extrinsic.toHuman();
 ``` 
### [signingInfo](#signingInfo)
Retrieves signing-related information for an account, including the nonce, block header, and mortal length.
- **interface**: `api.derive.tx.signingInfo`
- **params**:
  - address `string`: The account address for which signing information is needed.
  - nonce? `BN | bigint | Uint8Array | number | string`: (Optional) The nonce to use. If `undefined`, the latest nonce is retrieved.
  - era? `IExtrinsicEra | number`: (Optional) The transaction era.

- **example**: 
 ```javascript
 const info = await api.derive.tx.signingInfo(
   "14mM9FRDDtwSYicjNxSvMfQkap8o4m9zHq7hNW4JpbSL4PPU"
 );
 console.log(info);
 ```
