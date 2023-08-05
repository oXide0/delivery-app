import { styled } from '@mui/material/styles';

const StyledLink = styled('div')`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	align-items: center;
	background-image: linear-gradient(#5a5a72, #5a5a72);
	background-size: 0% 2px;
	background-repeat: no-repeat;
	transition: background-size 0.3s;
	padding: 0 20px 5px 20px;
	background-position: 50% 100%;
	cursor: pointer;
	&:hover,
	&:active {
		background-size: 100% 2px;
	}
`;

export { StyledLink };
