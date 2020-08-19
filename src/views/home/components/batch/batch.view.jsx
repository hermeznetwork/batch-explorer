import React from 'react'
import PropTypes from 'prop-types'

import useBatchStyles from './batch.styles'

function Batch ({ batchId, batchTxNum, ForgerAddr }) {
  const classes = useBatchStyles()

  return (
    <div className={classes.row}>
      <div>
            Batch: {batchId}
      </div>
      <div>
            Age: {}
      </div>
      <div>
            Txs: {batchTxNum}
      </div>
      <div>
            Coordinator: {ForgerAddr}
      </div>
    </div>
  )
}

Batch.propTypes = {
  batchId: PropTypes.number.isRequired,
  batchTxNum: PropTypes.number.isRequired,
  ForgerAddr: PropTypes.string.isRequired
}

export default Batch
