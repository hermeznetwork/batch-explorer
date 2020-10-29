import React from 'react'
import { Link } from 'react-router-dom'

import useAccountDetailsStyles from './account-details.styles'

function AccountDetails ({ tokenSymbol, balance, accountIndex }) {
  const classes = useAccountDetailsStyles()

  return (
    <section>
      <div className={classes.row}>
        <div className={classes.col}>
          Token
        </div>
        <div className={classes.col}>
          Address
        </div>
        <div className={classes.col}>
          Balance
        </div>
      </div>
      <div className={classes.row}>
        <div className={`${classes.col} ${classes.link}`}>
          <Link to={`/token-account/${accountIndex}`}>{tokenSymbol}</Link>
        </div>
        <div className={classes.col}>
          {accountIndex}
        </div>
        <div className={classes.col}>
          {balance}
        </div>
      </div>
    </section>
  )
}

export default AccountDetails
