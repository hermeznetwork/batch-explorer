import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios)
const mockedEthereumAddress = '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a'
const mockedTokenId = 0
const baseApiUrl = process.env.REACT_APP_ROLLUP_API_URL
const mockedBatchId = 222
const mockedCoordinatorId = '0x0000000000000000000000000000000000000002'

mock.onGet(`${baseApiUrl}/account/${mockedEthereumAddress}`)
  .reply(
    200,
    [
      {
        EthAddr: '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
        TokenID: 0,
        Balance: 2.38
      }
    ]
  )

mock.onGet(`${baseApiUrl}/account/${mockedEthereumAddress}/${mockedTokenId}`)
  .reply(
    200,
    {
      EthAddr: '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
      TokenID: 0,
      Balance: 2.38
    }
  )

mock.onGet(`${baseApiUrl}/account/${mockedEthereumAddress}/txs/history`)
  .reply(
    200,
    [
      {
        ID: 'b89eaac7e61417341b710b727768294d0e6a277b',
        FromEthAddr: '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
        ToEthAddr: '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
        FromIdx: 10,
        ToIdx: 20,
        Amount: 44.12,
        Nonce: 0,
        FeeSelector: 15,
        Type: 'Transfer',
        TokenID: 2
      }
    ]
  )

mock.onGet(`${baseApiUrl}/tokens`)
  .reply(
    200,
    [
      {
        TokenID: 0,
        Name: 'Some Cool Token',
        Symbol: 'SCT'
      },
      {
        TokenID: 1,
        Name: 'Other Cool Token',
        Symbol: 'OCT'
      },
      {
        TokenID: 2,
        Name: 'New Token',
        Symbol: 'NTO'
      },
      {
        TokenID: 3,
        Name: 'Too Good Token',
        Symbol: 'TGT'
      }
    ]
  )

mock.onGet(`${baseApiUrl}/batches`)
  .reply(
    200,
    [
      {
        BatchID: 223,
        numberOfTransactions: 88,
        ForgerAddr: '0x0000000000000000000000000000000000000001',
        timeStamp: 1597856265
      },
      {
        BatchID: 222,
        numberOfTransactions: 103,
        ForgerAddr: '0x0000000000000000000000000000000000000002',
        timeStamp: 1597863005
      },
      {
        BatchID: 221,
        numberOfTransactions: 23,
        ForgerAddr: '0x0000000000000000000000000000000000000003',
        timeStamp: 1597855841
      },
      {
        BatchID: 220,
        numberOfTransactions: 77,
        ForgerAddr: '0x0000000000000000000000000000000000000004',
        timeStamp: 1597856212144
      }
    ]
  )

mock.onGet(`${baseApiUrl}/batches/${mockedCoordinatorId}`)
  .reply(
    200,
    [
      {
        BatchID: 222,
        numberOfTransactions: 88,
        ForgerAddr: '0x0000000000000000000000000000000000000002',
        timeStamp: 1597856265
      },
      {
        BatchID: 191,
        numberOfTransactions: 103,
        ForgerAddr: '0x0000000000000000000000000000000000000002',
        timeStamp: 1597863005
      },
      {
        BatchID: 122,
        numberOfTransactions: 23,
        ForgerAddr: '0x0000000000000000000000000000000000000002',
        timeStamp: 1597855841
      },
      {
        BatchID: 90,
        numberOfTransactions: 77,
        ForgerAddr: '0x0000000000000000000000000000000000000002',
        timeStamp: 1597856212144
      }
    ]
  )

mock.onGet(`${baseApiUrl}/batches/${mockedBatchId}`)
  .reply(
    200,
    [
      {
        BatchID: 222,
        numberOfTransactions: 103,
        SlotNum: '45',
        EthTxHash: '0x0000000000000000000000000000000000000099',
        EthBlockNum: 10697921,
        ExitRoot: '0xr4e4t94d860f01a17f961bf4bdfb6e0c6cd10d3fda5cc861e805ca1240c67yt8',
        OldStateRoot: '0x3ew3e94d860f01a17f961bf4bdfb6e0c6cd10d3fda5cc861e805ca124asfee45',
        NewStateRoot: '0xfe88c94d860f01a17f961bf4bdfb6e0c6cd10d3fda5cc861e805ca1240c58553',
        CollectedFees: 5000504,
        ForgerAddr: '0x0000000000000000000000000000000000000001',
        timeStamp: 1597863005
      }
    ]
  )

mock.onGet(`${baseApiUrl}/batch/${mockedBatchId}/txs`)
  .reply(
    200,
    {
      L1Txs: [
        {
          TxID: 101,
          Amount: 243,
          Position: 1
        },
        {
          TxID: 102,
          Amount: 116,
          Position: 5
        },
        {
          TxID: 103,
          Amount: 535,
          Position: 9
        }
      ],
      L2Txs: [
        {
          TxID: 307,
          Amount: 540,
          Fee: 115,
          Position: 2
        },
        {
          TxID: 308,
          Amount: 241,
          Fee: 99,
          Position: 3
        },
        {
          TxID: 310,
          Amount: 999,
          Fee: 90,
          Position: 15
        },
        {
          TxID: 311,
          Amount: 423,
          Fee: 101,
          Position: 23
        }
      ]
    }
  )

mock.onGet(`${baseApiUrl}/coordinators/${mockedCoordinatorId}`)
  .reply(
    200,
    [
      {
        Forger: '0x0000000000000000000000000000000000000002',
        Beneficiary: '0x000000000000000000000000000000aaaaa11111',
        Withdraw: '0x0000000000000000000000000000002222222222',
        URL: 'https://github.com/hermeznetwork/idocs/pull/164/files'
      }
    ]
  )

mock.onAny()
  .passThrough()

async function getAccounts (ethereumAddress) {
  const response = await axios.get(`${baseApiUrl}/account/${ethereumAddress}`)

  return response.data
}

async function getAccount (ethereumAddress, tokenId) {
  const response = await axios.get(`${baseApiUrl}/account/${ethereumAddress}/${tokenId}`)

  return response.data
}

async function getTransactions (ethereumAddress, tokenId) {
  const params = {
    ...(tokenId ? { tokenId } : {})
  }
  const response = await axios.get(
    `${baseApiUrl}/account/${ethereumAddress}/txs/history`,
    { params }
  )

  return response.data
}

async function getTokens () {
  const response = await axios.get(`${baseApiUrl}/tokens`)

  return response.data
}

async function getBatches (coordinatorId) {
  const params = coordinatorId ? '/' + coordinatorId : ''

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
