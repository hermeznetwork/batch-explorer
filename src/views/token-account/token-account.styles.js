import { createUseStyles } from 'react-jss'

const useTokenAccountsStyles = createUseStyles(theme => ({
  wrapper: {
    width: '100%'
  },
  title: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(5),
    fontWeight: theme.fontWeights.extraBold,
    fontSize: theme.spacing(3)
  }
}))

export default useTokenAccountsStyles
