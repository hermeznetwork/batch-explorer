import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios)
const mockedEthereumAddress = 'hez:0xaa942cfcd25ad4d90a62358b0dd84f33b398262a'
// const mockedTokenId = 0
// const baseApiUrl = process.env.REACT_APP_ROLLUP_API_URL
const baseApiUrl = 'http://167.71.59.190:4010'
const mockedBatchId = 222
// const mockedCoordinatorId = '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a'
// const mockedAccountIndex = 'hez:DAI:4444'

// mock.onGet(`${baseApiUrl}/accounts?hermezEthereumAddress=${mockedEthereumAddress}`)
//   .reply(
//     200,
//     {
//       accounts : [
//         {
//           accountIndex: 'hez:DAI:4444',
//           ethereumAddress: 'hez:0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
//           tokenID: 0,
//           balance: 2.38,
//           nonce: 112,
//           publicKey: 'hez:bx1234123412341234cfcd25ad4d90a62358b0dd84',
//           tokenSymbol: 'DAI'
//         },
//         {
//           accountIndex: 'hez:ETH:3333',
//           ethereumAddress: 'hez:0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
//           tokenID: 1,
//           balance: 102.8,
//           nonce: 414,
//           publicKey: 'hez:bx1234123412341234cfcd25ad4d90a62358b11111',
//           tokenSymbol: 'ETH'
//         },
//         {
//           accountIndex: 'hez:XYZ:5555',
//           ethereumAddress: 'hez:0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
//           tokenID: 2,
//           balance: 320.19,
//           nonce: 233,
//           publicKey: 'hez:bx1234123412341234cfcd25ad4d90a62358b22222',
//           tokenSymbol: 'XYZ'
//         }
//       ],
//       pagination: {
//         totalItems: 2048,
//         lastReturnedItem: 439
//       }
//     }
//   )

// mock.onGet(`${baseApiUrl}/accounts?hermezEthereumAddress=${mockedEthereumAddress}&tokenIds=${mockedTokenId}`)
//   .reply(
//     200,
//     {
//       accounts : [
//         {
//           accountIndex: 'hez:DAI:4444',
//           ethereumAddress: 'hez:0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
//           tokenID: 0,
//           balance: 2.38,
//           nonce: 112,
//           publicKey: 'hez:bx1234123412341234cfcd25ad4d90a62358b0dd84',
//           tokenSymbol: 'DAI'
//         }
//       ],
//       pagination: {
//         totalItems: 2048,
//         lastReturnedItem: 439
//       }
//     }
//   )

mock.onGet(`${baseApiUrl}/accounts/${mockedEthereumAddress}/txs`)
  .reply(
    200,
    [
      {
        TxID: 'b89eaac7e61417341b710b727768294d0e6a277b',
        FromEthAddr: 'hez:0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
        ToEthAddr: 'hez:0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
        FromIdx: 10,
        ToIdx: 20,
        Amount: 44.12,
        Nonce: 0,
        Fee: 15,
        Type: 'Transfer',
        TokenID: 2
      },
      {
        TxID: 'b89eaac7e61417341b710b727768294d0e600000',
        FromEthAddr: 'hez:0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
        ToEthAddr: 'hez:0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
        FromIdx: 10,
        ToIdx: 20,
        Amount: 101.22,
        Nonce: 0,
        Fee: 4,
        Type: 'Transfer',
        TokenID: 1
      },
      {
        TxID: 'b89eaac7e61417341b710b727768294d0e611111',
        FromEthAddr: 'hez:0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
        ToEthAddr: 'hez:0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
        FromIdx: 10,
        ToIdx: 20,
        Amount: 981.79,
        Nonce: 0,
        Fee: 90,
        Type: 'Transfer',
        TokenID: 1
      }
    ]
  )

// mock.onGet(`${baseApiUrl}/tokens`)
//   .reply(
//     200,
//     {
//       tokens: [
//         {
//           id: 4444,
//           ethereumAddress: '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
//           name: 'Maker Dai',
//           symbol: 'DAI',
//           decimals: 5,
//           ethereumBlockNum: 762375478,
//           USD: 4.53,
//           fiatUpdate: '2020-09-17T13:47:21.144Z'
//         }
//       ],
//       pagination: {
//         totalItems: 2048,
//         lastReturnedItem: 439
//       }
//     }
//   )

