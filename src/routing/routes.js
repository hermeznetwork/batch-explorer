import Home from '../views/home/home.view'
import Batch from '../views/batch/batch.view'

const routes = [
  {
    path: '/',
    label: 'Home',
    component: Home
  },
  {
    path: '/batch/:batchId',
    component: Batch
  }
]

export default routes
