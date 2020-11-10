import { createUseStyles } from 'react-jss'

const useTitleStyles = createUseStyles(theme => ({
  title: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(5),
    fontWeight: theme.fontWeights.extraBold,
    fontSize: theme.spacing(3)
  }
}))

export default useTitleStyles
