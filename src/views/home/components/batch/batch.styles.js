import { createUseStyles } from 'react-jss'

const useBatchStyles = createUseStyles(theme => ({
  col: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'space-between',
    background: theme.palette.white,
    borderRadius: '24px',
    minHeight: theme.spacing(19.5),
    width: theme.spacing(39),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2.5)
  },
  batchWrapper: {
    width: '100%'
  },
  batch: {
    background: theme.palette.grey.light,
    borderRadius: '26px',
    color: theme.palette.grey.main,
    padding: theme.spacing(2),
    textAlign: 'center'
  },
  transaction: {
    paddingTop: theme.spacing(4)
  },
  transactionNumber: {
    fontWeight: theme.fontWeights.extraBold
  },
  coordinator: {
    paddingTop: theme.spacing(2)
  },
  coordinatorLink: {
    color: theme.palette.secondary.main,
    fontWeight: theme.fontWeights.extraBold,
    marginLeft: theme.spacing(1)
  },
  time: {
    color: theme.palette.grey.main,
    paddingTop: theme.spacing(2)
  }
}))

export default useBatchStyles
