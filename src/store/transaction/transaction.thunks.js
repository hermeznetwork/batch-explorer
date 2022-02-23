import * as transactionActionTypes from "./transaction.actions";
import { CoordinatorAPI } from "@hermeznetwork/hermezjs";
import { HttpStatusCode } from "@hermeznetwork/hermezjs/src/http";

/**
 * Fetches the details of a transaction
 * @param {string} transactionId - Transaction id
 * @returns {void}
 */
function fetchTransaction(transactionId) {
  return (dispatch) => {
    dispatch(transactionActionTypes.loadTransaction());

    return CoordinatorAPI.getHistoryTransaction(transactionId)
      .then((res) => dispatch(transactionActionTypes.loadTransactionSuccess(res)))
      .catch((err) => {
        if (err.response?.status === HttpStatusCode.NOT_FOUND) {
          return CoordinatorAPI.getPoolTransaction(transactionId)
            .then((res) => dispatch(transactionActionTypes.loadTransactionSuccess(res)))
            .catch(() => dispatch(transactionActionTypes.loadTransactionFailure()));
        } else {
          dispatch(transactionActionTypes.loadTransactionFailure());
        }
      });
  };
}

export { fetchTransaction };
