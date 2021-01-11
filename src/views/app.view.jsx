import React from 'react'
import { Route, Switch } from 'react-router-dom'
import hermez from '@hermeznetwork/hermezjs'

import Layout from './shared/layout/layout.view'
import routes from '../routing/routes'
import useAppStyles from './app.styles'

function App () {
  useAppStyles()

  React.useEffect(() => {
    hermez.CoordinatorAPI.setBaseApiUrl(process.env.REACT_APP_HERMEZ_API_URL)
    hermez.Providers.setProvider(process.env.REACT_APP_ETHEREUM_PROVIDER)
  })

  return (
    <>
      <Route>
        <Layout>
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
        </Layout>
      </Route>
    </>
  )
}

export default App
