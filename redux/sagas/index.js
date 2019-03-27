import { all, call } from "redux-saga/effects";
import loginWatcher from "./authLogin";
import logoutWatcher from "./authLogout";

/// watcher saga --> actions --> worker saga
function* rootSaga() {
	try {
		yield all([call(loginWatcher), call(logoutWatcher)]);
	} catch (err) {
		console.warn(err);
	}
}

export default rootSaga;
