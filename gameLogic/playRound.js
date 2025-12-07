import compareCards from '../utils/compareCards.js';
export default function playRound(player1, player2) {
  let cardPlayer1 = player1['hand'].pop(0);
  let cardPlayer2 = player2['hand'].pop(0);
  console.log(`player 1 card: ${cardPlayer1['value']}
    player 2 card: ${cardPlayer2['value']}`);

  if (compareCards(cardPlayer1['value'], cardPlayer2['value']) === 'p1') {
    player1['wonPile'].push(cardPlayer1, cardPlayer2);
    console.log('player 1 take the round');
  } else if (
    compareCards(cardPlayer1['value'], cardPlayer2['value']) === 'p2'
  ) {
    player2['wonPile'].push(cardPlayer1, cardPlayer2);
    console.log('player 2 take the round');
  } else if (
    compareCards(cardPlayer1['value'], cardPlayer2['value']) === 'WAR'
  ) {
    player1['wonPile'].push(cardPlayer1);
    player2['wonPile'].push(cardPlayer2);
    console.log('Draw');
  }
}
