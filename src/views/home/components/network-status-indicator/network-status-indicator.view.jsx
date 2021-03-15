import React from 'react'

import { WEBSITE_URL } from '../../../../constants'

import useNetworkStatusIndicatorStyles from './network-status-indicator.styles'

function NetworkStatusIndicator () {
  const classes = useNetworkStatusIndicatorStyles()

  // Network status indicator can have following values
  // 1 - Operational
  // 2 - Degraded Performance
  // 3 - Network Unavailable

  const [networkStatusIndicator, setData] = React.useState([])

  const getData = () => {
    fetch(WEBSITE_URL + 'network-status.json',
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        console.log('data: ', data)
        setData(data.networkStatusIndicator)
      })
  }
  React.useEffect(() => {
    getData()
  }, [])

  if (networkStatusIndicator === 3) {
    return (
      <div className={`${classes.status} ${classes.unavailable}`}>Network Unavailable</div>
    )
  } else if (networkStatusIndicator === 2) {
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
