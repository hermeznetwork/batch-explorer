import { ethers } from 'ethers'

/**
 * Converts an amount to BigInt and decimals to Float
 *
 * @param {string} amountBigInt - String representing the amount as a BigInt with no decimals
 * @param {number} decimals - Number of decimal points the amount actually has
 *
 * @returns {string}
 *
 */
function getTokenAmountString (amountBigInt, decimals) {
  // All amounts need to be rouded to a maximum of 6 decimals
  return parseFloat(ethers.utils.formatUnits(amountBigInt, decimals)).toFixed(6)
}

/**
 * Converts an amount in Float with decimals to BigInt
 *
 * @param {string} amountString - String representing the amount as a Float with decimals
 * @param {string} decimals - Number of decimal points the amount actually has
 *
 * @returns {bigint}
 *
 */
function getTokenAmountBigInt (amountString, decimals) {
  return ethers.utils.parseUnits(amountString, decimals)
}

export {
  getTokenAmountString,
  getTokenAmountBigInt
}
