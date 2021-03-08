import * as tokensActionTypes from './tokens.actions'
import { CoordinatorAPI } from '@hermeznetwork/hermezjs'

/**
 * Fetches the tokens
 * @returns {void}
 */
function fetchTokens (address, fromItem) {
  return (dispatch) => {
    dispatch(tokensActionTypes.loadTokens())

    return CoordinatorAPI.getTransactions(address, undefined, undefined, undefined, fromItem)
      .then(res => {
        if (res.tokens.length > 0) {
          dispatch(tokensActionTypes.loadTokensSuccess(res))
        } else {
          dispatch(tokensActionTypes.loadTokensFailure())
        }
      })
      .catch(err => dispatch(tokensActionTypes.loadTokensFailure(err)))
  }
}

export { fetchTokens }
