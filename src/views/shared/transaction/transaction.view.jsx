import React from 'react'
import PropTypes from 'prop-types'

import useTransactionStyles from './transaction.styles'

function Transaction ({ transactionId, amount, fee }) {
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
        Fee: {fee}
      </div>
    </div>
  )
}

Transaction.propTypes = {
  transactionId: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  fee: PropTypes.number
}

export default Transaction
