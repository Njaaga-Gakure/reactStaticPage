import React from 'react'
import ReactDOM from 'react-dom/client'
import {Page} from './App'

/**
 * the old React way
 * ReactDOM.render(< MainContent />, document.getElementById("root"))
 **/
ReactDOM.createRoot(document.getElementById("root")).render(<Page />)
