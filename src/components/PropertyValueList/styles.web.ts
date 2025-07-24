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
    flexShrink: 0,
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

// CSS-in-JS стили для веб-версии
export const webStyles = {
  container: {
    padding: '8px 16px',
  },
  itemContainer: {
    margin: '4px 0',
    display: 'flex',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
  fixedItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  property: {
    fontWeight: '500',
    fontSize: '14px',
    color: '#666666',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  fixedProperty: {
    marginRight: '12px',
    flexShrink: 0,
    minWidth: '120px',
  },
  responsiveProperty: {
    marginBottom: '2px',
  },
  value: {
    fontSize: '14px',
    color: '#333333',
    lineHeight: '20px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  fixedValue: {
    flex: 1,
  },
  responsiveValue: {
    marginLeft: 0,
  },
};