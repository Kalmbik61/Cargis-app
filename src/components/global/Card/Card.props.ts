import { ReactNode } from "react";
import { ViewStyle } from "react-native";

export interface ICardProps {
  readonly children: ReactNode;
  readonly wrapperStyles?: ViewStyle;
}
