import * as homeActions from './home.actions'
import { CoordinatorAPI } from 'hermezjs'

/**
 * Fetches the complete list of batches
 *
 * @returns {void}
 */
function fetchBatches (fromItem) {
  return (dispatch) => {
    dispatch(homeActions.loadBatches())

    return CoordinatorAPI.getBatches(fromItem)
      .then(res => dispatch(homeActions.loadBatchesSuccess(res)))
      .catch(err => dispatch(homeActions.loadBatchesFailure(err)))
  }
}

/**
 * Fetches information that represents the current state of the network, metrics and statistics.
 *
 * @returns {void}
 */
function fetchOverview () {
  return (dispatch) => {
    dispatch(homeActions.loadOverview())

    return CoordinatorAPI.getState()
      .then((res) => dispatch(homeActions.loadOverviewSuccess(res)))
      .catch(err => dispatch(homeActions.loadOverviewFailure(err)))
  }
}

export { fetchBatches, fetchOverview }
