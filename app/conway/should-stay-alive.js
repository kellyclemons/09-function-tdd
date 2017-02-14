import aliveNeighbors from './alive-neighbors';
export default function shouldStay(a) {
  if (aliveNeighbors(a) >= 4 || aliveNeighbors(a) === 0) {
    return false;
  }

  return true;
}
