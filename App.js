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
import { Provider } from "react-redux";
import store from "./redux/store.js";
import RootStack from "./routes";

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Container style={styles.container}>
					<RootStack />
				</Container>
			</Provider>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: "#edc7c7"
	}
});
