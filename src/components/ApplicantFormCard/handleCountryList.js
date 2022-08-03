import { sortWithName } from "./sortWithName";
import { changeItemIndex } from "./changeItemIndex";

export const handleCountryList = (countries) => {
  sortWithName(countries);
  changeItemIndex(countries, "Turkey", 0);
  return countries;
};
