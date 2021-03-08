import { createUseStyles } from 'react-jss'

const useColStyles = createUseStyles(theme => ({
  col: {
    fontWeight: theme.fontWeights.medium,
    '&:last-child': {
      fontWeight: theme.fontWeights.bold,
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
    maxWidth: `calc(100% - ${theme.spacing(11.5)}px)`,
    [theme.breakpoints.sm]: {
      maxWidth: '100%'
    }
  },
  colFlex: {
    fontWeight: theme.fontWeights.bold,
    '&:first-child': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      flexGrow: 1,
      flexBasis: 0
    },
    '&:last-child': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      flexGrow: 1,
      flexBasis: 0,
      [theme.breakpoints.sm]: {
        textAlign: 'right'
      }
    }
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
