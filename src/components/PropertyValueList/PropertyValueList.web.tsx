import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles, webStyles } from './styles.web';

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
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 300
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const useResponsiveLayout = windowWidth < breakpoint;

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