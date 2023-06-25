import { INetwork } from "../../services/getNetwork.models";

export interface IIModalNetworkProps {
    onClose: () => void;
    netWork: INetwork;
  }