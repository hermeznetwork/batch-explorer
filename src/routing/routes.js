import Home from '../views/home/home.view'
import Batch from '../views/batch/batch.view'
import Coordinator from '../views/coordinator/coordinator.view'
import UserAccount from '../views/user-account/user-account.view'
import Transaction from '../views/transaction/transaction.view'
import Slot from '../views/slot/slot.view'
import TokenAccount from '../views/token-account/token-account.view'
import SearchError from '../views/search-error/search-error.view'
import Tokens from '../views/tokens/tokens.view'
import UnderMaintenance from '../views/under-maintenance/under-maintenance.view'

const routes = [
  {
    path: '/under-maintenance',
    component: UnderMaintenance
  },
  {
    path: '/',
    label: 'Home',
    component: Home
  },
  {
    path: '/batch/:batchNum',
    component: Batch
  },
  {
    path: '/coordinator/:coordinatorId',
    component: Coordinator
  },
  {
    path: '/user-account/:address',
    component: UserAccount
  },
  {
    path: '/transaction/:transactionId',
    component: Transaction
  },
  {
    path: '/slot/:slotNum',
    component: Slot
  },
  {
    path: '/token-account/:accountIndex',
    component: TokenAccount
  },
  {
    path: '/search-error/:searchTerm',
    component: SearchError
  },
  {
    path: '/tokens',
    component: Tokens

  }
]

export default routes
