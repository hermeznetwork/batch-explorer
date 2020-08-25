import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import Batch from '../batch/batch.view'
import useBatchesListStyles from './batches-list.styles'

function BatchesList ({ batches, hideForgerAddr }) {
  const classes = useBatchesListStyles()

  function findBatch (batchId) {
    return batches.find((batch) => batch.BatchID === batchId)
  }

  return (
    <div>
      <section>
        {batches.map((batch, index) =>
          <div
            key={batch.BatchID}
            className={clsx({ [classes.batch]: index > 0 })}
          >
            <Batch
              batchId={batch.BatchID}
              batchTxNum={findBatch(batch.BatchID).numberOfTransactions}
              batchForgerAddr={findBatch(batch.BatchID).ForgerAddr}
              batchTimeStamp={findBatch(batch.BatchID).timeStamp}
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
      BatchID: PropTypes.number.isRequired
    })
  ),
  hideForgerAddr: PropTypes.bool
}

export default BatchesList
