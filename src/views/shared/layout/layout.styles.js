import { createUseStyles } from 'react-jss'

const useLayoutStyles = createUseStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}))

export default useLayoutStyles
