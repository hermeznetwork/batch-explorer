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
import Title from '../shared/title/title'

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
                    <Title>Batch transactions</Title>
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
  batchTask: PropTypes.object.isRequired,
  onLoadBatchTransactionsList: PropTypes.func.isRequired,
  batchTransactionsTask: PropTypes.object.isRequired
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
