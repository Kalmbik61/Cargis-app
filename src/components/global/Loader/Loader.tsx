import { ActivityIndicator, View } from "react-native";
import { ILoaderProps } from "./Loader.props";
import { COLORS } from "../../../styles/styles";
import { stylesOf } from "classnames-rn";
import styles from "./Loader.styles";

const st = stylesOf(styles);

export default function Loader({ ...props }: ILoaderProps) {
  return (
    <View style={[st("wrapper"), props.styles]}>
      <ActivityIndicator size={props.size || 16} color={COLORS.primary} />
    </View>
  );
}
