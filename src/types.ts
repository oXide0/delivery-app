export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    userCoupons: string[];
}

export interface Product {
    id: number;
    title: string;
    price: number;
    img: string;
    category: Category;
}

export interface Order {
    id: number;
    userId: number;
    totalPrice: number;
    status: string;
    date: string;
}

interface Category {
    id: number;
    name: 'Drinks' | 'Pizza' | 'Burgers' | 'Desserts';
}
