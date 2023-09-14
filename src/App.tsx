import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Login } from './Pages/Login'
import { Register } from './Pages/Register'

function App() {

  return (
      <div className='text-white h-[100vh] w-[100vw] flex justify-center items-center bg-cover' style={{"backgroundImage": "url('../src/assets/homebg.jpg')"}}>
        <Routes>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Routes>
      </div>
  )
}

export default App
