import axios from 'axios'

const baseApiUrl = process.env.REACT_APP_ROLLUP_API_URL
const hezEthereumAddressPattern = new RegExp('^hez:0x[a-fA-F0-9]{40}$')
const bjjAddressPattern = new RegExp('^hez:[A-Za-z0-9_-]{44}$')

function isEthereumAddress (test) {
  if (hezEthereumAddressPattern.test(test)) {
    return true
  }
  return false
}
function isBjjAddress (test) {
  if (bjjAddressPattern.test(test)) {
    return true
  }
  return false
}

async function getAccounts (address, tokenId) {
  const params = {
    ...(isEthereumAddress(address) ? { hezEthereumAddress: address } : {}),
    ...(isBjjAddress(address) ? { BJJ: address } : {}),
    ...(tokenId ? { tokenId } : {})
  }
  const response = await axios.get(
      `${baseApiUrl}/accounts`,
      { params }
  )

  return response.data
}

async function getHistoryTransactions (address, tokenId, batchNum, accountIndex) {
  const params = {
    ...(isEthereumAddress(address) ? { hezEthereumAddress: address } : {}),
    ...(isBjjAddress(address) ? { BJJ: address } : {}),
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

async function getBatches (forgerAddr, slotNum) {
  const params = {
    ...(forgerAddr ? { forgerAddr } : {}),
    ...(slotNum ? { slotNum } : {})
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
