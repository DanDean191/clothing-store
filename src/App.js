import React, {useState, useEffect} from 'react'
import ProductList from './features/productList/productList'
import { fetchProductList } from './api/fakeStore'

const App = () => {
    const [itemData, setItemData] = useState([])
    
    useEffect(() =>{
        fetchProductList().then(json => setItemData(json))
    }, [])
    
    return (
        <div>
            <ProductList details={itemData} />
        </div>
    )
}

export default App