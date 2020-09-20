import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import Batch from '../batch/batch.view'
import useBatchesListStyles from './batches-list.styles'

function BatchesList ({ batches, hideForgerAddr }) {
  const classes = useBatchesListStyles()

  return (
    <div>
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
              hideForgerAddr={hideForgerAddr}
            />
          </div>
        )}
      </section>
    </div>
  )
}

BatchesList.propTypes = {
  batches: PropTypes.arrayOf(
    PropTypes.shape({
      batchNum: PropTypes.number.isRequired
    })
  ),
  hideForgerAddr: PropTypes.bool
}

export default BatchesList
