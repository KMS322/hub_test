import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Hardware from './pages/Hardware'
import Patients from './pages/Patients'
import Records from './pages/Records'
import Profile from './pages/Profile'
import Monitoring from './pages/Monitoring'
import './App.css'

function App() {
  // 더미: 로그인 상태 확인
  const isLoggedIn = true

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/dashboard" 
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/hardware" 
            element={isLoggedIn ? <Hardware /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/patients" 
            element={isLoggedIn ? <Patients /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/records" 
            element={isLoggedIn ? <Records /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/profile" 
            element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/monitoring/:patientId" 
            element={isLoggedIn ? <Monitoring /> : <Navigate to="/login" />} 
          />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
