import React from 'react'
import PropTypes from 'prop-types'
import { useParams, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import useTransactionStyles from './transaction.styles'
import Spinner from '../shared/spinner/spinner.view'
import { fetchTransaction } from '../../store/transaction/transaction.thunks'

function Transaction ({
  onLoadTransaction,
  transactionTask
}) {
  const { transactionId } = useParams()
  const classes = useTransactionStyles()

  React.useEffect(() => {
    onLoadTransaction(transactionId)
  }, [transactionId, onLoadTransaction])

  return (
    <div>
      {(() => {
        switch (transactionTask.status) {
          case 'loading': {
            return <Spinner />
          }
          case 'failed': {
            return <p>{transactionTask.error}</p>
          }
          case 'successful': {
            return (
              <section>
                <div className={classes.item}>
                  transactionId: {transactionTask.data.id}
                </div>
                <div className={classes.state}>
                  status: {transactionTask.data.state}
                </div>
                <div className={classes.timestamp}>
                  timestamp: {transactionTask.data.timestamp}
                </div>
                <div className={classes.type}>
                  type: {transactionTask.data.type}
                </div>
                <div className={classes.from}>
                  {/* TODO: fromEthereumAddress is missing from API response
                  <Link to={`/token-account/${transactionTask.data.fromHezEthereumAddress}/${transactionTask.data.token.tokenId}/${transactionTask.data.fromAccountIndex}`}>
                    From: {transactionTask.data.fromAccountIndex}
                  </Link> */}
                </div>
                <div className={classes.to}>
                  To:
                  <Link to={`/token-account/${transactionTask.data.toHezEthereumAddress}/${transactionTask.data.token.tokenId}/${transactionTask.data.toAccountIndex}`}>
                    {transactionTask.data.type === 'Exit' ? transactionTask.data.toAccountIndex : transactionTask.data.toEthereumAddress}
                  </Link>
                </div>
                <div className={classes.item}>
                  amount: {transactionTask.data.amount}
                </div>
                <div className={classes.fee}>
                  Fee: {transactionTask.data.fee}
                </div>
                {/* <div className={classes.slot}>
                  Slot: <Link to={`/slot/${transactionTask.data.slot}`}>{transactionTask.data.slot}</Link>
                </div> */}
                <div className={classes.batchNum}>
                  Included in batch:
                  <Link to={`/batch/${transactionTask.data.batchNum}`}>
                    {transactionTask.data.batchNum}
                  </Link>
                </div>
                {/* <div className={classes.position}>
                  Position in batch: {transactionTask.data.position}
                </div> */}
                <div className={classes.nonce}>
                  Nonce: {transactionTask.data.nonce}
                </div>
              </section>
            )
          }
          default: {
            return <></>
          }
        }
      })()}
    </div>
  )
}

Transaction.propTypes = {
  transactionTask: PropTypes.shape({
    status: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        transactionId: PropTypes.number.isRequired
      })
    ),
    error: PropTypes.string
  })
}

const mapStateToProps = (state) => ({
  transactionTask: state.transaction.transactionTask
})

const mapDispatchToProps = (dispatch) => ({
  onLoadTransaction: (transactionId) => dispatch(fetchTransaction(transactionId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Transaction)
