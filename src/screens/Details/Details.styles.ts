import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/styles";

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  content: {
    padding: 16,
    marginBottom: 40,
    gap: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    color: COLORS.black,
  },
  contacts: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 16,
  },
  contactsTitle: {
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 24,
    color: COLORS.primary,
  },
  bottom: {
    position: "absolute",
    width: "100%",
    left: 0,
    bottom: 0,
    right: 0,
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: "#FFF",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    elevation: 10,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: { width: -4, height: 20 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
  },
  btnWrapper: {
    width: "100%",
    backgroundColor: COLORS.primary,
  },
  btn: {
    color: "#fff",
  },
});

export default styles;
