import Home from '../views/home/home.view'
import Batch from '../views/batch/batch.view'
import Coordinator from '../views/coordinator/coordinator.view'
import UserAccount from '../views/user-account/user-account.view'

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
  }
]

export default routes
