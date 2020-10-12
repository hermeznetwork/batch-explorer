import { createUseStyles } from 'react-jss'

const useBatchStyles = createUseStyles(theme => ({
  col: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'space-between',
    background: theme.palette.white,
    borderRadius: theme.spacing(3),
    minHeight: '156px',
    width: '310px',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2.5)
  },
  batch: {
    background: theme.palette.grey.light,
    borderRadius: theme.spacing(2),
    color: theme.palette.grey.main,
    padding: theme.spacing(2),
    width: '100%',
    textAlign: 'center'
  },
  transaction: {
    paddingTop: theme.spacing(4)
  },
  transactionNumber: {
    fontFamily: 'Modern Era Extra Bold'
  },
  coordinator: {
    paddingTop: theme.spacing(2)
  },
  coordinatorLink: {
    color: theme.palette.secondary.main,
    fontFamily: 'Modern Era Extra Bold',
    marginLeft: theme.spacing(1)
  },
  time: {
    color: theme.palette.grey.main,
    paddingTop: theme.spacing(2)
  }
}))

export default useBatchStyles