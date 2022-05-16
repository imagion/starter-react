import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className='page-wrapper'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}
