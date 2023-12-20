import { CartProduct } from './types';

export function getTotalPrice(products: CartProduct[]) {
    return products.map((item) => item.product.price * item.quantity).reduce((a, b) => a + b, 0);
}
