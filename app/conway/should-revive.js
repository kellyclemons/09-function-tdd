import aliveNeighbors from './alive-neighbors';

export default function shouldRevive(arr) {
  if (aliveNeighbors(arr) ===  3) {
    return true;
  }

  return false;
}
