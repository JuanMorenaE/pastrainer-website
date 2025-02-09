import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'

import Home from './pages/home/Home'
import Calculator from './pages/calculator/Calculator'
import Header from './shared/layout/Header'
import Footer from './shared/layout/Footer'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='plans/:id' element={<Home />} />
      <Route path='calculator' element={<Calculator />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
)
