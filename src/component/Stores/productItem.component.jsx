import React from "react";
import {PlusCircle} from '../Icon';
import useCart from '../../hooks/useCart';


const ProductItem = ({product}) => {

  const { addItems, cartItems, increase } = useCart();

  const isInCart = product => {
    return !!cartItems.find(item => item.id === product.id);
  }
  
  return (
    <div className="card card-body">
      <img src={product.photo} alt="product image" />
      <p>{product.name}</p>
      <h2>{ `$ ${product.price}`}</h2>
      <div className="text-center">
        {
            isInCart(product) && 
            <button 
            onClick={() => increase(product)}
            className="btn btn-outline-primary btn-sm">Add more</button>
        }

        {
            !isInCart(product) && 
            <button 
            onClick={() => addItems(product)}
            className="btn btn-primary btn-sm">Add to cart</button>
        }      
      </div>
    </div>
  )
};
export default ProductItem;