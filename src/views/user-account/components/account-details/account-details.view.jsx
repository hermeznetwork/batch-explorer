import React from 'react'

import useAccountDetailsStyles from './account-details.styles'

function AccountDetails ({ account }) {
  const classes = useAccountDetailsStyles()

  return (
    <div className={classes.row}>
      <div>
            Account: {account[0].BatchID}
      </div>
    </div>
  )
}

export default AccountDetails
