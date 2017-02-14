export default function cardValue(card) {
  if (card === 'jack') {
    return 10;
  }

  if (card === 'queen') {
    return 10;
  }

  if (card === 'king') {
    return 10;
  }

  if (card === 'ace') {
    return 11;
  }

  return parseInt(card);
}
