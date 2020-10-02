import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import Transaction from '../transaction/transaction.view'
import useTransactionsListStyles from './transactions-list.styles'

function TransactionsList ({ transactions, isToken }) {
  const classes = useTransactionsListStyles()

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
              amount={Number(transaction.amount) / Math.pow(10, transaction.token.decimals)}
              tokenSymbol={transaction.tokenSymbol}
              isToken={isToken}
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
