import React from "react";
import { Text } from "react-native";

export default class Announcement extends React.Component {
	static navigationOptions = {
		title: "Announcement",
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
