import { StyleSheet } from "react-native";
import { COLORS } from "../../../styles/styles";

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    paddingVertical: 8,
    paddingLeft: 14,
    paddingRight: 8,
    backgroundColor: COLORS.lightGrey,
    borderRadius: 5,
    marginVertical: 4,
  },
  title: {
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: 9,
    letterSpacing: 0.3,
    color: COLORS.halfBlack,
  },
  content: {
    marginVertical: 8,
  },
});

export default styles;
