import { createUseStyles } from 'react-jss'

const useTransactionStyles = createUseStyles(theme => ({
  wrapper: {
    width: '100%'
  },
  title: {
    marginTop: theme.spacing(8),
    paddingBottom: theme.spacing(5),
    fontWeight: theme.fontWeights.extraBold,
    fontSize: theme.spacing(3),
    borderBottom: `1px solid ${theme.palette.grey.ultraLight}`,
    marginBlockEnd: 0
  },
  row: {
    padding: `${theme.spacing(2.5)}px 0`,
    borderBottom: `1px solid ${theme.palette.grey.ultraLight}`,
    [theme.breakpoints.sm]: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  },
  rowWrapped: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: theme.spacing(50)
  },
  col: {
    fontWeight: theme.fontWeights.medium,
    '&:last-child': {
      fontWeight: theme.fontWeights.bold,
      maxWidth: theme.spacing(50),
      overflowWrap: 'break-word',
      lineHeight: `${theme.spacing(3)}px`,
      marginTop: theme.spacing(1.5),
      [theme.breakpoints.sm]: {
        marginTop: 0
      }
    }
  },
  colWrapped: {
    maxWidth: theme.spacing(45)
  },
  status: {
    fontWeight: theme.fontWeights.medium,
    background: theme.palette.green.light,
    borderRadius: '8px',
    color: theme.palette.green.main,
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px`,
    margin: `-${theme.spacing(0.5)}px`,
    textAlign: 'center'
  },
  link: {
    color: theme.palette.secondary.main,
    '&:hover': {
      color: theme.palette.orange.dark,
      textDecoration: 'underline'
    }
  },
  icon: {
    marginLeft: theme.spacing(1)
  },
  detailButton: {
    fontWeight: theme.fontWeights.bold,
    background: theme.palette.grey.veryLight,
    borderRadius: 16,
    color: theme.palette.black,
    padding: `${theme.spacing(1.5)}px ${theme.spacing(2)}px`,
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
  }
}))

export default useTransactionStyles
