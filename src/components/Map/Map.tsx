const Map = () => {
	return (
		<iframe
			src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170410.86456220498!2d16.951108627594703!3d48.135891684282264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c89360aca6197%3A0x631f9b82fd884368!2z0JHRgNCw0YLQuNGB0LvQsNCy0LAsINCh0LvQvtCy0LDRh9GH0LjQvdCw!5e0!3m2!1sen!2sde!4v1691182708707!5m2!1sen!2sde'
			width='100%'
			height={250}
			style={{ borderRadius: '10px' }}
			loading='lazy'
			referrerPolicy='no-referrer-when-downgrade'
		/>
	);
};

export default Map;
