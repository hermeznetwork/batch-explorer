import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import Transaction from '../transaction/transaction.view'
import useTransactionsListStyles from './transactions-list.styles'

function TransactionsList ({ transactions }) {
  const classes = useTransactionsListStyles()

  function getTransaction (transactionId) {
    return transactions.find((transaction) => transaction.id === transactionId)
  }

  return (
    <div>
      <section>
        {transactions.map((transaction, index) =>
          <div
            key={transaction.id}
            className={clsx({ [classes.transaction]: index > 0 })}
          >
            <Transaction
              transactionId={transaction.id}
              amount={getTransaction(transaction.id).amount}
              historicUSD={getTransaction(transaction.id).historicUSD}
              currentUSD={getTransaction(transaction.id).currentUSD}
              l1orl2={getTransaction(transaction.id).L1orL2}
            />
          </div>
        )}
      </section>
    </div>
  )
}

TransactionsList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      TxID: PropTypes.string.isRequired,
      Amount: PropTypes.number.isRequired,
      Fee: PropTypes.number
    })
  )
}

export default TransactionsList
