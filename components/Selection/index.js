import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Container, Content, Spinner } from "native-base";
import imgSchedule from "../../images/calendar.png";
import imgUser from "../../images/user.png";
import imgNotice from "../../images/bull-horn-announcer.png";
import { verify } from "../../api/auth";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { onLogout } from "../../redux/actions";

class Selection extends React.Component {
	static navigationOptions = {
		title: "ABC STUDENT",
		headerLeft: null,
		headerStyle: {
			backgroundColor: "#a00000"
		},
		headerTintColor: "#fff",
		headerTitleStyle: {
			fontWeight: "bold"
		}
	};

	componentDidMount() {
		verify()
			.then(res => {
				if (res === false) {
					this.props.navigation.navigate("Home");
				}
			})
			.catch(err => {
				this.props.navigation.navigate("Home");
			});
	}
	handleLogout = () => {
		this.props.actions.onLogout(this.props.navigation);
	};
	render() {
		const { navigation } = this.props;
		const { isLoading, isError } = this.props.logout;
		return (
			<Container>
				<Content>
					{isLoading ? (
						<Spinner color="#a00000" />
					) : (
						<View style={styles.container}>
							<View style={styles.rowContainer}>
								<TouchableOpacity
									onPress={() => navigation.navigate("Schedule")}
									style={styles.btn}
								>
									<Image style={styles.img} source={imgSchedule} />
								</TouchableOpacity>
								<TouchableOpacity
									onPress={() => navigation.navigate("Profile")}
									style={styles.btn}
								>
									<Image style={styles.img} source={imgUser} />
								</TouchableOpacity>
							</View>

							<View style={styles.rowContainer}>
								<TouchableOpacity
									onPress={() => navigation.navigate("Announcement")}
									style={styles.btn}
								>
									<Image style={styles.img} source={imgNotice} />
								</TouchableOpacity>
								<TouchableOpacity
									onPress={this.handleLogout}
									style={styles.btn}
								>
									<Text style={{ fontSize: 20, fontWeight: "900" }}>
										Log Out
									</Text>
								</TouchableOpacity>
							</View>
							{isError && (
								<Text style={{ color: "red" }}>Something Went Wrong</Text>
							)}
						</View>
					)}
				</Content>
			</Container>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		paddingTop: 60,
		alignItems: "center"
	},
	btn: {
		borderColor: "black",
		borderWidth: 5,
		margin: 5,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
		backgroundColor: "#f2e4d7",
		height: 140,
		width: 140
	},
	img: {
		height: 110,
		width: 110
	},
	rowContainer: {
		flexDirection: "row"
	}
});
const mapStateToProps = state => ({
	logout: state.logout
});
const mapDispatchToProps = dispatch => ({
	actions: {
		onLogout: bindActionCreators(onLogout, dispatch)
	}
});
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Selection);
