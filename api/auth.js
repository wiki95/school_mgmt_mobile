import axios from "axios";
import { AsyncStorage } from "react-native";

export const login = async val => {
	let config = {
		method: "POST",
		url: "http://192.168.1.100:4000/auth/stdlogin",
		headers: {
			"content-type": "application/json"
		},
		data: val,
		json: true
	};

	return await axios(config);
};

export const verify = async () => {
	const token = await AsyncStorage.getItem("Token");
	let config = {
		method: "POST",
		url: `http://192.168.1.100:4000/auth/verify`,
		headers: {
			Authorization: "Bearer " + token
		}
	};
	try {
		const res = await axios(config);
		if (res.status !== undefined) {
			if (res.status === 200) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	} catch (err) {
		return false;
	}
};
