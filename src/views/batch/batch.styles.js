import { createUseStyles } from 'react-jss'

const useBatchStyles = createUseStyles(theme => ({
  root: {
    width: '100%'
  },
  wrapper: {
    width: '100%'
  },
  title: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
    fontWeight: theme.fontWeights.extraBold,
    fontSize: theme.spacing(3)
  },
  titleFirst: {
    marginBottom: theme.spacing(5)
  }
}))

export default useBatchStyles
