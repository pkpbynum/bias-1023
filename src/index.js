import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { SurveyProvider } from './SurveyContext'

ReactDOM.render(
  <React.StrictMode>
    <SurveyProvider>
      <App />
    </SurveyProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
