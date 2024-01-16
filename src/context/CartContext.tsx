import {
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useState,
} from "react";
import { ItemData } from "../utils/utils";

// Cart Context Type
interface CartContextType {
  cart: ItemData[];
  setCart: Dispatch<SetStateAction<ItemData[]>>;
  addItemToCart: (newItem: ItemData) => void;
  clearCart: () => void;
  itemsInCart: () => number;
  isInCart: (id: number) => boolean;
  totalPrice: () => number;
}

// Cart Context Default Value
const CartContextDefaultValue: CartContextType = {
  cart: [],
  setCart: () => {},
  addItemToCart: () => {},
  clearCart: () => {},
  itemsInCart: () => 0,
  isInCart: () => false,
  totalPrice: () => 0,
};

// Cart Context creation
export const CartContext = createContext<CartContextType>(
  CartContextDefaultValue
);

// Cart Context Provider props
interface CartProviderProps {
  children: ReactNode;
}

// Cart Context Provider
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<ItemData[]>([]);

  /**
   * @param {ItemData} item - Item to add into cart.
   * Add a new item to cart.
   */
  const addItemToCart = (item: ItemData) => {
    setCart([...cart, item]);
  };

  /**
   * Empty the cart array
   */
  const clearCart = () => {
    setCart([]);
  };

  /**
   * @returns {number} - Quantity of items in cart.
   */
  const itemsInCart = (): number => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  /**
   *
   * @returns {number} - Total price accumulated in cart.
   */
  const totalPrice = (): number => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  /**
   * @param {number} id - Item id
   * @returns {boolean}
   */
  const isInCart = (id: number): boolean => {
    return cart.some((item) => item.id === id);
  };

  const CartContextValue: CartContextType = {
    cart,
    setCart,
    addItemToCart,
    clearCart,
    itemsInCart,
    isInCart,
    totalPrice,
  };

  return (
    <CartContext.Provider value={CartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
