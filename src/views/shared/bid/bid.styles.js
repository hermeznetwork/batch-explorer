import { createUseStyles } from 'react-jss'

const UseBidStyles = createUseStyles(theme => ({
  shorthenedAddress: {
    display: 'block',
    [theme.breakpoints.sm]: {
      display: 'none'
    }
  },
  notShorthenedAddress: {
    display: 'none',
    [theme.breakpoints.sm]: {
      display: 'block'
    }
  }
}))

export default UseBidStyles
