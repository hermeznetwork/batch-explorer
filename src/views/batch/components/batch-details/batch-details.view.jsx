import React from 'react'

import useBatchDetailsStyles from './batch-details.styles'

function BatchDetails ({ batch }) {
  const classes = useBatchDetailsStyles()

  return (
    <div className={classes.row}>
      <div>
            Batch: {batch.batchNum}
      </div>
      <div>
            Number of transactions: {batch.forgeL1TransactionsNum}
      </div>
      <div>
            Slot: {batch.slotNum}
      </div>
      <div>
            EthTxHash: {batch.ethTxHash}
      </div>
      <div>
            Ethereum block number: {batch.ethereumBlockNum}
      </div>
      <div>
            ExitRoot: {batch.exitRoot}
      </div>
      <div>
            OldStateRoot: {batch.oldStateRoot}
      </div>
      <div>
            NewStateRoot: {batch.newStateRoot}
      </div>
      <div>
            CollectedFees: {batch.collectedFees}
      </div>
      <div>
            ForgerAddr: {batch.forgerAddr}
      </div>
      <div>
            timeStamp: {batch.timeStamp}
      </div>
    </div>
  )
}

export default BatchDetails
