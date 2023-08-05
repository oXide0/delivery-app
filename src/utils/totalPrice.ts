import { TypeCode, IProduct } from '../types/types';

export function getTotalPrice(data: IProduct[], coupon: TypeCode | undefined) {
	let total = 0;
	data.forEach((item: IProduct) => {
		total += item.price;
	});
	if (!coupon) return total;
	switch (coupon) {
		case 'CODE1':
			total -= 2;
			break;
		case 'CODE2':
			total -= 3;
			break;
		case 'CODE3':
			total -= 5;
			break;
		default:
			break;
	}
	return total;
}
