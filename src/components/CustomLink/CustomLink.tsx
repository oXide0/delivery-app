import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { StyledLink } from './styles';
import { useMatch } from 'react-router-dom';

interface CustomLinkProps {
	path: string;
	icon: JSX.Element;
	children: string;
}

const CustomLink = memo(({ path, icon, children }: CustomLinkProps) => {
	const match = useMatch(path);

	return (
		<NavLink to={path} style={{ textDecoration: 'none', color: '#454545' }}>
			<StyledLink style={{ backgroundSize: match ? '100% 2px' : '' }}>
				{icon}
				{children}
			</StyledLink>
		</NavLink>
	);
});

export default CustomLink;
