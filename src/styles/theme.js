const theme = {
  // breakpoints: {
  //   sm: '@media (min-width: 576px)',
  //   md: '@media (min-width: 768px)',
  //   lg: '@media (min-width: 992px) ',
  //   xl: '@media (min-width: 1200px)'
  // },
  palette: {
    primary: {
      main: '#faf4ea',
      dark: '#f6e9d3'
    },
    secondary: {
      light: '#fef5ed',
      main: '#e75a2b',
      dark: '#d8853b'
    },
    white: '#ffffff',
    black: '#2b2b2b',
    grey: {
      veryLight: '#e1e1f1',
      light: '#f3f3f8',
      main: '#888baa',
      dark: '#7a7c89'
    },
    red: '#ff4b40',
    orange: '#ffa600',
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
