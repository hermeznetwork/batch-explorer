import { homeActionTypes } from "./home.actions";
import { getPaginationData } from "../../utils/api";
import { PaginationOrder } from "@hermeznetwork/hermezjs/src/api";

const initialHomeState = {
  batchesTask: {
    status: "pending",
  },
};

function homeReducer(state = initialHomeState, action) {
  switch (action.type) {
    case homeActionTypes.LOAD_BATCHES: {
      return {
        ...state,
        batchesTask:
          state.batchesTask.status === "pending"
            ? { status: "loading" }
            : { status: "reloading", data: state.batchesTask.data },
      };
    }
    case homeActionTypes.LOAD_BATCHES_SUCCESS: {
      const batches =
        state.batchesTask.status === "reloading"
          ? [...state.batchesTask.data.batches, ...action.data.batches]
          : action.data.batches;
      const pagination = getPaginationData(action.data.pendingItems, batches, PaginationOrder.DESC);

      return {
        ...state,
        batchesTask: {
          status: "successful",
          data: { batches, pagination },
        },
      };
    }
    case homeActionTypes.LOAD_BATCHES_FAILURE: {
      return {
        ...state,
        batchesTask: {
          status: "failed",
          error: "Batches do not exist or cannot be loaded.",
        },
      };
    }
    case homeActionTypes.RESET_STATE: {
      return initialHomeState;
    }
    default: {
      return state;
    }
  }
}

export default homeReducer;
