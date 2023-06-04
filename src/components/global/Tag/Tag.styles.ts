import { StyleSheet } from "react-native";
import { COLORS } from "../../../styles/styles";

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 1,
    paddingHorizontal: 8,
    borderRadius: 15,
  },
  wrapperActive: {
    backgroundColor: COLORS.lightPrimary,
  },
  wrapperPause: {
    backgroundColor: COLORS.lightPrimary,
  },
  wrapperComplete: {
    backgroundColor: COLORS.lightGreen,
  },
  text: {
    fontWeight: "500",
    fontSize: 11,
    lineHeight: 16,
  },
  textPause: {
    color: COLORS.halfBlack,
  },
  textActive: {
    color: COLORS.primary,
  },
  textComplete: {
    color: COLORS.green,
  },
});

export default styles;
