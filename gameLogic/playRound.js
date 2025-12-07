import compareCards from '../utils/compareCards.js';
export default function playRound(player1, player2) {
  console.log(`player 1 card: ${player1['hand'][0]['value']}
    plaer 2 card: ${player2['hand'][0]['value']}`);
  let cardPlayer1 = player1['hand'].pop(0);
  let cardPlayer2 = player2['hand'].pop(0);
  if (compareCards(cardPlayer1['value'], cardPlayer2['value'] === 'p1')) {
    player1['wonPile'].push(cardPlayer1, cardPlayer2);
    console.log('player 1 take the round');
  } else if (
    compareCards(cardPlayer1['value'], cardPlayer2['value'] === 'p2')
  ) {
    player2['wonPile'].push(cardPlayer1, cardPlayer2);
    console.log('player 2 take the round');
  } else if (
    compareCards(cardPlayer1['value'], cardPlayer2['value'] === 'WAR')
  ) {
    cardPlayer1['wonPile'].push(cardPlayer1);
    cardPlayer2['wonPile'].push(cardPlayer2);
    console.log('Draw');
  }
}
