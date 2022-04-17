export const fetchProducts = async () => {
    const requestUrl = 'https://fakestoreapi.com/products'
    const response = await fetch(requestUrl, { 
        method: 'GET'
    })
    return await response.json()
}

export const fetchCategories = async () => {
    const requestUrl = 'https://fakestoreapi.com/products/categories'
    const response = await fetch(requestUrl, { 
        method: 'GET'
    })
    return await response.json()    
}