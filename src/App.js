import { ChakraProvider } from '@chakra-ui/react'
import MainPage from './pages/mainPage/MainPage';
import theme from './constants/chakraUITheme';
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'

function App() {
  return (
    <ChakraProvider theme={theme} >
      <MainPage/>
    
    </ChakraProvider>
  );
}

export default App;
