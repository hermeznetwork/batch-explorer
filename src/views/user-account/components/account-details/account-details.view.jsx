import React from 'react'
import { Link } from 'react-router-dom'

import useAccountDetailsStyles from './account-details.styles'

function AccountDetails ({ publicKey, ethereumAddress, nonce, tokenSymbol, balance }) {
  const classes = useAccountDetailsStyles()

  return (
    <div className={classes.row}>
      <div>
        <Link to={`/token-account/${tokenSymbol}`}>Token: {tokenSymbol}</Link>
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
