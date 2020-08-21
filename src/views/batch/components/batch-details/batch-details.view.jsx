import React from 'react'
import PropTypes from 'prop-types'

import useBatchDetailsStyles from './batch-details.styles'

function BatchDetails ({
  BatchID,
  numberOfTransactions,
  SlotNum,
  EthTxHash,
  EthBlockNum,
  ExitRoot,
  OldStateRoot,
  NewStateRoot,
  CollectedFees,
  ForgerAddr,
  timeStamp
}) {
  const classes = useBatchDetailsStyles()

  return (
    <div className={classes.row}>
      <div>
            Batch: {BatchID}
      </div>
      <div>
            Number of transactions: {numberOfTransactions}
      </div>
      <div>
            Slot: {SlotNum}
      </div>
      <div>
            EthTxHash: {EthTxHash}
      </div>
      <div>
            EthBlockNum: {EthBlockNum}
      </div>
      <div>
            ExitRoot: {ExitRoot}
      </div>
      <div>
            OldStateRoot: {OldStateRoot}
      </div>
      <div>
            NewStateRoot: {NewStateRoot}
      </div>
      <div>
            CollectedFees: {CollectedFees}
      </div>
      <div>
            ForgerAddr: {ForgerAddr}
      </div>
      <div>
            timeStamp: {timeStamp}
      </div>
    </div>
  )
}

BatchDetails.propTypes = {
  BatchID: PropTypes.number.isRequired,
  numberOfTransactions: PropTypes.number.isRequired,
  SlotNum: PropTypes.string.isRequired,
  EthTxHash: PropTypes.string.isRequired,
  EthBlockNum: PropTypes.number.isRequired,
  ExitRoot: PropTypes.string.isRequired,
  OldStateRoot: PropTypes.string.isRequired,
  NewStateRoot: PropTypes.string.isRequired,
  CollectedFees: PropTypes.number.isRequired,
  ForgerAddr: PropTypes.string.isRequired,
  timeStamp: PropTypes.number.isRequired
}

export default BatchDetails
