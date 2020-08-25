import Home from '../views/home/home.view'
import Batch from '../views/batch/batch.view'
import Coordinator from '../views/coordinator/coordinator.view'

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
  }
]

export default routes
