import { createUseStyles } from 'react-jss'

const useHomeStyles = createUseStyles(theme => ({
  root: {
    width: '100%'
  },
  wrapper: {
    width: '100%'
  },
  title: {
    marginBottom: 16,
    fontFamily: 'Modern Era Extra Bold',
    fontSize: theme.spacing(3)
  }
}))

export default useHomeStyles
