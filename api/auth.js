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
	try {
		const user = await AsyncStorage.getItem("User");
		if (user) {
			let config = {
				method: "POST",
				url: `http://192.168.1.100:4000/auth/verify`,
				headers: {
					Authorization: "Bearer " + JSON.parse(user).token
				}
			};
			const res = await axios(config);
			if (res.status !== undefined) {
				if (res.status === 200) {
					return JSON.parse(user);
				} else {
					return false;
				}
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

export const getNotices = async val => {
	try {
		const user = await AsyncStorage.getItem("User");
		let config = {
			method: "POST",
			url: "http://192.168.1.100:4000/notice",
			headers: {
				"content-type": "application/json",
				Authorization: "Bearer " + JSON.parse(user).token
			},
			data: val,
			json: true
		};

		return await axios(config);
	} catch (err) {
		console.warn(err.message);
		return false;
	}
};
export const getSchedule = async val => {
	let config = {
		method: "GET",
		url: `http://192.168.1.100:4000/schedule/${val.class}/${val.section}`,
		headers: {
			"content-type": "application/json"
		}
	};

	return await axios(config);
};
