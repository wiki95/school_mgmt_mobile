import { combineReducers } from "redux";
import login from "./reducers/login";
const reducers = combineReducers({
	login: login
});
export default reducers;
