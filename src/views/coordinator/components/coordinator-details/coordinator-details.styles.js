import { createUseStyles } from 'react-jss'

const useCoordinatorDetailsStyles = createUseStyles(theme => ({
  rowWrapped: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: theme.spacing(50)
  },
  colWrapped: {
    maxWidth: theme.spacing(45)
  }
}))

export default useCoordinatorDetailsStyles
