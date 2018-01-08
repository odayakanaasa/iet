import Typography from 'typography'
import bootstrapTheme from 'typography-theme-bootstrap'

// Override defaults
bootstrapTheme.overrideThemeStyles = (options) => ({
  'a': {
    textDecoration: 'none',
    color: 'black',
  },
  'a:hover': {
    textDecoration: 'underline',
    textDecorationColor: 'magenta',
  },
})

const typography = new Typography(bootstrapTheme)

export default typography
