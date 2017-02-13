export default function sum(arr) {
  let sumValue = 0;

  for (let i = 0; i < arr.length; i ++) {
    sumValue = sumValue + arr[i];
  }

  return sumValue;
}
