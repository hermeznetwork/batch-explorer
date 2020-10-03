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
  const { hezEthereumAddress, tokenId, accountIndex } = useParams()

  React.useEffect(() => {
    onLoadAccount(hezEthereumAddress, tokenId)
    onLoadTransactions(accountIndex)
  }, [hezEthereumAddress, tokenId, accountIndex, onLoadAccount, onLoadTransactions])

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
                    Balance: {Number(accountTask.data.accounts[0].balance) / Math.pow(10, accountTask.data.accounts[0].token.decimals)}
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
        hezEthereumAddress: PropTypes.string.isRequired,
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
  onLoadAccount: (hezEthereumAddress, tokenId) => dispatch(fetchAccount(hezEthereumAddress, tokenId)),
  onLoadTransactions: (accountIndex) => dispatch(fetchTransactions(accountIndex))
})

export default connect(mapStateToProps, mapDispatchToProps)(TokenAccount)
