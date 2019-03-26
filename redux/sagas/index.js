import { all, call } from "redux-saga/effects";
import loginWatcher from "./authLogin";

/// watcher saga --> actions --> worker saga
function* rootSaga() {
	try {
		yield all([call(loginWatcher)]);
	} catch (err) {
		console.log(err);
	}
}

export default rootSaga;
