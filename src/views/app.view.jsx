import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Layout from './shared/layout/layout.view'
import routes from '../routing/routes'
import { fetchBatches } from '../store/home/home.thunks'

function App ({ onLoadBatches }) {
  React.useEffect(() => {
    onLoadBatches()
  }, [onLoadBatches])

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

App.propTypes = {
  onLoadBatches: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  onLoadBatches: () => dispatch(fetchBatches())
})

export default connect(undefined, mapDispatchToProps)(App)
