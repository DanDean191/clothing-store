import React from 'react'

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectProduct } from '../../features/Product/productsSlice'

import Product from '../../features/Product/'
import Breadcrumbs from '../../features/breadcrumbs/'

const ProductPage = () => {
  const { id } = useParams();
  const details = useSelector(state => selectProduct(state, parseInt(id)))
  

  return (
    <>
      <Breadcrumbs path={details} />
      <Product details={details} />
    </>
  )
}

export default ProductPage