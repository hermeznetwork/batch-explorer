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
    display: 'flex',
    justifyContent: 'space-between',
    padding: `${theme.spacing(2.5)}px 0`,
    borderBottom: `1px solid ${theme.palette.grey.ultraLight}`,
    '&:first-child': {
      borderTop: `1px solid ${theme.palette.grey.ultraLight}`
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
  }
}))

export default useUserAccountStyles
