import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import clsx from 'clsx'
import { getTokenAmountString } from '../../utils/bigint-decimals-converter'

import useUserAccountStyles from './user-account.styles'
import Spinner from '../shared/spinner/spinner.view'
import Container from '../shared/container/container.view'
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
  const { address } = useParams()

  React.useEffect(() => {
    onLoadAccount(address)
    onLoadTransactions(address)
  }, [address, onLoadAccount, onLoadTransactions])

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
                  <>
                    <section>
                      <h4 className={classes.title}>User Address</h4>
                      <div className={classes.row}>
                        <div className={classes.col}>
                          Hermez address:
                        </div>
                        <div className={classes.col}>
                          {accountTask.data.accounts[0].bjj}
                        </div>
                      </div>
                      <div className={classes.row}>
                        <div className={classes.col}>
                          Ethereum address:
                        </div>
                        <div className={classes.col}>
                          {accountTask.data.accounts[0].hezEthereumAddress}
                        </div>
                      </div>
                      <div className={classes.row}>
                        <div className={classes.col}>
                          Token accounts:
                        </div>
                        <div className={classes.col}>
                          {accountTask.data.accounts.length}
                        </div>
                      </div>
                    </section>
                    <section>
                      <h4>Token Accounts</h4>
                      {accountTask.data.accounts.map((account, index) =>
                        <div
                          key={account.accountIndex}
                          className={clsx({ [classes.account]: index > 0 })}
                        >
                          <AccountDetails
                            tokenSymbol={account.token.symbol}
                            balance={getTokenAmountString(account.balance, account.token.decimals)}
                            accountIndex={account.accountIndex}
                          />
                        </div>
                      )}
                    </section>
                  </>
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

UserAccount.propTypes = {
  onLoadAccount: PropTypes.func.isRequired,
  accountTask: PropTypes.object.isRequired,
  onLoadTransactions: PropTypes.func.isRequired,
  transactionsTask: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  accountTask: state.userAccount.accountTask,
  transactionsTask: state.userAccount.transactionsTask
})

const mapDispatchToProps = (dispatch) => ({
  onLoadAccount: (address) => dispatch(fetchAccount(address)),
  onLoadTransactions: (address) => dispatch(fetchTransactions(address))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserAccount)
