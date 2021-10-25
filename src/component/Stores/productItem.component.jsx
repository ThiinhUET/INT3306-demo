import React from "react";
import {PlusCircle} from '../Icon';

const ProductItem = ({product}) => {
  return (
    <div className="card card-body">
      <img src={product.photo} alt="product image" />
      <p>{product.name}</p>
      <h2>{ `$ ${product.price}`} <PlusCircle width="30px" /></h2>
    </div>
  )
};
export default ProductItem;