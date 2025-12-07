import playRound from './gameLogic/playRound.js';
import initGmae from './gameLogic/initGame.js';

function App() {
  console.log('wellcom to WAR GAME');
  let arryeAndCards = initGmae();
  let p1 = arryeAndCards['player_1'];
  let p2 = arryeAndCards['player_2'];
  let deck = arryeAndCards['deck'];
  let game = true;
  while (game) {
    if (p1['hand'].length === 0) {
      break;
    }
    playRound(p1, p2);
  }
  if (p1['wonPile'].length > p2['wonPile'].length) {
    console.log(`summery:
        player 1 have ${p1['wonPile'].length} cards.
        player 2 have ${p2['wonPile'].length} cards.
        player 1 win!`);
  } else if (p2['wonPile'].length > p1['wonPile'].length) {
    console.log(`summery:
        player 1 have ${p1['wonPile'].length} cards.
        player 2 have ${p2['wonPile'].length} cards.
        player 2 win!`);
  } else if (p2['wonPile'].length === p1['wonPile'].length) {
    console.log(`summery:
        player 1 have ${p1['wonPile'].length} cards.
        player 2 have ${p2['wonPile'].length} cards.
        its Draw!`);
  }
}
App();
