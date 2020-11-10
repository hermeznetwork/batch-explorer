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
import { ReactComponent as AngleDown } from '../../images/icons/angle-down.svg'
import { ReactComponent as AngleUp } from '../../images/icons/angle-up.svg'
import { copyToClipboard } from '../../utils/dom'
import Button from '../shared/button/button.view'
import Row from '../shared/row/row'
import Col from '../shared/col/col'
import Title from '../shared/title/title'

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
                    <Title>Transaction summary</Title>
                    <Row>
                      <Col>
                        Transaction ID
                      </Col>
                      <Col>
                        <Row wrapped>
                          <div>
                            <Button
                              icon={<CopyIcon />}
                              onClick={() => handleCopyToClipboardClick(transactionTask.data.id)}
                            />
                          </div>
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
                        <Col status>
                          {transactionTask.data.state === 'pend' ? 'Pending' : ''}
                          {transactionTask.data.state === 'fing' ? 'Forging' : ''}
                          {transactionTask.data.state === 'fged' ? 'Forged' : ''}
                          {transactionTask.data.state === 'invl' ? 'Invalid' : ''}
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
                        {transactionTask.data.type}
                      </Col>
                    </Row>
                    {transactionTask.data.fromHezEthereumAddress
                      ? (
                        <Row>
                          <Col>From</Col>
                          <Col link>
                            <Row wrapped>
                              <div>
                                <Button
                                  icon={<CopyIcon />}
                                  onClick={() => handleCopyToClipboardClick(transactionTask.data.fromHezEthereumAddress)}
                                />
                              </div>
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
                              <div>
                                <Button
                                  icon={<CopyIcon />}
                                  onClick={() => handleCopyToClipboardClick(transactionTask.data.fromBjj)}
                                />
                              </div>
                              <Col wrapped>
                                <Link to={`/user-account/${transactionTask.data.fromBjj}`}>
                                  From: {transactionTask.data.fromAccountIndex}
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
                            {transactionTask.data.fromAccountIndex}
                          </Col>
                        </Row>
                      ) : <></>}
                    {transactionTask.data.toHezEthereumAddress
                      ? (
                        <Row>
                          <Col>To</Col>
                          <Col link>
                            <Row wrapped>
                              <div>
                                <Button
                                  icon={<CopyIcon />}
                                  onClick={() => handleCopyToClipboardClick(transactionTask.data.type === 'Exit' ? transactionTask.data.toAccountIndex : transactionTask.data.toEthereumAddress)}
                                />
                              </div>
                              <Col wrapped>
                                <Link to={`/user-account/${transactionTask.data.toHezEthereumAddress}`}>
                                  {transactionTask.data.type === 'Exit' ? transactionTask.data.toAccountIndex : transactionTask.data.toEthereumAddress}
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
                              <div>
                                <Button
                                  icon={<CopyIcon />}
                                  onClick={() => handleCopyToClipboardClick(transactionTask.data.type === 'Exit' ? transactionTask.data.toAccountIndex : transactionTask.data.toBjj)}
                                />
                              </div>
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
                            {transactionTask.data.toAccountIndex}
                          </Col>
                        </Row>
                      ) : <></>}
                    <Row>
                      <Col>
                        Amount
                      </Col>
                      <Col>
                        {getTokenAmountString(transactionTask.data.amount, transactionTask.data.token.decimals)}
                      </Col>
                    </Row>
                    {transactionTask.data.fee
                      ? (
                        <Row>
                          <Col>
                            Fee
                          </Col>
                          <Col>
                            {getTokenAmountString(transactionTask.data.fee, transactionTask.data.token.decimals)}
                          </Col>
                        </Row>
                      ) : <></>}
                    <div className={clsx({
                      [classes.detailHidden]: true,
                      [classes.detailVisible]: areDeailsVisible
                    })}
                    >
                      {transactionTask.data.slot
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
                      {transactionTask.data.batchNum
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
                      {transactionTask.data.position
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
                      <Row>
                        <Col>
                          Nonce
                        </Col>
                        <Col>
                          {transactionTask.data.nonce}
                        </Col>
                      </Row>
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
                      <AngleDown className={classes.icon} />
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
                      <AngleUp className={classes.icon} />
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
