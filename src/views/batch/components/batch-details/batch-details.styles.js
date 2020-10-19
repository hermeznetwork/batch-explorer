import { createUseStyles } from 'react-jss'

const useBatchDetailsStyles = createUseStyles(theme => ({
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `${theme.spacing(2.5)}px 0`,
    borderBottom: `1px solid ${theme.palette.grey.veryLight}`,
    '&:first-child': {
      borderTop: `1px solid ${theme.palette.grey.veryLight}`
    }
  },
  col: {
    fontWeight: theme.fontWeights.medium,
    '&:last-child': {
      fontWeight: theme.fontWeights.bold,
      maxWidth: theme.spacing(50),
      overflowWrap: 'break-word',
      lineHeight: `${theme.spacing(3)}px`
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
    color: theme.palette.secondary.main
  },
  seeDetails: {
    fontWeight: theme.fontWeights.bold,
    background: theme.palette.grey.light,
    borderRadius: '16px',
    color: theme.palette.grey.main,
    padding: `${theme.spacing(1.5)}px ${theme.spacing(2)}px`,
    textAlign: 'center',
    marginTop: theme.spacing(3),
    width: 'fit-content',
    border: 0,
    cursor: 'pointer'
  },
  icon: {
    paddingLeft: theme.spacing(0.5)
  }
}))

export default useBatchDetailsStyles
