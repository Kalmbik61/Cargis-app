import { StyleSheet } from "react-native";
import { COLORS } from "../../../styles/styles";

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 16,
    elevation: 5,
    borderRadius: 10,
    shadowColor: COLORS.lightGrey,
    shadowOpacity: 0.7,
    shadowOffset: { width: 0, height: 20 },
  },
});

export default styles;
