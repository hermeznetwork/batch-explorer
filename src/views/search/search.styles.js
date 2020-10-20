import { createUseStyles } from 'react-jss'

const useSearchStyles = createUseStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex'
  },
  input: {
    border: 0,
    outline: 'none',
    caretColor: theme.palette.orange.main,
    height: theme.spacing(6.5),
    padding: theme.spacing(2),
    color: theme.palette.grey.main,
    borderRadius: '16px',
    width: '100%',
    marginRight: `-${theme.spacing(6.5)}px`,
    '&::-webkit-outer-spin-button,&::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    '&[type=number]': {
      '-moz-appearance': 'textfield'
    }
  },
  button: {
    width: theme.spacing(6.5),
    height: theme.spacing(6.5),
    right: 0,
    borderRadius: '16px',
    border: 0,
    cursor: 'pointer',
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.orange.dark
    }
  }
}))

export default useSearchStyles
