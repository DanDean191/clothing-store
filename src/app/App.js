import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { getProducts, getCategories } from '../features/Product/productsSlice'

import Navbar from '../features/navbar/Navbar';

// Pages
import HomePage from '../pages/Home/'
import ProductsPage from '../pages/ProductsPage'
import ProductPage from '../pages/ProductPage'

const App = () => { 
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
        dispatch(getCategories())
    }, [dispatch]);
    
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/products' element={<ProductsPage />} />
                <Route path='/product/:id' element={<ProductPage />} />
            </Routes>
        </Router>
    )
}

export default App