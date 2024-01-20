// components
import Home from './components/Home'

// imports 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
