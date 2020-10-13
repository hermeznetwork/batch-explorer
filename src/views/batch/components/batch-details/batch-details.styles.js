import { createUseStyles } from 'react-jss'

const useBatchDetailsStyles = createUseStyles(theme => ({
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `${theme.spacing(3)}px 0`,
    borderTop: '1px solid' + theme.palette.grey.veryLight
  },
  rowLast: {
    borderBottom: '1px solid' + theme.palette.grey.veryLight
  },
  col: {
    fontWeight: theme.fontWeights.medium
  },
  colLast: {
    fontWeight: theme.fontWeights.bold,
    maxWidth: theme.spacing(50),
    overflowWrap: 'break-word'
  },
  link: {
    color: theme.palette.secondary.main
  }
}))

export default useBatchDetailsStyles
