export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

export interface Product {
    id: number;
    title: string;
    price: number;
    img: string;
    category: Category;
}

export interface CartProduct {
    cartItemId: number;
    product: Product;
    quantity: number;
}

export interface Order {
    id: number;
    user: User;
    totalPrice: number;
    status: string;
    date: string;
}

interface Category {
    id: number;
    name: 'Drinks' | 'Pizza' | 'Burgers' | 'Desserts';
}
