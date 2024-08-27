// src/Image.jsx
import React from 'react';
import Product from './Product';

function Image() {
  return <img src={Product.image} alt={Product.name} className="img-fluid" />;
}

export default Image;
