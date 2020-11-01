import { createUseStyles } from 'react-jss'

const useBatchDetailsStyles = createUseStyles(theme => ({
  row: {
    padding: `${theme.spacing(2.5)}px 0`,
    borderBottom: `1px solid ${theme.palette.grey.ultraLight}`,
    '&:first-child': {
      borderTop: `1px solid ${theme.palette.grey.ultraLight}`
    },
    [theme.breakpoints.sm]: {
      display: 'flex',
      justifyContent: 'space-between'
    }
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
    paddingLeft: theme.spacing(1)
  },
  seeDetailsButton: {
    fontWeight: theme.fontWeights.bold,
    background: theme.palette.grey.veryLight,
    borderRadius: '16px',
    color: theme.palette.grey.main,
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
  seeDetailsHidden: {
    display: 'none'
  },
  seeDetailsVisible: {
    display: 'block'
  },
  seeDetailsButtonHidden: {
    display: 'none'
  }
}))

export default useBatchDetailsStyles
