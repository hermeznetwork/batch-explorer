export const globalActionTypes = {
    LOAD_MAINTENANCE_STATUS: '[HOME] LOAD MAINTENANCE STATUS',
    LOAD_MAINTENANCE_STATUS_SUCCESS: '[HOME] LOAD MAINTENANCE STATUS SUCCESS',
    LOAD_MAINTENANCE_STATUS_FAILURE: '[HOME] LOAD MAINTENANCE STATUS FAILURE',
    RESET_STATE: '[HOME] RESET_STATE'
  }
  
  function loadMaintenanceStatus () {
    return {
      type: globalActionTypes.LOAD_MAINTENANCE_STATUS
    }
  }
  
  function loadMaintenanceStatusSuccess (res) {
    return {
      type: globalActionTypes.LOAD_MAINTENANCE_STATUS_SUCCESS,
      data: res
    }
  }
  
  function loadMaintenanceStatusFailure () {
    return {
      type: globalActionTypes.LOAD_MAINTENANCE_STATUS_FAILURE
    }
  }
  
  function resetState () {
    return {
      type: globalActionTypes.RESET_STATE
    }
  }
  
  export {
    loadMaintenanceStatus,
    loadMaintenanceStatusSuccess,
    loadMaintenanceStatusFailure,
    resetState
  }
  