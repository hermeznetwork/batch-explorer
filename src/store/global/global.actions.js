export const globalActionTypes = {
  LOAD_TOKENS: '[GLOBAL] LOAD TOKENS',
  LOAD_TOKENS_SUCCESS: '[GLOBAL] LOAD TOKENS SUCCESS',
  LOAD_TOKENS_FAILURE: '[GLOBAL] LOAD TOKENS FAILURE',
  LOAD_BATCHES: '[GLOBAL] LOAD BATCHES',
  LOAD_BATCHES_SUCCESS: '[GLOBAL] LOAD BATCHES SUCCESS',
  LOAD_BATCHES_FAILURE: '[GLOBAL] LOAD BATCHES FAILURE'
}

function loadTokens () {
  return {
    type: globalActionTypes.LOAD_TOKENS
  }
}

function loadTokensSuccess (accounts) {
  return {
    type: globalActionTypes.LOAD_TOKENS_SUCCESS,
    accounts: accounts
  }
}

function loadTokensFailure () {
  return {
    type: globalActionTypes.LOAD_TOKENS_FAILURE
  }
}

function loadBatches () {
  return {
    type: globalActionTypes.LOAD_BATCHES
  }
}

function loadBatchesSuccess (batches) {
  return {
    type: globalActionTypes.LOAD_BATCHES_SUCCESS,
    batches: batches
  }
}

function loadBatchesFailure () {
  return {
    type: globalActionTypes.LOAD_BATCHES_FAILURE
  }
}

export {
  loadTokens,
  loadTokensSuccess,
  loadTokensFailure,
  loadBatches,
  loadBatchesSuccess,
  loadBatchesFailure
}
