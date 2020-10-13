import { createUseStyles } from 'react-jss'

const useBatchStyles = createUseStyles(theme => ({
  col: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'space-between',
    background: theme.palette.white,
    borderRadius: theme.spacing(3),
    minHeight: theme.spacing(19.5),
    width: theme.spacing(39),
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
    fontWeight: 800
  },
  coordinator: {
    paddingTop: theme.spacing(2)
  },
  coordinatorLink: {
    color: theme.palette.secondary.main,
    fontWeight: 800,
    marginLeft: theme.spacing(1)
  },
  time: {
    color: theme.palette.grey.main,
    paddingTop: theme.spacing(2)
  }
}))

export default useBatchStyles
