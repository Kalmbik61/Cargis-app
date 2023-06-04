import { FILTER_TYPE } from "./FiltersList";

export interface IFiltersListProps {
  readonly selectedFilter: FILTER_TYPE;

  onSelectFilter(f: FILTER_TYPE): void;
}
