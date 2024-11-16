import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global'
import theme from './styles/theme'

import { Routes } from './routes'

/* 

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Details />
    </ThemeProvider>
  </StrictMode>,
)

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </StrictMode>,
)

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SignIn />
    </ThemeProvider>
  </StrictMode>

  createRoot(document.getElementById('root')).render(
  <StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SignUp />
    </ThemeProvider>
  </StrictMode>

)

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Profile />
    </ThemeProvider>
  </StrictMode>

)
*/


createRoot(document.getElementById('root')).render(
  <StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </StrictMode>

)