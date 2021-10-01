const theme = {
  breakpoints: {
    sm: '@media (min-width: 576px)',
    md: '@media (min-width: 768px)',
    lg: '@media (min-width: 992px) ',
    xl: '@media (min-width: 1200px)'
  },
  palette: {
    primary: {
      main: '#f6f7fa',
      dark: '#f6e9d3'
    },
    secondary: {
      veryLight: 'rgba(216,133,59,0.1)',
      light: '#fef5ed',
      main: '#8248e5',
      dark: '#d8853b'
    },
    white: '#ffffff',
    black: '#2b2b2b',
    grey: {
      ultraLight: '#e1e1f1',
      veryLight: '#f3f3f8',
      light: '#e9e9f1',
      main: '#888baa',
      dark: '#7a7c89'
    },
    red: {
      veryLight: 'rgba(255,75,64,0.1)',
      main: '#ff4b40'
    },
    orange: {
      main: '#ffa600',
      dark: '#d44d20'
    },
    purple: {
      main: '#8248e5',
      dark: '#6d00f1'
    },
    green: {
      light: 'rgba(33,150,83,0.1)',
      main: '#219653'
    }
  },
  fontWeights: {
    normal: '400',
    medium: '500',
    bold: '700',
    extraBold: '800'
  },
  spacing: (value) => value * 8
}

export default theme
