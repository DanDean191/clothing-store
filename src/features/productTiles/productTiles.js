import React from 'react'
import { Link } from 'react-router-dom';

const productTiles = ({product}) => {
    const {id, title, price, image} = product;

    return (
        <Link to={`/product/${id}`} className={'product-list'}>
            <p>{title + ' - '}<b>{'£'+price}</b></p>
            <div className={'product-list-image-container'}>
            <img src={image} alt={title+' thumbnail'} className={'product-list-image'}/>
            </div>
        </Link>
    )
}

export default productTiles