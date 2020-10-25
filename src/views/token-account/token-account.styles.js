import { createUseStyles } from 'react-jss'

const useTokenAccountsStyles = createUseStyles(theme => ({
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
    padding: `${theme.spacing(3)}px 0`,
    borderBottom: `1px solid ${theme.palette.grey.ultraLight}`,
    [`${theme.breakpoints.sm}`]: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  },
  col: {
    '&:last-child': {
      fontWeight: theme.fontWeights.bold,
      width: theme.spacing(20),
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      marginTop: theme.spacing(1.5),
      [`${theme.breakpoints.sm}`]: {
        textAlign: 'right',
        marginTop: 0
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

export default useTokenAccountsStyles
