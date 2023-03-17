import React from 'react'
import LatestProd from './LatestProd';
import ProductCarl1 from './ProductCarl1';
import ProductCarl2 from './ProductCarl2';
import ProductCarl3 from './ProductCarl3';
// import ProductCarl4 from './ProductCarl4';
// import ProductCarl5 from './ProductCarl5';




const Home = () => {
  return (
    <div>
      <ProductCarl1 />
      <ProductCarl2 />
      <ProductCarl3 />
      <LatestProd />
      
      {/* <ProductCarl4 /> */}
    </div>
  )
}

export default Home
