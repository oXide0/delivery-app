export interface OrderItem {
    id: string;
    quantity: number;
    product: Product;
}

export interface Order {
    id: string;
    totalPrice: number;
    status: 'active' | 'completed';
    createdAt: Date;
    orderItems: OrderItem[];
}

export interface Product {
    id: string;
    title: string;
    price: string;
    imgUrl: string;
    category: 'burgers' | 'drinks' | 'pizzas' | 'desserts';
}
