import axios from 'axios'

const baseApiUrl = process.env.REACT_APP_ROLLUP_API_URL

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
