import { FILTER_TYPE } from "../../FiltersList/FiltersList";

export interface ITagProps {
  readonly type: Omit<FILTER_TYPE, "ALL">;
}
