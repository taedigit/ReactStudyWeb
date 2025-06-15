import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RecoilRoot } from 'recoil'

const theme = extendTheme({
  colors: {
    brand: {
      50: '#f0e7ff',
      100: '#c8b3ff',
      200: '#a180ff',
      300: '#794dff',
      400: '#521aff',
      500: '#3900e6',
      600: '#2d00b4',
      700: '#210082',
      800: '#150050',
      900: '#08001f',
    },
  },
  fonts: {
    heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  },
})

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
)
