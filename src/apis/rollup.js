import axios from 'axios'
import { extractJSON } from './http.js'

const baseApiUrl = process.env.REACT_APP_ROLLUP_API_URL
const hezEthereumAddressPattern = new RegExp('^hez:0x[a-fA-F0-9]{40}$')
const bjjAddressPattern = new RegExp('^hez:[A-Za-z0-9_-]{44}$')
const DEFAULT_PAGE_SIZE = 20

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

function getPageData (fromItem) {
  return {
    ...(fromItem !== undefined ? { fromItem } : {}),
    limit: DEFAULT_PAGE_SIZE
  }
}

async function getAccounts (address, tokenIds, fromItem) {
  const params = {
    ...(isEthereumAddress(address) ? { hezEthereumAddress: address } : {}),
    ...(isBjjAddress(address) ? { BJJ: address } : {}),
    ...(tokenIds ? { tokenIds } : {}),
    ...getPageData(fromItem)
  }
  return extractJSON(axios.get(`${baseApiUrl}/accounts`, { params }))
}

async function getAccount (accountIndex) {
  return extractJSON(axios.get(`${baseApiUrl}/accounts/${accountIndex}`))
}

async function getTransactions (address, tokenIds, batchNum, accountIndex, fromItem) {
  const params = {
    ...(isEthereumAddress(address) ? { hezEthereumAddress: address } : {}),
    ...(isBjjAddress(address) ? { BJJ: address } : {}),
    ...(tokenIds ? { tokenIds } : {}),
    ...(batchNum ? { batchNum } : {}),
    ...(accountIndex ? { accountIndex } : {}),
    ...getPageData(fromItem)
  }
  return extractJSON(axios.get(`${baseApiUrl}/transactions-history`, { params }))
}

async function getHistoryTransaction (transactionId) {
  return extractJSON(axios.get(`${baseApiUrl}/transactions-history/${transactionId}`))
}

async function getPoolTransaction (transactionId) {
  return extractJSON(axios.get(`${baseApiUrl}/transactions-pool/${transactionId}`))
}

async function getTokens (tokenIds) {
  const params = {
    ...(tokenIds ? { ids: tokenIds.join(',') } : {})
  }

  return extractJSON(axios.get(`${baseApiUrl}/tokens`, { params }))
}

async function getBatches (forgerAddr, slotNum) {
  const params = {
    ...(forgerAddr ? { forgerAddr } : {}),
    ...(slotNum ? { slotNum } : {})
  }
  return extractJSON(axios.get(`${baseApiUrl}/batches`, { params }))
}

async function getBatch (batchNum) {
  return extractJSON(axios.get(`${baseApiUrl}/batches/${batchNum}`))
}

async function getCoordinator (forgerAddr) {
  return extractJSON(axios.get(`${baseApiUrl}/coordinators/${forgerAddr}`))
}

async function getOverview () {
  return extractJSON(axios.get(`${baseApiUrl}/state`))
}

async function getSlot (slotNum) {
  return extractJSON(axios.get(`${baseApiUrl}/slots/${slotNum}`))
}

async function getBids (slotNum, forgerAddr) {
  const params = {
    ...(slotNum ? { slotNum } : {}),
    ...(forgerAddr ? { forgerAddr } : {})
  }
  return extractJSON(axios.get(`${baseApiUrl}/bids`, { params }))
}

export {
  getAccounts,
  getAccount,
  getTransactions,
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
