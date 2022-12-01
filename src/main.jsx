import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global.js'

import theme from './styles/theme'

//import { Details } from './pages/Details'
//import { SignIn } from './pages/SignIn'
//import { SignUp } from './pages/SignUp'
//import { Product } from './pages/Product'
//import { New } from './pages/New'
import { Edit } from './pages/Edit'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Edit />
    </ThemeProvider>
  </React.StrictMode>
)
