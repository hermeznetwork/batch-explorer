import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import useBatchDetailsStyles from './batch-details.styles'
import { ReactComponent as AngleDown } from '../../../../images/icons/angle-down.svg'
import { ReactComponent as AngleUp } from '../../../../images/icons/angle-up.svg'
import { ReactComponent as CopyIcon } from '../../../../images/icons/copy.svg'
import { copyToClipboard } from '../../../../utils/dom'
import Button from '../../../shared/button/button.view'

function BatchDetails ({ batch }) {
  const classes = useBatchDetailsStyles()
  const [areDeailsVisible, setDetailsVisible] = React.useState()

  function handleCopyToClipboardClick (item) {
    copyToClipboard(item)
  }

  function handleDetailClick () {
    setDetailsVisible(true)
  }

  function handleCloseDetailClick () {
    setDetailsVisible(false)
  }

  return (
    <div>
      <div className={classes.row}>
        <div className={classes.col}>Eth Block Hash</div>
        <div className={classes.col}>
          <div className={classes.rowWrapped}>
            <div>
              <Button
                icon={<CopyIcon />}
                onClick={() => handleCopyToClipboardClick(batch.ethereumBlockHash)}
              />
            </div>
            <div className={classes.colWrapped}>
              {batch.ethereumBlockHash}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>Eth Block Number</div>
        <div className={classes.col}>{batch.ethereumBlockNum}</div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>Status</div>
        <div className={`${classes.col} ${classes.status}`}>Completed</div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>Timestamp</div>
        <div className={classes.col}>{new Date(batch.timestamp).toLocaleString()}</div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>Fees Collected</div>
        <div className={classes.col}>{batch.historicTotalCollectedFeesUSD} USD</div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>Coordinator</div>
        <div className={`${classes.col} ${classes.link}`}>
          <div className={classes.rowWrapped}>
            <div>
              <Button
                icon={<CopyIcon />}
                onClick={() => handleCopyToClipboardClick(batch.forgerAddr)}
              />
            </div>
            <div className={classes.colWrapped}>
              <Link to={`/coordinator/${batch.forgerAddr}`}>{batch.forgerAddr}</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx({
        [classes.detailHidden]: true,
        [classes.detailVisible]: areDeailsVisible
      })}
      >
        <div className={classes.row}>
          <div className={classes.col}>Number of txs</div>
          <div className={classes.col}>{batch.forgeL1TransactionsNum}</div>
        </div>
        <div className={classes.row}>
          <div className={classes.col}>Slot</div>
          <div className={`${classes.col} ${classes.link}`}><Link to={`/slot/${batch.slotNum}`}>{batch.slotNum}</Link></div>
        </div>
        <div className={classes.row}>
          <div className={classes.col}>State root</div>
          <div className={classes.col}>
            <div className={classes.rowWrapped}>
              <div>
                <Button
                  icon={<CopyIcon />}
                  onClick={() => handleCopyToClipboardClick(batch.stateRoot)}
                />
              </div>
              <div className={classes.colWrapped}>
                {batch.stateRoot}
              </div>
            </div>

          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.col}>Exit root</div>
          <div className={classes.col}>
            <div className={classes.rowWrapped}>
              <div>
                <Button
                  icon={<CopyIcon />}
                  onClick={() => handleCopyToClipboardClick(batch.exitRoot)}
                />
              </div>
              <div className={classes.colWrapped}>
                {batch.exitRoot}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className={clsx({
          [classes.detailButton]: true,
          [classes.detailButtonHidden]: areDeailsVisible,
          [classes.detailVisible]: true
        })}
        onClick={() => handleDetailClick()}
      >
        See details
        <AngleDown className={classes.icon} />
      </button>
      <button
        className={clsx({
          [classes.detailButton]: true,
          [classes.detailHidden]: true,
          [classes.detailVisible]: areDeailsVisible
        })}
        onClick={() => handleCloseDetailClick()}
      >
        Close details
        <AngleUp className={classes.icon} />
      </button>
    </div>
  )
}

export default BatchDetails
