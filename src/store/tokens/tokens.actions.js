export const tokensActionTypes = {
  LOAD_TOKENS: '[TOKENS] LOAD TOKENS',
  LOAD_TOKENS_SUCCESS: '[TOKENS] LOAD TOKENS SUCCESS',
  LOAD_TOKENS_FAILURE: '[TOKENS] LOAD TOKENS FAILURE',
  RESET_STATE: '[TOKENS] RESET_STATE'
}

function loadTokens () {
  return {
    type: tokensActionTypes.LOAD_TOKENS
  }
}

function loadTokensSuccess (tokens) {
  return {
    type: tokensActionTypes.LOAD_TOKENS_SUCCESS,
    tokens
  }
}

function loadTokensFailure () {
  return {
    type: tokensActionTypes.LOAD_TOKENS_FAILURE
  }
}

function resetState () {
  return {
    type: tokensActionTypes.RESET_STATE
  }
}

export {
  loadTokens,
  loadTokensSuccess,
  loadTokensFailure,
  resetState
}
