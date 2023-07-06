export function totalPrice(data, coupon) {
	let total = 0;
	data.forEach((item) => {
		total += item.price;
	});
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
