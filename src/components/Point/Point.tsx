import { View, Text } from "react-native";
import { IPointProps, POINT_TYPE } from "./Point.props";
import styles from "./Point.styles";
import { stylesOf } from "classnames-rn";
import FromIcon from "../../assets/icons/from.svg";
import ToIcon from "../../assets/icons/to.svg";

const st = stylesOf(styles);

const Icons = [<FromIcon />, <ToIcon />];

export default function Point({ ...props }: IPointProps) {
  return (
    <View style={st("wrapper")}>
      {Icons[props.type]}
      <Text style={st("text")}>{props.address}</Text>
    </View>
  );
}
