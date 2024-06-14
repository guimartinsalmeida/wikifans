import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainRoutes from './routes.tsx'
import { CharactersProvider } from './context/CharactersContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CharactersProvider>
    <MainRoutes />
    </CharactersProvider>
  </React.StrictMode>,
)
