import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./components/Home";
import Selection from "./components/Selection";
import Announcement from "./components/Announcement";
import Attendance from "./components/Attendance";
import FeeRecord from "./components/FeeRecord";
import ResultSheet from "./components/ResultSheet";
import Schedule from "./components/Schedule";

const RootStack = createStackNavigator(
	{
		Home: Home,
		Selection: Selection,
		Announcement: Announcement,
		Attendance: Attendance,
		FeeRecord: FeeRecord,
		ResultSheet: ResultSheet,
		Schedule: Schedule
	},
	{
		initialRouteName: "Home",
		headerLayoutPreset: "center"
	}
);

const App = createAppContainer(RootStack);

export default App;
