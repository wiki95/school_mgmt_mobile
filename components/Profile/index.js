import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { verify } from "../../api/auth";

export default class Profile extends React.Component {
	static navigationOptions = {
		title: "PROFILE",
		headerStyle: {
			backgroundColor: "#a00000"
		},
		headerTintColor: "#fff",
		headerTitleStyle: {
			fontWeight: "bold"
		}
	};
	state = {
		user: {}
	};
	componentDidMount() {
		verify()
			.then(res => {
				if (res === false) {
					this.props.navigation.navigate("Home");
				} else {
					this.setState({
						user: res
					});
				}
			})
			.catch(err => {
				console.warn(err);
			});
	}
	render() {
		const {
			name,
			gr_num,
			nic,
			father_name,
			gender,
			age,
			section,
			address,
			admission_date
		} = this.state.user;
		return (
			<View style={styles.container}>
				<View style={styles.innerView}>
					<Text style={styles.textData}>GR# : {gr_num}</Text>
					<Text style={styles.textData}>NIC# : {nic}</Text>
					<Text style={styles.textData}>First Name : {name}</Text>
					<Text style={styles.textData}>Last Name : {father_name}</Text>
					<Text style={styles.textData}>Gender : {gender}</Text>
					<Text style={styles.textData}>Age : {age}</Text>
					<Text style={styles.textData}>Class : {this.state.user.class}</Text>
					<Text style={styles.textData}>Section : {section}</Text>
					<Text style={styles.textData}>Address : {address}</Text>
					<Text style={styles.textData}>Admission Date : {admission_date}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		padding: 40,
		justifyContent: "center"
	},
	innerView: {
		backgroundColor: "#f2e4d7",
		padding: 20,
		borderColor: "black",
		borderWidth: 2
	},
	textData: {
		fontSize: 20,
		fontWeight: "bold"
	}
});
