import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
	return (
		<>
			<Header />
			<div style={{ border: '1px solid #eeeeee', marginTop: '-2px' }}></div>
			<Outlet />
		</>
	);
};

export default Layout;
