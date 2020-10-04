const { ethers } = require('ethers')

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
  return ethers.utils.formatUnits(amountBigInt, decimals)
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
