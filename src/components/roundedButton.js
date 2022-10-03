import React from "react";
import { TouchableOpacity, Text, StyleSheet, Platform } from "react-native";
import { colors } from "../utils/colors";

export const RoundedButton = ({
	style = {},
	textStyle = {},
	size = 50,
	...props
}) => {
	return (
		<TouchableOpacity
			style={[styles(size).radius, style]}
			onPress={props.onPress}
		>
			<Text style={[styles(size).text, textStyle]}>{props.title}</Text>
		</TouchableOpacity>
	);
};

const styles = (size) => ({
	radius: {
		borderRadius: size / 2,
		width: size,
		height: size,
		alignItems: "center",
		justifyContent: "center",
		borderColor: colors.white,
		borderWidth: 2,
	},
	text: {
		color: colors.white,
		fontSize: Platform.OS === "ios" ? size / 3 : size / 4,
	},
});
