export default function createCard(rank, suite) {
  let value = 0;
  const listOfCards = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
  if (rank in listOfCards) {
    value = Number(rank);
  } else if (rank === "j") {
    value = 11;
  } else if (rank === "Q") {
    value = 12;
  } else if (rank === "K") {
    value = 13;
  } else if (rank === "A") {
    value = 14;
  }

  let card = {
    rank: rank,
    suite: suite,
    value: value,
  };

  return card;
}
