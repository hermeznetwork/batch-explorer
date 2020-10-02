import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import Spinner from '../shared/spinner/spinner.view'
import TransactionsList from '../shared/transactions-list/transactions-list.view'
import { fetchAccount, fetchTransactions } from '../../store/token-account/token-account.thunks'

function TokenAccount ({
  onLoadAccount,
  accountTask,
  onLoadTransactions,
  transactionsTask
}) {
  const { ethereumAddress, tokenId, accountIndex } = useParams()

  React.useEffect(() => {
    onLoadAccount(ethereumAddress, tokenId)
    onLoadTransactions(accountIndex)
  }, [ethereumAddress, tokenId, accountIndex, onLoadAccount, onLoadTransactions])

  return (
    <div>
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
              <div>
                <h4>Token account</h4>

                <section>
                  <div>
                    Token address: {accountTask.data.accounts[0].accountIndex}
                  </div>
                  <div>
                    Token: {accountTask.data.accounts[0].tokenSymbol}
                  </div>
                  <div>
                    Balance: {accountTask.data.accounts[0].balance}
                  </div>
                </section>
              </div>
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
                <h4>Transactions</h4>
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
  )
}

TokenAccount.propTypes = {
  accountTask: PropTypes.shape({
    status: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        ethereumAddress: PropTypes.string.isRequired,
        tokenSymbol: PropTypes.number.isRequired
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
  onLoadAccount: (ethereumAddress, tokenId) => dispatch(fetchAccount(ethereumAddress, tokenId)),
  onLoadTransactions: (accountIndex) => dispatch(fetchTransactions(accountIndex))
})

export default connect(mapStateToProps, mapDispatchToProps)(TokenAccount)
