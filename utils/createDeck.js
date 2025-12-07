import createCard from './createCard.js';

export default function createDeck() {
  const listOfCards = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ];
  const listOfSuites = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

  let deck = [];

  for (let card = 0; card < listOfCards.length; card++) {
    for (let suite = 0; suite < listOfSuites.length; suite++) {
      deck.push(createCard(listOfCards[card], listOfSuites[suite]));
    }
  }
  return deck;
}
