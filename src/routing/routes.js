import Home from "../views/home/home.view";
import Batch from "../views/batch/batch.view";
import Coordinator from "../views/coordinator/coordinator.view";
import UserAccount from "../views/user-account/user-account.view";
import Transaction from "../views/transaction/transaction.view";
import Slot from "../views/slot/slot.view";
import TokenAccount from "../views/token-account/token-account.view";
import SearchError from "../views/search-error/search-error.view";
import Tokens from "../views/tokens/tokens.view";

const routes = [
  {
    path: "/",
    label: "Home",
    Component: Home,
  },
  {
    path: "/batch/:batchNum",
    Component: Batch,
  },
  {
    path: "/coordinator/:coordinatorId",
    Component: Coordinator,
  },
  {
    path: "/user-account/:address",
    Component: UserAccount,
  },
  {
    path: "/transaction/:transactionId",
    Component: Transaction,
  },
  {
    path: "/slot/:slotNum",
    Component: Slot,
  },
  {
    path: "/token-account/:accountIndex",
    Component: TokenAccount,
  },
  {
    path: "/search-error/:searchTerm",
    Component: SearchError,
  },
  {
    path: "/tokens",
    Component: Tokens,
  },
];

export default routes;
