import React from 'react'

import useBatchDetailsStyles from './batch-details.styles'

function BatchDetails ({ batch }) {
  const classes = useBatchDetailsStyles()

  return (
    <div className={classes.row}>
      <div>
            Batch: {batch[0].BatchID}
      </div>
      <div>
            Number of transactions: {batch[0].numberOfTransactions}
      </div>
      <div>
            Slot: {batch[0].SlotNum}
      </div>
      <div>
            EthTxHash: {batch[0].EthTxHash}
      </div>
      <div>
            EthBlockNum: {batch[0].EthBlockNum}
      </div>
      <div>
            ExitRoot: {batch[0].ExitRoot}
      </div>
      <div>
            OldStateRoot: {batch[0].OldStateRoot}
      </div>
      <div>
            NewStateRoot: {batch[0].NewStateRoot}
      </div>
      <div>
            CollectedFees: {batch[0].CollectedFees}
      </div>
      <div>
            ForgerAddr: {batch[0].ForgerAddr}
      </div>
      <div>
            timeStamp: {batch[0].timeStamp}
      </div>
    </div>
  )
}

export default BatchDetails
