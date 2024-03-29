import { coordinatorActionTypes } from "./coordinator.actions";
import { getPaginationData } from "../../utils/api";
import { PaginationOrder } from "@hermeznetwork/hermezjs/src/api";

const initialCoordinatorState = {
  coordinatorTask: {
    status: "pending",
  },
  coordinatorVersionTask: {
    status: "pending",
  },
  batchesTask: {
    status: "pending",
  },
  bidsTask: {
    status: "pending",
  },
};

function coordinatorReducer(state = initialCoordinatorState, action) {
  switch (action.type) {
    case coordinatorActionTypes.LOAD_COORDINATOR: {
      return {
        ...state,
        coordinatorTask: {
          status: "loading",
        },
      };
    }
    case coordinatorActionTypes.LOAD_COORDINATOR_SUCCESS: {
      return {
        ...state,
        coordinatorTask: {
          status: "successful",
          data: action.coordinator,
        },
      };
    }
    case coordinatorActionTypes.LOAD_COORDINATOR_FAILURE: {
      return {
        ...state,
        coordinatorTask: {
          status: "failed",
          error: "Coordinator does not exist or cannot be loaded.",
        },
      };
    }
    case coordinatorActionTypes.LOAD_COORDINATOR_VERSION: {
      return {
        ...state,
        coordinatorTask: {
          status: "loading",
        },
      };
    }
    case coordinatorActionTypes.LOAD_COORDINATOR_VERSION_SUCCESS: {
      return {
        ...state,
        coordinatorVersionTask: {
          status: "successful",
          data: action.data.version,
        },
      };
    }
    case coordinatorActionTypes.LOAD_COORDINATOR_VERSION_FAILURE: {
      return {
        ...state,
        coordinatorTask: {
          status: "failed",
          error: "An error occurred. Coordinator does not exist or cannot be loaded.",
        },
      };
    }
    case coordinatorActionTypes.LOAD_BATCHES: {
      return {
        ...state,
        batchesTask:
          state.batchesTask.status === "pending"
            ? { status: "loading" }
            : { status: "reloading", data: state.batchesTask.data },
      };
    }
    case coordinatorActionTypes.LOAD_BATCHES_SUCCESS: {
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
    case coordinatorActionTypes.LOAD_BATCHES_FAILURE: {
      return {
        ...state,
        batchesTask: {
          status: "failed",
          error: "Batches do not exist or cannot be loaded.",
        },
      };
    }
    case coordinatorActionTypes.LOAD_BIDS: {
      return {
        ...state,
        bidsTask:
          state.bidsTask.status === "pending"
            ? { status: "loading" }
            : { status: "reloading", data: state.bidsTask.data },
      };
    }
    case coordinatorActionTypes.LOAD_BIDS_SUCCESS: {
      const bids =
        state.bidsTask.status === "reloading"
          ? [...state.bidsTask.data.bids, ...action.data.bids]
          : action.data.bids;
      const pagination = getPaginationData(action.data.pendingItems, bids);

      return {
        ...state,
        bidsTask: {
          status: "successful",
          data: { bids, pagination },
        },
      };
    }
    case coordinatorActionTypes.LOAD_BIDS_FAILURE: {
      return {
        ...state,
        bidsTask: {
          status: "failed",
          error: "Bids do not exist or cannot be loaded.",
        },
      };
    }
    case coordinatorActionTypes.RESET_STATE: {
      return initialCoordinatorState;
    }
    default: {
      return state;
    }
  }
}

export default coordinatorReducer;
