import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WebMenu from './Pages/WebMenu'
import Login from './Pages/Login'

function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebMenu/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
