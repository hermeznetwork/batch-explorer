import { createUseStyles } from 'react-jss'

const useAccountDetailsStyles = createUseStyles(theme => ({
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `${theme.spacing(3)}px 0`,
    borderBottom: `1px solid ${theme.palette.grey.veryLight}`,
    fontWeight: theme.fontWeights.bold,
    '&:first-child': {
      fontWeight: theme.fontWeights.medium
    }
  },
  col: {
    '&:first-child': {
      width: theme.spacing(10),
      paddingRight: theme.spacing(3),
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    },
    '&:last-child': {
      width: theme.spacing(20),
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      textAlign: 'right'
    }
  },
  link: {
    color: theme.palette.secondary.main
  }
}))

export default useAccountDetailsStyles
