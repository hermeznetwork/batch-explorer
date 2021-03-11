import React from 'react'

import { NETWORK_STATUS_INDICATOR } from '../../../../constants'

import useNetworkStatusIndicatorStyles from './network-status-indicator.styles'

function NetworkStatusIndicator () {
  const classes = useNetworkStatusIndicatorStyles()

  // NETWORK_STATUS_INDICATOR can have following values (translated to network operational status)
  // 1 - Operative
  // 2 - Congested/withdraw delayed
  // 3 - Network stopped

  if (NETWORK_STATUS_INDICATOR === 3) {
    return (
      <div className={`${classes.status} ${classes.stopped}`}>Network stopped</div>
    )
  } else if (NETWORK_STATUS_INDICATOR === 2) {
    return (
      <div className={`${classes.status} ${classes.congested}`}>Congested/withdraw delayed</div>
    )
  } else {
    return (
      <div className={`${classes.status} ${classes.operative}`}>Operative</div>
    )
  }
}

export default NetworkStatusIndicator
