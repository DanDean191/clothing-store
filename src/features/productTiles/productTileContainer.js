import React from 'react'
import ProductTiles from './productTiles';

const ProductTilesContainer = ({products, filterOption}) => {
  const filterArr = (arr) => {
    return arr.map((product,index) => <ProductTiles key={index} product={product}/>)
  }

  const filteredProducts = () => {
    if (filterOption) {
      const filter = products.filter(product => product.category === filterOption)
      return filterArr(filter)
    } else {
      return filterArr(products)
    }
  }

  return (
    <div className={'grid'}>
      {filteredProducts()}
    </div>
  )
}

export default ProductTilesContainer