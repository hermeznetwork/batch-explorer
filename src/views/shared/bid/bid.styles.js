import { createUseStyles } from 'react-jss'

const UseBidStyles = createUseStyles(theme => ({
  shortenedAddress: {
    display: 'block',
    [theme.breakpoints.sm]: {
      display: 'none'
    }
  },
  notShortenedAddress: {
    display: 'none',
    [theme.breakpoints.sm]: {
      display: 'block'
    }
  }
}))

export default UseBidStyles
