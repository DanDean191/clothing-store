import React from 'react'

import { useSelector } from 'react-redux';
//import { useSelector, useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import { selectProducts, selectProduct } from '../../features/products/productsSlice'
// import { test } from '../../features/product/productSlice'

import Product from '../../features/Product/'
import Breadcrumbs from '../../features/breadcrumbs/'

const ProductPage = () => {
  const { id } = useParams();
  
  const details = useSelector(state => selectProduct(state, parseInt(id)))

  console.log(details)

  // const details = useSelector(state => {
  //   const index = selectProducts(state)
  //     .findIndex(product => product.id.toString() === id)

  //   console.log(index)

  //   return selectProduct(state, index);
  // })

  //console.log(details)

  return (
    <>
      <Breadcrumbs path={details} />
      <Product details={details} />
    </>
  )
}

export default ProductPage