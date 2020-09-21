import React from 'react'
import { Link } from 'react-router-dom'

import useAccountDetailsStyles from './account-details.styles'

function AccountDetails ({ publicKey, ethereumAddress, nonce, tokenSymbol, balance }) {
  const classes = useAccountDetailsStyles()

  return (
    <div className={classes.row}>
      <div>
            Baby JubJub: {publicKey}
      </div>
      <div>
            Eth address: {ethereumAddress}
      </div>
      <div>
            Nonce: {nonce}
      </div>
      <div>
            Token symbol: {tokenSymbol}
      </div>
      <div>
            Balance: {balance}
      </div>
      <div>
            Token accounts: <Link to={`/token-accounts/${ethereumAddress}`}>{}</Link>
      </div>
    </div>
  )
}

export default AccountDetails
