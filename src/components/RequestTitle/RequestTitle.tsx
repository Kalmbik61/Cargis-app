import { View, Text } from "react-native";
import { IRequestTitleProps } from "./RequestTitle.props";
import { stylesOf } from "classnames-rn";
import styles from "./RequestTitle.styles";
import Tag from "../global/Tag/Tag";
import { getTime } from "../../../utils/getTime";

import Clock from "../../assets/icons/clock.svg";
import Eye from "../../assets/icons/eye.svg";

const st = stylesOf(styles);

export default function RequestTitle({ ...props }: IRequestTitleProps) {
  return (
    <View style={st("wrapper")}>
      <View style={st("top")}>
        <Text>Заявка № {props.orderNumber}</Text>
        <Tag type={props.type} />
      </View>
      {/* Все это можно вынести в отдельные компонеты */}
      <View style={st("bottom")}>
        <Text style={st("bottomText")}>От {getTime(props.created_at)}</Text>
        {!!props.date_at && !!props.date_to && (
          <View style={st("bottomAdditional")}>
            <Clock />

            <Text style={st("bottomText")}>
              {getTime(props.date_at)} - {getTime(props.date_to)}
            </Text>
          </View>
        )}
        <View style={st("bottomAdditional")}>
          <Eye />
          <Text style={st("bottomText")}>Просмотры: {props.views}</Text>
        </View>
      </View>
    </View>
  );
}
