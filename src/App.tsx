import './App.css'
import LoginForm from './components/login'
import Register from './components/register'
import Home from './components/home'
import Job from './components/job'
import FileNotFound from './components/fileNotFound'
import './styles/global.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './components/landing'

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="login" element={<LoginForm />} />
      <Route path="register" element={<Register />} />
      <Route path="home" element={<Home />} />
      <Route path="job" element={<Job />} />

      {/* Catch-all route for unknown URLs */}
      <Route path="*" element={<FileNotFound />} />
    </Routes>
  )
}

export default App
