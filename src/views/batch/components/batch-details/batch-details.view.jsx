import React from 'react'
import clsx from 'clsx'
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
        Eth Block Hash {batch.ethereumBlockNum}
      </div>
      <div>
        Eth Block Number {batch.ethereumBlockNum}
      </div>
      <div>
        Status
      </div>
      <div>
        Timestamp
      </div>
      <div>
            Fees Collected
        {
          batch.collectedFees.map((fee, index) =>
            <div
              key={fee.tokenId}
              className={clsx({ [classes.fee]: index > 0 })}
            >
              <div>
                  Token: {fee.tokenSymbol} {fee.amount}
              </div>
            </div>
          )
        }
      </div>
      <div>
        Total Collected Fees {batch.totalCollectedFeesUSD} USD
      </div>
      <div>
        Coordinator {batch.forgerAddr}
      </div>
      <div>
        Number of txs {batch.forgeL1TransactionsNum}
      </div>
      <div>
        Number of accounts {batch.numAccounts}
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
