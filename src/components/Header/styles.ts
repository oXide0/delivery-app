import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const StyledContainer = styled('div')`
	border-bottom: 1px solid #beb9b9;
	background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
`;

const StyledHeader = styled('header')`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1200px;
	margin: 0 auto;
	padding: 5px 15px 0 15px;
	@media (max-width: 768px) {
		padding: 5px 15px 5px 15px;
	}
`;

const StyledLogo = styled(Link)`
	font-size: 30px;
	font-weight: 800;
	color: #5a5a72;
	text-decoration: none;
	@media (min-width: 768px) and (max-width: 992px) {
		font-size: 24px;
	}
`;

const StyledNav = styled('nav')`
	display: flex;
	align-items: center;
	gap: 30px;
	@media (min-width: 768px) and (max-width: 992px) {
		gap: 10px;
	}
	@media (min-width: 0) and (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
		position: fixed;
		transform: translateY(-100%);
		transition: transform 0.2s;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
		background: #f1f1f1;
		padding: 30px 0 0 20px;
	}
`;

export { StyledContainer, StyledHeader, StyledLogo, StyledNav };
