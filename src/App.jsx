/* eslint-disable no-unused-vars */
import './App.css'
import Header from './components/Header/Header'
import IndexPage from './components/IndexPage/IndexPage'
import ProductsPage from './components/ProductsPage/ProductsPage.jsx'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<IndexPage/>}/>
      <Route path='/products' element={<ProductsPage/>}/>
      <Route path='/products/:categoryId' element={<ProductsPage/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
  
}

export default App
