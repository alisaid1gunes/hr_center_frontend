export const sortWithName = (array) => {
  array.sort(function (a, b) {
    let x = a.name.toUpperCase(),
      y = b.name.toUpperCase();
    return x == y ? 0 : x > y ? 1 : -1;
  });
  return array;
};
