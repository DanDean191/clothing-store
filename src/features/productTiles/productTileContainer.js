import React from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom';
import ProductTiles from './productTiles';
import Dropdown from '../../features/dropdown/'
import { useSelector } from 'react-redux';

import { selectCategory } from '../../features/Product/productsSlice'

const ProductTilesContainer = (props) => {
  const { product } = props.products;
  const [searchParams] = useSearchParams()
 
  const categories = useSelector(selectCategory)
  const navigate = useNavigate()
  
  const query = searchParams.get("category");
 
  const filterProducts = ({target}) => {
    const url = target.value === 'all' ? `/products` : `/products?category=${target.value}`
    return navigate(url)
  }

  const filteredProducts = (arr) => {
    return arr.map((product,index) => <ProductTiles key={index} product={product}/>)
  }
  
  const products = () => {
    if (query) {
      const filter = product.filter(product => product.category === query)
      return filteredProducts(filter)
    } else {
      return filteredProducts(product)
    }
  }

  return (
    <div className={'grid'}>
      <Dropdown name={"Categories"} options={categories} changeHandler={filterProducts}/>

      <p>{JSON.stringify( product[0])}</p>
      {products()}
    </div>
  )
}

export default ProductTilesContainer