import React, {useContext} from 'react'
import './MovieCard.css'
import { Heart } from "@phosphor-icons/react";
import { searchMovies, getPopularMovies, moviePrice } from '../services/api'
import { useMovieContext } from '../contexts/MovieContext'
import {useCartContext} from '../contexts/CartContext2'


const MovieCard = ({movie}) => {
    // 1. Context Usage
    const {isFavorite, addToFavorites, removeFromFavorites}= useMovieContext()
    const favorite = isFavorite(movie.id)

    const {isCartMovie, addToCart, removeFromCart}= useCartContext()
    const isInCart = isCartMovie(movie.id)
    // 2. State Check: Renamed to clearly reflect it is a boolean
    
    
    // 3. Handlers
    function onAddToCart(e) {
        e.preventDefault()
        // Use the boolean result from the context function
        if (isInCart) {
            removeFromCart(movie.id)
        } else {
            addToCart(movie)
        }
    }
    

    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) {
            removeFromFavorites(movie.id)
        } else {
            addToFavorites(movie)
        }
    }  

  return (
    <div className='movie-card'>
        <div className='movie-poster'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className='movie-overlay'>
                <button className={`favorite-btn ${favorite ? 'active' : ''}`} onClick={onFavoriteClick}>
                    <Heart size={32} weight={favorite ? "fill" : "regular"} />
                </button>
            </div>
        </div>

        <div className='movie-info'>
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split('-')[0]}</p>
            <p className='price'>${moviePrice(movie)}</p>
            <button className='buyBtn' onClick={onAddToCart}>
              {/* Corrected: Uses the boolean check */}
              {isInCart ? "Remove from Cart" : "Buy Now"}
             </button> 
        </div>
    </div>
  )
}


export default MovieCard;


























