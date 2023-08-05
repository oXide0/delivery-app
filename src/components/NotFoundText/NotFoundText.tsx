import { StyledTitle } from './styles';

interface NotFoundProps {
	children: string;
	style?: React.CSSProperties;
}

const NotFoundText = ({ children, style }: NotFoundProps) => {
	return <StyledTitle style={style}>{children}</StyledTitle>;
};

export default NotFoundText;
