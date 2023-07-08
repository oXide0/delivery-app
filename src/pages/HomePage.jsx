import Typography from '@mui/joy/Typography';

function HomePage() {
	return (
		<div style={{ background: '#5A5A72', height: 'calc(100vh - 102px)' }}>
			<div className='wrapper' style={{ display: 'flex', alignItems: 'center', paddingTop: '30px', gap: '50px' }}>
				<div>
					<Typography level='display1' sx={{ color: '#f1f1f1' }}>
						Good Food
					</Typography>
					<Typography level='display1' sx={{ color: '#f1f1f1' }}>
						Fast Delivery
					</Typography>
				</div>
				<div>
					<img
						src='https://www.diabetesfoodhub.org/system/user_files/Images/1837-diabetic-pecan-crusted-chicken-breast_JulAug20DF_clean-simple_061720.jpg'
						alt='plate_food'
						style={{ maxWidth: '700px', borderRadius: '5%' }}
						className='plate__food'
					/>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
