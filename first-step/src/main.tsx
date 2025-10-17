import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FirstStepsApp from './FirstStepsApp'
import MyAwesomeApp from './MyAwesomeApp'
import './App.scss'
import { MyCounterApp } from './conter/MyCounterApp'
createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <FirstStepsApp />
    <MyAwesomeApp />
    <hr />
    <MyCounterApp />
  </StrictMode>,
)
