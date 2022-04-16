import React from 'react'
import Products from '../../features/products/products'

import { useSelector } from 'react-redux';
import { selectProducts } from '../../features/products/productsSlice'

const ProductsPage = () => {  
  const products = useSelector(state => selectProducts(state));

  return (
    <Products products={products} />
  )
}

export default ProductsPage