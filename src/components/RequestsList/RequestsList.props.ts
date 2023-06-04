import { IOrderListResponse } from "../../service/getOrdersList";
import { FILTER_TYPE } from "../FiltersList/FiltersList";

export interface IRequestsListProps {
  readonly currentFilter: FILTER_TYPE;
}
