import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import Batch from '../batch/batch.view'
import useBatchesListStyles from './batches-list.styles'

function BatchesList ({ batches }) {
  const classes = useBatchesListStyles()

  return (
    <section>
      {batches.map((batch, index) =>
        <div
          key={batch.batchNum}
          className={clsx({ [classes.batch]: index > 0 })}
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
