import { createUseStyles } from 'react-jss'

const useOverviewStyles = createUseStyles(theme => ({
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
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
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2.5),
    width: `calc(50% - ${theme.spacing(1.25)}px)`,
    [theme.breakpoints.sm]: {
      width: theme.spacing(33.5)
    }
  }
}))

export default useOverviewStyles
