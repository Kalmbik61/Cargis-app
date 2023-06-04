import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/styles";

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginVertical: 4,
  },
  text: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    color: COLORS.black,
  },
});

export default styles;
