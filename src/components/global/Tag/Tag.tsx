import { View, Text } from "react-native";
import { ITagProps } from "./Tag.props";
import styles from "./Tag.styles";
import { stylesOf } from "classnames-rn";
import { FILTER_TYPE } from "../../FiltersList/FiltersList";
import { useMemo } from "react";

const st = stylesOf(styles);

export default function Tag({ ...props }: ITagProps) {
  const isPause = props.type === FILTER_TYPE.PAUSE;
  const isActive = props.type === FILTER_TYPE.ACTIVE;
  const isCompleted = props.type === FILTER_TYPE.COMPLETED;

  const text = useMemo(() => {
    if (isPause) return "На паузе";
    if (isActive) return "Активная";
    if (isCompleted) return "Завершена";
  }, [props.type]);

  return (
    <View
      style={st("wrapper", {
        wrapperPause: isPause,
        wrapperActive: isActive,
        wrapperComplete: isCompleted,
      })}
    >
      <Text
        style={st("text", {
          textPause: isPause,
          textActive: isActive,
          textComplete: isCompleted,
        })}
      >
        {text}
      </Text>
    </View>
  );
}
