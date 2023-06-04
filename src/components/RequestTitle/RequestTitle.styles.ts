import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../styles/styles";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  wrapper: {},
  top: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    position: "relative",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "600",
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    gap: 5,
  },
  bottomText: {
    fontSize: windowWidth < 380 ? 9 : 10,
    fontWeight: "400",
    color: COLORS.halfBlack,
  },
  bottomAdditional: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
  },
});

export default styles;
