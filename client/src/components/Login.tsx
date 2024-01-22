import Header from './Header'
import '../styles/login.css'
import { useState } from 'react'
import { IconEye, IconEyeOff } from '@tabler/icons-react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [seePwd, setSeePwd] = useState<boolean>(false)

  return (
    <>
      <Header></Header>
      <div className='main-login'>
        <form>
          <h1>Login</h1>
          <div className='email-container'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='example@email.com'
              autoComplete='username'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='password-container'>
            <label htmlFor='password'>Password</label>
            <div className='input-pwd-container'>
              <input
                type={seePwd ? 'text' : 'password'}
                name='password'
                id='password'
                autoComplete='current-password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {seePwd ? (
                <IconEyeOff onClick={() => setSeePwd(!seePwd)} />
              ) : (
                <IconEye onClick={() => setSeePwd(!seePwd)} />
              )}
            </div>
          </div>

          <input type='submit' value='Send' className='login-submit' />
          <p>
            If you don't have an account: <Link to='/register'>Register</Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Login
