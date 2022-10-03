import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import { spacing } from "../utils/sizes";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/roundedButton";
export const Focus = ({ addSubject }) => {
	const [subject, setSubject] = useState(null);

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					onChangeText={setSubject}
					label="What would you like to focus on?"
				/>
				<View style={styles.button}>
					<RoundedButton
						title="+"
						size={50}
						onPress={() => addSubject(subject)}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 0.2,
		paddingTop: 20,
	},
	textInput: {
		flex: 1,
		marginRight: spacing.sm,
	},
	button: {
		justifyContent: "center",
	},
	inputContainer: {
		flex: 0.5,
		padding: spacing.lg,
		justifyContent: "flex-start",
		flexDirection: "row",
		alignItems: "center",
	},
});
