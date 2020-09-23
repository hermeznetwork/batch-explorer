import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from './shared/layout/layout.view'
import routes from '../routing/routes'

function App () {
  return (
    <>
      {/* TODO: Remove this link once Transactions page is done,
    since User account page should be linked from there */}
      <strong><a href='http://localhost:3000/user-account/hez:0xaa942cfcd25ad4d90a62358b0dd84f33b398262a'>TEST USER ACCOUNT</a></strong>
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
    </>
  )
}

export default App
