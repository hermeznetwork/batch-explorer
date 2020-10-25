import { createUseStyles } from 'react-jss'

const useBidStyles = createUseStyles(theme => ({
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `${theme.spacing(3)}px 0`,
    borderBottom: `1px solid ${theme.palette.grey.ultraLight}`,
    fontWeight: theme.fontWeights.bold,
    '&:first-child': {
      fontWeight: theme.fontWeights.medium
    }
  },
  col: {
    fontWeight: theme.fontWeights.bold,
    '&:first-child': {
      paddingRight: theme.spacing(3),
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    },
    '&:last-child': {
      maxWidth: theme.spacing(11),
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      [`${theme.breakpoints.sm}`]: {
        maxWidth: theme.spacing(20),
        textAlign: 'right'
      }
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

export default useBidStyles
