import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 200 },
  { id: 4, name: 'Product 4', price: 250 },
  { id: 5, name: 'Product 5', price: 300 }
];

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
