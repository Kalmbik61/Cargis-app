import { useState } from "react";
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import FiltersList, {
  FILTER_TYPE,
} from "../../components/FiltersList/FiltersList";
import RequestsList from "../../components/RequestsList/RequestsList";
import { ROUTES } from "../../../utils/routes";

const FilterScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [selectedFilter, setSelectedFilter] = useState(FILTER_TYPE.ALL);

  const onSelectorFilter = (f: FILTER_TYPE) => setSelectedFilter(f);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FiltersList
        selectedFilter={selectedFilter}
        onSelectFilter={onSelectorFilter}
      />
      <View style={styles.demoButtonContainer}>
        <TouchableOpacity 
          style={styles.demoButton}
          onPress={() => navigation.navigate(ROUTES.PROPERTY_VALUE_DEMO)}
        >
          <Text style={styles.demoButtonText}>
            📋 Демо PropertyValueList
          </Text>
        </TouchableOpacity>
      </View>
      <RequestsList currentFilter={selectedFilter} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  demoButtonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  demoButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  demoButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default FilterScreen;
