const INITIAL_STATE = {
	isLoading: false,
	isError: false
};
const logout = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "LOGOUT":
			return { ...state, isLoading: true, isError: false };
		case "LOGOUT_SUCCEED":
			return { ...state, isError: false, isLoading: false };
		case "LOGOUT_FAILED":
			return { ...state, isError: true, isLoading: false };
		default:
			return state;
	}
};

export default logout;
