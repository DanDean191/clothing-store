import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom';

import { selectProducts } from './productsSlice'

const Products = (props) => {
  const { product } = props.products;
  const [searchParams] = useSearchParams()
  const query = searchParams.get("category");
 
  const filteredProducts = (arr) => {
    return arr.map((item,index) => {
        return (
          <Link to={`/product/${item.id}`} key={index}  className={'product-list'}>
            <p>{item.title + ' - '}<b>{'£'+item.price}</b></p>
            <div className={'product-list-image-container'}>
              <img src={item.image} alt={item.title+' image'} className={'product-list-image'}/>
            </div>
          </Link>
        )
    })
  }
  
  const item = () => {
    if (query) {
      const filter = product.filter(product => product.category === query)
      return filteredProducts(filter)
    } else {
      return filteredProducts(product)
    }
  }
  

  



  // const item = products['product'].map((item,index) => {
  //   return (
  //     <Link to={`/product/${index}`} key={index}  className={'product-list'}>
  //       <p>{item.title + ' - '}<b>{'£'+item.price}</b></p>
  //       <div className={'product-list-image-container'}>
  //         <img src={item.image} alt={item.title+' image'} className={'product-list-image'}/>
  //       </div>
  //     </Link>
  //   )
  // })



  return (
    <div className={'grid'}>

    <p>{JSON.stringify( product[0])}</p>
    {item()}
    </div>
  )
}

export default Products