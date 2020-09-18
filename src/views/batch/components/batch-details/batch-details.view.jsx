import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

import useBatchDetailsStyles from './batch-details.styles'

function BatchDetails ({ batch }) {
  const classes = useBatchDetailsStyles()

  function findFee (tokenId) {
    return batch.collectedFees.find((fee) => fee.tokenId === tokenId)
  }

  return (
    <div className={classes.row}>
      <div>
            Batch: {batch.batchNum}
      </div>
      <div>
            Number of transactions: {batch.forgeL1TransactionsNum}
      </div>
      <div>
            Slot: <Link to={`/slot/${batch.slotNum}`}>{batch.slotNum}</Link>
      </div>
      <div>
            Ethereum block number: {batch.ethereumBlockNum}
      </div>
      <div>
            ExitRoot: {batch.exitRoot}
      </div>
      <div>
            CollectedFees -
        {
          batch.collectedFees.map((fee, index) =>
            <div
              key={fee.tokenId}
              className={clsx({ [classes.fee]: index > 0 })}
            >
              <div>
                  Token: {findFee(fee.tokenId).tokenSymbol}
              </div>
              <div>
                  Amount: {findFee(fee.tokenId).amount}
              </div>
            </div>
          )
        }
      </div>
      <div>
            ForgerAddr: {batch.forgerAddr}
      </div>
    </div>
  )
}

export default BatchDetails
