import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { Login } from './Pages/Login'
import { Register } from './Pages/Register'
import { Profile } from './Pages/Profile'
import Dashboard from './Pages/Dashboard'

function App() {

  return (
    <AuthProvider>
      <div
        className='text-white h-[100vh] w-[100vw] flex justify-center items-center bg-cover'
        style={{"backgroundImage": "url('../src/assets/homebg.jpg')"}}
      >
        <Routes>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App
