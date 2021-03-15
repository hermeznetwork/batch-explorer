import { createUseStyles } from 'react-jss'

const useTransactionStyles = createUseStyles(theme => ({
  wrapper: {
    width: '100%'
  },
  icon: {
    marginLeft: theme.spacing(1)
  },
  detailButton: {
    fontWeight: theme.fontWeights.bold,
    background: theme.palette.grey.veryLight,
    borderRadius: 16,
    color: theme.palette.grey.main,
    padding: `${theme.spacing(1.5)}px ${theme.spacing(2.5)}px`,
    textAlign: 'center',
    marginTop: theme.spacing(3),
    width: 'fit-content',
    border: 0,
    cursor: 'pointer',
    '&:hover': {
      background: theme.palette.grey.light
    },
    '&:focus': {
      outline: 'none'
    }
  },
  detailHidden: {
    display: 'none'
  },
  detailVisible: {
    display: 'block'
  },
  detailButtonHidden: {
    display: 'none'
  },
  status: {
    fontWeight: theme.fontWeights.medium,
    borderRadius: '8px',
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px`,
    margin: `-${theme.spacing(0.5)}px`,
    textAlign: 'center',
    width: 'fit-content'
  },
  completed: {
    background: theme.palette.green.light,
    color: theme.palette.green.main
  },
  pending: {
    background: theme.palette.secondary.veryLight,
    color: theme.palette.secondary.dark
  }
}))

export default useTransactionStyles
