import { INetwork } from "../../services/getNetwork.models";

export interface ItableCellPropsStyle {
status: string
}

export interface TableProps {
    data?: Array<INetwork>;
    columns: Array<string>;
    removeRow: (id : string) => void
    openModal: (id : string) => void
  }
  