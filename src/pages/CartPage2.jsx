import React, {useState} from 'react'
import './CartPage2.css'
import {useCartContext} from '../contexts/CartContext2'
import MovieCard from '../components/MovieCard'
import {useNavigate} from 'react-router-dom'


const CartPage2 = () => {

  const navigate = useNavigate();
  // Ensure useCartContext is imported properly
  const { cartItems, getTotalCost } = useCartContext();
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  // Derive the current total to avoid issues with asynchronous state updates
  const totalCost = getTotalCost();
  const discountAmount = 10;
  const finalPrice = discountApplied ? Math.max(0, totalCost - discountAmount) : totalCost;

  function handleApply() {
    const validPromoCode = '1off0';
    if (promoCode === validPromoCode) {
      // alert('Promo code applied! You get $10 off your total.');
      setDiscountApplied(true);
    } else {
      alert('Invalid promo code. Please try again.');
      setDiscountApplied(false);
    }
  }

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className='cart-empty'>
        <h2>No movies in cart yet</h2>
        <p>Start adding movies to your cart and they will appear here!</p>
      </div>
    );
  }

  return (
    
    <div className='parentContainer'>
    <div className='cart'>
      <h2 className='your-cart'>Your Cart</h2>

      <div className='cart-movies'>
      <div className='movies-grid-cart'>
        {cartItems.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
      </div>

      <div className='priceContainer'>
        <h1 className='order-summary'>Your Order Summary</h1>
        <h1 className='totalAmount'>
          Subtotal: ${totalCost.toFixed(2)}
        </h1>

        <div className='promoCodeSection'>
          <input
            className='promoCodeInput'
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter promo code"
          />
          <button onClick={handleApply} className='codeApply'>Apply</button>
        </div>

        {discountApplied && (
          <h6 className='discountText'>
            Discount Applied: -$10.00
          </h6>
        )}
        
        <h1 className='discountedTotal'>
          <hr />  
          Order Total: ${finalPrice.toFixed(2)}
        </h1>

        <div className='btnContainer'>
        <button className='backBtn' onClick={() => navigate('/')}>Back to Movies</button>
        <button className='checkoutBtn' onClick={() => navigate('/checkout')}>Checkout</button>
        </div>

      </div>
    </div>
  </div>
  );
};

export default CartPage2;













