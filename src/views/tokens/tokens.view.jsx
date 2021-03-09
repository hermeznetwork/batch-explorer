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
import TokensList from './components/tokens-list/tokens-list.view'
import Row from '../shared/row/row'
import Col from '../shared/col/col'

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
          <Title>Registered Tokens</Title>

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
                  <>
                    <Row flex>
                      <Col flex>
                        Token
                      </Col>
                      <Col flex>
                        Total Amount
                      </Col>
                    </Row>
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
                      <TokensList
                        tokens={tokensTask.data.tokens}
                      />
                    </InfiniteScroll>
                    <a
                      href='/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className={classes.addTokenButton}
                    >
                      Request to add a token
                    </a>
                  </>
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
  tokensTask: state.tokens.tokensTask
})

const mapDispatchToProps = (dispatch) => ({
  onLoadTokens: (fromItem) => dispatch(fetchTokens(fromItem)),
  onCleanup: () => dispatch(resetState())
})

export default connect(mapStateToProps, mapDispatchToProps)(Tokens)