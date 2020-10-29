import { ethers } from 'ethers'

/**
 * Converts an amount to BigInt and decimals to Float
 *
 * @param {String} amountBigInt - String representing the amount as a BigInt with no decimals
 * @param {Number} decimals - Number of decimal points the amount actually has
 *
 * @returns {String}
 *
 */
function getTokenAmountString (amountBigInt, decimals) {
  // All amounts need to be rouded to a maximum of 6 decimals
  return parseFloat(ethers.utils.formatUnits(amountBigInt, decimals)).toFixed(6)
}

/**
 * Converts an amount in Float with decimals to BigInt
 *
 * @param {String} amountString - String representing the amount as a Float with decimals
 * @param {String} decimals - Number of decimal points the amount actually has
 *
 * @returns {BigInt}
 *
 */
function getTokenAmountBigInt (amountString, decimals) {
  return ethers.utils.parseUnits(amountString, decimals)
}

export {
  getTokenAmountString,
  getTokenAmountBigInt
}
