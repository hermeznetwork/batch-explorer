import { createUseStyles } from 'react-jss'

const useOverviewStyles = createUseStyles(theme => ({
  row: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  firstRow: {
    fontSize: theme.spacing(1.75),
    color: theme.palette.grey.main,
    marginBottom: theme.spacing(3),
    '&::before': {
      content: '""',
      background: theme.palette.orange.main,
      marginRight: theme.spacing(0.75),
      borderRadius: theme.spacing(1),
      width: '3px',
      height: theme.spacing(2)
    }
  },
  secondRow: {
    fontSize: theme.spacing(5),
    fontWeight: theme.fontWeights.bold
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'space-between',
    background: theme.palette.white,
    borderRadius: '24px',
    minHeight: theme.spacing(19.5),
    flexBasis: 0,
    flexGrow: 1,
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2.5),
    '&:last-child': {
      marginRight: theme.spacing(0)
    }
  },
  [theme.breakpoints.sm]: {
    col: {
      marginRight: theme.spacing(2.5)
    }
  }
}))

export default useOverviewStyles
