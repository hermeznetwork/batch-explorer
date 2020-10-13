import { createUseStyles } from 'react-jss'

const useMainHeaderStyles = createUseStyles(theme => ({
  root: {
    width: '100%',
    height: theme.headerHeight,
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
    fontWeight: 800,
    fontSize: theme.spacing(1.5),
    marginTop: theme.spacing(5)
  },
  links: {
    display: 'flex',
    alignItems: 'center'
  },
  link: {
    fontWeight: 700
  },
  notLastLink: {
    marginRight: theme.spacing(2.5)
  },
  search: {
    marginBottom: theme.spacing(7)
  }
}))

export default useMainHeaderStyles
