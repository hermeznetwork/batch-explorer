import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import BatchTransaction from '../batch-transaction/batch-transaction.view'
import useBatchTransactionsListStyles from './batch-transactions-list.styles'

function BatchTransactionsList ({ transactions }) {
  const classes = useBatchTransactionsListStyles()

  function getL1Transaction (transactionId) {
    return transactions.L1Txs.find((transaction) => transaction.TxID === transactionId)
  }
  function getL2Transaction (transactionId) {
    return transactions.L2Txs.find((transaction) => transaction.TxID === transactionId)
  }

  return (
    <div>
      <section>
        <h4>L1 transactions</h4>
        {transactions.L1Txs.map((transaction, index) =>
          <div
            key={transaction.TxID}
            className={clsx({ [classes.transaction]: index > 0 })}
          >
            <BatchTransaction
              transactionId={transaction.TxID}
              amount={getL1Transaction(transaction.TxID).Amount}
              fee={getL1Transaction(transaction.TxID).Fee}
            />
          </div>
        )}
      </section>
      <section>
        <h4>L2 transactions</h4>
        {transactions.L2Txs.map((transaction, index) =>
          <div
            key={transaction.TxID}
            className={clsx({ [classes.transaction]: index > 0 })}
          >
            <BatchTransaction
              transactionId={transaction.TxID}
              amount={getL2Transaction(transaction.TxID).Amount}
              fee={getL2Transaction(transaction.TxID).Fee}
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
      Fee: PropTypes.number.isRequired
    })
  )
}

export default BatchTransactionsList
