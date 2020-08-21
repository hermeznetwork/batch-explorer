import React from 'react'
import PropTypes from 'prop-types'

import useBatchDetailsStyles from './batch-details.styles'

function BatchDetails ({ batch }) {
  const classes = useBatchDetailsStyles()

  return (
    <div className={classes.row}>
      <div>
            Batch: {batch.BatchID}
      </div>
      <div>
            Number of transactions: {batch.numberOfTransactions}
      </div>
      <div>
            Slot: {batch.SlotNum}
      </div>
      <div>
            EthTxHash: {batch.EthTxHash}
      </div>
      <div>
            EthBlockNum: {batch.EthBlockNum}
      </div>
      <div>
            ExitRoot: {batch.ExitRoot}
      </div>
      <div>
            OldStateRoot: {batch.OldStateRoot}
      </div>
      <div>
            NewStateRoot: {batch.NewStateRoot}
      </div>
      <div>
            CollectedFees: {batch.CollectedFees}
      </div>
      <div>
            ForgerAddr: {batch.ForgerAddr}
      </div>
      <div>
            timeStamp: {batch.timeStamp}
      </div>
    </div>
  )
}

BatchDetails.propTypes = {
  batch: PropTypes.array.isRequired
}

export default BatchDetails
