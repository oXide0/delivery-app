interface NotFoundProps {
	title: string;
}

const NotFound = ({ title }: NotFoundProps) => {
	return (
		<h1 style={{ fontSize: '40px', fontWeight: '600', textAlign: 'center', paddingTop: '20px' }}>
			No {title} found!
		</h1>
	);
};

export default NotFound;
