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
An [[AccountId]]
- **interface**: `api.derive.accounts.accountId`
- **params**:
  - address `(Address | AccountId | AccountIndex | string | null)`: An accounts address in various formats.
 
### [flags](#flags)
Returns account membership flags
- **interface**: `api.derive.accounts.flags`
- **params**:
  - address `(AccountId | Address | string | null)`: 
 
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
- **interface**: `api.derive.accounts.idToIndex`
- **params**:
  - accountId `( AccountId | string )`: - An accounts Id in different formats.

- **returns**: Returns the corresponding AccountIndex.
- **example**: 
 ```javascript
 const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
 api.derive.accounts.idToIndex(ALICE, (accountIndex) => {
   console.log(`The AccountIndex of ${ALICE} is ${accountIndex}`);
 });
 ``` 
### [identity](#identity)
Returns identity info for an account
- **interface**: `api.derive.accounts.identity`
- **params**:
  - accoutId `(AccountId | Uint8Array | string)`: 
 
### [hasIdentity](#hasIdentity)
- **interface**: `api.derive.accounts.hasIdentity`
- **params**:
  - accountId `(AccountId | Uint8Array | string)`: 
 
### [hasIdentityMulti](#hasIdentityMulti)
- **interface**: `api.derive.accounts.hasIdentityMulti`
- **params**:
  - accountIds `(AccountId | Uint8Array | string)[]`: 
 
### [indexToId](#indexToId)
- **interface**: `api.derive.accounts.indexToId`
- **params**:
  - accountIndex `( AccountIndex | string )`: - An accounts index in different formats.

- **returns**: Returns the corresponding AccountId.
- **example**: 
 ```javascript
 api.derive.accounts.indexToId('F7Hs', (accountId) => {
   console.log(`The AccountId of F7Hs is ${accountId}`);
 });
 ``` 
### [indexes](#indexes)
This is an unwieldly query since it loops through all of the enumsets and returns all of the values found. This could be up to 32k depending on the number of active accounts in the system
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
  - address `(AccountIndex | AccountId | Address | Uint8Array | string | null)`: 

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
 
### [all](#all)
- **interface**: `api.derive.bagsList.all` 
### [get](#get)
- **interface**: `api.derive.bagsList.get`
- **params**:
  - id `(BN | number)`: 
 
### [expand](#expand)
- **interface**: `api.derive.bagsList.expand`
- **params**:
  - bag `Bag`: 
 
### [getExpanded](#getExpanded)
- **interface**: `api.derive.bagsList.getExpanded`
- **params**:
  - id `(BN | number)`: 
 
### [listNodes](#listNodes)
- **interface**: `api.derive.bagsList.listNodes`
- **params**:
  - bag `(PalletBagsListListBag | null)`: 

___
## balances
 
### [account](#account)
- **interface**: `api.derive.balances.account`
- **params**:
  - address `( AccountIndex | AccountId | Address | string )`: An accounts Id in different formats.

- **returns**: An object containing the results of various balance queries
- **example**: 
 ```javascript
 const ALICE = 'F7Hs';

 api.derive.balances.all(ALICE, ({ accountId, lockedBalance }) => {
   console.log(`The account ${accountId} has a locked balance ${lockedBalance} units.`);
 });
 ``` 
### [all](#all)
- **interface**: `api.derive.balances.all`
- **params**:
  - address `( AccountId | string )`: An accounts Id in different formats.

