import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Input, Item, Button, Text, Spinner } from "native-base";
import { verify } from "../../api/auth";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { onLogin } from "../../redux/actions";
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
		pass: ""
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
		this.props.actions.onLogin(
			{ nic: this.state.nic, password: this.state.pass },
			this.props.navigation
		);
	};
	componentDidMount() {
		verify()
			.then(res => {
				if (res !== false) {
					this.props.navigation.navigate("Selection");
				}
			})
			.catch(err => {
				console.warn(err);
			});
	}
	render() {
		const { isError, isLoading } = this.props.login;
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
					{isError && (
						<Text style={{ color: "red" }}>Nic or Password is Incorrect</Text>
					)}
					<View>
						<Button onPress={this.handleSubmit} style={styles.btn}>
							{isLoading ? <Spinner color="#ffff" /> : <Text>Submit</Text>}
						</Button>
					</View>
				</View>
			</React.Fragment>
		);
	}
}
const mapStateToProps = state => ({
	login: state.login
});
const mapDispatchToProps = dispatch => {
	return {
		actions: {
			onLogin: bindActionCreators(onLogin, dispatch)
		}
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);

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
