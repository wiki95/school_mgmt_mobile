const INITIAL_STATE = {
	isLoading: false,
	isError: false,
	student: {}
};
const login = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "LOGIN":
			return { ...state, isLoading: true, isError: false };
		case "LOGIN_SUCCEED":
			return { ...state, isError: false, isLoading: false };
		case "USER_FETCHED":
			return { ...state, student: action.payload };
		case "LOGIN_FAILED":
			return { ...state, isError: true, isLoading: false };
		default:
			return state;
	}
};

export default login;
