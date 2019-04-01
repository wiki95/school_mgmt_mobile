import React from "react";
import { Text, View, Switch, StyleSheet, ScrollView } from "react-native";
import { verify, getNotices } from "../../api/auth";

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
	state = {
		isSwitch: false,
		notices: [],
		whole: {},
		individual: {}
	};
	getNoticesFunc = val => {
		getNotices(val)
			.then(notice => {
				this.setState({
					notices: notice.data
				});
			})
			.catch(err => {
				console.warn(err);
			});
	};
	componentDidMount() {
		verify()
			.then(res => {
				if (res === false) {
					this.props.navigation.navigate("Home");
				} else {
					this.setState({
						whole: { class: res.class, section: res.section },
						individual: { gr_num: res.gr_num }
					});
					this.getNoticesFunc({ class: res.class, section: res.section });
				}
			})
			.catch(err => {
				console.warn(err);
			});
	}
	handleSwitch = () => {
		this.setState(
			{
				isSwitch: !this.state.isSwitch
			},
			() => {
				if (this.state.isSwitch === false) {
					this.getNoticesFunc(this.state.whole);
				} else {
					this.getNoticesFunc(this.state.individual);
				}
			}
		);
	};
	render() {
		const { isSwitch, notices } = this.state;
		return (
			<View style={{ flex: 1 }}>
				<View style={styles.switchContainer}>
					<Text style={{ fontSize: 15, fontWeight: "bold" }}>
						{isSwitch ? "Individual" : "Whole Class"}
					</Text>
					<Switch
						trackColor="black"
						thumbColor="#a00000"
						onValueChange={this.handleSwitch}
						value={isSwitch}
					/>
				</View>

				<ScrollView
					contentContainerStyle={{ paddingBottom: 20 }}
					keyboardShouldPersistTaps="never"
				>
					<View style={{ padding: 10 }}>
						<View style={styles.listContainer}>
							<Text
								style={{
									textAlign: "center",
									fontSize: 20,
									fontWeight: "bold"
								}}
							>
								{isSwitch ? "For Individual" : "For Whole Class"}
							</Text>
							{notices.map(notice => {
								return (
									<View key={notice._id}>
										<View style={styles.listItemContainer}>
											<Text>{notice.message}</Text>
											<Text>{notice.date}</Text>
										</View>
									</View>
								);
							})}
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	switchContainer: {
		alignSelf: "flex-end",
		padding: 10
	},
	listContainer: {
		alignItems: "center",
		padding: 10
	},
	listItemContainer: {
		alignSelf: "flex-start",
		padding: 5,
		backgroundColor: "#f2e4d7",
		borderWidth: 2,
		borderRadius: 5,
		marginTop: 10
	}
});
