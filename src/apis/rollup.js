import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios)
const mockedEthereumAddress = '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a'
const mockedTokenId = 0
const baseApiUrl = process.env.REACT_APP_ROLLUP_API_URL
const mockedBatchId = 222
const mockedCoordinatorId = '0x0000000000000000000000000000000000000002'

mock.onGet(`${baseApiUrl}/accounts/${mockedEthereumAddress}`)
  .reply(
    200,
    [
      {
        EthAddr: '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
        TokenID: 0,
        Balance: 2.38,
        Nonce: 112,
        PublicKey: 'bx1234123412341234cfcd25ad4d90a62358b0dd84'
      },
      {
        EthAddr: '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
        TokenID: 1,
        Balance: 102.8,
        Nonce: 414,
        PublicKey: 'bx1234123412341234cfcd25ad4d90a62358b11111'
      },
      {
        EthAddr: '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
        TokenID: 2,
        Balance: 320.19,
        Nonce: 233,
        PublicKey: 'bx1234123412341234cfcd25ad4d90a62358b22222'
      }
    ]
  )

mock.onGet(`${baseApiUrl}/accounts/${mockedEthereumAddress}/${mockedTokenId}`)
  .reply(
    200,
    {
      EthAddr: '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
      TokenID: 0,
      Balance: 2.38
    }
  )

mock.onGet(`${baseApiUrl}/accounts/${mockedEthereumAddress}/txs`)
  .reply(
    200,
    [
      {
        TxID: 'b89eaac7e61417341b710b727768294d0e6a277b',
        FromEthAddr: '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
        ToEthAddr: '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
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
        FromEthAddr: '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
        ToEthAddr: '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
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
        FromEthAddr: '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
        ToEthAddr: '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
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
        timeStamp: 1598436610
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
        timeStamp: 1546300800
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
  const response = await axios.get(`${baseApiUrl}/accounts/${ethereumAddress}`)

  return response.data
}

async function getAccount (ethereumAddress, tokenId) {
  const response = await axios.get(`${baseApiUrl}/accounts/${ethereumAddress}/${tokenId}`)

  return response.data
}

async function getTransactions (ethereumAddress, tokenId) {
  const params = {
    ...(tokenId ? { tokenId } : {})
  }
  const response = await axios.get(
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
  // TODO: Once Aranau updates API this should be hanged. Elias knows the details.
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
