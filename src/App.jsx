import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NavBar from './components/Navbar'
import {MovieProvider} from './contexts/MovieContext'
import CartPage2 from './pages/CartPage2'
import {CartProvider} from './contexts/CartContext2'
import Checkout from './pages/Checkout'
import Success from './pages/Success'



function App() {
  console.log(import.meta.env.VITE_API_KEY);
  
  return (
    <>
    
      <CartProvider>
      <MovieProvider>
      <NavBar/>
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/cart' element={<CartPage2/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/success' element={<Success/>}/>
      </Routes>
    </main>
     </MovieProvider>
     </CartProvider> 

    </>
  )
}

export default App
