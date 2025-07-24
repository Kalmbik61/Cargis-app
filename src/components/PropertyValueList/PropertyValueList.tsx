import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { styles } from './styles';

interface PropertyValuePair {
  property: string;
  value: string;
}

interface PropertyValueListProps {
  items: PropertyValuePair[];
  propertyWidth?: number;
  breakpoint?: number;
}

export const PropertyValueList: React.FC<PropertyValueListProps> = ({
  items,
  propertyWidth = 120,
  breakpoint = 300,
}) => {
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
  
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setScreenWidth(window.width);
    });

    return () => subscription?.remove();
  }, []);

  const useResponsiveLayout = screenWidth < breakpoint;

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View
          key={index}
          style={[
            styles.itemContainer,
            useResponsiveLayout ? styles.responsiveItem : styles.fixedItem,
          ]}
        >
          <Text
            style={[
              styles.property,
              useResponsiveLayout
                ? styles.responsiveProperty
                : [styles.fixedProperty, { width: propertyWidth }],
            ]}
          >
            {item.property}
          </Text>
          <Text
            style={[
              styles.value,
              useResponsiveLayout ? styles.responsiveValue : styles.fixedValue,
            ]}
          >
            {item.value}
          </Text>
        </View>
      ))}
    </View>
  );
};