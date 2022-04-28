import * as batchActions from "./batch.actions";
import { CoordinatorAPI } from "@hermeznetwork/hermezjs";

/**
 * Fetches the batch details for the specified batch number
 * @param {string} batchNum - Batch number
 * @returns {void}
 */
function fetchBatch(batchNum) {
  return (dispatch) => {
    dispatch(batchActions.loadBatch());

    return CoordinatorAPI.getBatch(batchNum)
      .then((res) => dispatch(batchActions.loadBatchSuccess(res)))
      .catch((err) => dispatch(batchActions.loadBatchFailure(err)));
  };
}

/**
 * Fetches the transactions details for the specified batch number
 * @param {string} batchNum - Batch number
 * @returns {void}
 */
function fetchTransactions(batchNum, fromItem) {
  return (dispatch) => {
    dispatch(batchActions.loadTransactions());

    return CoordinatorAPI.getTransactions(
      undefined,
      undefined,
      batchNum,
      undefined,
      fromItem,
      CoordinatorAPI.PaginationOrder.DESC
    )
      .then((res) => dispatch(batchActions.loadTransactionsSuccess(res)))
      .catch(() =>
        dispatch(
          batchActions.loadTransactionsFailure("An error occurred loading the transactions.")
        )
      );
  };
}

export { fetchBatch, fetchTransactions };
