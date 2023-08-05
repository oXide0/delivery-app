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
`;

const StyledBlock = styled('div')`
	padding: 0 20px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 600px;
	max-height: 596px;
	overflow: auto;
`;

export { StyledTab, StyledTabRow, StyledContainer, StyledBlock };
