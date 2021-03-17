import { createUseStyles } from 'react-jss'

const useHomeStyles = createUseStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    height: '100vh'
  },
  wrapper: {
    width: '100%'
  },
  networkStatusTitle: {
    display: 'inline-block',
    marginRight: theme.spacing(2)
  }
}))

export default useHomeStyles
