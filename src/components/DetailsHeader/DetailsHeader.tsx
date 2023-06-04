import { SafeAreaView, TouchableOpacity, View } from "react-native";
import RequestTitle from "../RequestTitle/RequestTitle";
import ReturnArrow from "../../assets/icons/return_arrow.svg";
import { IDetailsHeaderProps } from "./DetailsHeader.props";
import styles from "./DetailsHeader.styles";
import { stylesOf } from "classnames-rn";
import { IDetailsParams } from "../../../App";

const st = stylesOf(styles);

export default function DetailsHeader({ ...props }: IDetailsHeaderProps) {
  const onReturnHandler = () => {
    props.stackProps.navigation.goBack();
  };
  const params = props.stackProps.route.params as Readonly<IDetailsParams>;
  return (
    <View style={st("wrapper")}>
      <TouchableOpacity onPress={onReturnHandler}>
        <ReturnArrow />
      </TouchableOpacity>
      <RequestTitle {...params} />
    </View>
  );
}
