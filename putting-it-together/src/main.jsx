import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PuttingIt from './components/PuttingIt.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PuttingIt fname="Doe" lname="Jane" age="45" color="Black" initialState="45"></PuttingIt>
    <PuttingIt fname="Smith" lname="John" age="88" color="Brown" initialState="88"></PuttingIt>
  </React.StrictMode>,
)
