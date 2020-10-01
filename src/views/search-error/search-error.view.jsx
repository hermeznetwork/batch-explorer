import React from 'react'
import { Link } from 'react-router-dom'

function Search () {
  return (
    <div>
      <div>We couldn’t find what you are looking for</div>
      <div>Please enter an address, a transaction hash, a batch height, an ens or a hash</div>
      <Link to='/'>Back Home</Link>
    </div>
  )
}

export default Search
