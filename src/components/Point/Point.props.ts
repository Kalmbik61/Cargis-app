export enum POINT_TYPE {
  FROM,
  TO,
}

export interface IPointProps {
  readonly type: POINT_TYPE;
  readonly address: string;
}
