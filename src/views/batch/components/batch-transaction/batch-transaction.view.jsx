import React from 'react'
import PropTypes from 'prop-types'

import useBatchTransactionStyles from './batch-transaction.styles'

function BatchTransaction ({ transactionId, amount, fee }) {
  const classes = useBatchTransactionStyles()

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

BatchTransaction.propTypes = {
  transactionId: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  fee: PropTypes.number
}

export default BatchTransaction
