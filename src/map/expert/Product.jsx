import React from 'react';

const Product = ({name, price}) => {
   return (
      <li>{name}: {price.toLocaleString()}원</li>
   );
};

export default Product;