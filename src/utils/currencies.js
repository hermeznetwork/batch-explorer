import { feeFactors } from '@hermeznetwork/hermezjs/src/fee-factors'
import { getTokenAmountString } from '@hermeznetwork/hermezjs/src/utils'

import { MAX_TOKEN_DECIMALS } from '../constants'

function getFixedTokenAmount (amount, decimals) {
  if (amount === undefined || decimals === undefined) {
    return undefined
  }

  // We can lose precision as there will never be more than MAX_DECIMALS_UNTIL_ZERO_AMOUNT significant digits
  const balanceWithDecimals = Number(amount) / Math.pow(10, decimals)

  return (Number(balanceWithDecimals.toFixed(MAX_TOKEN_DECIMALS))).toString()
}

/**
 * Converts a fee index to USD
 * @param {Number} feeIndex - The fee index from the Hermez protocol
 * @param {BigInt} amount - Amount in BigInt string value
 * @param {Object} token - Token object
 * @returns {String} Amount in USD
 */
function getFeeInUsd (feeIndex, amount, token) {
  const feeFactor = feeFactors[feeIndex]
  const amountFloat = Number(getTokenAmountString(amount, token.decimals))
  const feeInToken = feeFactor * amountFloat
  const feeInFiat = feeInToken * token.USD
  return feeInFiat.toFixed(2)
}

export {
  getFixedTokenAmount,
  getFeeInUsd
}
