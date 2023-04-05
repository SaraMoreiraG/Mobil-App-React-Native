import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../constants";

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: SIZES.small,
	},
	headerTitle: {
		fontSize: SIZES.large,
		fontFamily: FONT.medium,
		color: COLORS.primary,
	},
	scroll: {
		flex: 1,
		padding: SIZES.medium
	}
});

export default styles;
