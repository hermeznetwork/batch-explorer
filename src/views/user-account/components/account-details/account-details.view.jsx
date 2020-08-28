import React from 'react'
import { Link } from 'react-router-dom'

import useAccountDetailsStyles from './account-details.styles'

function AccountDetails ({ account }) {
  const classes = useAccountDetailsStyles()

  return (
    <div className={classes.row}>
      <div>
            Hermez Address: {account[0].PublicKey}
      </div>
      <div>
            Ethereum address: {account[0].EthAddr}
      </div>
      <div>
            Token accounts: <Link to={`/token-accounts/${account[0].EthAddr}`}>{account.length}</Link>
      </div>
      <div>
            Nonce: {account[0].Nonce}
      </div>
    </div>
  )
}

export default AccountDetails
