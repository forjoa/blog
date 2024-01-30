import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import { IconEye, IconEyeOff } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import { registerUser } from '../utils/insertUser'

const Register = () => {
  const [name, setName] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [seePwd, setSeePwd] = useState<boolean>(false)

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    const resultMessage = await registerUser(name, username, email, password)
    alert(resultMessage)
  }

  return (
    <>
      <Header />
      <div className='main-login'>
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className='name-container'>
            <label htmlFor='name'>Full name</label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Name Lastname'
              autoComplete='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='username-container'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='Username'
              autoComplete='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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

          <input type='submit' value='Register' className='login-submit' />
          <p>
            If you already have an account: <Link to='/login'>Login</Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Register
