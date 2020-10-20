import { createUseStyles } from 'react-jss'

const useBatchStyles = createUseStyles(theme => ({
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `${theme.spacing(3)}px 0`,
    borderBottom: `1px solid ${theme.palette.grey.veryLight}`,
    fontWeight: theme.fontWeights.bold,
    '&:first-child': {
      fontWeight: theme.fontWeights.medium
    }
  },
  col: {
    fontWeight: theme.fontWeights.bold
  },
  link: {
    color: theme.palette.secondary.main,
    '&:hover': {
      color: theme.palette.orange.dark,
      textDecoration: 'underline'
    }
  }
}))

export default useBatchStyles
