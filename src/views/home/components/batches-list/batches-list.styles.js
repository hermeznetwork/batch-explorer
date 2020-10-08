import { createUseStyles } from 'react-jss'

const useBatchStyles = createUseStyles(theme => ({
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  }
}))

export default useBatchStyles
