export const fetchProductList = async () => {
    const requestUrl = 'https://fakestoreapi.com/products'
    const response = await fetch(requestUrl, { 
        method: 'GET'
    })
    const json = await response.json()    
    return json
}