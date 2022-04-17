import React from 'react'
import { useSelector } from 'react-redux';
import { selectProduct } from '../Product/productsSlice';

import Product from '../Product';

const Basket = ({user}) => {
    const { baskets } = useSelector(state => state.allBaskets)
    const basket = baskets.length > 0 ? baskets.find(basket => user === basket.id) : []
    const items = basket.products !== undefined ? basket.products : []
    
    const productDetails = useSelector( state => {
        const arr = []
        items.forEach(product => {
           arr.push(selectProduct(state, product.productId))
        })
        return arr
    })
    
    return (
      <div>
        Basket
        { productDetails.map(details => <Product details={details !== undefined ? details : {}} />) }
      </div>
    )
}

export default Basket