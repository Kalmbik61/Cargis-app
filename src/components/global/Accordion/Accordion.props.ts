import { ReactNode } from "react";
import { ViewStyle } from "react-native";

export interface IAccordionProps {
  readonly containerStyle?: ViewStyle;
  readonly animationDuration?: number;
  readonly isOpen?: boolean;
  readonly title: ReactNode;
  readonly children: ReactNode;

  onPress?(): void;
}
