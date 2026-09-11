import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { PrimeReactProvider } from '@primereact/core'
import Aura from '@primeuix/themes/aura'

const primereact = {
  theme: {
    preset: Aura
  },
  license: ''
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider {...primereact}>
      <App />
    </PrimeReactProvider>
  </StrictMode>
)
