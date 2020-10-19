import { createUseStyles } from 'react-jss'

const useTransactionsListStyles = createUseStyles(theme => ({
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `${theme.spacing(3)}px 0`,
    borderBottom: `1px solid ${theme.palette.grey.veryLight}`
  },
  link: {
    width: theme.spacing(40)
  },
  col: {
    '&:first-child': {
      width: theme.spacing(40),
      paddingRight: theme.spacing(3),
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    },
    '&:last-child': {
      width: theme.spacing(20),
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      textAlign: 'right'
    }
  }
}))

export default useTransactionsListStyles
