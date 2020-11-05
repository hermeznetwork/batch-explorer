import { createUseStyles } from 'react-jss'

const useCoordinatorDetailsStyles = createUseStyles(theme => ({
  row: {
    padding: `${theme.spacing(2.5)}px 0`,
    borderBottom: `1px solid ${theme.palette.grey.ultraLight}`,
    '&:first-child': {
      borderTop: `1px solid ${theme.palette.grey.ultraLight}`
    },
    [theme.breakpoints.sm]: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  },
  rowWrapped: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: theme.spacing(50)
  },
  col: {
    fontWeight: theme.fontWeights.medium,
    '&:last-child': {
      fontWeight: theme.fontWeights.bold,
      maxWidth: theme.spacing(52),
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
    maxWidth: theme.spacing(45)
  },
  link: {
    color: theme.palette.secondary.main,
    '&:hover': {
      color: theme.palette.orange.dark,
      textDecoration: 'underline'
    }
  }
}))

export default useCoordinatorDetailsStyles
