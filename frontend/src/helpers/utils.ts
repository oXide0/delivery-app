import { CartProduct } from '../types';

export const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

export function getTotalPrice(products: CartProduct[]) {
    return products.map((item) => item.product.price * item.quantity).reduce((a, b) => a + b, 0);
}
