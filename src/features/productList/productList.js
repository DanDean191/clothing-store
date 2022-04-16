import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getData, selectProductList } from './productListSlice'

const Items = () => {
  const products = useSelector(selectProductList);
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getData())
  }, [])

  const item = products.map((item,index) => {
      return (
        <div key={index}  className={'product-list'}>
          <p>{item.title + ' - '}<b>{'£'+item.price}</b></p>
          <div className={'product-list-image-container'}>
            <img src={item.image} alt={item.title+' image'} className={'product-list-image'}/>
          </div>
        </div>
      )
  })

  return (
    <div className={'grid'}>
    <p>{JSON.stringify(products[0])}</p>
    {item}
    </div>
  )
}

export default Items