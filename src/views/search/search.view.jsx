import React, { useState } from 'react'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchCoordinator } from '../../store/search/search.thunks'
import useSearchStyles from './search.styles'
import { ReactComponent as MagnifyingGlass } from '../../images/icons/magnifying-glass.svg'

function Search ({
  changeRoute,
  onLoadCoordinator,
  coordinatorTask
}) {
  const classes = useSearchStyles()
  const [searchTerm, setSearchTerm] = useState('')
  const ethereumAddressPattern = new RegExp('^0x[a-fA-F0-9]{40}$')
  const hezEthereumAddressPattern = new RegExp('^hez:0x[a-fA-F0-9]{40}$')
  const bjjAddressPattern = new RegExp('^hez:[A-Za-z0-9_-]{44}$')
  const batchNumPattern = new RegExp('^[0-4]?\\d{0,9}$')
  const transactionIdPattern = new RegExp('^0x00[a-fA-F0-9]{64}|^0x01[a-fA-F0-9]{64}|^0x02[a-fA-F0-9]{64}$')
  const accountIndexPattern = new RegExp('^hez:[a-zA-Z0-9]{2,6}:[0-9]{0,9}$')
  const coordinatorId = searchTerm

  /**
   * Handles route change based on a pattern recognition
   * ethereumAddressPattern ^0x[a-fA-F0-9]{40}$
   * hezEthereumAddressPattern ^hez:0x[a-fA-F0-9]{40}$
   * bjjAddressPattern ^hez:[A-Za-z0-9_-]{44}$
   * batchNumPattern ^[0-4]?\\d{0,9}$
   * transactionIdPattern ^0x00[a-fA-F0-9]{22}|^0x01[a-fA-F0-9]{22}|^0x02[a-fA-F0-9]{22}$
   * accountIndexPattern ^hez:[a-zA-Z0-9]{2,6}:[0-9]{0,9}$
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
      switch (coordinatorTask.status) {
        case 'successful': 
          changeRoute(`/coordinator/${searchTerm}`)
          break
        case 'failed': 
          changeRoute(`/user-account/${searchTerm}`)
          break
        default: 
          setSearchTerm('')
      }
    } else if (accountIndexPattern.test(searchTerm)) {
      changeRoute(`/token-account/${searchTerm}`)
    } else {
      if(searchTerm.length) {
        changeRoute(`/search-error/${searchTerm}`)
      }
    }
    setSearchTerm('')
  }

  React.useEffect(() => {
    onLoadCoordinator(coordinatorId)
  }, [coordinatorId, onLoadCoordinator])

  return (
    <div className={classes.root}>
      <input
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value.trim())}
        onKeyUp={e => e.keyCode === 13 && handleSearch()}
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
  changeRoute: PropTypes.func.isRequired,
  onLoadCoordinator: PropTypes.func.isRequired,
  coordinatorTask: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  coordinatorTask: state.search.coordinatorTask
})

const mapDispatchToProps = (dispatch) => ({
  changeRoute: (route) => dispatch(push(route)),
  onLoadCoordinator: (coordinatorId) => dispatch(fetchCoordinator(coordinatorId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
