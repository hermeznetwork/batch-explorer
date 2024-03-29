import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTheme } from 'react-jss'

import useHomeStyles from './home.styles'
import Spinner from '../shared/spinner/spinner.view'
import Container from '../shared/container/container.view'
import BatchesList from './components/batches-list/batches-list.view'
import Overview from './components/overview/overview.view'
import NetworkStatusIndicator from './components/network-status-indicator/network-status-indicator.view'
import { fetchBatches, fetchOverview } from '../../store/home/home.thunks'
import InfiniteScroll from '../shared/infinite-scroll/infinite-scroll.view'
import { resetState } from '../../store/home/home.actions'
import Title from '../shared/title/title'

function Home ({
  onLoadBatches,
  batchesTask,
  onLoadOverview,
  overviewTask,
  onCleanup
}) {
  React.useEffect(() => {
    onLoadBatches()
    onLoadOverview()
  }, [onLoadBatches, onLoadOverview])

  React.useEffect(() => onCleanup, [onCleanup])

  const theme = useTheme()
  const classes = useHomeStyles()

  return (
    <div className={classes.root}>
      <Container backgroundColor={theme.palette.primary.main} disableTopGutter>
        <div className={classes.wrapper}>
          <div className={classes.networkStatusTitle}>
            <Title>Network Status:</Title>
          </div>
          <NetworkStatusIndicator />

          <Title>Overview</Title>
          {(() => {
            switch (overviewTask.status) {
              case 'loading': {
                return <Spinner />
              }
              case 'failed': {
                return <p>{overviewTask.error}</p>
              }
              case 'successful': {
                return (
                  <section className={classes.section}>
                    <Overview
                      overview={overviewTask.data}
                    />
                  </section>
                )
              }
              default: {
                return <></>
              }
            }
          })()}

          <Title>Batches</Title>
          {(() => {
            switch (batchesTask.status) {
              case 'loading': {
                return <Spinner />
              }
              case 'failed': {
                return <p>{batchesTask.error}</p>
              }
              case 'reloading':
              case 'successful': {
                return (
                  <section className={classes.section}>
                    <InfiniteScroll
                      asyncTaskStatus={batchesTask.status}
                      paginationData={batchesTask.data.pagination}
                      onLoadNextPage={(fromItem) => {
                        if (batchesTask.status === 'successful') {
                          onLoadBatches(
                            fromItem
                          )
                        }
                      }}
                    >
                      <BatchesList
                        batches={batchesTask.data.batches}
                      />
                    </InfiniteScroll>
                  </section>
                )
              }
              default: {
                return <></>
              }
            }
          })()}
        </div>
      </Container>
    </div>
  )
}

Home.propTypes = {
  onLoadBatches: PropTypes.func.isRequired,
  batchesTask: PropTypes.object.isRequired,
  onLoadOverview: PropTypes.func.isRequired,
  overviewTask: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  batchesTask: state.home.batchesTask,
  overviewTask: state.home.overviewTask
})

const mapDispatchToProps = (dispatch) => ({
  onLoadBatches: (fromItem) => dispatch(fetchBatches(fromItem)),
  onLoadOverview: () => dispatch(fetchOverview()),
  onCleanup: () => dispatch(resetState())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
