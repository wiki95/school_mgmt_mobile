export const onLogin = (data, navigation) => {
	return {
		type: "LOGIN",
		payload: { nic: data.nic, password: data.password },
		other: navigation
	};
};
export const onLogout = navigation => {
	return {
		type: "LOGOUT",
		payload: navigation
	};
};
