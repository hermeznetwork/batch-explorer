import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTokenAmountString } from '../../utils/bigint-decimals-converter'

import Spinner from '../shared/spinner/spinner.view'
import TransactionsList from '../shared/transactions-list/transactions-list.view'
import { fetchAccount, fetchTransactions } from '../../store/token-account/token-account.thunks'

function TokenAccount ({
  onLoadAccount,
  accountTask,
  onLoadTransactions,
  transactionsTask
}) {
  const { hezEthereumAddress, BJJ, tokenId, accountIndex } = useParams()

  React.useEffect(() => {
    onLoadAccount(hezEthereumAddress, BJJ, tokenId)
    onLoadTransactions(accountIndex)
  }, [hezEthereumAddress, BJJ, tokenId, accountIndex, onLoadAccount, onLoadTransactions])

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
                    Token: {accountTask.data.accounts[0].token.symbol}
                  </div>
                  <div>
                    Balance: {getTokenAmountString(accountTask.data.accounts[0].balance, accountTask.data.accounts[0].token.decimals)}
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
  onLoadAccount: (hezEthereumAddress, BJJ, tokenId) => dispatch(fetchAccount(hezEthereumAddress, BJJ, tokenId)),
  onLoadTransactions: (accountIndex) => dispatch(fetchTransactions(accountIndex))
})

export default connect(mapStateToProps, mapDispatchToProps)(TokenAccount)
