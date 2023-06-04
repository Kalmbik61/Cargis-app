import { View, Text } from "react-native";
import { IEmployerProps } from "./Employer.props";
import styles from "./Employer.styles";
import { stylesOf } from "classnames-rn";
import Protected from "../../assets/icons/protected.svg";
import Info from "../../assets/icons/info.svg";

const st = stylesOf(styles);

export default function Employer({ ...props }: IEmployerProps) {
  return (
    <View style={st("wrapper")}>
      <Text style={st("text")}>{props.children}</Text>
      {props.protected && <Protected />}
      {props.info && <Info />}
    </View>
  );
}
