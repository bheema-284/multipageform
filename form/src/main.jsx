import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from "react-router-dom"
import {LoginContextProvider} from "./context/LoginContext"
ReactDOM.render(
  <React.StrictMode>
   <LoginContextProvider>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </LoginContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
