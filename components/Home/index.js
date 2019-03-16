import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Input, Item, Button, Text, Spinner } from "native-base";
class Home extends React.Component {
	static navigationOptions = {
		title: "SCHOOL PORTAL",
		headerStyle: {
			backgroundColor: "#a00000"
		},
		headerTintColor: "#fff",
		headerTitleStyle: {
			fontWeight: "bold"
		}
	};
	state = {
		nic: "",
		pass: "",
		isLoading: false
	};
	handleNicChanged = e => {
		this.setState(prevState => {
			if (e.length - prevState.nic.length !== -1) {
				if (e.length === 5 || e.length === 13) {
					return {
						nic: `${e}-`
					};
				}
				if (e.length >= 16) {
					return {
						nic: prevState.nic
					};
				}
			}
			return {
				nic: e
			};
		});
	};
	handlePassChanged = e => {
		this.setState({
			pass: e
		});
	};
	handleSubmit = () => {
		// this.setState({
		// 	isLoading: true
		// });
		this.props.navigation.navigate("Selection", {
			nic: this.state.nic,
			pass: this.state.pass
		});
	};
	render() {
		return (
			<React.Fragment>
				<View style={styles.content}>
					<Item style={styles.input} rounded>
						<Input
							value={this.state.nic}
							style={{ textAlign: "center" }}
							onChangeText={this.handleNicChanged}
							keyboardType="numeric"
							placeholder="Enter Nic"
						/>
					</Item>
					<Item style={styles.input} rounded>
						<Input
							secureTextEntry={true}
							value={this.state.pass}
							style={{ textAlign: "center" }}
							onChangeText={this.handlePassChanged}
							placeholder="Enter Password"
						/>
					</Item>
					<View>
						<Button onPress={this.handleSubmit} style={styles.btn}>
							{this.state.isLoading ? (
								<Spinner color="#ffff" />
							) : (
								<Text>Submit</Text>
							)}
						</Button>
					</View>
				</View>
			</React.Fragment>
		);
	}
}

export default Home;

const styles = StyleSheet.create({
	content: {
		height: Dimensions.get("screen").height - 150,
		alignItems: "center",
		justifyContent: "center"
	},
	input: {
		width: Dimensions.get("screen").width - 20,
		borderColor: "#a00000",
		color: "#a00000",
		marginTop: 5
	},
	btn: {
		backgroundColor: "#a00000",
		marginTop: 40
	}
});
