import React from 'react'
import PropTypes from 'prop-types'
import { useParams, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import clsx from 'clsx'
import { getTokenAmountString } from '../../utils/bigint-decimals-converter'

import useTransactionStyles from './transaction.styles'
import Spinner from '../shared/spinner/spinner.view'
import Container from '../shared/container/container.view'
import { fetchTransaction } from '../../store/transaction/transaction.thunks'
import { ReactComponent as CopyIcon } from '../../images/icons/copy.svg'
import { copyToClipboard } from '../../utils/dom'
import Button from '../shared/button/button.view'
import angleDown from '../../images/icons/angle-down.svg'
import angleUp from '../../images/icons/angle-up.svg'

function Transaction ({
  onLoadTransaction,
  transactionTask
}) {
  const { transactionId } = useParams()
  const classes = useTransactionStyles()
  const [areDeailsVisible, setDetailsVisible] = React.useState()

  function handleCopyToClipboardClick (item) {
    copyToClipboard(item)
  }

  function handleDetailClick () {
    setDetailsVisible(true)
  }

  function handleCloseDetailClick () {
    setDetailsVisible(false)
  }

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
                    <div className={classes.row}>
                      <div className={classes.col}>
                        Transaction ID
                      </div>
                      <div className={classes.col}>
                        <div className={classes.rowWrapped}>
                          <div>
                            <Button
                              icon={<CopyIcon />}
                              onClick={() => handleCopyToClipboardClick(transactionTask.data.id)}
                            />
                          </div>
                          <div className={classes.colWrapped}>
                            {transactionTask.data.id}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.row}>
                      <div className={classes.col}>
                        Status
                      </div>
                      <div className={classes.col}>
                        <div className={`${classes.col} ${classes.status}`}>
                          {transactionTask.data.state === 'pend' ? 'Pending' : ''}
                          {transactionTask.data.state === 'fing' ? 'Forging' : ''}
                          {transactionTask.data.state === 'fged' ? 'Forged' : ''}
                          {transactionTask.data.state === 'invl' ? 'Invalid' : ''}
                        </div>
                      </div>
                    </div>
                    <div className={classes.row}>
                      <div className={classes.col}>
                        Timestamp
                      </div>
                      <div className={classes.col}>
                        {new Date(transactionTask.data.timestamp).toLocaleString()}
                      </div>
                    </div>
                    <div className={classes.row}>
                      <div className={classes.col}>
                        Type of transaction
                      </div>
                      <div className={classes.col}>
                        {transactionTask.data.type}
                      </div>
                    </div>
                    {transactionTask.data.fromHezEthereumAddress
                      ? (
                        <div className={classes.row}>
                          <div className={classes.col}>From</div>
                          <div className={`${classes.col} ${classes.link}`}>
                            <div className={classes.rowWrapped}>
                              <div>
                                <Button
                                  icon={<CopyIcon />}
                                  onClick={() => handleCopyToClipboardClick(transactionTask.data.fromHezEthereumAddress)}
                                />
                              </div>
                              <div className={classes.colWrapped}>
                                <Link to={`/user-account/${transactionTask.data.fromHezEthereumAddress}`}>
                                  {transactionTask.data.fromAccountIndex}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : <></>}
                    {!transactionTask.data.fromHezEthereumAddress && transactionTask.data.fromBjj
                      ? (
                        <div className={classes.row}>
                          <div className={classes.col}>From</div>
                          <div className={`${classes.col} ${classes.link}`}>
                            <div className={classes.rowWrapped}>
                              <div>
                                <Button
                                  icon={<CopyIcon />}
                                  onClick={() => handleCopyToClipboardClick(transactionTask.data.fromBjj)}
                                />
                              </div>
                              <div className={classes.colWrapped}>
                                <Link to={`/user-account/${transactionTask.data.fromBjj}`}>
                                  From: {transactionTask.data.fromAccountIndex}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : <></>}
                    {!transactionTask.data.fromHezEthereumAddress && !transactionTask.data.fromBjj && transactionTask.data.fromAccountIndex
                      ? (
                        <div className={classes.row}>
                          <div className={classes.col}>From</div>
                          <div className={classes.col}>
                            {transactionTask.data.fromAccountIndex}
                          </div>
                        </div>
                      ) : <></>}
                    {transactionTask.data.toHezEthereumAddress
                      ? (
                        <div className={classes.row}>
                          <div className={classes.col}>To</div>
                          <div className={`${classes.col} ${classes.link}`}>
                            <div className={classes.rowWrapped}>
                              <div>
                                <Button
                                  icon={<CopyIcon />}
                                  onClick={() => handleCopyToClipboardClick(transactionTask.data.type === 'Exit' ? transactionTask.data.toAccountIndex : transactionTask.data.toEthereumAddress)}
                                />
                              </div>
                              <div className={classes.colWrapped}>
                                <Link to={`/user-account/${transactionTask.data.toHezEthereumAddress}`}>
                                  {transactionTask.data.type === 'Exit' ? transactionTask.data.toAccountIndex : transactionTask.data.toEthereumAddress}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : <></>}
                    {!transactionTask.data.toHezEthereumAddress && transactionTask.data.toBjj
                      ? (
                        <div className={classes.row}>
                          <div className={classes.col}>To</div>
                          <div className={`${classes.col} ${classes.link}`}>
                            <div className={classes.rowWrapped}>
                              <div>
                                <Button
                                  icon={<CopyIcon />}
                                  onClick={() => handleCopyToClipboardClick(transactionTask.data.type === 'Exit' ? transactionTask.data.toAccountIndex : transactionTask.data.toBjj)}
                                />
                              </div>
                              <div className={classes.colWrapped}>
                                <Link to={`/user-account/${transactionTask.data.toBjj}`}>
                                  {transactionTask.data.type === 'Exit' ? transactionTask.data.toAccountIndex : transactionTask.data.toBjj}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : <></>}
                    {!transactionTask.data.toHezEthereumAddress && !transactionTask.data.toBjj && transactionTask.data.toAccountIndex
                      ? (
                        <div className={classes.row}>
                          <div className={classes.col}>To</div>
                          <div className={classes.col}>
                            {transactionTask.data.toAccountIndex}
                          </div>
                        </div>
                      ) : <></>}
                    <div className={classes.row}>
                      <div className={classes.col}>
                        Amount
                      </div>
                      <div className={classes.col}>
                        {getTokenAmountString(transactionTask.data.amount, transactionTask.data.token.decimals)}
                      </div>
                    </div>
                    {transactionTask.data.fee
                      ? (
                        <div className={classes.row}>
                          <div className={classes.col}>
                            Fee
                          </div>
                          <div className={classes.col}>
                            {getTokenAmountString(transactionTask.data.fee, transactionTask.data.token.decimals)}
                          </div>
                        </div>
                      ) : <></>}
                    <div className={clsx({
                      [classes.detailHidden]: true,
                      [classes.detailVisible]: areDeailsVisible
                    })}
                    >
                      {transactionTask.data.slot
                        ? (
                          <div className={classes.row}>
                            <div className={classes.col}>
                              Slot
                            </div>
                            <div className={`${classes.col} ${classes.link}`}>
                              <Link to={`/slot/${transactionTask.data.slot}`}>{transactionTask.data.slot}</Link>
                            </div>
                          </div>
                        ) : <></>}
                      {transactionTask.data.batchNum
                        ? (
                          <div className={classes.row}>
                            <div className={classes.col}>
                              Included in batch
                            </div>
                            <div className={`${classes.col} ${classes.link}`}>
                              <Link to={`/batch/${transactionTask.data.batchNum}`}>{transactionTask.data.batchNum}</Link>
                            </div>
                          </div>
                        ) : <></>}
                      {transactionTask.data.position
                        ? (
                          <div className={classes.row}>
                            <div className={classes.col}>
                              Position in batch
                            </div>
                            <div className={classes.col}>
                              {transactionTask.data.position}
                            </div>
                          </div>
                        ) : <></>}
                      <div className={classes.row}>
                        <div className={classes.col}>
                          Nonce
                        </div>
                        <div className={classes.col}>
                          {transactionTask.data.nonce}
                        </div>
                      </div>
                    </div>
                    <button
                      className={clsx({
                        [classes.detailButton]: true,
                        [classes.detailButtonHidden]: areDeailsVisible,
                        [classes.detailVisible]: true
                      })}
                      onClick={() => handleDetailClick()}
                    >
                        See details
                      <img src={angleDown} className={classes.icon} alt='See details' />
                    </button>
                    <button
                      className={clsx({
                        [classes.detailButton]: true,
                        [classes.detailHidden]: true,
                        [classes.detailVisible]: areDeailsVisible
                      })}
                      onClick={() => handleCloseDetailClick()}
                    >
                        Close details
                      <img src={angleUp} className={classes.icon} alt='Close details' />
                    </button>
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
  onLoadTransaction: PropTypes.func.isRequired,
  transactionTask: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  transactionTask: state.transaction.transactionTask
})

const mapDispatchToProps = (dispatch) => ({
  onLoadTransaction: (transactionId) => dispatch(fetchTransaction(transactionId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Transaction)
