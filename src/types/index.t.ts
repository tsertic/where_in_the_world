export type TCountrieFetchingStatus = "idle" | "success" | "pending" | "error";

export interface ICountry {
  name: {
    common: string;
    official: string;
    nativeName: object;
  };
  capital: string[];
  boarders: string[];
  region: string;
  subregion: string;
  population: number;
  area: number;
  currencies: object;
  tld: string[];
  continents: string[];
  flags: {
    png: string;
    alt: string;
    svg: string;
  };
  coatOfArms: {
    svg: string;
    png: string;
  };
}
