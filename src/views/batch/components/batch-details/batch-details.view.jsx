import React from 'react'
import { Link } from 'react-router-dom'

import useBatchDetailsStyles from './batch-details.styles'

function BatchDetails ({ batch }) {
  const classes = useBatchDetailsStyles()

  return (
    <div className={classes.row}>
      <div>
        Batch: {batch.batchNum}
      </div>

      <div>
        Eth Block Hash {batch.ethereumBlockHash}
      </div>
      <div>
        Eth Block Number {batch.ethereumBlockNum}
      </div>
      <div>
        Status TODO
      </div>
      <div>
        Timestamp {batch.timestamp}
      </div>
      <div>
        Fees Collected {batch.historicTotalCollectedFeesUSD} USD
      </div>
      <div>
        <Link to={`/coordinator/${batch.forgerAddr}`}>Coordinator: {batch.forgerAddr}</Link>
      </div>
      <div>
        Number of txs {batch.forgeL1TransactionsNum}
      </div>
      <div>
        Slot: <Link to={`/slot/${batch.slotNum}`}>{batch.slotNum}</Link>
      </div>
      <div>
        State root {batch.stateRoot}
      </div>
      <div>
        Exit root {batch.exitRoot}
      </div>
    </div>
  )
}

export default BatchDetails
