import React from 'react'

import useTransactionStyles from './transaction.styles'

function Transaction ({ transactionId, amount, currentUSD, historicUSD, l1orl2 }) {
  const classes = useTransactionStyles()

  return (
    <div className={classes.row}>
      <div>
        Tx ID: {transactionId}
      </div>
      <div>
        Amount: {amount}
      </div>
      <div>
        Current USD: {currentUSD}
      </div>
      <div>
        Historic USD: {historicUSD}
      </div>
      <div>
        Level: {l1orl2}
      </div>
    </div>
  )
}

export default Transaction
