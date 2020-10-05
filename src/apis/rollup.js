import axios from 'axios'

const baseApiUrl = process.env.REACT_APP_ROLLUP_API_URL

async function getAccounts (hezEthereumAddress, BJJ, tokenId) {
  const params = {
    ...(hezEthereumAddress ? { hezEthereumAddress } : {}),
    ...(BJJ ? { BJJ } : {}),
    ...(tokenId ? { tokenId } : {})
  }
  const response = await axios.get(
      `${baseApiUrl}/accounts`,
      { params }
  )

  return response.data
}

async function getHistoryTransactions (hezEthereumAddress, tokenId, batchNum, accountIndex) {
  const params = {
    ...(hezEthereumAddress ? { hezEthereumAddress } : {}),
    ...(tokenId ? { tokenId } : {}),
    ...(batchNum ? { batchNum } : {}),
    ...(accountIndex ? { accountIndex } : {})
  }
  const response = await axios.get(
    `${baseApiUrl}/transactions-history`,
    { params }
  )

  return response.data
}

async function getHistoryTransaction (transactionId) {
  const response = await axios.get(`${baseApiUrl}/transactions-history/${transactionId}`)

  return response.data
}

async function getPoolTransaction (transactionId) {
  const response = await axios.get(`${baseApiUrl}/transactions-pool/${transactionId}`)

  return response.data
}

async function getTokens () {
  const response = await axios.get(`${baseApiUrl}/tokens`)

  return response.data
}

async function getBatches (forgerAddr, minBatchNum, maxBatchNum) {
  const params = {
    ...(forgerAddr ? { forgerAddr } : {}),
    ...(minBatchNum ? { minBatchNum } : {}),
    ...(maxBatchNum ? { maxBatchNum } : {})
  }
  const response = await axios.get(
    `${baseApiUrl}/batches`,
    { params }
  )

  return response.data
}

async function getBatch (batchNum) {
  const response = await axios.get(`${baseApiUrl}/batches/${batchNum}`)

  return response.data
}

async function getCoordinator (forgerAddr) {
  const response = await axios.get(`${baseApiUrl}/coordinators/${forgerAddr}`)

  return response.data
}

async function getOverview () {
  const response = await axios.get(`${baseApiUrl}/state`)

  return response.data
}

async function getSlot (slotNum) {
  const response = await axios.get(`${baseApiUrl}/slots/${slotNum}`)

  return response.data
}

async function getBids (slotNum, forgerAddr) {
  const params = {
    ...(slotNum ? { slotNum } : {}),
    ...(forgerAddr ? { forgerAddr } : {})
  }

  const response = await axios.get(
    `${baseApiUrl}/bids`,
    { params }
  )

  return response.data
}

export {
  getAccounts,
  getHistoryTransactions,
  getHistoryTransaction,
  getPoolTransaction,
  getTokens,
  getBatches,
  getBatch,
  getCoordinator,
  getOverview,
  getSlot,
  getBids
}
