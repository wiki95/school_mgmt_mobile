import React from "react";
import {
	View,
	Image,
	StyleSheet,
	TouchableOpacity,
	AsyncStorage,
	Text
} from "react-native";
import { Container, Content, Spinner } from "native-base";
import imgSchedule from "../../images/calendar.png";
import imgUser from "../../images/user.png";
import imgNotice from "../../images/bull-horn-announcer.png";
import { verify } from "../../api/auth";

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
	state = {
		isLoading: false,
		token: "",
		student: []
	};
	async componentDidMount() {
		const token = await AsyncStorage.getItem("Token");
		verify(token).then(res => {
			if (!res) {
				this.props.navigation.navigate("Home");
			}
		});
	}
	render() {
		const { navigation } = this.props;
		return (
			<Container>
				<Content>
					{this.state.isLoading ? (
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
									onPress={() => navigation.navigate("Announcement")}
									style={styles.btn}
								>
									<Text style={{ fontSize: 20, fontWeight: "900" }}>
										Log Out
									</Text>
								</TouchableOpacity>
							</View>
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
export default Selection;
