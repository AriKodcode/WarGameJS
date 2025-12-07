import compareCards from "./compareCards.js";

export default function bonusLevel(player1, player2) {
  if (player1["hand"].length > 0) {
    let count = 0;
    let warCards = [];

    while (player1["hand"].length > 0 && count < 3) {
      warCards.push(player1["hand"].pop(0));
      warCards.push(player2["hand"].pop(0));
      count++;
    }

    let cardPlayer1 = player1["hand"].pop(0);
    let cardPlayer2 = player2["hand"].pop(0);

    if (compareCards(cardPlayer1["value"], cardPlayer2["value"]) === "p1") {
      player1["wonPile"].push(cardPlayer1, cardPlayer2);
      player1.push(warCards);
    } else if (
      compareCards(cardPlayer1["value"], cardPlayer2["value"]) === "p2"
    ) {
      player2["wonPile"].push(cardPlayer1, cardPlayer2);
      player2.push(warCards);
    } else if (
      compareCards(cardPlayer1["value"], cardPlayer2["value"]) === "WAR"
    ) {
      return bonusLevel;
    }
  } else {
  }
}
