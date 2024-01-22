// components
import Home from './components/Home'
import Login from './components/Login'

// imports 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
