export type TCountrieFetchingStatus = "idle" | "success" | "pending" | "error";

export interface ICountry {
  name: {
    common: string;
    official: string;
    nativeName: { [key: string]: { common: string } };
  };
  capital: string[];
  borders: string[];
  region: string;
  subregion: string;
  population: number;
  area: number;
  currencies: object;
  tld: string[];
  continents: string[];
  languages: object;
  flags: {
    png: string;
    alt: string;
    svg: string;
  };
  coatOfArms: {
    svg: string;
    png: string;
  };
  cca3: string;
}
