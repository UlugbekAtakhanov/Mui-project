import { StyledEngineProvider } from '@mui/material'
import { CssBaseline } from '@mui/material';
import '../styles/globals.css'


// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "",
//       light: ""
//     },
//     secondary: {
//       main: "",
//       light:""
//     },
//     otherColor: {
//       main: ""
//     }
//   }
// })

function MyApp({ Component, pageProps }) {
  return (
        <Component {...pageProps} />
  )
}

export default MyApp
