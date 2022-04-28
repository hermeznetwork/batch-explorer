import { CoordinatorAPI } from "@hermeznetwork/hermezjs";

import * as searchActions from "./search.actions";

/**
 * Fetches coordinator details for the specified bidder address
 * @param {string} forgerAddr - Forger address
 * @returns {void}
 */
function fetchCoordinator(forgerAddr) {
  return (dispatch) => {
    dispatch(searchActions.loadCoordinator());

    return CoordinatorAPI.getCoordinators(forgerAddr)
      .then((res) => {
        if (res.coordinators.length > 0) {
          dispatch(searchActions.loadCoordinatorSuccess(res.coordinators[0]));
        } else {
          dispatch(searchActions.loadCoordinatorFailure("Coordinator not found"));
        }
      })
      .catch((err) => dispatch(searchActions.loadCoordinatorFailure(err)));
  };
}

/**
 * Fetches the account details for the specified account index
 * @param {string} accountIndex - Account index
 * @returns {void}
 */
function fetchAccount(accountIndex) {
  return (dispatch) => {
    dispatch(searchActions.loadAccount());

    return CoordinatorAPI.getAccount(accountIndex)
      .then((res) => dispatch(searchActions.loadAccountSuccess(res)))
      .catch((err) => dispatch(searchActions.loadAccountFailure(err)));
  };
}

export { fetchCoordinator, fetchAccount };
