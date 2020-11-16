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
  search: {
    marginBottom: theme.spacing(2)
  },
  linksWrapper: {
    width: '100vw',
    height: '100vh'
  },
  links: {
    display: 'flex',
    alignItems: 'center'
  },
  link: {
    display: 'flex',
    marginTop: theme.spacing(10),
    fontSize: theme.spacing(3),
    [theme.breakpoints.sm]: {
      marginTop: theme.spacing(0),
      fontSize: theme.spacing(2)
    },
    fontWeight: theme.fontWeights.bold,
    marginRight: theme.spacing(2.5),
    position: 'relative',
    paddingBottom: theme.spacing(0.5),
    '&::after': {
      position: 'absolute',
      height: '2px',
      bottom: 0,
      backgroundColor: theme.palette.black,
      width: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      transition: 'all 0.25s ease',
      content: '\'\''
    },
    '&:hover::after': {
      width: '100%'
    },
    '&:last-child': {
      marginRight: 0
    }
  },
  menuButton: {
    border: '0',
    background: 'transparent',
    outline: 'none',
    [theme.breakpoints.sm]: {
      display: 'none'
    }
  },
  closeMenuButton: {
    textAlign: 'right',
    width: '100%'
  },
  active: {
    display: 'block'
  },
  notActive: {
    display: 'none'
  },
  hide: {
    [theme.breakpoints.sm]: {
      display: 'none'
    }
  },
  show: {
    [theme.breakpoints.sm]: {
      display: 'flex'
    }
  }
}))

export default useMainHeaderStyles
