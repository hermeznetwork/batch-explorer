import { CoordinatorAPI } from "@hermeznetwork/hermezjs";
import { PaginationOrder } from "@hermeznetwork/hermezjs/src/api";

import * as homeActions from "./home.actions";

/**
 * Fetches the complete list of batches
 *
 * @returns {void}
 */
function fetchBatches(fromItem) {
  return (dispatch) => {
    dispatch(homeActions.loadBatches());

    return CoordinatorAPI.getBatches(undefined, undefined, fromItem, PaginationOrder.DESC)
      .then((res) => dispatch(homeActions.loadBatchesSuccess(res)))
      .catch((err) => dispatch(homeActions.loadBatchesFailure(err)));
  };
}

export { fetchBatches };
