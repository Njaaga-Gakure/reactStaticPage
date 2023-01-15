import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'

/**
 * the old React way
 * ReactDOM.render(< MainContent />, document.getElementById("root"))
 **/
ReactDOM.createRoot(document.getElementById("root")).render(<App />)
