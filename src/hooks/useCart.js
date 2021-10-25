import React, {useContext} from "react";
import { CartContext } from "../context/cartContext";

const useCart = () => {
  const ctx = useContext(CartContext);
  console.log(ctx);
  return {
    ...ctx
  }
}
export default useCart;