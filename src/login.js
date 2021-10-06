import { useState } from 'react'
import axios from 'axios'

import './login.css'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const objAuth = { 'Project-ID': '181f8f81-7c91-4c2a-924f-3d60a2afe10e', 'User-Name': username, 'User-Secret': password }
    try {
      setLoading(true)
      await axios.get('https://api.chatengine.io/chats', { headers: objAuth })
      localStorage.setItem('username', username)
      localStorage.setItem('password', password)

      setLoading(false)
      window.location.reload()
    } catch (error) {
      setError('Oops, incorrect credentials...')
      setLoading(false)
    }

  }

  return (
    <div className="login-continer">
      <div class="login-page">
        <div class="form">
          <form class="register-form">
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="email address" />
            <button>Login</button>
          </form>
          <form class="login-form" onSubmit={handleSubmit}>
            <h2>LOGIN</h2>
            <input type="text" placeholder="username" onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
            <button type="submit">{loading ? "loading..." : "login"}</button>
            <p className="messagess">{error}</p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login