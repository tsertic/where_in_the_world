import { ICountry } from "@/types/index.t";

//add commas to big number, 100000 to 1,000,000
export const makeReadableNumber = (num: number): string => {
  const numToString = String(num).split("").reverse();
  let readableNumArray = [];
  for (let i = 0; i < numToString.length; i++) {
    readableNumArray.push(numToString[i]);
    if ((i + 1) % 3 === 0 && i !== numToString.length - 1) {
      readableNumArray.push(",");
    }
  }
  return readableNumArray.reverse().join("");
};

//remove white spaces and replace with '-' ,all to lowercase , used for creating slug from name.official
export const rmWhiteAndLowercase = (name: string): string => {
  return name.replaceAll(" ", "-").toLowerCase();
};

//transform object of {ger:Germany} to array of strings ['[ger]: Germany']
export const getNativeNamesArray = (names: {
  [key: string]: { common: string };
}): string[] => {
  const keysOfNames = Object.keys(names);
  const arrayOfKeyValue: string[] = [];
  if (keysOfNames.length === 1) {
    arrayOfKeyValue.push(`${names[keysOfNames[0]].common}`);
    return arrayOfKeyValue;
  } else {
    for (let value of keysOfNames) {
      arrayOfKeyValue.push(`[${value}] -  ${names[value].common}`);
    }

    return arrayOfKeyValue;
  }
};

//filter border countries
export const filterBorderCountries = (
  countries: ICountry[],
  borderList: string[]
): ICountry[] => {
  let borderCountries: ICountry[] = countries.filter((country) =>
    borderList.includes(country.cca3)
  );

  return borderCountries;
};
