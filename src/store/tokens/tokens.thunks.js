import * as tokensActionTypes from './tokens.actions'
import { CoordinatorAPI } from '@hermeznetwork/hermezjs'

/**
 * Fetches the tokens
 * @returns {void}
 */
function fetchTokens (fromItem) {
  return (dispatch) => {
    dispatch(tokensActionTypes.loadTokens())

    return CoordinatorAPI.getTokens(undefined, undefined, fromItem)
      .then(res => dispatch(tokensActionTypes.loadTokensSuccess(res)))
      .catch(err => dispatch(tokensActionTypes.loadTokensFailure(err)))
  }
}

export { fetchTokens }
