import React from 'react'
import { Link } from 'react-router-dom'
import getPartiallyHiddenAddress from '../../../utils/address-shortener'

import useTransactionStyles from './transaction.styles'

function Transaction ({ transactionId, amount, tokenSymbol, isToken }) {
  const classes = useTransactionStyles()

  return (
    <div className={classes.row}>
      <div className={`${classes.col} ${classes.link}`}>
        <Link to={`/transaction/${transactionId}`}>
          <span className={classes.shorthenedAddress}>{getPartiallyHiddenAddress(transactionId)}</span>
          <span className={classes.notShorthenedAddress}>{transactionId}</span>
        </Link>
      </div>
      {
        isToken
          ? <></>
          : <div className={classes.col}>{tokenSymbol}</div>
      }
      <div className={classes.col}>{amount}</div>
    </div>
  )
}

export default Transaction
