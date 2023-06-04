import { FILTER_TYPE } from "../components/FiltersList/FiltersList";
import { fetcher } from "./http";

export const getOrderList = async (url: string) => {
  const response = await fetcher(
    `v2/order/list?${url}&order_1c_search_is_true=true`,
  );
  const data = await response.json();
  return data;
};

export interface ICompany {
  readonly company_phone?: string;
  readonly short_name: string;
}

export interface IOrder {
  readonly cargo_condition: string;
  readonly cargo_type: string;
  readonly company: ICompany;
  readonly company_id: number;
  readonly create_dt: string;
  readonly ending_dt: string;
  readonly id: number;
  readonly order_number?: string;
  readonly load_dt: string;
  readonly loading_address: string;
  readonly status_1c: Omit<FILTER_TYPE, "ALL">;
  readonly unloading_address: string;
  readonly tonnage_balance_kg: number;
  readonly tonnage_kg: number;
  readonly distance_m: number;
  readonly tariff_c: number;
  readonly views_count: number;
}

export interface IOrderListResponse {
  readonly orders: IOrder[];
  readonly page: number;
  readonly total_page: number;
}
