import axios from 'axios'

const baseApiUrl = process.env.REACT_APP_ROLLUP_API_URL

async function getAccounts (hermezEthereumAddress, tokenId) {
  const params = {
    ...(hermezEthereumAddress ? { hermezEthereumAddress } : {}),
    ...(tokenId ? { tokenId } : {})
  }
  const response = await axios.get(
      `${baseApiUrl}/accounts`,
      { params }
  )

  return response.data
}

async function getTransactions (hermezEthereumAddress, tokenId, batchNum) {
  const params = {
    ...(hermezEthereumAddress ? { hermezEthereumAddress } : {}),
    ...(tokenId ? { tokenId } : {}),
    ...(batchNum ? { batchNum } : {})
  }
  const response = await axios.get(
    `${baseApiUrl}/transactions-history`,
    { params }
  )

  return response.data
}

async function getTokens () {
  const response = await axios.get(`${baseApiUrl}/tokens`)

  return response.data
}

async function getBatches (forgerAddr) {
  const params = {
    ...(forgerAddr ? { forgerAddr } : {})
  }
  const response = await axios.get(
    `${baseApiUrl}/batches`,
    { params }
  )

  return response.data
}

async function getBatch (batchId) {
  const response = await axios.get(`${baseApiUrl}/batches/${batchId}`)

  return response.data
}

async function getCoordinator (coordinatorId) {
  const response = await axios.get(`${baseApiUrl}/coordinators/${coordinatorId}`)

  return response.data
}

async function getOverview () {
  const response = await axios.get(`${baseApiUrl}/state`)

  return response.data
}

export {
  getAccounts,
  getTransactions,
  getTokens,
  getBatches,
  getBatch,
  getCoordinator,
  getOverview
}
