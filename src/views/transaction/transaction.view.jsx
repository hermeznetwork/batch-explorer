import React from 'react'
import PropTypes from 'prop-types'
import { useParams, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import clsx from 'clsx'
import { TxType, TxState } from '@hermeznetwork/hermezjs/src/enums'
import { INTERNAL_ACCOUNT_ETH_ADDR, EMPTY_BJJ_ADDR } from '@hermeznetwork/hermezjs/src/constants'
import { getTimeZoneTimestamp } from '../../utils/date'

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
import { getTransactionAmount, getTransactionDepositAmount } from '../../utils/transactions'

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
        return (<>Exit (Initiate withdraw) <p className={classes.exitAdditionalMessage}>(Withdrawal step 1 of 2 was completed)</p></>)
      }
      case TxType.Transfer:
      case TxType.TransferToEthAddr:
      case TxType.TransferToBJJ: {
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

  /**
   * Handles if BJJ address should be shown in from/to fields
   * @param {string} type - Type 'from' or 'to'
   * @returns {boolean}
   */
  function showBJJ (type) {
    if (type === 'from') {
      return (transactionTask.data.fromBjj && transactionTask.data.fromBjj !== EMPTY_BJJ_ADDR) || (transactionTask.data.fromBJJ && transactionTask.data.fromBJJ !== EMPTY_BJJ_ADDR)
    }
    if (type === 'to') {
      return (transactionTask.data.toBjj && transactionTask.data.toBjj !== EMPTY_BJJ_ADDR) || (transactionTask.data.toBJJ && transactionTask.data.toBJJ !== EMPTY_BJJ_ADDR)
    }
  }

  /**
   * Handles if HezEthereumAddress address should be shown in from/to fields
   * @param {string} type - Type 'from' or 'to'
   * @returns {boolean}
   */
  function showHezEthereumAddress (type) {
    if (type === 'from') {
      return (transactionTask.data.fromHezEthereumAddress && transactionTask.data.fromHezEthereumAddress !== INTERNAL_ACCOUNT_ETH_ADDR) && !showBJJ('from')
    }
    if (type === 'to') {
      return (transactionTask.data.toHezEthereumAddress && transactionTask.data.toHezEthereumAddress !== INTERNAL_ACCOUNT_ETH_ADDR) && !showBJJ('to')
    }
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
                          {transactionTask.data.batchNum || transactionTask.data.state === TxState.Forged
                            ? <div className={`${classes.status} ${classes.completed}`}>Completed</div>
                            : <div className={`${classes.status} ${classes.pending}`}>Pending</div>}
                        </Col>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        Timestamp
                      </Col>
                      <Col>
                        {getTimeZoneTimestamp(transactionTask.data.timestamp)}
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
                    {showHezEthereumAddress('from')
                      ? (
                        <Row>
                          <Col>From</Col>
                          <Col link>
                            <Row wrapped>
                              <CopyToClipboardButton content={transactionTask.data.fromHezEthereumAddress} />
                              <Col wrapped>
                                <Link to={`/user-account/${transactionTask.data.fromHezEthereumAddress}`}>
                                  {transactionTask.data.fromHezEthereumAddress}
                                </Link>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        )
                      : <></>}
                    {showBJJ('from')
                      ? (
                        <Row>
                          <Col>From</Col>
                          <Col link>
                            <Row wrapped>
                              <CopyToClipboardButton content={transactionTask.data.fromBjj || transactionTask.data.fromBJJ} />
                              <Col wrapped>
                                <Link to={`/user-account/${transactionTask.data.fromBjj || transactionTask.data.fromBJJ}`}>
                                  {transactionTask.data.fromBjj || transactionTask.data.fromBJJ}
                                </Link>
                                <p className={classes.bjjAddressDescription}>(Hermez internal address)</p>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        )
                      : <></>}
                    {showHezEthereumAddress('to')
                      ? (
                        <Row>
                          <Col>To</Col>
                          <Col link>
                            <Row wrapped>
                              <CopyToClipboardButton content={transactionTask.data.toHezEthereumAddress} />
                              <Col wrapped>
                                <Link to={`/user-account/${transactionTask.data.toHezEthereumAddress}`}>
                                  {transactionTask.data.toHezEthereumAddress}
                                </Link>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        )
                      : <></>}
                    {showBJJ('to')
                      ? (
                        <Row>
                          <Col>To</Col>
                          <Col link>
                            <Row wrapped>
                              <CopyToClipboardButton content={transactionTask.data.toBjj || transactionTask.data.toBJJ} />
                              <Col wrapped>
                                <Link to={`/user-account/${transactionTask.data.toBjj || transactionTask.data.toBJJ}`}>
                                  {transactionTask.data.toBjj || transactionTask.data.toBJJ}
                                </Link>
                                <p className={classes.bjjAddressDescription}>(Hermez internal address)</p>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        )
                      : <></>}
                    <Row>
                      <Col>
                        Amount
                      </Col>
                      <Col>
                        {getFixedTokenAmount(getTransactionAmount(transactionTask.data), transactionTask.data.token.decimals)} {transactionTask.data.token.symbol}
                      </Col>
                    </Row>
                    {transactionTask.data.type === TxType.CreateAccountDepositTransfer || transactionTask.data.type === TxType.DepositTransfer
                      ? (
                        <Row>
                          <Col>
                            Deposit Amount
                          </Col>
                          <Col>
                            {getFixedTokenAmount(getTransactionDepositAmount(transactionTask.data), transactionTask.data.token.decimals)} {transactionTask.data.token.symbol}
                          </Col>
                        </Row>
                        )
                      : <></>}
                    {transactionTask.data.fee || transactionTask.data.L2Info?.fee
                      ? (
                        <Row>
                          <Col>
                            Fee
                          </Col>
                          <Col>
                            $ {transactionTask.data.L2Info?.historicFeeUSD ? Number(transactionTask.data.L2Info.historicFeeUSD).toFixed(2) : getFeeInUsd(transactionTask.data.fee || transactionTask.data.L2Info?.fee, transactionTask.data.amount, transactionTask.data.token)}
                          </Col>
                        </Row>
                        )
                      : <></>}
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
                          )
                        : <></>}
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
                          )
                        : <></>}
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
                          )
                        : <></>}
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
                          )
                        : <></>}
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
