import React from 'react'
import { Link } from 'react-router-dom'

import useBatchStyles from './batch.styles'

function Batch ({ batchNum, batchTxNum, batchForgerAddr, batchTimeStamp, hideForgerAddr }) {
  const classes = useBatchStyles()

  const diff = new Date(new Date() - new Date(batchTimeStamp * 1000))
  const seconds = ('0' + diff.getSeconds()).substr(-2) + 's ago'
  const minutes = ('0' + diff.getMinutes()).substr(-2) + 'm '
  const hours = diff.getHours() + 'h '
  const days = diff.getDate() > 1 ? ' more than a day ago' : ''
  const formattedTime = !days ? hours + minutes + seconds : days

  return (
    <div className={classes.row}>
      <Link to={`/batch/${batchNum}`}>
        Batch: {batchNum}
      </Link>
      <div>
        Txs: {batchTxNum}
      </div>
      {
        hideForgerAddr
          ? <></>
          : <div><Link to={`/coordinator/${batchForgerAddr}`}>Coordinator: {batchForgerAddr}</Link></div>
      }
      <div>
        {formattedTime}
      </div>
    </div>
  )
}

export default Batch
