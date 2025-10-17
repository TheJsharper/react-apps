import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GifsApp from './GifsApp'
import './index.scss'
export const root = createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GifsApp/>
  </StrictMode>,
)
