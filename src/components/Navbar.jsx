import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { ShoppingCart, FilmSlate } from "@phosphor-icons/react";
import { useCartContext } from '../contexts/CartContext2';
import { useMovieContext } from '../contexts/MovieContext';


const NavBar = () => {

const { cartItems } = useCartContext();
const { favorites } = useMovieContext();
const itemCount = cartItems.length
const favoriteCount = favorites.length; 


  return (
    <nav className='navbar'>
        <div className='navbar-brand'>
            <Link to='/' className='title'><FilmSlate size={32} color='whitesmoke'/><b className='title'>Movie App</b></Link>
        </div>

        <div className='navbar-links'>
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/favorites' className='nav-link'>
            Favorites
             {favoriteCount > 0 && <span className="favorite-count">({favoriteCount})</span>}
            </Link>
            <Link to='/cart' className='cart'><ShoppingCart size={24} color='whitesmoke'/>
            Cart
            {itemCount > 0 && <span className="cart-count">({itemCount})</span>}
            </Link>
            
        </div>
    </nav>
  )
}

export default NavBar 