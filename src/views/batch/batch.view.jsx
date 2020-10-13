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
import { fetchBatch, fetchBatchTransactions } from '../../store/batch/batch.thunks'

function Batch ({
  onLoadBatch,
  batchTask,
  onLoadBatchTransactionsList,
  batchTransactionsTask
}) {
  const theme = useTheme()
  const classes = useBatchStyles()
  const { batchNum } = useParams()

  React.useEffect(() => {
    onLoadBatch(batchNum)
    onLoadBatchTransactionsList(batchNum)
  }, [batchNum, onLoadBatch, onLoadBatchTransactionsList])

  return (
    <div className={classes.root}>
      <Container backgroundColor={theme.palette.white} disableTopGutter>
        <div className={classes.wrapper}>
          {(() => {
            switch (batchTask.status) {
              case 'loading': {
                return <Spinner />
              }
              case 'failed': {
                return <p>{batchTask.error}</p>
              }
              case 'successful': {
                return (
                  <section>
                    <h4 className={`${classes.title} ${classes.titleFirst}`}>Batch {batchTask.data.batchNum}</h4>
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

          {(() => {
            switch (batchTransactionsTask.status) {
              case 'loading': {
                return <Spinner />
              }
              case 'failed': {
                return <p>{batchTransactionsTask.error}</p>
              }
              case 'successful': {
                return (
                  <section>
                    <h4 className={classes.title}>Batch transactions</h4>
                    <TransactionsList
                      transactions={batchTransactionsTask.data.transactions}
                    />
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
  batchTask: PropTypes.shape({
    status: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        batchNum: PropTypes.number.isRequired
      })
    ),
    error: PropTypes.string
  }),
  batchTransactionsList: PropTypes.shape({
    status: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        TxID: PropTypes.number.isRequired
      })
    ),
    error: PropTypes.string
  })
}

const mapStateToProps = (state) => ({
  batchTask: state.batch.batchTask,
  batchTransactionsTask: state.batch.batchTransactionsTask
})

const mapDispatchToProps = (dispatch) => ({
  onLoadBatch: (batchNum) => dispatch(fetchBatch(batchNum)),
  onLoadBatchTransactionsList: (batchNum) => dispatch(fetchBatchTransactions(batchNum))
})

export default connect(mapStateToProps, mapDispatchToProps)(Batch)
