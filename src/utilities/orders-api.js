import sendRequest from './send-request';
const BASE_URL = '/api/orders';

export async function createOrder(cartData, cartTotal, token) {
    return sendRequest(`${BASE_URL}/create`, 'POST', { cartData, cartTotal, token })
}

export async function getOrders() {
    return sendRequest(BASE_URL)
}