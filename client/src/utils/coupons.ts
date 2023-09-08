import { IProduct } from '../types';
export const couponCodes = ['CODE1', 'CODE2', 'CODE3'];

export const getTotalPrice = (data: IProduct[], coupon: string | undefined) => {
	let total = 0;
	data.forEach((item: IProduct) => {
		total += item.price * item.quantity;
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
	return total < 0 ? 0 : total;
};

export const getCouponDiscount = (coupon: string | undefined) => {
	if (!coupon) return 0;
	switch (coupon) {
		case 'CODE1':
			return 2;
		case 'CODE2':
			return 3;
		case 'CODE3':
			return 5;
		default:
			return 0;
	}
};
