import { takeLatest, put, call } from "redux-saga/effects";
import { AsyncStorage } from "react-native";
const removeItemValue = async key => {
	try {
		await AsyncStorage.removeItem(key);
		return true;
	} catch (exception) {
		return false;
	}
};
function* logoutWorker(val) {
	try {
		const success = yield call(removeItemValue, "User");
		if (success) {
			yield put({ type: "LOGOUT_SUCCEED" });
			yield val.payload.navigate("Home");
		} else {
			yield put({ type: "LOGOUT_FAILED", payload: err });
		}
	} catch (err) {
		yield put({ type: "LOGOUT_FAILED", payload: err });
	}
}

function* logoutWatcher() {
	yield takeLatest("LOGOUT", logoutWorker);
}

export default logoutWatcher;
