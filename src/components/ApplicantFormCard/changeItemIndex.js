export const changeItemIndex = (array, itemName, index) => {
  const fromIndex = array.findIndex((item) => {
    return item.name === itemName;
  });
  const toIndex = index;

  const element = array.splice(fromIndex, 1)[0];

  array.splice(toIndex, 0, element);
  return array;
};
