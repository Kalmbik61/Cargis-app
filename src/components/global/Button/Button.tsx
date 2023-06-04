import { IButtonProps } from "./Button.props";
import { stylesOf } from "classnames-rn";
import styles from "./Button.styles";
import { View, Text, TouchableOpacity } from "react-native";

const st = stylesOf(styles);

export default function Button({ ...props }: IButtonProps) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={[
          st("wrapper", {
            activeWrapper: props.active,
          }),
          props.wrapperStyle,
        ]}
      >
        <Text
          style={[st("text", { activeText: props.active }), props.textStyle]}
        >
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
