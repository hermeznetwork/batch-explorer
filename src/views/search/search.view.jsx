import React, { useState } from 'react'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import useSearchStyles from './search.styles'

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

  function handleSearch () {
    if (hezEthereumAddressPattern.test(searchTerm) || bjjAddressPattern.test(searchTerm)) {
      changeRoute(`/user-account/${searchTerm}`)
    } else if (batchNumPattern.test(searchTerm)) {
      changeRoute(`/batch/${searchTerm}`)
    } else if (transactionIdPattern.test(searchTerm)) {
      changeRoute(`/transaction/${searchTerm}`)
    } else if (ethereumAddressPattern.test(searchTerm)) {
      changeRoute(`/coordinator/${searchTerm}`)
    } else {
      changeRoute('/search-error')
    }
  }

  return (
    <div className={classes.root}>
      <input
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        type='text'
        placeholder='Search your transaction, an address, or a batch'
      />
      <button onClick={handleSearch}>CLICK ME</button>
      {/* TODO: Remove this link once Transactions page is done, since User account page should be linked from there */}
      {/* <strong><a href='http://localhost:3000/user-account/hez:0xaa942cfcd25ad4d90a62358b0dd84f33b398262a'>TEST USER ACCOUNT</a></strong> */}
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
