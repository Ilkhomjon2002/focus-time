import React, { useState } from "react";
import { View, Text, StyleSheet, Platform, Vibration } from "react-native";
import { Countdown } from "./countdown";
import { fontSizes, spacing } from "../utils/sizes";
import { colors } from "../utils/colors";
import { RoundedButton } from "../components/roundedButton";
import { ProgressBar } from "react-native-paper";
import { Timing } from "./Timing";
import { useKeepAwake } from "expo-keep-awake";
const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
	1 * ONE_SECOND_IN_MS,
	1 * ONE_SECOND_IN_MS,
	1 * ONE_SECOND_IN_MS,
	1 * ONE_SECOND_IN_MS,
	1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
	useKeepAwake();
	const [isStarted, setIsStarted] = useState(false);
	const [progress, setProgress] = useState(1);
	const [minutes, setMinutes] = useState(0.1);
	const onEnd = (reset) => {
		Vibration.vibrate(PATTERN);
		setIsStarted(false);
		setProgress(1);
		reset();
		onTimerEnd(focusSubject);
	};
	return (
		<View style={styles.container}>
			<View style={styles.countdown}>
				<Countdown
					minutes={minutes}
					isPaused={!isStarted}
					onProgress={setProgress}
					onEnd={onEnd}
				/>
				<View style={{ paddingTop: spacing.xxl }}>
					<Text style={styles.title}>Focusing on:</Text>
					<Text style={styles.task}>{focusSubject}</Text>
				</View>
			</View>
			<View style={{ paddingTop: spacing.xxl }}>
				<ProgressBar
					color={colors.progressBar}
					style={{ height: spacing.sm }}
					progress={progress}
				/>
			</View>
			<View style={styles.timingWrapper}>
				<Timing onChangeTime={setMinutes} />
			</View>

			<View style={styles.buttonWrapper}>
				{!isStarted && (
					<RoundedButton
						size={100}
						title="start"
						onPress={() => setIsStarted(true)}
					/>
				)}
				{isStarted && (
					<RoundedButton
						size={100}
						title="pause"
						onPress={() => setIsStarted(false)}
					/>
				)}
			</View>
			<View style={styles.clearSubject}>
				<RoundedButton title="-" size={50} onPress={clearSubject} />
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	countdown: {
		flex: 0.5,
		alignItems: "center",
		justifyContent: "center",
	},
	timingWrapper: {
		flex: 0.1,
		flexDirection: "row",
		paddingTop: spacing.xxl,
	},
	buttonWrapper: {
		flex: 0.3,
		flexDirection: "row",
		padding: spacing.xxl,

		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		color: colors.white,
		fontWeight: "bold",
		textAlign: "center",
	},
	task: {
		textAlign: "center",
		color: colors.white,
	},
	clearSubject: {
		flexDirection: "row",
		justifyContent: "center",
	},
});
