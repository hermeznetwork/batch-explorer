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

function TokenAccount ({
  onLoadAccount,
  accountTask,
  onLoadTransactions,
  transactionsTask
}) {
  const classes = useTokenAccountStyles()
  const { address, tokenId, accountIndex } = useParams()

  React.useEffect(() => {
    onLoadAccount(address, tokenId)
    onLoadTransactions(accountIndex)
  }, [address, tokenId, accountIndex, onLoadAccount, onLoadTransactions])

  return (
    <div className={classes.root}>
      <Container disableTopGutter>
        <div className={classes.wrapper}>
          {(() => {
            switch (accountTask.status) {
              case 'loading': {
                return <Spinner />
              }
              case 'failed': {
                return <p>{accountTask.error}</p>
              }
              case 'successful': {
                return (
                  <section>
                    <h4 className={classes.title}>Token account</h4>
                    <div className={classes.row}>
                      <div className={classes.col}>
                        Token address
                      </div>
                      <div className={classes.col}>
                        {accountTask.data.accounts[0].accountIndex}
                      </div>
                    </div>
                    <div className={classes.row}>
                      <div className={classes.col}>
                        Token
                      </div>
                      <div className={classes.col}>
                        {accountTask.data.accounts[0].token.symbol}
                      </div>
                    </div>
                    <div className={classes.row}>
                      <div className={classes.col}>
                        Balance
                      </div>
                      <div className={classes.col}>
                        {getTokenAmountString(accountTask.data.accounts[0].balance, accountTask.data.accounts[0].token.decimals)}
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

          {(() => {
            switch (transactionsTask.status) {
              case 'loading': {
                return <Spinner />
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
  accountTask: PropTypes.shape({
    status: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        hezEthereumAddress: PropTypes.string.isRequired
      })
    ),
    error: PropTypes.string
  }),
  transactionsList: PropTypes.shape({
    status: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        accountIndex: PropTypes.number.isRequired
      })
    ),
    error: PropTypes.string
  })
}

const mapStateToProps = (state) => ({
  accountTask: state.tokenAccount.accountTask,
  transactionsTask: state.tokenAccount.transactionsTask
})

const mapDispatchToProps = (dispatch) => ({
  onLoadAccount: (address, tokenId) => dispatch(fetchAccount(address, tokenId)),
  onLoadTransactions: (accountIndex) => dispatch(fetchTransactions(accountIndex))
})

export default connect(mapStateToProps, mapDispatchToProps)(TokenAccount)
