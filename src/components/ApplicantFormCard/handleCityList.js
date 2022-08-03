import { changeItemIndex } from "./changeItemIndex";
import { sortWithName } from "./sortWithName";

export const handleCityList = (cities, country) => {
  sortWithName(cities);
  console.log(country);
  if (country === "Turkey") {
    changeItemIndex(cities, "Istanbul", 0);
    changeItemIndex(cities, "Ankara", 1);
    changeItemIndex(cities, "İzmir", 2);
  }

  return cities;
};
