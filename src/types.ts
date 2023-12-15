export interface Product {
    id: number;
    title: string;
    price: number;
    img: string;
    category_id: number;
}

export interface Order {
    id: number;
    user_id: string;
    total_price: number;
    status: string;
    order_date: string;
}
