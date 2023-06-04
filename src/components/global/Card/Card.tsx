import { View } from "react-native";
import { ICardProps } from "./Card.props";
import styles from "./Card.styles";
import { stylesOf } from "classnames-rn";

const st = stylesOf(styles);

export default function Card({ ...props }: ICardProps) {
  return (
    <View style={[st("wrapper"), props.wrapperStyles]}>{props.children}</View>
  );
}
