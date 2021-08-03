export const searchActionTypes = {
    LOAD_COORDINATOR: '[SEARCH] LOAD COORDINATOR',
    LOAD_COORDINATOR_SUCCESS: '[SEARCH] LOAD COORDINATOR SUCCESS',
    LOAD_COORDINATOR_FAILURE: '[SEARCH] LOAD COORDINATOR FAILURE',
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
  
  function resetState () {
    return {
      type: searchActionTypes.RESET_STATE
    }
  }
  
  export {
    loadCoordinator,
    loadCoordinatorSuccess,
    loadCoordinatorFailure,
    resetState
  }
  