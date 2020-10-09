import { createUseStyles } from 'react-jss'

const useMainHeaderStyles = createUseStyles(theme => ({
  root: {
    width: '100%',
    // position: 'fixed',
    height: theme.headerHeight,
    display: 'flex',
    // alignItems: 'center',
    background: theme.palette.primary.main
  },
  row: {
    display: 'flex',
    flexDirection: 'column'
    // justifyContent: 'space-between'
  },
  headline: {
    fontFamily: 'Modern Era Extra Bold',
    fontSize: theme.spacing(1.5)
  },
  logo: {
    // textDecoration: 'none',
    // color: 'currentColor',
    // display: 'flex'
  },
  logoHeadline: {
    fontFamily: 'Modern Era Extra Bold',
    fontSize: theme.spacing(2.25)
  },
  link: {
    fontFamily: 'Modern Era Bold'
    // display: 'flex',
    // alignItems: 'center',
    // padding: theme.spacing(1),
    // position: 'absolute',
    // top: '50%',
    // transform: 'translateY(-50%)'
  },
  linkText: {
    // fontWeight: theme.fontWeights.bold,
    // whiteSpace: 'nowrap'
  }
}))

export default useMainHeaderStyles
