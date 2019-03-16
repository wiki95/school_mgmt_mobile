/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Container } from "native-base";
import RootStack from "./routes";

export default class App extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<RootStack />
			</Container>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: "#edc7c7"
	}
});
