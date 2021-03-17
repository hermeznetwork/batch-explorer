import * as globalActionTypes from './global.actions'

import { WEBSITE_URL } from '../../constants'

/**
 * Fetches maintenance status from hermez website
 *
 * @returns {void}
 */
function fetchMaintenanceStatus () {
  return (dispatch) => {
    dispatch(globalActionTypes.loadMaintenanceStatus())

    fetch(WEBSITE_URL + 'network-status.json',
      {
        headers: {
          Accept: 'application/json'
        }
      })
      .then(function (response) {
        return response.json()
      })
      .then(res => dispatch(globalActionTypes.loadMaintenanceStatusSuccess(res)))
      .catch(err => dispatch(globalActionTypes.loadMaintenanceStatusFailure(err)))

  }
}

export { fetchMaintenanceStatus }
