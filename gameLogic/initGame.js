import createPlayer from './createPlayer.js';
import shuffle from '../utils/shuffle.js';
import createDeck from '../utils/createDeck.js';

export default function initGmae() {
  const player1 = createPlayer('p1');
  const player2 = createPlayer();
  let newDeck = createDeck();
  newDeck = shuffle(newDeck);
  player1['hand'] = newDeck.slice(0, newDeck.length / 2);
  player2['hand'] = newDeck.slice(newDeck.length / 2, newDeck.length);
  let gameList = {
    deck: newDeck,
    player_1: player1,
    player_2: player2,
  };
  return gameList;
}
