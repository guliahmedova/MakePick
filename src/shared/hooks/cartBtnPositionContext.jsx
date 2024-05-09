import React, { createContext, useContext, useState } from 'react';

const CartButtonPositionContext = createContext();

export const CartButtonPositionProvider = ({ children }) => {
  const [cartButtonPosition, setCartButtonPosition] = useState({ x: 0, y: 0 });

  return (
    <CartButtonPositionContext.Provider value={{ cartButtonPosition, setCartButtonPosition }}>
      {children}
    </CartButtonPositionContext.Provider>
  );
};

export const useCartButtonPosition = () => useContext(CartButtonPositionContext);
