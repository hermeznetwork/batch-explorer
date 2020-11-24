import React, { useState } from 'react'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import useSearchStyles from './search.styles'
import { ReactComponent as MagnifyingGlass } from '../../images/icons/magnifying-glass.svg'

function Search ({
  changeRoute
}) {
  const classes = useSearchStyles()
  const [searchTerm, setSearchTerm] = useState('')
  const ethereumAddressPattern = new RegExp('^0x[a-fA-F0-9]{40}$')
  const hezEthereumAddressPattern = new RegExp('^hez:0x[a-fA-F0-9]{40}$')
  const bjjAddressPattern = new RegExp('^hez:[A-Za-z0-9_-]{44}$')
  const batchNumPattern = new RegExp('^[0-4]?\\d{0,9}$')
  const transactionIdPattern = new RegExp('^0x00[a-fA-F0-9]{22}|^0x01[a-fA-F0-9]{22}|^0x02[a-fA-F0-9]{22}$')
  const accountIndexPattern = new RegExp('^hez:[a-zA-Z0-9]{2,6}:[0-9]{0,9}$')

  /**
   * Handles route change based on a pattern recognition
   *
   * @returns {void}
   */
  function handleSearch () {
    if (hezEthereumAddressPattern.test(searchTerm) || bjjAddressPattern.test(searchTerm)) {
      changeRoute(`/user-account/${searchTerm}`)
    } else if (batchNumPattern.test(searchTerm) && searchTerm !== '') {
      changeRoute(`/batch/${searchTerm}`)
    } else if (transactionIdPattern.test(searchTerm)) {
      changeRoute(`/transaction/${searchTerm}`)
    } else if (ethereumAddressPattern.test(searchTerm)) {
      changeRoute(`/coordinator/${searchTerm}`)
    } else if (accountIndexPattern.test(searchTerm)) {
      changeRoute(`/token-account/${searchTerm}`)
    } else {
      changeRoute(`/search-error/${searchTerm}`)
    }
    setSearchTerm('')
  }

  return (
    <div className={classes.root}>
      <input
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value.trim())}
        type='text'
        placeholder='Search for a transaction, an address, or a batch'
        className={classes.input}
      />
      <button
        onClick={handleSearch}
        className={classes.button}
      >
        <MagnifyingGlass />
      </button>
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
