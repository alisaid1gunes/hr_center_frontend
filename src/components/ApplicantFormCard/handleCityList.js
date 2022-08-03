import { changeItemIndex } from "./changeItemIndex";
import { sortWithName } from "./sortWithName";

export const handleCityList = (cities) => {
  sortWithName(cities);
  changeItemIndex(cities, "Istanbul", 0);
  changeItemIndex(cities, "Ankara", 1);
  changeItemIndex(cities, "İzmir", 2);
  return cities;
};
