import { createUseStyles } from 'react-jss'

const useTransactionsListItemStyles = createUseStyles(theme => ({
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `${theme.spacing(3)}px 0`,
    borderBottom: '1px solid' + theme.palette.grey.veryLight
  },
  col: {
    fontWeight: theme.fontWeights.bold
  },
  colFirst: {
    width: theme.spacing(40),
    paddingRight: theme.spacing(3),
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },
  colLast: {
    width: theme.spacing(20),
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    textAlign: 'right'
  },
  link: {
    color: theme.palette.secondary.main
  }
}))

export default useTransactionsListItemStyles
