import React from 'react'

import useCoordinatorDetailsStyles from './coordinator-details.styles'

function CoordinatorDetails ({ coordinator }) {
  const classes = useCoordinatorDetailsStyles()

  return (
    <section>
      <div className={classes.row}>
        <div className={classes.col}>
          Forger address
        </div>
        <div className={classes.col}>
          {coordinator.forgerAddr}
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>
          Bidder address
        </div>
        <div className={classes.col}>
          {coordinator.bidderAddr}
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
