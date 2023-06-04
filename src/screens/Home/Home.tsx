import { useState } from "react";
import { SafeAreaView } from "react-native";
import FiltersList, {
  FILTER_TYPE,
} from "../../components/FiltersList/FiltersList";
import RequestsList from "../../components/RequestsList/RequestsList";

const FilterScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [selectedFilter, setSelectedFilter] = useState(FILTER_TYPE.ALL);

  const onSelectorFilter = (f: FILTER_TYPE) => setSelectedFilter(f);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FiltersList
        selectedFilter={selectedFilter}
        onSelectFilter={onSelectorFilter}
      />
      <RequestsList currentFilter={selectedFilter} />
    </SafeAreaView>
  );
};

export default FilterScreen;
