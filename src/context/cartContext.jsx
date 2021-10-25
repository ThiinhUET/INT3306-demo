import React, {createContext, useReducer} from "react";
import { sumItems, CartReducer } from "./cartReducer";

export const CartContext = createContext();

const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const initialState = { cartItems: storage, ...sumItems(storage), checkout: false };

const CartContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  
  const addItems = payload => {
    dispatch({type: "ADD_ITEM", payload})
  };

  const increase = payload =>  {
    dispatch({type: "INCREASE", payload})
  }
  const contextValue = {
    addItems,
    increase,
    ...state
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
};

export default CartContextProvider;