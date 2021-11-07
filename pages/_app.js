import '../styles/globals.css'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  textStyles: {
    body: {
      fontFamily: 'Poppins, sans-serif',
    },
    mono: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 400,
    },
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
