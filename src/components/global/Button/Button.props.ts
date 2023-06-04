import { ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native";

export interface IButtonProps {
  readonly wrapperStyle?: ViewStyle;
  readonly textStyle?: TextStyle;
  readonly children: ReactNode;
  readonly active?: boolean;

  onPress?(): void;
}
