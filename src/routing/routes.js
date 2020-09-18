import Home from '../views/home/home.view'
import Batch from '../views/batch/batch.view'
import Coordinator from '../views/coordinator/coordinator.view'
import UserAccount from '../views/user-account/user-account.view'
import Slot from '../views/slot/slot.view'

const routes = [
  {
    path: '/',
    label: 'Home',
    component: Home
  },
  {
    path: '/batch/:batchId',
    component: Batch
  },
  {
    path: '/coordinator/:coordinatorId',
    component: Coordinator
  },
  {
    path: '/user-account/:ethereumAddress',
    component: UserAccount
  },
  {
    path: '/slot/:slotNum',
    component: Slot
  }
]

export default routes
