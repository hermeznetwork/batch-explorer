import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from './shared/layout/layout.view'
import routes from '../routing/routes'

function App () {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default (App)
