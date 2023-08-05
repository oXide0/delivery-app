import CouponCard from '../components/CouponCard/CouponCard';
import { couponCodes } from '../utils/coupons';

const CouponsPage = () => {
	return (
		<div className='wrapper'>
			<div style={{ display: 'flex', flexWrap: 'wrap', paddingTop: '40px', gap: '20px' }}>
				{couponCodes.map((code) => (
					<CouponCard key={code} code={code} />
				))}
			</div>
		</div>
	);
};

export default CouponsPage;
