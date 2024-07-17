import { OrderItem } from '../types';

export const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

export function getTotalPrice(products: OrderItem[]) {
    return products
        .map((item) => parseFloat(item.product.price) * item.quantity)
        .reduce((a, b) => a + b, 0);
}
