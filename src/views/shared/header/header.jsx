import React from 'react'
import { Link } from 'react-router-dom'

import useHeaderStyles from './header.styles'
import { ReactComponent as Logo } from '../../../images/logo.svg'
import Container from '../container/container.view'
import Search from '../../search/search.view'

function Header () {
  const classes = useHeaderStyles()

  return (
    <header className={classes.root}>
      <Container disableVerticalGutters>
        <div className={classes.wrapper}>
          <div className={`${classes.row} ${classes.logoAndLinks}`}>
            <div>
              <Link
                to='/'
              >
                <Logo />
              </Link>
            </div>
            <div className={classes.links}>
              <Link to='/' className={classes.link}>Hermez wallet</Link>
              <Link to='https://twitter.com/hermez_network' className={classes.link}>Twitter</Link>
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