// mock.onGet(`${baseApiUrl}/batches`)
//   .reply(
//     200,
//     {
//       batches: [
//         {
//           batchNum: 5439,
//           ethereumBlockNum: 762375478,
//           collectedFees: [
//             {
//               tokenId: 4444,
//               tokenSymbol: 'DAI',
//               amount: '53'
//             }
//           ],
//           totalCollectedFeesUSD: 23.3,
//           forgeL1TransactionsNum: 818,
//           forgerAddr: '0x0000000000000000000000000000000000000001',
//           stateRoot: 'string',
//           numAccounts: 0,
//           exitRoot: 'string',
//           slotNum: 784,

//           timeStamp: 1598436610
//         },
//         {
//           batchNum: 5432,
//           ethereumBlockNum: 762375479,
//           collectedFees: [
//             {
//               tokenId: 4444,
//               tokenSymbol: 'DAI',
//               amount: '430'
//             }
//           ],
//           totalCollectedFeesUSD: 23.3,
//           forgeL1TransactionsNum: 103,
//           forgerAddr: '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
//           stateRoot: 'string',
//           numAccounts: 0,
//           exitRoot: 'string',
//           slotNum: 785,

//           timeStamp: 1597863005
//         },
//         {
//           batchNum: 5434,
//           ethereumBlockNum: 762375480,
//           collectedFees: [
//             {
//               tokenId: 4444,
//               tokenSymbol: 'DAI',
//               amount: '100'
//             }
//           ],
//           totalCollectedFeesUSD: 23.3,
//           forgeL1TransactionsNum: 155,
//           forgerAddr: '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
//           stateRoot: 'string',
//           numAccounts: 0,
//           exitRoot: 'string',
//           slotNum: 784,

//           timeStamp: 1597855841
//         },
//         {
//           batchNum: 5435,
//           ethereumBlockNum: 762375411,
//           collectedFees: [
//             {
//               tokenId: 4444,
//               tokenSymbol: 'DAI',
//               amount: '50'
//             }
//           ],
//           totalCollectedFeesUSD: 23.3,
//           forgeL1TransactionsNum: 93,
//           forgerAddr: '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
//           stateRoot: 'string',
//           numAccounts: 0,
//           exitRoot: 'string',
//           slotNum: 780,

//           timeStamp: 1546300800
//         }
//       ],
//       pagination: {
//         totalItems: 2048,
//         lastReturnedItem: 439
//       }
//     }
//   )

// mock.onGet(`${baseApiUrl}/batches?forgerAddr=${mockedCoordinatorId}`)
//   .reply(
//     200,
//     {
//       batches: [
//         {
//           batchNum: 5439,
//           ethereumBlockNum: 762375478,
//           collectedFees: [
//             {
//               tokenId: 4444,
//               tokenSymbol: 'DAI',
//               amount: '53'
//             }
//           ],
//           totalCollectedFeesUSD: 23.3,
//           forgeL1TransactionsNum: 818,
//           forgerAddr: '0x0000000000000000000000000000000000000001',
//           stateRoot: 'string',
//           numAccounts: 0,
//           exitRoot: 'string',
//           slotNum: 784,

//           timeStamp: 1598436610
//         },
//         {
//           batchNum: 5432,
//           ethereumBlockNum: 762375479,
//           collectedFees: [
//             {
//               tokenId: 4444,
//               tokenSymbol: 'DAI',
//               amount: '430'
//             }
//           ],
//           totalCollectedFeesUSD: 23.3,
//           forgeL1TransactionsNum: 103,
//           forgerAddr: '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
//           stateRoot: 'string',
//           numAccounts: 0,
//           exitRoot: 'string',
//           slotNum: 785,

//           timeStamp: 1597863005
//         },
//         {
//           batchNum: 5434,
//           ethereumBlockNum: 762375480,
//           collectedFees: [
//             {
//               tokenId: 4444,
//               tokenSymbol: 'DAI',
//               amount: '100'
//             }
//           ],
//           totalCollectedFeesUSD: 23.3,
//           forgeL1TransactionsNum: 155,
//           forgerAddr: '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
//           stateRoot: 'string',
//           numAccounts: 0,
//           exitRoot: 'string',
//           slotNum: 784,

//           timeStamp: 1597855841
//         },
//         {
//           batchNum: 5435,
//           ethereumBlockNum: 762375411,
//           collectedFees: [
//             {
//               tokenId: 4444,
//               tokenSymbol: 'DAI',
//               amount: '50'
//             }
//           ],
//           totalCollectedFeesUSD: 23.3,
//           forgeL1TransactionsNum: 93,
//           forgerAddr: '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
//           stateRoot: 'string',
//           numAccounts: 0,
//           exitRoot: 'string',
//           slotNum: 780,

