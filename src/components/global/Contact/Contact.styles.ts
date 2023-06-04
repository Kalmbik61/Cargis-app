import { StyleSheet } from "react-native";
import { COLORS } from "../../../styles/styles";

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  personWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  person: {
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 24,
    color: COLORS.black,
  },
  phone: {
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 24,
    color: COLORS.primary,
  },
});

export default styles;
