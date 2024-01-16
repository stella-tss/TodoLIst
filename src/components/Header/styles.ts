import { StyleSheet } from "react-native";
import { theme } from "../../themes";

export const styles = StyleSheet.create({
	headerConteiner: {
		backgroundColor: theme.colors.base.gray700,
		alignItems: "center",
		justifyContent: "center",
		width: 1000,
		height: 173,
		position: "relative",
	},
	form:{
		position: "absolute",
		bottom: -25,
		height: 50,
		width: 300,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	input:{
		height: 51,
		width: 280,
		backgroundColor: theme.colors.base.gray500,
		borderRadius: 10,
		padding: 16,
		fontSize: 16,
		borderColor: theme.colors.base.gray700,
		borderWidth: 1,
		alignItems: "center",
		marginRight: 10,
	},
	button:{
		height: 50,
		width: 55,
		backgroundColor: theme.colors.brand.blue_dark,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
	}
});
