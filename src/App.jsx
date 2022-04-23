import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

// pages and components
import Home from './pages/Home'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
