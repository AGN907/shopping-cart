export async function getProducts(productId = '') {
    const prefix = 'gid://shopify/Product/'
    if (productId) {
        const response = await fetch(`https://mock.shop/api?query={product(id:%20%22${prefix}${productId}%22){title%20description%20featuredImage%20{url}%20variants(first:%201){edges%20{node%20{price%20{amount%20currencyCode}}}}}}`)
        const productData = await response.json()
        return productData.data.product
    }
    const response = await fetch('https://mock.shop/api?query={products(first:%208){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}')
    const productsData = await response.json()

    return productsData.data.products.edges
}   
