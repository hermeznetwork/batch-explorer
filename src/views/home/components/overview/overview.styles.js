import { createUseStyles } from 'react-jss'

const useOverviewStyles = createUseStyles(theme => ({
  row: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  firstRow: {
    fontSize: theme.spacing(1.75),
    color: theme.palette.grey.main,
    borderLeft: '3px solid' + theme.palette.secondary.main,
    paddingLeft: theme.spacing(0.5),
    marginBottom: theme.spacing(3)
  },
  secondRow: {
    fontSize: theme.spacing(5),
    fontFamily: 'Modern Era Bold'
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'space-between',
    background: theme.palette.white,
    borderRadius: theme.spacing(3),
    minHeight: '156px',
    width: '310px',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2.5)
  }
}))

export default useOverviewStyles
