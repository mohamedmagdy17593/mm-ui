import './reset.css'

import React from 'react'
import ReactDOM from 'react-dom'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import App from './App'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <RadixTooltip.Provider>
      <App />
    </RadixTooltip.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
