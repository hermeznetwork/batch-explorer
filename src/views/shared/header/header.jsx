import React from 'react'
import { Link } from 'react-router-dom'

import useHeaderStyles from './header.styles'
import logo from '../../../images/logo.svg'
import Container from '../container/container.view'
import Search from '../../search/search.view'

function Header () {
  const classes = useHeaderStyles()

  return (
    <header className={classes.root}>
      <Container disableVerticalGutters>
        <div>

          <div className={`${classes.row} ${classes.logoAndLinks}`}>
            <div>
              <Link
                to='/'
                className={classes.logo}
              >
                <img src={logo} alt='Hermez logo' />
                <span className={classes.logoHeadline}>Explorer</span>
              </Link>
            </div>
            <div>
              <Link to='/' className={classes.link}>
                <p className={classes.linkText}>Hermez wallet</p>
              </Link>
            </div>
            <div>
              <Link to='https://twitter.com/hermez_network' className={classes.link}>
                <p className={classes.linkText}>Twitter</p>
              </Link>
            </div>
          </div>

          <div className={`${classes.row} ${classes.headline}`}>
            <h1>Hermez Batch Explorer</h1>
          </div>

          <div className={`${classes.row} ${classes.search}`}>
            <Search />
          </div>

        </div>
      </Container>
    </header>
  )
}

export default Header
