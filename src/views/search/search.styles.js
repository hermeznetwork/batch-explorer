import { createUseStyles } from 'react-jss'

const useSearchStyles = createUseStyles(theme => ({
  root: {
    width: '100%',
    margin: `0 ${theme.spacing(2)}`
  }
}))

export default useSearchStyles
