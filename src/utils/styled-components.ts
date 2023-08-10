import Tab from '@mui/joy/Tab';
import { styled } from '@mui/material/styles';

const StyledTab = styled(Tab)`
	width: 200px;
	height: 60px;
	max-height: 60px;
	font-size: 18px;
	font-weight: 600;
	display: flex;
	justify-content: center;
`;

const StyledTabRow = styled('div')`
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
	padding-left: 10px;
`;

const StyledContainer = styled('div')`
	max-width: 1200px;
	margin: 0 auto;
	padding: 15px 15px;
	display: flex;
	justify-content: space-between;
	@media (min-width: 0) and (max-width: 768px) {
		flex-direction: column;
		gap: 40px;
	}
`;

const StyledBlock = styled('div')`
	padding: 0 20px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100%;
	max-height: 596px;
	overflow: auto;
`;

const StyledGoodsContainer = styled('div')`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 0) and (max-width: 768px) {
		width: 100%;
	}
`;

const StyledFormContainer = styled('div')`
	width: 46%;
	@media (min-width: 0) and (max-width: 768px) {
		width: 100%;
	}
`;

export { StyledTab, StyledTabRow, StyledContainer, StyledBlock, StyledGoodsContainer, StyledFormContainer };
