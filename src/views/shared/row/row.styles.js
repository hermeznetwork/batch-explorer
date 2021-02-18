import { createUseStyles } from 'react-jss'

const useRowStyles = createUseStyles(theme => ({
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
    justifyContent: 'flex-start',
    [theme.breakpoints.sm]: {
      display: 'flex',
      justifyContent: 'space-between',
      marginLeft: theme.spacing(2)
    }
  },
  rowFlex: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `${theme.spacing(3)}px 0`,
    borderBottom: `1px solid ${theme.palette.grey.ultraLight}`,
    fontWeight: theme.fontWeights.bold,
    '&:first-child': {
      fontWeight: theme.fontWeights.medium
    }
  }
}))

export default useRowStyles
