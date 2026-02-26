import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Checkout.css';
import {useCartContext} from '../contexts/CartContext2'



const Checkout = () => {

// 1. Hook must be called at the top level
    const { getTotalCost, discountApplied, discountAmount, clearCart } = useCartContext();
    const navigate = useNavigate();
    
    // 2. Call the function inside the component body, but after hooks
    const totalCost = getTotalCost();
    const finalPrice = discountApplied ? Math.max(0, totalCost - discountAmount) : totalCost;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Navigate to success page
        navigate('/success');
        clearCart(); // Clear cart after successful checkout
    };

    return (
        <div className="checkout-container">
            <form className="checkout-form" onSubmit={handleSubmit}>
                <h1 className='checkout-title'>Your Checkout</h1> <br />   
                
                <div className="shipping-info">
                    <h2 className='underline'>Shipping Information</h2> <br />
                    <label htmlFor="name">Name:</label> <br />  
                    <input type="text" id="name" name="name" required />
                    <br />  
                    <label htmlFor="email">Email:</label> <br />    
                    <input type="email" id="email" name="email" required />
                    <br />
                    <label htmlFor="address">Address:</label> <br />
                    <input type="text" id="address" name="address" required />
                </div>
                <br />

                <div className="payment-info">
                    <h2 className='underline'>Payment</h2> <br />
                    <label htmlFor="cardname">Cardholder Name:</label>
                    <input type="text" id="cardname" name="cardname" required />
                    <br />
                    <label htmlFor="card">Card Number:</label>
                    <input type="text" id="card" name="card" required />
                    <br /> 
                    <label htmlFor="expiry">Expiry Date:</label>
                    <input type="text" id="expiry" name="expiry" required />
                    <br />
                    <label htmlFor="cvv">CVV:</label> <br />    
                    <input type="text" id="cvv" name="cvv" required />
                </div>
                <br /> 

                <button type="submit">Place Order</button>
            </form>
        </div>
    );
};



export default Checkout