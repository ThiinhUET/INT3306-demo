import React from 'react';
import Layout from '../component/Shared/layout.component';
import ProductGrid from '../component/Stores/productGrid.component';

const Homepage = () => {
  return (
    <>
      <Layout>
        <div className="text-center mt-5">
          <h1>Store</h1>
          <p>This is our store</p>
          <ProductGrid />
        </div>
      </Layout>
    </>
  )
}
export default Homepage;