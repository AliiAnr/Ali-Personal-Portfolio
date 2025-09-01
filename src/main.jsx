import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './ShinnyText.css'
import './GlassSurface.css'
import './GradientBlinds.css'
import App from './App.jsx'
import { AppleModeProvider } from './contexts/AppleModeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppleModeProvider>
      <App />
    </AppleModeProvider>
  </StrictMode>,
)