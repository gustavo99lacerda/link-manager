import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CircularProgress } from '@material-ui/core'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <Suspense fallback={(
    <div className="Index-Suspense" >
      <CircularProgress
        size={50}
        variant="indeterminate"
        className="Progresso-Circular" />
    </div>
  )}>
    <App />
  </Suspense>
)
