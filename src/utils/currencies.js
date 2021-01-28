import { MAX_DECIMALS_UNTIL_ZERO_AMOUNT } from '../constants'

function getFixedTokenAmount (amount, decimals) {
  if (!amount || !decimals) {
    return undefined
  }

  // We can lose precision as there will never be more than MAX_DECIMALS_UNTIL_ZERO_AMOUNT significant digits
  const balanceWithDecimals = Number(amount) / Math.pow(10, decimals)
  const amountSignificantDigits = amount.length - 1
  const significantDigits = decimals - amountSignificantDigits

  if (significantDigits > MAX_DECIMALS_UNTIL_ZERO_AMOUNT) {
    return '0'
  }

  const significantDigitsFinal = significantDigits > 2 ? significantDigits : 2

  return balanceWithDecimals.toFixed(significantDigitsFinal)
}

export {
  getFixedTokenAmount
}
