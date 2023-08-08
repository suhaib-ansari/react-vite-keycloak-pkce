import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider } from 'react-oauth2-code-pkce'
import auth from './utils/helper.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider authConfig={auth}>
    <App />
  </AuthProvider>
)
