import React from "react";
import { Text, View, ScrollView } from "react-native";
import { verify, getSchedule } from "../../api/auth";

export default class Schedule extends React.Component {
	static navigationOptions = {
		title: "Schedule",
		headerStyle: {
			backgroundColor: "#a00000"
		},
		headerTintColor: "#fff",
		headerTitleStyle: {
			fontWeight: "bold"
		}
	};
	state = {
		schedule: []
	};
	componentDidMount() {
		verify()
			.then(res => {
				if (res === false) {
					this.props.navigation.navigate("Home");
				} else {
					getSchedule({ class: res.class, section: res.section })
						.then(rs => {
							this.setState({
								schedule: rs.data
							});
						})
						.catch(err => {
							console.warn(err);
						});
				}
			})
			.catch(err => {
				console.warn(err);
			});
	}
	render() {
		return (
			<View style={{ alignItems: "center", flex: 1 }}>
				<ScrollView
					contentContainerStyle={{ paddingBottom: 20 }}
					keyboardShouldPersistTaps="never"
				>
					{this.state.schedule &&
						this.state.schedule.map(sch => {
							return (
								<View
									style={{
										alignItems: "center",
										fontWeight: "bold",
										backgroundColor: "#f2e4d7",
										margin: 20,
										padding: 20,
										borderWidth: 4,
										borderColor: "black"
									}}
									key={sch._id}
								>
									<Text style={{ fontSize: 20 }}>{sch.day}</Text>
									{sch.subjects.map((subj, index) => {
										return <Text key={index}>{subj}</Text>;
									})}
								</View>
							);
						})}
				</ScrollView>
			</View>
		);
	}
}
