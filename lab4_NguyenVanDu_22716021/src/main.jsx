import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routers, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routers>
        <Router></Router>
        <Router></Router>
        <Router></Router>
        <Router></Router>
        <Router></Router>
      </Routers>
      <App />

    </BrowserRouter>
  </StrictMode>,
)
