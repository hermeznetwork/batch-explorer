import { createUseStyles } from 'react-jss'

const useUserAccountStyles = createUseStyles(theme => ({
  wrapper: {
    width: '100%'
  },
  title: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(5),
    fontWeight: theme.fontWeights.extraBold,
    fontSize: theme.spacing(3)
  },
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
      maxWidth: theme.spacing(52),
      overflowWrap: 'break-word',
      lineHeight: `${theme.spacing(3)}px`,
      marginTop: theme.spacing(1.5),
      [theme.breakpoints.sm]: {
        textAlign: 'right',
        marginTop: 0
      }
    }
  },
  toggleWrapper: {
    background: theme.palette.grey.veryLight,
    width: 'fit-content',
    marginTop: theme.spacing(3),
    borderRadius: '16px'
  },
  toggle: {
    fontWeight: theme.fontWeights.bold,
    background: theme.palette.grey.veryLight,
    color: theme.palette.black,
    padding: `${theme.spacing(1.5)}px ${theme.spacing(2)}px`,
    textAlign: 'center',
    width: 'fit-content',
    border: 0,
    borderRadius: '16px',
    cursor: 'pointer',
    minWidth: theme.spacing(17),
    '&:hover': {
      background: theme.palette.grey.light,
      '&:first-child': {
        borderRadius: '16px'
      },
      '&:last-child': {
        borderRadius: '16px'
      }
    },
    '&:focus': {
      outline: 'none'
    },
    '&:first-child': {
      borderRadius: '16px 0 0 16px'
    },
    '&:last-child': {
      borderRadius: '0 16px 16px 0'
    }
  },
  active: {
    background: theme.palette.white,
    border: `1px solid ${theme.palette.grey.ultraLight}`,
    padding: `${theme.spacing(1.5) - 1}px ${theme.spacing(2) - 1}px`,
    '&:first-child': {
      borderRadius: '16px'
    },
    '&:last-child': {
      borderRadius: '16px'
    }
  },
  notActive: {
    background: 'inherit',
    border: '0 none',
    padding: `${theme.spacing(1.5)}px ${theme.spacing(2)}px`
  },
  hidden: {
    display: 'none'
  },
  firstTabVisible: {
    display: 'block'
  },
  secondTabVisible: {
    display: 'block'
  }
}))

export default useUserAccountStyles
