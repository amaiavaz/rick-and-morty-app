import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContextProviderApp } from './contexts/ContextProviderApp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProviderApp>
      <App />
    </ContextProviderApp>
  </StrictMode>,
)
