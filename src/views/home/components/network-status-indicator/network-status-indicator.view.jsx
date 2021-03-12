import React from 'react'

import { NETWORK_STATUS_INDICATOR } from '../../../../constants'

import useNetworkStatusIndicatorStyles from './network-status-indicator.styles'

function NetworkStatusIndicator () {
  const classes = useNetworkStatusIndicatorStyles()

  // NETWORK_STATUS_INDICATOR can have following values (translated to network operational status)
  // 1 - Operational
  // 2 - Degraded Performance
  // 3 - Network Unavailable

  if (NETWORK_STATUS_INDICATOR === 3) {
    return (
      <div className={`${classes.status} ${classes.unavailable}`}>Network Unavailable</div>
    )
  } else if (NETWORK_STATUS_INDICATOR === 2) {
    return (
      <div className={`${classes.status} ${classes.degraded}`}>Degraded Performance</div>
    )
  } else {
    return (
      <div className={`${classes.status} ${classes.operational}`}>Operational</div>
    )
  }
}

export default NetworkStatusIndicator
