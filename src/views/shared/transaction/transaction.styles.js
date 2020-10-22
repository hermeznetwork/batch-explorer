import { createUseStyles } from 'react-jss'

const useTransactionsListItemStyles = createUseStyles(theme => ({
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `${theme.spacing(3)}px 0`,
    borderBottom: `1px solid ${theme.palette.grey.ultraLight}`
  },
  col: {
    fontWeight: theme.fontWeights.bold,
    '&:last-child': {
      width: theme.spacing(20),
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      textAlign: 'right'
    },
    '&:first-child': {
      width: theme.spacing(40),
      paddingRight: theme.spacing(3),
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
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

export default useTransactionsListItemStyles
