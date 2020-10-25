import { createUseStyles } from 'react-jss'

const useSearchStyles = createUseStyles(theme => ({
  root: {
    width: '100%'
  },
  wrapper: {
    width: '100%'
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: theme.fontWeights.extraBold,
    fontSize: theme.spacing(3)
  }
}))

export default useSearchStyles
