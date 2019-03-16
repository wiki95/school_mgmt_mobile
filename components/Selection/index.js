import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Container, Content, Spinner } from "native-base";
import imgSchedule from "../../images/calendar.png";
import imgAttendance from "../../images/atnd.png";
import imgNotice from "../../images/bull-horn-announcer.png";
import imgFees from "../../images/payment-method.png";
import imgResult from "../../images/id-card.png";

class Selection extends React.Component {
	static navigationOptions = {
		title: "ABC STUDENT",
		headerStyle: {
			backgroundColor: "#a00000"
		},
		headerTintColor: "#fff",
		headerTitleStyle: {
			fontWeight: "bold"
		}
	};
	state = {
		isLoading: false
	};
	componentDidMount() {
		//console.warn(this.props.navigation.getParam("nic"));
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
									onPress={() => navigation.navigate("Attendance")}
									style={styles.btn}
								>
									<Image style={styles.img} source={imgAttendance} />
								</TouchableOpacity>
							</View>

							<View style={styles.rowContainer}>
								<TouchableOpacity
									onPress={() => navigation.navigate("FeeRecord")}
									style={styles.btn}
								>
									<Image style={styles.img} source={imgFees} />
								</TouchableOpacity>
								<TouchableOpacity
									onPress={() => navigation.navigate("Announcement")}
									style={styles.btn}
								>
									<Image style={styles.img} source={imgNotice} />
								</TouchableOpacity>
							</View>
							<View style={styles.rowContainer}>
								<TouchableOpacity
									onPress={() => navigation.navigate("ResultSheet")}
									style={styles.btn}
								>
									<Image style={styles.img} source={imgResult} />
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
		justifyContent: "flex-start",
		alignItems: "center",
		paddingTop: 20
	},
	btn: {
		borderColor: "black",
		borderWidth: 5,
		margin: 5,
		padding: 10,
		borderRadius: 5,
		backgroundColor: "#f2e4d7"
	},
	img: {
		height: 130,
		width: 130
	},
	rowContainer: {
		flexDirection: "row"
	}
});
export default Selection;
