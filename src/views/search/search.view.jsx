import React, { useState } from 'react'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import useSearchStyles from './search.styles'

function Search ({
  changeRoute
}) {
  const classes = useSearchStyles()
  const [value, setValue] = useState('')
  const input = <input value={value} onChange={e => setValue(e.target.value)} type='text' />
  let route = '/'
  const ethereumAddressPattern = new RegExp('^0x[a-fA-F0-9]{40}$')
  const batchNumPattern = new RegExp('^([0-4]?[0-9]?[0-9]?[0-9]?[0-9]?[0-9]?[0-9]?[0-9]?[0-9]?[0-9])$')

  if (ethereumAddressPattern.test(value)) {
    route = '/user-account/' + value
  } else if (batchNumPattern.test(value)) {
    route = '/batch/' + value
  } else {
    route = '/search-error'
  }

  return (
    <div className={classes.root}>
      {input}
      <button onClick={() => { changeRoute(route) }}>CLICK ME</button>
    </div>
  )
}

Search.propTypes = {
  changeRoute: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  changeRoute: (route) => dispatch(push(route))
})

export default connect(null, mapDispatchToProps)(Search)
