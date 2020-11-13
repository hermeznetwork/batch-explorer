import { createUseStyles } from 'react-jss'

const useHomeStyles = createUseStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    height: '100vh'
  },
  wrapper: {
    width: '100%'
  }
}))

export default useHomeStyles
