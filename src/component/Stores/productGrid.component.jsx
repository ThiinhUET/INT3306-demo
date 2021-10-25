import React from "react";
import ProductItem from "./productItem.component";
import useProduct from '../../hooks/useProduct';
import './productGrid.scss';

const ProductGrid = () => {
  const { products } = useProduct();
  return(
    <div className="grid">
      {
        products.map((ele) => (
          <ProductItem key={ele.id} product={ele} />
        ))
      }
    </div>
  )
}

export default ProductGrid;