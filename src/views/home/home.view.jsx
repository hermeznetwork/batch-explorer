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
              case 'successful': {
                return (
                  <>
                    <section className={classes.section}>
                      <BatchesList
                        batches={batchesTask.data.batches}
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
  onLoadBatches: () => dispatch(fetchBatches()),
  onLoadOverview: () => dispatch(fetchOverview())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
