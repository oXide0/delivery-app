export const validate = (username: string, password: string, isRepeatName: boolean | undefined) => {
	if (username.trim() === '') {
		return 'Username is required';
	} else if (username.includes(' ')) {
		return 'Username cannot contain spaces';
	} else if (password.trim() === '') {
		return 'Password is required';
	} else if (password.includes(' ')) {
		return 'Password cannot contain spaces';
	} else if (isRepeatName) {
		return 'Username is already taken';
	}
	return '';
};
