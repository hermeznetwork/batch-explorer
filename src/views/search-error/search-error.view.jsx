import React from 'react'
import { Link } from 'react-router-dom'

import Container from '../shared/container/container.view'
import useSearchErrorStyles from './search-error.styles'

function Search () {
  const classes = useSearchErrorStyles()

  return (
    <div className={classes.root}>
      <Container disableTopGutter>
        <div className={classes.wrapper}>
          <h4 className={classes.title}>We couldn’t find what you are looking for</h4>
          <div>Please enter an address, a transaction hash, a batch height, an ens or a hash</div>
          <Link to='/'>Back Home</Link>
        </div>
      </Container>
    </div>
  )
}

export default Search
