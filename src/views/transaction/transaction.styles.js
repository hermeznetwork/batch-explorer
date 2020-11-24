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
    background: theme.palette.green.light,
    borderRadius: '8px',
    color: theme.palette.green.main,
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px`,
    margin: `-${theme.spacing(0.5)}px`,
    textAlign: 'center',
    width: 'fit-content'
  }
}))

export default useTransactionStyles
