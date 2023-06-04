import { View, Text } from "react-native";
import { ITextBlockProps } from "./TextBlock.props";
import styles from "./TextBlock.styles";
import { stylesOf } from "classnames-rn";

const st = stylesOf(styles);

export default function TextBlock({ ...props }: ITextBlockProps) {
  return (
    <View style={[st("wrapper"), props.wrapperStyle]}>
      {!!props.title && <Text style={st("title")}>{props.title}</Text>}
      <View style={st("content")}>{props.children}</View>
      {!!props.titleBottom && (
        <Text style={st("title")}>{props.titleBottom}</Text>
      )}
    </View>
  );
}
