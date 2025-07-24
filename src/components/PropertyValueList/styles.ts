import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  itemContainer: {
    marginVertical: 4,
  },
  // Фиксированный макет - значения выровнены по одной линии
  fixedItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  fixedProperty: {
    fontWeight: '500',
    fontSize: 14,
    color: '#666666',
    marginRight: 12,
    flexShrink: 0, // Не сжимается
  },
  fixedValue: {
    fontSize: 14,
    color: '#333333',
    flex: 1,
    flexWrap: 'wrap',
  },
  // Адаптивный макет - значение под названием свойства
  responsiveItem: {
    flexDirection: 'column',
  },
  responsiveProperty: {
    fontWeight: '500',
    fontSize: 14,
    color: '#666666',
    marginBottom: 2,
  },
  responsiveValue: {
    fontSize: 14,
    color: '#333333',
    marginLeft: 0,
  },
  // Общие стили для текста
  property: {
    fontFamily: 'System',
  },
  value: {
    fontFamily: 'System',
    lineHeight: 20,
  },
});