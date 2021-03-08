import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import useTokensStyles from './tokens.styles'
import Spinner from '../shared/spinner/spinner.view'
import Container from '../shared/container/container.view'
import { fetchTokens } from '../../store/tokens/tokens.thunks'
import InfiniteScroll from '../shared/infinite-scroll/infinite-scroll.view'
import { resetState } from '../../store/user-account/user-account.actions'
import Title from '../shared/title/title'

function Tokens ({
  onLoadTokens,
  tokensTask,
  onCleanup
}) {
  const classes = useTokensStyles()

  React.useEffect(() => {
    onLoadTokens()
  }, [onLoadTokens])

  React.useEffect(() => onCleanup, [onCleanup])

  return (
    <div className={classes.root}>
      <Container disableTopGutter>
        <div className={classes.wrapper}>
          <Title>User Address</Title>

          {(() => {
            switch (tokensTask.status) {
              case 'loading': {
                return <Spinner />
              }
              case 'failed': {
                return <p>{tokensTask.error}</p>
              }
              case 'reloading':
              case 'successful': {
                return (
                  <InfiniteScroll
                    asyncTaskStatus={tokensTask.status}
                    paginationData={tokensTask.data.pagination}
                    onLoadNextPage={(fromItem) => {
                      if (tokensTask.status === 'successful') {
                        onLoadTokens(
                          // TODO add id,
                          fromItem
                        )
                      }
                    }}
                  >
                        TEST: {tokensTask.data.tokens}
                  </InfiniteScroll>
                )
              }
              default: {
                return <></>
              }
            }
          })()}
        </div>
      </Container>
    </div>
  )
}

Tokens.propTypes = {
  onLoadTokens: PropTypes.func.isRequired,
  tokensTask: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  tokensTask: state.userAccount.tokensTask
})

const mapDispatchToProps = (dispatch) => ({
  onLoadTokens: (fromItem) => dispatch(fetchTokens(fromItem)),
  onCleanup: () => dispatch(resetState())
})

export default connect(mapStateToProps, mapDispatchToProps)(Tokens)
