import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios)
const mockedEthereumAddress = '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a'
const mockedTokenId = 0
const baseApiUrl = process.env.REACT_APP_ROLLUP_API_URL
const mockedBatchId = 222

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

mock.onGet(`${baseApiUrl}/batch/${mockedBatchId}/txs`)
  .reply(
    200,
    {
      L1Txs: [
        {
          TxID: 101,
          TokenID: 2,
          Amount: 243
        },
        {
          TxID: 102,
          TokenID: 2,
          Amount: 116
        },
        {
          TxID: 103,
          TokenID: 1,
          Amount: 535
        }
      ],
      L2Txs: [
        {
          TxID: 307,
          BatchNum: 222,
          Amount: 540,
          Fee: 115
        },
        {
          TxID: 308,
          BatchNum: 221,
          Amount: 241,
          Fee: 99
        },
        {
          TxID: 310,
          BatchNum: 221,
          Amount: 999,
          Fee: 90
        },
        {
          TxID: 311,
          BatchNum: 220,
          Amount: 423,
          Fee: 101
        }
      ]
    }
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

async function getBatches () {
  const response = await axios.get(`${baseApiUrl}/batches`)

  return response.data
}

async function getBatch (batchnum) {
  const response = await axios.get(`${baseApiUrl}/batch/${batchnum}/txs`)

  return response.data
}

export { getAccounts, getAccount, getTransactions, getTokens, getBatches, getBatch }
