export type TypeCredentials = { username: string; password: string };

export interface IUser {
	id: string;
	name: string;
	password: string;
}

export interface IUserData {
	name: string;
	email: string;
	phone: string;
	address: string;
	coupon?: string;
}

export interface IProduct {
	id: number;
	title: string;
	price: number;
	img: string;
	quantity: number;
}

export interface IOrder {
	id: string;
	food: IProduct[];
}

export interface IGood {
	id: number;
	title: string;
	price: number;
	img: string;
}

export interface IShop {
	id: number;
	name: string;
	goods: IGood[];
}
