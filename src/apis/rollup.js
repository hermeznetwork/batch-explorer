import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios)
const baseApiUrl = process.env.REACT_APP_ROLLUP_API_URL
const mockedSlotNum = 784

mock.onGet(`${baseApiUrl}/slots/${mockedSlotNum}`)
  .reply(
    200,
    {
      slotNum: 784,
      firstBlock: 0,
      lastBlock: 0,
      closedAuction: true,
      winner: {
        forgerAddr: '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
        withdrawAddr: '0xaa942cfcd25ad4d90a62358b0dd84f33b398262a',
        URL: 'https://hermez.io',
        ethereumBlock: 0
      },
      batchNums: [
        5432
      ]
    }
  )

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
    `${baseApiUrl}/transactions-history?hermezEthereumAddress=${ethereumAddress}`,
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
  const response = await axios.get(`${baseApiUrl}/transactions-history?batchNum=${batchId}`)

  return response.data
}

async function getCoordinator (coordinatorId) {
  const response = await axios.get(`${baseApiUrl}/coordinators/${coordinatorId}`)

  return response.data
}

async function getSlot (slotNum) {
  const response = await axios.get(`${baseApiUrl}/slots/${slotNum}`)

  return response.data
}

async function getBids (slotNum) {
  const params = {
    ...(slotNum ? { slotNum } : {})
  }

  const response = await axios.get(
    `${baseApiUrl}/bids?${slotNum}`,
    { params }
  )

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
  getCoordinator,
  getSlot,
  getBids
}
