export const searchActionTypes = {
    LOAD_COORDINATOR: '[SEARCH] LOAD COORDINATOR',
    LOAD_COORDINATOR_SUCCESS: '[SEARCH] LOAD COORDINATOR SUCCESS',
    LOAD_COORDINATOR_FAILURE: '[SEARCH] LOAD COORDINATOR FAILURE',
    LOAD_ACCOUNT: '[SEARCH] LOAD ACCOUNT',
    LOAD_ACCOUNT_SUCCESS: '[SEARCH] LOAD ACCOUNT SUCCESS',
    LOAD_ACCOUNT_FAILURE: '[SEARCH] LOAD ACCOUNT FAILURE',
    RESET_STATE: '[SEARCH] RESET STATE'
  }
  
  function loadCoordinator () {
    return {
      type: searchActionTypes.LOAD_COORDINATOR
    }
  }
  
  function loadCoordinatorSuccess (coordinator) {
    return {
      type: searchActionTypes.LOAD_COORDINATOR_SUCCESS,
      coordinator
    }
  }
  
  function loadCoordinatorFailure () {
    return {
      type: searchActionTypes.LOAD_COORDINATOR_FAILURE
    }
  }

  function loadAccount () {
    return {
      type: searchActionTypes.LOAD_ACCOUNT
    }
  }
  
  function loadAccountSuccess (account) {
    return {
      type: searchActionTypes.LOAD_ACCOUNT_SUCCESS,
      account
    }
  }
  
  function loadAccountFailure () {
    return {
      type: searchActionTypes.LOAD_ACCOUNT_FAILURE
    }
  }

  function resetState () {
    return {
      type: searchActionTypes.RESET_STATE
    }
  }
  
  export {
    loadCoordinator,
    loadCoordinatorSuccess,
    loadCoordinatorFailure,
    loadAccount,
    loadAccountSuccess,
    loadAccountFailure,
    resetState
  }
  