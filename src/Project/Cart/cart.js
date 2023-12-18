import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cart } = useCart();

  return (
    <div>
      {/* <h2>Your Cart</h2> */}
      <ul>
        {cart.items && Array.isArray(cart.items) && cart.items.length > 0 ? (
          cart.items.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))
        ) : (
          <li ></li>
        )}
      </ul>
    </div>
  );
};

export default Cart;
