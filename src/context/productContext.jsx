import React, {createContext, useState} from "react";
import { dummyData } from "../services/dummyData";

export const ProductContext = createContext();

const ProductContextProvider = ({children}) => {
  const [products] = useState(dummyData);
  return (
    <ProductContext.Provider value={{products}}>
      {children}
    </ProductContext.Provider>
  )
};

export default ProductContextProvider;