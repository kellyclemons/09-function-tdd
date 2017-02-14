export default function aliveNeighbor(arr) {
  let count = 0;

  // given an array arr return the number of times true happens
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i]) {
      count += 1;
    }
  }

  return count;
}
