import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTokenAmountString } from '../../utils/bigint-decimals-converter'

import useTokenAccountStyles from './token-account.styles'
import Spinner from '../shared/spinner/spinner.view'
import Container from '../shared/container/container.view'
import TransactionsList from '../shared/transactions-list/transactions-list.view'
import { fetchAccount, fetchTransactions } from '../../store/token-account/token-account.thunks'
import Row from '../shared/row/row'
import Col from '../shared/col/col'
import Title from '../shared/title/title'

function TokenAccount ({
  onLoadAccount,
  accountTask,
  onLoadTransactions,
  transactionsTask
}) {
  const classes = useTokenAccountStyles()
  const { accountIndex } = useParams()

  React.useEffect(() => {
    onLoadAccount(accountIndex)
    onLoadTransactions(accountIndex)
  }, [accountIndex, onLoadAccount, onLoadTransactions])

  return (
    <div className={classes.root}>
      <Container disableTopGutter>
        <div className={classes.wrapper}>
          {(() => {
            switch (accountTask.status) {
              case 'loading': {
                return (
                  <>
                    <Title>Token account</Title>
                    <Spinner />
                  </>
                )
              }
              case 'failed': {
                return <p>{accountTask.error}</p>
              }
              case 'successful': {
                return (
                  <section>
                    <Title>Token account</Title>
                    <Row>
                      <Col>
                        Token address
                      </Col>
                      <Col>
                        {accountTask.data.accountIndex}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        Token
                      </Col>
                      <Col>
                        {accountTask.data.token.symbol}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        Balance
                      </Col>
                      <Col>
                        {getTokenAmountString(accountTask.data.balance, accountTask.data.token.decimals)}
                      </Col>
                    </Row>
                  </section>
                )
              }
              default: {
                return <></>
              }
            }
          })()}

          {(() => {
            switch (transactionsTask.status) {
              case 'loading': {
                return (
                  <>
                    <Title>Transactions</Title>
                    <Spinner />
                  </>
                )
              }
              case 'failed': {
                return <p>{transactionsTask.error}</p>
              }
              case 'successful': {
                return (
                  <section>
                    <h4 className={classes.title}>Transactions</h4>
                    <TransactionsList
                      transactions={transactionsTask.data.transactions}
                      isToken
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

TokenAccount.propTypes = {
  onLoadAccount: PropTypes.func.isRequired,
  accountTask: PropTypes.object.isRequired,
  onLoadTransactions: PropTypes.func.isRequired,
  transactionsTask: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  accountTask: state.tokenAccount.accountTask,
  transactionsTask: state.tokenAccount.transactionsTask
})

const mapDispatchToProps = (dispatch) => ({
  onLoadAccount: (accountIndex) => dispatch(fetchAccount(accountIndex)),
  onLoadTransactions: (accountIndex) => dispatch(fetchTransactions(accountIndex))
})

export default connect(mapStateToProps, mapDispatchToProps)(TokenAccount)
