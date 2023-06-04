import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../styles/styles";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },

  contentWrapper: {
    paddingVertical: 16,
    borderTopColor: COLORS.lightGrey,
    borderTopWidth: 1,
  },
  additionalWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  additional: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "48%",
  },
  textGrey: {
    color: COLORS.blueGrey,
  },
  btns: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    width: "100%",
    marginTop: 32,
  },
  btnWrapper: {
    width: "48%",
  },
  btnInfoText: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: "600",
  },
  btnReviewWrapper: {
    backgroundColor: COLORS.primary,
  },
  btnReviewText: {
    color: "#fff",
    fontSize: windowWidth < 380 ? 12 : 14,
    fontWeight: "600",
  },
});

export default styles;
