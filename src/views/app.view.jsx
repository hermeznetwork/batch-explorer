import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import hermez from '@hermeznetwork/hermezjs'
import { WEBSITE_URL } from '../constants'

import Layout from './shared/layout/layout.view'
import routes from '../routing/routes'
import useAppStyles from './app.styles'

function App () {
  useAppStyles()

  // Under maintenance indicator can have the following values:
  // 0 - NOT under maintenance
  // 1 - under maintenance

  const [isBatchExplorerUnderMaintenance, setData] = React.useState([])

  const getData = () => {
    fetch(WEBSITE_URL + 'network-status.json',
      {
        headers: {
          Accept: 'application/json'
        }
      })
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        setData(data.isBatchExplorerUnderMaintenance)
      })
      .catch(() => {
        console.error(
          'Cannot obtain network status.'
        )
      })
  }

  React.useEffect(() => {
    getData()
  }, [])

  React.useLayoutEffect(() => {
    hermez.CoordinatorAPI.setBaseApiUrl(process.env.REACT_APP_HERMEZ_API_URL)
  }, [])

  const underMaintenance = Number.isInteger(isBatchExplorerUnderMaintenance) && isBatchExplorerUnderMaintenance !== 0

  return (
    <>
      <Route>
        <Layout displaySearchAndNavigation={underMaintenance ? false : true}>
          {underMaintenance
          ?
          <>
            <Route path={routes[0].path} component={routes[0].component}/>
            <Redirect to={routes[0].path} />
          </>
          : 
          <Switch>
            {routes.map(route =>
              <Route
                exact
                key={route.path}
                path={route.path}
                component={route.component}
              />
            )}
          </Switch>
          }
        </Layout>
      </Route>
    </>
  )
}

export default App
