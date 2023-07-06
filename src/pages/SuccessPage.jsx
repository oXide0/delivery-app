import Typography from '@mui/joy/Typography';

function SuccessPage() {
	return (
		<div
			className='wrapper'
			style={{
				width: '100%',
				height: 'calc(100vh - 102px)',
				display: 'flex',
				justifyContent: 'center',
				paddingTop: '40px',
			}}
		>
			<Typography level='display2'>Thank you for your order!</Typography>
		</div>
	);
}

export default SuccessPage;
