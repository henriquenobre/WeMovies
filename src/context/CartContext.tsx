import React, { createContext, useContext, useState, ReactNode } from "react";

interface Item {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CartItem extends Item {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Item) => void;
  removeFromCart: (itemId: number) => void;
  removeQuantityFromCart: (itemId: number) => void;
  getTotalItemsOfMovie: (movieId: number) => number;
  totalItems: number;
  totalPrice: number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== itemId)
    );
  };

  const removeQuantityFromCart = (itemId: number) => {
    setCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.id === itemId
            ? {
                ...cartItem,
                quantity: Math.max(0, cartItem.quantity - 1),
              }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  const getTotalItemsOfMovie = (movieId: number) => {
    const filmCartItem = cart.find((cartItem) => cartItem.id === movieId);
    return filmCartItem ? filmCartItem.quantity : 0;
  };

  const totalItems = cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);

  const totalPrice = cart.reduce(
    (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
    0
  );

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        removeQuantityFromCart,
        getTotalItemsOfMovie,
        totalItems,
        totalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
