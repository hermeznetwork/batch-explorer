import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { useTheme } from 'react-jss'

import useBatchStyles from './batch.styles'
import Spinner from '../shared/spinner/spinner.view'
import Container from '../shared/container/container.view'
import BatchDetails from './components/batch-details/batch-details.view'
import TransactionsList from '../shared/transactions-list/transactions-list.view'
import { fetchBatch, fetchTransactions } from '../../store/batch/batch.thunks'
import InfiniteScroll from '../shared/infinite-scroll/infinite-scroll.view'
import { resetState } from '../../store/batch/batch.actions'
import Title from '../shared/title/title'

function Batch ({
  onLoadBatch,
  batchTask,
  onLoadTransactions,
  transactionsTask,
  onCleanup
}) {
  const theme = useTheme()
  const classes = useBatchStyles()
  const { batchNum } = useParams()

  React.useEffect(() => {
    onLoadBatch(batchNum)
    onLoadTransactions(batchNum)
  }, [batchNum, onLoadBatch, onLoadTransactions])

  React.useEffect(() => onCleanup, [onCleanup])

  return (
    <div className={classes.root}>
      <Container backgroundColor={theme.palette.white} disableTopGutter>
        <div className={classes.wrapper}>
          {(() => {
            switch (batchTask.status) {
              case 'loading': {
                return (
                  <>
                    <Title>Batch</Title>
                    <Spinner />
                  </>
                )
              }
              case 'failed': {
                return (
                  <>
                    <Title>Batch</Title>
                    <p>{batchTask.error}</p>
                  </>
                )
              }
              case 'successful': {
                return (
                  <section>
                    <Title>Batch {batchTask.data.batchNum}</Title>
                    <BatchDetails
                      batch={batchTask.data}
                    />
                  </section>
                )
              }
              default: {
                return <></>
              }
            }
          })()}

          <Title>Batch transactions</Title>
          {(() => {
            switch (transactionsTask.status) {
              case 'loading': {
                return <Spinner />
              }
              case 'failed': {
                return <p>{transactionsTask.error}</p>
              }
              case 'reloading':
              case 'successful': {
                if (transactionsTask.data.transactions.length === 0) {
                  return <p>There are no transactions for this batch</p>
                }

                return (
                  <section>
                    <InfiniteScroll
                      asyncTaskStatus={transactionsTask.status}
                      paginationData={transactionsTask.data.pagination}
                      onLoadNextPage={(fromItem) => {
                        if (transactionsTask.status === 'successful') {
                          onLoadTransactions(
                            batchNum,
                            fromItem
                          )
                        }
                      }}
                    >
                      <TransactionsList
                        transactions={transactionsTask.data.transactions}
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

Batch.propTypes = {
  onLoadBatch: PropTypes.func.isRequired,
  batchTask: PropTypes.object.isRequired,
  onLoadTransactions: PropTypes.func.isRequired,
  transactionsTask: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  batchTask: state.batch.batchTask,
  transactionsTask: state.batch.transactionsTask
})

const mapDispatchToProps = (dispatch) => ({
  onLoadBatch: (batchNum) => dispatch(fetchBatch(batchNum)),
  onLoadTransactions: (batchNum, fromItem) => dispatch(fetchTransactions(batchNum, fromItem)),
  onCleanup: () => dispatch(resetState())
})

export default connect(mapStateToProps, mapDispatchToProps)(Batch)
