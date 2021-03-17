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
    paddingLeft: theme.spacing(0.75),
    position: 'relative',
    '&::before': {
      content: '""',
      background: theme.palette.orange.main,
      borderRadius: theme.spacing(1),
      width: '3px',
      height: theme.spacing(2),
      position: 'absolute',
      left: 0
    }
  },
  secondRow: {
    fontSize: theme.spacing(5),
    fontWeight: theme.fontWeights.bold,
    display: 'inline'
  },
  batchFrequencyDecimalsOnly: {
    display: 'none',
    [theme.breakpoints.sm]: {
      display: 'inline'
    }
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
