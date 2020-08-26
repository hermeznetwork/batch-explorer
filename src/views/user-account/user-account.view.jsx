// dva dela
// Account
// transactions ce da se reuse iz batachtransactions (tako da se batchtransactions prebacuje u shared)

// API
// transactions I can get them from here https://idocs.hermez.io/#/spec/architecture/api-server?id=get-accountsethaddrtxs
// and for accounts from here https://idocs.hermez.io/#/spec/architecture/api-server?id=get-accountsethaddr

import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import useUserAccountStyles from './user-account.styles'
import Spinner from '../shared/spinner/spinner.view'
import AccountDetails from './components/account-details/account-details.view'
import TransactionsList from '../shared/transactions-list/transactions-list.view'
import { fetchAccount, fetchAccountTransactions } from '../../store/batch/batch.thunks'

function UserAccount ({
  onLoadAccount,
  accountTask,
  onLoadAccountTransactionsList,
  accountTransactionsTask
}) {
  const classes = useUserAccountStyles()
  const { accountId } = useParams()

  React.useEffect(() => {
    onLoadAccount(accountId)
    onLoadAccountTransactionsList(accountId)
  }, [accountId, onLoadAccount, onLoadAccountTransactionsList])

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
              <section>
                <h4 className={classes.title}>Account</h4>
                <AccountDetails
                  account={accountTask.data}
                />
              </section>
            )
          }
          default: {
            return <></>
          }
        }
      })()}

      {(() => {
        switch (accountTransactionsTask.status) {
          case 'loading': {
            return <Spinner />
          }
          case 'failed': {
            return <p>{accountTransactionsTask.error}</p>
          }
          case 'successful': {
            return (
              <section>
                <h4 className={classes.title}>Account transactions</h4>
                <TransactionsList
                  transactions={accountTransactionsTask.data}
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
  onLoadAccount: PropTypes.func.isRequired,
  accountTask: PropTypes.shape({
    status: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        AccountID: PropTypes.number.isRequired
      })
    ),
    error: PropTypes.string
  }),
  accountTransactionsList: PropTypes.shape({
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
  accountTask: state.batch.accountTask,
  accountTransactionsTask: state.batch.accountTransactionsTask
})

const mapDispatchToProps = (dispatch) => ({
  onLoadAccount: (accountId) => dispatch(fetchAccount(accountId)),
  onLoadAccountTransactionsList: (accountId) => dispatch(fetchAccountTransactions(accountId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserAccount)
