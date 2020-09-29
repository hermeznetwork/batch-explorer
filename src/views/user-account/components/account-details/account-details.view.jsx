import React from 'react'
import { Link } from 'react-router-dom'

import useAccountDetailsStyles from './account-details.styles'

function AccountDetails ({ ethereumAddress, tokenSymbol, balance, tokenId, accountIndex }) {
  const classes = useAccountDetailsStyles()

  return (
    <div className={classes.row}>
      <div>
        <Link to={`/token-account/${ethereumAddress}/${tokenId}/${accountIndex}`}>Token: {tokenSymbol}</Link>
      </div>
      <div>
            Eth address: {ethereumAddress}
      </div>
      <div>
            Balance: {balance}
      </div>
    </div>
  )
}

export default AccountDetails
