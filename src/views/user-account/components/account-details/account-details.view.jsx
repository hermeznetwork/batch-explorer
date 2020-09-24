import React from 'react'

import useAccountDetailsStyles from './account-details.styles'

function AccountDetails ({ publicKey, ethereumAddress, nonce, tokenSymbol, balance }) {
  const classes = useAccountDetailsStyles()

  return (
    <div className={classes.row}>
      <div>
            Token symbol: {tokenSymbol}
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
