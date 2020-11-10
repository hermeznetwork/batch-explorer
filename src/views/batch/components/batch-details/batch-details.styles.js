import { createUseStyles } from 'react-jss'

const useBatchDetailsStyles = createUseStyles(theme => ({
  rowWrapped: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: theme.spacing(50)
  },
  colWrapped: {
    maxWidth: theme.spacing(45)
  },
  icon: {
    marginLeft: theme.spacing(1)
  },
  detailButton: {
    fontWeight: theme.fontWeights.bold,
    background: theme.palette.grey.veryLight,
    borderRadius: 16,
    color: theme.palette.black,
    padding: `${theme.spacing(1.5)}px ${theme.spacing(2)}px`,
    textAlign: 'center',
    marginTop: theme.spacing(3),
    width: 'fit-content',
    border: 0,
    cursor: 'pointer',
    '&:hover': {
      background: theme.palette.grey.light
    },
    '&:focus': {
      outline: 'none'
    }
  },
  detailHidden: {
    display: 'none'
  },
  detailVisible: {
    display: 'block'
  },
  detailButtonHidden: {
    display: 'none'
  }
}))

export default useBatchDetailsStyles
