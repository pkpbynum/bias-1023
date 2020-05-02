import { createMuiTheme } from '@material-ui/core/styles'

export default {
  left: createMuiTheme({
    palette: {
      primary: {
        main: '#3062FF',
        secondary: '#2A2A2A',
        tertiary: '#ffffff',
      },
      secondary: {
        main: '#3062FF',
      },
    },
  }),
  unbiased: createMuiTheme({
    palette: {
      primary: {
        main: '#5E4C5A',
        secondary: '#6BAB90',
        tertiary: '#ffffff',
      },
      secondary: {
        main: '#6BAB90',
      },
    },
  }),
  right: createMuiTheme({
    palette: {
      primary: {
        main: '#0E3366',
        secondary: '#C20016',
        tertiary: '#ffffff',
      },
      secondary: {
        main: '#C20016',
      },
    },
  }),
}
