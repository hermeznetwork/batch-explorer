import React from 'react'
import { Link } from 'react-router-dom'

import useTransactionStyles from './transaction.styles'

function Transaction ({ transactionId, amount, tokenSymbol }) {
  const classes = useTransactionStyles()

  return (
    <div className={classes.row}>
      <div>
        <Link to={`/transaction/${transactionId}`}>Tx ID: {transactionId}</Link>
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
