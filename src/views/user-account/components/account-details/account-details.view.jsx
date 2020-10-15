import React from 'react'
import { Link } from 'react-router-dom'
import getPartiallyHiddenAddress from '../../../../utils/address-shortener'

import useAccountDetailsStyles from './account-details.styles'

function AccountDetails ({ ethereumAddress, hezEthereumAddress, tokenSymbol, balance, tokenId, accountIndex }) {
  const classes = useAccountDetailsStyles()

  return (
    <section>
      <div className={classes.row}>
        <div className={classes.col}>
          Token
        </div>
        <div className={classes.col}>
          Eth address
        </div>
        <div className={classes.col}>
          Balance
        </div>
      </div>
      <div className={classes.row}>
        <div className={`${classes.col} ${classes.link}`}>
          <Link to={`/token-account/${hezEthereumAddress}/${tokenId}/${accountIndex}`}>{tokenSymbol}</Link>
        </div>
        <div className={classes.col}>
          {getPartiallyHiddenAddress(ethereumAddress)}
        </div>
        <div className={classes.col}>
          {balance}
        </div>
      </div>
    </section>
  )
}

export default AccountDetails
