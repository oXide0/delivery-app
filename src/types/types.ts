type TypeGood = {
	id: number;
	title: string;
	price: number;
	img: string;
};

export type TypeCode = string;
export type TypeCredentials = { username: string; password: string };

export interface IUser {
	id: string;
	name: string;
	password: string;
}

export interface IProduct {
	id: number;
	title: string;
	price: number;
	img: string;
	quantity?: number;
}

export interface IOrder {
	id: string;
	food: IProduct[];
}

export interface IShop {
	id: number;
	name: string;
	goods: TypeGood[];
}
