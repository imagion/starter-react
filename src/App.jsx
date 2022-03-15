import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

// pages and components
import Header from './components/Header'
import Home from './pages/Home'

export default function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
