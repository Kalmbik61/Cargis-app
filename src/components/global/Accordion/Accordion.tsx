import { useEffect, useRef, useState } from "react";
import { View, Animated, LayoutAnimation, Pressable } from "react-native";
import { toggleAnimation } from "./toggleAnimation";
import { styles } from "./Accordion.styles";
import { IAccordionProps } from "./Accordion.props";
import { stylesOf } from "classnames-rn";

import Arrow from "../../../assets/icons/arrow.svg";
import Collapsible from "react-native-collapsible";

const st = stylesOf(styles);

const Accordion = ({ ...props }: IAccordionProps) => {
  const {
    containerStyle = {},
    animationDuration = 300,
    isOpen = false,
    onPress = undefined,
  } = props;

  const [showContent, setShowContent] = useState<boolean>(isOpen);
  const animationController = useRef(
    new Animated.Value(isOpen ? 1 : 0),
  ).current;

  useEffect(() => {
    if (showContent && !isOpen) {
      toggleListItem();
    }
  }, [isOpen]);
  const toggleListItem = () => {
    const config = {
      duration: animationDuration,
      toValue: showContent ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animationController, config).start();
    LayoutAnimation.configureNext(toggleAnimation(animationDuration));
    if (onPress) onPress();
    setShowContent(!showContent);
  };
  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  return (
    <View style={[st("container"), containerStyle]}>
      <Pressable onPress={() => toggleListItem()}>
        <View style={st("titleContainer")}>
          {props.title}
          <Animated.View style={{ transform: [{ rotate: arrowTransform }] }}>
            <Arrow width={10} height={10} style={st("arrow")} />
          </Animated.View>
        </View>
      </Pressable>
      <Collapsible collapsed={!showContent}>{props.children}</Collapsible>
    </View>
  );
};
export default Accordion;