//           timeStamp: 1546300800
//         }
//       ],
//       pagination: {
//         totalItems: 2048,
//         lastReturnedItem: 439
//       }
//     }
//   )

// mock.onGet(`${baseApiUrl}/batches/${mockedBatchId}`)
//   .reply(
//     200,
//     {
//       batchNum: 5432,
//       forgeL1TransactionsNum: 103,
//       slotNum: '45',
//       ethereumBlockNum: 762375478,
//       exitRoot: 'string',
//       collectedFees: [
//         {
//           tokenId: 4444,
//           tokenSymbol: 'DAI',
//           amount: '53'
//         }
//       ],
//       forgerAddr: '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
//       stateRoot: 'string',
//       numAccounts: 0,

//       timeStamp: 1597863005
//     }
//   )

mock.onGet(`${baseApiUrl}/batch/${mockedBatchId}/txs`)
  .reply(
    200,
    {
      L1Txs: [
        {
          TxID: 'b89eaac7e61417341b710b727768294d0e6a277b',
          Amount: 243,
          Position: 1
        },
        {
          TxID: 'b89eaac7e61417341b710b727768294d0e6a2771',
          Amount: 116,
          Position: 5
        },
        {
          TxID: 'b89eaac7e61417341b710b727768294d0e6a2772',
          Amount: 535,
          Position: 9
        }
      ],
      L2Txs: [
        {
          TxID: 'b89eaac7e61417341b710b727768294d0e6a2773',
          Amount: 540,
          Fee: 115,
          Position: 2
        },
        {
          TxID: 'b89eaac7e61417341b710b727768294d0e6a2774',
          Amount: 241,
          Fee: 99,
          Position: 3
        },
        {
          TxID: 'b89eaac7e61417341b710b727768294d0e6a2775',
          Amount: 999,
          Fee: 90,
          Position: 15
        },
        {
          TxID: 'b89eaac7e61417341b710b727768294d0e6a2776',
          Amount: 423,
          Fee: 101,
          Position: 23
        }
      ]
    }
  )

// mock.onGet(`${baseApiUrl}/coordinators/${mockedCoordinatorId}`)
//   .reply(
//     200,
//     {
//       forgerAddr: '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
//       withdrawAddr: '0x0000000000000000000000000000002222222222',
//       URL: 'https://github.com/hermeznetwork/idocs/pull/164/files',
//       ethereumBlock: 762375478
//     }
//   )

mock.onAny()
  .passThrough()

async function getAccounts (ethereumAddress) {
  const response = await axios.get(`${baseApiUrl}/accounts?hermezEthereumAddress=${ethereumAddress}`)

  return response.data
}

async function getAccount (ethereumAddress, tokenId) {
  const response = await axios.get(`${baseApiUrl}/accounts?hermezEthereumAddress=${ethereumAddress}&tokenIds=${tokenId}`)

  return response.data
}

async function getTransactions (ethereumAddress, tokenId) {
  const params = {
    ...(tokenId ? { tokenId } : {})
  }
  const response = await axios.get(
    // `${baseApiUrl}/accounts/hermezEthereumAddress?${ethereumAddress}/txs`,
    `${baseApiUrl}/accounts/${ethereumAddress}/txs`,
    { params }
  )

  return response.data
}

async function getTokens () {
  const response = await axios.get(`${baseApiUrl}/tokens`)

  return response.data
}

async function getBatches (coordinatorId) {
  // TODO: refactor
  const params = coordinatorId ? '?forgerAddr=' + coordinatorId : ''

  const response = await axios.get(`${baseApiUrl}/batches${params}`)

  return response.data
}

async function getBatch (batchId) {
  const response = await axios.get(`${baseApiUrl}/batches/${batchId}`)

  return response.data
}

async function getBatchTransactions (batchId) {
  const response = await axios.get(`${baseApiUrl}/batch/${batchId}/txs`)

  return response.data
}

async function getCoordinator (coordinatorId) {
  const response = await axios.get(`${baseApiUrl}/coordinators/${coordinatorId}`)

  return response.data
}

export {
  getAccounts,
  getAccount,
  getTransactions,
  getTokens,
  getBatches,
  getBatch,
  getBatchTransactions,
  getCoordinator
}
