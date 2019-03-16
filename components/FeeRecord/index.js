import React from "react";
import { Text } from "react-native";

export default class FeeRecord extends React.Component {
	static navigationOptions = {
		title: "Fee Record",
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
