import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import hermez from '@hermeznetwork/hermezjs'

import Layout from './shared/layout/layout.view'
import routes from '../routing/routes'
import Spinner from '../views/shared/spinner/spinner.view'
import useAppStyles from './app.styles'
import { fetchMaintenanceStatus } from '../store/global/global.thunks'
import { resetState } from '../store/global/global.actions'

function App ({
  onLoadMaintenanceStatus,
  maintenanceStatusTask,
  onCleanup
}) {
  useAppStyles()

  React.useEffect(() => {
    onLoadMaintenanceStatus()
  }, [onLoadMaintenanceStatus])

  React.useEffect(() => onCleanup, [onCleanup])

  React.useLayoutEffect(() => {
    hermez.CoordinatorAPI.setBaseApiUrl(process.env.REACT_APP_HERMEZ_API_URL)
  }, [])

  return (
    <>
          {(() => {
            switch (maintenanceStatusTask.status) {
              case 'loading': {
                return <Spinner />
              }
              case 'failed': {
                return <p>{maintenanceStatusTask.error}</p>
              }
              case 'reloading':
              case 'successful': {
                // isBatchExplorerUnderMaintenance can have the following values:
                // 0 - NOT under maintenance
                // 1 - under maintenance
                const underMaintenance = Number.isInteger(maintenanceStatusTask.isBatchExplorerUnderMaintenance) && maintenanceStatusTask.isBatchExplorerUnderMaintenance !== 0;
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
              default: {
                return <></>
              }
            }
          })()}
    </>
  )
}

App.propTypes = {
  onLoadMaintenanceStatus: PropTypes.func.isRequired,
  maintenanceStatusTask: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  maintenanceStatusTask: state.global.maintenanceStatusTask
})

const mapDispatchToProps = (dispatch) => ({
  onLoadMaintenanceStatus: () => dispatch(fetchMaintenanceStatus()),
  onCleanup: () => dispatch(resetState())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
