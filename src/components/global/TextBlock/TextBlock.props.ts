import { ReactNode } from "react";
import { ViewStyle } from "react-native";

export interface ITextBlockProps {
  readonly wrapperStyle?: ViewStyle;
  readonly children: ReactNode;
  readonly title?: string;
  readonly titleBottom?: string;
}
