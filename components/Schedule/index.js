import React from "react";
import { Text } from "react-native";

export default class Schedule extends React.Component {
	static navigationOptions = {
		title: "Schedule",
		headerStyle: {
			backgroundColor: "#a00000"
		},
		headerTintColor: "#fff",
		headerTitleStyle: {
			fontWeight: "bold"
		}
	};
	render() {
		return <Text>this is schedule component</Text>;
	}
}
