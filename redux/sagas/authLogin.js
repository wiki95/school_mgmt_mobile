import { takeLatest, put, call } from "redux-saga/effects";
import { login } from "../../api/auth";
import { AsyncStorage } from "react-native";

function* loginWorker(val) {
	try {
		const res = yield call(login, val.payload);
		if (res) {
			yield put({ type: "LOGIN_SUCCEED" });
			yield put({ type: "USER_FETCHED", payload: res.data });
			yield AsyncStorage.setItem("Token", res.data.token);
			yield val.other.navigate("Selection");
		}
	} catch (err) {
		yield put({ type: "LOGIN_FAILED", payload: err });
	}
}

function* loginWatcher() {
	yield takeLatest("LOGIN", loginWorker);
}

export default loginWatcher;
