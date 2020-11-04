import { createUseStyles } from 'react-jss'

const useSearchStyles = createUseStyles(theme => ({
  root: {
    width: '100%'
  },
  wrapper: {
    width: '100%'
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: theme.fontWeights.extraBold,
    fontSize: theme.spacing(3)
  },
  backButton: {
    fontWeight: theme.fontWeights.bold,
    background: theme.palette.grey.veryLight,
    borderRadius: '16px',
    color: theme.palette.secondary.main,
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
  }
}))

export default useSearchStyles
