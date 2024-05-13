// components/ProductCard.tsx
import React from 'react';

interface ProductCardProps {
  productName: string;
  price: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ productName, price, imageUrl }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
      <img src={imageUrl} alt={productName} style={{ width: '100px', height: '100px' }} />
      <h3>{productName}</h3>
      <p>${price}</p>
    </div>
  );
};

export default ProductCard;