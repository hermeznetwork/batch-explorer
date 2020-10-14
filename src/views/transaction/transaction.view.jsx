import React from 'react'
import PropTypes from 'prop-types'
import { useParams, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTokenAmountString } from '../../utils/bigint-decimals-converter'

import useTransactionStyles from './transaction.styles'
import Spinner from '../shared/spinner/spinner.view'
import Container from '../shared/container/container.view'
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
    <div className={classes.root}>
      <Container disableTopGutter>
        <div className={classes.wrapper}>
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
                    <h4 className={classes.title}>Transaction summary</h4>
                    <div className={`${classes.row} ${classes.rowFirst}`}>
                      <div className={classes.col}>
                        Transaction ID
                      </div>
                      <div className={`${classes.col} ${classes.colLast}`}>
                        {transactionTask.data.id}
                      </div>
                    </div>
                    <div className={classes.row}>
                      <div className={classes.col}>
                        Status
                      </div>
                      <div className={`${classes.col} ${classes.colLast}`}>
                        {transactionTask.data.state}
                      </div>
                    </div>
                    <div className={classes.row}>
                      <div className={classes.col}>
                        Timestamp
                      </div>
                      <div className={`${classes.col} ${classes.colLast}`}>
                        {transactionTask.data.timestamp}
                      </div>
                    </div>
                    <div className={classes.row}>
                      <div className={classes.col}>
                        Type of transaction
                      </div>
                      <div className={`${classes.col} ${classes.colLast}`}>
                        {transactionTask.data.type}
                      </div>
                    </div>

                    {transactionTask.data.fromHezEthereumAddress
                      ? (
                        <>
                          <div className={classes.col}>From</div>
                          <div className={`${classes.col} ${classes.colLast}`}>
                            <Link to={`/token-account/${transactionTask.data.fromHezEthereumAddress}/${transactionTask.data.token.tokenId}/${transactionTask.data.fromAccountIndex}`}>
                              {transactionTask.data.fromAccountIndex}
                            </Link>
                          </div>
                        </>
                      ) : <></>}
                    {!transactionTask.data.fromHezEthereumAddress && transactionTask.data.L1Info
                      ? (
                        <>
                          <div className={classes.col}>From</div>
                          <div className={`${classes.col} ${classes.colLast}`}>
                            <Link to={`/token-account/${transactionTask.data.L1Info.fromHezEthereumAddress}/${transactionTask.data.token.tokenId}/${transactionTask.data.fromAccountIndex}`}>
                              From: {transactionTask.data.fromAccountIndex}
                            </Link>
                          </div>
                        </>
                      ) : <></>}
                    {transactionTask.data.toHezEthereumAddress
                      ? (
                        <>
                          <div className={classes.col}>To</div>
                          <div className={`${classes.col} ${classes.colLast}`}>
                            <Link to={`/token-account/${transactionTask.data.toHezEthereumAddress}/${transactionTask.data.token.tokenId}/${transactionTask.data.toAccountIndex}`}>
                              {transactionTask.data.type === 'Exit' ? transactionTask.data.toAccountIndex : transactionTask.data.toEthereumAddress}
                            </Link>
                          </div>
                        </>
                      ) : <></>}
                    {!transactionTask.data.toHezEthereumAddress && transactionTask.data.toBjj
                      ? (
                        <>
                          <div className={classes.col}>To</div>
                          <div className={`${classes.col} ${classes.colLast}`}>
                            <Link to={`/token-account/${transactionTask.data.toBjj}/${transactionTask.data.token.tokenId}/${transactionTask.data.toAccountIndex}`}>
                              {transactionTask.data.type === 'Exit' ? transactionTask.data.toAccountIndex : transactionTask.data.toBjj}
                            </Link>
                          </div>
                        </>
                      ) : <></>}

                    <div className={classes.row}>
                      <div className={classes.col}>
                        Amount
                      </div>
                      <div className={`${classes.col} ${classes.colLast}`}>
                        {getTokenAmountString(transactionTask.data.amount, transactionTask.data.token.decimals)}
                      </div>
                    </div>
                    <div className={classes.row}>
                      <div className={classes.col}>
                        Fee
                      </div>
                      <div className={`${classes.col} ${classes.colLast}`}>
                        {getTokenAmountString(transactionTask.data.fee, transactionTask.data.token.decimals)}
                      </div>
                    </div>
                    <div className={classes.row}>
                      <div className={classes.col}>
                        Slot
                      </div>
                      <div className={`${classes.col} ${classes.colLast}`}>
                        <Link to={`/slot/${transactionTask.data.slot}`}>{transactionTask.data.slot}</Link>
                      </div>
                    </div>
                    <div className={classes.row}>
                      <div className={classes.col}>
                        Included in batch
                      </div>
                      <div className={`${classes.col} ${classes.colLast}`}>
                        <Link to={`/batch/${transactionTask.data.batchNum}`}>{transactionTask.data.batchNum}</Link>
                      </div>
                    </div>
                    <div className={classes.row}>
                      <div className={classes.col}>
                        Position in batch
                      </div>
                      <div className={`${classes.col} ${classes.colLast}`}>
                        {transactionTask.data.position}
                      </div>
                    </div>
                    <div className={classes.row}>
                      <div className={classes.col}>
                        Nonce
                      </div>
                      <div className={`${classes.col} ${classes.colLast}`}>
                        {transactionTask.data.nonce}
                      </div>
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
      </Container>
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
