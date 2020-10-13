import { createUseStyles } from 'react-jss'

const useMainHeaderStyles = createUseStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    background: theme.palette.primary.main
  },
  wrapper: {
    width: '100%'
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(3)
  },
  headline: {
    fontWeight: theme.fontWeights.extraBold,
    fontSize: theme.spacing(1.5),
    marginTop: theme.spacing(5)
  },
  links: {
    display: 'flex',
    alignItems: 'center'
  },
  link: {
    fontWeight: theme.fontWeights.bold,
    marginRight: theme.spacing(2.5)
  },
  linkLast: {
    marginRight: 0
  },
  search: {
    marginBottom: theme.spacing(7)
  }
}))

export default useMainHeaderStyles
