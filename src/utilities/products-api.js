import sendRequest from './send-request';
const BASE_URL = '/api/products';

export async function getProducts() {
    return sendRequest(BASE_URL);
}

export async function getCategory(category) {
    return sendRequest(`${BASE_URL}/category/${category}`)
}

export async function searchProducts(searchText) {
    return sendRequest(`${BASE_URL}/search/${searchText}`)
}

export async function getProduct(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}