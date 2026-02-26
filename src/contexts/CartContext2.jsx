import { CardsThreeIcon } from "@phosphor-icons/react";
import { createContext, useState, useContext, useEffect } from "react";
import { getMovieData, moviePrice } from "../services/api";


const CartContext= createContext()


export const useCartContext= ()=> useContext(CartContext)


export const CartProvider= ({children})=> {
    const [cartItems, setCartItems]= useState([])
    

    useEffect(()=> {
        const storedCart= localStorage.getItem('cartItems')

        if (storedCart) setCartItems(JSON.parse(storedCart))
    }, [])

    useEffect(()=> {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    const addToCart= (movie)=> {
        setCartItems((prev)=> [...prev, movie])
    }

    const removeFromCart= (movieId)=> {
        setCartItems((prev)=> prev.filter((movie)=> movie.id !== movieId))
    }

    const isCartMovie= (movieId)=> {
        return cartItems.some((movie)=> movie.id === movieId )
    }


    const getTotalCost= ()=> {
        let totalCost = 0;
        cartItems.map((cartItem) => {
            let eachMoviePrice= moviePrice(cartItem)
            totalCost += eachMoviePrice 
        });
        return parseFloat(totalCost.toFixed(2));  
    }

    const clearCart= ()=> {
        setCartItems([])
    }   

    const value= {
        cartItems,
        addToCart,
        removeFromCart,
        isCartMovie,
        getTotalCost,
        clearCart              
    }


    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}
