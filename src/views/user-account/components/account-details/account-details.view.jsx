import React from 'react'

import useAccountDetailsStyles from './account-details.styles'

function AccountDetails ({ account }) {
  const classes = useAccountDetailsStyles()

  return (
    <div className={classes.row}>
      <div>
            Baby JubJub: {account[0].PublicKey}
      </div>
      <div>
            Eth address: {account[0].EthAddr}
      </div>
      <div>
            Nonce: {account[0].Nonce}
      </div>
      <div>
            Balance: {account[0].Balance}
      </div>
      <div>
            TokenID: {account[0].TokenID}
      </div>
    </div>
  )
}

export default AccountDetails
