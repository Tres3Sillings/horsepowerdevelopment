import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// This line loads all your Tailwind styles and custom variables
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)