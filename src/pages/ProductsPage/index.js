import React from 'react'
import ProductTilesContainer from '../../features/productTiles/productTileContainer'
import Dropdown from '../../features/dropdown/'

import { useSelector } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { selectAllProducts, selectCategory } from '../../features/Product/productsSlice'

const ProductsPage = () => {  
  const products = useSelector(selectAllProducts);
  const categories = useSelector(selectCategory)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams() 

  const query = searchParams.get("category");
 
  const navigationSelector = ({target}) => {
    const url = target.value === 'all' ? `/products` : `/products?category=${target.value}`
    return navigate(url)
  }

  return (
    <>
      <Dropdown name={"Categories"} options={categories} changeHandler={navigationSelector}/>
      <ProductTilesContainer products={products} filterOption={query} />
    </>
  )
}

export default ProductsPage