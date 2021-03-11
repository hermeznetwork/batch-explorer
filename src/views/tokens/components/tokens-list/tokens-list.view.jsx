import React from 'react'
import PropTypes from 'prop-types'

import Token from '../token/token.view'

function TokensList ({ tokens }) {
  return (
    <section>
      {tokens.map((token) =>
        <div key={token.id}>
          <Token
            name={token.name}
            symbol={token.symbol}
            ethereumAddress={token.ethereumAddress}
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
