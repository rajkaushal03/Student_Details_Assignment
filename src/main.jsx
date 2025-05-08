import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StudentContextProvider } from './Context/StudentContext.jsx'
import { AuthContextProvider } from './Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <StudentContextProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </StudentContextProvider>
  </AuthContextProvider>

)
