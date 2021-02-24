import React from 'react'
import PropTypes from 'prop-types'
import { useParams, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import clsx from 'clsx'
import { TxType } from '@hermeznetwork/hermezjs/src/enums'

import useTransactionStyles from './transaction.styles'
import Spinner from '../shared/spinner/spinner.view'
import Container from '../shared/container/container.view'
import { fetchTransaction } from '../../store/transaction/transaction.thunks'
import { ReactComponent as AngleDown } from '../../images/icons/angle-down.svg'
import { ReactComponent as AngleUp } from '../../images/icons/angle-up.svg'
import CopyToClipboardButton from '../shared/copy-to-clipboard-button/copy-to-clipboard-button.view'
import Row from '../shared/row/row'
import Col from '../shared/col/col'
import Title from '../shared/title/title'
import { getFixedTokenAmount, getFeeInUsd } from '../../utils/currencies'
import { getTransactionAmount } from '../../utils/transactions'

function Transaction ({
  onLoadTransaction,
  transactionTask
}) {
  const { transactionId } = useParams()
  const classes = useTransactionStyles()
  const [areDetailsVisible, setDetailsVisible] = React.useState()

  React.useEffect(() => {
    onLoadTransaction(transactionId)
  }, [transactionId, onLoadTransaction])

  function getTransactionTypeLabel (transactionType) {
    switch (transactionType) {
      case TxType.CreateAccountDeposit:
      case TxType.Deposit: {
        return 'Deposit'
      }
      case TxType.Withdraw:
      case TxType.Exit:
      case TxType.ForceExit: {
        return 'Withdraw'
      }
      case TxType.Transfer: {
        return 'Transfer'
      }
      default: {
        return ''
      }
    }
  }

  /**
   * Handles detail button click, shows additional rows with data
   *
   * @returns {void}
   */
  function handleDetailClick () {
    setDetailsVisible(true)
  }

  /**
   * Handles close detail button click, hides additional rows with data
   *
   * @returns {void}
   */
  function handleCloseDetailClick () {
    setDetailsVisible(false)
  }

  function shouldShowDetails () {
    if (transactionTask.status === 'successful') {
      return Number.isInteger(transactionTask.data.slot) ||
        Number.isInteger(transactionTask.data.batchNum) ||
        Number.isInteger(transactionTask.data.position) ||
        transactionTask.data.nonce ||
        transactionTask.data.L2Info?.nonce
    } else {
      return false
    }
  }

  return (
    <div className={classes.root}>
      <Container disableTopGutter>
        <div className={classes.wrapper}>
          <Title>Transaction summary</Title>
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
                    <Row>
                      <Col>
                        Transaction ID
                      </Col>
                      <Col>
                        <Row wrapped>
                          <CopyToClipboardButton content={transactionTask.data.id} />
                          <Col wrapped>
                            {transactionTask.data.id}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        Status
                      </Col>
                      <Col>
                        <Col>
                          <div className={classes.status}>
                            {transactionTask.data.batchNum === null ? 'Not yet forged' : 'Forged'}
                          </div>
                        </Col>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        Timestamp
                      </Col>
                      <Col>
                        {new Date(transactionTask.data.timestamp).toLocaleString()}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        Type of transaction
                      </Col>
                      <Col>
                        {getTransactionTypeLabel(transactionTask.data.type)}
                      </Col>
                    </Row>
                    {transactionTask.data.fromHezEthereumAddress
                      ? (
                        <Row>
                          <Col>From</Col>
                          <Col link>
                            <Row wrapped>
                              <CopyToClipboardButton content={transactionTask.data.fromAccountIndex} />
                              <Col wrapped>
                                <Link to={`/user-account/${transactionTask.data.fromHezEthereumAddress}`}>
                                  {transactionTask.data.fromAccountIndex}
                                </Link>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      ) : <></>}
                    {!transactionTask.data.fromHezEthereumAddress && transactionTask.data.fromBjj
                      ? (
                        <Row>
                          <Col>From</Col>
                          <Col link>
                            <Row wrapped>
                              <CopyToClipboardButton content={transactionTask.data.fromAccountIndex} />
                              <Col wrapped>
                                <Link to={`/user-account/${transactionTask.data.fromBjj}`}>
                                  {transactionTask.data.fromAccountIndex}
                                </Link>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      ) : <></>}
                    {!transactionTask.data.fromHezEthereumAddress && !transactionTask.data.fromBjj && transactionTask.data.fromAccountIndex
                      ? (
                        <Row>
                          <Col>From</Col>
                          <Col>
                            <Row wrapped>
                              <CopyToClipboardButton content={transactionTask.data.fromAccountIndex} />
                              <Col wrapped>
                                {transactionTask.data.fromAccountIndex}
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      ) : <></>}
                    {transactionTask.data.toHezEthereumAddress
                      ? (
                        <Row>
                          <Col>To</Col>
                          <Col link>
                            <Row wrapped>
                              <CopyToClipboardButton content={transactionTask.data.type === 'Exit' ? transactionTask.data.toAccountIndex : transactionTask.data.toHezEthereumAddress} />
                              <Col wrapped>
                                <Link to={`/user-account/${transactionTask.data.toHezEthereumAddress}`}>
                                  {transactionTask.data.type === 'Exit' ? transactionTask.data.toAccountIndex : transactionTask.data.toHezEthereumAddress}
                                </Link>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      ) : <></>}
                    {!transactionTask.data.toHezEthereumAddress && transactionTask.data.toBjj
                      ? (
                        <Row>
                          <Col>To</Col>
                          <Col link>
                            <Row wrapped>
                              <CopyToClipboardButton content={transactionTask.data.type === 'Exit' ? transactionTask.data.toAccountIndex : transactionTask.data.toBjj} />
                              <Col wrapped>
                                <Link to={`/user-account/${transactionTask.data.toBjj}`}>
                                  {transactionTask.data.type === 'Exit' ? transactionTask.data.toAccountIndex : transactionTask.data.toBjj}
                                </Link>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      ) : <></>}
                    {!transactionTask.data.toHezEthereumAddress && !transactionTask.data.toBjj && transactionTask.data.toAccountIndex
                      ? (
                        <Row>
                          <Col>To</Col>
                          <Col>
                            <Row wrapped>
                              <CopyToClipboardButton content={transactionTask.data.toAccountIndex} />
                              <Col wrapped>
                                {transactionTask.data.toAccountIndex}
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      ) : <></>}
                    <Row>
                      <Col>
                        Amount
                      </Col>
                      <Col>
                        {getFixedTokenAmount(getTransactionAmount(transactionTask.data), transactionTask.data.token.decimals)} {transactionTask.data.token.symbol}
                      </Col>
                    </Row>
                    {transactionTask.data.fee || transactionTask.data.L2Info?.fee
                      ? (
                        <Row>
                          <Col>
                            Fee
                          </Col>
                          <Col>
                            ${getFeeInUsd(transactionTask.data.L2Info.fee, transactionTask.data.amount, transactionTask.data.token)}
                          </Col>
                        </Row>
                      ) : <></>}
                    <div className={clsx({
                      [classes.detailHidden]: true,
                      [classes.detailVisible]: areDetailsVisible
                    })}
                    >
                      {Number.isInteger(transactionTask.data.slot)
                        ? (
                          <Row>
                            <Col>
                              Slot
                            </Col>
                            <Col link>
                              <Link to={`/slot/${transactionTask.data.slot}`}>{transactionTask.data.slot}</Link>
                            </Col>
                          </Row>
                        ) : <></>}
                      {Number.isInteger(transactionTask.data.batchNum)
                        ? (
                          <Row>
                            <Col>
                              Included in batch
                            </Col>
                            <Col link>
                              <Link to={`/batch/${transactionTask.data.batchNum}`}>{transactionTask.data.batchNum}</Link>
                            </Col>
                          </Row>
                        ) : <></>}
                      {Number.isInteger(transactionTask.data.position)
                        ? (
                          <Row>
                            <Col>
                              Position in batch
                            </Col>
                            <Col>
                              {transactionTask.data.position}
                            </Col>
                          </Row>
                        ) : <></>}
                      {transactionTask.data.nonce || transactionTask.data.L2Info?.nonce
                        ? (
                          <Row>
                            <Col>
                              Nonce
                            </Col>
                            <Col>
                              {transactionTask.data.nonce || transactionTask.data.L2Info.nonce}
                            </Col>
                          </Row>
                        ) : <></>}
                    </div>
                    {
                      shouldShowDetails() && (
                        <div>
                          <button
                            className={clsx({
                              [classes.detailButton]: true,
                              [classes.detailButtonHidden]: areDetailsVisible,
                              [classes.detailVisible]: true
                            })}
                            onClick={() => handleDetailClick()}
                          >
                              See details
                            <AngleDown className={classes.icon} />
                          </button>
                          <button
                            className={clsx({
                              [classes.detailButton]: true,
                              [classes.detailHidden]: true,
                              [classes.detailVisible]: areDetailsVisible
                            })}
                            onClick={() => handleCloseDetailClick()}
                          >
                              Close details
                            <AngleUp className={classes.icon} />
                          </button>
                        </div>
                      )
                    }
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
