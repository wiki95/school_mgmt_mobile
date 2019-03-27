import { takeLatest, put, call } from "redux-saga/effects";
import { login } from "../../api/auth";
import { AsyncStorage } from "react-native";

const saveItemValue = async key => {
	try {
		await AsyncStorage.setItem("User", JSON.stringify(key));
		return true;
	} catch (exception) {
		return false;
	}
};
function* loginWorker(val) {
	try {
		const res = yield call(login, val.payload);
		if (res) {
			yield put({ type: "LOGIN_SUCCEED" });

			const success = yield call(saveItemValue, res.data);
			if (success) {
				yield val.other.navigate("Selection");
			} else {
				yield put({ type: "LOGIN_FAILED", payload: err });
			}
		}
	} catch (err) {
		yield put({ type: "LOGIN_FAILED", payload: err });
	}
}

function* loginWatcher() {
	yield takeLatest("LOGIN", loginWorker);
}

export default loginWatcher;
