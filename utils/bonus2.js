export default function bonus2(player1, player2) {
  let player1Count = 0;
  let Player2Count = 0;
  for (let i = 0; i < player1["wonPile"].length; i++) {
    if (player1["wonPile"][i]["suite"] === "Hearts") {
      player1Count++;
    } else if (player2["wonPile"][i]["suite"] === "Hearts") {
      Player2Count++;
    }
  }
  if (player1Count > Player2Count) {
    return "!!! player 1 is the winner !!!";
  } else if (player1Count < Player2Count) {
    return "!!! player 2 is the winner !!!";
  } else if (player1Count === Player2Count) {
    return "its a draw!";
  }
}
