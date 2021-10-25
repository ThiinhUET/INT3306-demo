import React, {useContext} from "react";
import { ProductContext } from "../context/productContext";

const useProducts = () => {
  const ctx = useContext(ProductContext);
  return {
    ...ctx
  }
}
export default useProducts;