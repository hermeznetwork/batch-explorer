import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchTransaction } from '../../store/transaction/transaction.thunks'

function Transaction ({
  onLoadTransaction,
  transactionTask
}) {
  const { transactionId } = useParams()

  React.useEffect(() => {
    onLoadTransaction(transactionId)
  }, [transactionId, onLoadTransaction])

  return (
    <div>
        Transaction
    </div>
  )
}

Transaction.propTypes = {
  transactionTask: PropTypes.shape({
    status: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        transactionId: PropTypes.number.isRequired
      })
    ),
    error: PropTypes.string
  })
}

const mapStateToProps = (state) => ({
  transactionTask: state.transaction.transactionTask
})

const mapDispatchToProps = (dispatch) => ({
  onLoadTransaction: (transactionId) => dispatch(fetchTransaction(transactionId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Transaction)
