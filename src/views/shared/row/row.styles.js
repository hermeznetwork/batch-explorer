import { createUseStyles } from 'react-jss'

const useRowStyles = createUseStyles(theme => ({
  row: {
    padding: `${theme.spacing(2.5)}px 0`,
    borderBottom: `1px solid ${theme.palette.grey.ultraLight}`,
    '&:first-child': {
      borderTop: `1px solid ${theme.palette.grey.ultraLight}`
    },
    [theme.breakpoints.sm]: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }
}))

export default useRowStyles
