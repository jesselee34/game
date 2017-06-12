// Distribute is used to figure out the x and y values given a grid box size and index.
export const distribute = (index, size) => {
  return index * size + 5;
};