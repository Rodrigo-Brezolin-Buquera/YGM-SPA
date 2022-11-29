import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  colors:{
    brand: {
        100: '#73C6CD',
        200: '#62D4CE',
        300: '#F3C046',
        400: '#f2f3f7',
        500: '#656273'
    }  
  }
})

export default theme

