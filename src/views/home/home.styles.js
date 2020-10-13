import { createUseStyles } from 'react-jss'

const useHomeStyles = createUseStyles(theme => ({
  root: {
    width: '100%'
  },
  wrapper: {
    width: '100%'
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: 800,
    fontSize: theme.spacing(3)
  }
}))

export default useHomeStyles
