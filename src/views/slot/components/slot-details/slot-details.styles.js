import { createUseStyles } from 'react-jss'

const useSlotDetailsStyles = createUseStyles(theme => ({
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
      maxWidth: theme.spacing(52),
      overflowWrap: 'break-word',
      lineHeight: `${theme.spacing(3)}px`,
      textAlign: 'right'
    }
  },
  link: {
    color: theme.palette.secondary.main,
    '&:hover': {
      color: theme.palette.orange.dark,
      textDecoration: 'underline'
    }
  }
}))

export default useSlotDetailsStyles
