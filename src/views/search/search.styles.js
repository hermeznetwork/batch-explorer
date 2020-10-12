import { createUseStyles } from 'react-jss'

const useSearchStyles = createUseStyles(theme => ({
  root: {
    width: '100%',
    margin: `0 ${theme.spacing(2)}`,
    position: 'relative'
  },
  input: {
    border: 0,
    outline: 'none',
    caretColor: theme.palette.orange,
    height: theme.spacing(6.5),
    padding: theme.spacing(2),
    color: theme.palette.grey.main,
    borderRadius: theme.spacing(2),
    width: '100%',
    '&::-webkit-outer-spin-button,&::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    '&[type=number]': {
      '-moz-appearance': 'textfield'
    }
  },
  button: {
    width: '52px',
    height: '52px',
    position: 'absolute',
    right: 0,
    borderRadius: theme.spacing(2),
    border: 0,
    cursor: 'pointer',
    backgroundColor: theme.palette.secondary.main
  }
}))

export default useSearchStyles
