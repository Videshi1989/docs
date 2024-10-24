import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../slices/cartSlice';

const Cart = () => {
  const { cartItems, totalPrice, totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Cart Details</h2>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      {/*    .toFixed(2) will display 2 digits after decimal     */}
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
