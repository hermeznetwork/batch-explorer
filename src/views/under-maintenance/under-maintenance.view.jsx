import React from 'react'

import Container from '../shared/container/container.view'
import { ReactComponent as MaitenanceLogo } from '../../images/icons/maitenance-logo.svg'

import useUnderMaintenanceStyles from './under-maintenance.styles'

function UnderMaintenance () {
  const classes = useUnderMaintenanceStyles()

  return (
    <div className={classes.root}>
        <Container disableTopGutter>
            <div className={classes.wrapper}>
            <div className={classes.image}>
                <MaitenanceLogo />
            </div>
            <p className={classes.text}>Hermez is currently under maintenance. Please, try to access it again later.</p>
            </div>
        </Container>
    </div>
  )
}

export default UnderMaintenance
