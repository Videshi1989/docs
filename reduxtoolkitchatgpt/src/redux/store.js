import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { persistCart, updateTotals } from '../slices/cartSlice';

// Configure the store
export const store = configureStore({
  reducer: {
    // Add the cart slice to the store
    cart: cartReducer,
  },
  // Add middleware for persisting cart data to localStorage
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistCart),
});

// Dispatch updateTotals to recalculate totals when app first loads
store.dispatch(updateTotals());
