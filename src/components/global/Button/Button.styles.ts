import { StyleSheet } from "react-native";
import { COLORS } from "../../../styles/styles";

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 70,
    borderColor: COLORS.borderGrey,
    minHeight: 40,
    justifyContent: "center",
  },
  activeWrapper: {
    borderColor: COLORS.primary,
  },
  fillWrapper: {
    backgroundColor: COLORS.primary,
  },
  activeText: {
    color: COLORS.primary,
  },
  text: {
    fontWeight: "500",
    fontSize: 12,
    color: COLORS.halfBlack,
    textAlign: "center",
  },
});

export default styles;
