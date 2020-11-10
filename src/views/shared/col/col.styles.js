import { createUseStyles } from 'react-jss'

const useColStyles = createUseStyles(theme => ({
  col: {
    fontWeight: theme.fontWeights.medium,
    '&:last-child': {
      fontWeight: theme.fontWeights.bold,
      maxWidth: theme.spacing(52),
      // token-accounts
      // width: theme.spacing(20),
      overflowWrap: 'break-word',
      lineHeight: `${theme.spacing(3)}px`,
      marginTop: theme.spacing(1.5),
      [theme.breakpoints.sm]: {
        textAlign: 'right',
        marginTop: 0
      }
    }
  },
  colWrapped: {
    // button 4.5 + root wrapper margins 2 x 4.5 = 11.5
    maxWidth: `calc(100% - ${theme.spacing(11.5)}px)`,
    [theme.breakpoints.sm]: {
      maxWidth: theme.spacing(45)
    }
  },
  status: {
    fontWeight: theme.fontWeights.medium,
    background: theme.palette.green.light,
    borderRadius: '8px',
    color: theme.palette.green.main,
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px`,
    margin: `-${theme.spacing(0.5)}px`,
    textAlign: 'center'
  },
  link: {
    color: theme.palette.secondary.main,
    '&:hover': {
      color: theme.palette.orange.dark,
      textDecoration: 'underline'
    }
  }
}))

export default useColStyles
