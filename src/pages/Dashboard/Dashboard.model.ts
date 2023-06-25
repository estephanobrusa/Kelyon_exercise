import { Country, State, Status } from "../../services/getNetwork.models";

export const columns = [
    "name",
    "country",
    "state",
    "city",
    "status",
    "approver user id",
    "actions",
  ];

  export interface Iform {
    name: string | "";
    country: Country | "";
    state: State | "";
    status: Status | "";
    city: string | "";
  }
