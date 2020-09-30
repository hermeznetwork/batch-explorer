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
        <h1>
          <Link
            to='/'
            className={classes.logo}
          >
            <img src={logo} alt='Hermez logo' /> Explorer
          </Link>
        </h1>
        <div className={classes.headerContent}>
          <Link to='/' className={classes.link}>
            <p className={classes.linkText}>Hermez wallet</p>
          </Link>
          <Link to='https://twitter.com/hermez_network' className={classes.link}>
            <p className={classes.linkText}>Twitter</p>
          </Link>
        </div>
        <Search />
      </Container>
    </header>
  )
}

export default Header
