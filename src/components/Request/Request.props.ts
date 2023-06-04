import { ICompany, IOrder } from "../../service/getOrdersList";

export interface IRequestProps {
  readonly order: IOrder;
}

export interface IRequestEmployerProps {
  readonly company: ICompany;
}

export interface IRequestDestinationProps {
  readonly load_ad: string;
  readonly unload_ad: string;
}

export interface IRequestTarifProps {
  readonly tarif: number;
}

export interface IRequestTonnageProps {
  readonly balance: number;
  readonly balance_to: number;
}

export interface IRequestDistanceProps {
  readonly distance: number;
}

export interface IRequestCargoTypeProps {
  readonly type: string;
}

export interface IRequestPeriodProps {
  readonly date_at: string;
  readonly date_to: string;
}

export interface IRequestAdditionalBlockProps {
  readonly order: IOrder;
  readonly period?: boolean;
}
