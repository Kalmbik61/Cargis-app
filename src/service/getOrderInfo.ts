import { IOrder } from "./getOrdersList";
import { fetcher } from "./http";

export const getOrderInfo = async (url: string) => {
  const response = await fetcher(url);
  const data = await response.json();
  return data;
};

export interface IOrderInfo extends IOrder {
  readonly company_inn: string;
  readonly additional_info: string; // - аля комментарий

  readonly consignee: string;
  readonly consignee_contact: string;
  readonly consignee_contact_phone: string;
  readonly consignee_inn: string;

  readonly shipper: string;
  readonly shipper_company_shortname: string;
  readonly shipper_contact: string;
  readonly shipper_contact_phone: string;
  readonly shipper_inn: string;
}
