import { createSlice } from '@reduxjs/toolkit';

// Retrieve cart from localStorage (cartItems)
const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [], // Load items from localStorage if available
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const index = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.totalQuantity -= state.cartItems[index].quantity;
        state.totalPrice -= state.cartItems[index].price * state.cartItems[index].quantity;
        state.cartItems.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
    updateTotals: (state) => {
      // Update total quantity and price in case they are not in sync after reload
      state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  },
});

// Middleware to persist cart to localStorage after any state change
export const persistCart = (store) => (next) => (action) => {
  const result = next(action);
  // Save cartItems to localStorage after every action
  localStorage.setItem('cartItems', JSON.stringify(store.getState().cart.cartItems));
  return result;
};

export const { addToCart, removeFromCart, clearCart, updateTotals } = cartSlice.actions;

export default cartSlice.reducer;
