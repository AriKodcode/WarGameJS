import compareCards from "../utils/compareCards.js";
export default function playRound(player1, player2) {
  let cardPlayer1 = player1["hand"].pop(0);
  let cardPlayer2 = player2["hand"].pop(0);

  if (compareCards(cardPlayer1["value"], cardPlayer2["value"] === "p1")) {
    player1["wonPile"].push(cardPlayer1, cardPlayer2);
  } else if (
    compareCards(cardPlayer1["value"], cardPlayer2["value"] === "p2")
  ) {
    player2["wonPile"].push(cardPlayer1, cardPlayer2);
  } else if (
    compareCards(cardPlayer1["value"], cardPlayer2["value"] === "WAR")
  ) {
    cardPlayer1["wonPile"].push(cardPlayer1);
    cardPlayer2["wonPile"].push(cardPlayer2);
  }
}
