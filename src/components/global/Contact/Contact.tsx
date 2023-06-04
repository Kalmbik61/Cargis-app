import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Contact.styles";
import { stylesOf } from "classnames-rn";

import Phone from "../../../assets/icons/phone.svg";
import { IContactProps } from "./Contact.props";

const st = stylesOf(styles);

export default function Contact({ phone, name }: IContactProps) {
  return (
    <View style={st("wrapper")}>
      <TouchableOpacity>
        <View style={st("personWrapper")}>
          <Text style={st("person")}>{name}</Text>
          <Phone />
        </View>
      </TouchableOpacity>
      <Text style={st("phone")}>{phone || "Нет телефона"}</Text>
    </View>
  );
}
