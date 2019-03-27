import { combineReducers } from "redux";
import login from "./reducers/login";
import logout from "./reducers/logout";
const reducers = combineReducers({
	login: login,
	logout: logout
});
export default reducers;
