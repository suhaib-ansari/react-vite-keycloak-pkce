import { useContext } from 'react'

import './App.css'
import { AuthContext, IAuthContext } from 'react-oauth2-code-pkce'

function App() {
  const UserInfo = (): JSX.Element => {
    const {token, tokenData} = useContext<IAuthContext>(AuthContext)

    return <>
        <h4>Access Token</h4>
        <pre>{token}</pre>
        <h4>User Information from JWT</h4>
        <pre>{JSON.stringify(tokenData, null, 2)}</pre>
    </>
}
 

  return (
    <>
    <UserInfo/>
    </>
  )
}

export default App
