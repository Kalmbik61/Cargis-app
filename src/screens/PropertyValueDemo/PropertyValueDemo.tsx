import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { PropertyValueList } from '../../components/PropertyValueList';

const PropertyValueDemo: React.FC = () => {
  const demoData = [
    {
      property: 'Имя',
      value: 'Иван Иванович Петров',
    },
    {
      property: 'Email',
      value: 'ivan.petrov@example.com',
    },
    {
      property: 'Телефон',
      value: '+7 (999) 123-45-67',
    },
    {
      property: 'Адрес',
      value: 'г. Москва, ул. Тверская, д. 1, кв. 123',
    },
    {
      property: 'Должность',
      value: 'Ведущий разработчик программного обеспечения',
    },
    {
      property: 'Опыт работы',
      value: '5 лет',
    },
    {
      property: 'Образование',
      value: 'Московский государственный технический университет им. Н.Э. Баумана',
    },
    {
      property: 'Навыки',
      value: 'React Native, TypeScript, JavaScript, Python, Git, Docker',
    },
    {
      property: 'Дополнительная информация',
      value: 'Опыт работы с большими проектами, знание архитектурных паттернов, участие в code review',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Демо PropertyValueList</Text>
        <Text style={styles.description}>
          Компонент автоматически адаптируется к ширине экрана.
          При сужении окна значения переносятся под названия свойств.
        </Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Пример данных:</Text>
        <PropertyValueList 
          items={demoData}
          propertyWidth={140}
          breakpoint={350}
        />
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>С узкой шириной свойств:</Text>
        <PropertyValueList 
          items={demoData}
          propertyWidth={80}
          breakpoint={300}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
});

export default PropertyValueDemo;