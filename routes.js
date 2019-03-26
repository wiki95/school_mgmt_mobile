import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./components/Home";
import Selection from "./components/Selection";
import Announcement from "./components/Announcement";
import Profile from "./components/Profile";
import Schedule from "./components/Schedule";

const RootStack = createStackNavigator(
	{
		Home: Home,
		Selection: Selection,
		Schedule: Schedule,
		Profile: Profile,
		Announcement: Announcement
	},
	{
		initialRouteName: "Home",
		headerLayoutPreset: "center"
	}
);

const App = createAppContainer(RootStack);

export default App;
