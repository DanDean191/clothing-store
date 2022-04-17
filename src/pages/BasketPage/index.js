import React, { useEffect } from 'react'
import Basket from '../../features/basket'

import { getBasket } from '../../features/basket/basketSlice';
import { useDispatch } from 'react-redux';
 
const BasketPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getBasket())
  }, [dispatch]);

  return (
    <>
      <h1>BasketPage</h1>
      <Basket user={1} />
    </>
  )
}

export default BasketPage