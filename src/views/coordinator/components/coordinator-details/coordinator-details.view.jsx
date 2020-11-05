import React from 'react'

import useCoordinatorDetailsStyles from './coordinator-details.styles'
import { ReactComponent as CopyIcon } from '../../../../images/icons/copy.svg'
import { copyToClipboard } from '../../../../utils/dom'
import Button from '../../../shared/button/button.view'

function CoordinatorDetails ({ coordinator }) {
  const classes = useCoordinatorDetailsStyles()

  function handleCopyToClipboardClick (item) {
    copyToClipboard(item)
  }

  return (
    <section>
      <div className={classes.row}>
        <div className={classes.col}>
          Forger address
        </div>
        <div className={classes.col}>
          <div className={classes.rowWrapped}>
            <div>
              <Button
                icon={<CopyIcon />}
                onClick={() => handleCopyToClipboardClick(coordinator.forgerAddr)}
              />
            </div>
            <div className={classes.colWrapped}>
              {coordinator.forgerAddr}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>
          Bidder address
        </div>
        <div className={classes.col}>
          <div className={classes.rowWrapped}>
            <div>
              <Button
                icon={<CopyIcon />}
                onClick={() => handleCopyToClipboardClick(coordinator.bidderAddr)}
              />
            </div>
            <div className={classes.colWrapped}>
              {coordinator.bidderAddr}
            </div>
          </div>

        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>
          URL
        </div>
        <div className={`${classes.col} ${classes.link}`}>
          <a
            href={coordinator.URL}
            target='_blank'
            rel='noopener noreferrer'
          >
            {coordinator.URL}
          </a>
        </div>
      </div>
    </section>
  )
}

export default CoordinatorDetails
