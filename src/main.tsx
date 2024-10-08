import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage.tsx'
import ProductDetailPage from './pages/productDetailPage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/:categoryId/:productId' element={<ProductDetailPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
