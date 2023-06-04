import { FILTER_TYPE } from "../FiltersList/FiltersList";

export interface IRequestTitleProps {
  readonly orderNumber: string;
  readonly date_at?: string;
  readonly date_to?: string;
  readonly views: number;
  readonly created_at: string;
  readonly type: Omit<FILTER_TYPE, "ALL">;
}
