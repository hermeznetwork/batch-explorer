import React from 'react'
import { Link } from 'react-router-dom'

import useTransactionStyles from './transaction.styles'

function Transaction ({ transactionId, amount, tokenSymbol, isToken }) {
  const classes = useTransactionStyles()

  return (
    <div className={classes.row}>
      <div className={`${classes.col} ${classes.colFirst} ${classes.link}`}><Link to={`/transaction/${transactionId}`}>{transactionId}</Link></div>
      {
        isToken
          ? <></>
          : <div className={classes.col}>{tokenSymbol}</div>
      }
      <div className={`${classes.col} ${classes.colLast}`}>{amount}</div>
    </div>
  )
}

export default Transaction
