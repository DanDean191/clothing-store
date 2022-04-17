import React from 'react'
import { useSelector } from 'react-redux';
import { selectFilteredProducts } from '../Product/productsSlice';

import Product from '../Product';

const Basket = ({user}) => {
    const { baskets } = useSelector(state => state.allBaskets)
    const basket = baskets.length > 0 ? baskets.find(basket => user === basket.id) : []
    const ids = [];
    const items = basket.products !== undefined ? basket.products : []
    items.forEach(item => ids.push(item.productId))

    const productDetails = useSelector(state => selectFilteredProducts(state,ids))
    
    return (
      <div>
        Basket
        { productDetails.map(details => details && <Product key={details.id} details={details} />) }
      </div>
    )
}

export default Basket