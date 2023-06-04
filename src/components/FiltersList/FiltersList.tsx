import { View, Text, ScrollView } from "react-native";
import { IFiltersListProps } from "./FiltersList.props";
import { stylesOf } from "classnames-rn";
import styles from "./Filters.styles";
import { useState } from "react";
import Button from "../global/Button/Button";

type Filter = {
  name: string;
  type: FILTER_TYPE;
};

export enum FILTER_TYPE {
  ALL = "ALL",
  ACTIVE = "active",
  COMPLETED = "completed",
  PAUSE = "on_pause",
}

const st = stylesOf(styles);

const filters = [
  { name: "Все", type: FILTER_TYPE.ALL },
  { name: "Активные", type: FILTER_TYPE.ACTIVE },
  { name: "На паузе", type: FILTER_TYPE.PAUSE },
  { name: "Завершенные", type: FILTER_TYPE.COMPLETED },
];

export default function FiltersList({ ...props }: IFiltersListProps) {
  return (
    <View style={st("wrapper")}>
      <ScrollView
        contentContainerStyle={st("filterList")}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {filters.map((f, i) => (
          // в отдельный компонент
          <Button
            key={f.name}
            active={props.selectedFilter === f.type}
            onPress={() => props.onSelectFilter(f.type)}
          >
            {f.name}
          </Button>
        ))}
      </ScrollView>
    </View>
  );
}
