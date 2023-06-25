export interface INetwork {
    id:             string;
    city:           City;
    name:           string;
    state:          State;
    author:         Author;
    status:         Status;
    country:        Country;
    visible:        boolean;
    createdAt:      Date;
    updatedAt:      Date;
    approverUserId: string;
}

export interface Author {
    dob:      Date;
    name:     string;
    about:    string;
    address:  string;
    company:  string;
    location: Location;
}

export interface Location {
    lat:  number;
    long: number;
}

export enum City {
    Empty = "-",
}

export enum Country {
    Au = "AU",
    Nz = "NZ",
}

export enum State {
    Nsw = "NSW",
    Sa = "SA",
    Wa = "WA",
}

export enum Status {
    Active = "active",
    Inactive = "inactive",
}
