import React from 'react'

import useTransactionStyles from './transaction.styles'

function Transaction ({ transactionId, tokenSymbol, amount }) {
  const classes = useTransactionStyles()

  return (
    <div className={classes.row}>
      <div>
        Tx ID: {transactionId}
      </div>
      <div>
        Token: {tokenSymbol}
      </div>
      <div>
        Amount: {amount}
      </div>
    </div>
  )
}

export default Transaction
