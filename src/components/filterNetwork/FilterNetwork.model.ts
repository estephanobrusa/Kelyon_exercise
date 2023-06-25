import { Iform } from "../../pages/Dashboard/Dashboard.model";

export interface IIerrorFilter {
  $error: boolean;
}

export interface IFilterNetwork {
  filter: Iform;
  onSearch: (values: Iform) => void;
}
