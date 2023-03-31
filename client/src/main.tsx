import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import DashboardProvider from '@/context/DashboardContext/DashboardProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DashboardProvider>
      <App />
    </DashboardProvider>
  </React.StrictMode>,
)
