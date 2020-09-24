import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import clsx from 'clsx'

import useUserAccountStyles from './user-account.styles'
import Spinner from '../shared/spinner/spinner.view'
import AccountDetails from './components/account-details/account-details.view'
import TransactionsList from '../shared/transactions-list/transactions-list.view'
import { fetchAccount, fetchTransactions } from '../../store/user-account/user-account.thunks'

function UserAccount ({
  onLoadAccount,
  accountTask,
  onLoadTransactions,
  transactionsTask
}) {
  const classes = useUserAccountStyles()
  const { ethereumAddress } = useParams()

  React.useEffect(() => {
    onLoadAccount(ethereumAddress)
    onLoadTransactions(ethereumAddress)
  }, [ethereumAddress, onLoadAccount, onLoadTransactions])

  console.log('accountTask: ' + JSON.stringify(accountTask.data))
  console.log('transactionsTask: ' + JSON.stringify(transactionsTask.data))

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
                <section>
                  <div>
                    Hermez address: MISSING / NOT CLEAR
                    Ethereum address: MISSING / NOT CLEAR
                    Token accounts: {accountTask.data.accounts.length}
                  </div>
                </section>
                <section>
                  <h4 className={classes.title}>Token Accounts</h4>

                  {accountTask.data.accounts.map((account, index) =>
                    <div
                      key={account.accountIndex}
                      className={clsx({ [classes.account]: index > 0 })}
                    >
                      <AccountDetails
                        tokenSymbol={account.tokenSymbol}
                        ethereumAddress={account.ethereumAddress}
                        balance={account.balance}
                      />
                    </div>
                  )}
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
                <h4 className={classes.title}>Transactions</h4>
                <TransactionsList
                  transactions={transactionsTask.data.transactions}
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

UserAccount.propTypes = {
  accountTask: PropTypes.shape({
    status: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        ethereumAddress: PropTypes.string.isRequired
      })
    ),
    error: PropTypes.string
  }),
  transactionsList: PropTypes.shape({
    status: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        TxID: PropTypes.number.isRequired
      })
    ),
    error: PropTypes.string
  })
}

const mapStateToProps = (state) => ({
  accountTask: state.userAccount.accountTask,
  transactionsTask: state.userAccount.transactionsTask
})

const mapDispatchToProps = (dispatch) => ({
  onLoadAccount: (ethereumAddress) => dispatch(fetchAccount(ethereumAddress)),
  onLoadTransactions: (ethereumAddress) => dispatch(fetchTransactions(ethereumAddress))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserAccount)
