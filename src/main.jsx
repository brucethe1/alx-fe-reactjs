import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'  // 👈 Import here (right under App import)
import reportWebVitals from './reportWebVitals' // (if exists)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
