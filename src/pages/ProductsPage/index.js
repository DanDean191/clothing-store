import React from 'react'
import Products from '../../features/productTiles/productTileContainer'

import { useSelector } from 'react-redux';
import { selectProducts } from '../../features/Product/productsSlice'

const ProductsPage = () => {  
  const products = useSelector(state => selectProducts(state));

  return (
    <Products products={products} />
  )
}

export default ProductsPage