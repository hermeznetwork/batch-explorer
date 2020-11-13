import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTheme } from 'react-jss'

import useHomeStyles from './home.styles'
import Spinner from '../shared/spinner/spinner.view'
import Container from '../shared/container/container.view'
import BatchesList from './components/batches-list/batches-list.view'
import Overview from './components/overview/overview.view'
import { fetchBatches, fetchOverview } from '../../store/home/home.thunks'
import InfiniteScroll from '../shared/infinite-scroll/infinite-scroll.view'
import Title from '../shared/title/title'

function Home ({
  onLoadBatches,
  batchesTask,
  onLoadOverview,
  overviewTask
}) {
  React.useEffect(() => {
    onLoadBatches()
    onLoadOverview()
  }, [onLoadBatches, onLoadOverview])

  const theme = useTheme()
  const classes = useHomeStyles()

  return (
    <div className={classes.root}>
      <Container backgroundColor={theme.palette.primary.main} disableTopGutter>
        <div className={classes.wrapper}>
          {(() => {
            switch (overviewTask.status) {
              case 'loading': {
                return (
                  <>
                    <Title>Overview</Title>
                    <Spinner />
                  </>
                )
              }
              case 'failed': {
                return <p>{overviewTask.error}</p>
              }
              case 'successful': {
                return (
                  <>
                    <section className={classes.section}>
                      <Title>Overview</Title>
                      <Overview
                        overview={overviewTask.data}
                      />
                    </section>
                  </>
                )
              }
              default: {
                return <></>
              }
            }
          })()}

          {(() => {
            switch (batchesTask.status) {
              case 'loading': {
                return (
                  <>
                    <Title>Batches</Title>
                    <Spinner />
                  </>
                )
              }
              case 'failed': {
                return <p>{batchesTask.error}</p>
              }
              case 'successful': {
                return (
                  <>
                    <section className={classes.section}>
                      <Title>Batches</Title>
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
                  </>
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
  onLoadOverview: () => dispatch(fetchOverview())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
