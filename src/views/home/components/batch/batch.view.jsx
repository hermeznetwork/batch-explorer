import React from 'react'
import PropTypes from 'prop-types'

import useBatchStyles from './batch.styles'

function Batch ({ batchId, batchTxNum }) {
  const classes = useBatchStyles()

  return (
    <div className={classes.row}>
      <div>
            Batch ID: {batchId}
      </div>
      <div>
            Batch Tx Number: {batchTxNum}
      </div>
    </div>
  )
}

Batch.propTypes = {
  batchId: PropTypes.number.isRequired,
  batchTxNum: PropTypes.number.isRequired
}

export default Batch
