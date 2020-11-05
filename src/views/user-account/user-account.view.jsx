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
import { ReactComponent as CopyIcon } from '../../images/icons/copy.svg'
import { copyToClipboard } from '../../utils/dom'
import Button from '../shared/button/button.view'
import InfiniteScroll from '../shared/infinite-scroll/infinite-scroll.view'

function UserAccount ({
  onLoadAccount,
  accountsTask,
  onLoadTransactions,
  transactionsTask
}) {
  const classes = useUserAccountStyles()
  const { address } = useParams()
  const [isFirstTabVisible, setFirstTabVisible] = React.useState()
  const [isSecondTabVisible, setSecondTabVisible] = React.useState()

  function handleCopyToClipboardClick (item) {
    copyToClipboard(item)
  }

  function handleFirstTabClick () {
    setFirstTabVisible(true)
    setSecondTabVisible(false)
  }

  function handleSecondTabClick () {
    setFirstTabVisible(false)
    setSecondTabVisible(true)
  }

  React.useEffect(() => {
    onLoadAccount(address)
    onLoadTransactions(address)
  }, [address, onLoadAccount, onLoadTransactions])

  return (
    <div className={classes.root}>
      <Container disableTopGutter>
        <div className={classes.wrapper}>
          {(() => {
            switch (accountsTask.status) {
              case 'loading': {
                return <Spinner />
              }
              case 'failed': {
                return <p>{accountsTask.error}</p>
              }
              case 'successful': {
                return (
                  <>
                    <section>
                      <h4 className={classes.title}>User Address</h4>
                      <div className={classes.row}>
                        <div className={classes.col}>
                          Hermez address
                        </div>
                        <div className={classes.col}>
                          <div className={classes.rowWrapped}>
                            <div>
                              <Button
                                icon={<CopyIcon />}
                                onClick={() => handleCopyToClipboardClick(accountsTask.data.accounts[0].bjj)}
                              />
                            </div>
                            <div className={classes.colWrapped}>
                              {accountsTask.data.accounts[0].bjj}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={classes.row}>
                        <div className={classes.col}>
                          Ethereum address
                        </div>
                        <div className={classes.col}>
                          <div className={classes.rowWrapped}>
                            <div>
                              <Button
                                icon={<CopyIcon />}
                                onClick={() => handleCopyToClipboardClick(accountsTask.data.accounts[0].hezEthereumAddress)}
                              />
                            </div>
                            <div className={classes.colWrapped}>
                              {accountsTask.data.accounts[0].hezEthereumAddress}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={classes.row}>
                        <div className={classes.col}>
                          Token accounts
                        </div>
                        <div className={classes.col}>
                          {accountsTask.data.accounts.length}
                        </div>
                      </div>
                    </section>
                    <section>
                      <div className={classes.toggleWrapper}>
                        <button
                          className={clsx({
                            [classes.toggle]: true,
                            [classes.active]: true,
                            [classes.notActive]: isSecondTabVisible
                          })}
                          onClick={() => handleFirstTabClick()}
                        >
                          Token accounts
                        </button>
                        <button
                          className={clsx({
                            [classes.toggle]: true,
                            [classes.active]: isSecondTabVisible,
                            [classes.notActive]: isFirstTabVisible
                          })}
                          onClick={() => handleSecondTabClick()}
                        >
                          Transactions
                        </button>
                      </div>
                      <div className={clsx({
                        [classes.hidden]: isSecondTabVisible,
                        [classes.firstTabVisible]: isFirstTabVisible
                      })}
                      >
                        {accountsTask.data.accounts.map((account, index) =>
                          <div
                            key={account.accountIndex}
                            className={clsx({ [classes.account]: index > 0 })}
                          >
                            <InfiniteScroll
                              asyncTaskStatus={accountsTask.status}
                              paginationData={accountsTask.data.pagination}
                              onLoadNextPage={(fromItem) => {
                                if (accountsTask.status === 'successful') {
                                  onLoadAccount(
                                    accountsTask.data.accounts[0].hezEthereumAddress,
                                    fromItem
                                  )
                                }
                              }}
                            >
                              <AccountDetails
                                tokenSymbol={account.token.symbol}
                                balance={getTokenAmountString(account.balance, account.token.decimals)}
                                accountIndex={account.accountIndex}
                              />
                            </InfiniteScroll>
                          </div>
                        )}
                      </div>
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
                    <div className={clsx({
                      [classes.hidden]: true,
                      [classes.secondTabVisible]: isSecondTabVisible
                    })}
                    >
                      <InfiniteScroll
                        asyncTaskStatus={transactionsTask.status}
                        paginationData={transactionsTask.data.pagination}
                        onLoadNextPage={(fromItem) => {
                          if (transactionsTask.status === 'successful') {
                            onLoadTransactions(
                              accountsTask.data.accounts[0].hezEthereumAddress,
                              fromItem
                            )
                          }
                        }}
                      >
                        <TransactionsList
                          transactions={transactionsTask.data.transactions}
                        />
                      </InfiniteScroll>
                    </div>
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
  accountsTask: PropTypes.object.isRequired,
  onLoadTransactions: PropTypes.func.isRequired,
  transactionsTask: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  accountsTask: state.userAccount.accountsTask,
  transactionsTask: state.userAccount.transactionsTask
})

const mapDispatchToProps = (dispatch) => ({
  onLoadAccount: (address, fromItem) => dispatch(fetchAccount(address, fromItem)),
  onLoadTransactions: (address, fromItem) => dispatch(fetchTransactions(address, fromItem))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserAccount)
