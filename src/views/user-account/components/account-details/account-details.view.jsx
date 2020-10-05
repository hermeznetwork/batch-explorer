import React from 'react'
import { Link } from 'react-router-dom'

import useAccountDetailsStyles from './account-details.styles'

function AccountDetails ({ ethereumAddress, hezEthereumAddress, bjj, tokenSymbol, balance, tokenId, accountIndex }) {
  const classes = useAccountDetailsStyles()

  return (
    <div className={classes.row}>
      <div>
        Token: <Link to={`/token-account/${hezEthereumAddress}/${bjj}/${tokenId}/${accountIndex}`}>{tokenSymbol}</Link>
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
