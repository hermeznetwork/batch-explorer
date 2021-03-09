import React from 'react'
import PropTypes from 'prop-types'

import Token from '../token/token.view'

function TokensList ({ tokens }) {
  return (
    <section>
      {tokens.map((token) =>
        <div key={token.id}>
          <Token
            usd={token.USD}
            symbol={token.symbol}
          />
        </div>
      )}
    </section>
  )
}

TokensList.propTypes = {
  tokens: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  )
}

export default TokensList
