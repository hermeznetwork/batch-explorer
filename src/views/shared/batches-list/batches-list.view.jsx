import React from 'react'
import PropTypes from 'prop-types'

import Batch from '../batch/batch.view'

function BatchesList ({ batches }) {
  return (
    <section>
      {batches.map((batch, index) =>
        <div
          key={batch.batchNum}
        >
          <Batch
            batchNum={batch.batchNum}
            batchTxNum={batch.forgeL1TransactionsNum}
            batchForgerAddr={batch.forgerAddr}
            batchTimeStamp={batch.timeStamp}
          />
        </div>
      )}
    </section>
  )
}

BatchesList.propTypes = {
  batches: PropTypes.arrayOf(
    PropTypes.shape({
      batchNum: PropTypes.number.isRequired
    })
  )
}

export default BatchesList
