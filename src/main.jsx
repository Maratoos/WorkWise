import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "@/assets/styles/index.css"
import { BrowserRouter } from 'react-router-dom'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system'
import { store } from './store/store'
import { Provider } from 'react-redux'

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#e75348',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
