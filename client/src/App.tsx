// components
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Search from './components/Search'

// imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/dashboard' element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