- **returns**: An object containing the results of various balance queries
- **example**: 
 ```javascript
 const ALICE = 'F7Hs';

 api.derive.balances.all(ALICE, ({ accountId, lockedBalance }) => {
   console.log(`The account ${accountId} has a locked balance ${lockedBalance} units.`);
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
- **interface**: `api.derive.balances.votingBalances`
- **params**:
  - addresses `(AccountId | AccountIndex | Address | string)[]`: 

___
## bounties
 
### [bounties](#bounties)
- **interface**: `api.derive.bounties.bounties`
___
## chain
 
### [bestNumber](#bestNumber)
- **interface**: `api.derive.chain.bestNumber`
- **returns**: The latest block number.
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
- **example**: 
 ```javascript
 api.derive.chain.bestNumberLag((lag) => {
   console.log(`finalized is ${lag} blocks behind head`);
 });
 ``` 
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
- **interface**: `api.derive.chain.subscribeFinalizedBlocks`
- **returns**: The finalized block & events for that block
- **example**: 
 ```javascript
 const unsub = await api.derive.chain.subscribeFinalizedBlocks((finalizedBlock) => {
  console.log(`# Finalized block ${finalizedBlock.block.hash}`);
 });
 ``` 
### [subscribeFinalizedHeads](#subscribeFinalizedHeads)
An observable of the finalized block headers. Unlike the base chain.subscribeFinalizedHeads this does not skip any headers. Since finalization may skip specific blocks (finalization happens in terms of chains), this version of the derive tracks missing headers (since last retrieved) and provides them to the caller
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
An observable of the current block header and it's author
- **interface**: `api.derive.chain.subscribeNewHeads`
- **returns**: A header with the current header (including extracted author)
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
- **interface**: `api.derive.council.votes` 
### [votesOf](#votesOf)
- **interface**: `api.derive.council.votesOf`
- **params**:
  - accountId `string | Uint8Array | AccountId`: 

___
## crowdloan
 
### [childKey](#childKey)
- **interface**: `api.derive.crowdloan.childKey`
- **params**:
  - paraId `string | number | BN`: 
 
### [contributions](#contributions)
- **interface**: `api.derive.crowdloan.contributions`
- **params**:
  - paraId `string | number | BN`: 
 
### [ownContributions](#ownContributions)
- **interface**: `api.derive.crowdloan.ownContributions`
- **params**:
  - paraId `string | number | BN`: 
  - keys `string[]`: 

___
## democracy
 
### [dispatchQueue](#dispatchQueue)
- **interface**: `api.derive.democracy.dispatchQueue` 
### [locks](#locks)
- **interface**: `api.derive.democracy.locks`
- **params**:
  - accountId `string | AccountId`: 
 
### [nextExternal](#nextExternal)
- **interface**: `api.derive.democracy.nextExternal` 
### [preimages](#preimages)
- **interface**: `api.derive.democracy.preimages`
- **params**:
  - hashes `(Hash | Uint8Array | string | FrameSupportPreimagesBounded)[]`: 
 
### [preimage](#preimage)
- **interface**: `api.derive.democracy.preimage`
- **params**:
  - hash `Hash | Uint8Array | string | FrameSupportPreimagesBounded`: 
 
### [proposals](#proposals)
- **interface**: `api.derive.democracy.proposals` 
### [referendumIds](#referendumIds)
- **interface**: `api.derive.democracy.referendumIds` 
### [referendums](#referendums)
- **interface**: `api.derive.democracy.referendums` 
### [referendumsActive](#referendumsActive)
- **interface**: `api.derive.democracy.referendumsActive` 
### [referendumsFinished](#referendumsFinished)
- **interface**: `api.derive.democracy.referendumsFinished` 
### [referendumsFinished](#referendumsFinished)
- **interface**: `api.derive.democracy.referendumsFinished`
- **params**:
  - ids `BN[]`: 
 
### [sqrtElectorate](#sqrtElectorate)
- **interface**: `api.derive.democracy.sqrtElectorate`
___
## elections
 
### [info](#info)
- **interface**: `api.derive.elections.info`
- **returns**: An object containing the combined results of the storage queries for all relevant election module properties.
- **example**: 
 ```javascript
 api.derive.elections.info(({ members, candidates }) => {
   console.log(`There are currently ${members.length} council members and ${candidates.length} prospective council candidates.`);
 });
 ```
___
## imOnline
 
### [receivedHeartbeats](#receivedHeartbeats)
- **interface**: `api.derive.imOnline.receivedHeartbeats`
- **returns**: Return a boolean array indicating whether the passed accounts had received heartbeats in the current session.
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
Get the overall info for a society
- **interface**: `api.derive.society.info`
- **example**: 
 ```javascript
 const societyInfo = await api.derive.society.candidates();
 console.log(societyInfo);
 ``` 
### [member](#member)
Get the member info for a society
- **interface**: `api.derive.society.member`
- **params**:
  - accountId `AccountId`: 

- **example**: 
 ```javascript
 const member = await api.derive.society.member(ALICE);
 console.log(member);
 ``` 
### [members](#members)
Get the society members
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
From a stash, retrieve the controllerId and fill in all the relevant staking details
- **interface**: `api.derive.staking.account`
- **params**:
  - accountId `(Uint8Array | string)`: AccountId of the stash
  - opts `StakingQueryFlags`: optional filtering flag

- **example**: 
 ```javascript
 const accountStakingData = await api.derive.staking.account(
   "149B17nn7zVL4SkLSNmANupEkGexUBAxVrdk4bbWFZYibkFc"
 );
 console.log(accountStakingData);
 ``` 
### [currentPoints](#currentPoints)
Retrieve the staking overview, including elected and points earned
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
Retrieve latest list of validators
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