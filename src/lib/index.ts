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

export const rmWhiteAndLowercase = (name: string): string => {
  return name.replaceAll(" ", "-").toLowerCase();
};
