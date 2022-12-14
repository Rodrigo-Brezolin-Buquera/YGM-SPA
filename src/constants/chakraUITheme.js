import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `"Baloo 2", cursive;`,
    body: `'Raleway', sans-serif`,
  },
  colors:{
    brand: {
        100: '#62B6B7',
        200: '#73C6CD',
        300: '#F3C046',
        400: '#f2f3f7',
        500: '#656273'
    }  
  }
})

export default theme

