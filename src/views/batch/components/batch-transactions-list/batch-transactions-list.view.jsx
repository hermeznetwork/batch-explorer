import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import BatchTransaction from '../batch-transaction/batch-transaction.view'
import useBatchTransactionsListStyles from './batch-transactions-list.styles'

function BatchTransactionsList ({ transactions }) {
  const classes = useBatchTransactionsListStyles()

  function getTransaction (transactionId) {
    return transactions.find((transaction) => transaction.TxID === transactionId)
  }

  return (
    <div>
      <section>
        {transactions.map((transaction, index) =>
          <div
            key={transaction.TxID}
            className={clsx({ [classes.transaction]: index > 0 })}
          >
            <BatchTransaction
              transactionId={transaction.TxID}
              amount={getTransaction(transaction.TxID).Amount}
              fee={getTransaction(transaction.TxID).Fee}
            />
          </div>
        )}
      </section>
    </div>
  )
}

BatchTransactionsList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      TxID: PropTypes.number.isRequired,
      Amount: PropTypes.number.isRequired,
      Fee: PropTypes.number
    })
  )
}

export default BatchTransactionsList
