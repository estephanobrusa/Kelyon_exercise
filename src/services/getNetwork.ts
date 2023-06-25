import { INetwork } from "./getNetwork.models";

export const getNetwork = async (): Promise<INetwork[]> => {
    const response = await fetch(`https://api.npoint.io/fa340e420e4b9c58cea6`);
    const network = await response.json();
    return network;
}