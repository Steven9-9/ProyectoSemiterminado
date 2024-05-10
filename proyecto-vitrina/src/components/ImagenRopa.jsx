import React from 'react';

const ImagenRopa = ({ name, image, price }) => {
  const handleBuyClick = () => {
    
  };

  return (
    <div className="productoVitrina">
      <img src={image} alt={name} />
      <div className="product-info-vitrina">
        <h3>{name}</h3>
        <p>{price}</p>
        <button className="buy-btn-vitrina" onClick={handleBuyClick}>Ver Mas</button>
      </div>
    </div>
  );
};

export default ImagenRopa
;

