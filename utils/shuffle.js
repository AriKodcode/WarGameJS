export default function shuffle(deck) {
  let count = 0;

  while (count <= 1000) {
    let index1 = Math.floor(Math.random() * deck.length);
    let index2 = Math.floor(Math.random() * deck.length);

    if (index1 !== index2) {
      [deck[index1], deck[index2]] = [deck[index2], deck[index1]];

      count++;
    }
  }
  return deck;
}
