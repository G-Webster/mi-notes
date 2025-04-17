import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import RefreshNotesProvider from './contexts/NotesRefreshProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <RefreshNotesProvider>
    <App />
  </RefreshNotesProvider>
  </StrictMode>,
)
